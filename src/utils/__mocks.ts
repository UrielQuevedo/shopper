import List from "@/services/firebase/entities/List";
import Product from "@/services/firebase/entities/Product";

export const LIST_MOCKS: List[] = [
  {
    title: "Día Po",
    id: 0,
    totalNumber: 0,
    totalAddedNumber: 0,
    date: "01/09/2023",
  },
  {
    title: "Coto Po",
    id: 1,
    totalNumber: 22,
    totalAddedNumber: 15,
    date: "01/09/2023",
  },
  {
    title: "Verdulería Po",
    id: 2,
    totalNumber: 8,
    totalAddedNumber: 0,
    date: "01/09/2023",
  },
  {
    title: "Maxíconsumo Po",
    id: 3,
    totalNumber: 7,
    totalAddedNumber: 7,
    date: "01/09/2023",
    dateCompleted: "05/09/2023",
  },
  {
    title: "Coto Mama",
    id: 4,
    totalNumber: 0,
    totalAddedNumber: 0,
    date: "01/09/2023",
  },
  {
    title: "Verdulería Mama",
    id: 5,
    totalNumber: 0,
    totalAddedNumber: 0,
    date: "01/09/2023",
  },
];

export const PRODUCT_MOCKS: Product[] = [
  {
    name: "Fideos",
    note: "Que sean los matarazzo coditos",
    price: 0,
    quantity: 2,
  },
  {
    name: "Cafe Virginia",
    note: "",
    price: 800,
    quantity: 2,
  },
  {
    name: "Pan bimbo",
    note: "Chico",
    price: 620,
    quantity: 1,
  },
  {
    name: "Yogurt",
    note: "",
    price: 230,
    quantity: 4,
  },
  {
    name: "Galletitas Surtidas",
    note: "",
    price: 0,
    quantity: 2,
  },
];
