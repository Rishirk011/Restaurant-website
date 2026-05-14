import { Link } from "react-router-dom"
export default function Navbar(){
  return <>
  <header>
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg position-sticky top-0">
      <div className="container">
        <a href="#" className="navbar-brand">BarGarreyy</a>
        <button className="navbar-toggler" type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"><span className="navbar-toggler-icon"></span></button>
      <div className="collapse navbar-collapse text-end" id="navbarNav">
        <ul className="navbar-nav ms-auto text-center">
          <Link to='/' className="nav-link">Home</Link>
          <Link to='/login' className="nav-link">Login</Link>
          
        </ul>
      </div>
      </div>
    </nav>
  </header>
  
  </>

}


