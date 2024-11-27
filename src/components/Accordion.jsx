import React, { useState } from "react";

const Accordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      {data.map((item, index) => (
        <div key={index} className="w-full mb-0">
          <div
            className="cursor-pointer flex flex-row md:flex-row gap-3 w-full"
            onClick={() => handleToggle(index)}
          >
            <p className="text-[1rem] md:text-[1.125rem] leading-[150%] font-raleway font-extrabold flex-grow mt-0 mb-2">
              {item.question}
            </p>
            <span>
              {activeIndex === index ? (
                <img
                  className="w-5 h-5 transform rotate-90 my-0"
                  src="arrow-forward.svg"
                  alt="arrow"
                />
              ) : (
                <img
                  className="w-5 h-5 my-0"
                  src="arrow-forward.svg"
                  alt="arrow"
                />
              )}
            </span>
          </div>
          {activeIndex === index && (
            <div className="accordion-content w-full">
              <p className="text-[1rem] md:text-[1.125rem] leading-[150%] mt-0 mb-4">
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
