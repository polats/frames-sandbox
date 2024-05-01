/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "./frames";

const MAX_RANDOM_NUMBER = 3000;
const BASE_URI = "https://api.arcadians.io/"

const frameHandler = frames(async (ctx) => {
  const counter = ctx.message ? 
    ctx.searchParams.op === "+" ? 
    Math.floor(Math.random() * MAX_RANDOM_NUMBER) : ctx.state.counter - 1 : ctx.state.counter

  const url = BASE_URI + counter;
  
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
    image: data["image"],

    imageOptions: {
      aspectRatio: "1:1",
    },
    
    textInput: "Say something",
    
    buttons: [
      <Button action="post" target={{pathname: "/", query: {op: "+"}}}>
        Random
      </Button>,
      <Button action="post" target={{pathname: "/", query: {op: "-"}}}>
        Decrement
      </Button >,
        <Button action="tx" target="/tx-data">
        Mint a Cow
      </Button>      
    ],
    state: { 
      counter: counter
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