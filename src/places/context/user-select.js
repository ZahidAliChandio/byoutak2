import { createContext, useState } from "react";

export const SelectContext = createContext({
  value: [],
  setValueHandler: () => {},
});

export const SelectContextProvider = (props) => {
  const [value, setValue] = useState([]);

  const setValueHandler = (newValue) => {
    setValue([...value, { newValue }]);
  };
  return (
    <SelectContext.Provider value={{ value, setValueHandler }}>
      {props.children}
    </SelectContext.Provider>
  );
};
