import React, { Fragment, useState } from "react";

import BoxHeader from "../../components/UI/BoxHeader";
import MainHeader from "../../components/Navigation/MainHeader";
import AdminCard from "../../components/UI/AdminCard";
import Input from "../../components/UI/Input";
import { useForm } from "../../hooks/form-hook";
import { useUnitTypeForm } from "../../hooks/unit-type";
import FormButton from "../../components/UI/FormButton";
import UnitTypeForm from "./UnitType";

function AddProperty(props) {
  const [checkboxesList, setCheckboxesList] = useState([]);
  const [updateName, setUpdateName] = useState("");
  const [updateCity, setUpdateCity] = useState("");
  const [updateCountry, setUpdateCountry] = useState("");
  const [updateEstate, setUpdateEstate] = useState("");
  const [updateAddress, setUpdateAddress] = useState("");
  const [resetForm, setResetForm] = useState(false);
  const [updateForm, setUpdateForm] = useState(false);
  const [updateData, setUpdateData] = useState(null);
  const [unitTypes, setUnitTypes] = useState([
    {
      unitType: "",
      name: "",
      areaFrom: "",
      areaTo: "",
      price: "",
    },
  ]);

  // const removeUnitFormHandler = (formIndex) => {
  //   const newUnitForm = unitForm.filter(
  //     (unitForm, index) => index !== formIndex
  //   );
  //   setUnitForm(newUnitForm);
  // };


  const [formState, inputHandler] = useForm({
    propertyTitle: "",
    propertyType: "",
    propertySize: "",
    paymentMode: "",
    propertyAge: "",
    loanAvailability: "",
    selectedFile: "",
    amenities: [],
    UnitTypes: [
      {
        unitType: "",
        name: "",
        areaFrom: "",
        areaTo: "",
        price: "",
      },
      {
        unitType: "",
        name: "",
        areaFrom: "",
        areaTo: "",
        price: "",
      },
    ],
  });

  const handleCheck = (e) => {
    let updatedList = [...checkboxesList];
    if (e.target.checked) {
      updatedList = [...checkboxesList, e.target.value];
    } else {
      updatedList.splice(checkboxesList.indexOf(e.target.value), 1);
    }
    setCheckboxesList(updatedList);
    inputHandler("amenities", updatedList);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("clicked");
    console.log(formState);
    console.log(unitTypes);
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

                  <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-2 md:gap-20 lg-gap:5 xl:gap-5">
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
                    <Input
                      type="select"
                      items={["Select", "Residential", "Commercial", "Admin"]}
                      id={"propertyType"}
                      label={"Project Developer"}
                      name={"ProjectDeveloper"}
                      onInput={inputHandler}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 md:gap-20 lg-gap:5 xl:gap-5">
                    <Input
                      type="number"
                      id={"downPayment"}
                      label={"Down Payment"}
                      name={"DownPayment"}
                      onInput={inputHandler}
                      required
                      placeholder="20000"
                    />
                    <Input
                      type="text"
                      items={["Select", "Cash", "Credit"]}
                      id={"delivery"}
                      label={"Delivery"}
                      name={"delivery"}
                      onInput={inputHandler}
                      required
                    />
                    <Input
                      id="installmentYears"
                      label={"Installment Years"}
                      name="installmentYears"
                      placeholder="in Years"
                      required
                      onInput={inputHandler}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 md:gap-5 lg-gap:5 xl:gap-5">

                    <Input
                      label={"City"}
                      id={"City"}
                      name={"City"}
                      updateForm={updateForm}
                      setUpdateForm={setUpdateForm}
                      updateValue={updateCity}
                      resetForm={resetForm}
                      setResetForm={setResetForm}
                      onInput={inputHandler}
                      required
                    />
                    <Input
                      label={"State"}
                      id={"state"}
                      name={"state"}
                      updateForm={updateForm}
                      setUpdateForm={setUpdateForm}
                      updateValue={updateEstate}
                      resetForm={resetForm}
                      setResetForm={setResetForm}
                      onInput={inputHandler}
                      required
                    />
                    <Input
                      label={"Country"}
                      id={"Country"}
                      name={"Country"}
                      updateForm={updateForm}
                      setUpdateForm={setUpdateForm}
                      updateValue={updateCountry}
                      resetForm={resetForm}
                      setResetForm={setResetForm}
                      onInput={inputHandler}
                      required
                    />

                    <Input
                      type="textarea"
                      label={"Address"}
                      id={"Address"}
                      name={"Address"}
                      updateForm={updateForm}
                      setUpdateForm={setUpdateForm}
                      updateValue={updateAddress}
                      resetForm={resetForm}
                      setResetForm={setResetForm}
                      onInput={inputHandler}
                      required
                    />
                    <Input
                      type="select"
                      items={["Select", "Cash", "Credit"]}
                      id={"location"}
                      label={"Location"}
                      name={"location"}
                      onInput={inputHandler}
                      required
                    />
                    <Input
                      type="url"
                      items={["Select", "Cash", "Credit"]}
                      id={"link"}
                      label={"Location Link"}
                      name={"locationLink"}
                      onInput={inputHandler}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap[0.18rem]">
                    <label className="font-semibold">Image</label>
                    <input
                      id={"imageSelected"}
                      name="ImageSelected"
                      type="file"
                      accept=".png, .jpg, .jpeg"
                      multiple
                      onChange={(e) => inputHandler("image", e.target.files[0])}
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

                  <div className="flex flex-col gap-2 ">
                    <label className="font-semibold after:content-['*'] after:ml-0.5 after:text-red-500">
                      Amenities
                    </label>
                    <label
                      htmlFor="attachedBathroom"
                      className="flex gap-1 font-semibold"
                    >
                      <input
                        type="checkbox"
                        name="attachedBahtroom"
                        id="attachedBathroom"
                        value={"Attached Bathroom"}
                        onChange={handleCheck}
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
                        value={"garage"}
                        id="garage"
                        onChange={handleCheck}
                        className="w-[0.6rem]"
                      />
                      <span>Garage</span>
                    </label>
                  </div>

                </div>
                <FormButton type="button" onClick={() => setUnitTypes(prevState => ([...prevState, {
                  UnitType: "",
                  UnitName: "",
                  AreaFrom: "",
                  AreaTo: "",
                  Price: ""
                }]))}>
                    <i className="fa-regular fa-plus flex items-center justify-center text-3xl h-5 w-5"></i>
                  </FormButton>
                <div className="flex items-end gap-4  px-1 sm:px-4 md:px-10 lg:px-16 my-4">
                  <div className="flex flex-col gap-4 w-full">

                    {
                      unitTypes.map((form, index) => <>
                        <UnitTypeForm
                          removeUnitFormHandler={(e) => { setUnitTypes(unitTypes.filter((v, i) => i !== index)); }}
                          unitType={form}
                          key={index}
                          index={index}
                        />
                      </>)
                    }</div>
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
