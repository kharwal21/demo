import React, { useEffect } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
const Update=()=>{
    const [name,setName]= React.useState('');
    const [price,setPrice]= React.useState('');
    const [company,setCompany]= React.useState('');
    const [category,setCategory]= React.useState('');
    const params= useParams();
const navigate = useNavigate();

    useEffect(()=>{
      
        getProductDetails();
    },[])
const getProductDetails=async()=>{
    console.log(params)
    let result = await fetch(`http://localhost:1234/product/${params.id}`);
    result = await result.json();
    setName(result.name)
    setCategory(result.category)
    setCompany(result.company)
    setPrice(result.price)
}

    const UpdateProduct = async ()=>{
console.log(name,price,category,company)
let result = await fetch(`http://localhost:1234/product/${params.id}`,{
method:'put',
body:JSON.stringify({name,price,category,company}),
headers:{
'content-Type':"application/json"
}
    });
    result = await result.json()
    console.log(result)
    navigate('/Products')
    }
    return(
        

        <div className="products">
            <h1>Update product</h1>
            <input type="text" placeholder="Enter product name" className="signcom" 
             value={name}
             onChange={(e) => setName(e.target.value)}></input> 
            
            <input type="text" placeholder="Enter product price" className="signcom"
              value={price}
                onChange={(e) => setPrice(e.target.value)}></input>
              
            <input type="text" placeholder="Enter product company" className="signcom"
             value={company}
             onChange={(e) => setCompany(e.target.value)}></input>
            
            <input type="text" placeholder="enter product category" className="signcom"
             value={category}
             onChange={(e) => setCategory(e.target.value)}></input>
            

            <button className="signbtn" onClick={UpdateProduct}>Update products</button>
              </div>
    )
}
export  default Update;