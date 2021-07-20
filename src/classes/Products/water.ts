import Item from "../item";

export default class Water extends Item {
  constructor(quantidade: number, preco: number) {
    super("Water", quantidade, preco);
  }

  getTax() {
    return 0.3;
  }
}
