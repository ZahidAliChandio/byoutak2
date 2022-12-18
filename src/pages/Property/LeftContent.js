import Accordion from "./Accordion";

const LeftContent = () => {
  return (
    <div className="text-white">
      <div>
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[red]">
          Property Highlights
        </h3>
        <p className="my-5 font-light leading-8 pr-4 sm:pr-8 md:pr-12 lg:pr-16">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi
        </p>
      </div>
      <Accordion />
    </div>
  );
};

export default LeftContent;
