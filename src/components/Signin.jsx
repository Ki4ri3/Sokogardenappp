import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Signin = () => {

  // Define the two hooks for capturing/storing the users input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Declare the additional hooks
  const [loading,setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Below we have useNavigate hook to redirect the user to another page on successful login
  const navigate = useNavigate()

  // Below is the function that will handle the signin action
  const handlesubmit = async (e) =>{

    // Prevent site from reloading
    e.preventDefault()

    // Update the loading hoook 
    setLoading("Kindly wait as we process your request...")

    try{
      // Create a fornData object that will hold the email and the password
      const formdata = new FormData()

      // 
      formdata.append("email", email);
      formdata.append("password", password);

      // Interact with axios for the response
      const response = await axios.post("https://kbenkamotho.alwaysdata.net/api/signin", formdata);

      // Set the loading hook back to default
      setLoading("");

      // Check whether themuser exists as part of the response from the API
      if(response.data.user){
        // If user exists -> details enteres are correct
        // setSuccess("Successfully Logged In")
        // If it is successful -> user to be redirected to another page
        navigate("/")
      }
      else{
        // If user does not exist -> credentials entered are incorrect.
        setError("Login failed. Please Try Again!")
      }
    }
    catch(error){
      // Set loading back to default
      setLoading("")

      // Update the error hook with message
      setError("Oops! Please try again later")

    }
  }



  return (
    <div className='row justify-content-center mt-4'>
      <div className="col-md-6 shadow p-4">
        <h1 className='text-warning'>Sign In</h1>

        <h5 className="text-info">{loading}</h5>
        <h3 className='text-success'>{success}</h3>
        <h4 className='text-danger'>{error}</h4>

        <form onSubmit={handlesubmit}>
          <input type="email"
          placeholder='Enter Email Adress'
          className='form-control'
          required 
          value={email}
          onChange={(e) => setEmail(e.target.value)}/> <br />

          {/* {email} */}

          <input type="password"
          placeholder='Enter Your Password'
          className='form-control'
          required 
          value={password}
          onChange={(e) => setPassword(e.target.value)}/> <br />

          {/* {password} */}

          <input type="submit"
          value="SignIn"
          className='btn btn-success' />
          Don't have an account? <Link to={'/signup'}>SignUp</Link>
        </form>
      </div>
    </div>
  )
}

export default Signin;
