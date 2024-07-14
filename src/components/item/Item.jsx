import { Card } from "flowbite-react";

export default function Item({item, addCartHandler}) {

 
  return (
    <div>
      <Card
      className="max-w-sm"
      imgAlt={item.name}
      imgSrc={item.image}
    >
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {item.name}
        </h5>
      </a>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">${item.price}</span>
        <button
          onClick={() => addCartHandler(item.id)}
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Add to cart
        </button>
      </div>
    </Card>
    </div>
  );
}
