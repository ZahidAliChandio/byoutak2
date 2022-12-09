import React, { useState, useEffect, useContext } from "react";
// import * as $ from 'jquery'
// import axios from 'axios';
// import md5 from 'md5';
import Dialog from "../components/UI/Dialog";
// import stateContext from '../../context/StateContext'
// import { ATLAS_URI } from '../../Constants'

function Login() {
  const [state, setState] = useState({
    dialogInfo: {
      isOpened: false,
      text: "",
    },
    businessName: "",
  });

  const loginOperator = (e) => {
    e.preventDefault();

    // const enteredUsername = $("#username").val();
    // const enteredPassword = md5($("#password").val()).substring(5, 25)
    // axios.post(`${ATLAS_URI}/authenticate`, { username: enteredUsername, password: enteredPassword })
    //     .then(res1 => {
    //         const userData = res1.data;
    //         if (typeof userData !== 'undefined' && userData !== null) {
    //             const { Username, Password, Name, Role } = userData;
    //             if (Password === enteredPassword) {
    //                 axios.get(`${ATLAS_URI}/getRoleByID/${Role}`)
    //                     .then(role => {
    //                         if (typeof role !== 'undefined') {

    //                             const loginTime = getCurrentTime();
    //                             const addedData = { Name: Name, Username: Username, Role: role.data.Role, LoginTime: loginTime };
    //                             //Add Login Details
    //                             axios.post(`${ATLAS_URI}/addLoginDetail/`, addedData)
    //                                 .then(response => {
    //                                     if (response.status === 200) {
    //                                         userData.LastLogin = loginTime;
    //                                         updateOperatorInfo(userData);
    //                                         window.location.href = "/dashboard"

    //                                         //Delete All Excels
    //                                         axios.delete(`${ATLAS_URI}/deleteAllExcels`);

    //                                     }
    //                                 }).catch(err => alert(err))
    //                         }
    //                     }).catch(err => alert(err))

    //             } else {
    //                 const newDialogInfo = { isOpened: true, text: "Incorrect Password", type: "Error" }
    //                 setState({ ...state, dialogInfo: newDialogInfo })
    //                 $(".errorMsg").css({ "font-size": "14px" })
    //                 setTimeout(() => { setState({ ...state, dialogInfo: { isOpened: false, text: "", type: "" } }) }, 3000)
    //             }

    //         } else {
    //             const newDialogInfo = { isOpened: true, text: "Incorrect Username", type: "Error" }
    //             setState({ ...state, dialogInfo: newDialogInfo })
    //             $(".errorMsg").css({ "font-size": "14px" })
    //             setTimeout(() => { setState({ ...state, dialogInfo: { isOpened: false, text: "", type: "" } }) }, 3000)
    //         }

    //     }).catch(err => alert("Not Authorized"))
  };

  const getCurrentTime = () => {
    const today = new Date();
    const date = today.getDate();
    const month = String(parseInt(today.getMonth()) + 1);

    return (
      (date < 10 && "0") +
      date +
      "-" +
      (month < 10 && "0") +
      month +
      "-" +
      today.getFullYear() +
      "  " +
      ("0" + today.getHours()).slice(-2) +
      ":" +
      ("0" + today.getMinutes()).slice(-2) +
      ":" +
      ("0" + today.getSeconds()).slice(-2)
    );
  };

  const [activeInputIndex, setInputIndex] = useState(null);
  const inputClickHandler = (index) => {
    setInputIndex(index);
  };

  return (
    <React.Fragment>
      {state.dialogInfo.isOpened && (
        <Dialog
          onClose={(e) =>
            setState({
              ...state,
              dialogInfo: { isOpened: false, text: "", type: "" },
            })
          }
          dialogInfo={state.dialogInfo}
        />
      )}
      <main
        id="loginSection"
        className="flex flex-col justify-center items-center h-screen"
      >
        <div className="login_container flex flex-col items-center w-full">
          <div className="flex flex-col justify gap-12 w-11/12 sm:w-3/4 md:w-1/2 lg:w-[30%]">
            <div className="flex flex-col gap-1 text-[#555] font-sans-serif font-semibold">
              <p className="login_heading text-lg">
                Real Estate CRM : Demo
              </p>
              <p className="login_subHeading text-sm font-semibold">CRM Login</p>
            </div>
            <div className="login_card relative bg-white flex border-t-4 border-[color:var(--red-color)] flex-col gap-4 px-10 rounded-tr-none rounded-sm form-signin-logo pt-12 pb-6 box-shadow">
              <form
                onSubmit={loginOperator}
                autoComplete="off"
                className="flex flex-col"
              >                
                <div className="relative z-0 mb-1 w-full group">
                  <input
                    type="email"
                    name="floating_email"
                    id="floating_email"
                    className="block pb-2 pt-5 px-2 w-full text-[#212020] bg-transparent border-transparent border border-b border-b-gray-600 appearance-none focus:outline-none focus:border-b-2 focus:border-[color:var(--red-color)] focus:ring-0 peer text-xs font-semibold"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_email"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform scale-75 top-3 -z-10 origin-[0] left-2 peer-focus:text-[#212020] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2"
                  >
                    Username
                  </label>
                  <i className={`inputIcon fas fa-user absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500 peer-focus:text-[color:var(--red-color)]`}></i>
                </div>
                <div className="relative z-0 mb-4 w-full group">
                  <input
                    type="password"
                    name="floating_password"
                    id="floating_password"
                    className="block pb-2 pt-5 px-2 w-full text-[#212020] border-transparent bg-transparent border border-b border-b-gray-600 appearance-none outline-none focus:ring-0 focus:border-[color:var(--red-color)] focus:border-b-2 peer text-xs font-semibold"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_password"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform scale-75 top-3 -z-10 origin-[0] left-2 peer-focus:text-[#212020] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2"
                  >
                    Password
                  </label>
                  <i className="inputIcon fas fa-lock absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500 peer-focus:text-[color:var(--red-color)]"></i>
                </div>
                <div className="flex w-full justify-end">
                  <button
                    type="submit"
                    id="loginBtn"
                    className="btn btn-success bg-[color:var(--red-color)] text-white py-[0.38rem] px-2 rounded-[0.3rem] text-sm outline-none font-open-sans"
                  >
                    Sign in
                  </button>
                </div>
              </form>              
              <div className="flex items-center gap-1 justify-center absolute -top-10 right-0 w-fit px-[0.7rem] h-9 bg-[color:var(--red-color)] text-white rounded-t-sm font-open-sans">
                <i className="far fa-user text-sm"></i>
                <span className="text-sm">Sign in</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default Login;
