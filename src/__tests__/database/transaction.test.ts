//test all related queries, mutations related to transactions collection

import { getTransactionsBySKU } from "./../../database/transaction/index";

describe("Stock Database Operations", () => {
  describe("Query", () => {
    describe("getStockLevelsBySKU", () => {
      it("without SKU should return empty result set", () => {
        expect(getTransactionsBySKU("")).resolves.toHaveLength(0);
      });

      it("with incorrect SKU should return empty result set", () => {
        expect(getTransactionsBySKU("fsfsf")).resolves.toHaveLength(0);
      });

      it("with correct SKU should return result set with defined length", () => {
        expect(getTransactionsBySKU("KED089097/68/09")).resolves.toHaveLength(
          11
        );
      });

      it("with correct SKU should return result set with correct output", () => {
        expect(getTransactionsBySKU("KED089097/68/10")).resolves.toContainEqual({
          sku: "KED089097/68/10",
          type: "order",
          qty: 8,
        });
      });
    });
  });
});
