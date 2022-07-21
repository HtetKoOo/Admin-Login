function submit() {
  let x = "admin123@gmail.com",
    y = 123456;
    let email=document.querySelector("#email").value;
    let pw=document.querySelector("#pw").value;
    if(x==email && y==pw){
        alert("Welcome admin");
    }else{
        alert("Wrong email and password")
    }
}
