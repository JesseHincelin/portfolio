import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import { useSelector } from "react-redux";
import Home from "../Home/Home";
import Background from "../Background/Background";
import AboutMe from "../About me/AboutMe";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import Login from "../Log-in/Log-in";
import Edit from "../Edit/Edit general/Edit";
import EditPortfolio from "../Edit/Edit portfolio/EditPortfolio";
import EditProject from "../Edit/Edit project/EditProject";
import EditDashboard from "../Edit/Edit Dashboard/EditDashboard";
import NewProject from "../Edit/New project/NewProject";

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
        {
          path: "/edit",
          element: <Edit />,
          children: [
            { path: "/edit/dashboard", element: <EditDashboard /> },
            { path: "/edit/portfolio", element: <EditPortfolio /> },
            { path: "/edit/edit-project", element: <EditProject /> },
            { path: "/edit/new-project", element: <NewProject /> },
          ],
        },
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
