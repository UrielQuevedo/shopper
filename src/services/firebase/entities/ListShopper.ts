interface ListShopper {
  id?: string;
  title: string;
  date: string;
  dateCompleted?: string;
  discountAmount: number;
  userId: string;
  type: "Fast" | "Normal";
}

export default ListShopper;
