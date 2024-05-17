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

export type UserOperationStruct = {
  sender: AddressLike;
  nonce: BigNumberish;
  initCode: BytesLike;
  callData: BytesLike;
  callGasLimit: BigNumberish;
  verificationGasLimit: BigNumberish;
  preVerificationGas: BigNumberish;
  maxFeePerGas: BigNumberish;
  maxPriorityFeePerGas: BigNumberish;
  paymasterAndData: BytesLike;
  signature: BytesLike;
};

export type UserOperationStructOutput = [
  sender: string,
  nonce: bigint,
  initCode: string,
  callData: string,
  callGasLimit: bigint,
  verificationGasLimit: bigint,
  preVerificationGas: bigint,
  maxFeePerGas: bigint,
  maxPriorityFeePerGas: bigint,
  paymasterAndData: string,
  signature: string
] & {
  sender: string;
  nonce: bigint;
  initCode: string;
  callData: string;
  callGasLimit: bigint;
  verificationGasLimit: bigint;
  preVerificationGas: bigint;
  maxFeePerGas: bigint;
  maxPriorityFeePerGas: bigint;
  paymasterAndData: string;
  signature: string;
};

export declare namespace IStakeManager {
  export type DepositInfoStruct = {
    deposit: BigNumberish;
    staked: boolean;
    stake: BigNumberish;
    unstakeDelaySec: BigNumberish;
    withdrawTime: BigNumberish;
  };

  export type DepositInfoStructOutput = [
    deposit: bigint,
    staked: boolean,
    stake: bigint,
    unstakeDelaySec: bigint,
    withdrawTime: bigint
  ] & {
    deposit: bigint;
    staked: boolean;
    stake: bigint;
    unstakeDelaySec: bigint;
    withdrawTime: bigint;
  };
}

export declare namespace IEntryPoint {
  export type UserOpsPerAggregatorStruct = {
    userOps: UserOperationStruct[];
    aggregator: AddressLike;
    signature: BytesLike;
  };

  export type UserOpsPerAggregatorStructOutput = [
    userOps: UserOperationStructOutput[],
    aggregator: string,
    signature: string
  ] & {
    userOps: UserOperationStructOutput[];
    aggregator: string;
    signature: string;
  };
}

export interface IEntryPointInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addStake"
      | "balanceOf"
      | "depositTo"
      | "getDepositInfo"
      | "getNonce"
      | "getSenderAddress"
      | "getUserOpHash"
      | "handleAggregatedOps"
      | "handleOps"
      | "incrementNonce"
      | "simulateHandleOp"
      | "simulateValidation"
      | "unlockStake"
      | "withdrawStake"
      | "withdrawTo"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AccountDeployed"
      | "BeforeExecution"
      | "Deposited"
      | "SignatureAggregatorChanged"
      | "StakeLocked"
      | "StakeUnlocked"
      | "StakeWithdrawn"
      | "UserOperationEvent"
      | "UserOperationRevertReason"
      | "Withdrawn"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "addStake",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "depositTo",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getDepositInfo",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getNonce",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSenderAddress",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserOpHash",
    values: [UserOperationStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "handleAggregatedOps",
    values: [IEntryPoint.UserOpsPerAggregatorStruct[], AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "handleOps",
    values: [UserOperationStruct[], AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "incrementNonce",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "simulateHandleOp",
    values: [UserOperationStruct, AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "simulateValidation",
    values: [UserOperationStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "unlockStake",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawStake",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawTo",
    values: [AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "addStake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "depositTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getDepositInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getNonce", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getSenderAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserOpHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "handleAggregatedOps",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "handleOps", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "incrementNonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "simulateHandleOp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "simulateValidation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unlockStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdrawTo", data: BytesLike): Result;
}

export namespace AccountDeployedEvent {
  export type InputTuple = [
    userOpHash: BytesLike,
    sender: AddressLike,
    factory: AddressLike,
    paymaster: AddressLike
  ];
  export type OutputTuple = [
    userOpHash: string,
    sender: string,
    factory: string,
    paymaster: string
  ];
  export interface OutputObject {
    userOpHash: string;
    sender: string;
    factory: string;
    paymaster: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace BeforeExecutionEvent {
  export type InputTuple = [];
  export type OutputTuple = [];
  export interface OutputObject {}
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DepositedEvent {
  export type InputTuple = [account: AddressLike, totalDeposit: BigNumberish];
  export type OutputTuple = [account: string, totalDeposit: bigint];
  export interface OutputObject {
    account: string;
    totalDeposit: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SignatureAggregatorChangedEvent {
  export type InputTuple = [aggregator: AddressLike];
  export type OutputTuple = [aggregator: string];
  export interface OutputObject {
    aggregator: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace StakeLockedEvent {
  export type InputTuple = [
    account: AddressLike,
    totalStaked: BigNumberish,
    unstakeDelaySec: BigNumberish
  ];
  export type OutputTuple = [
    account: string,
    totalStaked: bigint,
    unstakeDelaySec: bigint
  ];
  export interface OutputObject {
    account: string;
    totalStaked: bigint;
    unstakeDelaySec: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace StakeUnlockedEvent {
  export type InputTuple = [account: AddressLike, withdrawTime: BigNumberish];
  export type OutputTuple = [account: string, withdrawTime: bigint];
  export interface OutputObject {
    account: string;
    withdrawTime: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace StakeWithdrawnEvent {
  export type InputTuple = [
    account: AddressLike,
    withdrawAddress: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [
    account: string,
    withdrawAddress: string,
    amount: bigint
  ];
  export interface OutputObject {
    account: string;
    withdrawAddress: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UserOperationEventEvent {
  export type InputTuple = [
    userOpHash: BytesLike,
    sender: AddressLike,
    paymaster: AddressLike,
    nonce: BigNumberish,
    success: boolean,
    actualGasCost: BigNumberish,
    actualGasUsed: BigNumberish
  ];
  export type OutputTuple = [
    userOpHash: string,
    sender: string,
    paymaster: string,
    nonce: bigint,
    success: boolean,
    actualGasCost: bigint,
    actualGasUsed: bigint
  ];
  export interface OutputObject {
    userOpHash: string;
    sender: string;
    paymaster: string;
    nonce: bigint;
    success: boolean;
    actualGasCost: bigint;
    actualGasUsed: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UserOperationRevertReasonEvent {
  export type InputTuple = [
    userOpHash: BytesLike,
    sender: AddressLike,
    nonce: BigNumberish,
    revertReason: BytesLike
  ];
  export type OutputTuple = [
    userOpHash: string,
    sender: string,
    nonce: bigint,
    revertReason: string
  ];
  export interface OutputObject {
    userOpHash: string;
    sender: string;
    nonce: bigint;
    revertReason: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WithdrawnEvent {
  export type InputTuple = [
    account: AddressLike,
    withdrawAddress: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [
    account: string,
    withdrawAddress: string,
    amount: bigint
  ];
  export interface OutputObject {
    account: string;
    withdrawAddress: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IEntryPoint extends BaseContract {
  connect(runner?: ContractRunner | null): IEntryPoint;
  waitForDeployment(): Promise<this>;

  interface: IEntryPointInterface;

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

  addStake: TypedContractMethod<
    [_unstakeDelaySec: BigNumberish],
    [void],
    "payable"
  >;

  balanceOf: TypedContractMethod<[account: AddressLike], [bigint], "view">;

  depositTo: TypedContractMethod<[account: AddressLike], [void], "payable">;

  getDepositInfo: TypedContractMethod<
    [account: AddressLike],
    [IStakeManager.DepositInfoStructOutput],
    "view"
  >;

  getNonce: TypedContractMethod<
    [sender: AddressLike, key: BigNumberish],
    [bigint],
    "view"
  >;

  getSenderAddress: TypedContractMethod<
    [initCode: BytesLike],
    [void],
    "nonpayable"
  >;

  getUserOpHash: TypedContractMethod<
    [userOp: UserOperationStruct],
    [string],
    "view"
  >;

  handleAggregatedOps: TypedContractMethod<
    [
      opsPerAggregator: IEntryPoint.UserOpsPerAggregatorStruct[],
      beneficiary: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  handleOps: TypedContractMethod<
    [ops: UserOperationStruct[], beneficiary: AddressLike],
    [void],
    "nonpayable"
  >;

  incrementNonce: TypedContractMethod<
    [key: BigNumberish],
    [void],
    "nonpayable"
  >;

  simulateHandleOp: TypedContractMethod<
    [op: UserOperationStruct, target: AddressLike, targetCallData: BytesLike],
    [void],
    "nonpayable"
  >;

  simulateValidation: TypedContractMethod<
    [userOp: UserOperationStruct],
    [void],
    "nonpayable"
  >;

  unlockStake: TypedContractMethod<[], [void], "nonpayable">;

  withdrawStake: TypedContractMethod<
    [withdrawAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  withdrawTo: TypedContractMethod<
    [withdrawAddress: AddressLike, withdrawAmount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addStake"
  ): TypedContractMethod<[_unstakeDelaySec: BigNumberish], [void], "payable">;
  getFunction(
    nameOrSignature: "balanceOf"
  ): TypedContractMethod<[account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "depositTo"
  ): TypedContractMethod<[account: AddressLike], [void], "payable">;
  getFunction(
    nameOrSignature: "getDepositInfo"
  ): TypedContractMethod<
    [account: AddressLike],
    [IStakeManager.DepositInfoStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getNonce"
  ): TypedContractMethod<
    [sender: AddressLike, key: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getSenderAddress"
  ): TypedContractMethod<[initCode: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getUserOpHash"
  ): TypedContractMethod<[userOp: UserOperationStruct], [string], "view">;
  getFunction(
    nameOrSignature: "handleAggregatedOps"
  ): TypedContractMethod<
    [
      opsPerAggregator: IEntryPoint.UserOpsPerAggregatorStruct[],
      beneficiary: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "handleOps"
  ): TypedContractMethod<
    [ops: UserOperationStruct[], beneficiary: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "incrementNonce"
  ): TypedContractMethod<[key: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "simulateHandleOp"
  ): TypedContractMethod<
    [op: UserOperationStruct, target: AddressLike, targetCallData: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "simulateValidation"
  ): TypedContractMethod<[userOp: UserOperationStruct], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "unlockStake"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withdrawStake"
  ): TypedContractMethod<[withdrawAddress: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withdrawTo"
  ): TypedContractMethod<
    [withdrawAddress: AddressLike, withdrawAmount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "AccountDeployed"
  ): TypedContractEvent<
    AccountDeployedEvent.InputTuple,
    AccountDeployedEvent.OutputTuple,
    AccountDeployedEvent.OutputObject
  >;
  getEvent(
    key: "BeforeExecution"
  ): TypedContractEvent<
    BeforeExecutionEvent.InputTuple,
    BeforeExecutionEvent.OutputTuple,
    BeforeExecutionEvent.OutputObject
  >;
  getEvent(
    key: "Deposited"
  ): TypedContractEvent<
    DepositedEvent.InputTuple,
    DepositedEvent.OutputTuple,
    DepositedEvent.OutputObject
  >;
  getEvent(
    key: "SignatureAggregatorChanged"
  ): TypedContractEvent<
    SignatureAggregatorChangedEvent.InputTuple,
    SignatureAggregatorChangedEvent.OutputTuple,
    SignatureAggregatorChangedEvent.OutputObject
  >;
  getEvent(
    key: "StakeLocked"
  ): TypedContractEvent<
    StakeLockedEvent.InputTuple,
    StakeLockedEvent.OutputTuple,
    StakeLockedEvent.OutputObject
  >;
  getEvent(
    key: "StakeUnlocked"
  ): TypedContractEvent<
    StakeUnlockedEvent.InputTuple,
    StakeUnlockedEvent.OutputTuple,
    StakeUnlockedEvent.OutputObject
  >;
  getEvent(
    key: "StakeWithdrawn"
  ): TypedContractEvent<
    StakeWithdrawnEvent.InputTuple,
    StakeWithdrawnEvent.OutputTuple,
    StakeWithdrawnEvent.OutputObject
  >;
  getEvent(
    key: "UserOperationEvent"
  ): TypedContractEvent<
    UserOperationEventEvent.InputTuple,
    UserOperationEventEvent.OutputTuple,
    UserOperationEventEvent.OutputObject
  >;
  getEvent(
    key: "UserOperationRevertReason"
  ): TypedContractEvent<
    UserOperationRevertReasonEvent.InputTuple,
    UserOperationRevertReasonEvent.OutputTuple,
    UserOperationRevertReasonEvent.OutputObject
  >;
  getEvent(
    key: "Withdrawn"
  ): TypedContractEvent<
    WithdrawnEvent.InputTuple,
    WithdrawnEvent.OutputTuple,
    WithdrawnEvent.OutputObject
  >;

  filters: {
    "AccountDeployed(bytes32,address,address,address)": TypedContractEvent<
      AccountDeployedEvent.InputTuple,
      AccountDeployedEvent.OutputTuple,
      AccountDeployedEvent.OutputObject
    >;
    AccountDeployed: TypedContractEvent<
      AccountDeployedEvent.InputTuple,
      AccountDeployedEvent.OutputTuple,
      AccountDeployedEvent.OutputObject
    >;

    "BeforeExecution()": TypedContractEvent<
      BeforeExecutionEvent.InputTuple,
      BeforeExecutionEvent.OutputTuple,
      BeforeExecutionEvent.OutputObject
    >;
    BeforeExecution: TypedContractEvent<
      BeforeExecutionEvent.InputTuple,
      BeforeExecutionEvent.OutputTuple,
      BeforeExecutionEvent.OutputObject
    >;

    "Deposited(address,uint256)": TypedContractEvent<
      DepositedEvent.InputTuple,
      DepositedEvent.OutputTuple,
      DepositedEvent.OutputObject
    >;
    Deposited: TypedContractEvent<
      DepositedEvent.InputTuple,
      DepositedEvent.OutputTuple,
      DepositedEvent.OutputObject
    >;

    "SignatureAggregatorChanged(address)": TypedContractEvent<
      SignatureAggregatorChangedEvent.InputTuple,
      SignatureAggregatorChangedEvent.OutputTuple,
      SignatureAggregatorChangedEvent.OutputObject
    >;
    SignatureAggregatorChanged: TypedContractEvent<
      SignatureAggregatorChangedEvent.InputTuple,
      SignatureAggregatorChangedEvent.OutputTuple,
      SignatureAggregatorChangedEvent.OutputObject
    >;

    "StakeLocked(address,uint256,uint256)": TypedContractEvent<
      StakeLockedEvent.InputTuple,
      StakeLockedEvent.OutputTuple,
      StakeLockedEvent.OutputObject
    >;
    StakeLocked: TypedContractEvent<
      StakeLockedEvent.InputTuple,
      StakeLockedEvent.OutputTuple,
      StakeLockedEvent.OutputObject
    >;

    "StakeUnlocked(address,uint256)": TypedContractEvent<
      StakeUnlockedEvent.InputTuple,
      StakeUnlockedEvent.OutputTuple,
      StakeUnlockedEvent.OutputObject
    >;
    StakeUnlocked: TypedContractEvent<
      StakeUnlockedEvent.InputTuple,
      StakeUnlockedEvent.OutputTuple,
      StakeUnlockedEvent.OutputObject
    >;

    "StakeWithdrawn(address,address,uint256)": TypedContractEvent<
      StakeWithdrawnEvent.InputTuple,
      StakeWithdrawnEvent.OutputTuple,
      StakeWithdrawnEvent.OutputObject
    >;
    StakeWithdrawn: TypedContractEvent<
      StakeWithdrawnEvent.InputTuple,
      StakeWithdrawnEvent.OutputTuple,
      StakeWithdrawnEvent.OutputObject
    >;

    "UserOperationEvent(bytes32,address,address,uint256,bool,uint256,uint256)": TypedContractEvent<
      UserOperationEventEvent.InputTuple,
      UserOperationEventEvent.OutputTuple,
      UserOperationEventEvent.OutputObject
    >;
    UserOperationEvent: TypedContractEvent<
      UserOperationEventEvent.InputTuple,
      UserOperationEventEvent.OutputTuple,
      UserOperationEventEvent.OutputObject
    >;

    "UserOperationRevertReason(bytes32,address,uint256,bytes)": TypedContractEvent<
      UserOperationRevertReasonEvent.InputTuple,
      UserOperationRevertReasonEvent.OutputTuple,
      UserOperationRevertReasonEvent.OutputObject
    >;
    UserOperationRevertReason: TypedContractEvent<
      UserOperationRevertReasonEvent.InputTuple,
      UserOperationRevertReasonEvent.OutputTuple,
      UserOperationRevertReasonEvent.OutputObject
    >;

    "Withdrawn(address,address,uint256)": TypedContractEvent<
      WithdrawnEvent.InputTuple,
      WithdrawnEvent.OutputTuple,
      WithdrawnEvent.OutputObject
    >;
    Withdrawn: TypedContractEvent<
      WithdrawnEvent.InputTuple,
      WithdrawnEvent.OutputTuple,
      WithdrawnEvent.OutputObject
    >;
  };
}
