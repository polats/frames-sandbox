/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "./frames";

const MAX_RANDOM_NUMBER = 3000;
const BASE_URI = "https://api.arcadians.io/"
const RENDERER_URL = "https://ffc-backend-renderer.vercel.app/api/image/"; // "http://localhost:3001/api/image/"; // "https://ora-backend-renderer.vercel.app/api/image/"
const NEXT_PUBLIC_HOST = process.env.NEXT_PUBLIC_HOST;

const frameHandler = frames(async (ctx) => {
  let tokenId = ctx.state.tokenId;
  let newScreen = ctx.state.screen;
  let imageSrc = NEXT_PUBLIC_HOST + "/intro.png";
  let queryString = 
  "lefthand=" + (ctx.searchParams.lefthand ?? ctx.state.lefthand ?? "Rifle L") + "&" +
  "righthand=" + (ctx.searchParams.righthand ?? ctx.state.righthand ?? "Tomb Raider Pistol R") + "&" +
  "head=" + (ctx.searchParams.head ?? ctx.state.head ?? "Mechanic Brown Rat")  + "&" +
  "mouth=" + (ctx.searchParams.mouth ?? ctx.state.mouth ?? "Little Smile") + "&" +
  "eyes=" + (ctx.searchParams.eyes ?? ctx.state.eyes ?? "Mischief") + "&" +
  "top=" + (ctx.searchParams.top ?? ctx.state.top ?? "Ranger Tunic") + "&" +
  "bottom=" + (ctx.searchParams.bottom ?? ctx.state.bottom ?? "White  Leggings") + "&" +
  "skin=" + (ctx.searchParams.skin ?? ctx.state.skin ?? "Dark");




  tokenId =  Math.floor(Math.random() * MAX_RANDOM_NUMBER);
  newScreen = "Customize";
  imageSrc = RENDERER_URL + tokenId + "?" + queryString;
 

  return {
    image: imageSrc,

    imageOptions: {
      aspectRatio: "1:1",
    },
    
    textInput: "Select A Part Type",
    
    buttons: [
      <Button action="post" target={{pathname: "/armor", query: queryString}}>
      👕
      </Button>, 
      <Button action="post" target={{pathname: "/weapon", query: queryString}}>
      ⚔️
      </Button >,
        <Button action="post" target={{pathname: "/base", query: queryString}}>
        🙂
      </Button>,
        <Button action="tx" target="/tx-data">
        Mint!
      </Button>      
    ],
    state: { 
      screen: newScreen,
      tokenId: tokenId,
      lefthand: ctx.state.lefthand,
      righthand: ctx.state.righthand,
      head: ctx.state.head,
      mouth: ctx.state.mouth,
      eyes: ctx.state.eyes,
      top: ctx.state.top,
      bottom: ctx.state.bottom,
      skin: ctx.state.skin
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