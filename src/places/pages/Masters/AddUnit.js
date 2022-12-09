import React, { useRef } from "react";

import BoxHeader from "../../components/UI/BoxHeader";
import MainHeader from "../../components/Navigation/MainHeader";
import AdminCard from "../../components/UI/AdminCard";
import Input from "../../components/UI/Input";
import { useForm } from "../../hooks/form-hook";

function AddUnit(props) {
  const [formState, inputHandler] = useForm({
    propertyTitle: "",
    propertyType: "",
    propertySize: "",
    paymentMode: "",
    propertyAge: "",
    loanAvailability: "",
    selectedFile: "",
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const inputs = formState.inputs;
    console.log(...inputs, { selectedFile: e.target.files[0] });
  };

  return (
    <section className="w-full">
      <MainHeader type="Properties" subtype="Add New Property" />
      <div className="content p-2">
        <AdminCard>
          <div className="col-md-12">
            <div className="box box-primary">
              <BoxHeader title={`Add Unit Type`} />

              <form onSubmit={onSubmitHandler}>
                <div className="box-body bozero mx5p flex flex-col gap-4 px-4 sm:px-12 md:px-16 py-3 text-[0.7rem] text-[#212020]">
                  <input type="hidden" name="ci_csrf_token" value="" />

                  <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-x-20 md:gap-y-6">
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
                </div>
                <div className="row p-2">
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
                <div className="box-footer flex w-full justify-end border-t p-2">
                  <button
                    type="submit"
                    className="btn text-white font-semibold text-sm bg-[color:var(--red-color)] px-3 py-1 rounded-md font-open-sans hover:bg-[red]"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </AdminCard>
      </div>
    </section>
  );
}

export default AddUnit;
