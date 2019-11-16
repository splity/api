import { gql } from 'apollo-server-lambda';

export default gql`
  type Item {
    name: String
    id: ID
    shoppingList: ShoppingList
  }

  type ShoppingList {
    name: String
    id: ID
    items: [Item]
  }

  type Query {
    items: [Item]
    shoppingLists: [ShoppingList]
    shoppingList(id: ID!): ShoppingList
    item(id: ID!): Item
  }
`;
