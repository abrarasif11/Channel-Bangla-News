import React, { useEffect, useState } from "react";

const LeftContent = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);
  return (
    <div>
      <p className="text-2xl font-semibold">All Category</p>
      <div className="mt-5 flex flex-col gap-3">
        {categories.map((category) => (
          <button className="btn base-200 border-none " key={category.category_id}>{category.category_name}</button>
        ))}
      </div>
    </div>
  );
};

export default LeftContent;
