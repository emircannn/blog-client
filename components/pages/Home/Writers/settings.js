const { ChevronRight } = require("lucide-react");
const { ChevronLeft } = require("lucide-react");

const NextBtn = ({onClick}) => {
    return (
      <button 
      onClick={onClick} 
      className="absolute z-50 rightbutton bg-thirth text-white rounded-full p-1 md:p-2">
        <ChevronRight/>
      </button>
    );
  };
  const PrevBtn = ({onClick}) => {
    return (
      <button 
      onClick={onClick} 
      className="absolute z-50 leftbutton bg-thirth text-white rounded-full p-1 md:p-2">
        <ChevronLeft/>
      </button>
    );
  };
  

export const writterSettings = {
    dots: false,
    infinite: true,
    fade: false,
    arrows:true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 6000,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
    {
    breakpoint: 1280,
    settings: {
    slidesToShow: 4,
    slidesToScroll: 1,
    },
    },
    {
    breakpoint: 1024,
    settings: {
    slidesToShow: 3,
    slidesToScroll: 1,
    },
    },
    {
    breakpoint: 600,
    settings: {
    slidesToShow: 2,
    slidesToScroll: 1,
    },
    },
    {
    breakpoint: 1920,
    settings: {
    slidesToShow: 5,
    slidesToScroll: 1,
    },
},
],
}; 