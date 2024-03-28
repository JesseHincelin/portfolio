import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import { useSelector } from "react-redux";
import Home from "../Home/Home";
import Background from "../Background/Background";
import AboutMe from "../About me/AboutMe";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import Login from "../Log-in/Log-in";

function App() {
  const { language } = useSelector((store) => store.languageState);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Background />,
      children: [
        { path: "/home", element: <Home /> },
        { path: "/login", element: <Login /> },
        { path: "/about-me", element: <AboutMe /> },
        { path: "/portfolio", element: <Portfolio /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
