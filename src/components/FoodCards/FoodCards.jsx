import potato from "./../../assets/img/baked-potato.jpg";
import chicken from "./../../assets/img/chicken.jpg";
import water from "./../../assets/img/shutterstock_1315858577.jpg";
import "./foodcard.css";

const cardData = [
  {
    img: potato,
    title: "Carbohydrate",
    subtitle:
      "The main role of carbohydrates in physical activity is to provide energy. Carbohydrate is the key fuel for the brain and for muscles during exercise.",
  },
  {
    img: chicken,
    title: "Protein",
    subtitle:
      "Protein is important in sports performance as it can boost glycogen storage, reduce muscle soreness, and promote muscle repair.",
  },
  {
    img: water,
    title: "Water",
    subtitle:
      "Drinking enough fluid is essential for maximizing exercise performance and ensuring optimum recovery.",
  },
];

const FoodCards = () => {
  return (
    <div className="container__foodcards py-20">
      <div className="row">
        <div className="title text-center">
          <h2 className="text-2xl md:text-5xl font-bold px-10 lg:px-0">
            What are the most important foods for exercise?
          </h2>
        </div>
        <div className="cards w-full flex justify-center gap-4 lg:gap-10 pt-14 px-10 lg:px-0 md:flex-row flex-col items-center md:items-stretch">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="card rounded-3xl max-w-[300px] w-full bg-white overflow-hidden"
            >
              <div className="img overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full rounded-t-3xl hover:scale-110 transition-all"
                />
              </div>
              <div className="text__card p-4 pb-10 min-h-[230px]">
                <div className="card__title my-2 text-xl font-bold">
                  <p>{card.title}</p>
                </div>
                <div className="card__subtitle">
                  <p>{card.subtitle}</p>
                </div>
              </div>
              <div className="learn__more__button p-4 mt-[-40px]">
                <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-3 text-sm rounded-full transition-all flex items-center justify-center">
                  <a href={`#${card.title.toLowerCase()}`} >Learn More</a>
                  <span className="ml-2 transition-transform transform">➔</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodCards;
