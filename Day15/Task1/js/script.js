"use strict";
let cards = document.querySelector(`#cards`);
let search = document.querySelector(`#search`);
let select = document.querySelector(`#select`);

(function () {
  const recipesList = [
    "carrot",
    "broccoli",
    "asparagus",
    "cauliflower",
    "corn",
    "cucumber",
    "green pepper",
    "lettuce",
    "mushrooms",
    "onion",
    "potato",
    "pumpkin",
    "red pepper",
    "tomato",
    "beetroot",
    "brussel sprouts",
    "peas",
    "zucchini",
    "radish",
    "sweet potato",
    "artichoke",
    "leek",
    "cabbage",
    "celery",
    "chili",
    "garlic",
    "basil",
    "coriander",
    "parsley",
    "dill",
    "rosemary",
    "oregano",
    "cinnamon",
    "saffron",
    "green bean",
    "bean",
    "chickpea",
    "lentil",
    "apple",
    "apricot",
    "avocado",
    "banana",
    "blackberry",
    "blackcurrant",
    "blueberry",
    "boysenberry",
    "cherry",
    "coconut",
    "fig",
    "grape",
    "grapefruit",
    "kiwifruit",
    "lemon",
    "lime",
    "lychee",
    "mandarin",
    "mango",
    "melon",
    "nectarine",
    "orange",
    "papaya",
    "passion fruit",
    "peach",
    "pear",
    "pineapple",
    "plum",
    "pomegranate",
    "quince",
    "raspberry",
    "strawberry",
    "watermelon",
    "salad",
    "pizza",
    "pasta",
    "popcorn",
    "lobster",
    "steak",
    "bbq",
    "pudding",
    "hamburger",
    "pie",
    "cake",
    "sausage",
    "tacos",
    "kebab",
    "poutine",
    "seafood",
    "chips",
    "fries",
    "masala",
    "paella",
    "som tam",
    "chicken",
    "toast",
    "marzipan",
    "tofu",
    "ketchup",
    "hummus",
    "chili",
    "maple syrup",
    "parma ham",
    "fajitas",
    "champ",
    "lasagna",
    "poke",
    "chocolate",
    "croissant",
    "arepas",
    "bunny chow",
    "pierogi",
    "donuts",
    "rendang",
    "sushi",
    "ice cream",
    "duck",
    "curry",
    "beef",
    "goat",
    "lamb",
    "turkey",
    "pork",
    "fish",
    "crab",
    "bacon",
    "ham",
    "pepperoni",
    "salami",
    "ribs",
  ];

  let selectOptions = ``;
  for (const option of recipesList) {
    selectOptions += `
        <option value="${option}">${option}</option>
        `;
  }
  select.innerHTML = selectOptions;
})();

async function getRecipes(searchItem = `pizza`) {
  try {
    let response = await fetch(
      `https://forkify-api.jonas.io/api/v2/recipes?search=${searchItem}`,
    );
    let responseData = await response.json();
    displayRecipes(responseData.data.recipes);
  } catch (err) {
    console.log(`An Error: ${err}`);
  }
}
getRecipes();

function displayRecipes(recipes) {
  let contentContainer = ``;
  for (const recipe of recipes) {
    contentContainer += `
   <div class="col-md-2" style="height: 360px">
      <div class="card">
        <img
          class="card-img-top"
          style="height: 180px"
          src="${recipe.image_url}"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">${recipe.title}</h5>
          <p class="card-text">${recipe.publisher}</p>
          <a href="#" class="btn btn-primary">Add To Cart</a>
        </div>
      </div>
    </div>
      `;
  }
  cards.innerHTML = contentContainer;
}
search.addEventListener(`input`, function (e) {
  getRecipes(e.target.value.toLowerCase());
});

select.addEventListener(`change`, function (e) {
  getRecipes(e.target.value.toLowerCase());
});
