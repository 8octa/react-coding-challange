import React from "react";
import {
  FaMapMarkerAlt,
  FaRegTrashAlt,
  FaTruck,
  FaShieldAlt,
  FaCalendar,
  FaCreditCard,
} from "react-icons/fa";

import icons from "../icons.json";

const iconComponents = {
  1: FaMapMarkerAlt,
  2: FaRegTrashAlt,
  3: FaTruck,
  4: FaShieldAlt,
  5: FaCalendar,
  6: FaCreditCard,
};

const Navbar = () => {
  return (
    <section className="w-full flex gap-5 justify-around items-center text-xs xl:text-sm">
      {icons.map(({ id, text, active, hr }) => {
        const IconComponent = iconComponents[id];
        return (
          <React.Fragment key={id}>
            <div
              className={`${
                active ? "cursor-pointer" : "cursor-crosshair"
              } flex gap-1 md:gap-5 justify-center items-center`}
            >
              {IconComponent && (
                <IconComponent className={`${active && "text-blue-700"} `} />
              )}
              <p className="max-lg:hidden">{text}</p>
            </div>
            {hr && (
              <hr
                className={`h-px w-[1rem] md:w-[2rem] border-0 ${
                  active ? "bg-blue-700" : "bg-gray-700"
                }`}
              />
            )}
          </React.Fragment>
        );
      })}
    </section>
  );
};

export default Navbar;
