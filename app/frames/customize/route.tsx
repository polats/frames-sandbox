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


  tokenId =  Math.floor(Math.random() * MAX_RANDOM_NUMBER);
  newScreen = "Customize";
  imageSrc = RENDERER_URL + tokenId;

  return {
    image: imageSrc,

    imageOptions: {
      aspectRatio: "1:1",
    },
    
    textInput: "Name Your Character",
    
    buttons: [
        <Button action="post" target={{pathname: "/customize", query: {op: "🎲"}}}>
        🎩
      </Button>,
      <Button action="post" target={{pathname: "/customize", query: {op: "🎲"}}}>
      👕
      </Button>, 
      <Button action="post" target={{pathname: "/customize", query: {op: "🎲"}}}>
      👖
      </Button >,
        <Button action="tx" target="/tx-data">
        Mint!
      </Button>      
    ],
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
</div>, */

// const url = BASE_URI + tokenId;
  
// let data: { image: string } = {
//   image: ""
// };

// await fetch(url)
// .then(function(response) {
//   return response.json();
// })
// .then(function(myJson) {
//   data=myJson
// });  


}