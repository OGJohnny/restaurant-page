const home = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');
    
    const heading = document.createElement("h1");
    heading.textContent = "Welcome To Tasties!";
    pageContent.appendChild(heading);

    const image = document.createElement('img');
    image.src = "../dist/images/tasties.jpg";
    image.alt = "Image Of Restaurant";
    pageContent.appendChild(image);

    const copy = document.createElement('p');
    copy.textContent = "We serve the best food in town. Come and taste it all!";
    pageContent.appendChild(copy);
    content.appendChild(pageContent);
}

export default home;