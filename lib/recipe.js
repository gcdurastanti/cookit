import dbConnect from '../util/dbConnect';
import Recipe from '../models/recipe';
import User from '../models/user';
import logger from '../util/logger';

export async function createRecipe(email, data) {
  await dbConnect();
  const {
    name,
    description,
    ingredients = [],
    image = null,
    steps = [],
  } = data;

  const recipe = {
    created_at: Date.now(),
    email,
    ...data,
  };

  const result = await Recipe.update(recipe, { upsert: true });

  logger.info('Recipe successfully added', result);
  return recipe;
}

// Here you should lookup for the user in your DB
export async function findRecipe({ email, searchString }) {
  await dbConnect();
  const recipes = await User.recipes.fuzzySearch(searchString);

  if (recipes.length > 0) {
    logger.info('Recipes successfully returned', recipes);
  }
  return recipes;
}

export async function getAllRecipes({ email }) {
  await dbConnect();
  const recipes = await Recipe.find({ email });

  return recipes;
}
