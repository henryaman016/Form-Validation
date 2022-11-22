
let form=document.querySelector('form');
let firstName=document.getElementById('firstName');
let lastName=document.getElementById('lastName');
let cityName=document.getElementById('cityName');


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(firstName.value === "" || lastName.value === "" || cityName.value === ""){
        alert("Invalid Input");
    }

   
    console.log(firstName.value,lastName.value);
    // console.log(lastName.value);sz
    console.log(cityName.value);
   
    // firstName.value="";
    // lastName.value="";
    // cityName.value="";
})