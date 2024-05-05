/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "./frames";

const MAX_RANDOM_NUMBER = 3000;
const BASE_URI = "https://api.arcadians.io/"
const RENDERER_URL = "https://ffc-backend-renderer.vercel.app/api/image/"; // "http://localhost:3001/api/image/"; // "https://ora-backend-renderer.vercel.app/api/image/"
const NEXT_PUBLIC_HOST = process.env.NEXT_PUBLIC_HOST;
const ROUTE = "/weapon";

const frameHandler = frames(async (ctx) => {

  const lefthands = [
    "Shield L",
    "Potion L",
    "Mage Book L",
    "Spellbook L",
    "Wand L",
    "Lich Sword L",
    "Snake Staff L",
    "Energy Blade",
    "Travis Sword L",
    "Halo Rifle L",
    "Cybernetic Arm L",
    "Energy Sword L",
    "Gauntlet Cannon L",
    "Frostmourne L",
    "Gold Gloves L",
    "Knight Whip L",
    "Knigh Cross L",
    "Knight  Flaming Sword L",
    "Long Sword L",
    "Broadsword L",
    "Atomizer Bat L",
    "Soda Popper L",
    "Ammo Belt L",
    "Rocket Launcher L",
    "Flamethrower L",
    "Grenade Launcher L",
    "Sonic L",
    "Sword Ichigo L",
    "Cyber Punk Katana L",
    "Cypher sword L",
    "Mage Staff L",
    "Book L",
    "Priestess Chalice L",
    "Scept L",
    "Magical Quill L",
    "Glowing Scroll L",
    "Gowing Hands L",
    "Crystal Sword L",
    "Wrench L",
    "Battle Guitar L",
    "Pistol L",
    "Mobile Phone L",
    "Cyberpunk Sword L",
    "Cyberpunk Gun L",
    "Mechanic Screwdriver L",
    "Knight Sword L",
    "Knight Flaming Sword L",
    "Sword L",
    "Knight Cross L",
    "Scythe L",
    "Trident L",
    "Poison Sword L",
    "Flying Guillotine L",
    "Rifle L",
    "Crossbow L",
    "Tomb Raider Pistol L",
    "Soldier Rifle L",
    "Kunai L",
    "Shuriken L",
    "Gloves L2",
    "Gloves L",
    "Wakizashi L",
    "Iron Fan L",
    "Elecktra Sai L",
    "Claws L",
    "Samurai Katana L",
  ]

  const righthands = [
    "Mage Book R",
    "War Hammer R",
    "Scept R",
    "Magical Quill R",
    "Glowing Scroll R",
    "Glowing Hands R",
    "Mace R",
    "Priestess Hammer R",
    "Screwdriver R",
    "Mobile Phone R",
    "Battle Guitar R",
    "Cyberpunk Sword R",
    "Laptop Decker R",
    "Chainsaw R",
    "Trident R",
    "Poison Sword R",
    "Axe L",
    "Metroid Rifle R",
    "Staves R",
    "Crossbow R",
    "Tomb Raider Pistol R",
    "Soldier Rifle R",
    "Martini Glass R",
    "Wrench R",
    "Iron Fan R",
    "Claws R",
    "Cursed Katana R",
    "Elecktra Sai R",
    "Samurai Katana R",
    "Crystal Sword R",
    "Lich Sword R",
    "Knight Sword R",
    "Mage Staff R",
    "Potion Bottle R",
    "Mage Wand R",
    "Spellbook R",
    "Snake Staff R",
    "Energy Sword R",
    "Travis Sword R",
    "Halo beam R",
    "Buster Cannon R",
    "Cybernetic Arm R",
    "Rail Gun R",
    "Frostmourne R",
    "Broadsword R",
    "Gold Gloves R",
    "Long Sword R",
    "Gunlance R",
    "Buster Sword R",
    "Lance R",
    "Knight Shield R",
    "Atomizer Bat R",
    "Flying Guillotine R",
    "Soda Popper R",
    "Heavy Machine Gun R",
    "Desert Eagle R",
    "AWP R",
    "Sonic R",
    "Rifle R",
    "Scythe R",
    "Cyber Punk Katana R",
    "Ichigo sword R",
    "Cypher sword R",
    "Strider Sword R",
    "Shuriken R",
    "Martiini Glass R"
  ]


  let tokenId = ctx.state.tokenId;
  let newScreen = ctx.state.screen;
  let imageSrc = NEXT_PUBLIC_HOST + "/intro.png";
  
  let usedLeftHand = ctx.searchParams.lefthand;
  if (ctx.searchParams.op === "lefthand") {
    usedLeftHand = lefthands[Math.floor(Math.random() * lefthands.length)];
  }

  let usedRightHand = ctx.searchParams.righthand;
  if (ctx.searchParams.op === "righthand") {
    usedRightHand = righthands[Math.floor(Math.random() * righthands.length)];
  }


  let queryString = "lefthand=" + usedLeftHand + "&" +
  "righthand=" + usedRightHand + "&" +
  "head=" + ctx.searchParams.head + "&" +
  "mouth=" + ctx.searchParams.mouth + "&" +
  "eyes=" + ctx.searchParams.eyes + "&" +
  "top=" + ctx.searchParams.top + "&" +
  "bottom=" + ctx.searchParams.bottom + "&" +
  "skin=" + ctx.searchParams.skin;

  let displayText = "Choose Left or Right Weapon"

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
      <Button action="post" target={{pathname: ROUTE, query: queryString + "&op=righthand"}}>
      🫲
      </Button >,
      <Button action="post" target={{pathname: ROUTE, query: queryString + "&op=lefthand"}}>
      🫱
      </Button>,
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