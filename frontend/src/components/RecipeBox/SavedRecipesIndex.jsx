import React from "react"
import "./SavedRecipesIndex.scss"
import { useSelector } from "react-redux"
import RecipeBoxTile from "./RecipeBoxTile"


const SavedRecipesIndex = ({ category }) => {
  const savedRecipes = Object.values(useSelector(store => store.savedRecipes)).reverse() // saved recipe data (joins table)
  console.log("savedRecipes", savedRecipes)

  // Filter out the recipes that aren't relevant to our selected category (else display all if "all")
  const recipesToDisplay = savedRecipes.filter(
    savedRecipe => savedRecipe.recipe.tags.includes(category) || category === "all"
  );

  return (
    <>
      <div className="saved-index-outer-container">
        <div className="saved-index-inner-container">
          <div className="saved-index-overflow-wrapper">
            <div className="saved-index-header-wrapper">
              <div className="saved-index-header">
                <h2 className="saved-index-header-title">Saved Recipes</h2>
                <p className="saved-index-header-save-count">{savedRecipes.length} recipes</p>
              </div>
            </div>
            <ul className="saved-index-tiles-wrapper">
              {recipesToDisplay.map(savedRecipe => {
                console.log("savedRecipe", savedRecipe)
                return (
                  <li key={savedRecipe.id} className="tile-list-wrapper">
                    <RecipeBoxTile savedRecipes={savedRecipes} savedRecipe={savedRecipe} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  )

}

export default SavedRecipesIndex
