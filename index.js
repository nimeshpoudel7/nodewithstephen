const express =require('express');
// requries for the import
const app=express();
// app listen incomimg request

app.get('/greet', (req,res)=>{
  res.send({hi:'there'})
} )
const PORT = process.env.PORT || 5000;
app.listen(PORT);