import React, { useState, useCallback, useEffect, Fragment } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import http from "../../../utils/http";

import BoxHeader from "../../components/UI/BoxHeader";
import MainHeader from "../../components/Navigation/MainHeader";
import AdminCard from "../../components/UI/AdminCard";
import Input from "../../components/UI/Input";
import { useForm } from "../../hooks/form-hook";
import FormButton from "../../components/UI/FormButton";
import UnitTypeForm from "./UnitTypeForm";

function AddProperty(props) {
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [updatePropertyTitle, setUpdatePropertyTitle] = useState("");
  const [updatePropertyType, setUpdatePropertyType] = useState("");
  const [updateProjectDeveloper, setUpdateProjectDeveloper] = useState("");
  const [updatePrice, setUpdatePrice] = useState("");
  const [yearsOnInstallment, setYearsOnInstallment] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [updateCity, setUpdateCity] = useState("");
  const [updateCountry, setUpdateCountry] = useState("");
  const [updateEstate, setUpdateEstate] = useState("");
  const [updateAddress, setUpdateAddress] = useState("");
  const [updateLocation, setUpdateLocation] = useState("");
  const [updateLocationLink, setUpdateLocationLink] = useState("");
  const [updateDescription, setUpdateDescription] = useState("");
  const [updateAmenities, setUpdateAmenities] = useState([]);
  const [resetForm, setResetForm] = useState(false);
  const [updateImages, setUpdateImages] = useState([]);
  const [unitTypes, setUnitTypes] = useState([{}]);
  const [images, setImages] = useState([]);
  const [amenitiesData, setAmenitiesData] = useState(null);

  const [locationsData, setLocationsData] = useState(null);
  const [projectDevelopersData, setProjectDevelopersData] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  // Data to be edited from viewAllProperties
  const [updateData, setUpdateData] = useState(location.state);
  const [editData, setEditData] = useState(updateData ? true : false);

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

  //Cheking if Update Property from viewAllProperties was clicked.
  useEffect(() => {
    console.log(updateData);
    if (updateData) {
      setUpdatePropertyTitle(updateData.Name);
      setUpdatePropertyType(updateData.Type);
      setUpdateProjectDeveloper(updateData.Project_Developer);
      setUpdatePrice(updateData.Price);
      const yearsToString = updateData.InstallmentYears.toString();
      setYearsOnInstallment(yearsToString);
      const paymentToString = updateData.DownPayment.toString();
      setDownPayment(paymentToString);
      setDeliveryDate(updateData.Delivery);
      setUpdateCity(updateData.City);
      setUpdateEstate(updateData.State);
      setUpdateCountry(updateData.Country);
      setUpdateAddress(updateData.Address);
      setUpdateLocation(updateData.Location);
      setUpdateLocationLink(updateData.Link);
      updateData.Images.forEach((image, index) => {
        setImages([...images, updateData.Images[index]]);
      });
      setUpdateDescription(updateData.Description);
      setUpdateAmenities(updateData._Amenities);
      console.log(updateData);
      setUnitTypes(updateData.Unit_PropertyType);
    } else {
      setImages([]);
      setUnitTypes([{}]);
    }
    setUpdateData(null);
  }, [updateData]);

  const [formState, inputHandler] = useForm({
    propertyTitle: "",
    propertyType: "Residential",
    propertySize: "",
    paymentMode: "",
    propertyAge: "",
    loanAvailability: "",
    selectedFile: "",
    amenities: [],
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
    const mergedFormState = { ...formState, unitTypes };
    // console.log(mergedFormState, images);
    // console.log(unitTypes);

    const formData = new FormData();

    if (images) {
      images.forEach((image) => {
        console.log(image);
        formData.append("SelectedImages", image[0]);
      });
    }

    formData.append("Name", mergedFormState.propertyTitle);
    formData.append("Type", mergedFormState.PropertyType);
    formData.append("Description", mergedFormState.description);
    formData.append("Amenities", mergedFormState.amenities);
    formData.append("Project_Developer", mergedFormState.ProjectDeveloper);
    formData.append(
      "Unit_PropertyType",
      JSON.stringify(mergedFormState.unitTypes)
    );
    formData.append("Price", mergedFormState.price);
    formData.append("DownPayment", mergedFormState.DownPayment);
    formData.append("InstallmentYears", mergedFormState.InstallmentYears);
    formData.append("Delivery", mergedFormState.Delivery);
    formData.append("Bedrooms", mergedFormState.bedrooms);
    formData.append("Bathrooms", mergedFormState.bathrooms);
    formData.append("Area", mergedFormState.area);
    formData.append("Location", mergedFormState.Location);
    formData.append("Link", mergedFormState.Link);
    formData.append("City", mergedFormState.City);
    formData.append("State", mergedFormState.state);
    formData.append("Country", mergedFormState.Country);
    formData.append("Address", mergedFormState.Address);
    console.log(formData);
    if (!updateData) {
      http
        .post(`${process.env.REACT_APP_ATLAS_URI}/addProperty/`, formData)
        .then((response) => {
          if (response.status === 200) {
            setResetForm(true);
            setUnitTypes([{}]);
            setImages([]);
            toast.success(response?.data?.message);
          } else toast.error(response.data.error.message);
        })
        .catch((err) => toast.error(err.message));
    } else {
      http
        .post(
          `${process.env.REACT_APP_ATLAS_URI}/updateProperty/${updateData._id}`,
          formData
        )
        .then((response) => {
          if (response.status === 200) {
            setResetForm(true);
            setEditData(false);
            setUpdateData(null);
            setUpdateAmenities([]);
            setImages([]);
            setUnitTypes([{}]);
            // to reset the location.state
            navigate("/admin/addProperty", { replace: true });

            toast.success(response?.data?.message);
          } else toast.error(response.data.error.message);
        })
        .catch((err) => toast.error(err.message));
    }
  };

  return (
    <section className="w-full">
      <MainHeader type="Properties" subtype="Add New Property" />
      <div className="content p-2">
        <AdminCard>
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
                    placeholder="Property title"
                    updateValue={updatePropertyTitle}
                    setUpdateValue={setUpdatePropertyTitle}
                    resetForm={resetForm}
                    setResetForm={setResetForm}
                    onInput={inputHandler}
                    required
                  />
                  <Input
                    type="select"
                    items={["Residential", "Commercial", "Admin"]}
                    id={"PropertyType"}
                    label={"Property Type"}
                    name={"PropertyType"}
                    updateValue={updatePropertyType}
                    setUpdateValue={setUpdatePropertyType}
                    resetForm={resetForm}
                    setResetForm={setResetForm}
                    onInput={inputHandler}
                    required
                  />
                  <Input
                    type="select"
                    items={projectDevelopersData}
                    id={"ProjectDeveloper"}
                    label={"Project Developer"}
                    name={"ProjectDeveloper"}
                    updateValue={updateProjectDeveloper}
                    setUpdateValue={setUpdateProjectDeveloper}
                    resetForm={resetForm}
                    setResetForm={setResetForm}
                    onInput={inputHandler}
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 md:gap-20 lg-gap:5 xl:gap-5">
                  <Input
                    inputType="number"
                    id={"price"}
                    label={"Price"}
                    name={"price"}
                    updateValue={updatePrice}
                    setUpdateValue={setUpdatePrice}
                    resetForm={resetForm}
                    setResetForm={setResetForm}
                    onInput={inputHandler}
                    required
                    placeholder="20000"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      inputType="number"
                      id={"InstallmentYears"}
                      label={"Years On Installment"}
                      name={"InstallmentYears"}
                      updateValue={yearsOnInstallment}
                      setUpdateValue={setYearsOnInstallment}
                      resetForm={resetForm}
                      setResetForm={setResetForm}
                      onInput={inputHandler}
                      required
                    />
                    <Input
                      inputType="number"
                      id="DownPayment"
                      label={"Down Payment"}
                      name="DownPayment"
                      updateValue={downPayment}
                      setUpdateValue={setDownPayment}
                      resetForm={resetForm}
                      setResetForm={setResetForm}
                      required
                      onInput={inputHandler}
                    />
                  </div>
                  <Input
                    id="Delivery"
                    label={"Delivery Date"}
                    name="Delivery"
                    updateValue={deliveryDate}
                    setUpdateValue={setDeliveryDate}
                    resetForm={resetForm}
                    setResetForm={setResetForm}
                    required
                    onInput={inputHandler}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 md:gap-5 lg-gap:5 xl:gap-5">
                  <Input
                    label={"City"}
                    id={"City"}
                    name={"City"}
                    updateValue={updateCity}
                    setUpdateValue={setUpdateCity}
                    resetForm={resetForm}
                    setResetForm={setResetForm}
                    onInput={inputHandler}
                    required
                  />
                  <Input
                    label={"State"}
                    id={"state"}
                    name={"state"}
                    updateValue={updateEstate}
                    setUpdateValue={setUpdateEstate}
                    resetForm={resetForm}
                    setResetForm={setResetForm}
                    onInput={inputHandler}
                    required
                  />
                  <Input
                    label={"Country"}
                    id={"Country"}
                    name={"Country"}
                    updateValue={updateCountry}
                    setUpdateValue={setUpdateCountry}
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
                    updateValue={updateAddress}
                    setUpdateValue={setUpdateAddress}
                    resetForm={resetForm}
                    setResetForm={setResetForm}
                    onInput={inputHandler}
                    required
                  />
                  <Input
                    type="select"
                    items={locationsData}
                    id={"Location"}
                    label={"Location"}
                    name={"Location"}
                    updateValue={updateLocation}
                    setUpdateValue={setUpdateLocation}
                    resetForm={resetForm}
                    setResetForm={setResetForm}
                    onInput={inputHandler}
                    required
                  />
                  <Input
                    type="url"
                    items={["Select", "Cash", "Credit"]}
                    id={"Link"}
                    label={"Location Link"}
                    name={"Link"}
                    updateValue={updateLocationLink}
                    setUpdateValue={setUpdateLocationLink}
                    resetForm={resetForm}
                    setResetForm={setResetForm}
                    onInput={inputHandler}
                    required
                  />
                </div>
                <div className="flex flex-col gap[0.18rem]">
                  <label className="font-semibold">Image</label>
                  <input
                    id={"ImageSelected"}
                    name="ImageSelected"
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    multiple
                    onChange={(e) =>
                      setImages((prevState) => [
                        ...prevState,
                        Object.values(e.target.files),
                      ])
                    }
                    className="form-control border border-gray-300 bg-gray-50 rounded-l-sm"
                  />
                  {/* {typeof images !== 'undefined' && images.map((image, key) =>
                      <span key={key} index={key} className='databaseImgArea'>
                        <img alt="database images" style={{ margin: "5px 2px", objectFit: "cover" }} src={`${process.env.ATLAS_URI}/file/${image}`} width={60} height={60}></img>
                        <button type='button' onClick={this.openDialog}>x</button>
                      </span>
                    )} */}
                  <div className="inline-flex">
                    {images.length > 0 &&
                      images.map((image, index) => (
                        <img
                          alt="selected images"
                          className="w-20 h-20 m-1"
                          src={
                            !location.state
                              ? URL.createObjectURL(image[0])
                              : `${process.env.REACT_APP_ATLAS_URI}/file/${image}`
                          }
                          width={60}
                          height={60}
                          key={index}
                        ></img>
                      ))}
                  </div>
                </div>
                <Input
                  type="textarea"
                  id="description"
                  label={"Description"}
                  name={"Description"}
                  updateValue={updateDescription}
                  setUpdateValue={setUpdateDescription}
                  resetForm={resetForm}
                  setResetForm={setResetForm}
                  onInput={inputHandler}
                />

                <div className="flex flex-col gap-2 ">
                  <h3 className="font-semibold after:content-['*'] after:ml-0.5 after:text-red-500">
                    Amenities
                  </h3>

                  {!resetForm && amenitiesData ? (
                    amenitiesData.map((amenity) => (
                      <div key={amenity._id} className="flex gap-2">
                        <input
                          type="checkbox"
                          name={`${amenity.Name}`}
                          id={`${amenity._id}`}
                          value={amenity._id}
                          onChange={handleCheck}
                          defaultChecked={
                            !resetForm &&
                            updateAmenities.some(
                              (amty) => amty._id === amenity._id
                            )
                          }
                          className="w-[0.6rem]"
                        />
                        <label
                          htmlFor={`${amenity._id}`}
                          className="flex gap-1 font-semibold"
                        >
                          <span>
                            {amenity.Name}{" "}
                            <span className="font-normal">
                              ({amenity.Description})
                            </span>
                          </span>
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
              <FormButton>{editData ? "Update" : "Save"}</FormButton>
            </form>
          </div>
        </AdminCard>
      </div>
    </section>
  );
}

export default AddProperty;
