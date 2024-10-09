import app from "./app.js";

// when we access environment variables we use process.env
app.listen(process.env.PORT, ()=>{
    console.log(`Server Running on port ${process.env.PORT}`);
});