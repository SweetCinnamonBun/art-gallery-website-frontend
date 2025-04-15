import React from "react";
import HeroImg from "../assets/images/desktop/image-hero.jpg";
import IconRight from "../assets/icons/icon-arrow-right.svg";

import GridImageOneDesktop from "../assets/images/desktop/image-grid-1.jpg";
import GridImageOneTablet from "../assets/images/tablet/image-grid-1.jpg";
import GridImageOneMobile from "../assets/images/tablet/image-grid-1.jpg";



import GridImageTwo from "../assets/images/desktop/image-grid-2.jpg";
import GridImageThree from "../assets/images/desktop/image-grid-3.jpg";
import FacebookIcon from "../assets/icons/icon-facebook.svg";
import TwitterIcon from "../assets/icons/icon-twitter.svg";
import InstagramIcon from "../assets/icons/icon-instagram.svg";

const HomePage = () => {
  return (
    <div>
      <header className="grid grid-cols-[5fr_3fr]">
        <div className="">
          <div className="bg-black hidden lg:block">here</div>
          <figure>
            <img src={HeroImg} alt="hero-image" />
          </figure>
        </div>
        <div className="flex flex-col justify-center -ml-30">
          <h1 className="font-big text-[96px] font-extrabold leading-23">
            MODERN <br /> ART GALLERY
          </h1>
          <p className="w-96">
            The arts in the collection of the Modern Art Gallery all started
            from a spark of inspiration. Will these pieces inspire you? Visit us
            and find out.
          </p>
          <button className="flex">
            <span className="bg-[#151515] py-5 px-8 text-white font-big text-2xl tracking-widest">OUR LOCATION</span>
            <div className="bg-[#D5966C] px-4 flex items-center ">
              <img src={IconRight} alt="Right icon" className="w-6 h-6" />
            </div>
          </button>
        </div>
      </header>
      <main className="mt-40">
        <div className="grid grid-cols-[1fr_2fr] px-10 lg:px-40 gap-x-32">
          <div className="flex flex-col items-center justify-center">
            <div className="self-start w-[270px]">
              <div className="mb-5">
                <h1 className="font-big text-[60px] font-bold leading-16 tracking-tight">
                  YOUR DAY AT
                </h1>
                <h1 className="font-big text-[60px] font-bold leading-16 tracking-tight">
                  THE GALLERY
                </h1>
              </div>
              <p className="">
                Wander through our distinct collections and find new insights
                about our artists. Dive into the details of their creative
                process
              </p>
            </div>
          </div>
          <div className="flex justify-end">
            <picture>
              <source media="(min-width: 1024px)" srcSet={GridImageOneDesktop} />
              <source media="(min-width: 640px)" srcSet={GridImageOneTablet} />
              <img
                src={GridImageOneMobile}
                alt="hero-image"
                className="w-full h-auto"
              />
            </picture>
          </div>
        </div>
        <div className="grid grid-cols-[6fr_4fr] px-10 lg:px-40 mt-8 pb-20 gap-x-5">
          <figure className="h-full">
            <img src={GridImageTwo} alt="grid-image-two"  className="w-full h-full"/>
          </figure>
          <div className=" flex flex-col gap-6">
            <figure className="h-full ">
              <img
                src={GridImageThree}
                alt="grid-image-three"
                className="h-full"
              />
            </figure>
            <div className="bg-[#151515] w-full h-full flex flex-col items-center justify-center p-10 gap-8 ">
              <h1 className="font-big text-[60px] text-white font-bold leading-16 self-start">
                COME & BE <br /> INSPIRED
              </h1>
              <p className="text-white text-xl">
                We're excited to welcome you to our gallery and see how our
                collections influence you.
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-[#151515] py-20">
        <div className="flex items-center justify-between px-40">
          <h2 className="font-big text-[34px] leading-9 text-white">
            MODERN <br /> ART GALLERY
          </h2>
          <p className="text-white w-96 -mb-5 mr-8">
            The Modern Art Gallery is free to all visitors and open seven days a
            week from 8am to 9pm. Find us at 99 King Street, Newport, USA
          </p>
          <div className="flex gap-3 -mt-12">
            <span>
              <img src={FacebookIcon} alt="facebook-icon" />
            </span>
            <span>
              <img src={InstagramIcon} alt="instagram-icon" />
            </span>
            <span>
              <img src={TwitterIcon} alt="twitter-icon" />
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
