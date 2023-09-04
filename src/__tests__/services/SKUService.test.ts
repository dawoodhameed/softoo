//test all related functions for SKU Service

import { SKUService } from "./../../services/index";
import { STOCK_NOT_FOUND, TRANSACTIONS_NOT_FOUND } from "../../constants";

describe("SKU Service", () => {
  describe("getCurrentStockLevels", () => {
    it("should be rejected to stock not found ", () => {
      expect(new SKUService().getCurrentStockLevels("")).resolves.toStrictEqual(
        {
          message: STOCK_NOT_FOUND,
        }
      );
    });

    it("should be rejected to transactions not found", () => {
      expect(
        new SKUService().getCurrentStockLevels("LTV719449/39/")
      ).resolves.toStrictEqual({ message: TRANSACTIONS_NOT_FOUND });
    });

    it("should return accurate stock level for the given SKU", () => {
      expect(
        new SKUService().getCurrentStockLevels("KED089097/68/09")
      ).resolves.toStrictEqual({ qty: 4838, sku: "KED089097/68/09" });
    });

    it("should return inaccurate stock level for the given SKU", () => {
      expect(
        new SKUService().getCurrentStockLevels("KED089097/68/09")
      ).resolves.not.toStrictEqual({ qty: 4839, sku: "KED089097/68/09" });
    });
  });
});
