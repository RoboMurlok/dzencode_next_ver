import { create } from "zustand";
import { Product } from "../types/product";

type ProductStore = {
  products: Product[];
  activeCardId: number | null;

  addProduct: (product: Product) => void;
  removeProduct: (id: number) => void;
  setProducts: (products: Product[]) => void;
  setActiveCard: (id: number | null) => void;
};

export const useProductStore = create<ProductStore>((set) => ({
  products: [
  {
    id: 1,
    serialNumber: 1234,
    isNew: true,
    photo: "/products/monitor.png",
    title: "EIZO FlexScan EV2781",
    type: "монитор",
    specification: "новый",
    guarantee: {
      start: "2017-06-29 12:09:33",
      end: "2017-06-29 12:09:33",
    },
    prices: [
      { value: 250, symbol: "USD", isDefault: false },
      { value: 2400, symbol: "UAH", isDefault: true },
    ],
    incoming: "приход 1",
    group: "группа 1",
    person: "персона 1",
    order: 1,
    date: "2017-06-29 12:09:33",
  },
  {
    id: 2,
    serialNumber: 1234,
    isNew: true,
    photo: "/products/monitor.png",
    title: "EIZO FlexScan EV2781",
    type: "монитор",
    specification: "новый",
    guarantee: {
      start: "2017-06-29 12:09:33",
      end: "2017-06-29 12:09:33",
    },
    prices: [
      { value: 250, symbol: "USD", isDefault: false },
      { value: 2400, symbol: "UAH", isDefault: true },
    ],
    incoming: "приход 1",
    group: "группа 1",
    person: "персона 1",
    order: 2,
    date: "2017-06-29 12:09:33",
  },
  {
    id: 3,
    serialNumber: 1234,
    isNew: true,
    photo: "/products/monitor.png",
    title: "EIZO FlexScan EV2781",
    type: "монитор",
    specification: "б/у",
    guarantee: {
      start: "2017-06-29 12:09:33",
      end: "2017-06-29 12:09:33",
    },
    prices: [
      { value: 250, symbol: "USD", isDefault: false },
      { value: 2400, symbol: "UAH", isDefault: true },
    ],
    incoming: "приход 1",
    group: "группа 1",
    person: "персона 1",
    order: 3,
    date: "2017-06-29 12:09:33",
  },
  {
    id: 4,
    serialNumber: 1234,
    isNew: true,
    photo: "/products/monitor.png",
    title: "EIZO FlexScan EV2781",
    type: "телевизор",
    specification: "б/у",
    guarantee: {
      start: "2017-06-29 12:09:33",
      end: "2017-06-29 12:09:33",
    },
    prices: [
      { value: 250, symbol: "USD", isDefault: false },
      { value: 2400, symbol: "UAH", isDefault: true },
    ],
    incoming: "приход 1",
    group: "группа 1",
    person: "персона 1",
    order: 1,
    date: "2017-06-29 12:09:33",
  },
  {
    id: 5,
    serialNumber: 1234,
    isNew: true,
    photo: "/products/monitor.png",
    title: "EIZO FlexScan EV2781",
    type: "телевизор",
    specification: "новый",
    guarantee: {
      start: "2017-06-29 12:09:33",
      end: "2017-06-29 12:09:33",
    },
    prices: [
      { value: 250, symbol: "USD", isDefault: false },
      { value: 2400, symbol: "UAH", isDefault: true },
    ],
    incoming: "приход 1",
    group: "группа 1",
    person: "персона 1",
    order: 2,
    date: "2017-06-29 12:09:33",
  },
],
  activeCardId: null,

  addProduct: (product) =>
    set((state) => ({
      products: [...state.products, product],
    })),

  removeProduct: (id) =>
    set((state) => ({
      products: state.products.filter((p) => p.id !== id),
    })),

  setProducts: (products) => set({ products }),

  setActiveCard: (id) => set({ activeCardId: id }),
}));