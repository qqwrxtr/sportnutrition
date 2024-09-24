import bowlowwawa from "./../../assets//img/vegan-buddha-bowl_s_587759615.webp";
import obed from "./../../assets//img/shutterstock_1726280338.webp";

const TextPart = () => {
  return (
    <div className="px-10 pb-20 xl:px-0">
      <div className="info__block flex gap-10 lg:gap-10 py-20 lg:flex-row flex-col-reverse xl:items-start items-center lg:justify-between justify-normal">
        <div className="cont xl:max-w-[800px] lg:max-w-[600px]">
          <div className="title">
            <h1 className="text-3xl">
              Vegetarian and vegan diets for athletes
            </h1>
          </div>
          <div className="subtitle mt-5">
            <div className="sub1 mt-5">
              <p>
                There has been a rise in media interest around the use of
                vegetarian or vegan diets to improve sporting performance.
                However, this remains a new area for research and there have
                only been a few studies that have looked at vegan/vegetarian
                diets for athletes.
              </p>
            </div>
            <div className="sub2 mt-5">
              <p>
                To date, there is no clear evidence to suggest that vegetarian
                or vegan diets impact performance differently to a mixed diet,
                although it is important to recognise that whatever the dietary
                pattern chosen, it is important to follow a diet that is
                balanced to meet nutrient requirements. More research is needed
                to determine whether vegetarian or vegan diets can help athletic
                performance.
              </p>
            </div>
            <div className="sub3 mt-5">
              <p>
                For the general population, eating a more plant-based diet has
                the potential to benefit health. This doesn’t mean you have to
                cut out animal products completely but to include more plant
                foods such as wholegrains, beans, lentils, nuts and seeds. More
                plant-based diets can provide a wide variety of nutrients and
                natural phytochemicals, plenty of fibre and tend to be low in
                saturated fat, salt and sugar. More information on vegetarian
                and vegan diets is available on our page on this topic.
              </p>
            </div>
          </div>
        </div>
        <div className="img">
          <img
            src={bowlowwawa}
            alt=""
            className="w-96 rounded-3xl xl:mb-0 mb-5 block"
          />
        </div>
      </div>
      <div id="carbohydrate" className="info__block flex gap-10 lg:gap-10 py-20 lg:flex-row flex-col-reverse xl:items-start items-center lg:justify-between justify-normal">
        <div className="cont xl:max-w-[800px] lg:max-w-[600px]">
          <div className="title">
            <h1 className="text-3xl">Carbohydrates</h1>
          </div>
          <div className="subtitle mt-5">
            <div className="sub1 mt-5">
              <p>
                The main role of carbohydrates in physical activity is to
                provide energy. For athletes, if their diet does not contain
                enough carbohydrate, it is likely that their performance and
                recovery will be impaired, as carbohydrate is the key fuel for
                the brain and for muscles during exercise.
              </p>
            </div>
            <div className="sub2 mt-5">
              <p>
                The body can store carbohydrates in the muscles and liver as
                glycogen and use these stores as a source of fuel for physical
                activity. These glycogen stores are limited, so for those
                training at a high level, it is important to be fully fuelled at
                the start of any exercise.
              </p>
            </div>
            <div className="sub3 mt-5">
              <p>
                Glycogen is the main source of energy at the start of exercise
                and during short bursts of exercise. If you are doing high
                intensity training for long periods and your glycogen stores are
                not sufficient you may feel tired, lack energy and not be able
                to perform at your best. So, regular intake of carbohydrate-rich
                foods can be important in this case to keep stores topped up.
                The correct food choices can help ensure the body has enough
                energy for activity, as well as help aid recovery.
              </p>
            </div>
          </div>
        </div>
        <div className="img">
          <img
            src={obed}
            alt=""
            className="w-96 rounded-3xl xl:mb-0 mb-5 block"
          />
        </div>
      </div>
      <div className="sub__text max-w-[1230px]">
        <div className="sub11">
        <p>
          Starchy foods are an important source of carbohydrates in our diet.
          Wholegrain varieties also provide fibre, and a range of vitamins and
          minerals including B vitamins, iron, calcium and folate. Sugars are
          also carbohydrates and the amount of ‘free sugars’ (those added to
          foods and drinks or in fruit juices, honeys and syrups) we consume
          should be limited.{" "}
        </p>
        </div>
        <div className="sub22 mt-5">
            <p>The amount of carbohydrate you need will depend on the frequency, type, duration and intensity of physical activity you do. Competitive sports people and athletes will likely need more carbohydrates than an average gym user to match the intensity of their activity level.   </p>
        </div>
        <div className="sub33 mt-5">
            <p>If you are active at around the current recommended levels (150 minutes of moderate activity or 75 minutes of high intensity activity plus two sessions of muscle strengthening activities per week), then you can follow general healthy eating guidance to base meals on starchy carbohydrates, choosing wholegrain and higher fibre options where possible. For information about portion sizes of starchy foods you can use our Get portion wise! portion size guide.</p>
        </div>
        <div className="sub44 mt-5">
            <p>For athletes and individuals who are recreationally active to a higher level (such as training for a marathon), consuming additional carbohydrate may improve performance. It is a good idea to have some carbohydrate both before and after exercise to ensure you have enough carbohydrate at the start of training and to replenish glycogen stores after exercise. In longer duration, high intensity exercise (60-90 minutes or more), such as a football match or a marathon, consuming some carbohydrate during exercise can also improve performance, for example in the form of a sports drink.</p>
        </div>
      </div>
    </div>
  );
};

export default TextPart;
