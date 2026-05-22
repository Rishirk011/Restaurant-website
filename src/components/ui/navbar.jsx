import { Link } from "react-router-dom"
export default function Navbar(){
  return <>

  <header className="sticky-top">
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container">
        <a href="#" className="navbar-brand">BarGarreyy</a>
        <button className="navbar-toggler bg-outline-none" type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"><span className="navbar-toggler-icon"></span></button>
      <div className="collapse navbar-collapse text-end" id="navbarNav">
        <ul className="navbar-nav ms-auto text-center">
          <li className="nav-item">
            <Link to='/' className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to='/login' className="nav-link">Login</Link>
          </li>
          <li>
            <Link to='/foods' className="nav-link">Foods</Link>
          </li>
          <li className="nav-item">
            <Link to='/cart' className="nav-link">
            Cart
            </Link>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  </header>
  
  </>

}


