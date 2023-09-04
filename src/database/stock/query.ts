import { Stock } from "src/models";
import Database from "../index";

//All Queries related to Stocks Collection

export const getStockLevelsBySKU = async (
  sku: string
): Promise<Stock | undefined> =>
  Database.Stock.find((stock) => stock.sku === sku);
