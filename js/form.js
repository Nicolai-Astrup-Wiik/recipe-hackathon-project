
const recipeFormInput = document.querySelector('.recipe-form')
const submitButton = document.querySelector('.submit-button')
console.log(recipeForm);




const recipes = [];
const vegan =[];
const vegitarian = [];
const spicy = [];
const glutenFree =[];


recipeForm.addEventListener('submit', (e)=>{
	e.preventDefault();
	let newRecipe; 
	
		newRecipe = new Recipe(title.value, selectElement.value, ingredients.value, instructions.value)


	Recipe.adRecipe(newRecipe);
	console.log(newRecipe);

})


//DECLARING THE RECIPE CLASS 
class Recipe {
	constructor(title, category, ingredients, instructions){
		this.title = title; 
		this.category = category;
		this.ingredients = ingredients; 
		this.instructions = instructions; 
		this.ID = Date.now();
	}
	static addRecipe(recipe){
		if(recipe.format === 'vegan'){
			vegan.push(recipe)
			recipies.push(recipe)
		} 
		 else if (recipe.format === 'vegetarian'){
			vegetarian.push(recipe)
			recipies.push(recipe)
		}
		else if (recipe.format === 'spicy'){
			spicy.push(recipe)
			recipies.push(recipe)
		}
		else if (recipe.format === 'gluten-free'){
			glutenFree.push(recipe)
			recipies.push(recipe)
		}
	}
}