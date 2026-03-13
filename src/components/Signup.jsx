import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Signup = () =>{
    // Initialize the hooks
    const[username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [tel, setTel] = useState("");


    // Define the three states an application will move to
    const [loading, setLoading] = useState("");
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    // Below is a function that will handle the submit action.
    const handleSubmit = async(e) =>{
        // Below we prevent our site from reloading
        e.preventDefault()

        // Update our loading hook with a message that will be displayed to the users who are trying to register.
        setLoading("Registration in progress...")

        try{
            // Create a form data object that will enable you to capture the four details enetered on the form
            const formdata = new FormData();

            // Insert the four details interms of key-value pairs
            formdata.append("username", username);
            formdata.append("email", email);
            formdata.append("password", password);
            formdata.append("tel", tel);

            // By use of axios, we can access the method post
            const response =await axios.post("https://keyarie.alwaysdata.net/api/signup", formdata)

            // Set back the loading to default
            setLoading("");

            // Incase all goes well, update the success hook with a message
            setSuccess(response.data.message)

            // Clear your hooks
            setUsername("");
            setEmail("");
            setPassword("");
            setTel("");
        }
        catch(error){
            // Set the loading back to default
            setLoading("");

            // Update the error hook with the message given back from the response
            setError(error.message)
        }
    }

    return(
        <div className='row justify-content-center mt-4'>
            <div className="card col-md-6 shadow p-4">
                <h1 className='text-primary'>SignUp</h1>
                <h5 className="text-warning">{loading}</h5>
                <h5 className="text-success">{success}</h5>


                <form onSubmit={handleSubmit}>
                    <input type="text"
                    placeholder='Enter Your Username'
                    className='form-control' 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required/>
                    <br />

                    {/* {username} */}

                    <input type="email" 
                    placeholder='Enter Your Email Address'
                    className='form-control'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required/>
                    <br />

                    {/* {email} */}

                    <input type="password"
                    placeholder='Enter Your Password'
                    className='form-control'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                    <br />

                    {/* {password} */}

                    <input type="tel"
                    placeholder='Enter Your Phone Number' 
                    className='form-control'
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}/>
                    <br />

                    {/* {tel} */}

                    <input type="submit" value="SignUp" className='btn btn-primary' /> <br /> <br />

                    Already have an account?<Link to={'/signin'}>SingIn</Link>

                </form>
            </div>
        </div>
    )
}

export default Signup;

// research on Axios in reactjs
// axios.get() fetches data.
// response.data contains the API data.
// useState stores the data.
// useEffect runs when the component loads.

// GET – Retrieve data
// POST – Send data
// PUT – Update data
// DELETE – Remove data
// Axios helps connect the React frontend with the backend API