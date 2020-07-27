import { Transaction } from "../../types/transaction";

export interface Database {
  addTx: (
    tx: Transaction,
    localWeb3Address: string,
    fsSignature: string | null,
  ) => Promise<void>;

  updateTx: (tx: Transaction) => Promise<void>;

  deleteTx: (tx: Transaction) => Promise<void>;

  getTxs: (signature: string) => Promise<Transaction[]>;

  getUser: (
    address: string,
    signature: string,
  ) => Promise<{ uid: string } | null>;
}