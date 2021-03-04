import './App.css';
import Home from "./components/common/home/home.jsx";

function App() {
  return (
    <>
      {/* <header className="header-background">
        <nav class="navbar">
          <span class="navbar-brand mb-0 h1">Stream</span>
        </nav>
      </header> */}
      <nav className="navbar navbar-expand-md navbar-dark fixed-top header-background mb-0">
        <a className="navbar-brand" href="#">Stream</a>
      {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> */}
      {/* <div className="collapse navbar-collapse" id="navbarCollapse"> */}
        {/* <ul className="navbar-nav mr-auto">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul> */}
        {/* <form className="form-inline mt-2 mt-md-0">
          <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form> */}
      {/* </div> */}
    </nav>
      <Home />
    </>
  );
}

export default App;
