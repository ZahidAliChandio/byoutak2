import Input from "../../components/UI/Input";
import { useUnitTypeForm } from "../../hooks/unit-type";
import { useForm } from "../../hooks/form-hook";
import FormButton from "../../components/UI/FormButton";
import { useEffect } from "react";

const UnitTypeForm = (props) => {
  let { unitTypes } = props;

  const [unitType, unitTypeInputHandler, addDataHandler] = useUnitTypeForm({
    unitTypes,
  });

  useEffect(() => {
    addDataHandler(props.addDataHandler);
  }, [props, addDataHandler]);

  // console.log(unitType.unitName);
  console.log(unitTypes);

  // console.log(props.index);
  return (
    <div className="grid grid-cols-3 sm:grid-cols-6 items-end justify-center gap-4 sm:gap-2 md:gap-6 lg:gap-8 xl:gap-16 w-full">
      <Input
        type="select"
        items={[
          "Select",
          "Apartment",
          "Stand Alone Villa",
          "Town House",
          "Tiwn House",
        ]}
        id={"unitType"}
        label={"Unit Type"}
        name={"UnitType"}
        containerClass="w-full"
        onInput={unitTypeInputHandler}
        unitIndex={props.index}
        required
      />
      <Input
        id="unitName"
        label={"Name"}
        name={"UnitName"}
        placeholder="unit name"
        onInput={unitTypeInputHandler}
        unitIndex={props.index}
        required
      />
      <Input
        id={"areaFrom"}
        label={"Area From"}
        name={"AreaFrom"}
        placeholder="area from"
        onInput={unitTypeInputHandler}
        unitIndex={props.index}
        required
      />
      <Input
        id="areaTo"
        label={"Area To"}
        name="AreaTo"
        placeholder="area to"
        onInput={unitTypeInputHandler}
        unitIndex={props.index}
      />
      <Input
        id="price"
        label={"Price"}
        name="Price"
        placeholder="price"
        onInput={unitTypeInputHandler}
        unitIndex={props.index}
        required
      />
      <FormButton
        buttonClass="!px-2"
        containerClass="!border-none !p-0 !w-fit justify-self-center"
        // disabled={props.unitFormLength > 0 ? false : true}
        onClick={props.removeUnitFormHandler}
      >
        <i className="fas fa-minus flex items-center justify-center text-xl h-5 w-5"></i>
      </FormButton>
    </div>
  );
};

export default UnitTypeForm;
