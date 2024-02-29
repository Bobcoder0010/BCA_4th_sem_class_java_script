// const form = document.getElementById("form");
// const username = document.getElementById("username");
// const email = document.getElementById("email");
// const password = document.getElementById("password");
// const cpassword = document.getElementById("cpassword");


// //error msg function
// function errorMsg(input, msg) {
//    const form_control = input.parentElement; //get the form-group element
//    // console.log(form_control);
//    form_control.className = "form-control error"; 
//    const small =form_control.querySelector("small");
//    //console.log(small);
//    small.innerText = msg;

// }

// //success function
// function successMsg(input){
//     const form_control = input.parentElement;
//     form_control.className = "form-control success"; 

// }
// //email function.
// function emailCheck(input){
//     const re =
//     /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//    // return re.test(String(input).toLowerCase());
//    if (re.test(input.value.trim())) {
//     successMsg(input);
    
// }else{
//     errorMsg(input,"Email is not valid.");
// }}
// // password match
// function checkPassword(password1, password2){
//     if(password1.value !== password2.value) {
//        errorMsg(password2, "Passwords do not match"); 
//     }
// }
// //function to validate all fields
// function validateAll(inputArr){
//     inputArr.forEach(function(input){
//        // console.log(input);
//        //error msg for all input fields
//        if (input.value.trim() === "") {
//         //console.log("Error");
//        // errorMsg(input,"is required");
//        errorMsg(input, `${upperCaseLetter(input)} is required`);
//        }else{
//        // console.log("Success");
//        successMsg(input);
//        }
//     });
// }
// // changing  first character of string to uppercase using a helper function
// function upperCaseLetter(input){
//     return input.id.charAt(0).toUpperCase() + input.id.slice(1);
// }
// //function to check length
// function checkLength(input, min, max) {
//     if(input.value.length<min){
//        <!-- @format -->

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>JS Form Validation</title>
		<link rel="stylesheet" href="style.css" />
	</head>
	<body>
		<div class="container">
		

			<form action="" id="form" class="form">
				<h2>Registration Form</h2>
				
				<div class="form-control">
					<label for="username">Username: </label>
					<input type="text" id="username" placeholder="Enter your name" />
					<small>Error message will be displayed here.</small>
				</div>
				
				<div class="form-control">
					<label for="email">Email: </label>
					<input type="text" id="email" placeholder="Enter your email" />
					<small>Error message will be displayed here.</small>
				</div>
				
				<div class="form-control">
					<label for="password">Password: </label>
					<input type="text" id="password" placeholder="Enter your password" required/>
					<small>Error message will be displayed here.</small>
				</div>
				
				<div class="form-control">
					<label for="cpassword">Confirm password: </label>
					<input
						type="text"
						id="cpassword"
						placeholder="Enter your password again"
						autocomplete="off" required/>
					<small>Error message will be displayed here.</small>
				</div>
				<button type="submit">Submit</button>
				 <input type="submit" value="Submit" /> 
			</form>
		</div>
		<script src="script.js"></script>
	</body>
</html>
$colors = array("blue", 5, 6, 7, 4, 2, "orange");

// Accessing elements of the array
echo "The first color is: " . $colors[0] . "<br>";
echo "The third color is: " . $colors[6] . "<br>";

// Adding elements to the array
$colors[] = "red";
echo "Added a new color: " . $colors[7] . "<br>";

// Iterating through the array
echo "All colors in the array:<br>";
foreach ($colors as $color) {
    echo $color . "<br>";
} errorMsg(
//             input,
//             `${upperCaseLetter(input)} must be  at least ${min} characters`);
//     }else if(input.value.length>max){
//         errorMsg(
//             input,
//             `${upperCaseLetter(input)} must be less than ${max} characters`);
//     }else{
//         successMsg(input);
//     }
// }

// //event listener
// form.addEventListener('submit', function(e){
//     e.preventDefault(); //prevents page from refreshing on submit


//     //function to validate all fields
//     // validateAll([username,email,password,cpassword]);
//     // checkLength(username, 5, 20);
//     // checkLength(password, 8, 20);
//     // emailCheck(email);
//     // checkPassword(password, cpassword);



//     //first show this below...
// // //username
// if(username.value === ""){
// //alert("Username is empty!"); 
// errorMsg(username,"Username is required.");

// }else{
//        alert("username is success");
//    successMsg(username);
//  }
// // //email
// // if(email.value === ""){
// //     errorMsg(email,"Email is required.");
    
// //     }else if(!emailCheck(email.value)){
// //         errorMsg(email,"Email is not valid.");
// //     }
// //     else{
// //        successMsg(email);
// //     }

// // //password
// // if(password.value === ""){
// //     errorMsg(password,"Password is required.");
    
// //     }else{
// //        successMsg(password);
// //     }

// // //cpassword

// // if(cpassword.value === ""){
// //     errorMsg(cpassword,"Confirm password is required.");
    
// //     }else{
// //        successMsg(cpassword);
// //     }

// });
