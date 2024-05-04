/* eslint-disable react/jsx-key */
import { frames } from "./frames";
import { Button } from "frames.js/next";
const NEXT_PUBLIC_HOST = process.env.NEXT_PUBLIC_HOST;

const handler = frames(async () => {
  return {
    image:  NEXT_PUBLIC_HOST + "/intro.png",
    imageOptions: {
      aspectRatio: "1:1",
    },
    buttons: [
      // With query params
      <Button
        action="post"
        target={{ pathname: "/customize", query: { foo: "bar" } }}
      >
        START 🚀
      </Button>,
    ],
  };
});

export const GET = handler;
export const POST = handler;
