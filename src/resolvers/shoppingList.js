import { ShoppingListsCollection } from '../services/mongodb';

export default async ({ id }) => {
  const list = await ShoppingListsCollection.findById(id);
  return list;
};
