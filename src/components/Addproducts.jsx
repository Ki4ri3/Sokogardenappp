import React, { useState } from 'react'
import Loader from './Loader';
import axios from 'axios';


const Addproducts = () => {

  // Introduce the hooks
  const [product_name, setProductName] = useState("");
  const [product_description, setProductDescription] = useState("");
  const [product_cost, setProductCost] = useState("");
  const [product_photo, setProductPhoto] = useState("");

  // Declare additional hooks to manage the state of the app
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Create a function that will handle the submit action
  const handleSumit = async (e) =>{

    // Prevent the site from reloading
    e.preventDefault()

    // setLoading hook with a message
    setLoading(true);

    try{
      // Create a form data
      const formdata = new FormData()
      // Append the details to the form data created
      formdata.append("product_name", product_name);
      formdata.append("product_description", product_description);
      formdata.append("product_cost", product_cost);
      formdata.append("product_photo", product_photo);

      // Interact with axois module to help you use the method post
      const response = await axios.post("https:/keyarie.alwaysdata.net/api/add_product",formdata);

      // Set the loading hook back to default
      setLoading(false)

      // update the success hook with a message
      setSuccess(response.data.message);

      // Clear the hooks (setting them back to default/empty)
      setProductName("");
      setProductDescription("");
      setProductCost("");
      setProductPhoto("");

      setTimeout(() => {
        setSuccess("");
      }, 5000);
    }
    catch(error){
      // Set loading hook back to default
      setLoading(false);

      // Update the setError with a message
      setError(error.message) 

    }
  }


  return (
    <div className='row justify-content-center mt-4'>
      <div className="col-md-6 p-4 card shadow bg-dark">
        <h3 className='text-primary'>Welcome To Add Product</h3>

        {/* bind the loading hook */}
        {loading && <Loader/>}

        <h3 className='text-success'>{success}</h3>
        <h4 className='text-danger'>{error}</h4>

        <form onSubmit={handleSumit}>
          <input type="text"
          placeholder='Enter the Product Name'
          className='form-control'
          required 
          value={product_name}
          onChange={(e) => setProductName(e.target.value)} /> 
          
          {/* {product_name} */}
          
          <br />

          <input type="text" 
          placeholder='Enter the Product Description'
          className='form-control'
          required 
          value={product_description}
          onChange={(e) => setProductDescription(e.target.value)}/> <br />

          {/* {product_description} */}

          <input type="number"
          placeholder='Enter the Price of the Product'
          className='form-control'
          required 
          value={product_cost}
          onChange={(e) => setProductCost(e.target.value)}/> <br />

          {product_cost}

          <label className='text-primary'>Product Photo</label>
          <input type="file"
          className='form-control'
          required 
          accept='image/*'
          onChange={(e) =>setProductPhoto(e.target.files[0])}/> <br />

          <input type="submit"
          value="Add Product"
          className='btn btn-outline-success' />


        </form>
      </div>
    </div>
  )
}

export default Addproducts
