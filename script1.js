const {Client} = require('pg')
const express = require('express');
const app = express();


function login(){
    event.preventDefault();
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    //alert(user,pass);
   // alert((user=="kathir")+" "+(pass=="123456"));
    if(user=="kathir" && pass=="123456"){
        window.location.assign("E:/sample/DashBoard.html");
    }else{
        alert("enter the correct data");
    }
}


function sql(){

    var search_name = document.getElementById('candidate_name').value;

    const client = new Client({
        host:"localhost",
        user: "postgres",
        port: 5432,
        password: "Shriram@30704",
        database: "Election"
    })
    
    client.connect();
    
    client.query('select candidate from electiondetails where candidate = '+search_name,(err,res)=>{
        if(!err){
            document.getElementById('Name').value = res;
        }else{
            console.log(err.message);
        }
    
        client.end; 
    })
}


// app.get('/', function (req, res) {

//     // Config your database credential
//     const config = {
//         user: 'SA',
//         password: 'Your_Password',
//         server: 'localhost',
//         database: 'geek'
//     };

//     // Connect to your database
//     mssql.connect(config, function (err) {

//         // Create Request object to perform
//         // query operation
//         let request = new mssql.Request();

//         // Query to the database and get the records
//         request.query('select * from student',
//             function (err, records) {

//                 if (err) console.log(err)

//                 // Send records as a response
//                 // to browser
//                 res.send(records);

//             });
//     });
// });