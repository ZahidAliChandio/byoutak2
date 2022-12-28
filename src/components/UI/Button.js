const Button = (props) => {
  return (
    <button
      className={`${props.className} px-3 sm:px-7 py-2 md:py-3 rounded-lg text-sm md:text-base font-bold`}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
export default Button;
