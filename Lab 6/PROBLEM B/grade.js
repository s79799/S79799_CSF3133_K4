//Error grade.html
//Error 1: Line 9 --> onsubmit="checkMark()" missing "return"
//Error 2: Line 17  --> onclick="showtable()" use lowercase 't', but the method function showTable() use uppercase 'T'.
//Error 3: Line 19 --> src="grades.js" missmatch with file name, grade.js
//Error grade.js
//Error 4: Line 5 --> if (name = ""), incorect assignment operator. use == to compare operator
//Error 5: Line 9 --> if (isNan(mark)) wrong spelling lower case 'n' instead uppercase 'N'
//Error 6: Line 14 --> if (mark < 0 && mark > 100) wrong operator. number can be two value in one time, use || 
//Error 7: Line 28 --> document.getElementByID("result").innerHTML, use uppercase 'D', the correct is lowercase 'd'
//Error 8: Line 39 --> document.getElementById("result").style.colour, wrong spelling 'color'
//Error 9: Line 38 --> for (let i = 1; i < grades.length; i++), skipping 'A' because i=1, the correct is i=1
//Error 11: Line 42)--> .innerHtml uses incorrect casing; the valid property is .innerHTML.


// Validates inputs, calculates grade, styles result, and displays timestamp
function checkMark() {
    let name = document.forms["gradeForm"]["name"].value;
    let markInput = document.forms["gradeForm"]["mark"].value;

    // Check if name is empty
    if (name === "") {
        alert("Name must be filled out.");
        return false;
    }

    // Extension 5: Check if mark field is empty
    if (markInput === "") {
        alert("Mark field cannot be empty.");
        return false;
    }

    // Check if mark is numeric
    if (isNaN(markInput)) {
        alert("Please enter a valid numeric value.");
        return false;
    }

    let mark = Number(markInput);

    // Check if mark is within valid range 0-100
    if (mark < 0 || mark > 100) {
        alert("Mark must be between 0 and 100.");
        return false;
    }

    // Determine grade and color (Extension 6)
    let grade;
    let gradeColor;

    if (mark >= 80) {
        grade = "A";
        gradeColor = "green";
    } else if (mark >= 65) {
        grade = "B";
        gradeColor = "green";
    } else if (mark >= 50) {
        grade = "C";
        gradeColor = "orange";
    } else {
        grade = "F";
        gradeColor = "red";
    }

    // Display result with appropriate color
    let resultEl = document.getElementById("result");
    resultEl.innerHTML = name + " got grade " + grade;
    resultEl.style.color = gradeColor;

    // Extension 8: Display date and time checked
    document.getElementById("timestamp").innerHTML = "Checked on: " + new Date();

    // Return false so form submission does not refresh the page
    return false;
}

// Extension 7: Generates a random whole number from 0 to 100 into the mark input
function generateRandomMark() {
    let randomMark = Math.floor(Math.random() * 101);
    document.getElementById("mark").value = randomMark;
}

// Displays all four grade ranges in an HTML table
function showTable() {
    let grades = ["A", "B", "C", "F"];
    let ranges = ["80-100", "65-79", "50-64", "0-49"];
    let tableHTML = "<table><tr><th>Grade</th><th>Mark Range</th></tr>";

    for (let i = 0; i < grades.length; i++) {
        tableHTML += "<tr><td>" + grades[i] + "</td><td>" + ranges[i] + "</td></tr>";
    }

    tableHTML += "</table>";
    document.getElementById("tableContainer").innerHTML = tableHTML;
}
