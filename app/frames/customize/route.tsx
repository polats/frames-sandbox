/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "./frames";

const MAX_RANDOM_NUMBER = 3000;
const BASE_URI = "https://api.arcadians.io/"
const RENDERER_URL = "http://localhost:3001/api/image/"; // "https://ora-backend-renderer.vercel.app/api/image/"
const NEXT_PUBLIC_HOST = process.env.NEXT_PUBLIC_HOST;

const frameHandler = frames(async (ctx) => {
  let tokenId = ctx.state.tokenId;
  let newScreen = ctx.state.screen;
  let imageSrc = NEXT_PUBLIC_HOST + "/intro.png";


  console.log(ctx.state);

  tokenId =  Math.floor(Math.random() * MAX_RANDOM_NUMBER);
  newScreen = "Customize";
  imageSrc = RENDERER_URL + tokenId + "?" + 
  "lefthand=" + ctx.state.lefthand + "&" +
    "righthand=" + ctx.state.righthand + "&" +
    "head=" + ctx.state.head + "&" +
    "mouth=" + ctx.state.mouth + "&" +
    "eyes=" + ctx.state.eyes + "&" +
    "top=" + ctx.state.top + "&" +
    "bottom=" + ctx.state.bottom + "&" +
    "skin=" + ctx.state.skin;


  return {
    image: imageSrc,

    imageOptions: {
      aspectRatio: "1:1",
    },
    
    textInput: "Name Your Character",
    
    buttons: [
        <Button action="post" target={{pathname: "/base", query: {op: "🎲"}}}>
        🙂
      </Button>,
      <Button action="post" target={{pathname: "/armor", query: {op: "🎲"}}}>
      👕
      </Button>, 
      <Button action="post" target={{pathname: "/weapon", query: {op: "🎲"}}}>
      ⚔️
      </Button >,
        <Button action="tx" target="/tx-data">
        Mint!
      </Button>      
    ],
    state: { 
      screen: newScreen,
      tokenId: tokenId,
      lefthand: "Rifle L",
      righthand: "Tomb Raider Pistol R",
      head: "Mechanic Brown Rat",
      mouth: "Little Smile",
      eyes: "Mischief",
      top: "Ranger Tunic",
      bottom: "White  Leggings",
      skin: "Dark"      
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