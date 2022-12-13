import { useState, useEffect, useCallback } from "react";
import http from "../../../utils/http";
import toast from "react-hot-toast";

import Input from "../../components/UI/Input";
import { useUnitTypeForm } from "../../hooks/unit-type";
import { useForm } from "../../hooks/form-hook";
import FormButton from "../../components/UI/FormButton";

const UnitTypeForm = ({ unitType, removeUnitFormHandler, index }) => {
  const [unitTypes, setUnitTypes] = useState(null);

  const getUnitTypes = useCallback(() => {
    http
      .get(`${process.env.REACT_APP_ATLAS_URI}/getUnitTypes/`)
      .then((response) => {
        if (response.status === 200) {
          const results = response?.data?.results;
          setUnitTypes(results);
        } else toast.error(response?.data?.error?.message);
      })
      .catch((err) => toast.error(err.message));
  }, []);

  useEffect(() => {
    getUnitTypes();
  }, [getUnitTypes]);

  const changeHandler = (e) => {
    unitType[e.target.name] = e.target.value;
  };
  // console.log(props.index);
  return (
    <div className="grid grid-cols-6  items-end justify-center gap-4 w-full">
      <div className=" flex flex-col gap-[0.18rem] text-[0.7rem]">
        <label className="font-semibold ">Unit Type</label>
        <select
          className={` py-[0.18rem] px-2 outline-none border border-gray-300 focus:border-[color:var(--red-color)] active:border-[color:var(--red-color)] w-full`}
          id={"unitType"}
          label={"Unit Type"}
          name={"UnitType"}
          onChange={changeHandler}
        >
          {unitTypes ? (
            unitTypes.map((UnitType, index) => (
              <option key={index} value={UnitType._id}>
                {UnitType.Name}
              </option>
            ))
          ) : (
            <option disabled>No Data to select</option>
          )}
        </select>
      </div>

      <div className=" flex flex-col gap-[0.18rem] text-[0.7rem]">
        <label className="font-semibold ">Unit Name</label>
        <input
          type={"text"}
          className={` py-[0.18rem] px-2 outline-none border border-gray-300 focus:border-[color:var(--red-color)] active:border-[color:var(--red-color)] w-full`}
          id={"name"}
          label={"Unit Name"}
          name={"UnitName"}
          onChange={changeHandler}
        />
      </div>
      <div className=" flex flex-col gap-[0.18rem] text-[0.7rem]">
        <label className="font-semibold ">Area From</label>
        <input
          type={"text"}
          className={` py-[0.18rem] px-2 outline-none border border-gray-300 focus:border-[color:var(--red-color)] active:border-[color:var(--red-color)] w-full`}
          id={"AreaFrom"}
          label={"Area From"}
          name={"AreaFrom"}
          onChange={changeHandler}
        />
      </div>
      <div className=" flex flex-col gap-[0.18rem] text-[0.7rem]">
        <label className="font-semibold ">Area To</label>
        <input
          type={"text"}
          className={` py-[0.18rem] px-2 outline-none border border-gray-300 focus:border-[color:var(--red-color)] active:border-[color:var(--red-color)] w-full`}
          id={"AreaTo"}
          label={"Area To"}
          name={"AreaTo"}
          onChange={changeHandler}
        />
      </div>
      <div className=" flex flex-col gap-[0.18rem] text-[0.7rem]">
        <label className="font-semibold ">Price</label>
        <input
          type={"text"}
          className={` py-[0.18rem] px-2 outline-none border border-gray-300 focus:border-[color:var(--red-color)] active:border-[color:var(--red-color)] w-full`}
          id={"Price"}
          label={"Price"}
          name={"Price"}
          onChange={changeHandler}
        />
      </div>

      <FormButton
        buttonClass="!px-2"
        containerClass="!border-none !p-0 !w-fit justify-self-center"
        // disabled={props.unitFormLength > 0 ? false : true}
        onClick={() => removeUnitFormHandler(index)}
      >
        <i className="fas fa-minus flex items-center justify-center text-xl h-5 w-5"></i>
      </FormButton>
    </div>
  );
};

export default UnitTypeForm;
