interface ISale {
  id?: string;
  userId: number;
  totalPrice: number;
  date: string;
  books?: { bookId: number, quantity: number }[];
}

export default ISale;