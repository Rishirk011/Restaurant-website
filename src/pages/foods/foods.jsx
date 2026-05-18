import { useState,createContext, Children} from "react";
import { Link } from "react-router-dom";

export default function Foods() {
  const [pop, setPop] = useState(false);
  const [cart, setCart] = useState([]);
  const foods = [
    { id: 1, name: "McAalo Tikki", price: 290, img: "/public/food/six.jpeg" },
    { id: 2, name: "whooper", price: 250, img: "/public/food/one.jpeg" },
    { id: 3, name: "Juicy Lucy", price: 220, img: "/public/food/12.jpeg" },
    { id: 4, name: "Fish Burger", price: 190, img: "/public/food/nine.jpeg" },
    { id: 5, name: "Lamb Kebab", price: 300, img: "/public/food/six.jpeg" },
    { id: 6, name: "Mc veggie", price: 200, img: "/public/food/12.jpeg" },
  ];

  function handleCart(items) {
    setCart((item)=>{
        const isIteminCart=item.find((item)=>item.id===items.id)
        
        if(isIteminCart){
            return item.map((food)=>food.id===items.id?{...food,quantity:food.quantity+1}:food)
        }
        return [...item,{...items,quantity:1}]
    }
    )
    setPop(true);
    setTimeout(() => {
      setPop(false);
    }, 2000);
    }
    
    

  return (
    <>
      <div
        className="container-fluid min-vh-75
        position-relative"
        style={{ width: "800px", maxWidth: "100%" }}
      >
        <h1 className="text-center">Foods</h1>
        <div
          className="row justify-content-center
            p-3 g-3"
        >
          {foods.map((item) => (
            <div className="col-12 col-md-6 col-lg-4" key={item.id}>
              <div className="card h-100 shadow shadow-md">
                <div className="card-body text-center">
                  <img
                    src={item.img}
                    alt=""
                    className="img-fluid
                            rounded"
                  />
                  <p
                    className="text-center
                            display-6
                            "
                  >
                    {item.name}
                  </p>
                  <p className="fw-bold">price: {item.price}rs</p>
                  <button
                    className="btn btn-success text-center"
                    onClick={() => handleCart(item)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {pop && (
        <div
          className="alert alert-success
            position-fixed top-0
            end-95"
          role="alert"
          style={{ zIndex: "9999" }}
        >
          Product added to the cart successfully
          <Link to='/cart'> Go to cart</Link>
        </div>
      )}

     
    </>
  );
}
