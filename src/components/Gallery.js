import { useState, useEffect } from "react";
import "./Gallery.css";

const Gallery = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    //when current slide changes ,
  }, [currentSlide]);
  const { slides, onNext, onPrev, title, showDots} = props;
  if (!slides) {
    return null;
  }

  console.log(Math.abs(-4 % 5));

  const handleNextClick = () => {
    setCurrentSlide((currentSlide) => (currentSlide + 1) % slides.length);
    onNext();
  };

  const handlePrevClick = () => {
    setCurrentSlide((currentSlide) =>
      currentSlide - 1 < 0 ? currentSlide - 1 + slides.length : currentSlide - 1
    );
    onPrev();
  };

  return (
    <div className="Gallery">
      <div id="title">{title}</div>
      <div className="GalleryThumbnailWrapper">
        <div className="GalleryContainer">
          <button id="prevbtn" onClick={handlePrevClick}>
            {"<<<"}
          </button>
          {slides.map((slide, idx) => (
            <div className={`slide ${currentSlide === idx ? "current" : ""}`}>
              <img src={slide.src} alt={`${title}`} />
            </div>
          ))}

          <button id="nextbtn" onClick={handleNextClick}>
            {">>>"}
          </button>
        </div>
        {showDots ? (
          <div className="thumbnailContainer">
            {slides.map((slide, idx) => (
              <img
                className={`thumbnail  ${
                  currentSlide === idx ? "current" : ""
                }`}
                alt={`thumbnail${title}`}
                onClick={() => setCurrentSlide(idx)}
                src={slide.thumbnail}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default Gallery;
