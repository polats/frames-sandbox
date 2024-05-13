import {
  NextServerPageProps
} from "frames.js/next/server";
import Link from "next/link";
import { currentURL } from "./utils";

type State = {
  active: string;
  total_button_presses: number;
};

import { fetchMetadata } from "frames.js/next";
import type { Metadata } from "next";
import { createDebugUrl } from "./debug";
import { vercelURL } from "./utils";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Spy on Stump",
    description: "Submission for Redstone Composability Hackathon",
    other: {
      ...(await fetchMetadata(
        new URL(
          "/frames",
          vercelURL() || "http://localhost:3000"
        )
      )),
    },
  };
}

// This is a react server component only
export default async function Home({ searchParams }: NextServerPageProps) {
  const url = currentURL("/");

  // then, when done, return next frame
  return (
    <div className="p-4">
      {"Hello Employee. You should not be here."}<br /><br />
      {"The "}
      <Link href="https://warpcast.com/polats/0xd4e6075c" className="underline">Spy on Stump Service (SSS)</Link>

      
      {" can only be used via "} 
      <Link href="https://warpcast.com" className="underline">Warpcast</Link>
      <br/><br />

      {"SERVICE ANNOUNCEMENT:"}<br/><br />

      {"Due to popular demand, the SSS service occasionally goes down for maintenance."}<br/>
      {"TCM Personnel can debug the service "}
      <Link href={createDebugUrl(url)} className="underline">
        HERE
      </Link>{" "}<br/><br />

      {"ALERT:"}<br/><br />

      <Link href="https://thiscursedmachine.fun" className="underline">$BUGS $BUGS $BUGS</Link>

      
      <div style={{paddingTop: 20}}>
        <a href="https://thiscursedmachine.fun" className="underline">
        <img src="/tcm.jpg" className="w-1/2" />      
        </a>
      </div>
    </div>
  );
}
