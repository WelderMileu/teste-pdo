import Item from "./item";

export default class Order {
  code: string;
  items: Item[];

  constructor() {
    this.code = `${Math.floor(Math.random() * 10000)}`;
    this.items = [];
  }

  addItem(item: Item) {
    this.items.push(item);
  }

  subtotal() {
    let total = 0;

    for (const item of this.items) {
      total += item.preco;
    }

    return total;
  }
}
