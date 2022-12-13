import { useEffect, useReducer } from "react";

const InputField = (props) => {
  const inputReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE":
        return {
          ...state,
          value: action.val,
        };
      case "RESET":
        return {
          value: "",
        };
      default:
        return state;
    }
  };

  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || "",
  });

  const {
    id,
    onInput,
    unitIndex,
    resetForm,
    setResetForm,
    updateForm,
    updateValue,
    setUpdateForm,
  } = props;
  const { value } = inputState;

  useEffect(() => {
    if (resetForm) {
      dispatch({ type: "RESET" });
      setResetForm(false);
    }
    if (updateForm) {
      dispatch({
        type: "CHANGE",
        val: updateValue,
      });
      setUpdateForm(false);
    }
    onInput(id, value);
  }, [
    id,
    value,
    onInput,
    unitIndex,
    resetForm,
    setResetForm,
    updateForm,
    setUpdateForm,
    updateValue,
  ]);

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
        value={props.value || inputState.value}
        required={props.required}
        onChange={props.onChange || onChangeHandler}
      />
    ) : props.type === "select" ? (
      <select
        className={`${props.className} py-[0.18rem] px-2 outline-none border border-gray-300 focus:border-[color:var(--red-color)] active:border-[color:var(--red-color)] w-full`}
        name="PropertyType"
        value={props.value || inputState.value}
        onChange={props.onChange || onChangeHandler}
      >
        {props.items ? (
          props.items.map((classData, index) => (
            <option key={index} value={classData._id}>
              {classData.Name
                ? classData.Name
                : classData.Location
                ? classData.Location
                : classData}
            </option>
          ))
        ) : (
          <option disabled>No data to show</option>
        )}
      </select>
    ) : (
      <input
        name={props.name}
        type="text"
        className={`${props.className} py-[0.18rem] px-2 outline-none border border-gray-300 focus:border-[color:var(--red-color)] active:border-[color:var(--red-color)]`}
        required={props.required}
        value={props.value || inputState.value}
        onChange={props.onChange || onChangeHandler}
        placeholder={props.placeholder}
      />
    );

  return (
    <div
      className={`${props.containerClass} flex flex-col gap-[0.18rem] text-[0.7rem]`}
    >
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
