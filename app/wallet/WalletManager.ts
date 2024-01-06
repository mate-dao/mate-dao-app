import { Interface, InterfaceAbi, JsonRpcSigner } from "ethers";

export default interface WalletManager {
  get installed(): boolean;
  getAddress(): Promise<string | undefined>;
  getBalance(): Promise<bigint | undefined>;
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  getSigner(): Promise<JsonRpcSigner | undefined>;
  writeManual?(
    address: string,
    abi: Interface | InterfaceAbi,
    run: {
      method: string;
      params?: any[];
      value?: bigint;
    },
  ): Promise<void>;
}
