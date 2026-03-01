async function login(){

const username = document.getElementById("user").value;
const password = document.getElementById("pass").value;

const response = await fetch("/login", {
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        username,
        password
    })
});

const data = await response.json();

if(data.success){
    alert("Envoyé au serveur ✅");
}
}