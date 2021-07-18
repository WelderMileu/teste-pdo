export default class Item {
  categoria: string;
  quantidade: number;
  preco: number;

  constructor(categoria: string, quantidade: number, preco: number) {
    this.categoria = categoria;
    this.quantidade = quantidade;
    this.preco = preco;
  }
}
