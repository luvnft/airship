import * as web3 from "@solana/web3.js";
import { logger } from "./logger";
import {
  AirdropError,
  AirdropErrorCode,
  AirdropErrorMessage,
} from "../utils/airdropError";
import { sql, getTableName } from "drizzle-orm";
import { maxAddressesPerTransaction } from "../config/constants";
import { transaction_queue } from "../schema/transaction_queue";
import { loadDB } from "./db";
import Worker from "web-worker";

interface CreateParams {
  signer: web3.PublicKey;
  addresses: web3.PublicKey[];
  amount: bigint;
  mintAddress: web3.PublicKey;
}

export async function createWeb(params: CreateParams) {
  const { signer, addresses, amount, mintAddress } = params;

  if (addresses.length === 0) {
    logger.info(AirdropErrorMessage.airdropNoAddresses);
    throw new AirdropError(
      AirdropErrorMessage.airdropNoAddresses,
      AirdropErrorCode.airdropNoAddresses
    );
  }

  const worker = new Worker(new URL("./workers/worker.js", import.meta.url), {
    type: "module",
  });

  worker.addEventListener("message", (e) => {
    console.log(e.data); // "hiya!"
  });

  worker.postMessage("hello");

  const db = await loadDB();
  // Create will overwrite any existing airdrop
  // Delete the existing airdrop queue
  // Delete the sqlite_sequence record to reset the autoincrement
  await db.delete(transaction_queue);
  await db.run(
    sql`DELETE FROM sqlite_sequence WHERE name = ${getTableName(transaction_queue)}`
  );

  const prepared = db
    .insert(transaction_queue)
    .values({
      signer: signer.toBase58(),
      mint_address: mintAddress.toBase58(),
      addresses: sql.placeholder("addresses"),
      amount: amount,
    })
    .prepare();

  for (let i = 0; i < addresses.length; i += maxAddressesPerTransaction) {
    const batch = addresses
      .slice(i, i + maxAddressesPerTransaction)
      .map((a) => a.toBase58());
    await prepared.execute({
      addresses: batch,
    });
  }

  logger.info(`Created airdrop queue for ${addresses.length} addresses`);
}
