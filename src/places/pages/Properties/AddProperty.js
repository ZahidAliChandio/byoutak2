import React, { Fragment, useRef, useState } from "react";

import BoxHeader from "../../components/UI/BoxHeader";
import MainHeader from "../../components/Navigation/MainHeader";
import AdminCard from "../../components/UI/AdminCard";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/FormButton";
import { useForm } from "../../hooks/form-hook";
import FormButton from "../../components/UI/FormButton";

function AddProperty(props) {
  const [formState, inputHandler] = useForm({
    propertyTitle: "",
    propertyType: "",
    propertySize: "",
    paymentMode: "",
    propertyAge: "",
    loanAvailability: "",
    selectedFile: "",
  });

  let counter=-1;

  const FormComponent = () => {
    counter+=1;
    return (
      <div className="grid grid-cols-5 items-center justify-center gap-1 sm:gap-2 md:gap-6 lg:gap-8 xl:gap-16 w-full" key={counter}>
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
          onInput={inputHandler}
          required
        />
        <Input
          id="unitName"
          label={"Name"}
          name={"UnitName"}
          placeholder="unit name"
          onInput={inputHandler}
          required
        />
        <Input
          id={"areaFrom"}
          label={"Area From"}
          name={"AreaFrom"}
          placeholder="area from"
          onInput={inputHandler}
          required
        />
        <Input
          id="areaTo"
          label={"Area To"}
          name="AreaTo"
          placeholder="area to"
          onInput={inputHandler}
        />
        <Input
          id="price"
          label={"Price"}
          name="Price"
          placeholder="price"
          onInput={inputHandler}
          required
        />
      </div>
    );
  };

  const [unitForm, setUnitForm] = useState([<FormComponent />]);

  const addUnitFormHandler = () => {
    setUnitForm(unitForm.concat([<FormComponent />]));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // const inputs = formState.inputs;
    console.log(formState);
    // console.log(...inputs, { selectedFile: e.target.files[0] });
  };

  return (
    <section className="w-full">
      <MainHeader type="Properties" subtype="Add New Property" />
      <div className="content p-2">
        <AdminCard>
          <div className="col-md-12">
            <div className="box box-primary">
              <BoxHeader title={`Add Property`} />

              <form onSubmit={onSubmitHandler}>
                <div className="box-body bozero mx5p flex flex-col gap-4 px-4 sm:px-12 md:px-16 py-3 text-[0.7rem] text-[#212020]">
                  <input type="hidden" name="ci_csrf_token" value="" />

                  <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-20 lg-gap:28 xl:gap-40">
                    <Input
                      id="propertyTitle"
                      label={"Property Title"}
                      name={"PropertyTitle"}
                      placeholder="property title"
                      onInput={inputHandler}
                      required
                    />
                    <Input
                      type="select"
                      items={["Select", "Residential", "Commercial", "Admin"]}
                      id={"propertyType"}
                      label={"Property Type"}
                      name={"PropertyType"}
                      onInput={inputHandler}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-20 lg-gap:28 xl:gap-40">
                    <Input
                      id={"propertySize"}
                      label={"Size"}
                      name={"Size"}
                      onInput={inputHandler}
                      required
                      placeholder="in acre"
                    />
                    <Input
                      type="select"
                      items={["Select", "Cash", "Credit"]}
                      id={"paymentMode"}
                      label={"Payment Mode"}
                      name={"PaymentMode"}
                      onInput={inputHandler}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-20 lg-gap:28 xl:gap-40">
                    <Input
                      id="propertyAge"
                      label={"Property Age"}
                      name="PropertyAge"
                      placeholder="in Years"
                      required
                      onInput={inputHandler}
                    />
                    <Input
                      type="select"
                      items={["Select", "Yes", "No"]}
                      id={"loanAvailability"}
                      label={"Loan Availability"}
                      name={"LoanAvailability"}
                      onInput={inputHandler}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold after:content-['*'] after:ml-0.5 after:text-red-500">
                      Amenities
                    </label>
                    <label
                      htmlFor="bathrooms"
                      className="flex gap-1 font-semibold"
                    >
                      <input
                        type="checkbox"
                        name="bahtrooms"
                        id="bathrooms"
                        className="w-[0.6rem]"
                      />
                      <span>Attached Bathroom</span>
                    </label>
                    <label
                      htmlFor="garage"
                      className="flex gap-1 font-semibold"
                    >
                      <input
                        type="checkbox"
                        name="garage"
                        id="garage"
                        className="w-[0.6rem]"
                      />
                      <span>Garage</span>
                    </label>
                  </div>
                  <div className="flex flex-col gap[0.18rem]">
                    <label className="font-semibold">Image</label>
                    <input
                      id={"imageSelected"}
                      name="ImageSelected"
                      type="file"
                      accept=".png, .jpg, .jpeg"
                      multiple
                      className="form-control border border-gray-300 bg-gray-50 rounded-l-sm"
                    />
                  </div>
                  <Input
                    type="textarea"
                    id="description"
                    label={"Description"}
                    name={"Description"}
                    onInput={inputHandler}
                  />
                </div>
                <div className="flex items-end md:gap-8 lg:gap-16 xl:gap-24 px-1 sm:px-4 md:px-10 lg:px-16 mb-4">
                  <div className="flex flex-col gap-4 mt-4">{unitForm}</div>

                  <FormButton
                    buttonClass="!px-2"
                    containerClass="!border-none !p-0 !w-fit"
                    onClick={addUnitFormHandler}
                  >
                    <i className="fa-regular fa-plus flex items-center justify-center text-3xl h-5 w-5 -translate-y-1"></i>
                  </FormButton>
                </div>
                <FormButton>Save</FormButton>
              </form>
            </div>
          </div>
        </AdminCard>
      </div>
    </section>
  );
}

export default AddProperty;
