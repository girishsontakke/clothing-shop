export interface CartItemType {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  quantity?: number;
}

export interface CollectionType {
  id: string;
  title: string;
  routeName: string;
  items: CartItemType[];
}

export interface SectionType {
  title: string;
  imageUrl: string;
  id: number;
  linkUrl: string;
}
