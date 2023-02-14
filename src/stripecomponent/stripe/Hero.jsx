import React from "react";
import { useGlobalContext } from "./Context";
import phoneImg from "../images/phone.svg";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section>
      <div className="md:flex  items-center md:w-4/6 mx-auto gap-4">
        <article className="md:w-3/5 w-3/4 mx-auto flex flex-col gap-3">
          <h1 className="lg:text-6xl md:text-5xl text-4xl font-[700]">
            Payments <br /> infrastructure <br />
            for the internet
          </h1>
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <div>
            <button className="bg-black text-white px-3 py-1 rounded-sm ">
              Start Now
            </button>
          </div>
        </article>
        <article className="md:block hidden">
          <img src={phoneImg} width="90%" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
