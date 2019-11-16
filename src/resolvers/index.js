import shoppingLists from './shoppingLists';
import shoppingList from './shoppingList';
import createShoppingList from './createShoppingList';
import createItem from './createItem';
import itemsByShoppingList from './itemsByShoppingList';

export default {
  Query: {
    shoppingLists: async (root, args) => shoppingLists(args),
    shoppingList: async (root, args) => shoppingList(args),
  },
  Mutation: {
    createShoppingList: async (root, args) => createShoppingList(args),
    createItem: async (root, args) => createItem(args),
  },
  ShoppingList: {
    items: async (root, args) => itemsByShoppingList(root, args),
  },
};
