import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import RecipesHome from './components/RecipesHome';
import RecipeShowPage from './components/RecipeShowPage';
import RecipeBox from "./components/RecipeBox"
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/recipes/:recipeId" component={RecipeShowPage}/>
        <Route path="/recipe-box" component={RecipeBox} />
        <Route path="/" component={RecipesHome} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
