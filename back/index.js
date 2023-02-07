const express = require('express');
const user = require('./db/User');
const cors = require("cors");
// const mongoose = require ('mongoose');
const app = express();
require('./db/config');
const User = require('./db/User');
const Jwt = require('jsonwebtoken');
const Jwtkey = 'e-com';
const Product = require('./db/Product');
app.use(express.json());
app.use(cors());
// const connectDB= async ()=>{
//     mongoose.connect('mongodb://0.0.0.0:27017/E-com');
//     const productSchema= new mongoose.Schema({});
//     const product= mongoose.model('product',productSchema);
//     const data = await product.find();
//     console.log(data);
// }
// connectDB();
app.post("/Signup", async (req, res) => {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password
    Jwt.sign({result}, Jwtkey, { expiresIn: "2h" }, (err, token) => {
        if(err){
            res.send("somethng wrong")
        }
        res.send({result,auth: token })
    })

})

app.post("/login", async (req, res) => {
    if (req.body.password && req.body.email){
    let user = await User.findOne(req.body).select("-password");
    if (user) {
        Jwt.sign({user}, Jwtkey, { expiresIn: "2h" }, (err, token) => {
            if(err){
                res.send("somethng wrong")
            }
            res.send({user,auth: token })
        })

    }
    else {
        res.send({ result: "no user found" })
    }
} else {
       res.send({result:"no User found"})
    }

});

app.post("/Add-product", async (req, res) => {
    let product = new Product(req.body);
    let result = await product.save();
    res.send(result)
})


app.get("/products", async (req, res) => {
    let products = await Product.find();
    if (products.length > 0) {
        res.send(products)
    }
    else {
        res.send({ result: "no product found" })
    }

});

app.delete("/product/:id", async (req, res) => {
    const result = await Product.deleteOne({ _id: req.params.id })
    res.send(result);
}),

    app.get("/product/:id", async (req, res) => {
        let result = await Product.findOne({ _id: req.params.id });
        if (result) {
            res.send(result)
        } else {
            res.send({ result: "no found" })
        }
    })
app.put("/product/:id", async (req, res) => {
    let result = await Product.updateOne(
        { _id: req.params.id },
        {
            $set: req.body
        })
    res.send(result)
});

app.get("/search/:key", async (req, res) => {
    let result = await Product.find({
        "$or": [
            { name: { $regex: req.params.key } },
            { price: { $regex: req.params.key } },
            { company: { $regex: req.params.key } },
            { category: { $regex: req.params.key } },
        ]
    });
    res.send(result)
})


app.listen(1234);
