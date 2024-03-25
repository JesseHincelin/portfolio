import { useDispatch, useSelector } from "react-redux";
import "./Log-in.scss";
import { useNavigate } from "react-router-dom";
import profile from "../../Source assets/round_profile.png";
import { LANGUAGE_OPTIONS } from "../../Utils/general.utils";
import Input from "../General/Input/Input";
import { handleFieldChange } from "../../Redux/Reducers/user-form.reducer";
import Button from "../General/Button/Button";
import SideNav from "../SideNav/SideNav";

const Login = () => {
  const { language } = useSelector((store) => store.languageState);
  const { error, loading, userNameValue, passwordValue } = useSelector(
    (store) => store.userFormState
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (value, props) => {
    dispatch(handleFieldChange({ value, props }));
  };

  const handleSubmit = () => {
    // dispatch login thunk
  };

  return (
    <div className="home">
      <div className="profile__img img">
        <img
          src={profile}
          alt="Profile picture of Jesse Hincelin"
          title="Jesse Hincelin"
        />
      </div>
      <div className="title">
        <h1 className="title__name">jesse hincelin</h1>
        <span className="title__job">
          {language === LANGUAGE_OPTIONS.ENGLISH
            ? "This area is to access the admin panel. If you are not the administrator of this web site, feel free to navigate the rest of the site. Enjoy your visit !"
            : "Cette section permet d'acceder aux fonctions administrateur du site. Si vous n'êtes pas l'administrateur, vous pouvez malgré tout naviger sur le reste du site. Très bonne visite !"}
        </span>
      </div>
      <form
        action="login"
        className="login__form"
        onSubmit={handleSubmit}
      >
        <Input
          className="login__form--user-name"
          id="userName"
          label="User name"
          value={userNameValue}
          autoFocus={true}
          disabled={!!loading}
          required={true}
          onInputChange={(value) => handleInputChange(value, "userNameValue")}
        />
        <Input
          className="login__form--password"
          id="password"
          label="Password"
          type="password"
          value={passwordValue}
          disabled={!!loading}
          required={true}
          onInputChange={(value) => handleInputChange(value, "password")}
        />
        <Button
          className="login__form--button"
          type="submit"
          disabled={!!loading}
          content="Log-in"
        />
      </form>
      <SideNav />
    </div>
  );
};

export default Login;
