import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
// import stateContext from '../../context/StateContext'
// import { ATLAS_URI } from '../../Constants'
import toast, { Toaster } from "react-hot-toast";

function Login() {

  const [Name, setName] = useState()
  const [Password, setPassword] = useState()
  const navigate = useNavigate()

  const loginOperator = (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_ATLAS_URI}/Authenticate`, { Name, Password })
      .then(res1 => {
        localStorage.setItem('byoutakToken', res1.data.token)
        toast.success("Authentication Successful")
        navigate("/admin/addProperty")
      }).catch(err => toast.error("Not Authorized"))
  };



  return (
    <React.Fragment>
      <main
        id="loginSection"
        className="flex flex-col justify-center items-center h-screen"
      >
        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            className: "",
            duration: 5000,
            style: {
              background: "#fff",
              color: "#363636",
            },
            success: {
              duration: 3000,
              theme: {
                primary: "green",
                secondary: "black",
              },
            },
          }}
        />
        <div className="login_container flex flex-col items-center w-full">
          <div className="flex flex-col justify gap-12 w-11/12 sm:w-3/4 md:w-1/2 lg:w-[30%]">
            <div className="flex flex-col gap-1 text-gray-50 font-sans-serif font-semibold">
              <p className="login_heading text-lg">
                Byoutak : Admin
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
                    type="text"
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
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
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
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
