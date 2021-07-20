import Item from "../item";

export default class Beer extends Item {
  constructor(quantidade: number, preco: number) {
    super("Beer", quantidade, preco);
  }

  getTax() {
    return 1.3;
  }
}
