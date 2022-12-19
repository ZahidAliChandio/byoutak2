import { useEffect } from "react";

const RightContent = (props) => {
  const features = props.data.id._Amenities
    ? props.data.id._Amenities
    : undefined;
  useEffect(() => {
    // console.log(props.data.id._Amenities);
    console.log(props);
  }, []);
  return (
    <div className="text-white">
      <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[red]">
        Features
      </h3>
      <ul className="w-1/2 sm:w-2/5 md:w-1/3 my-6 text-lg">
        {features &&
          features.map((feature, index) => (
            <li className="flex my-2 justify-between text-light" key={index}>
              <span>Name</span>
              <span>{feature.Name}</span>
            </li>
          ))}
      </ul>
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d620.5378467972187!2d-0.10250855518704426!3d51.52878311175945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761c9d832a73f9%3A0x8a9fd119dbe602ad!2sFCV%20Dorcas!5e0!3m2!1sen!2s!4v1671365136238!5m2!1sen!2s"
        width="100%"
        height="386"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
export default RightContent;
