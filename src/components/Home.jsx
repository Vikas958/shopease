import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://th.bing.com/th/id/OIP.QmLoz_UwnEOXWMKRc-yshAAAAA?rs=1&pid=ImgDetMain";

const Home = () => {
  const productList = [
    {
      name: "Mac book",
      price: 12000,
      imgSrc: img1,
      id: "abcd",
    },
    {
      name: "Black Shoes",
      price: 500,
      imgSrc: img2,
      id: "efgh",
    },
  ];
  const dispatch = useDispatch()
  const addToCartHandler = (options) => {
    // console.log(options);
    dispatch({type:"addToCart",payload:options});
    dispatch({type:'calculatePrice'});
    toast.success("Added to Cart");
  };
  
  return (
    <div className="home">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};
const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="ProductCard">
    <img src={imgSrc} alt="" />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
      Add to cart
    </button>
  </div>
);

export default Home;
