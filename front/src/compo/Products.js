import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Products=()=>{
    const [products,setProducts] = useState([]);

    useEffect(()=>{
getProducts();
    },[])

const getProducts=async()=>{
let result = await fetch('http://localhost:1234/products',{
headers:{
    authorization:JSON.parse(localStorage.getItem('token'))
}
});
result= await result.json();
setProducts(result);

}
const deleteProduct=async(id)=>{
    let result = await fetch (`http://localhost:1234/product/${id}`,{
    method:"Delete"
});
result = await result.json()
if(result)
{
    getProducts();
}
};
const searchHandle= async(event)=>{
    let key = event.target.value;
    if(key){
    let result = await fetch (`http://localhost:1234/search/${key}`);
    result = await result.json();
    if (result){
        setProducts(result)
    }
}
    else{
        getProducts()
    }
}
    return(
        <div className="productlist">
        <h1>Product list</h1>
        <input className="search" type="text" placeholder="Search product"
        onChange={searchHandle}
        />
        <ul>
            <li>s no.</li>
            <li>name</li>
            <li>price</li>
            <li>company</li>
            <li>operation</li>
        </ul>
        { 
        products.length>0
        ? products.map((item,index)=>
        <ul key={item._id}>
            <li>{index+1}</li>
            <li>{item.name}</li>
            <li>{item.price}</li>
            <li>{item.company}</li>
            <li><button onClick={()=>deleteProduct(item._id)}>Delete</button>
            <Link to={"/Update/"+item._id}>Update</Link></li>
        </ul>)
    :<h1>no result found</h1>    
    }
        </div>
    )
}
export default Products;