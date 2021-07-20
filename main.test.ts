import Order from "./src/classes/Order";
import Beer from "./src/classes/Products/Beer";
import Water from "./src/classes/Products/water";

test("somando total dos produtos", () => {
  const order = new Order();

  order.addItem(new Beer(12, 11));
  order.addItem(new Water(12, 11));

  const total = order.subtotal();
  expect(total).toBe(22);
});
