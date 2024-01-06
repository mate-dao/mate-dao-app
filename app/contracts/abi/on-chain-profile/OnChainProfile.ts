/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface OnChainProfileInterface extends Interface {
  getFunction(
    nameOrSignature: "changePfp" | "changeProfile" | "pfpOf" | "profile"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "PfpChanged" | "ProfileChanged"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "changePfp",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "changeProfile",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "pfpOf", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "profile",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "changePfp", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "changeProfile",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pfpOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "profile", data: BytesLike): Result;
}

export namespace PfpChangedEvent {
  export type InputTuple = [
    _addr: AddressLike,
    _pfpAddr: AddressLike,
    _tokenId: BigNumberish
  ];
  export type OutputTuple = [_addr: string, _pfpAddr: string, _tokenId: bigint];
  export interface OutputObject {
    _addr: string;
    _pfpAddr: string;
    _tokenId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ProfileChangedEvent {
  export type InputTuple = [_addr: AddressLike, _profile: string];
  export type OutputTuple = [_addr: string, _profile: string];
  export interface OutputObject {
    _addr: string;
    _profile: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface OnChainProfile extends BaseContract {
  connect(runner?: ContractRunner | null): OnChainProfile;
  waitForDeployment(): Promise<this>;

  interface: OnChainProfileInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  changePfp: TypedContractMethod<
    [_pfpAddr: AddressLike, _tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;

  changeProfile: TypedContractMethod<[_profile: string], [void], "nonpayable">;

  pfpOf: TypedContractMethod<[_addr: AddressLike], [[string, bigint]], "view">;

  profile: TypedContractMethod<[arg0: AddressLike], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "changePfp"
  ): TypedContractMethod<
    [_pfpAddr: AddressLike, _tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "changeProfile"
  ): TypedContractMethod<[_profile: string], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "pfpOf"
  ): TypedContractMethod<[_addr: AddressLike], [[string, bigint]], "view">;
  getFunction(
    nameOrSignature: "profile"
  ): TypedContractMethod<[arg0: AddressLike], [string], "view">;

  getEvent(
    key: "PfpChanged"
  ): TypedContractEvent<
    PfpChangedEvent.InputTuple,
    PfpChangedEvent.OutputTuple,
    PfpChangedEvent.OutputObject
  >;
  getEvent(
    key: "ProfileChanged"
  ): TypedContractEvent<
    ProfileChangedEvent.InputTuple,
    ProfileChangedEvent.OutputTuple,
    ProfileChangedEvent.OutputObject
  >;

  filters: {
    "PfpChanged(address,address,uint256)": TypedContractEvent<
      PfpChangedEvent.InputTuple,
      PfpChangedEvent.OutputTuple,
      PfpChangedEvent.OutputObject
    >;
    PfpChanged: TypedContractEvent<
      PfpChangedEvent.InputTuple,
      PfpChangedEvent.OutputTuple,
      PfpChangedEvent.OutputObject
    >;

    "ProfileChanged(address,string)": TypedContractEvent<
      ProfileChangedEvent.InputTuple,
      ProfileChangedEvent.OutputTuple,
      ProfileChangedEvent.OutputObject
    >;
    ProfileChanged: TypedContractEvent<
      ProfileChangedEvent.InputTuple,
      ProfileChangedEvent.OutputTuple,
      ProfileChangedEvent.OutputObject
    >;
  };
}
