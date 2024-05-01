import { TransactionTargetResponse } from "frames.js";
import { getFrameMessage } from "frames.js/next/server";
import { NextRequest, NextResponse } from "next/server";
import {
  Abi,
  createPublicClient,
  encodeFunctionData,
  getContract,
  http,
} from "viem";
import { optimism } from "viem/chains";
import { storageRegistryABI } from "./contracts/storage-registry";
import { onchainCowABI } from "./contracts/onchaincow";

export async function POST(
  req: NextRequest
): Promise<NextResponse<TransactionTargetResponse>> {
  const json = await req.json();

  const frameMessage = await getFrameMessage(json);

  if (!frameMessage) {
    throw new Error("No frame message");
  }

  const STORAGE_REGISTRY_ADDRESS = "0x00000000fcCe7f938e7aE6D3c335bD6a1a7c593D";
  const NFT_ADDRESS = "0x09B35270bf8f1Bb782703796D4070BDAd05Cbbab";

  // Get current storage price
  const units = 1n;

  const calldata = encodeFunctionData({
    abi: storageRegistryABI,
    functionName: "rent",
    args: [BigInt(frameMessage.requesterFid), units],
  });

  const calldata2 = encodeFunctionData({
    abi: onchainCowABI,
    functionName: "mint",
    args: [STORAGE_REGISTRY_ADDRESS, 1]
  });


  const publicClient = createPublicClient({
    chain: optimism,
    transport: http(),
  });

  const storageRegistry = getContract({
    address: STORAGE_REGISTRY_ADDRESS,
    abi: storageRegistryABI,
    client: publicClient,
  });

  const unitPrice = await storageRegistry.read.price([units]);

  return NextResponse.json({
    chainId: "eip155:84532", // OP Mainnet 10
    method: "mint",
    params: {
      abi: onchainCowABI as Abi,
      to: NFT_ADDRESS,
      data: calldata2,
      value: "0",
    },
  });  


  // return NextResponse.json({
  //   chainId: "eip155:10", // OP Mainnet 10
  //   method: "eth_sendTransaction",
  //   params: {
  //     abi: storageRegistryABI as Abi,
  //     to: STORAGE_REGISTRY_ADDRESS,
  //     data: calldata,
  //     value: unitPrice.toString(),
  //   },
  // });
}
