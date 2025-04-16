import React from "react";
import MapImg from "../assets/images/desktop/image-map.png";
import FacebookIcon from "../assets/icons/icon-facebook.svg";
import TwitterIcon from "../assets/icons/icon-twitter.svg";
import InstagramIcon from "../assets/icons/icon-instagram.svg";

import MapImgDesktop from "../assets/images/desktop/image-map.png";
import MapImgTablet from "../assets/images/tablet/image-map.png";
import MapImgMobile from "../assets/images/mobile/image-map.png";

import IconArrowLeft from "../assets/icons/icon-arrow-left.svg";
import { Link } from "react-router";

const LocationPage = () => {
  return (
    <>
      <section className=" relative h-[550px] md:h-auto">
        <picture className="w-full h-full">
          <source media="(min-width: 1024px)" srcSet={MapImgDesktop} />
          <source media="(min-width: 640px)" srcSet={MapImgTablet} />
          <img
            src={MapImgMobile}
            alt="map-image"
            className="w-full h-full object-cover"
          />
        </picture>
        <Link className="group flex absolute top-0 md:left-40" to="/">
          <div className="bg-[#D5966C] px-4 flex items-center group-hover:bg-[#151515] transition-colors duration-300">
            <img src={IconArrowLeft} alt="Right icon" className="w-6 h-6" />
          </div>
          <span className="bg-[#151515] py-5 px-8 text-white font-big text-2xl tracking-widest group-hover:bg-[#D5966C] transition-colors duration-300">
            Back Home
          </span>
        </Link>
      </section>
      <section className="bg-[#151515] grid grid-cols-1 md:grid-cols-2 px-5 md:px-10 lg:px-40 py-20">
        <h1 className="text-6xl md:text-7xl text-white font-big font-bold">
          OUR <br className="hidden md:block" /> LOCATION
        </h1>
        <div className="mt-10 md:mt-0">
          <h3 className="font-big font-bold text-4xl text-orange-200 mb-6">
            99 KING STREET
          </h3>
          <p className="text-white text-lg mb-6">
            Newport <br />
            RI 02840 <br />
            United States of America
          </p>
          <p className="text-white md:w-[380px] lg:w-[420px] text-lg">
            Our newly opened gallery is located near the Edward King House on 99
            King Street, the Modern Art Gallery is free to all visitors and open
            seven days a week from 8am to 9pm.
          </p>
        </div>
      </section>
      <footer className="bg-[#d5966c] py-20">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center  gap-5 px-10 lg:px-40">
          <h2 className="font-big text-[34px] leading-9 text-black font-bold">
            MODERN <br /> ART GALLERY
          </h2>
          <p className="text-gray-800 w-96 md:-mb-5 mr-8">
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
              <img src={TwitterIcon} alt="twitter-icon" className="" />
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LocationPage;
