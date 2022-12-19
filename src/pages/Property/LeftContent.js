import Accordion from "./Accordion";

const LeftContent = (props) => {
  const data = props.data;
  return (
    <div className="text-white">
      <div>
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[red]">
          Property Highlights
        </h3>
        <p className="my-5 font-light leading-8 sm:pr-8 md:pr-12 lg:pr-16">
          {data.id.Description}
        </p>
      </div>
      <Accordion data={data.unitTypes} />
    </div>
  );
};

export default LeftContent;
