const dropdownMenu = document.querySelector('#dropdownMenu');
const inputText = document.querySelector('#input-filter')
const buttonForm = document.querySelector('#filterButt')
const LOCAL_SAVE_INPUT = "keyword";
const LOCAL_SAVE_CATEGORY = "category";

inputText.addEventListener('input', inputPush)
buttonForm.addEventListener('click', cardsCreate)

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const data = ['Option 1', 'Option 2', 'Option 3', 'Option 3'];


function createDropdownList() {

    dropdownMenu.innerHTML = '';

   
    data.forEach((item) => {
        const listItem = document.createElement('div');
        listItem.className = 'dropdown-item';
        listItem.textContent = item;
        listItem.onclick = function () {
           
            itemCategory = item;
            localStorage.setItem(LOCAL_SAVE_CATEGORY, JSON.stringify(itemCategory));
            toggleDropdown();
        };
        dropdownMenu.appendChild(listItem);
    });
}

createDropdownList();

function toggleDropdown() {

    dropdownMenu.style.display = (dropdownMenu.style.display === 'flex') ? 'none' : 'flex';

    setTimeout(function () {
        dropdownMenu.style.opacity = (dropdownMenu.style.opacity === '1') ? '0' : '1';
    }, 10);
}

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let inputTextHolder = '';
let itemCategory = '';

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function inputPush(e) {
    const value = e.target.value; 
    inputTextHolder = value;
    localStorage.setItem(LOCAL_SAVE_INPUT, JSON.stringify(inputTextHolder));
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function cardsCreate (event) {
    event.preventDefault();
    console.log(inputTextHolder)
    console.log(itemCategory)
    
}