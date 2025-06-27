import React, { memo, useState } from "react";
import { useLaptops, useTablets } from "../hooks/products";
import { FaHeart } from "react-icons/fa6";

const Discounts = () => {
  const getLikedItems = () => {
    const liked = localStorage.getItem("liked");
    return liked ? JSON.parse(liked) : {};
  };

  const [liked, setLiked] = useState(getLikedItems);
  const [visibleCount, setVisibleCount] = useState(4);

  const {
    isLoading: isTabletsLoading,
    error: tabletsError,
    data: tabletsData,
  } = useTablets();

  const {
    isLoading: isLaptopsLoading,
    error: laptopsError,
    data: laptopsData,
  } = useLaptops();

  if (isTabletsLoading || isLaptopsLoading) return <h1>Loading...</h1>;
  if (tabletsError || laptopsError)
    return <h1 className="text-red-500">Error</h1>;

  const tabletsWithCategory = (tabletsData || []).map((p) => ({
    ...p,
    category: "tablets",
  }));
  const laptopsWithCategory = (laptopsData || []).map((p) => ({
    ...p,
    category: "laptops",
  }));

  const allProducts = [...tabletsWithCategory, ...laptopsWithCategory];
  const visibleProducts = allProducts.slice(0, visibleCount);

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

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <article className="flex justify-center my-4 items-center flex-col">
      <main className="w-[80%]">
        <h1 className="text-2xl my-4">Discounts up to -50%</h1>
        <div className="grid bg-white gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {visibleProducts.map((product) => (
            <div key={product.id}>
              <div className="bg-[#F6F6F6] rounded-2xl flex flex-col items-center justify-center p-5 relative">
                <FaHeart
                  className={`cursor-pointer text-[#909090C4] transition-colors top-5 duration-300 absolute right-5
                  ${liked[product.id] ? "text-red-500" : "text-[#909090C4]"}`}
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
            </div>
          ))}
        </div>
      </main>

      {/* Load More tugmasi */}
      {visibleCount < allProducts.length && (
        <div className="text-center mt-5">
          <button
            className="bg-black text-white duration-100 cursor-pointer border px-15 py-3 rounded-[10px] hover:bg-white hover:text-black"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        </div>
      )}
    </article>
  );
};

export default memo(Discounts);
