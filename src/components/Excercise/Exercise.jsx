import { useState } from "react";

const Exercise = () => {
  const [openFAQ, setOpenFAQ] = useState(1);

  const toggleFAQ = (index) => {
    if (openFAQ !== index) {
      setOpenFAQ(index);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="text-center mb-6">
        <h1 className="text-xl md:text-3xl font-bold">Exercise and Nutrition FAQs</h1>
      </div>

      <div className="space-y-4">
        <div className="border rounded-lg shadow">
          <button
            className={`w-full text-left p-4 text-sm md:text-lg font-semibold flex justify-between items-center transition duration-300 ease-in-out ${
              openFAQ === 1 ? "bg-gray-100" : "hover:bg-gray-200"
            }`}
            onClick={() => toggleFAQ(1)}
          >
            If I am doing endurance training, should I be following low carbohydrate, high fat diets?
            <span>{openFAQ === 1 ? "▴" : "▾"}</span>
          </button>
          {openFAQ === 1 && (
            <div className="p-4 bg-gray-50 text-sm md:text-base">
              <p>
                Carbohydrate is important as an energy source during exercise.
                Having very low intakes of carbohydrate when exercising can
                cause low energy levels, loss of concentration, dizziness, or
                irritability.
              </p>
              <p className="mt-2">
                Because carbohydrate is important for providing energy during
                exercise, there is a benefit in ensuring enough is consumed.
                This is especially for high-intensity exercise where some
                studies have shown that performance is reduced when carbohydrate
                intakes are low. Some studies in specific exercise scenarios,
                such as lower intensity training in endurance runners, have
                found beneficial effects of low carbohydrate diets on
                performance. However, these results have not been consistent and
                so at the moment we do not have enough evidence to show that
                low-carbohydrate diets can benefit athletic performance.
              </p>
            </div>
          )}
        </div>

        <div className="border rounded-lg shadow">
          <button
            className={`w-full text-left p-4 text-sm md:text-lg font-semibold flex justify-between items-center transition duration-300 ease-in-out ${
              openFAQ === 2 ? "bg-gray-100" : "hover:bg-gray-200"
            }`}
            onClick={() => toggleFAQ(2)}
          >
            Do I need to take supplements when exercising?
            <span>{openFAQ === 2 ? "▴" : "▾"}</span>
          </button>
          {openFAQ === 2 && (
            <div className="p-4 bg-gray-50 text-sm md:text-base">
              <p>
                Supplements are one of the most discussed aspects of nutrition
                for those who are physically active. However, whilst many
                athletes do supplement their diet, supplements are only a small
                part of a nutrition programme for training. Athletes are advised
                to follow a ‘food first’ approach to avoid using supplements
                that are not needed or could result in nutrient intakes that are
                too high. For most people who are active, a balanced diet can
                provide all the energy and nutrients the body needs without the
                need for supplements.
              </p>
            </div>
          )}
        </div>

        <div className="border rounded-lg shadow">
          <button
            className={`w-full text-left p-4 text-sm md:text-lg font-semibold flex justify-between items-center transition duration-300 ease-in-out ${
              openFAQ === 3 ? "bg-gray-100" : "hover:bg-gray-200"
            }`}
            onClick={() => toggleFAQ(3)}
          >
            Do I need to supplement protein to build muscle?
            <span>{openFAQ === 3 ? "▴" : "▾"}</span>
          </button>
          {openFAQ === 3 && (
            <div className="p-4 bg-gray-50 text-sm md:text-base">
              <p>
                It is a common myth that consuming lots of excess protein gives
                people bigger muscles. Quite often, people taking part in
                exercise focus on eating lots of protein, and consequently may
                not get enough carbohydrate, which is the most important source
                of energy for exercise.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Exercise;
