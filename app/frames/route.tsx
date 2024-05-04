/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "./frames";


const MAX_RANDOM_NUMBER = 3000;
const BASE_URI = "https://api.arcadians.io/"
const RENDERER_URL = "https://ora-backend-renderer.vercel.app/api/image/"
const NEXT_PUBLIC_HOST = process.env.NEXT_PUBLIC_HOST;

const frameHandler = frames(async (ctx) => {
  let tokenId = ctx.state.tokenId;
  let newScreen = ctx.state.screen;
  let imageSrc = NEXT_PUBLIC_HOST + "/intro.png";

  let buttonsByScreen = {
    "Intro": [
      <Button action="post" target={{pathname: "/", query: {op: "🎲"}}}>
        START 🚀
      </Button>      
    ],

    "Customize": [
      <Button action="post" target={{pathname: "/", query: {op: "🎲"}}}>
        🎩
      </Button>,
      <Button action="post" target={{pathname: "/", query: {op: "🎲"}}}>
      👕
      </Button>, 
      <Button action="post" target={{pathname: "/", query: {op: "🎲"}}}>
      👖
      </Button >,
        <Button action="tx" target="/tx-data">
        Mint!
      </Button>      
    ],
  }

  let screenButtons = buttonsByScreen.Intro;
  let screenText = null;

  switch (ctx.searchParams.op) {
    case "🎲":
      tokenId =  Math.floor(Math.random() * MAX_RANDOM_NUMBER);
      newScreen = "Customize";
      imageSrc = RENDERER_URL + tokenId;
      screenButtons = buttonsByScreen.Customize;
      screenText = "Name your Character"
      break;
  }

  
  // const counter = ctx.message ? 
  //   ctx.searchParams.op === "+" ? 
  //   Math.floor(Math.random() * MAX_RANDOM_NUMBER) : ctx.state.tokenId - 1 : ctx.state.tokenId

  const url = BASE_URI + tokenId;
  
  let data: { image: string } = {
    image: ""
  };

 await fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    data=myJson
  });  
 

  return {
    image: imageSrc,

    imageOptions: {
      aspectRatio: "1:1",
    },
    
    textInput: screenText,
    
    buttons: screenButtons,
    state: { 
      screen: newScreen,
      tokenId: tokenId
    }
  }
})

export const GET = frameHandler;
export const POST = frameHandler;

{/* <div tw="flex flex-col">
<div tw="flex">frames.js starter</div>
{
  ctx.message?.inputText && 
  <div tw="flex">
    {`Input: ${ctx.message.inputText}`}
  </div>
}
<div tw="flex">Counter {counter}</div>
</div>, */}