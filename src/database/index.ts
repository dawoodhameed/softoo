//reusable database connection, currently JSON files

import StockCol from "./stock.json";
import TransactionCol from "./transactions.json";

export default {
  Stock: StockCol,
  Transactions: JSON.parse(JSON.stringify(TransactionCol)),
};
