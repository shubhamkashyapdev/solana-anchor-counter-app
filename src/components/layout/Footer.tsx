import React from "react";
import LogoPrimary from "/assets/images/mineboy-logo-white.png";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <div className="w-full bg-black ">
      <div className="sm:grid sm:grid-cols-2  grid md:grid-cols-4 px-10 pb-12 border-b-[1px] border-border">
        {/* First Div Start */}

        <div className="">
          <img
            className="w-[400px] pt-2"
            src={LogoPrimary}
            alt="MineBoy Logo Primary"
          />
          <p className="sm:pt-20 lg:sm:pt-20 pt-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim,
            minus.
          </p>
          <p className="text-red mt-6">@mineboy</p>
        </div>

        {/* 2nd Div Start */}
        <div className="md:pl-32 sm:pt-20 sm:pl-10 pt-8 flex-1">
          <p className="link_main">About Us</p>
          <p className="">Zeux</p>
          <p className="">Portfolio</p>
          <p className="">Career</p>
          <p className="">Contact Us</p>
        </div>

        {/* 3rd div Strat From here */}

        <div className=" sm:pl-20 sm:pt-20 pt-10  flex-1">
          <a className="link_main">Contact Us</a>
          <p className="text-sm mt-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio nemo
            eum autem amet, quidem fugit?
          </p>
          <a className="link block mt-7">+908 89097 890</a>
        </div>

        {/* Fourth Div Start */}

        <div className="   justify-center gap-3 md:mt-64 mt-4 flex ">
          <div className="text-primaryBlack border-2 bg-primary h-10 w-10 flex justify-center items-center rounded-full cursor-pointer shadow-md hover:bg-primaryBlack hover:text-primary hover:shadow-2xl hover:border-primary transition-all ease-in-out">
            <Icon className="icon" icon="brandico:facebook" />
          </div>
          <div className="text-primaryBlack border-2 bg-primary h-10 w-10 flex justify-center items-center rounded-full cursor-pointer shadow-md hover:bg-primaryBlack hover:text-primary hover:shadow-2xl hover:border-primary transition-all ease-in-out">
            <Icon className="icon" icon="ant-design:instagram-outlined" />
          </div>
          <div className="text-primaryBlack border-2 bg-primary h-10 w-10 flex justify-center items-center rounded-full cursor-pointer shadow-md hover:bg-primaryBlack hover:text-primary hover:shadow-2xl hover:border-primary transition-all ease-in-out">
            <Icon className="icon" icon="bxl:twitter" />
          </div>
          <div className="text-primaryBlack border-2 bg-primary h-10 w-10 flex justify-center items-center rounded-full cursor-pointer shadow-md hover:bg-primaryBlack hover:text-primary hover:shadow-2xl hover:border-primary transition-all ease-in-out">
            <Icon className="icon" icon="cib:linkedin-in" />
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="sm:flex sm:justify-center flex justify-start py-5 px-10">
          <p className="text-red text-sm text-center">
            Copyright ® 2022. MineBoy. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* <div className="">
        <div className="flex justify-start flex-col space-x-10">
          <div className="flex-1">
            <img
              className="w-[200px]"
              src={LogoPrimary}
              alt="MineBoy Logo Primary"
            />
            <p className="mt-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim,
              minus.
            </p>
            <p className="text-red mt-6">@mineboy</p>
          </div>
          <div className="flex-1 flex flex-col">
            <a className="link_main">About Us</a>
            <a className="link">Zeux</a>
            <a className="link">Portfolio</a>
            <a className="link">Career</a>
            <a className="link">Contact Us</a>
          </div>
          <div className="flex-1">
            <a className="link_main">About Us</a>
            <p className="text-sm mt-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
              nemo eum autem amet, quidem fugit?
            </p>
            <a className="link block mt-7">+908 89097 890</a>
          </div>
          <div className="flex-1 flex ">
            <div className="self-end flex items-baseline space-x-2">
              <div className="text-primaryBlack border-2 bg-primary h-10 w-10 flex justify-center items-center rounded-full cursor-pointer shadow-md hover:bg-primaryBlack hover:text-primary hover:shadow-2xl hover:border-primary transition-all ease-in-out">
                <Icon className="icon" icon="brandico:facebook" />
              </div>
              <div className="text-primaryBlack border-2 bg-primary h-10 w-10 flex justify-center items-center rounded-full cursor-pointer shadow-md hover:bg-primaryBlack hover:text-primary hover:shadow-2xl hover:border-primary transition-all ease-in-out">
                <Icon className="icon" icon="ant-design:instagram-outlined" />
              </div>
              <div className="text-primaryBlack border-2 bg-primary h-10 w-10 flex justify-center items-center rounded-full cursor-pointer shadow-md hover:bg-primaryBlack hover:text-primary hover:shadow-2xl hover:border-primary transition-all ease-in-out">
                <Icon className="icon" icon="bxl:twitter" />
              </div>
              <div className="text-primaryBlack border-2 bg-primary h-10 w-10 flex justify-center items-center rounded-full cursor-pointer shadow-md hover:bg-primaryBlack hover:text-primary hover:shadow-2xl hover:border-primary transition-all ease-in-out">
                <Icon className="icon" icon="cib:linkedin-in" />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Footer;
