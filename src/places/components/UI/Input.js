import { useEffect, useReducer } from "react";

const InputField = (props) => {
  const inputReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE":
        return {
          ...state,
          value: action.val,
        };
      default:
        return state;
    }
  };

  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || "",
  });

  const { id, onInput } = props;
  const { value } = inputState;

  useEffect(() => {
    onInput(id, value);
  }, [id, value, onInput]);

  const onChangeHandler = (e) => {
    dispatch({
      type: "CHANGE",
      val: e.target.value,
    });
  };

  const element =
    props.type === "textarea" ? (
      <textarea
        id={props.id}
        rows={props.rows || 4}
        className={`${props.className} py-[0.18rem] px-2 outline-none border border-gray-300 focus:border-[color:var(--red-color)] active:border-[color:var(--red-color)] w-full`}
        value={inputState.value}
        onChange={onChangeHandler}
      />
    ) : props.type === "select" ? (
      <select
        className={`${props.className} py-[0.18rem] px-2 outline-none border border-gray-300 focus:border-[color:var(--red-color)] active:border-[color:var(--red-color)] w-full`}
        name="PropertyType"
        value={inputState.value}
        onChange={onChangeHandler}
      >
        {props.items.map((classData, index) => (
          <option key={index} value={classData.id}>
            {classData}
          </option>
        ))}
      </select>
    ) : (
      <input
        name={props.name}
        type="text"
        className={`${props.className} py-[0.18rem] px-2 outline-none border border-gray-300 focus:border-[color:var(--red-color)] active:border-[color:var(--red-color)]`}
        required={props.required}
        value={inputState.value}
        onChange={onChangeHandler}
        placeholder={props.placeholder}
      />
    );

  return (
    <div className={`${props.containerClass} flex flex-col gap-[0.18rem] text-[0.7rem]`}>
      {" "}
      <label
        className={`${
          props.required &&
          "after:content-['*'] after:ml-0.5 after:text-red-500"
        } font-semibold`}
      >
        {props.label}
      </label>{" "}
      {element}
    </div>
  );
};
export default InputField;
