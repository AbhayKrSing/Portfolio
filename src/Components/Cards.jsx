import React from "react";

const Cards = ({ element, isMobile }) => {
  return (
    <div
      className={`${
        isMobile ? "" : "w-[270px]"
      } bg-[#00406d] rounded-lg p-5 mb-5 flex flex-col justify-between`}
    >
      {/*width is given to null for mobile screen*/}
      <p className="text-6xl font-black">""</p>
      <p className="h-[80%]">{element.review}</p>
      <div className="flex justify-between">
        <p className="font-bold">@{element.name}</p>
        <p>
          <img
            src={element.photo}
            alt="img"
            width={30}
            height={30}
            className="rounded-full"
          />
        </p>
      </div>
    </div>
  );
};

export default Cards;
