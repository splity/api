import { ShoppingListsCollection } from '../services/mongodb';

export default async () => {
  const lists = await ShoppingListsCollection.find({});
  return lists;
};
