(()=>{"use strict";const e=()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("h1");n.textContent="Welcome To Tasties!",t.appendChild(n);const d=document.createElement("img");d.src="../dist/images/tasties.jpg",d.alt="Image Of Restaurant",t.appendChild(d);const c=document.createElement("p");c.textContent="We serve the best food in town. Come and taste it all!",t.appendChild(c),e.appendChild(t)};function t(e,t){const n=document.createElement("div");n.classList.add("item");const d=document.createElement("h2");d.textContent=e;const c=document.createElement("p");c.textContent=t;const a=document.createElement("img");return a.src=`../dist/images/menu/${e.toLowerCase()}.jpg`,a.alt=`${e}`,n.appendChild(d),n.appendChild(a),n.appendChild(c),n}function n(){const e=document.querySelector("#content"),t=document.querySelector(".page-content");t&&e.removeChild(t)}(()=>{const d=document.querySelector("#content"),c=document.createElement("div"),a=document.createElement("div"),o=document.createElement("div");c.setAttribute("id","home-btn"),a.setAttribute("id","menu-btn"),o.setAttribute("id","contact-btn"),c.classList.add("tab"),a.classList.add("tab"),o.classList.add("tab"),c.textContent="Home",a.textContent="Menu",o.textContent="Contact",d.appendChild(c),d.appendChild(a),d.appendChild(o),c.addEventListener("click",(()=>{n(),e()})),a.addEventListener("click",(()=>{n(),(()=>{const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("page-content"),n.appendChild(function(){const e=document.createElement("div");return e.classList.add("menu"),e.appendChild(t("Chili Cheese Hot Dog","American classic chili dog, grilled hot dog on a bun, smothered in ground beef chili sauce, sprinkled with cheddar cheese and onions.")),e.appendChild(t("Buffalo Chicken Wings","Buffalo wing, deep-fried unbreaded chicken wings or drumsticks coated with a vinegar-and-cayenne-pepper hot sauce mixed with butter. They commonly are served with celery and a blue cheese dipping sauce, which acts as a cooling agent for the mouth.")),e.appendChild(t("Cheeseburger","What do you want me to tell you? It's a burger with cheese. Tasty!!")),e.appendChild(t("Pizza","MMMmmm Pizza!")),e}()),e.appendChild(n)})()})),o.addEventListener("click",(()=>{n(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("h1");n.textContent="Contact Us",t.appendChild(n);const d=document.createElement("img");d.src="../dist/images/patio.jpg",d.alt="Restaurant Patio",t.appendChild(d);const c=document.createElement("p");c.textContent="Phone Number: (123) 456-7890",t.appendChild(c),e.appendChild(t)})()}))})(),e()})();