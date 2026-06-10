import "./home.css";
import "../../components/style/imageZoom.css"
import { Link } from "react-router-dom";
import { foodItemListType, featuredItems } from "../../components/data/data";
import { useStore } from "../../store/store";
import { useState } from "react";

export default function Home() {
  const { add } = useStore();
  const [popup, setPopup] = useState<boolean>(false);

  function addToCart(item: foodItemListType) {
    setPopup(true);
    setTimeout(() => {
      setPopup(false);
    }, 4000);
    add(item);
  }
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
                <Link to="/foods" className="btn btn-outline-light m-2">
                  Shop
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid p-5 featured-section">
          <h1>Featured Foods</h1>
          <div className="row g-4 justify-content-center my-3">
            {featuredItems.map((item) => (
              <div className="col-12 col-md-6 col-lg-3" key={item.id}>
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
                      onClick={() => addToCart(item)}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {popup && (
            <div
              className="alert alert-success
            position-fixed top-0
            end-95"
              role="alert"
              style={{ zIndex: "9999" }}
            >
              Product added to the cart successfully
              <Link
                className="btn btn-success text-center mx-2 
          d-block"
                to="/cart"
              >
                {" " +"Go to cart"}
              </Link>
            </div>
          )}
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
                  <img src="/img/1.jpg" alt="" className="img-fluid rounded" />
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
                  <img src="/img/4.jpg" alt="" className="img-fluid rounded" />
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
                  <img src="/img/6.jpg" alt="" className="img-fluid rounded" />
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
                  <img src="/img/5.jpg" alt="" className="img-fluid rounded" />
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
