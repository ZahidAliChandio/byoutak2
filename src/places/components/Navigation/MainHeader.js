const MainHeader = (props) => {
  return (
    <header className="main-header flex items-center w-full h-10 z-20 bg-[#212020] card-shadow">
      <div className="flex gap-1 items-baseline text-[0.7rem] text-white px-4 font-sans-serif font-semibold">
        <span className="title">{props.type}</span>
        <i className="fas fa-chevron-right text-[0.57rem]"></i>
        <span className="subtitle">{props.subtype}</span>
      </div>
    </header>
  );
};
export default MainHeader;
