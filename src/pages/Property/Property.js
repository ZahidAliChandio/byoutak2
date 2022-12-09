import { Fragment } from "react";
import PropertySlider from "./PropertySlider";
import Intro from "./Intro";
import Accordion from "./Accordion";

const Property = () => {
  return<Fragment>
    <PropertySlider />    
    <Intro/>
    <Accordion/>
  </Fragment> 
};
export default Property;
