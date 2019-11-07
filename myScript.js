$('form').on('submit',(e=>{
    e.preventDefault();
    console.log($('form').serializeArray());
    
}));

function myFunction(){
    window.location.replace("file:///C:/Users/Avi/Desktop/Development/GettinShape-master/programs.html")
} 

function myFunction1(){
    var firstName = document.getElementById("fname").value;     
    document.getElementById("fn").innerHTML = firstName;

    var lastName = document.getElementById("lname").value;     
    document.getElementById("ln").innerHTML = lastName;

    var age1 = document.getElementById("age").value;     
    document.getElementById("age2").innerHTML = age1;
    
    var pro1 = document.getElementById("program").value = program.options[program.selectedIndex].text;     
    document.getElementById("pro2").innerHTML = pro1;
debugger
    window.location.replace("file:///C:/Users/Avi/Desktop/Development/GettinShape-master/result.html")
} 

function myFunction2(){
    window.location.replace("file:///C:/Users/Avi/Desktop/Development/GettinShape-master/index.html")
} 

