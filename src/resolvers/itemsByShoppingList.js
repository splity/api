import { ItemsCollection } from '../services/mongodb';

export default async parent => {
  const items = await ItemsCollection.find({ shoppingList: parent.id });
  return items;
};
