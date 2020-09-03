
/*Giving the hamburger menu functionality
If clicked on then the 'active' class is added to the list items and their display property 
is changed from none to display.
If the menu items already have the 'active" class then this will be removed making the menu 
list items disappear again by changing the display property to none.
*/
const menu_bar = document.querySelector('.menu');
menu_bar.addEventListener('click', (event) => {
    if (event.target.className === 'menu_bar' || event.target.className === 'toggle' || event.target.className === 'toggle active') {

        for (let i = 0; i < menu_bar.children.length; i++) {
            let li = menu_bar.children[i];
            if (li.className === 'nav_item active') {
                li.classList.remove('active');
            } else {
                li.classList.add('active');
            }
        }
    }
});