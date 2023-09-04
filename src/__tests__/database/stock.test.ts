//test all related queries, mutations related to stocks collection

import { getStockLevelsBySKU } from "./../../database/stock/index";

describe("Stock Database Operations", () => {
  describe("Query", () => {
    describe("getStockLevelsBySKU", () => {
      it("should return undefined", () => {
        expect(getStockLevelsBySKU("")).resolves.toBeUndefined();
      });

      it("should match stock object structure", () => {
        expect(getStockLevelsBySKU("LTV719449/39/39")).resolves.toHaveProperty(
          "sku",
          "LTV719449/39/39"
        );
      });

      it("should return matching stock object", () => {
        expect(getStockLevelsBySKU("LTV719449/39/39")).resolves.toStrictEqual({
          sku: "LTV719449/39/39",
          stock: 8525,
        });
      });
    });
  });
});
