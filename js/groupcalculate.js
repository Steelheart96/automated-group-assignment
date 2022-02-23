// People Name List
let plpNames = document.getElementById('people-list');

// Catagory Name List
let catNames = document.getElementById('catagory-list');

// Group Amount Value
let asnAmount = document.getElementById('assignment-amount-display');

// Gets Variables listed above into a list
let varList = [[plpNames, 'people'], [catNames, 'catagory'], [asnAmount, 'amount', 'Unset']];

// Output Variables
let outputAssignBtn = document.getElementById('output-make-assignment');

// Error Messages
let error = {
    'people': 'Error: Missing a Name.',
    'catagory': 'Error: Missing an Assignment.',
    'amount': 'Error: Missing Group Amount.'
};

// Output Buttons
outputAssignBtn.addEventListener('click', () => {setAssignment('output-display', varList)});

// Function that is the calling point of all essential Group Assignment functions
function setAssignment(displayArea, varAssignmentList){
    let display = document.getElementById(displayArea);

    display.innerHTML = '';

    let errorValues = checkAssignmentValues(varAssignmentList);

    if (errorValues.length > 0){
        createErrorMsg(errorValues, display);
    }
    else {
        let [nameList, catList, amnt] = getParagraphInLi(varAssignmentList);
        let assignments = getGroups(nameList, catList, amnt);
        
        displayOutput(assignments, display);
    };

}

// Displays output on Page
function displayOutput(assignments, displayArea){
    let groupCount = 0;
    assignments.forEach( item => {
        let newUl = document.createElement('ul');

        let headerH3 = document.createElement('h3');
        groupCount++;
        headerH3.textContent = `Group: ${groupCount}`;
        newUl.append(headerH3);

        if (Array.isArray(item[0])){
            item.forEach(value => {
                let completeLi = document.createElement('li');
                completeLi.textContent = `${value[0]}: ${value[1]}`;
                newUl.append(completeLi);
            });
        } else {
            let completeLi = document.createElement('li');
            completeLi.textContent = `${item[0]}: ${item[1]}`;
            newUl.append(completeLi);
        };

        displayArea.append(newUl);
    });
}

// Puts all of the asignments and people into lists.
function getGroups(names, catagories, amount){
    let asnNames = [...names];
    let allAsignments = [];
    let pulledAssignment = [];

        for (let i = 0; i < amount ; i++) {
            if (asnNames.length > 0){
                pulledAssignment = [];
                pulledAssignment = getAssignments(catagories, asnNames);
                allAsignments.push(pulledAssignment);
            }
        };
        return allAsignments;
}

// Gets assignment for a single group when "asnNames.length >= catagories.length"
function getAssignments(catagories, names){
    listHolder = [];
    for (let i = 0; i < catagories.length; i++){

        if (names.length != 0){
            let random = Math.floor(Math.random() * names.length);

            listHolder.push([catagories[i].textContent, names[random].textContent]);
            names.splice(random, 1);
        };

    };
    return listHolder;
}

// Gets textcontent from People and Catagory
function getParagraphInLi(assignmentList){
    let nameList = [];
    let catList = [];
    let amnt;
    assignmentList.forEach(item => {
        if (item[1] == 'people'){
            nameList.push(item[0].getElementsByTagName('p'))

        } else if (item[1] == 'catagory') {
            
            catList.push(item[0].getElementsByTagName('p'));

        } else if (item[1] == 'amount') {
            amnt = item[0].innerHTML
        }
    });
    return [nameList[0], catList[0], amnt];
}

// Function to check if People, Catagories, and Group Amount is set
function checkAssignmentValues(assignmentList){
    let errorValue = [];
    assignmentList.forEach(item => {
    
        if (item.length > 2){
            checkVar = item[2];
        } else {
            checkVar = '';
        }

        if (item[0].innerHTML == checkVar) {errorValue.push(item[1])};

    });
    return errorValue;
}

// Function to display error messages
function createErrorMsg(messageList, diplayArea) {
    messageList.forEach(message => {
        let newLi = document.createElement('li');
        newLi.textContent = error[message];
        diplayArea.append(newLi);
    });
}