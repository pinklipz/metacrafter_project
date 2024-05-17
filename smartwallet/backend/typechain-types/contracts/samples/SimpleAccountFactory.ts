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
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface SimpleAccountFactoryInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "accountImplementation"
      | "balanceOf"
      | "createAccount"
      | "fundWallet"
      | "getCreatedAddress"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "accountImplementation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "createAccount",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "fundWallet",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getCreatedAddress",
    values: [AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "accountImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fundWallet", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getCreatedAddress",
    data: BytesLike
  ): Result;
}

export interface SimpleAccountFactory extends BaseContract {
  connect(runner?: ContractRunner | null): SimpleAccountFactory;
  waitForDeployment(): Promise<this>;

  interface: SimpleAccountFactoryInterface;

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

  accountImplementation: TypedContractMethod<[], [string], "view">;

  balanceOf: TypedContractMethod<[account: AddressLike], [bigint], "view">;

  createAccount: TypedContractMethod<
    [owner: AddressLike, salt: BigNumberish],
    [string],
    "nonpayable"
  >;

  fundWallet: TypedContractMethod<[account: AddressLike], [void], "payable">;

  getCreatedAddress: TypedContractMethod<
    [newaddress: AddressLike, newsalt: BigNumberish],
    [string],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "accountImplementation"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "balanceOf"
  ): TypedContractMethod<[account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "createAccount"
  ): TypedContractMethod<
    [owner: AddressLike, salt: BigNumberish],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "fundWallet"
  ): TypedContractMethod<[account: AddressLike], [void], "payable">;
  getFunction(
    nameOrSignature: "getCreatedAddress"
  ): TypedContractMethod<
    [newaddress: AddressLike, newsalt: BigNumberish],
    [string],
    "view"
  >;

  filters: {};
}
