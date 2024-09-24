import bowlowwawa from "./../../assets/img/protein-foods_s_684710068.webp";

const Protein = () => {
  return (
    <div className="px-10 pb-20 xl:px-0">
      <div id="protein" className="info__block flex gap-10 lg:gap-10 py-20 lg:flex-row flex-col-reverse xl:items-start items-center lg:justify-between justify-normal">
        <div className="cont xl:max-w-[800px] lg:max-w-[600px]">
          <div className="title">
            <h1 className="text-3xl">
                Protein
            </h1>
          </div>
          <div className="subtitle mt-5">
            <div className="sub1 mt-5">
              <p>
              Protein is important in sports performance as it can boost glycogen storage, reduce muscle soreness and promote muscle repair. For those who are active regularly, consuming a portion of protein at each mealtime and spreading protein intake out throughout the day may be beneficial.
              </p>
            </div>
            <div className="sub2 mt-5">
              <p>
              As some high protein foods can also be high in saturated fat, for example fatty meats or higher fat dairy products, it is important to choose lower fat options, such as lean meats or fish. Most vegans get enough protein from their diets, but it is important to consume a variety of plant proteins to ensure enough essential amino acids are included.. More information on vegetarian and vegan diets is available on our page on this topic.
              </p>
            </div>
            <div className="sub3 mt-5">
              <p>
              There may be a benefit in increasing protein intakes for athletes and those recreationally active to a high level. But the importance of high protein diets is often exaggerated for the general population.
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
      <div className="sub__text max-w-[1230px]">
        <div className="sub11">
        <p>
        It is a common misconception that high protein intakes alone increase muscle mass and focussing too much on eating lots of protein can mean not getting enough carbohydrate, which is a more efficient source of energy for exercise. It is important to note that high protein intakes can increase your energy (calorie) intake, which can lead to excess weight gain.
        </p>
        </div>
        <div className="sub22 mt-5">
            <p>The current protein recommendations for the general population are 0.75g of protein per kg of bodyweight per day for adults and most people are consuming more than this. so it’s unlikely that you need to eat extra protein if you are active within the current guidelines of 150 minutes of moderate intensity activity per week. If you take part  in regular sport and exercise like training for a running or cycling event or lifting weights regularly, then your protein needs may be slightly higher than the general population, to promote muscle tissue growth and repair.</p>
        </div>
        <div className="sub33 mt-5">
            <p>For strength and endurance athletes, protein requirements are increased to around 1.2-2.0g of protein per kilogram of bodyweight per day. The most recent recommendations for athletes from the American College of Sports Medicine (ACSM) also focus on protein timing, not just total intake, ensuring high quality protein is consumed throughout the day (after key exercise sessions and around every 3–5 hours over multiple meals, depending on requirements). In athletes that are in an energy deficit, such as team sport players trying to lose weight gained in the off season, there may be a benefit in consuming protein amounts at the high end, or slightly higher, than the recommendations, to reduce the loss of muscle mass during weight loss.

</p>
        </div>
        <div className="sub44 mt-5">
            <p>Timing of protein consumption is important in the recovery period after training for athletes. Between 30 minutes and 2 hours after training, it is recommended to consume 15-25g of protein alongside some carbohydrate. Although they may be useful for convenient protein intakes around exercise, protein supplements cannot provide all the different components found in protein-rich foods so focussing on a ‘food first’ approach is best. A whey protein shake contains around 20g of protein, which you can get from half a chicken breast or a small can of tuna. For more information on protein supplements, see the supplements section.</p>
        </div>
      </div>
    </div>
  );
};

export default Protein;
