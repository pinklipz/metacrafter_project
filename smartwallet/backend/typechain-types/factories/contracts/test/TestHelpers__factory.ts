/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  TestHelpers,
  TestHelpersInterface,
} from "../../../contracts/test/TestHelpers";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "validationData",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "paymasterValidationData",
        type: "uint256",
      },
    ],
    name: "intersectTimeRange",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "aggregator",
            type: "address",
          },
          {
            internalType: "uint48",
            name: "validAfter",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "validUntil",
            type: "uint48",
          },
        ],
        internalType: "struct ValidationData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "sigFailed",
        type: "bool",
      },
      {
        internalType: "uint48",
        name: "validUntil",
        type: "uint48",
      },
      {
        internalType: "uint48",
        name: "validAfter",
        type: "uint48",
      },
    ],
    name: "packValidationData",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "aggregator",
            type: "address",
          },
          {
            internalType: "uint48",
            name: "validAfter",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "validUntil",
            type: "uint48",
          },
        ],
        internalType: "struct ValidationData",
        name: "data",
        type: "tuple",
      },
    ],
    name: "packValidationDataStruct",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "validationData",
        type: "uint256",
      },
    ],
    name: "parseValidationData",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "aggregator",
            type: "address",
          },
          {
            internalType: "uint48",
            name: "validAfter",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "validUntil",
            type: "uint48",
          },
        ],
        internalType: "struct ValidationData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506107a0806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806324d3cde6146100515780634fe5f5cf14610081578063a4b2282e146100b1578063b059e2fa146100e1575b600080fd5b61006b6004803603810190610066919061056a565b610111565b60405161007891906105b0565b60405180910390f35b61009b600480360381019061009691906105f7565b610123565b6040516100a89190610697565b60405180910390f35b6100cb60048036038101906100c691906106b2565b61013d565b6040516100d89190610697565b60405180910390f35b6100fb60048036038101906100f69190610717565b610155565b60405161010891906105b0565b60405180910390f35b600061011c8261016b565b9050919050565b61012b610383565b61013583836101b3565b905092915050565b610145610383565b61014e826102c6565b9050919050565b600061016284848461034a565b90509392505050565b600060d0826020015165ffffffffffff16901b60a0836040015165ffffffffffff16901b836000015173ffffffffffffffffffffffffffffffffffffffff1617179050919050565b6101bb610383565b60006101c6846102c6565b905060006101d3846102c6565b9050600082600001519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361021a57816000015190505b6000836020015190506000846040015190506000846020015190506000856040015190508165ffffffffffff168465ffffffffffff16101561025a578193505b8065ffffffffffff168365ffffffffffff161115610276578092505b60405180606001604052808673ffffffffffffffffffffffffffffffffffffffff1681526020018565ffffffffffff1681526020018465ffffffffffff1681525097505050505050505092915050565b6102ce610383565b6000829050600060a084901c905060008165ffffffffffff16036102f65765ffffffffffff90505b600060d085901c905060405180606001604052808473ffffffffffffffffffffffffffffffffffffffff1681526020018265ffffffffffff1681526020018365ffffffffffff168152509350505050919050565b600060d08265ffffffffffff16901b60a08465ffffffffffff16901b85610372576000610375565b60015b60ff16171790509392505050565b6040518060600160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600065ffffffffffff168152602001600065ffffffffffff1681525090565b6000604051905090565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610427826103de565b810181811067ffffffffffffffff82111715610446576104456103ef565b5b80604052505050565b60006104596103ca565b9050610465828261041e565b919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006104958261046a565b9050919050565b6104a58161048a565b81146104b057600080fd5b50565b6000813590506104c28161049c565b92915050565b600065ffffffffffff82169050919050565b6104e3816104c8565b81146104ee57600080fd5b50565b600081359050610500816104da565b92915050565b60006060828403121561051c5761051b6103d9565b5b610526606061044f565b90506000610536848285016104b3565b600083015250602061054a848285016104f1565b602083015250604061055e848285016104f1565b60408301525092915050565b6000606082840312156105805761057f6103d4565b5b600061058e84828501610506565b91505092915050565b6000819050919050565b6105aa81610597565b82525050565b60006020820190506105c560008301846105a1565b92915050565b6105d481610597565b81146105df57600080fd5b50565b6000813590506105f1816105cb565b92915050565b6000806040838503121561060e5761060d6103d4565b5b600061061c858286016105e2565b925050602061062d858286016105e2565b9150509250929050565b6106408161048a565b82525050565b61064f816104c8565b82525050565b60608201600082015161066b6000850182610637565b50602082015161067e6020850182610646565b5060408201516106916040850182610646565b50505050565b60006060820190506106ac6000830184610655565b92915050565b6000602082840312156106c8576106c76103d4565b5b60006106d6848285016105e2565b91505092915050565b60008115159050919050565b6106f4816106df565b81146106ff57600080fd5b50565b600081359050610711816106eb565b92915050565b6000806000606084860312156107305761072f6103d4565b5b600061073e86828701610702565b935050602061074f868287016104f1565b9250506040610760868287016104f1565b915050925092509256fea2646970667358221220404fa7a406a1e0621e59a475d0e14df649f8e9ba1374a574cf7b7d7f1eeabe4064736f6c63430008180033";

type TestHelpersConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestHelpersConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestHelpers__factory extends ContractFactory {
  constructor(...args: TestHelpersConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      TestHelpers & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): TestHelpers__factory {
    return super.connect(runner) as TestHelpers__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestHelpersInterface {
    return new Interface(_abi) as TestHelpersInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): TestHelpers {
    return new Contract(address, _abi, runner) as unknown as TestHelpers;
  }
}
