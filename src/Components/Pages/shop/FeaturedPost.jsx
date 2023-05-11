import React from "react";
import Card from "../Card/Card";
import "../shop/FeaturedPost.scss";
import useFetch from "../../../hooks/useFetch";


const FeaturedPost = ({ type }) => {
  const data = [
    {
      id: 1,
      img: "dubwise.jpg",
      img2: "sensimilia.jpg",
      title: "Dubwise",
      isNew:true,
      oldPrice: 1900,
      price: 2100,
    },
    {
      id: 2,
      img: "save.jpg",
      img2: "metropolis.jpg",
      title: "Last Night",
      isNew:true,
      oldPrice: 1900,
      price: 1200,
    },
    {
      id: 3,
      img: "housemusic.jpg",
      img2: "Petertosh.jpg",
      title: "LM Spiritual",
      isNew:true,
      oldPrice: 1900,
      price: 1200,
    },
  ]

  return (
    <div className="featuredPost">
      <div className="top">
        <h1>{type} Products</h1>
        <p>
          Stacy ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className="bottom">
        {data.map(item=>(
          <Card item={item} key={item.id}/>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPost;