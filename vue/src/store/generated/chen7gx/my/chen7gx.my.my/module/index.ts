// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteCalim } from "./types/my/tx";
import { MsgUpdateCalim } from "./types/my/tx";
import { MsgCreateCalim } from "./types/my/tx";


const types = [
  ["/chen7gx.my.my.MsgDeleteCalim", MsgDeleteCalim],
  ["/chen7gx.my.my.MsgUpdateCalim", MsgUpdateCalim],
  ["/chen7gx.my.my.MsgCreateCalim", MsgCreateCalim],
  
];
export const MissingWalletError = new Error("wallet is required");

const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgDeleteCalim: (data: MsgDeleteCalim): EncodeObject => ({ typeUrl: "/chen7gx.my.my.MsgDeleteCalim", value: data }),
    msgUpdateCalim: (data: MsgUpdateCalim): EncodeObject => ({ typeUrl: "/chen7gx.my.my.MsgUpdateCalim", value: data }),
    msgCreateCalim: (data: MsgCreateCalim): EncodeObject => ({ typeUrl: "/chen7gx.my.my.MsgCreateCalim", value: data }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
