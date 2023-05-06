import { useRef } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

import { Container } from "./styles";
import { Card } from "../Card";
import { FiEdit2 } from "react-icons/fi";

export function Carrosel({ dishesArray }) {
  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault;
    console.log(carousel.current.offsetWidth);
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault;
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <Container>
      <button className="leftBtn" onClick={handleLeftClick}>
        <MdKeyboardArrowLeft size={50} />
      </button>
      <button className="rightBtn" onClick={handleRightClick}>
        <MdKeyboardArrowRight size={50} />
      </button>

      <div className="carousel" ref={carousel}>
        {dishesArray.map((dish) => (
          <Card icon={FiEdit2} data={dish}></Card>
        ))}
      </div>
    </Container>
  );
}
