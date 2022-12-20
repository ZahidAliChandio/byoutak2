import { useRoutes } from "react-router-dom";

import PropertyType from "../pages/Selectional/PropertyType";
import PriceRange from "../pages/Selectional/PriceRange";
import Location from "../pages/Selectional/Location";
import Projects from "../pages/Projects/Projects";
import Slider from "../pages/Slider/Slider";
import Meeting from "../pages/Meeting/Meeting";
import ContactUs from "../pages/ContactUs/ContactUs";
import SearchProperty from "../pages/SearchProperty/SearchProperty";
import Property from "../pages/Property/Property";
import UnitType from "../pages/Selectional/UnitType";
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
          element: <AddDeveloper />,
        },
      ],
    },

    {
      path: "",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Location />,
        },
        { path: "price-range", element: <PriceRange /> },
        { path: "property-type", element: <PropertyType /> },
        { path: "unit-type", element: <UnitType /> },
        { path: "projects", element: <Projects /> },
        { path: "slider", element: <Slider /> },
        { path: "meeting", element: <Meeting /> },
        { path: "contactus", element: <ContactUs /> },
        { path: "search-property", element: <SearchProperty /> },
        { path: "property", element: <Property /> },
      ],
    },
  ]);
}
