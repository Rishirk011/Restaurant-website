import { foodItemList } from "../../components/data/data";
import { useStore } from "../../store/store";
import "./cart.css";
import { foodITemTypes } from "../../store/store";

export default function Cart() {
  const { items, add, remove, inc, dec } = useStore();
  
  function decrement(item: foodITemTypes) {
    dec(item);
  }
  function removeItem(item: foodITemTypes) {
    remove(item);
  }

  return (
    <>
      <h1 className="text-center">Your Products</h1>
      <div className="container p-2">
        <div className="row">
          {items.map((item) => (
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
                  <p className="text-center">
                    <button
                      className="btn btn-danger"
                      onClick={() => remove(item)}
                    >
                      Remove
                    </button>
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
