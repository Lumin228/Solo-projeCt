
var data = ['Option 1', 'Option 2', 'Option 3', 'Option 3'];


function createDropdownList() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    
   
    dropdownMenu.innerHTML = '';

   
    data.forEach((item) => {
        const listItem = document.createElement('div');
        listItem.className = 'dropdown-item';
        listItem.textContent = item;
        listItem.onclick = function () {
           
            console.log('Selected:', item);
            toggleDropdown();
        };
        dropdownMenu.appendChild(listItem);
    });
}


createDropdownList();


function toggleDropdown() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.style.display = (dropdownMenu.style.display === 'flex') ? 'none' : 'flex';

    setTimeout(function () {
        dropdownMenu.style.opacity = (dropdownMenu.style.opacity === '1') ? '0' : '1';
    }, 10);
}
