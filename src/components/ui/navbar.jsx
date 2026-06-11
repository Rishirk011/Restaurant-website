import { Link, Navigate } from "react-router-dom";
import { useStore } from "../../store/store";
export default function Navbar(){
  const {HandleLogout} = useStore();
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
           <li className="nav-item">
            <Link to='/about' className="nav-link">
            About-us
            </Link>
          </li>
          <li className="nav-item">
            <button onClick={HandleLogout} className="btn text-white">
              Log-Out
            </button>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  </header>
  
  </>

}


