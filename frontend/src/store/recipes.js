// --- ACTION CREATORS --- //

const RECEIVE_RECIPES = 'recipes/receiveRecipes'
export const RECEIVE_RECIPE = 'recipes/receiveRecipe'

export const receiveRecipes = (recipes) => {
    return {
        type: RECEIVE_RECIPES,
        recipes
    }
}

export const receiveRecipe = (recipe) => {
    return {
        type: RECEIVE_RECIPE,
        recipe
    }
}

// --- THUNK ACTIONS --- //

export const fetchRecipes = () => async (dispatch) => {
    const res = await fetch('/api/recipes')
    if (res.ok) {
        const recipes = await res.json()
        dispatch(receiveRecipes(recipes))
    }
}

export const fetchRecipe = (recipeId) => async (dispatch) => {
    const res = await fetch(`/api/recipes/${recipeId}`)
    if (res.ok) {
        const recipe = await res.json()
        dispatch(receiveRecipe(recipe))
    }
}

// --- REDUCER --- //


export const recipesReducer = (store = {}, action) => {
    switch (action.type) {
        case RECEIVE_RECIPES:
            return { ...store, ...action.recipes }
        case RECEIVE_RECIPE:
            return { ...store, [action.recipe.id]: action.recipe }
        default:
            return store
    }
}

export default recipesReducer
