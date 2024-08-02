export interface ItemListprops<Item> {
  items: Item[];
  renderCallback: (item: Item) => React.ReactNode;
}
