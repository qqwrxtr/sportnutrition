import fat from "./../../assets/img/shutterstock_723415132.webp"

const Fat = () => {
    return (
        <div className="px-10 pb-20 xl:px-0">
          <div className="info__block flex gap-10 lg:gap-10 py-20 lg:flex-row flex-col-reverse xl:items-start items-center lg:justify-between justify-normal">
            <div className="cont xl:max-w-[800px] lg:max-w-[600px]">
              <div className="title">
                <h1 className="text-3xl">
                Fat
                </h1>
              </div>
              <div className="subtitle mt-5">
                <div className="sub1 mt-5">
                  <p>
                  Fat is essential for the body in small amounts, but it is also high in calories. Consuming too much fat can lead to excess calorie intake which can lead to weight gain over time, so this is a concern if you’re trying to control your weight.                   </p>
                </div>
                <div className="sub2 mt-5">
                  <p>
                  The type of fat consumed is also important. Studies have shown that replacing saturated fat with unsaturated fat in the diet can reduce blood cholesterol, which can lower the risk of heart disease and stroke. Fat-rich foods usually contain a mixture of saturated and unsaturated fatty acids but choosing foods that contain higher amounts of unsaturated fat and less saturated fat, is preferable as most of us eat too much saturated fat. Find more information on our pages on fat.                  </p>
                </div>
                <div className="sub3 mt-5">
                  <p>
                  There is ongoing research on the effects of higher fat/lower carbohydrate diets on athletic performance, and debate about the potential effects for different types of sporting events. For the general population, the advice would be to stick to the population guidelines stated above.
                  </p>
                </div>
              </div>
            </div>
            <div className="img">
              <img
                src={fat}
                alt=""
                className="w-96 rounded-3xl xl:mb-0 mb-5 block"
              />
            </div>
          </div>
        </div>
      );
    };
 
export default Fat;