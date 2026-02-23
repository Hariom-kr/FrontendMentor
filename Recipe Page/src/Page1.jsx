import image from "./assets/image-omelette.jpeg"

const times = [
  { label: 'Total', value: 'Approximately 10 minutes' },
  { label: 'Preparation', value: '5 minutes' },
  { label: 'Cooking', value: '5 minutes' },
];

const Page1 = () => {
  return (
    <div className="bg-white w-full max-w-184 p-9 rounded-3xl space-y-8 my-10">
      
      <div className="w-full">
        <img className="w-full rounded-2xl" src={image} alt="Omelette" />
      </div>

      <div className="space-y-">
        <h1 className="font-bold text-4xl font-serif text-gray-800">Simple Omelette Recipe</h1>
        <p className="font-outfit text-gray-600 leading-relaxed">
          An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs 
          cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.
        </p>
      </div>

      <div className="bg-[hsl(330,64%,98%)] rounded-2xl p-6 space-y-4">
        <h4 className="font-outfit text-[hsl(332,51%,32%)] text-xl font-bold">Preparation time</h4>
        <ul className="list-disc ml-6 space-y-3 marker:text-[hsl(332,51%,32%)]">
          {times.map((item) => (
            <li key={item.label} className="font-outfit pl-4 text-gray-700">
              <span className="font-bold">{item.label}:</span>
              <span className="ml-2">{item.value}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-[hsl(14,45%,36%)] text-2xl font-serif font-bold">Ingredients</h2>
        <ul className="list-disc ml-6 space-y-3 marker:text-[hsl(14,45%,36%)]">
          <li className="font-outfit pl-4 text-gray-600">2-3 large eggs</li>
          <li className="font-outfit pl-4 text-gray-600">Salt, to taste</li>
          <li className="font-outfit pl-4 text-gray-600">Pepper, to taste</li>
          <li className="font-outfit pl-4 text-gray-600">1 tablespoon of butter or oil</li>
          <li className="font-outfit pl-4 text-gray-600">Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
        </ul>
      </div>

      <hr className="border-gray-200" />

      <div className="space-y-4">
        <h2 className="text-[hsl(14,45%,36%)] text-2xl font-serif font-bold">Instructions</h2>
        <ol className="list-decimal ml-6 space-y-4 marker:text-[hsl(14,45%,36%)] marker:font-bold">
          <li className="font-outfit pl-4 text-gray-600">
            <span className="font-bold text-gray-800">Beat the eggs:</span> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed.
          </li>
          <li className="font-outfit pl-4 text-gray-600">
            <span className="font-bold text-gray-800">Heat the pan:</span> Place a non-stick frying pan over medium heat and add butter or oil.
          </li>
          <li className="font-outfit pl-4 text-gray-600">
            <span className="font-bold text-gray-800">Cook the omelette:</span> Once the butter is melted, pour in the eggs. Tilt the pan to coat the surface.
          </li>
          <li className="font-outfit pl-4 text-gray-600">
            <span className="font-bold text-gray-800">Add fillings (optional):</span> Sprinkle your chosen fillings over one half of the omelette.
          </li>
          <li className="font-outfit pl-4 text-gray-600">
            <span className="font-bold text-gray-800">Fold and serve:</span> Carefully lift one edge and fold it over. Slide it onto a plate.
          </li>
        </ol>
      </div>

      <hr className="border-gray-200" />

      <div className="space-y-4">
        <h2 className="text-[hsl(14,45%,36%)] text-2xl font-serif font-bold">Nutrition</h2>
        <p className="font-outfit text-gray-600">The table shows nutritional values per serving without the additional fillings.</p>
        
        <div className="font-outfit divide-y divide-gray-200">
          <div className="flex justify-between py- px-8">
            <span className="text-gray-500">Calories</span>
            <span className="text-[hsl(14,45%,36%)] font-bold">277kcal</span>
          </div>
          <div className="flex justify-between py-3 px-8">
            <span className="text-gray-500">Carbs</span>
            <span className="text-[hsl(14,45%,36%)] font-bold">0g</span>
          </div>
          <div className="flex justify-between py-3 px-8">
            <span className="text-gray-500">Protein</span>
            <span className="text-[hsl(14,45%,36%)] font-bold">20g</span>
          </div>
          <div className="flex justify-between py-3 px-8">
            <span className="text-gray-500">Fat</span>
            <span className="text-[hsl(14,45%,36%)] font-bold">22g</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page1;