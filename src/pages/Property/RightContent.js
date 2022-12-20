const RightContent = (props) => {
  const features = props.data.amenities;

  return props.data ? (
    <div className="text-white">
      <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[red]">
        Features
      </h3>
      <ul className="w-full my-6 text-lg">
        {features.map((feature, index) => (
          <li className="flex my-2 justify-between text-light" key={index}>
            <span>{feature.Name}</span>
            <span>{feature.Description}</span>
          </li>
        ))}
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
  ) : (
    <div></div>
  );
};
export default RightContent;
