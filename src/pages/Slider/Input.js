const Input = (props) => {
  const content = props.content;

  return (
    <div className="relative">
      <select
        className={
          "border-2 border-[red] rounded-full px-4 py-3 bg-transparent w-full focus:outline-none appearance-none cursor-pointer"
        }
      >
        {content.map((item, index) => (
          <option
            key={item.id}
            value={item.value}
            className="bg-white text-black hover:text-[red] focus:text-[red]"
          >
            {item.value}
            {console.log(item.value)}
          </option>
        ))}
      </select>
      <i className="fas fa-chevron-down absolute right-5 top-1/2 -translate-y-1/2 text-[red]"></i>
      {/* <label htmlFor={`${props.Id}`}>{props.label}</label>

      <input
        type={`${props.type}` || "text"}
        onChange={props.onChange}
        value={props.value}
        className={"border-2 border-[red] rouded-full px-3"}
        placeholder={props.place}
      /> */}
    </div>
  );
};

export default Input;
