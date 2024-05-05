/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "./frames";

const MAX_RANDOM_NUMBER = 3000;
const BASE_URI = "https://api.arcadians.io/"
const RENDERER_URL = "https://ffc-backend-renderer.vercel.app/api/image/"; // "http://localhost:3001/api/image/"; // "https://ora-backend-renderer.vercel.app/api/image/"
const NEXT_PUBLIC_HOST = process.env.NEXT_PUBLIC_HOST;
const ROUTE = "/armor";

const frameHandler = frames(async (ctx) => {

  const heads = [
    "Black Bandana",
    "AR Goggles",
    "Cyber Mask",
    "Blonde Bandana",
    "Travis Head",
    "Wanderer",
    "Long Blonde Hair",
    "Soldier Brown Hair",
    "Viking Helmet",
    "Sakura Bandana",
    "Cat Ears",
    "Soldier Blonde Hair",
    "Brown Cat",
    "Headset",
    "Orange Hair With Pink Glasses",
    "Red Bandana",
    "Messy Black Hair",
    "Blonde Hero",
    "Orange Hair",
    "Brown Hair",
    "Bald Hair",
    "Blonde Bun",
    "White Elven Hair",
    "Ombre Green Long",
    "Ombre Green Short",
    "Light Blond Hair",
    "High Pony",
    "Mohawk Data Cables",
    "Wild Hair",
    "Tomb Raider Hair",
    "Mechanic Brown Rat",
    "Rat Tail",
    "Trinity Hair",
    "Short White Hair",
    "Green Pony",
    "Red Head Pony",
    "Powered Up Hair",
    "Buzzcut",
    "Elven Hair",
    "Blonde Buzzcut",
    "Dystopian Mohawk",
    "Cool Hair",
    "Protag Hair",
    "Houwar",
    "Metroid Helmet",
    "Black Band",
    "White Band",
    "Centurion Helmet",
    "Green Hoodie",
    "Black Hoodie",
    "Sorcerer Hat",
    "Purple Hood",
    "Green Hood",
    "Gray Hood",
    "Bomber Helm",
    "Master Chief Helmet",
    "Sci-Fi Helmet",
    "Beetle Helmet",
    "Knight Helmet",
    "Male Closed Helmet",
    "Skull Helmet",
    "Helmet Plume",
    "Dark Knight Helmet",
    "Lich Skull",
    "Visor",
    "Ichigo Mask",
    "Law Helm",
    "Samurai Helmet",
    "Oni Mask",
    "Ninja Mask"
  ]

  const tops = [
    "Mage Robe",
    "White Robe",
    "Purple Robe",
    "Academy Robe",
    "Lich Robe",
    "Common Robe",
    "Master Chief",
    "Starcraft Marine",
    "Sci-Fi Armor",
    "Travis Jacket",
    "Blue Sci-Fi Armor",
    "Silver Armor",
    "Cracked Armor",
    "Gold Armor",
    "Dragon Armor",
    "Knight Armor",
    "Tank Top Gold Chain",
    "Blue Shirt",
    "Red Shirt",
    "Black Tank",
    "Orange Tank",
    "Blue Tank",
    "Green Tank",
    "Brown Shirt",
    "Ichigo Robe",
    "Tuxedo",
    "Akatsuki Robe",
    "Red Ninja Armor",
    "Vest",
    "Ninja Armor",
    "Challenger Armor",
    "Red Priestess Armor",
    "Priestess Armor",
    "Bloodmage Armor",
    "Green Hoodie Armor",
    "Yellow Robe",
    "Priestess Robe",
    "Turtleneck Armor",
    "Formal Tuxedo Armor",
    "Sports Bra",
    "Emo Goth Punk Armor",
    "Cyberpunk Armor",
    "Mechanic Sports Bra",
    "Deedlit Armor",
    "Kerrigan Armor",
    "Samurai Armor",
    "Barbarian Armor",
    "Amazon Armor",
    "Witcher Tunic",
    "Ranger Tunic",
    "Green Vest",
    "Black Leather Jacket",
    "Tomb Raider Armor",
    "Soldier Sleeveless Armor",
    "Black Hoodie Armor",
    "Orange Armor",
    "Kimono Armor",
    "Nier Automata Armor",
    "Kunimitsu Armor",
    "Red Armor",
    "Bandage Armor"
  ]

  const bottoms = [
    "Challenger Leggings",
    "Nier Automata Legging",
    "Kerrigan Leggings",
    "Emo Goth Punk Legging",
    "Greensocks",
    "Khaki Shorts",
    "Boxers",
    "Green Tactical",
    "Deedlit Leggings",
    "Priestess Steel Boots",
    "Cyberpunk Legging",
    "Black Leather Leggings",
    "Orange Skirt",
    "Gold Boots",
    "Midnight Army",
    "Lich Bottom",
    "Green Legging",
    "Ichigo Pants",
    "Formal Tuxedo Legging",
    "Darkmage Dress",
    "Sci-Fi  Pants",
    "Samurai Leggings",
    "Kunimitsu Legging",
    "Orange Army",
    "Green Army",
    "Camo Army",
    "Ranger Leggings",
    "Amazon Leggings",
    "Silver Boots",
    "Red Boots",
    "Barbarian Leggings",
    "Black Pants",
    "Metroid Leggings",
    "Knight Pants",
    "Hero Boots",
    "Blue Army",
    "Green Pants",
    "Mechanic Blue Legging",
    "Red Ninja Pants",
    "Denim Pants",
    "Purple Pants",
    "Fishnets Legging",
    "Witcher Leggings",
    "Dragon Pants",
    "Blue Legging",
    "Travis Pants",
    "Ninja Pants",
    "Blue Sci-fi Pants",
    "Priestess Robe Dress",
    "Yellow Robe Armor",
    "Bloodmage Dress",
    "Samurai Legging",
    "Soldier Army Leggings",
    "Kimono  Legging",
    "White  Leggings",
    "Cargo Pants",
    "Master Chief Pants"
  ]

  let tokenId = ctx.state.tokenId;
  let newScreen = ctx.state.screen;
  let imageSrc = NEXT_PUBLIC_HOST + "/intro.png";
  
  let usedHead = ctx.searchParams.head;
  if (ctx.searchParams.op === "head") {
    usedHead = heads[Math.floor(Math.random() * heads.length)];
  }

  let usedTop = ctx.searchParams.top;
  if (ctx.searchParams.op === "top") {
    usedTop = tops[Math.floor(Math.random() * tops.length)];
  }

  let usedBottom = ctx.searchParams.bottom;
  if (ctx.searchParams.op === "bottom") {
    usedBottom = bottoms[Math.floor(Math.random() * bottoms.length)];
  }


  let queryString = "lefthand=" + ctx.searchParams.lefthand + "&" +
  "righthand=" + ctx.searchParams.righthand + "&" +
  "head=" + usedHead + "&" +
  "mouth=" + ctx.searchParams.mouth + "&" +
  "eyes=" + ctx.searchParams.eyes + "&" +
  "top=" + usedTop + "&" +
  "bottom=" + usedBottom + "&" +
  "skin=" + ctx.searchParams.skin;




  let displayText = "Choose Hair/Hat, Top or Bottom"

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
      <Button action="post" target={{pathname: ROUTE, query: queryString + "&op=head"}}>
      🎩  
      </Button>,
      <Button action="post" target={{pathname: ROUTE, query: queryString + "&op=top"}}>
      👚
      </Button>, 
      <Button action="post" target={{pathname: ROUTE, query: queryString + "&op=bottom"}}>
      👖
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