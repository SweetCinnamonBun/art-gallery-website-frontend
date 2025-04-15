import React from "react";
import MapImg from "../assets/images/desktop/image-map.png";
import FacebookIcon from "../assets/icons/icon-facebook.svg";
import TwitterIcon from "../assets/icons/icon-twitter.svg";
import InstagramIcon from "../assets/icons/icon-instagram.svg";


const LocationPage = () => {
  return (
    <>
      <section className=" relative">
        <figure>
          <img src={MapImg} alt="map-image" />
        </figure>
        <button className="absolute top-0 left-40">Back To home</button>
      </section>
      <section className="bg-[#151515] grid grid-cols-2 px-40 py-20">
        <h1 className="text-7xl text-white font-big font-bold">
          OUR <br /> LOCATION
        </h1>
        <div>
          <h3 className="font-big font-bold text-4xl text-orange-200 mb-6">
            99 KING STREET
          </h3>
          <p className="text-white text-lg mb-6">
            Newport <br />
            RI 02840 <br />
            United States of America
          </p>
          <p className="text-white w-[420px] text-lg">
            Our newly opened gallery is located near the Edward King House on 99
            King Street, the Modern Art Gallery is free to all visitors and open
            seven days a week from 8am to 9pm.
          </p>
        </div>
      </section>
      <footer className="bg-[#d5966c] py-20">
        <div className="flex items-center justify-between px-40">
          <h2 className="font-big text-[34px] leading-9 text-black font-bold">
            MODERN <br /> ART GALLERY
          </h2>
          <p className="text-gray-800 w-96 -mb-5 mr-8">
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
              <img src={TwitterIcon} alt="twitter-icon" className="" />
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LocationPage;
