import "../styles/navbar.scss";
import smileIcon from "../images/smileIcon.svg";
import arrowLeft from "../images/arrowLeft.svg";
import arrowRight from "../images/arrowRight.svg";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__iconsWrapper">
        <div className="navbar__iconsWrapper__arrowLeft">
          <img src={arrowLeft} alt="arrow pointing left" />
        </div>
        <div className="navbar__iconsWrapper__smileIcon">
          <img src={smileIcon} alt="smile face in a circle" />
        </div>
        <div className="navbar__iconsWrapper__arrowRight">
          <img src={arrowRight} alt="arrow poiting right" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
