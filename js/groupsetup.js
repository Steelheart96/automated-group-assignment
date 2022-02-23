// People Name Variables
let plpAddBtn = document.getElementById('add-name');
let plpClrBtn = document.getElementById('clear-name');
let plpList = document.getElementById('people-list');

// Catagory Name Variables
let catAddBtn = document.getElementById('add-catagory');
let catClrBtn = document.getElementById('clear-catagory');
let catList = document.getElementById('catagory-list');

// Group Amount Variables
let asnAmountBtn = document.getElementById('set-assignment-amount');
let asnAmountDisplay = document.getElementById('assignment-amount-display');

// People Name Buttons
plpAddBtn.addEventListener('click', () => {addListItem('name-input', plpList)});
plpClrBtn.addEventListener('click', () => {resetList('people-list')});

// Group Name Buttons
catAddBtn.addEventListener('click', () => {addListItem('catagory-input', catList)});
catClrBtn.addEventListener('click', () => {resetList('catagory-list')});

// Group Amount Button
asnAmountBtn.addEventListener('click', () => {setGroupAmount('assignment-amount-input', asnAmountDisplay)});


// For People and Group Name Button Fuction
function addListItem(inputId, list) {
    let inputValue = document.getElementById(inputId);
    if (inputValue.value != '') {
        let newLi = document.createElement('li');
        
        let exbtn = document.createElement("button");
		exbtn.textContent = "❌";
		exbtn.addEventListener("click", () => {
			list.removeChild(newLi);
		});
        
        let newP = document.createElement('p')
        newP.textContent = inputValue.value;

        newLi.append(newP, exbtn);
        
        list.append(newLi);
        inputValue.value ='';
    }
}

// People and Group Name Reset Function
function resetList(listId) {
    let listContent = document.getElementById(listId);
    listContent.innerHTML = '';
}

// Set Group Amount Function
function setGroupAmount(inputId, displayArea) {
    let inputValue = document.getElementById(inputId);

    displayArea.textContent = inputValue.value;
    if (inputValue.value == '') {
        displayArea.textContent = 'Unset';
    };
    inputValue.value = '';
}