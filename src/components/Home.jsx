import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
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
  const [products, setProducts] = useState([]);
  // okey products is the array with 0 items intitally  setProducts is the function which is used to push the data in products

  // first you have to create a function async
  // second everything shouold write in try catch block
  // We can fetch from api using default javascript function fetch or we can use axios(third party package)
  // next we should create a use effect hook(its like a constructor) when this page will render it first runs the useeffect hook
  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      // we are getting products from the api in the format of array

      // res.data = [in this  there will be products] //this res.data array is comming from api
      // we directly storing that whole array in products array usestate
      setProducts(res.data);

    } catch (err) {
      console.log(err);
    }
  }
  //nowwhen this page will render first it will fetch products from api due to this useEffect
  useEffect(() => {
    fetchProducts();
  }, []);

  const dispatch = useDispatch()
  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: 'calculatePrice' });
    toast.success("Added to Cart");
  };

  return (
    <div className="home">
      {products.map((i) => (
        <ProductCard
          key={i.id}
          imgSrc={i.image}
          name={i.title}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
}
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
