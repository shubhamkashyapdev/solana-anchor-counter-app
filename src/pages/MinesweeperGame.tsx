import React, { useEffect } from "react";
import { GameCards, HomeInfoBox } from "../components/common";
import Minesweeper from "../components/Minesweeper";



const MinesweeperGame = () => {
  return (
    <div className="flex flex-col text-center">
      {/* @ts-ignore */}
      <Minesweeper />
    </div>
  );
};

export default MinesweeperGame;
