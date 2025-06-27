import React, { memo, useState } from "react";
import { useProducts } from "../hooks/products";
import { FaHeart } from "react-icons/fa6";

const ApiProducts = () => {
  const getLikedItems = () => {
    const liked = localStorage.getItem("liked");
    return liked ? JSON.parse(liked) : {};
  };

  const [liked, setLiked] = useState(getLikedItems);

  const { data, isLoading, error } = useProducts();

  console.log(data);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1 className="text-red-600">Error</h1>;

  const toggleLike = (id) => {
    setLiked((prev) => {
      const updated = {
        ...prev,
        [id]: !prev[id],
      };
      localStorage.setItem("liked", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <article className="w-full flex justify-center mt-3">
      <main className="w-[80%]">
        <header></header>
        <div className="grid bg-white gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {data &&
            data.map((product) => {
              return (
                <div
                  className="bg-[#F6F6F6] rounded-2xl flex flex-col items-center justify-center p-5 relative"
                  key={product.id}
                >
                  <FaHeart
                    className={`cursor-pointer text-[#909090C4] transition-colors top-5 duration-300 absolute right-5 ${
                      liked[product.id] ? "text-red-500" : "text-[#909090C4]"
                    }`}
                    size={30}
                    onClick={() => toggleLike(product.id)}
                  />
                  <img
                    className="w-[200px] h-[200px]"
                    src={product.thumbnail}
                    alt=""
                  />
                  <p className="bold">{product.title}</p>
                  <p className="bold text-2xl py-3">
                    {product.price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </p>
                  <button className="bg-black text-white duration-100 cursor-pointer border px-15 py-3 rounded-[10px] hover:bg-white hover:text-black">
                    Buy Now
                  </button>
                </div>
              );
            })}
        </div>
      </main>
    </article>
  );
};

export default memo(ApiProducts);
