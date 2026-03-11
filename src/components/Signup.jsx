import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Signup = () =>{
    // Initialize the hooks
    const[username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [tel, setTel] = useState("");
    return(
        <div className='row justify-content-center mt-4'>
            <div className="card col-md-6 shadow p-4">
                <h1 className='text-primary'>SignUp</h1>

                <form>
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

                    <input type="button" value="SignUp" className='btn btn-primary' /> <br /> <br />

                    Already have an account?<Link to={'/signin'}>SingIn</Link>

                </form>
            </div>
        </div>
    )
}

export default Signup;

// research on Axios in reactjs