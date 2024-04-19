const box = document.querySelector(".box");
const card = document.querySelector(".card")
// https://jsonplaceholder.typicode.com/users

const render = (post) =>{
    box.innerHTML = post.map((item) => `
        <h2>${item.name}</h2>
        <button data-id = "${item.id}">add</button>
    `).join("")
}

const render2 = () =>{
    let newData = JSON.parse(localStorage.getItem('user'))
    card.innerHTML = newData.map((item) => `
        <h2>${item.name}</h2>
        <button data-id = "${item.id}">add</button>
    `).join("")
}

const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json()).then((data) => {
        render(data);
    })
}
getData()

box.addEventListener("click", (e) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${e.target.dataset.id}`)
    .then((res) => res.json())
    .then((data) => {
        localStorage.setItem("user", JSON.stringify(data));
        render2(); 
    });
       
})