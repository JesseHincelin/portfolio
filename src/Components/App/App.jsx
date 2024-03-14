import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import { useSelector } from "react-redux";
import Home from "../Home/Home";
import Background from "../Background/Background";
import AboutMe from "../About me/AboutMe";

function App() {
  const { language } = useSelector((store) => store.languageState);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Background />,
      children: [
        { path: "/home", element: <Home /> },
        { path: "/about-me", element: <AboutMe /> },
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
