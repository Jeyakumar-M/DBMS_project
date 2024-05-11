
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


// document.getElementById('searchButton').addEventListener('click',function(){
//     document.getElementById('searchResult').classList.toggle('hidden');
// })

function sql(){
    var name = document.getElementById('candidate_name').value;
    alert(name);
    var c = '';
    fetch(`http://172.19.0.65:8989/db_connector/${name}`)
    .then(response => response.json())
    .then(data => {document.getElementById('Name').value=data[0];
    document.getElementById('sex').value=data;
    });
    console.log(c);
    
    document.getElementById('sex').value=c;
    // return c
}

