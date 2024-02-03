const express=require('express');
const cors=require('cors');
const fs=require('fs');
const app=express();
app.use(cors());
app.get('/citiesapi',(req,res)=>{
    fs.readFile(`cities.json`,'utf-8',(err,data)=>{
        if(err){
            res.status(500);
            return res.json(`Error reading file`);
        }
        res.status(200);
        return res.send(data);

})

});

app.listen(3003,()=>{
   console.log('Server is running at port 3003');
});
