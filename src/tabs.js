import home from "./home";
import menu from "./menu";
import contact from "./contact";

const createTabs = () => {
    const content = document.querySelector('#content');

    // Create 3 divs
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');

    // Set ID's
    div1.setAttribute('id', 'home-btn');
    div2.setAttribute('id', 'menu-btn');
    div3.setAttribute('id', 'contact-btn');

    // Set classes
    div1.classList.add('tab');
    div2.classList.add('tab');
    div3.classList.add('tab');

    // Set text content for tabs
    div1.textContent = 'Home';
    div2.textContent = 'Menu';
    div3.textContent = 'Contact';

    // Append the divs to the Content div
    content.appendChild(div1);
    content.appendChild(div2);
    content.appendChild(div3);

    div1.addEventListener('click', () => {
        clearContent();
        home();
    });

    div2.addEventListener('click', () => {
        clearContent();
        menu();
    });

    div3.addEventListener('click', () => {
        clearContent();
        contact();
    });
}

function clearContent() {
    const content = document.querySelector('#content');
    const pageContent = document.querySelector('.page-content');

    if(pageContent) {
        content.removeChild(pageContent);
    }
}

export default createTabs;