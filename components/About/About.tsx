"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import jaeho from "../../public/assets/jaeho.jpg";
import nat from "../../public/assets/nat.png";
import Card from "../Card";
import Link from "next/link";

const About = () => {
  return (
    <section className="w-full">
      <p className="text-center text-2xl font-bold mb-10">
        Learn more about UHC@HOME
      </p>
      <div className="flex flex-row justify-center text-center gap-20">
        <Card
          header="Our Motivations"
          content={<div className="text-sm">Queue too long :(</div>}
          hasButton={false}
        ></Card>
        <Card
          header="Our Project Log"
          content={
            <div>
              <Link
                href="https://docs.google.com/document/d/1suMQAzlMDCM6jUfIWZu7__eeOEl6_sBdLZPNE8-vbx4/edit?usp=sharing"
                className="text-sm"
              >
                To learn more about our project, please click here!
              </Link>
            </div>
          }
          hasButton={false}
        ></Card>
        <Card
          header="Our GitHub Repo"
          content={
            <div>
              <Link
                href="https://github.com/itsNatTan/UHC-HOME"
                className="text-sm"
              >
                To see the code for yourself, please click here!
              </Link>
            </div>
          }
          hasButton={false}
        ></Card>
      </div>
      <p className="text-center text-2xl font-bold mt-20">
        Creators of UHC@HOME
      </p>
      <div className="flex flex-row gap-32">
        <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
          <div className="md:mt-2 md:w-1/2">
            <Image
              src={jaeho}
              alt="picture of Jaeho"
              width={325}
              height={325}
              className="rounded-full shadow-2xl"
            />
          </div>
          <div className="md:mt-2 md:w-3/5">
            <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
              Hi, I&#39;m Jaeho Jeong!
            </h1>
            <p className="text-lg mt-4 mb-6 md:text-2xl">
              I&#39;m a{" "}
              <span className="font-semibold text-teal-600">
                computer science student{" "}
              </span>
              at National University of Singapore.
            </p>
            <br />
            I am interested in front-end development!
            <br />
            <a
              href="https://github.com/jeong-jaeho"
              className="w-full mg-16 pt-3"
            >
              <img
                src="/assets/github.png"
                width="70"
                height="70"
                className="hover:-translate-y-1 transition-transform cursor-pointer"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
          <div className="md:mt-2 md:w-1/2">
            <Image
              src={nat}
              alt="picture of Nat"
              width={325}
              height={325}
              className="rounded-full shadow-2xl"
            />
          </div>
          <div className="md:mt-2 md:w-3/5">
            <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
              Hi, I&#39;m Nathanael M. Tan!
            </h1>
            <p className="text-lg mt-4 mb-6 md:text-2xl">
              I&#39;m a{" "}
              <span className="font-semibold text-teal-600">
                computer science student{" "}
              </span>
              at National University of Singapore.
            </p>
            <br />
            I am interested in back-end development!
            <br />
            <a
              href="https://github.com/itsNatTan"
              className="w-full mg-16 pt-3"
            >
              <img
                src="/assets/github.png"
                width="70"
                height="70"
                className="hover:-translate-y-1 transition-transform cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
