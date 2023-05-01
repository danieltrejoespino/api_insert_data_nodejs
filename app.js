const express=require('express');
const cone=require('./con.js');
const bodyParser= require('body-parser');
const port=3001
const app= express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/getRequest',(req,res)=> {
    res.send('working')
   })
app.post('/postRequest',(req,res)=> {
    const data = req.body;
    //console.log(data);

    for (let i = 0; i < data.length; i++) {        
        let accoun_number = data[i].accoun_number;
        let campain_number = data[i].campain_number;
        let channel = data[i].channel;
        let offer_type = data[i].offer_type;
        let offer_sub_type = data[i].offer_sub_type;
        let customerid = data[i].customerid;
     
        //console.log(campain_number);
        
        cone.agregarDatos(accoun_number,campain_number,channel,offer_type,offer_sub_type,customerid)    

    }

    // let key=Object.keys(data);
    // key.forEach(element => {
    //     console.log(`${element} : ${data[element]} `);
    // });

    /*data.forEach((obj) => {
        Object.keys(obj).forEach((key) => {
            //console.log(`${key}: ${obj[key]}`);
            let accoun_number = obj[key];
            // let campain_number =
            // let channel =
            // let offer_type =
            // let offer_sub_type =
            // let customerid =

            console.log(accoun_number);
            //cone.agregarDatos(4,1,3,4,5,6)


        });
    });
    */

    res.send('Datos recibidos');
 //res.send('working')
 //console.log(cone.agregarDatos(4,1,3,4,5,6));

})



app.listen(port,()=>{
    console.log(`Server running`);
    //console.log(cone.agregarDatos(4,1,3,4,5,6));
})  