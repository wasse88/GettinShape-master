$('form').on('submit',(e=>{
    e.preventDefault();
    console.log($('form').serializeArray());
    
}));

function myFunction(){
    var firstName = document.getElementById("fname").value;     
    document.getElementById("fn").innerHTML = firstName;
    var lastName = document.getElementById("lname").value;     
    document.getElementById("ln").innerHTML = lastName;
    var age1 = document.getElementById("age").value;     
    document.getElementById("age2").innerHTML = age1;
    var pro1 = document.getElementById("program").value = program.options[program.selectedIndex].text;     
    document.getElementById("pro2").innerHTML = pro1;
} 