const entryForm = document.getElementById('entryForm');
const entrySection = document.querySelector('#entries');
const entryTextbox = document.querySelector('.entry-textbox');
const entriesNav = document.querySelector('.entries-nav');

let count = 1;



function addEntryToDom(event) {
    event.preventDefault();
    const entryDiv = document.createElement('div');
    entryDiv.className = 'single-entry';
    entryDiv.innerText = entryTextbox.value;
    entryDiv.style.display = 'none';
    entrySection.appendChild(entryDiv);
    entryForm.reset();
    // entryTextbox.value = '';
    const displayEntryButton = document.createElement('button');
    displayEntryButton.className = 'display-entry-button';
    displayEntryButton.innerText = count;

    displayEntryButton.addEventListener('click', () => {

        const allEntries = document.querySelectorAll('.single-entry');
        allEntries.forEach(element => element.style.display = 'none');

        entryDiv.style.display = 'block';
    })

    entriesNav.appendChild(displayEntryButton);

    count++;
}

entryForm.addEventListener('submit', addEntryToDom);