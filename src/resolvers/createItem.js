import { ItemsCollection } from '../services/mongodb';

export default async ({ name, shoppingList }) => {
  const list = await ItemsCollection.create({ name, shoppingList });
  return list;
};
