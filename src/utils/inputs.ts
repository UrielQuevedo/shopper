export interface ProductInput {
  name: string;
  placeholder: string;
  type: "number" | "text" | "textArea";
  autoFocus?: boolean;
  required?: boolean;
}

export const PRODUCT_INPUTS: ProductInput[] = [
  {
    name: "name",
    placeholder: "Nombre",
    type: "text",
    autoFocus: true,
  },
  {
    name: "quantity",
    placeholder: "Cantidad",
    type: "number",
  },
  {
    name: "price",
    placeholder: "Precio",
    type: "number",
    required: false,
  },
  {
    name: "note",
    placeholder: "Escribe una nota",
    type: "textArea",
    required: false,
  },
];

export const PRODUCT_EDIT_INPUTS: ProductInput[] = [
  {
    name: "name",
    placeholder: "Nombre",
    type: "text",
  },
  {
    name: "quantity",
    placeholder: "Cantidad",
    type: "number",
  },
  {
    name: "price",
    placeholder: "Precio",
    type: "number",
    required: false,
    autoFocus: true,
  },
  {
    name: "note",
    placeholder: "Escribe una nota",
    type: "textArea",
    required: false,
  },
];
