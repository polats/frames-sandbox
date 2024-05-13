import { createFrames } from "frames.js/next";
import { FramesMiddleware } from "frames.js/types";
import { isAddress } from "viem";

type TCMContext = 
  { 
    result: any,
    stumpAddress?: string
  };

const SPY_API = 
  "https://tcm-api.onrender.com/machines/"
  //"http://localhost:4000/machines/"


const machinesMiddleware: FramesMiddleware<any, TCMContext> = async (
  ctx,
  next
) => {

  // if no button pressed, this is first run so skip calling the API
  if (!ctx.pressedButton) {
    return next();
  }

  const stumpAddress = ctx.message?.inputText;

  if (!isAddress(stumpAddress)) {
    return next(
      {
        result: {
          error: "Invalid Employee Number"
        }
      }
    );
  }

  try {
    const res = await fetch(
      SPY_API + stumpAddress
    );

    const result = await res.json();

    // const res = await fetch(
    //   "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
    // );

    // const data = await res.json();

    // const {
    //   ethereum: { usd: ethPrice },
    // } = await res.json();


    return next({ result, stumpAddress });

  } catch (e) {
    console.error("Error fetching machines:", e);
  }
  return next();
};

export const frames = createFrames({
  basePath: "/frames",
  initialState: {
    pageIndex: 0,
  },
  middleware: [machinesMiddleware],
});
