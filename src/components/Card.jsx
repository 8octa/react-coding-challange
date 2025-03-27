import info from "../info.json";
import Button from "./Button";
import Menu from "./Menu";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";
import { useState } from "react";

const Card = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleClickCard = (id) => {
    setSelectedCard(id);
  };
  return (
    <>
      <section className="my-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {info.map(({ id, size, hire_period_days, price, privateProperty }) => {
          return (
            <div
              key={id}
              onClick={() => handleClickCard(id)}
              className={`max-w-sm px-4 w-[100%] h-[500px] bg-dark-gray border border-light-gray
                hover:border-blue-500/50 rounded-lg flex flex-col justify-center gap-5 transition-all
               duration-200 cursor-pointer shadow-sm  ${
                 selectedCard === id ? "border-blue-500" : "border-gray"
               }`}
            >
              <FaCheck
                className={`text-blue-500 self-end text-xl invisible ${
                  selectedCard === id && "visible"
                }`}
              />
              <div className="relative">
                <img
                  className="rounded-lg"
                  src="image.jpg"
                  width="500px"
                  height="500px"
                  alt=""
                />
                <span className="absolute top-5 font-bold right-5 px-2 py-1 rounded-full text-xs bg-blue-500 text-black">
                  {size} yards
                </span>
                {privateProperty && (
                  <p className="flex gap-2 justify-center items-center absolute bottom-2 left-2 bg-black rounded-full px-5 py-1 text-xs text-yellow">
                    <span>
                      <IoIosWarning className="text-lg" />
                    </span>
                    Private Property Only
                  </p>
                )}
              </div>

              <h2 className="text-2xl font-bold">{size} Yard skip</h2>
              <p className="text-gray-500">
                {hire_period_days} day hire period
              </p>
              <p className="text-gray-500">
                <span className="text-2xl font-bold text-blue-500">
                  &#163; {price}
                </span>{" "}
                per week
              </p>
              <Button
                children={`${
                  selectedCard === id ? "Selected" : "Select This Skip"
                }`}
                icon={<FaArrowRight />}
                className={`${
                  selectedCard === id
                    ? "bg-blue-500 hover:bg-dark-blue"
                    : "bg-light-gray hover:bg-lighter-gray"
                }`}
              />
            </div>
          );
        })}
      </section>
      {selectedCard && <Menu selectedCard={selectedCard} setSelectedCard={setSelectedCard} />}
    </>
  );
};

export default Card;
