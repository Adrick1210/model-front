import { Link } from "react-router-dom"

function Footer() {
    return (
      <div className="footer">
        <h5>Adrick-Development &copy; 2024</h5>
        <div className="links">
        <Link to="https://github.com/Adrick1210">
        <img src="https://seeklogo.com/images/G/github-colored-logo-FDDF6EB1F0-seeklogo.com.png" alt="git hub" />
        </Link>
        <Link to="https://www.facebook.com/Alexander.Christian.25">
        <img src="https://www.edigitalagency.com.au/wp-content/uploads/facebook-logo-png-tiktok-version.png" alt="facebook" />
        </Link>
        <Link to="https://www.linkedin.com/in/christianalexander23/">
        <img src="https://gmlconsult.com/wp-content/uploads/2021/10/Illustration-of-Linkedin-icon-on-transparent-background-PNG.png" alt="LinkedIn" />
        </Link>
        </div>
      </div>
    )
  }
  export default Footer