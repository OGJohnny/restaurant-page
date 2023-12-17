function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(
        createMenuItem(
            "Chili Cheese Hot Dog",
            "American classic chili dog, grilled hot dog on a bun, smothered in ground beef chili sauce, sprinkled with cheddar cheese and onions."
        )
    );

    menu.appendChild(
        createMenuItem(
            "Buffalo Chicken Wings",
            "Buffalo wing, deep-fried unbreaded chicken wings or drumsticks coated with a vinegar-and-cayenne-pepper hot sauce mixed with butter. They commonly are served with celery and a blue cheese dipping sauce, which acts as a cooling agent for the mouth."
        )
    );

    menu.appendChild(
        createMenuItem(
            "Cheeseburger",
            "What do you want me to tell you? It's a burger with cheese. Tasty!!"
        )
    );

    menu.appendChild(
        createMenuItem(
            "Pizza",
            "MMMmmm Pizza!"
        )
    );

    return menu;
};

function createMenuItem(name, description) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('item');

    const itemName = document.createElement('h2');
    itemName.textContent = name;

    const itemDescription = document.createElement('p');
    itemDescription.textContent = description;

    const image = document.createElement('img');
    image.src = `../dist/images/menu/${name.toLowerCase()}.jpg`;
    image.alt = `${name}`;

    menuItem.appendChild(itemName);
    menuItem.appendChild(image);
    menuItem.appendChild(itemDescription);

    return menuItem;
}

const menu = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    pageContent.appendChild(createMenu());
    content.appendChild(pageContent);
};

export default menu;