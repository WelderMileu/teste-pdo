import Order from "./src/classes/Order";
import Item from "./src/classes/item";

test("somando total dos produtos", () => {
  const order = new Order();

  order.addItem(new Item("beer", 12, 11));
  order.addItem(new Item("soup", 12, 21));
  order.addItem(new Item("water", 12, 1));

  const total = order.subtotal();

  expect(total).toBe(33);
});
