import "./home.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <main className="container-fluid p-0">
        <div className="row hero-section m-0">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <div
              className="hero-content
                rounded"
            >
              <h1 className="display-1 fw-bold">BarGarreyy</h1>
              <p
                className="btn-section
                        text-center"
              >
                <Link to="/login" className="btn btn-primary">
                  Login
                </Link>
                <button className="btn btn-outline-light m-2">Shop</button>
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid p-5 featured-section">
          <h1>Featured Foods</h1>
          <div className="row g-4 justify-content-center my-3">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card h-100">
                <p
                  className="card-title display-5
                        text-center"
                >
                  McAloo Tikki
                </p>
                <div className="card-body text-center">
                  <img
                    src="/public/food/six.jpeg"
                    alt=""
                    className="img-fluid rounded"
                  />
                  <p>
                    The ultimate cult classic in India, featuring a crispy
                    potato and pea patty coated with special spices, onions, and
                    eggless mayo.
                  </p>
                  <button className="btn btn-success text-center">Add</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 ">
              <div className="card h-100">
                <p
                  className="card-title display-5
                        text-center"
                >
                   Mc Veggie
                </p>
                <div className="card-body text-center">
                  <img
                    src="/public/food/nine.jpeg"
                    alt=""
                    className="img-fluid rounded"
                  />
                  <p>
                    A classic loaded patty made of peas, carrots, and potatoes,
                    topped with a flavorful, creamy sauce.
                  </p>
                  <button className="btn btn-success text-center">Add</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 text-center">
              <div className="card h-100">
                <p
                  className="card-title display-5
                        text-center"
                >
                  The Whopper
                </p>
                <div className="card-body">
                  <img
                    src="/public/food/one.jpeg"
                    alt=""
                    className="img-fluid rounded"
                  />
                  <p>
                    Known for its flame-grilled beef patty, topped with
                    tomatoes, lettuce, mayonnaise, ketchup, pickles, and onions.
                  </p>
                  <button className="btn btn-success text-center">Add</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 text-center">
              <div className="card h-100">
                <p
                  className="card-title display-5
                        text-center"
                >
                  The Whopper
                </p>
                <div className="card-body">
                  <img
                    src="/public/food/one.jpeg"
                    alt=""
                    className="img-fluid rounded"
                  />
                  <p>
                    Known for its flame-grilled beef patty, topped with
                    tomatoes, lettuce, mayonnaise, ketchup, pickles, and onions.
                  </p>
                  <button className="btn btn-success text-center">Add</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
