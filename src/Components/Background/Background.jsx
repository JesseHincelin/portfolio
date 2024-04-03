import { Outlet, useNavigate } from "react-router-dom";
import "./Background.scss";
import Button from "../General/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { LANGUAGE_OPTIONS, isEnglish, isFrench } from "../../Utils/general.utils";
import { setLanguage } from "../../Redux/Reducers/language.reducer";
import { useEffect } from "react";
import { resetUser } from "../../Redux/Reducers/user.reducer";
import { resetForm } from "../../Redux/Reducers/user-form.reducer";

const Background = () => {
  const { language } = useSelector((store) => store.languageState);
  const { userName } = useSelector((store) => store.userState);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleConnection = () => {
    navigate("/login"); //navigate to the connection component
  };

  const handleDisconnect = () => {
    dispatch(resetUser());
    dispatch(resetForm());
    localStorage.removeItem("token");
  };

  const handleEnglishClick = () => {
    if (isEnglish(language)) return;
    dispatch(setLanguage({ language: LANGUAGE_OPTIONS.ENGLISH }));
  };

  const handleFrenchClick = () => {
    if (isFrench(language)) return;
    dispatch(setLanguage({ language: LANGUAGE_OPTIONS.FRENCH }));
  };

  useEffect(() => {
    navigate("/home");
  }, []);

  return (
    <div className="background">
      <div className="background__box">
        <span>
          {!!userName ? (
            <Button
              className="background__connect"
              content={`Welcome ${userName} !`}
              title={"Log-out"}
              onClick={handleDisconnect}
            />
          ) : (
            <Button
              className="background__connect"
              content="Connect (temporary)"
              onClick={handleConnection}
            />
          )}
        </span>
        <span className="background__language">
          <Button
            className={
              isEnglish(language)
                ? "background__language--button english__button active__language"
                : "background__language--button english__button"
            }
            content="EN"
            onClick={handleEnglishClick} // could be one function only between En and Fr
          />
          <Button
            className={
              isFrench(language)
                ? "background__language--button french__button active__language"
                : "background__language--button french__button"
            }
            content="FR"
            onClick={handleFrenchClick} // could be one function only between En and Fr
          />
        </span>
      </div>
      <Outlet />
    </div>
  );
};

export default Background;
