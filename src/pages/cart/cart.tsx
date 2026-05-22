import { useStore } from "../../store/store";
import "./cart.css";
import { Link, useNavigate } from "react-router-dom";
export default function Cart() {

  const navigate = useNavigate();  
  const { items, remove, inc, dec } = useStore();
  
  if(items.length<=0){
    return <>
        <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center
        background">
            <div className="row">
                <div className="col text-center
                text-light">
                    <h1 className="
                    display-1">Cart is Empty</h1>
                    <button
                    className="btn btn-success"
                    onClick={()=>navigate('/foods')}>
                        Go to Shop
                    </button>
                </div>
            </div>
        </div>
    </>
  }

  return (
    <>
      <h1 className="text-center">Your Products</h1>
      <div className="container p-2 position-relative">
        <div className="row">
          {items.map((item) => (
            <div className="col-12 col-md-6 col-lg-4" key={item.id}>
              <div className="card h-100 shadow shadow-md">
                <div className="card-body text-center">
                  <img
                    src={item.img}
                    alt={item.name}
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
                  <p className="">
                    <button
                      className="btn btn-danger"
                      onClick={() => remove(item)}
                    >
                      Remove
                    </button>
                    <Link className="btn btn-primary mx-1" to={'/summary'}
                    >
                        Order
                    </Link>
                  </p>
                  <div>
                    <button
                      className="button 
                    bg-danger mx-1"
                    onClick={()=>dec(item)}>
                      -
                    </button>
                    <span className="fw-bold">quantity: {item.quantity}</span>
                    <button className="bg-success button mx-1"
                    onClick={()=>inc(item)}>
                        +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
       
      
      </div>
      
    </>
  );
}
