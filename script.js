// -- PIZZA BASE -- //
const bases = [
  { type: "base", name: "tomato", color: "#ff2a00", image: "/images/tomato-sauce.png" },
  { type: "base", name: "blanco", color: "#fff", image: "/images/blanco.png" },
]

// -- PIZZA TOPPINGS -- //
const ingredients = [
  { type: "topping", name: "cheese", color: "#ffeb69", image: "./images/cheese.png" },
  { type: "topping", name: "onion", color: "#fffdf2", image: "./images/onion.png" },
  { type: "topping", name: "fungi", color: "#bab19e", image: "./images/fungi.png" },
  { type: "topping", name: "pineapple", color: "#ffe45c", image: "./images/pineapple.png" },
  { type: "topping", name: "banana", color: "#ffda21", image: "./images/banana.png" },
  { type: "topping", name: "kebab", color: "#2b1e09", image: "./images/kebab.png" },
  { type: "topping", name: "ham", color: "#c987a7", image: "./images/ham.png" },
  { type: "topping", name: "shrimp", color: "#e5afaf", image: "./images/shrimp.png" },
]

// -- REPLACE CURSOR -- //
const pizza = document.querySelector(".pizza")
const onMouseMove = (e) => {                   
  pizza.style.left = e.pageX + "px";
  pizza.style.top = e.pageY + "px";
}
document.addEventListener("mousemove", onMouseMove);

// -- RAIN -- //
const toppingsContainer = document.querySelector(".rain-container")
const btnWrapper = document.querySelector(".btn-wrapper")

const ingredientAmount = 10;
let ingredientCount = toppingsContainer.childElementCount;
// let ingredientCount = 0;

while (ingredientCount < ingredientAmount) {
  function createBase(type, img, name) {
    const topping = document.createElement("div"); // Create a Div element
    topping.classList.add(type, name); // Set classes
    topping.dataset.name = name;
    topping.style.left = Math.floor(Math.random() * window.innerWidth) + "px"; // Random spawn on x-axis
    topping.style.animationDelay = Math.random() * 30 + "s";
    topping.style.animationDuration = Math.random() * 10 + 4 + "s";
    topping.style.scale = Math.random() * 1.2 + 0.5;
    topping.innerHTML= 
    `
    <img src="${img}" alt="">      
    `
    toppingsContainer.appendChild(topping);
    ingredientCount++;
  }
  
  // ingredients.forEach(ingredient => {
  //   createBase(ingredient["type"], ingredient["image"], ingredient["name"], ingredient["color"]);
  // });

  function generateRandomTopping(ingredients) {
    return ingredients[Math.floor(Math.random()*ingredients.length)];
  }

  for (let ingredientCount = 0; ingredientCount < ingredientAmount; ingredientCount++) {
    const ingredient = generateRandomTopping(ingredients);
    createBase(ingredient["type"], ingredient["image"], ingredient["name"], ingredient["color"]);
  }


  // ingredients.forEach(ingredient => {
  //   generateRandomTopping(createBase(ingredient["type"], ingredient["image"], ingredient["name"], ingredient["color"]));
  // })
}


const catchLimit = 666;
let catchScore = 0;

// -- CATCH DISPLAY COUNTER  -- //
function displayCatch(name, color, number) {
const headingCount = document.querySelector("h1");
const heading = document.querySelector("h2");
    heading.style.color = color;
    heading.textContent = name.toUpperCase();
    headingCount.textContent = number;
}


// -- EVENT LISTENER "click" ON RAIN-CONTAINER REMOVE & COUNT TOPPINGS -- //
toppingsContainer.addEventListener("click", function handleClick(e) {
  const selectParent = e.target.parentElement;

  if (catchScore < catchLimit) {
    if (selectParent.classList.contains("topping")) {
      selectParent.remove();
      catchScore++;
      displayCatch(selectParent.dataset.name, selectParent.dataset.color, catchScore)
    }
  } else {
    window.alert("Time to stop you filthy f***!")
  }
});



function makeBtn(type, name, img) {
  const baseBtn = document.createElement("button");
  baseBtn.classList.add(type, name);
  baseBtn.dataset.image = img;
  baseBtn.innerHTML= 
    `
    <img src="${img}" alt="">
    <p>${name.toUpperCase()}</p>
    `
  btnWrapper.appendChild(baseBtn);
}
bases.forEach(base => {
  makeBtn(base["type"], base["name"], base["image"]);
});

const baseBtns = document.querySelectorAll("button.base");
function changeBase (img) {
  const pizzaImg = document.querySelector(".pizza-img");
  pizzaImg.src = img;
}
baseBtns.forEach(btn => {
  btn.addEventListener("click", e => {
  const selectParent = e.target.parentElement;
    changeBase(selectParent.dataset.image);
  })
})

console.log(ingredientCount);