// -- PIZZA BASE -- //
const bases = [
  {
    type: 'base',
    name: 'tomato',
    color: '#ff2a00',
    image: '/images/tomato-sauce.png',
  },
  { type: 'base', name: 'blanco', color: '#fff', image: '/images/blanco.png' },
];

// -- PIZZA TOPPINGS -- //
const ingredients = [
  {
    type: 'topping',
    name: 'cheese',
    color: '#ffeb69',
    image: './images/cheese.png',
  },
  {
    type: 'topping',
    name: 'onion',
    color: '#fffdf2',
    image: './images/onion.png',
  },
  {
    type: 'topping',
    name: 'fungi',
    color: '#bab19e',
    image: './images/fungi.png',
  },
  {
    type: 'topping',
    name: 'pineapple',
    color: '#ffe45c',
    image: './images/pineapple.png',
  },
  {
    type: 'topping',
    name: 'banana',
    color: '#ffda21',
    image: './images/banana.png',
  },
  {
    type: 'topping',
    name: 'kebab',
    color: '#2b1e09',
    image: './images/kebab.png',
  },
  { type: 'topping', name: 'ham', color: '#c987a7', image: './images/ham.png' },
  {
    type: 'topping',
    name: 'shrimp',
    color: '#e5afaf',
    image: './images/shrimp.png',
  },
];

// -- REPLACE CURSOR -- //
const pizza = document.querySelector('.pizza');

const onMouseMove = (e) => {
  pizza.style.left = e.pageX + 'px';
  pizza.style.top = e.pageY + 'px';
};
document.addEventListener('mousemove', onMouseMove);

// -- RAIN -- //
const toppingsContainer = document.querySelector('.rain-container');

const ingredientAmount = 100;
let ingredientCount = 0;

while (ingredientCount < ingredientAmount) {
  function createBase(type, img, name) {
    const topping = document.createElement('div');
    topping.classList.add(type, name);
    topping.dataset.name = name;
    topping.style.left = Math.floor(Math.random() * window.innerWidth) + 'px'; // Random spawn on x-axis
    topping.style.animationDelay = Math.random() * 30 + 's';
    topping.style.animationDuration = Math.random() * 10 + 4 + 's';
    topping.style.scale = Math.random() * 1.2 + 0.5;
    topping.innerHTML = `
    <img src="${img}" alt="">      
    `;
    toppingsContainer.appendChild(topping);
    ingredientCount++;
  }

  function generateRandomTopping(ingredients) {
    return ingredients[Math.floor(Math.random() * ingredients.length)];
  }

  for (
    let ingredientCount = 0;
    ingredientCount < ingredientAmount;
    ingredientCount++
  ) {
    const ingredient = generateRandomTopping(ingredients);
    createBase(
      ingredient['type'],
      ingredient['image'],
      ingredient['name'],
      ingredient['color']
    );
  }
}

// -- CATCH DISPLAY COUNTER  -- //
const catchLimit = 99;
let catchScore = 0;

function displayCatch(name, color, number) {
  const headingCount = document.querySelector('h1');
  const heading = document.querySelector('h2');

  heading.style.color = color;
  heading.textContent = name.toUpperCase();
  headingCount.textContent = number;
}

// -- EVENT LISTENER "click" ON RAIN-CONTAINER REMOVE & COUNT TOPPINGS -- //
toppingsContainer.addEventListener('click', function handleClick(e) {
  const selectParent = e.target.parentElement;
  const quoteContainer = document.querySelector('.quote');

  if (catchScore < catchLimit) {
    if (selectParent.classList.contains('topping')) {
      selectParent.remove();
      catchScore++;
      displayCatch(
        selectParent.dataset.name,
        selectParent.dataset.color,
        catchScore
      );
    }
    if (catchScore >= 10) {
      quoteContainer.textContent = 'You got that flow!';
      quoteContainer.classList.add('fade');
      if (catchScore > 12) {
        quoteContainer.textContent = ' ';
        quoteContainer.classList.remove('fade');
        if (catchScore > 15) {
          quoteContainer.textContent = 'You are getting there!';
          quoteContainer.classList.add('fade');
          if (catchScore > 19) {
            quoteContainer.textContent = 'Get that bab!';
            quoteContainer.classList.add('fade');
            if (catchScore > 21) {
              quoteContainer.textContent = ' ';
              quoteContainer.classList.remove('fade');
              if (catchScore > 22) {
                quoteContainer.textContent = 'Damn. Slow down chef!';
                quoteContainer.classList.add('fade');
                if (catchScore > 28) {
                  quoteContainer.textContent = 'Do you need more!?';
                  if (catchScore > 30) {
                    quoteContainer.textContent = ' ';
                    quoteContainer.classList.remove('fade');
                    if (catchScore > 35) {
                      quoteContainer.textContent = 'COME ON!';
                      quoteContainer.classList.add('fade');
                      if (catchScore > 37) {
                        quoteContainer.textContent = 'This is just nasty!';
                        if (catchScore > 39) {
                          quoteContainer.textContent = ' ';
                          quoteContainer.classList.remove('fade');
                          if (catchScore > 40) {
                            quoteContainer.textContent =
                              'Better stop fore its to late';
                            quoteContainer.classList.add('fade');
                            if (catchScore > 45) {
                              quoteContainer.textContent =
                                'Still going for it!?';
                              if (catchScore > 47) {
                                quoteContainer.textContent = ' ';
                                quoteContainer.classList.remove('fade');
                                if (catchScore > 50) {
                                  quoteContainer.textContent =
                                    'YOU NEED HELP, FRIEND!';
                                  quoteContainer.classList.add('fade');
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  } else {
    window.alert('Time to stop you filthy f***!');
  }
});

// -- BUTTON WRAPPER AND ACTIONS -- //
const btnWrapper = document.querySelector('.btn-wrapper');

function makeBtn(type, name, img) {
  const baseBtn = document.createElement('button');
  baseBtn.classList.add(type, name);
  baseBtn.dataset.image = img;
  baseBtn.innerHTML = `
    <img src="${img}" alt="">
    `;
  btnWrapper.appendChild(baseBtn);
}
bases.forEach((base) => {
  makeBtn(base['type'], base['name'], base['image']);
});

const baseBtns = document.querySelectorAll('button.base');

function changeBase(img) {
  const pizzaImg = document.querySelector('.pizza-img');
  pizzaImg.src = img;
}
baseBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const selectParent = e.target.parentElement;
    changeBase(selectParent.dataset.image);
  });
});
