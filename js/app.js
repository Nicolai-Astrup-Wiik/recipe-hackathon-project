const recipesButton = document.querySelector('.recipes-button');
const formButton = document.querySelector('.form-button')
const recipeForm = document.querySelector('.recipe-form-page-container');
const recipeList = document.querySelector('.recipe-list-container');

console.log(recipesButton)

recipesButton.addEventListener("click", () => {
    displayRecipes();
});

const displayRecipes = () => {
    console.log('button clicked');
	 recipeForm.classList.remove('visible')
	 recipeList.classList.add('visible')
};


formButton.addEventListener("click", () => {
	displayForm();
});

const displayForm = () => {
	console.log('button clicked');
	recipeList.classList.remove('visible')
	recipeForm.classList.add('visible')
};