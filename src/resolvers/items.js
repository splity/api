import { ItemsCollection } from '../services/mongodb';

export default async () => {
  const items = await ItemsCollection.find({});
  return items;
};
