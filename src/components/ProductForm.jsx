import { use } from "react";
import { useState } from "react";

function ProductForm() {
  let [productName,setProductName] = useState("")
  let [imageUrl,setImageUrl] = useState("")
  let [price,setPrice] = useState("")
  let [description,setDescription] = useState("")

  
  let getSubmit = (event) =>{
    let productData = {
    name: productName,
    img: imageUrl,
    price : price,
    description : description
    }
    event.preventDefault()
    alert(JSON.stringify(productData))
    
  }

  return (
    <form className="post-form" onSubmit={getSubmit}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            onChange={(e) => setProductName(e.target.value)}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit"  >Create</button>
      </div>
    </form>
  );
}

export default ProductForm;
