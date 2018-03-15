function submitForm(){
		debugger
		if (document.getElementById("first_name").value == "" ||document.getElementById("last_name").value == "" ||document.getElementById("e_mail").value == "" ||document.getElementById("a_dress").value == "" ){
			window.alert("every feild shd be filled")
		} else {
		document.getElementById("display_first_name").innerHTML = document.getElementById("first_name").value
			document.getElementById("display_last_name").innerHTML = document.getElementById("last_name").value
			document.getElementById("display_e_mail").innerHTML = document.getElementById("e_mail").value
			document.getElementById("display_a_dress").innerHTML = document.getElementById("a_dress").value
			document.getElementById("formValidate").style.display = "none";
			document.getElementById("display").style.display = "block";

		}
	}