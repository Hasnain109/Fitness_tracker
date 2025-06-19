function Header1() {
    return ( 
        <>
  {/* Hello world */}
  <header className="header-section">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3">
          <div className="logo">
            <a href="./index.jsx">
              <img src="img/logo.png" alt="" />
            </a>
          </div>
        </div>
        <div className="col-lg-6">
          <nav className="nav-menu">
            <ul>
              <li className="active">
                
                <a link ="/">Home</a>
              </li>
              <li>
                <a link rel="icon" href="/About" >About Us</a>
              </li>
              <li>
                <a href="/ClassDetails">Classes</a>
              </li>
              <li>
                <a href="/Servicess">Services</a>
              </li>
              <li>
                <a href="/Team">Our Team</a>
              </li>
              <li>
                <a href="#">Pages</a>
                <ul className="dropdown">
                 
                  <li>
                    <a href="/Bmicalculator">Bmi calculate</a>
                  </li>

                  <li>
                    <a href="/Galary">Gallery</a>
                  </li>
                  <li>
                    <a href="/Blogs">Our blog</a>
                  </li>
                  <li>
                    <a href="*">404</a>
                  </li>
                  <li>
                <a href="/Contactdetails">Contact</a>
              </li>
              <li>
                <a href="/ClassTimetable">Class Timetable</a>
              </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-lg-3">
          <div className="top-option">
            <div className="to-search search-switch">
              <i className="fa fa-search" />
            </div>
            <div className="to-social">
              <a href="#">
                <i className="fa fa-facebook" />
              </a>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
              <a href="#">
                <i className="fa fa-youtube-play" />
              </a>
              <a href="#">
                <i className="fa fa-instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="canvas-open">
        <i className="fa fa-bars" />
      </div>
    </div>
  </header>
</>

     );
}

export default Header1;