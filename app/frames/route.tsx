/* eslint-disable react/jsx-key */
import { frames } from "./frames";
import { Button } from "frames.js/next";
const NEXT_PUBLIC_HOST = process.env.NEXT_PUBLIC_HOST;



const handler = frames(async (ctx) => {

  let imageSrc = NEXT_PUBLIC_HOST + "/tcm.jpg";

  if (ctx.result && ctx.result.error) {
    imageSrc = 
    <div style={
      { 
        width: "100%", 
        height: "100%",
        backgroundColor: 'black', 
        color: 'white', 
        padding: 32, 
        fontSize: 50
    }}>
      {ctx.result.error}
    </div>
  }

  else if (ctx.result && ctx.result.machinesInPod) {
    imageSrc = 
    <div style={
      { 
        width: "100%", 
        height: "100%",
        backgroundColor: 'black', 
        color: 'white', 
        padding: 32, 
        fontSize: 50,
        display: 'flex'
    }}>
      {
        // show each machine in pod as a div
        ctx.result.machinesInPod.map((machine, i) => {
          return <div key={i}>{" [ " + machine + " ] "}</div>
        })
      }
    </div>
  }

  return {
    image: imageSrc,
    textInput: "paste stump address (0x...)",
    buttons: [
      // With query params
      <Button
        action="post"
      >
        SPY ON STUMP 👁️👁️
      </Button>,
    ],
  };
});

export const GET = handler;
export const POST = handler;
