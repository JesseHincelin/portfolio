import { Outlet } from "react-router-dom";
import "./Background.scss";
import Button from "../General/Button/Button";

const Background = () => {
  return (
    <div className="background">
      <div className="background__overlay">
        <span className="background__language">
          <Button
            className="background__language--button english__button"
            content="EN"
            onClick={() => false} //function to switch language
          />
          <Button
            className="background__language--button french__button"
            content="FR"
            onClick={() => false} //function to switch language
          />
        </span>
        <Outlet />
      </div>
    </div>
  );
};

export default Background;
