import React, { useState } from "react";
export default function AboutContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Feedback submitted:", formData);
    alert("Thank you for reaching out to BarGarreyy!");
  };

  return (
    <>
      <main className="container-fluid p-0">
        <div className="row hero-section m-0">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <div className="hero-content rounded text-center">
              <h1 className="display-1 fw-bold">Get In Touch</h1>
              <p className="lead text-white-50">
                Discover our story and connect with the flavor makers.
              </p>
            </div>
          </div>
        </div>

        <div className="container-fluid p-5 featured-section">
          <h1>About BarGarreyy</h1>
          <div className="row g-5 align-items-center my-3 justify-content-center">
            <div className="col-12 col-md-5">
              <img
                src="/food/one.jpeg"
                alt="Our Story"
                className="img-fluid rounded shadow shadow-md shadow-dark"
              />
            </div>
            <div className="col-12 col-md-6">
              <h2 className="display-6 fw-semibold mb-3">Our Juicy Journey</h2>
              <p className="fs-5 text-muted">
                At BarGarreyy, we believe a burger isn’t just fast food; it's an art form. 
                Founded with a passion for fiery grills and molten cheesy cores, we source 
                the freshest local ingredients to craft iconic cult classNameics like our 
                McAloo Tikki remix and premium flame-grilled Juicy Lucys.
              </p>
              <p className="fs-5 text-muted">
                Every bun, patty, and signature sauce is engineered to bring joy with every bite. 
                Whether you are ordering your quick lunch fix or dining in with friends, 
                we ensure an unforgettable experience.
              </p>
            </div>
          </div>
        </div>

        <div className="container-fluid review p-5">
          <h1>Contact Us</h1>
          <div className="row g-4 my-3 justify-content-center">
            <div className="col-12 col-lg-4">
              <div className="card h-100 shadow shadow-md shadow-dark p-3">
                <div className="card-body text-center">
                  <div className="bi bi-geo-alt-fill display-4 text-danger mb-3"></div>
                  <p className="card-title fw-bold fs-4 my-1">Visit Us</p>
                  <p className="p-2 text-muted">
                    123 Burger Boulevard, Gourmet Street,<br /> Foodie Zone - 600001
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className="card h-100 shadow shadow-md shadow-dark p-3">
                <div className="card-body text-center">
                  <div className="bi bi-telephone-fill display-4 text-success mb-3"></div>
                  <p className="card-title fw-bold fs-4 my-1">Call & Email</p>
                  <p className="p-2 text-muted">
                    +1 (555) 019-2834 <br />
                    support@bargarreyy.com
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-8 mt-5">
              <div className="card shadow shadow-md shadow-dark p-4">
                <div className="card-body">
                  <h3 className="text-center mb-4 fw-bold">Send a Message</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label fw-semibold">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label fw-semibold">Email Address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="name@example.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label fw-semibold">Message</label>
                      <textarea
                        className="form-control"
                        id="message"
                        rows={4}
                        placeholder="Tell us what you loved, or how we can improve..."
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      ></textarea>
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn btn-success px-5 py-2 btn-section">
                        Submit Feedback
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div className="container-fluid">
          <div className="row p-3">
            <div className="col d-flex justify-content-center about-sec">
              <h4 className="ms-2">
                <a href="" className="link-danger">Services</a>
              </h4>
              <h4 className="ms-2">
                <a href="" className="link-danger">About-Us</a>
              </h4>
              <h4 className="ms-2">
                <a href="" className="link-danger">Contact</a>
              </h4>
            </div>
          </div>
          <div className="row p-3">
            <div className="col d-flex justify-content-center socials">
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
            @Bargarrey <span>&copy;</span> copyrights reserved
          </h3>
        </div>
      </footer>
    </>
  );
}