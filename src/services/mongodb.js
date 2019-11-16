import mongoose from 'mongoose';
import connectToDatabase from '../config/mongodb';

import { ItemSchema, ShoppingListSchema } from '../schema/mongoose';

const ItemsCollection = mongoose.model('Item', ItemSchema);
const ShoppingListsCollection = mongoose.model(
  'ShoppingList',
  ShoppingListSchema,
);

export { connectToDatabase, ItemsCollection, ShoppingListsCollection };
