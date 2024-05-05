/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "./frames";

const MAX_RANDOM_NUMBER = 3000;
const BASE_URI = "https://api.arcadians.io/"
const RENDERER_URL = "https://ffc-backend-renderer.vercel.app/api/image/"; // "http://localhost:3001/api/image/"; // "https://ora-backend-renderer.vercel.app/api/image/"
const NEXT_PUBLIC_HOST = process.env.NEXT_PUBLIC_HOST;
const ROUTE = "/base";

const frameHandler = frames(async (ctx) => {

  const eyes = [
    "Eyepatch",
    "Glasses and Eyebrows",
    "Shellshocked",
    "White Glasses",
    "Scar",
    "Glasses",
    "Bushy",
    "Shades",
    "Happy",
    "Sneaky",
    "Angry",
    "Bright-eyed",
    "Poison Stare",
    "Fiery Stare",
    "Icy Stare",
    "Bushy Eyebrows",
    "Sunglasses",
    "Original",
    "Winking",
    "Uwu Eyes",
    "Mischief"
  ]

  const mouths = [
    "Cigar",
    "Frowning",
    "Flat",
    "Shouting",
    "Smiling",
    "Beard",
    "Moustache",
    "Fullbeard",
    "Okay",
    "Very Sad",
    "Sad",
    "Toothless",
    "Closed Smile",
    "Little Smile",
    "Smile",
    "One Fang",
    "Vampire Fangs",
    "Uwi Mouth",
    "Pucker"
  ]

  const skins = [
    "Orc",
    "Dark",
    "Metal",
    "Gold",
    "Zombie",
    "Light",
    "F Light"
  ]

  let tokenId = ctx.state.tokenId;
  let newScreen = ctx.state.screen;
  let imageSrc = NEXT_PUBLIC_HOST + "/intro.png";
  
  let usedEyes = ctx.searchParams.eyes;
  if (ctx.searchParams.op === "eyes") {
    usedEyes = eyes[Math.floor(Math.random() * eyes.length)];
  }

  let usedMouth = ctx.searchParams.mouth;
  if (ctx.searchParams.op === "mouth") {
    usedMouth = mouths[Math.floor(Math.random() * mouths.length)];
  }

  let usedSkin = ctx.searchParams.skin;
  if (ctx.searchParams.op === "skin") {
    usedSkin = skins[Math.floor(Math.random() * skins.length)];
  }


  let queryString = "lefthand=" + ctx.searchParams.lefthand + "&" +
  "righthand=" + ctx.searchParams.righthand + "&" +
  "head=" + ctx.searchParams.head + "&" +
  "mouth=" + usedMouth + "&" +
  "eyes=" + usedEyes + "&" +
  "top=" + ctx.searchParams.top + "&" +
  "bottom=" + ctx.searchParams.bottom + "&" +
  "skin=" + usedSkin;




  let displayText = "Choose Eye, Mouth or Skin"

  tokenId =  Math.floor(Math.random() * MAX_RANDOM_NUMBER);
  newScreen = "Customize";
  imageSrc = RENDERER_URL + tokenId + "?" + queryString;

  return {
    image: imageSrc,

    imageOptions: {
      aspectRatio: "1:1",
    },
    
    textInput: displayText,
    
    buttons: [
      <Button action="post" target={{pathname: ROUTE, query: queryString + "&op=eyes"}}>
      👀  
      </Button>,
      <Button action="post" target={{pathname: ROUTE, query: queryString + "&op=mouth"}}>
      👄
      </Button>, 
      <Button action="post" target={{pathname: ROUTE, query: queryString + "&op=skin"}}>
      🧬
      </Button >,
      <Button action="post" target={{pathname: "/customize",  query: queryString + "&op=back"}}>
      🔙
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