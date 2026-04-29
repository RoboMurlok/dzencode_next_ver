"use client";

import Animation from "./Animation";
import { useOrderStore, useUIStore } from "./../stores/orderStore";
import { useProductStore } from "./../stores/productStore";
import CardOrder from "./CardOrder";
import TableProducts from "./TableProducts";
import { Product } from "./../types/product";
import { Order } from "./../types/order";

export default function Orders() {
  const orders = useOrderStore((state) => state.orders);
  const products = useProductStore((state) => state.products);
  const activeCardId = useUIStore((s) => s.activeCardId);

  type OrderWithProducts = Order & { products: Product[] };

  const ordersMap: Record<number, OrderWithProducts> = Object.fromEntries(
    orders.map((order) => [order.id, { ...order, products: [] }]),
  );

  products.forEach((product) => {
    ordersMap[product.order]?.products.push(product);
  });

  const result = Object.values(ordersMap);

  const activeOrder = result.find((order) => order.id === activeCardId);

  return (
    <Animation>
      <div className="d-flex flex-column gap-5">
        <h3 className="fw-boder text-black opacity-75">
          Ордера / {orders.length}
        </h3>
        <div className="d-flex flex-column flex-xxl-row gap-3">
          <div className="flex-shrink-0" style={{ minWidth: "250px" }}>
            {result.map((order) => (
              <CardOrder items={order} key={order.id} />
            ))}
          </div>

          <div className="flex-grow-1">
            {activeOrder && <TableProducts items={activeOrder} />}
          </div>
        </div>
      </div>
    </Animation>
  );
}
