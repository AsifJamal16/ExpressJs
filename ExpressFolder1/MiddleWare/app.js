const express=require('express');
const app=express();
app.use((req,res,next)=>{
  req.time=new Date().toLocaleTimeString();
  next();
})
app.get('/',(req,res)=>{
  res.send(
    `
    <h1>Home Page</h1>
    <h2>${req.time}</h2>
    `
  )
  app.get('/about',(req,res)=>{
    res.send(
      `
    <h1>About Page</h1>
    <h2>${req.time}</h2>
    `
    )
  })
  app.use((req,res)=>{
    res.status(404).send(
      `
      <h1 style="color:red;">404</h1>
      <h2>Page Not Found</h2>
      <p>Time: ${req.time}</p>
      `
    )
  })
})
module.exports=app;
