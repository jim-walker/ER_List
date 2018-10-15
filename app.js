const patientList = [
  'Paul',
  'Jan',
  'Tri',
  'Maryam'
]

alert(patientList);

const command = prompt('Choose one: update, delete, add, reorder');

switch(command){
case "add":
	const patientAdd = prompt('Enter Patient to Add');
	patientList.push(patientAdd)
	break;
case "update":
	const patientReplace = prompt('Enter Patient to Update');
	const patientUpdate = prompt('Enter New Name for Patient');
	patientIndex = patientList.indexOf(patientReplace);
	if (patientIndex > -1) {
		patientList[patientIndex]=patientUpdate;
    } else {
		alert("Patient Name "+patientReplace+" not found")
	}
	break;
case "delete":
	const patientRemove = prompt('Enter Patient to Remove');
	patientIndex = patientList.indexOf(patientRemove);
	if (patientIndex > -1) {
       patientList.splice(patientIndex, 1);
    } else {
		alert("Patient Name "+patientRemove+" not found")
    }
	break;
case "reorder":
	const patientOne = prompt('Enter Patient One to Reorder');
	const patientTwo = prompt('Enter Patient Two to Reorder');
	patientOneIndex = patientList.indexOf(patientOne);
	patientTwoIndex = patientList.indexOf(patientTwo);
	if (patientOneIndex > -1) {
		if (patientTwoIndex > -1) {
			patientList[patientOneIndex]=patientTwo;
			patientList[patientTwoIndex]=patientOne;
		} else {
			alert("Patient Name "+patientTwo+" not found")
		}
	} else {
		alert("Patient Name "+patientOne+" not found")
	}
	break;
default:
	alert("Command Not Valid");
}

alert(patientList);