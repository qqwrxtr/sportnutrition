import water from "./../../assets/img/boy-drinking-water.webp";

const Hydatate = () => {
  return (
    <div className="px-5 pb-20 xl:px-0">
      <div id="water" className="info__block flex gap-5 lg:gap-10 py-10 lg:flex-row flex-col-reverse xl:items-start items-center lg:justify-between justify-normal">
        <div className="cont xl:max-w-[800px] lg:max-w-[600px] w-full">
          <div className="title">
            <h1 className="text-xl sm:text-2xl md:text-3xl">
              How to stay well hydrated
            </h1>
          </div>
          <div className="subtitle mt-5">
            <div className="sub1 mt-5">
              <p className="text-sm md:text-base">
                Water is essential for life and hydration is important for health, especially in athletes and those who are physically active, who will likely have higher requirements. Drinking enough fluid is essential for maximising exercise performance and ensuring optimum recovery. Exercising raises body temperature and so the body tries to cool down by sweating. This causes the loss of water and salts through the skin.
              </p>
            </div>
            <div className="sub2 mt-5">
              <p className="text-sm md:text-base">
                The amount an individual sweats varies from person to person and depends on:
              </p>
            </div>
            <div className="sub3 mt-5">
              <ul className="text-sm md:text-base">
                <li className="list-disc ml-5">Intensity and duration of exercise – longer and higher intensity exercise can cause greater sweat loss</li>
                <li className="list-disc ml-5 pt-2">Environmental temperature – in hot, humid conditions sweat loss can increase.</li>
                <li className="list-disc ml-5 pt-2">Clothing – the more clothing that is worn, the quicker you are likely to heat up which may cause greater sweat loss.</li>
                <li className="list-disc ml-5 pt-2">Genetics – some people sweat more than others.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="img">
          <img
            src={water}
            alt="Person drinking water"
            className="w-full max-w-[250px] rounded-3xl xl:mb-0 mb-5 block"
          />
        </div>
      </div>
      <div className="sub__text max-w-[1230px] px-5">
        <div className="sub11">
          <p className="text-sm md:text-base">
            Generally, the more a person sweats, the more they will need to drink. Average sweat rates are estimated to be between 0.5–2.0L/hour during exercise.
          </p>
        </div>
        <div className="sub22 mt-5">
          <p className="text-sm md:text-base">
            Dehydration can cause tiredness and affect performance by reducing strength and aerobic capacity (especially when exercising for longer periods). So, especially when exercising at higher levels or in warmer conditions, it is important to try and stay hydrated before, during and after exercise to prevent dehydration. In most cases, unless training at a high intensity for over an hour, water is the best choice as it hydrates without providing excess calories or the sugars and acids found in some soft drinks that can damage teeth.
          </p>
        </div>
        <div className="sub33 mt-5">
          <p className="text-sm md:text-base">
            For those who are recreationally active to a high level, or for athletes, managing hydration around training or competition is more important. The higher intensity and longer duration of activity means that sweat rates tend to be higher. Again, the advice for this group would be to ensure they drink fluids before, during and after exercise. Rehydration would usually involve trying to drink around 1.25-1.5L of water for every kg of body weight lost during exercise through sweat. However for longer, more intense exercise (longer than 60 minutes), there may be extra benefit in consuming drinks containing some carbohydrates, and other electrolytes including sodium, during exercise, as this is when carbohydrate stores may substantially decrease, and sodium losses can be higher (such as marathon/long distance running, football games or competitive swimming).
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hydatate;
