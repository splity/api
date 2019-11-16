import { Schema } from 'mongoose';

const ItemSchema = new Schema(
  {
    name: String,
    shoppingList: { type: Schema.Types.ObjectId, ref: 'ShoppingList' },
  },
  { timestamps: true },
);

const ShoppingListSchema = new Schema(
  {
    name: String,
    items: [{ type: Schema.Types.ObjectId, ref: 'Item' }],
  },
  { timestamps: true },
);

export { ItemSchema, ShoppingListSchema };
