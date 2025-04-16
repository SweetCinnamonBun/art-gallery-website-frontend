import React from "react";
import HeroImg from "../assets/images/desktop/image-hero.jpg";
import IconRight from "../assets/icons/icon-arrow-right.svg";

import HeroImgDesktop from "../assets/images/desktop/image-hero.jpg";
import HeroImgTablet from "../assets/images/tablet/image-hero.jpg";
import HeroImgMobile from "../assets/images/mobile/image-hero.jpg";

import GridImageOneDesktop from "../assets/images/desktop/image-grid-1.jpg";
import GridImageOneTablet from "../assets/images/tablet/image-grid-1.jpg";
import GridImageOneMobile from "../assets/images/tablet/image-grid-1.jpg";

import GridImageTwoDesktop from "../assets/images/desktop/image-grid-2.jpg";
import GridImageTwoTablet from "../assets/images/tablet/image-grid-2.jpg";
import GridImageTwoMobile from "../assets/images/tablet/image-grid-2.jpg";

import GridImageThreeDesktop from "../assets/images/desktop/image-grid-3.jpg";
import GridImageThreeTablet from "../assets/images/tablet/image-grid-3.jpg";
import GridImageThreeMobile from "../assets/images/mobile/image-grid-3.jpg";

import GridImageTwo from "../assets/images/desktop/image-grid-2.jpg";
import GridImageThree from "../assets/images/desktop/image-grid-3.jpg";
import FacebookIcon from "../assets/icons/icon-facebook.svg";
import TwitterIcon from "../assets/icons/icon-twitter.svg";
import InstagramIcon from "../assets/icons/icon-instagram.svg";
import { Link } from "react-router";

const HomePage = () => {
  return (
    <div>
      <header className="grid grid-cols-1 md:grid-cols-[5fr_3fr] h-auto md:h-[680px] max-h-[800px]  md:px-10 lg:px-40 gap-5">
  {/* Left: Image */}
  <div className="relative h-64 sm:h-96 md:h-full w-full  mx-auto">
    <picture className="absolute inset-0 w-full h-full md:rounded-md overflow-hidden">
      <source media="(min-width: 1024px)" srcSet={HeroImgDesktop} />
      <source media="(min-width: 640px)" srcSet={HeroImgTablet} />
      <img
        src={HeroImgMobile}
        alt="hero-image"
        className="w-full h-full object-cover"
      />
    </picture>
  </div>

  {/* Right: Text */}
  <div className="flex flex-col justify-center space-y-8 px-5">
    <h1 className="font-big text-5xl md:text-[80px] font-extrabold leading-tight md:leading-[1.1]">
      MODERN <br /> ART GALLERY
    </h1>
    <p className="max-w-[400px] text-lg">
      The arts in the collection of the Modern Art Gallery all started from a spark of inspiration. Will these pieces inspire you? Visit us and find out.
    </p>
    <Link className="flex group" to="/location">
      <span className="bg-[#151515] py-5 px-8 text-white font-big text-2xl tracking-widest group-hover:bg-[#D5966C] transition-colors duration-300">
        OUR LOCATION
      </span>
      <div className="bg-[#D5966C] px-4 flex items-center group-hover:bg-[#151515] transition-colors duration-300">
        <img src={IconRight} alt="Right icon" className="w-6 h-6" />
      </div>
    </Link>
  </div>
</header>

      <main className="mt-26 md:mt-40">
        <div className="grid grid-cols-1  md:grid-cols-[1fr_2fr] px-5 md:px-10 lg:px-40 gap-x-32">
          <div className="flex flex-col items-center justify-center order-1 md:order-0 mt-5">
            <div className="md:self-start md:w-[270px]">
              <div className="mb-5">
                <h1 className="font-big text-[60px] font-bold leading-16 tracking-tight">
                  YOUR DAY AT
                </h1>
                <h1 className="font-big text-[60px] font-bold leading-16 tracking-tight">
                  THE GALLERY
                </h1>
              </div>
              <p className="text-lg">
                Wander through our distinct collections and find new insights
                about our artists. Dive into the details of their creative
                process
              </p>
            </div>
          </div>
          <div className="flex md:justify-end">
            <picture className="w-full h-full">
              <source
                media="(min-width: 1024px)"
                srcSet={GridImageOneDesktop}
              />
              <source media="(min-width: 640px)" srcSet={GridImageOneTablet} />
              <img
                src={GridImageOneMobile}
                alt="hero-image"
                className="w-full h-full object-cover"
              />
            </picture>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-6 md:grid-cols-[6fr_4fr] px-5 md:px-10 lg:px-40 mt-8 pb-20 gap-x-5">
          <picture className="w-full h-[480px] md:h-full">
            <source media="(min-width: 1024px)" srcSet={GridImageTwoDesktop} />
            <source media="(min-width: 640px)" srcSet={GridImageTwoTablet} />
            <img
              src={GridImageTwoMobile}
              alt="grid-image-two"
              className="w-full h-full"
            />
          </picture>
          <div className=" flex flex-col gap-6 h-full">
            <picture className="w-full h-64 flex-1">
              <source
                media="(min-width: 1024px)"
                srcSet={GridImageThreeDesktop}
              />
              <source
                media="(min-width: 640px)"
                srcSet={GridImageThreeTablet}
              />
              <img
                src={GridImageThreeMobile}
                alt="grid-image-three"
                className="w-full h-full object-cover"
              />
            </picture>
            <div className="bg-[#151515] w-full h-full flex flex-col items-center justify-center p-10 gap-2 lg:gap-8 flex-1">
              <h1 className="font-big  text-[50px] lg:text-[60px] text-white font-bold leading-16 self-start">
                COME & BE <br /> INSPIRED
              </h1>
              <p className="text-white text-md lg:text-xl">
                We're excited to welcome you to our gallery and see how our
                collections influence you.
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-[#151515] py-20 mt-20 md:mt-0">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center  gap-5 px-10 lg:px-40">
          <h2 className="font-big text-3xl font-bold lg:text-[34px] leading-9 text-white">
            MODERN <br /> ART GALLERY
          </h2>
          <p className="text-white text-lg md:w-96 md:-mb-5 mr-8">
            The Modern Art Gallery is free to all visitors and open seven days a
            week from 8am to 9pm. Find us at 99 King Street, Newport, USA
          </p>
          <div className="flex gap-3 md:-mt-12">
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
