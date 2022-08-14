import React from "react";

const GameCards = () => {
  return (
    <div className="flex justify-center space-y-4 md:justify-between items-center flex-wrap ">
      <img
        className="h-[400px] md:h-[450px]"
        src="/assets/images/cards/minesweeper.png"
      />
      <img
        className="h-[400px] md:h-[450px]"
        src="/assets/images/cards/under-construction.png"
      />
      <img
        className="h-[400px] md:h-[450px]"
        src="/assets/images/cards/under-construction.png"
      />
    </div>
  );
};

export default GameCards;
