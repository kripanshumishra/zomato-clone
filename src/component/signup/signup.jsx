import { useState } from "react";
import Navbar from "../Header/navbar";
const signUp_url = "https://cherry-cake-46896.herokuapp.com/api/auth/register";
export default () => {
  const [userInfo, setUserInfo] = useState({ email: "" });

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState({isError:false});

  // Handling the name change
  const handleChange = (e) => {
    setUserInfo((prev) => {
      return { ...prev, [e.target.name]: e.target.value.trim() };
    });
  };
  //   console.log(userInfo);

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      userInfo.name === "" ||
      userInfo.email === "" ||
      userInfo.password === ""
    ) {
      setError(prev=>{ // checking if all the input in signup form is filled or not
        return {...prev,isError:true,msg:"",input_reminder:"Please enter all the fields"}
      });
    } else {
      fetch(signUp_url, 
        { 
          method: "POST",
          body:JSON.stringify(userInfo),
          headers:{
            "accept":"application/json",
            "Content-Type":"application/json"
          }
         })
         .then(data=>data.json())
         .then(data=>{
           if(data.register===true){
            setSubmitted(true);
            setError(prev=>{
              return {...prev,isError:false,msg:"",input_reminder:""}
            })
           }else{
             setError(prev=>{
               return {...prev,isError:true,msg:data.msg?data.msg:"invalid credential",input_reminder:""}
             })
             setSubmitted(false)
           }
         
         })
         .catch(e=>{
           console.log(error)
           setError(prev=>{
            return {...prev,isError:true,msg:"something went wrong...",input_reminder:""}
          })
         })
      
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h4>User {userInfo.name} successfully registered!!</h4>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error.isError ? "" : "none",
        }}
      >
        <h3>{error.msg}{error.input_reminder} </h3>
        <p>{error?.isError?error.isError:""} </p>
      </div>
    );
  };

  return (
    <>
    <Navbar/>
    <div className=" app-form-outer-container mt-4">
      <div className="login-form">
        <div>
          <h2>User Registration</h2>
        </div>

        {/* Calling to the methods */}
        <div className="messages">
          {errorMessage()}
          {successMessage()}
        </div>
        <div className="form">
          <form>
            {/* Labels and inputs for form data */}
            <div className="input-container">
              <label className="label">Name</label>
              <input
                onChange={handleChange}
                className="input"
                value={userInfo.name}
                name="name"
                type="text"
              />
            </div>
            <div className="input-container">
              <label className="label">Email</label>
              <input
                onChange={handleChange}
                className="input"
                value={userInfo.email}
                name="email"
                type="text"
              />
            </div>
            <div className="input-container">
              <label className="label">Phone no.</label>
              <input
                onChange={handleChange}
                className="input"
                value={userInfo.mobile}
                name="mobile"
                type="text"
              />
            </div>
            <div className="input-container">
              <label className="label">Password</label>
              <input
                onChange={handleChange}
                className="input"
                value={userInfo.password}
                name="password"
                type="password"
              />
            </div>
            <button onClick={handleSubmit} className="submit-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};
