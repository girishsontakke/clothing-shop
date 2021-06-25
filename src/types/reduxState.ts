import { CartItemType, CollectionType, SectionType } from "./models";

export interface ReduxState {
  cart: Cart;
  user: User;
  directory: DirectoryType;
  shop: Shop;
}

export interface Cart {
  hiddenDropDown: boolean;
  cartItems: CartItemType[];
}

export interface DirectoryType {
  sections: SectionType[];
}

export interface Shop {
  collections: { [key: string]: CollectionType };
}

export interface User {
  currentUser: null | {
    id: string;
    createdAt?: string;
    displayName?: string;
    email?: string;
  };
}
