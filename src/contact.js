const contact = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');
    
    const heading = document.createElement('h1');
    heading.textContent = 'Contact Us';
    pageContent.appendChild(heading);

    const image = document.createElement('img');
    image.src = '../dist/images/patio.jpg';
    image.alt = 'Restaurant Patio';
    pageContent.appendChild(image);

    const copy = document.createElement('p');
    copy.textContent = 'Phone Number: (123) 456-7890';
    pageContent.appendChild(copy);

    content.appendChild(pageContent);
};

export default contact;