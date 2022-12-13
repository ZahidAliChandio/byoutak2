import React, { useState, useCallback, useEffect } from "react";
import toast from "react-hot-toast";
import http from "../../../utils/http";

import BoxHeader from "../../components/UI/BoxHeader";
import MainHeader from "../../components/Navigation/MainHeader";
import AdminCard from "../../components/UI/AdminCard";
import Input from "../../components/UI/Input";
import { useForm } from "../../hooks/form-hook";
import { useUnitTypeForm } from "../../hooks/unit-type";
import FormButton from "../../components/UI/FormButton";
import UnitTypeForm from "./UnitTypeForm";
import { Fragment } from "react";

function AddProperty(props) {
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  // const [updateName, setUpdateName] = useState("");
  const [updateCity, setUpdateCity] = useState("");
  const [updateCountry, setUpdateCountry] = useState("");
  const [updateEstate, setUpdateEstate] = useState("");
  const [updateAddress, setUpdateAddress] = useState("");
  const [resetForm, setResetForm] = useState(false);
  const [updateForm, setUpdateForm] = useState(false);
  const [unitTypes, setUnitTypes] = useState([
    {
      unitType: "",
      name: "",
      areaFrom: "",
      areaTo: "",
      price: "",
    },
  ]);

  const [amenitiesData, setAmenitiesData] = useState(null);

  const [locationsData, setLocationsData] = useState(null);
  const [locationsName, setLocationsName] = useState([]);

  const [projectDevelopersData, setProjectDevelopersData] = useState(null);

  const getProjectDevelopers = useCallback(() => {
    http
      .get(`${process.env.REACT_APP_ATLAS_URI}/getProjectDevelopers/`)
      .then((response) => {
        if (response.status === 200) {
          const results = response?.data?.results;
          setProjectDevelopersData(results);
        } else toast.error(response?.data?.error?.message);
      })
      .catch((err) => toast.error(err.message));
  }, []);

  const getLocations = useCallback(() => {
    http
      .get(`${process.env.REACT_APP_ATLAS_URI}/getLocations/`)
      .then((response) => {
        if (response.status === 200) {
          const results = response?.data?.results;
          setLocationsData(results);
        } else toast.error(response?.data?.error?.message);
      })
      .catch((err) => toast.error(err.message));
  }, []);

  const getAmenities = useCallback(() => {
    http
      .get(`${process.env.REACT_APP_ATLAS_URI}/getAmenities/`)
      .then((response) => {
        if (response.status === 200) {
          const results = response?.data?.results;
          setAmenitiesData(results);
        } else toast.error(response?.data?.error?.message);
      })
      .catch((err) => toast.error(err.message));
  }, []);

  useEffect(() => {
    getProjectDevelopers();
  }, [getProjectDevelopers]);

  useEffect(() => {
    getLocations();
  }, [getLocations]);

  useEffect(() => {
    getAmenities();
  }, [getAmenities]);

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
    let updatedList = [...selectedAmenities];
    if (e.target.checked) {
      updatedList = [...selectedAmenities, e.target.value];
    } else {
      updatedList.splice(selectedAmenities.indexOf(e.target.value), 1);
    }
    setSelectedAmenities(updatedList);
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
                      id={"PropertyType"}
                      label={"Property Type"}
                      name={"PropertyType"}
                      onInput={inputHandler}
                      required
                    />
                    <Input
                      type="select"
                      items={
                        projectDevelopersData ? projectDevelopersData : null
                      }
                      id={"ProjectDeveloper"}
                      label={"Project Developer"}
                      name={"ProjectDeveloper"}
                      onInput={inputHandler}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 md:gap-20 lg-gap:5 xl:gap-5">
                    <Input
                      type="number"
                      id={"DownPayment"}
                      label={"Down Payment"}
                      name={"DownPayment"}
                      onInput={inputHandler}
                      required
                      placeholder="20000"
                    />
                    <Input
                      id={"Delivery"}
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
                      // items={locationsData ? locationsData : null}
                      items={null}
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
                    <h3 className="font-semibold after:content-['*'] after:ml-0.5 after:text-red-500">
                      Amenities
                    </h3>

                    {amenitiesData ? (
                      amenitiesData.map((amenity) => (
                        <div key={amenity._id} className="flex gap-2">
                          <input
                            type="checkbox"
                            name={`${amenity.Name}`}
                            id={`${amenity._id}`}
                            value={amenity.Name}
                            onChange={handleCheck}
                            className="w-[0.6rem]"
                          />
                          <label
                            htmlFor={`${amenity._id}`}
                            className="flex gap-1 font-semibold"
                          >
                            <span>{amenity.Name}</span>
                          </label>
                        </div>
                      ))
                    ) : (
                      <span>No Amenities to show</span>
                    )}
                  </div>
                </div>
                <FormButton
                  type="button"
                  onClick={() =>
                    setUnitTypes((prevState) => [
                      ...prevState,
                      {
                        UnitType: "",
                        UnitName: "",
                        AreaFrom: "",
                        AreaTo: "",
                        Price: "",
                      },
                    ])
                  }
                >
                  <i className="fa-regular fa-plus flex items-center justify-center text-3xl h-5 w-5"></i>
                </FormButton>
                <div className="flex items-end gap-4  px-1 sm:px-4 md:px-10 lg:px-16 my-4">
                  <div className="flex flex-col gap-4 w-full">
                    {unitTypes.map((form, index) => (
                      <UnitTypeForm
                        removeUnitFormHandler={(e) => {
                          setUnitTypes(unitTypes.filter((v, i) => i !== index));
                        }}
                        unitType={form}
                        key={index}
                        index={index}
                      />
                    ))}
                  </div>
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
