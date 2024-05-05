import { createFrames } from "frames.js/next";

type State = {
  screen: string;
  tokenId: number;
  lefthand: string;
  righthand: string;
  head: string;
  mouth: string;
  eyes: string;
  top: string;
  bottom: string;
  skin: string;
};

export const frames = createFrames<State>({
  basePath: "/frames",
  initialState: { 
    screen: "Intro",
    tokenId: 0,
    lefthand: "Rifle L",
    righthand: "Tomb Raider Pistol R",
    head: "Mechanic Brown Rat",
    mouth: "Little Smile",
    eyes: "Mischief",
    top: "Ranger Tunic",
    bottom: "White  Leggings",
    skin: "Dark"
  },
});
