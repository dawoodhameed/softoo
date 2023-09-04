import { SKUServiceTypes, ErrorResponse } from "src/@types/";
import { getStockLevelsBySKU } from "../database/stock/index";
import { getTransactionsBySKU } from "../database/transaction/index";
import { ErrorBase } from "../libs/error-base";
import { STOCK_NOT_FOUND, TRANSACTIONS_NOT_FOUND } from "../constants";

export default class SKUService implements SKUServiceTypes.SKUService {
  async getCurrentStockLevels(
    sku: string
  ): Promise<SKUServiceTypes.GetCurrentStockLevelResponse | ErrorResponse> {
    try {
      let totalSold: number = 0;
      //check if stock exists for a particular SKU else throw error
      let currentStock = await getStockLevelsBySKU(sku);
      if (!currentStock) throw new ErrorBase(STOCK_NOT_FOUND);

      //check if transaction exists for a particular SKU else throw error
      let transactions = await getTransactionsBySKU(sku);
      if (transactions.length === 0)
        throw new ErrorBase(TRANSACTIONS_NOT_FOUND);

      //calculate stock level with transactions
      transactions.forEach((transaction) => (totalSold += transaction.qty));
      return {
        qty: currentStock.stock - totalSold,
        sku,
      };
    } catch (error) {
      if (error instanceof Error) return { message: error.message };
    }
  }
}
