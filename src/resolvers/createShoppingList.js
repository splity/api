import { ShoppingListsCollection } from '../services/mongodb';

export default async ({ name }) => {
  const list = await ShoppingListsCollection.create({ name });
  return list;
};
