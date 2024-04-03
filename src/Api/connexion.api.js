import { resetForm, setFormError, startLoading } from "../Redux/Reducers/user-form.reducer";
import { setUser } from "../Redux/Reducers/user.reducer";
import { saveLocalStorage } from "../Utils/general.utils";
import { postRequest } from "./requests.api";

export const loginThunk = () => async (dispatch, getStates) => {
  const { loading, userNameValue, passwordValue } = getStates().userFormState;

  if (!!loading) return;
  dispatch(startLoading());

  const response = await postRequest("user/login", {
    userName: userNameValue.trim(),
    password: passwordValue.trim(),
  });

  if (!!response.error) {
    dispatch(setFormError({ error: response.error }));
  }

  if (!!response.result && !!response.result.user && response.result.token) {
    dispatch(setUser({ user: response.result.user }));
    saveLocalStorage("token", response.result.token);
    dispatch(resetForm());

    // navigateTo("/dashboard", functionNavigate);
  }
};

// export const autoLoginThunk = (functionNavigate) => async (dispatch, getStates) => {
//   const { loading } = getStates().userFormState;

//   if (!!loading) return;
//   dispatch(startLoading());

//   const response = await getRequest("user/auto-login", getFromStorage("token"));

//   if (!!response.error) {
//     localStorage.removeItem("token");
//     dispatch(resetForm());
//     navigateTo("/login", functionNavigate);
//   }

//   if (!!response.result && !!response.result.user) {
//     dispatch(setUser({ user: response.result.user }));
//     // navigateTo(getFromStorage("route"), functionNavigate);
//   }
// };
