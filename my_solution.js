// function expressions exercise

var studentRecords = [
	{ id: 313, name: "Frank", paid: true },
	{ id: 410, name: "Suzy", paid: true },
	{ id: 709, name: "Brian", paid: false },
	{ id: 105, name: "Henry", paid: false },
	{ id: 502, name: "Mary", paid: true },
	{ id: 664, name: "Bob", paid: false },
	{ id: 250, name: "Peter", paid: true },
	{ id: 375, name: "Sarah", paid: true },
	{ id: 867, name: "Greg", paid: false },
];

var currentEnrollment = [410, 105, 664, 375];
// inArray takes a value and an array as a arguments and return true if the value is in array otherwise returns false
function inArray(arrValue, arr) {
	let num, i;
	for (i = 0; i < arr.length; i++) {
		num = typeof arr[i];
		if (arrValue == arr[i]) {
			return true;
		}
	}
	return false;
}
// newArray stands for a new array
function printRecords(array) {
	let newArray = [];
	let i,
		j,
		nAr = [];
	for (i = 0; i < array.length; i++) {
		for (let j = 0; j < studentRecords.length; j++) {
			if (array[i] == studentRecords[j].id) {
				newArray.push(studentRecords[j]);
			}
		}
	}
	newArray.sort(function sortByNames(a, b) {
		if (a.name < b.name) {
			return -1;
		}
		if (a.name > b.name) {
			return 1;
		}
		return 0;
	});
	let status; // a variable for "Paid" or "Not Paid"
	for (let i = 0; i < newArray.length; i++) {
		if (newArray[i].paid) {
			status = "Paid";
		} else {
			status = "Not Paid";
		}
		console.log(newArray[i].name + " " + newArray[i].id + " " + status);
	}
}

function remindUnpaid(currentEnrollment) {
	let i,
		j,
		anotherArr = []; // anotherArr stands for a new array
	for (i = 0; i < currentEnrollment.length; i++) {
		for (let j = 0; j < studentRecords.length; j++) {
			if (
				currentEnrollment[i] == studentRecords[j].id &&
				studentRecords[j].paid == false
			) {
				anotherArr.push(studentRecords[j].id);
			}
		}
	}
	printRecords(anotherArr);
}

function paidStudentsToEnroll() {
	console.log(currentEnrollment);
	let i,
		j,
		len = currentEnrollment.length,
		newA = [];  // newA is also for a new array in this function
	for (i = 0; i < studentRecords.length; i++) {
		for (j = 0; j < len; j++) {
			if (
				inArray(studentRecords[j].id, currentEnrollment) == false &&
				studentRecords[j].paid == true
			) {
				newA.push(studentRecords[i].id);
			}
		}
	}
	return [...newA];
}

// ********************************

printRecords(currentEnrollment);
console.log("----");
//currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);
