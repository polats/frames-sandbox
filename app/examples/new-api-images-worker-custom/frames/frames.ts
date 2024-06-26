import { imagesWorkerMiddleware } from "frames.js/middleware/images-worker";
import { createFrames } from "frames.js/next";

export const frames = createFrames({
  basePath: "/examples/new-api-images-worker-custom",
  middleware: [
    imagesWorkerMiddleware({
      imagesRoute: "/images",
      secret: "MY_SECRET",
    }),
  ],
});
