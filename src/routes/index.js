import { useRoutes } from "react-router-dom";

import NewHome from "../pages/Selectional/NewHome";
import Unit from "../pages/Selectional/Unit";
import Price from "../pages/Selectional/Price";
import Projects from "../pages/Projects/Projects";
import Slider from "../pages/Slider/Slider";
import Meeting from "../pages/Meeting/Meeting";
import ContactUs from "../pages/ContactUs/ContactUs";
import Search from "../pages/Search/Search";
import PropertyPage from "../pages/Property/Property";
import Property from "../pages/Selectional/Property";
import Login from "../places/pages/Login";

import {
  AddProperty,
  ViewAllProperties,
} from "../places/pages/Properties/Properties";
import {
  AddLocation,
  AddAmenities,  
  AddUnitType,
} from "../places/pages/Masters/Masters";

import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";
import AddDeveloper from "../places/pages/Masters/AddDeveloper";

export default function Router() {
  return useRoutes([
    {
      path: "admin",
      children: [
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
    {
      path: "admin",
      element: <AdminLayout />,

      children: [
        {
          path: "addProperty",
          element: <AddProperty />,
        },
        {
          path: "viewAllProperties",
          element: <ViewAllProperties />,
        },
        {
          path: "addLocation",
          element: <AddLocation />,
        },
        {
          path: "addAmenities",
          element: <AddAmenities />,
        },        
        {
          path: "addUnitType",
          element: <AddUnitType />,
        },
        {
          path: "addDeveloper",
          element: <AddDeveloper/>,
        },
      ],
    },    

    {
      path: "",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <NewHome />,
        },
        { path: "unit", element: <Unit /> },
        { path: "price", element: <Price /> },
        { path: "property", element: <Property /> },
        { path: "projects", element: <Projects /> },
        { path: "slider", element: <Slider /> },
        { path: "meeting", element: <Meeting /> },
        { path: "contactus", element: <ContactUs /> },
        { path: "search", element: <Search /> },
        { path: "property-page", element: <PropertyPage /> },
      ],
    },
  ]);
}
