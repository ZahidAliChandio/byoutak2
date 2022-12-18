import { createContext, useState } from "react";

export const SelectContext = createContext({
  value: [],
  setValueHandler: () => {},
});

export const SelectContextProvider = (props) => {
  const [value, setValue] = useState([]);

  const setValueHandler = (newValue) => {
    const insertedIndex = value.some((data) => data.pageId === newValue.pageId);
    if (insertedIndex) {
      console.log("Has inserted");
      const updatedData = [...value];
      const dataIndex = value.findIndex(
        (data) => data.pageId === newValue.pageId
      );
      updatedData[dataIndex].Name = newValue.Name;
      setValue(updatedData);
    } else {
      setValue([...value, newValue]);
    }
  };
  return (
    <SelectContext.Provider value={{ value, setValueHandler }}>
      {props.children}
    </SelectContext.Provider>
  );
};
