import "./home.css";
import { Link } from "react-router-dom";
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
                <Link to='/foods'
                className="btn btn-outline-light m-2">Shop</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid p-5 featured-section">
          <h1>Featured Foods</h1>
          <div className="row g-4 justify-content-center my-3">
            <div className="col-12 col-md-6 col-lg-3">
              <div
                className="card h-100 shadow shadow-md
              shadow-dark"
              >
                <p
                  className="card-title display-5
                        text-center"
                >
                  McAloo Tikki
                </p>
                <div className="card-body text-center">
                  <img
                    src="/food/six.jpeg"
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
              <div
                className="card h-100 shadow shadow-md
              shadow-dark"
              >
                <p
                  className="card-title display-5
                        text-center"
                >
                  Mc Veggie
                </p>
                <div className="card-body text-center">
                  <img
                    src="/food/nine.jpeg"
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
              <div
                className="card h-100 shadow shadow-md
              shadow-dark"
              >
                <p
                  className="card-title display-5
                        text-center"
                >
                  Whopper
                </p>
                <div className="card-body">
                  <img
                    src="/food/one.jpeg"
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
              <div
                className="card h-100 shadow shadow-md
              shadow-dark"
              >
                <p
                  className="card-title display-5
                        text-center"
                >
                  Juicy Lucy
                </p>
                <div className="card-body">
                  <img
                    src="/food/12.jpeg"
                    alt=""
                    className="img-fluid rounded"
                  />
                  <p>
                    A Minnesota-born cheeseburger with cheese stuffed inside the
                    meat patty rather than on top, creating a molten, gooey
                    core.
                  </p>
                  <button className="btn btn-success text-center">Add</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid review p-5">
          <h1>Reviews</h1>
          <div className="row g-3 my-3">
            <div
              className="col-12 col-md-6 col-lg-3
            text-center"
            >
              <div
                className="card h-100 shadow shadow-md
              shadow-dark"
              >
                <div className="card-body">
                  <img
                    src="/img/1.jpg"
                    alt=""
                    className="img-fluid rounded"
                  />
                  <p className="card-title fw-bold my-1 d-inline-block p-2 rounded-pill names-review">
                    Alexa
                  </p>
                  <p className="p-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odit repellendus iure, dolores porro nisi facilis
                    accusantium.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-md-6 col-lg-3
            text-center"
            >
              <div
                className="card h-100 shadow shadow-md
              shadow-dark"
              >
                <div className="card-body">
                  <img
                    src="/img/4.jpg"
                    alt=""
                    className="img-fluid rounded"
                  />
                  <p className="card-title fw-bold my-1 d-inline-block p-2 rounded-pill names-review">
                    Alexa
                  </p>
                  <p className="p-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odit repellendus iure, dolores porro nisi facilis
                    accusantium.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-md-6 col-lg-3
            text-center"
            >
              <div
                className="card h-100 shadow shadow-md
              shadow-dark"
              >
                <div className="card-body">
                  <img
                    src="/img/6.jpg"
                    alt=""
                    className="img-fluid rounded"
                  />
                  <p className="card-title fw-bold my-1 d-inline-block p-2 rounded-pill names-review">
                    Alexa
                  </p>
                  <p className="p-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odit repellendus iure, dolores porro nisi facilis
                    accusantium.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-md-6 col-lg-3
            text-center"
            >
              <div
                className="card h-100 shadow shadow-md
              shadow-dark"
              >
                <div className="card-body">
                  <img
                    src="/img/5.jpg"
                    alt=""
                    className="img-fluid rounded"
                  />
                  <p className="card-title fw-bold my-1 d-inline-block p-2 rounded-pill names-review">
                    Alexa
                  </p>
                  <p className="p-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odit repellendus iure, dolores porro nisi facilis
                    accusantium.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="container-fluid">
          <div className="row p-3">
            <div
              className="col d-flex 
            justify-content-center about-sec"
            >
              <h4 className="ms-2">
                <a href="" className="link-danger">
                  Services
                </a>
              </h4>
              <h4 className="ms-2">
                <a href="" className="link-danger">
                  About-Us
                </a>
              </h4>
              <h4 className="ms-2">
                <a href="" className="link-danger">
                  Contact
                </a>
              </h4>
            </div>
          </div>
          <div className="row p-3">
            <div className="col d-flex  justify-content-center socials">
              <div className="d-flex flex-column brand">
                <h4 className="text-center">Socials</h4>
                <div className="con d-flex socials">
                  <h1 className="bi bi-linkedin"></h1>
                  <h1 className="bi bi-instagram"></h1>
                  <h1 className="bi bi-envelope"></h1>
                </div>
              </div>
            </div>
          </div>
          <h3 className="text-center copy mb-2 p-3">
            @Bargarrey
            <span>&copy;</span>copyrights reserved
          </h3>
        </div>
      </footer>
    </>
  );
}
