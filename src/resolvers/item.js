import { ItemsCollection } from '../services/mongodb';

export default async ({ id }) => {
  const item = await ItemsCollection.findById(id);
  return item;
};
