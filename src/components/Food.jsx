import { useState } from "react";
import { data } from "../data/data";

export const Food = () => {
  const [foods, setFoods] = useState(data);

  //   Filter Type burgers/pizza/etc
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //   Filter by price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };
  return (
    <div className="font-serif">
      <div>
        {/* Filter Type  */}
        <div className="">
          <p className="font-bold text-xl mx-2"> Filter Type</p>

          <div className="flex flex-wrap gap-2  justify-center mt-3 ">
            <button
              onClick={() => setFoods(data)}
              className="border-2px text-orange-500 rounded-lg border-orange-500 hover:bg-orange-500 hover:text-white"
            >
              All
            </button>
            <button
              onClick={() => filterType("burgers")}
              className="border-2px text-orange-500 rounded-lg border-orange-500 hover:bg-orange-500 hover:text-white"
            >
              Burgers
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="border-2px text-orange-500 rounded-lg border-orange-500 hover:bg-orange-500 hover:text-white"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("salads")}
              className="border-2px text-orange-500 rounded-lg border-orange-500 hover:bg-orange-500 hover:text-white"
            >
              Salads
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="border-2px text-orange-500 rounded-lg border-orange-500 hover:bg-orange-500 hover:text-white"
            >
              Chicken
            </button>
          </div>
        </div>

        {/* filter price */}

        <div className="mt-3">
          <p className="font-bold text-xl mx-2"> Filter Price</p>

          <div className="flex flex-wrap gap-2  m-4  justify-center">
            <button
              onClick={() => filterPrice("$")}
              className="border-2px text-orange-500 rounded-lg border-orange-500 hover:bg-orange-500 hover:text-white"
            >
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className="border-2px text-orange-500 rounded-lg border-orange-500 hover:bg-orange-500 hover:text-white"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              className="border-2px text-orange-500 rounded-lg border-orange-500 hover:bg-orange-500 hover:text-white"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice("$$$$")}
              className="border-2px text-orange-500 rounded-lg border-orange-500 hover:bg-orange-500 hover:text-white"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/* Catgoty */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 my-auto">
        {foods.map((meal, index) => (
          <div className="max-w-[400px] box-sizing box-sha shadow-lg p-4" key={index}>
            <img
              className="w-full h-[200px] object-cover borde rou rounded-t-lg  "
              src={meal.image}
            alt={meal.name}
            />
            <div className="flex justify-between p-2 rounded-t-lg">
              <p className="font-bold text-xl">{meal.name}</p>
              <p className="font-bold text-xl bg-orange-500 text-white rounded-full ">
                {meal.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
