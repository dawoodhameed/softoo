import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { SKUService } from "src/services";
import schema from "./schema";
import { GetCurrentStockLevelResponse } from "src/@types/services/SKU";
import { ErrorResponse } from "src/@types";

const skuService = new SKUService();

const getCurrentStockLevelsFn: ValidatedEventAPIGatewayProxyEvent<
  typeof schema
> = async (event) => {
  try {
    let stockLevel: GetCurrentStockLevelResponse | ErrorResponse =
      await skuService.getCurrentStockLevels(event.body.sku);
      
    return formatJSONResponse({});
  } catch (error) {
    return formatJSONResponse({});
  }
};

export const getCurrentStockLevels = middyfy(getCurrentStockLevelsFn);
