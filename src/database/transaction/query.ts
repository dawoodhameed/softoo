import { Transaction } from "src/models";
import Database from "..";

//All Queries related to Transactions Collection

export const getTransactionsBySKU = async (
  sku: string
): Promise<Array<Transaction>> =>
  Database.Transactions.filter((transaction) => transaction.sku === sku);
