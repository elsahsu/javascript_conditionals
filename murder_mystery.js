var room = "ballroom";
var suspect = "Mr. Kalehoff";

var weapon = "";
var solved = false;

if (room === "ballroom") {
    weapon = "poison";
    if (suspect === "Mr. Kalehoff") {
        solved = true;
    } else {
        solved = false;
    }
} else if (room === "gallery") {
    weapon = "trophy";
    if (suspect === "Ms. Van Cleve") {
        solved = true;
    } else {
        solved = false;
    }
} else if (room === "billiards room") {
    weapon = "pool stick";
    if (suspect === "Mrs. Sparr") {
        solved = true;
    } else {
        solved = false;
    }
} else {
    weapon = "knife";
    if (suspect === "Mr. Parkes") {
        solved = true;
    } else {
        solved = false;
    }
}

if (solved === true) {
	console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}
