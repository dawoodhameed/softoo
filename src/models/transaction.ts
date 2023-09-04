export enum TransactionType {
  order,
  refund,
}

export default interface Transaction {
  sku: string;
  type: TransactionType;
  qty: number;
}
