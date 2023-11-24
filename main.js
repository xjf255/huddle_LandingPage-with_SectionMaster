const d = document,
$email = d.getElementById("email"),
message = `<p class="error">check your email please</p>`;

d.addEventListener("click",e =>{
    if(e.target == $email){
        $email.insertAdjacentHTML("afterend", message);
    }
})
