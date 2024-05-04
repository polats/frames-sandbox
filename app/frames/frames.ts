import { createFrames } from "frames.js/next";

type State = {
  screen: string;
  tokenId: number;
};

export const frames = createFrames<State>({
  basePath: "/frames",
  initialState: { 
    screen: "Intro",
    tokenId: 0 
  },
});
