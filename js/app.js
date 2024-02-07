const recipesButton = document.querySelector('.recipes-button');
const recipeForm = document.querySelector('.recipe-form-page-container');

console.log(recipesButton)

recipesButton.addEventListener("click", () => {
    displayRecipes();
});

const displayRecipes = () => {
    console.log('button clicked');
	 recipeForm.classList.remove('visible')
};