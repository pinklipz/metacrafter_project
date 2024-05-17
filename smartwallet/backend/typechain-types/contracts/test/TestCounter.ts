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

export interface TestCounterInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "count"
      | "countFail"
      | "counters"
      | "gasWaster"
      | "justemit"
      | "offset"
      | "xxx"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "CalledFrom"): EventFragment;

  encodeFunctionData(functionFragment: "count", values?: undefined): string;
  encodeFunctionData(functionFragment: "countFail", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "counters",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "gasWaster",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "justemit", values?: undefined): string;
  encodeFunctionData(functionFragment: "offset", values?: undefined): string;
  encodeFunctionData(functionFragment: "xxx", values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: "count", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "countFail", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "counters", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "gasWaster", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "justemit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "offset", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "xxx", data: BytesLike): Result;
}

export namespace CalledFromEvent {
  export type InputTuple = [sender: AddressLike];
  export type OutputTuple = [sender: string];
  export interface OutputObject {
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface TestCounter extends BaseContract {
  connect(runner?: ContractRunner | null): TestCounter;
  waitForDeployment(): Promise<this>;

  interface: TestCounterInterface;

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

  count: TypedContractMethod<[], [void], "nonpayable">;

  countFail: TypedContractMethod<[], [void], "view">;

  counters: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  gasWaster: TypedContractMethod<
    [repeat: BigNumberish, arg1: string],
    [void],
    "nonpayable"
  >;

  justemit: TypedContractMethod<[], [void], "nonpayable">;

  offset: TypedContractMethod<[], [bigint], "view">;

  xxx: TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "count"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "countFail"
  ): TypedContractMethod<[], [void], "view">;
  getFunction(
    nameOrSignature: "counters"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "gasWaster"
  ): TypedContractMethod<
    [repeat: BigNumberish, arg1: string],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "justemit"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "offset"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "xxx"
  ): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;

  getEvent(
    key: "CalledFrom"
  ): TypedContractEvent<
    CalledFromEvent.InputTuple,
    CalledFromEvent.OutputTuple,
    CalledFromEvent.OutputObject
  >;

  filters: {
    "CalledFrom(address)": TypedContractEvent<
      CalledFromEvent.InputTuple,
      CalledFromEvent.OutputTuple,
      CalledFromEvent.OutputObject
    >;
    CalledFrom: TypedContractEvent<
      CalledFromEvent.InputTuple,
      CalledFromEvent.OutputTuple,
      CalledFromEvent.OutputObject
    >;
  };
}
