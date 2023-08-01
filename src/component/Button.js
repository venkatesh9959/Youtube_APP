import React, { useState } from "react";
const buttonData = [
  "All",
  "Movies",
  "Music",
  "Songs",
  "Television",
  "TamilSongs",
  "Live",
  "Public",
  "Bollywood",
  "Jr ntr",
  "Javascript",
  'Allu arjun',
  "Filmi",
  'Prabhas',
  'Sidsreeram',
  "news",
  "Computer Science",
  "Science",
  "React js",
  "HTMl",
  "Csse",
  "Computer"
];

const Button = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 12;

  const handleNext = () => {
    if (startIndex + itemsPerPage < buttonData.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  const visibleButtons = buttonData.slice(startIndex, startIndex + itemsPerPage);

  return (
     <div className="butten-Bar">
       <div className="Button-Section">
      <button onClick={handlePrev} className="button_tag">{"<"}</button>
      {visibleButtons.map((buttonText, index) => (
        <button type="button" key={index} className="button_list">
          {buttonText}
        </button>
      ))}
      <button onClick={handleNext} className="button_tag">{">"}</button>
    </div>
     </div>
  );
};

export default Button;
