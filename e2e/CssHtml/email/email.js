  
var x = document.getElementById("myform");

var createform = document.createElement('form'); // Create New Element form
	createform.setAttribute("action", "");        // Setting action Attribute on form
	createform.setAttribute("method", "post");  // Setting method Attribute on form
	x.appendChild(createform);

var heading = document.createElement('h2'); // Heading of form
	heading.innerHTML = "Contact Form ";  
	createform.appendChild(heading);

var line = document.createElement('hr');  //giving horizontal row after heading
	createform.appendChild(line);

var linebreak = document.createElement('br');
	createform.appendChild(linebreak);

var namelabel = document.createElement('label'); // Create Label for name field
	namelabel.innerHTML = "Name : ";            // Set Field Labels
	createform.appendChild(namelabel);

var inputelement = document.createElement('input'); // Create input field for name
	inputelement.setAttribute("type", "text");  
	inputelement.setAttribute("name", "dname");
	createform.appendChild(inputelement);

var emaillabel = document.createElement('label');  //Create Label for email field
	emaillabel.innerHTML = "Email : ";
	createform.appendChild(emaillabel);

var emailelement = document.createElement('input'); // Create input field for email
	emailelement.setAttribute("type", "text");
	emailelement.setAttribute("name", "demail");
	createform.appendChild(emailelement);

// Create Textarea
var messagelabel = document.createElement('label'); 
	messagelabel.innerHTML = "Message : ";
	createform.appendChild(messagelabel);

var texareaelement = document.createElement('textarea'); 
	texareaelement.setAttribute("name", "dmessage");
	createform.appendChild(texareaelement);

// Create Submit Button
var submitelement = document.createElement('input'); 
	submitelement.setAttribute("type", "submit");
	submitelement.setAttribute("name", "dsubmit");
	submitelement.setAttribute("value", "Submit");
	createform.appendChild(submitelement);
const main = document.getElementById("main")
console.log(main);

const form=document.getElementById("myform")
console.log(form);
document.write("myform")