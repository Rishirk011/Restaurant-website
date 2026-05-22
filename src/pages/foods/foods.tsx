import { useState,createContext, Children} from "react";
import { Link } from "react-router-dom";
import { foodItemList } from "../../components/data/data";
import { useStore } from "../../store/store";
interface food{
  id:number;
  name:string;
  price:number;
  img:string;
  quantity:number;
}
export default function Foods() {
  
  const [pop, setPop] = useState(false);

  const {items, add, remove, inc ,dec} =useStore();


  function handleCart(item:food) {
    
    
    setPop(true);
    
    setTimeout(() => {
      setPop(false);
    }, 2000);
    
    add(item)
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
          {foodItemList.map((item) => (
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
                    display-6"
                  >
                    {item.name}
                  </p>
                  <p className="fw-bold">price: {item.price}rs</p>
                  <button
                    className="btn btn-success text-center"
                    onClick={()=>handleCart(item)}
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
