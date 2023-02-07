import React from "react";

const Add=()=>{
    const [name,setName]= React.useState('');
    const [price,setPrice]= React.useState('');
    const [company,setCompany]= React.useState('');
    const [category,setCategory]= React.useState('');
    const [error,setError]= React.useState(false)
    const addProduct = async ()=>{
console.log(!name);
if(!name||!price||!company||!category)
{
    setError(true)
    return false;
}
        console.log(name,price,company,category);
        const userId= JSON.parse(localStorage.getItem('user')).id;
        let result = await fetch("http://localhost:1234/Add-product",{
        method:"post",
        body:JSON.stringify({name,price,company,category,userId}),
headers:{"content-type":"application/json"}
        });

        result = await result.json();
        console.log(result)
    }
    return(
        

        <div className="products">
            <h1>Add product</h1>
            <input type="text" placeholder="Enter product name" className="signcom" 
             value={name}
             onChange={(e) => setName(e.target.value)}></input> 
             {error && !name && <span className="invalid">Enter valid value</span>}    
            <input type="text" placeholder="Enter product price" className="signcom"
              value={price}
                onChange={(e) => setPrice(e.target.value)}></input>
                {error && !price && <span className="invalid">Enter valid value</span>}  
            <input type="text" placeholder="Enter product company" className="signcom"
             value={company}
             onChange={(e) => setCompany(e.target.value)}></input>
             {error && !company && <span className="invalid">Enter valid value</span>}  
            <input type="text" placeholder="enter product category" className="signcom"
             value={category}
             onChange={(e) => setCategory(e.target.value)}></input>
             {error && !category && <span className="invalidend">Enter valid value</span>}  

            <button className="signbtn" onClick={addProduct}>Add products</button>
              </div>
    )
}
export  default Add;