let listItems = document.getElementsByClassName('ui'),
    i;

for(i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', function() {
        const desc = this.nextElementSibling;
        if(desc.style.display == 'block') {
            desc.style.display = 'none'
        } else {
            desc.style.display = 'block'
        }
    })
}

