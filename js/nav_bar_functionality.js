const menu_bar = document.querySelector('.menu');

        menu_bar.addEventListener('click', (event) => {
            if (event.target.className === 'bar_menu') {

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