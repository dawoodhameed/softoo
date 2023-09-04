//grouping all independent types related to SKU

import { ErrorResponse } from "../ErrorResponse";

export type GetCurrentStockLevelParams = {
  sku: string;
};

export type GetCurrentStockLevelResponse = {
  sku: string;
  qty: number;
};

export interface SKUService {
  getCurrentStockLevels: (
    GetCurrentStockLevelParams
  ) => Promise<GetCurrentStockLevelResponse | ErrorResponse>;
}
