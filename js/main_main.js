/*
    Name:         Wyatt Kirschner
    Student ID:   200407722
    Course:       COMP1073
    Date:         July 27th, 2020
    Task:         Course Project - Phase 2
*/
let fillList = document.getElementById('add'); // Passing over the button to be listened to
let addContent = new Array(); // This will be used to fill in the array of items
let validate;
let windowChoice = document.getElementById('delete'); // For popping up the alert window
let audioSelectValue = 0; // Default
fillList.addEventListener('click', validateArray); // When the button is clicked, validation check occurs.


var audioConnect = document.getElementById('audio');
var audioElement = document.createElement('audio');
audioConnect.appendChild(audioElement);
var audioHold = document.querySelector('audio');
audioHold.innerHTML = '<p> TEST </p>';
audioHold.setAttribute("id", "audioDefault"); // This will set the attribute as needed
//audioHold.setAttribute("src", "js/off.mp3");


//audioSelect();
/* This will only create the audio element once, the idea is to
 navigate the DOM and reuse the audio element when needed. Replace
 the Attribute by selecting which attribute to use, based on the previously set ID
*/

function audioSelect(e) {
    audioSelectValue = e;
    console.log(audioSelectValue);


    if (audioSelectValue == 'error') {
        console.log("Error + " + audioSelectValue);
        audioHold.setAttribute("src", "https://freesound.org/data/previews/345/345297_6212127-lq.mp3");
        //https://freesound.org/data/previews/345/345297_6212127-lq.mp3
    }
    if (audioSelectValue == 'start') {
        console.log("Start + " + audioSelectValue);
        audioHold.setAttribute("src", "https://freesound.org/data/previews/257/257227_2836758-lq.mp3");
        //https://freesound.org/people/JavierZumer/sounds/257227/
    }

    if (audioSelectValue == 'change') {
        console.log("Change + " + audioSelectValue);
        audioHold.setAttribute("src", "https://freesound.org/data/previews/171/171696_2514850-lq.mp3");
        //https://freesound.org/people/NenadSimic/sounds/171696/
    }

    if (audioSelectValue == 'delete') {
        console.log("Delete! + " + audioSelectValue);
        audioHold.setAttribute("src", "https://freesound.org/data/previews/335/335188_321967-lq.mp3");
        //https://freesound.org/people/Robinhood76/sounds/335188/
    }
    if (audioSelectValue == 'checkOn') {
        console.log("CheckOn! + " + audioSelectValue);
        audioHold.setAttribute("src", "https://freesound.org/data/previews/277/277032_847303-lq.mp3");
        //https://freesound.org/data/previews/277/277032_847303-lq.mp3
    }

    if (audioSelectValue == 'checkOff') {
        console.log("CheckOff! + " + audioSelectValue);
        audioHold.setAttribute("src", "https://freesound.org/data/previews/405/405548_6436863-lq.mp3");
        //https://freesound.org/people/Raclure/sounds/405548/
    }

    if (audioSelectValue == 'removeAll') {
        console.log("Good job! + " + audioSelectValue);
        audioHold.setAttribute("src", "https://freesound.org/data/previews/345/345297_6212127-lq.mp3");
        //https://freesound.org/people/Scrampunk/sounds/345297/
    }
    if (audioSelectValue == 'good') {
        console.log("Good! + " + audioSelectValue);
    }
    /* By using If statements to determine the selected 
    ID and which action has occured,
    a specific sound will play */




}




function validateArray() { // This function will check to see if there is anything entered for the list
    validate = document.getElementById('addValue').value;


    console.log(addContent.length);

    if (validate.length != 0) {
        console.log('Valid Item Entered'); // Means we can proceed based on input length
        audioSelectValue = 'start';
        audioSelect(audioSelectValue);
        audioElement.play();

        if (addContent.length == 0) { // We are also validating if this is the first entry into the array
            console.log(addContent.length); // If so, we will insert a table into the HTML file... 
            console.log('First Item, Generate Table Headers');

            let navTable = document.getElementById('toDoTable');
            declareTable = document.createElement('table');

            navTable.appendChild(declareTable); // Inserting the table

            let tableHeader = declareTable.createTHead();
            tableBody = document.createElement('tbody');
            declareTable.appendChild(tableBody);

            console.log(tableHeader);
            let headingRow = tableHeader.insertRow(); // Generating the Headers
            let headingCellCheck = headingRow.insertCell(0);
            let headingCellValue = headingRow.insertCell(1);
            let headingCellDelete = headingRow.insertCell(2);
            let headingCellEdit = headingRow.insertCell(3);
            headingCellCheck.textContent = 'test';

            headingCellCheck.innerHTML = '<h2> Check Box </h2>';
            headingCellValue.innerHTML = '<h2> To - Do - Item </h2>';
            headingCellDelete.innerHTML = '<h2> Delete Item </h2>';
            headingCellEdit.innerHTML = '<h2> Edit Item </h2>';




            addItem(declareTable); // Passing in the New Table


            //headingCellCheck.textContent = 'test';

            //headingRow2.textContent = 'TEST';

            //headingCellCheck.textContent = addContent;

        } else {
            console.log('Table Header Already Created');
            addItem();
        }

    } else {
        alert("You can't add nothing to a to-do-list! :o Try again!")
        console.log('Fail');
        audioSelectValue = 'error';
        audioSelect(audioSelectValue);
        audioElement.play();
    }



}


function addItem() {
    let n = addContent.length;


    addContent[n] = document.getElementById('addValue').value; // We can store the inputed values here
    console.log(addContent.length);
    console.log('Adding Item');
    console.log('This is the contents of :' + n + ' and it has ' + addContent[n]);

    let r = addContent.length;

    let insertRow = new Array();
    let deleteArray = new Array(); // Generating Arrays so I can manipulate which cells to use
    let checkBoxArray = new Array();
    let editArray = new Array();
    let inputArray = new Array();
    tableBody.style.textAlign = 'center';
    insertRow[n] = tableBody.insertRow();

    let checkBoxCell = insertRow[n].insertCell(0);

    checkBoxCell.innerHTML = "<input type='checkbox' id='check'>";

    checkBoxArray[n] = checkBoxCell;


    let toDoCell = insertRow[n].insertCell(1); // Generating the rest of the table, including the new input

    toDoCell.textContent = addContent[n];
    inputArray[n] = toDoCell;

    let deleteCell = insertRow[n].insertCell(2);

    deleteCell.innerHTML = "<button id='delete'> Delete </button>";

    deleteArray[n] = deleteCell;

    let editCell = insertRow[n].insertCell(3);

    editCell.innerHTML = "<button id='Edit'> Edit </button>"
    editArray[n] = editCell;

    editArray[n].addEventListener('click', editItem); // Listening for one of the following changes...       

    deleteArray[n].addEventListener('click', deleteItem);

    checkBoxArray[n].addEventListener('change', moveItem);

    updateColorUncheck();



    
    function updateColorUncheck() {

        let check = document.getElementById("check").checked;
        console.log(r + " R VALUE ");
        console.log(n + " N VALUE ");
        let colorBackground = document.querySelector('tbody').childNodes[n];
        console.log(colorBackground);
        if (check == false) {
            colorBackground.style.backgroundColor = "#B76E79"; // Rose colour

        } else {
            colorBackground.style.backgroundColor = "#2E8B67"; // Light green
        }


        let colorForm = document.querySelector('tbody').childNodes[n].childNodes[1];
        colorForm.style.color = 'white';
        colorForm = document.querySelector('tbody').childNodes[n].childNodes[2].childNodes[0];
        colorForm.style.color = 'white';
        colorForm = document.querySelector('tbody').childNodes[n].childNodes[3].childNodes[0];
        colorForm.style.color = "white";

        let colorFont = document.querySelector('tbody');
        colorFont.style.textcolor = "white";
        colorFont = document.querySelector('tbody').childNodes[n];
    }


    let check = document.getElementById("check").checked;
    if (check.checked = true) {




    } else {
        alert("False");
    }



    function moveItem() {

        let check = document.getElementById("check").checked;
        console.log(check);
        if (check.checked = true) {
            if (confirm("Complete?")) {
                window.alert("Action Completed!");
                console.log(checkBoxArray[r]);
                //let move = insertRow[n].value;
                //console.log(move.textContent);
                //For Loop
                console.log(checkBoxArray.value);
                if (r = addContent.length) {
                    console.log('Ended ' + n + ' ' + r);
                    console.log(checkBoxArray.value);
                } else {

                    console.log('Proceed ' + n);
                    console.log(checkBoxArray.value);
                }
                check = true;
                console.log(check);

                audioSelectValue = 'checkOff';
                audioSelect(audioSelectValue);
                audioElement.play();
            } else {
                console.log(checkBoxArray.checked);

                alert("Item not moved! No worries!");
                console.log(check);
                if (check == true) {
                    document.getElementById("check").checked = false;
                } else {
                    document.getElementById("check").checked = true;
                }


                console.log(check);

                audioSelectValue = 'error';
                audioSelect(audioSelectValue);
                audioElement.play();
            }

        }

        updateColorUncheck(r); // Updates the item

    }


    // By prompting the user for their information, I can use this to rebuild the cell.

    function editItem() {

        console.log(addContent[n]);

        if (confirm("Edit item?")) {
            var replace = prompt("You are editing the " + addContent[n] + " item. What would you like instead?");
            addContent[n] = replace;
            insertRow[n].deleteCell(1);
            toDoCell = insertRow[n].insertCell(1);
            toDoCell.textContent = addContent[n];

            audioSelectValue = 'change';
            audioSelect(audioSelectValue);
            audioElement.play();
        } else {
            window.alert("No changes!");
            audioSelectValue = 'error';
            audioSelect(audioSelectValue);
            audioElement.play();
        }

    }

    

    function deleteItem(declareTable) {

        if (confirm("Delete item?")) {
            window.alert("Deleted!");
            let m = r - 1;
            insertRow[m].remove();
            console.log(insertRow[r]);
            insertRow.splice(r, 1);
            console.log(addContent[m]);
            addContent.splice(r - 1, 1);
            console.log(addContent[m]);
            console.log(addContent.length);
            audioSelectValue = 'delete';
            audioSelect(audioSelectValue);
            audioElement.play();


            if (addContent.length == 0) {

                navTable = document.querySelector('table');
                navTable.remove();
                delete addContent.remove;
                delete insertRow;

                audioSelectValue = 'removeAll';
                audioSelect(audioSelectValue);
                audioElement.play();

            }

        } else {

        }
    }


    // function webAudioAPI() {
    //     const AudioValue = window.AudioContext || window.webkitAudioContext;
    //     const audioContext = new AudioContext();
    //     const audioElement = document.querySelector('audio');
    //     const track = audioContext.createMediaElementSource(audioElement);
    //     track.connect(audioContext.destination);
    // }

}