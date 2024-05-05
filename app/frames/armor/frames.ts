import { createFrames } from "frames.js/next";

type State = {
  screen: string;
  tokenId: number;
  lefthand: string | null;
  righthand: string | null;
  head: string | null;
  mouth: string | null;
  eyes: string | null;
  top: string | null;
  bottom: string | null;
  skin: string | null;
};

export const frames = createFrames<State>({
  basePath: "/frames",
  initialState: { 
    screen: "Intro",
    tokenId: 0,
    lefthand: null,
    righthand: null,
    head: null,
    mouth: null,
    eyes: null,
    top: null,
    bottom: null,
    skin: null,
  },
});
