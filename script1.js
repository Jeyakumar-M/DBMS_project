const {Client} = require('pg')

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

