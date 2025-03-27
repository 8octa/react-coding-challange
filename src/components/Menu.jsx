import Button from "./Button";
import info from "../info.json";
import { FaArrowRight } from "react-icons/fa";

const Menu = ({ selectedCard, setSelectedCard }) => {
  return (
    <section className="fixed z-100 bottom-0 left-0 w-full bg-gray p-5 border border-light-gray">
      <div className="container flex justify-between items-center">
        {info.map(({ id, size, price, hire_period_days }) => {
          return (
            selectedCard === id && (
              <div className="flex flex-col md:fkex-row gap-5">
                <p className="text-white">
                  <span className="text-2xl font-bold text-blue">
                    &#163; {price}
                  </span>{" "}
                  per week
                </p>
                <p>{size} yards</p>

                <p className="text-white">{hire_period_days} day hire period</p>
              </div>
            )
          );
        })}

        <div className="flex flex-col md:fkex-row gap-5">
          <Button
            onClick={() => setSelectedCard(null)}
            children={"Back"}
            className="bg-dark-gray"
          />
          <Button children={"Continue"} icon={<FaArrowRight />} />
        </div>
      </div>
    </section>
  );
};

export default Menu;
