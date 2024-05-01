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
import { optimism, baseSepolia } from "viem/chains";
import { onchainCowABI } from "./contracts/onchaincow";

export async function POST(
  req: NextRequest
): Promise<NextResponse<TransactionTargetResponse>> {
  const json = await req.json();

  const frameMessage = await getFrameMessage(json);

  if (!frameMessage) {
    throw new Error("No frame message");
  }

  const calldata = encodeFunctionData({
    abi: onchainCowABI,
    functionName: "mint"
  });

  const publicClient = createPublicClient({
    chain: baseSepolia,
    transport: http(),
  });

  const NFT_ADDRESS = "0x19b9E408ffCc239fAcc616fd709dEf6ad308d1a9";

  // const onchainCow = getContract({
  //   address: NFT_ADDRESS,
  //   abi: onchainCowABI,
  //   client: publicClient,
  // });

  return NextResponse.json({
    chainId: "eip155:84532", // BaseSepolia 
    method: "eth_sendTransaction",
    params: {
      abi: onchainCowABI as Abi,
      to: NFT_ADDRESS,
      data: calldata,
      value: "0"
    },
  });
}
