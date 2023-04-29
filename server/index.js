const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const mongoose=require("mongoose")
//middleware 

app.use(cors());
app.use(express.json());



//Routes
//create a user 
app.get("/searchproduct",async(req,res)=>{
    try {
        const {scategory} = req.query;
        const searchedquery = await pool.query("SELECT * FROM product_details WHERE p_category LIKE $1", [`%${scategory}%`]);
        res.json(searchedquery.rows);
    } catch (err) {
        console.error(err.message);
    }
})
app.get("/searchexport",async(req,res)=>{
    try {
        const {ecategory} = req.query;
        const searchedquery = await pool.query("SELECT * FROM exporter_post WHERE e_category LIKE $1", [`%${ecategory}%`]);
        res.json(searchedquery.rows);
    } catch (err) {
        console.error(err.message);
    }
})

app.get("/myrequest1",async(req,res)=>{
    try {
        const allproducts = await pool.query("SELECT * FROM request");
        res.json(allproducts.rows);
       
    } catch (err) {
        console.error(err.message);
        
    }
})

app.get("/ourrequest1",async(req,res)=>{
    try {
        const allproducts = await pool.query("SELECT * FROM request2");
        res.json(allproducts.rows);
    } catch (err) {
        console.error(err.message);
        
    }
})


app.post("/todos/", async (req, res) => {
    try {
        const { name, email, password, location, phone_number, category } = req.body;
        const newTodo = await pool.query("INSERT INTO user_details(name, email, password, location, phone_number, category) VALUES($1,$2,$3,$4,$5,$6) RETURNING*", [name, email, password, location, phone_number, category]);
        res.json(newTodo.rowCount)
    } catch (err) {
        console.error(err.message);
    }

})
app.post("/myrequest", async (req, res) => {
    try {
        const { request } = req.body;
        const r_id = 1;
        const ppost = await pool.query("INSERT INTO request(r_id,r_description) VALUES($1,$2) RETURNING*", [r_id,request]);
        res.json(ppost.rowCount)
    } catch (err) {
        console.error(err.message);
    }
})

app.post("/ourrequest", async (req, res) => {
    try {
        const { request } = req.body;
        const r_id = 1;
        const ppost = await pool.query("INSERT INTO request2(r_id,r_description) VALUES($1,$2) RETURNING*", [r_id,request]);
        res.json(ppost.rowCount)
    } catch (err) {
        console.error(err.message);
    }
})

app.post("/product", async (req, res) => {
    try {
        const { pid,pname, pCategory, pQuantity, pDescription, pLocation, uid } = req.body;
        const ppost = await pool.query("INSERT INTO product_details(p_id,p_name,p_category, p_quantity,p_location,p_description,u_id) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING*", [pid,pname, pCategory, pQuantity, pDescription, pLocation,uid]);
        res.json(ppost.rowCount)
    } catch (err) {
        console.error(err.message);
    }
})
app.post("/exporterpost", async (req, res) => {
    try {
        const { eid,ename, ecategory, edue, equantity, edescription } = req.body;
        const epost = await pool.query("INSERT INTO exporter_post(e_id,e_name,e_category, e_quantity,e_due,e_description) VALUES($1,$2,$3,$4,$5,$6) RETURNING*", [ eid,ename, ecategory, equantity, edue, edescription]);
        res.json(epost.rowCount)
    } catch (err) {
        console.error(err.message);
    }
})


app.post("/login/", async (req, res) => {
    try {
       
        const { name,password } = req.body;
        const todo = await pool.query(`SELECT name,category FROM user_details WHERE name= $1 AND password= $2`, [name, password]);
        console.log(todo);
        result = todo.rows[0].category;
        res.json(result);
    } catch (err) {
        console.error(err.message);
    }
})



app.get("/productview",async(req,res)=>{
    try {
        const allproducts = await pool.query("SELECT * FROM product_details");
        res.json(allproducts.rows);
       
    } catch (err) {
        console.error(err.message);
        
    }
})

app.post("/disp", async (req, res) => {
    try {
       
        const { name,password } = req.body;
        const todo = await pool.query(`SELECT name,category FROM user_details WHERE name= $1 AND password= $2`, [name, password]);
        console.log(todo);
        result = todo.rows[0].category;
        res.json(result);
    } catch (err) {
        console.error(err.message);
    }
})

app.listen(5000, () => {
    console.log("Server has started on the port 5000");
}); 