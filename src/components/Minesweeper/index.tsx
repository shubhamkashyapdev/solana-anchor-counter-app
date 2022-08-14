import React from "react";
import LogoPrimary from "/assets/images/mineboy-logo-white.png";
import { Icon } from "@iconify/react";
import { Select } from "@mantine/core";
import { useEffect, useState } from "react";
import { GameCanvas } from "../common";
// import ReadMore from "react-native-read-more-text";

interface MinesweeperProps {
  description: string;
}

const Minesweeper: React.FC<MinesweeperProps> = ({ description }) => {
  let one = ["1", "3"];
  const [showfull, setshowfull] = useState(false);
  const descirptionChunk1 = description.substring(0, 700);
  const descriptionChunk2 = description.substring(700, Infinity);

  return (
    <div className="w-full ">
      <GameCanvas />

      {/* 2nd section start from here  */}

      <div className="container bg-cardbg h-auto rounded-2xl my-10">
        <div className="grid grid-cols-2 px-10 pt-10">
          <div>
            <h1 className="text-white">Minesweeper Originals</h1>
          </div>
          {/* // Dropdown Start here */}
          <div className="flex justify-center items-baseline">
            <Select
              className="mr-5 "
              label=""
              placeholder="5,148,300.00× Optimus1989"
              nothingFound="No options"
              data={one}
              icon={
                <img
                  src="./assets/images/emojione_trophy.svg"
                  className="p-1"
                />
              }
            />
          </div>
        </div>

        {/* image + content start from here  */}
        <div className="w-full mt-5 px-10 flex">
          <div>
            <div className="pt-5 w-[200px]">
              <img src="/assets/images/Rectangle 23.png" className="w-full h-full" />
            </div>
          </div>
          <div className="px-10">
            <p className="pt-5 leading-8">
              {
                descirptionChunk1
              } {
                !showfull && <button onClick={() => setshowfull(true)} className="text-primary text-[17px]">{" "} Read More...</button>
              }
            </p>
            {
              showfull && (
                <p className="pt-5 leading-8">
                  {
                    descriptionChunk2
                  } <button onClick={() => setshowfull(false)} className="text-primary text-[18px]">Read Less...</button>
                </p>
              )
            }

          </div>
        </div>
        <div className="w-full mt-10 pl-10">
        </div>
      </div>
    </div>
  );
};

Minesweeper.defaultProps = {
  description: `Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    cupidatat non proident, sunt in culpa qui officia deserunt mollit
    anim id est laborum.""Lorem ipsum dolor sit amet, consectetur
    adipiscing elit, sed do eiusmod tempor incididunt ut labore et
    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
    occaecat cupidatat non proident, sunt in culpa qui officia
    deserunt mollit anim id est laborum. 11111 Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
    occaecat cupidatat non proident, sunt in culpa qui officia
    deserunt mollit anim id est laborum.""Lorem ipsum dolor sit amet,
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis
    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
    occaecat cupidatat non proident, sunt in culpa qui officia
    deserunt mollit anim id est laborum."Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est
    laborum.""Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est
    laborum."Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
    occaecat cupidatat non proident, sunt in culpa qui officia
    deserunt mollit anim id est laborum.""Lorem ipsum dolor sit amet,
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis
    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
    occaecat cupidatat non proident, sunt in culpa qui officia
    deserunt mollit anim id est laborum.`
}

export default Minesweeper;
