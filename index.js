const express = require('express')
const dotenv = require("dotenv")
const userRoutes = require("./routes/userRoutes")
const connectDB = require("./config/database")
const productRoutes = require("./routes/productRoutes")
dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000


// app.use(cors());
// app.use(cors({
//     origin: 'http://example.com' // allow only this origin to access the resources
// }));

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://example.com');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
// });
// app.use((req, res, next) => {
//     console.log("Request URL:", req.url);
//     next();
// });


// connectDB()
// app.use(express.json())

app.use(`/api/users`, userRoutes)
app.use(`/api/products`, productRoutes)


app.listen(PORT, ()=>{
    console.log(`Running on http://localhost:${PORT}`)
})