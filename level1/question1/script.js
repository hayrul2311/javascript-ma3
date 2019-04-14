function validate(){
	var firstName = document.getElementById('fname');
	var lastName = document.getElementById('lname');
	var email = document.getElementById('email');
	var pnumber = document.getElementById('pnumber');
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var filter2 = /^(0047|\+47|47)?[1-9]?[0-9]\d{7}$/;
	if(firstName.value === ""){
		alert("name cant be empty");
	}
	else{
		alert("nice name");
	}
	if(lastName.value === ""){
		alert(" last name cant be empty");
	}
	else{
		alert("nice last name")
	}
	if(!filter.test(email.value)) {
		alert("this is not a valid email");
	}
	else{
		alert("valid email");
	}
	if(!filter2.test(pnumber.value)){
		alert("not valid number");
	}
	else{
		alert("valid number");
	}
}
validate();
	