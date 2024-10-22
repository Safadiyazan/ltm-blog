import { CMS_NAME } from "@/lib/constants";
import Link from "next/link";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h4 className="text-5xl md:text-5xl font-bold tracking-tighter leading-tight md:pr-8">
        Reservoir.
      </h4>

      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Promoting open science to all.
      </h4>
      <a
        href={`https://forms.gle/ZtFDGzWedmtCYYSK7`}
        className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
      >
        Entity Submission
      </a>
    </section>
  );
}
