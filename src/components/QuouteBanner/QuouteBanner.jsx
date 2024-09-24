import "./bannerquoute.css";
import quote from "./../../assets/img/text.png"

const QueuteBanner = () => {
  return (
    <div className="banner2 text-white">
      <div className="banner__container flex flex-col items-center py-14 justify-between h-full mx-4">
        <div className="quoute"><img src={quote} alt="" /></div>
        <div className="quoute__text text-xl md:text-4xl max-w-[1100px] w-full text-center">
          <p>
            The most effective weight loss programmes include both a healthy and
            balanced diet and increased physical activity. It is also important
            to be active to keep weight off after weight loss.
          </p>
        </div>
        <div className="quoute__maker text-lg md:text-2xl text-center">
            <p>Zoe Hill, Nutrition Scientist, British Nutrition Foundation</p>
        </div>
        <div className="quoute__subline bg-gray-500 rounded-full max-w-[500px] mx-4 w-full h-2 block"></div>
      </div>
    </div>
  );
};

export default QueuteBanner;
