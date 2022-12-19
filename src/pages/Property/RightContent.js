
const RightContent = (props) => {
<<<<<<< HEAD
  const features = props.data.id._Amenities
    ? props.data.id._Amenities
    : undefined;
  useEffect(() => {
    // console.log(props.data.id._Amenities);
    console.log(props);
  }, []);
=======
  const features = props.data.amenities;


>>>>>>> f8e1d23268ffa861343a5ca60d9e85f86fd9a99e
  return (
    <div className="text-white">
      <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[red]">
        Features
      </h3>
<<<<<<< HEAD
      <ul className="w-1/2 sm:w-2/5 md:w-1/3 my-6 text-lg">
        {features &&
          features.map((feature, index) => (
            <li className="flex my-2 justify-between text-light" key={index}>
              <span>Name</span>
              <span>{feature.Name}</span>
            </li>
          ))}
=======
      <ul className="w-full my-6 text-lg">
        {features.map((feature, index) => (
          <li className="flex my-2 justify-between text-light" key={index}>
            <span>{feature.Name}</span>
            <span>{feature.Description}</span>
          </li>
        ))}
>>>>>>> f8e1d23268ffa861343a5ca60d9e85f86fd9a99e
      </ul>
      <iframe
        title="map"
        src={props.data.link}
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
