import items from './items';
import item from './item'
import shoppingLists from './shoppingLists';
import shoppingList from './shoppingList';

export default {
  Query: {
    items: async (root, args) => items(args),
    item: async (root, args) => item(args),
    shoppingLists: async (root, args) => shoppingLists(args),
    shoppingList: async (root, args) => shoppingList(args),
  },
};
