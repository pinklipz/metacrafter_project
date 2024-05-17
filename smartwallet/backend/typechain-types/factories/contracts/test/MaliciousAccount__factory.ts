/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { PayableOverrides } from "../../../common";
import type {
  MaliciousAccount,
  MaliciousAccountInterface,
} from "../../../contracts/test/MaliciousAccount";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "_ep",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "callGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "verificationGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "paymasterAndData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct UserOperation",
        name: "userOp",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "missingAccountFunds",
        type: "uint256",
      },
    ],
    name: "validateUserOp",
    outputs: [
      {
        internalType: "uint256",
        name: "validationData",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526040516106a33803806106a3833981810160405281019061002591906100e0565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505061010d565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061009b82610070565b9050919050565b60006100ad82610090565b9050919050565b6100bd816100a2565b81146100c857600080fd5b50565b6000815190506100da816100b4565b92915050565b6000602082840312156100f6576100f561006b565b5b6000610104848285016100cb565b91505092915050565b6105878061011c6000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80633a871cdd14610030575b600080fd5b61004a60048036038101906100459190610249565b610060565b60405161005791906102c7565b60405180910390f35b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b760faf983306040518363ffffffff1660e01b81526004016100bd9190610323565b6000604051808303818588803b1580156100d657600080fd5b505af11580156100ea573d6000803e3d6000fd5b5050505050600084806101400190610102919061034d565b81019061010f91906103b0565b905060008560c001358660a00135876080013561012c919061040c565b610136919061040c565b905060008185610146919061046f565b905060008761010001358261015b91906104a0565b905083811461019f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161019690610531565b60405180910390fd5b60009450505050509392505050565b600080fd5b600080fd5b600080fd5b600061016082840312156101d4576101d36101b8565b5b81905092915050565b6000819050919050565b6101f0816101dd565b81146101fb57600080fd5b50565b60008135905061020d816101e7565b92915050565b6000819050919050565b61022681610213565b811461023157600080fd5b50565b6000813590506102438161021d565b92915050565b600080600060608486031215610262576102616101ae565b5b600084013567ffffffffffffffff8111156102805761027f6101b3565b5b61028c868287016101bd565b935050602061029d868287016101fe565b92505060406102ae86828701610234565b9150509250925092565b6102c181610213565b82525050565b60006020820190506102dc60008301846102b8565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061030d826102e2565b9050919050565b61031d81610302565b82525050565b60006020820190506103386000830184610314565b92915050565b600080fd5b600080fd5b600080fd5b6000808335600160200384360303811261036a5761036961033e565b5b80840192508235915067ffffffffffffffff82111561038c5761038b610343565b5b6020830192506001820236038313156103a8576103a7610348565b5b509250929050565b6000602082840312156103c6576103c56101ae565b5b60006103d484828501610234565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061041782610213565b915061042283610213565b925082820190508082111561043a576104396103dd565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061047a82610213565b915061048583610213565b92508261049557610494610440565b5b828204905092915050565b60006104ab82610213565b91506104b683610213565b92508282039050818111156104ce576104cd6103dd565b5b92915050565b600082825260208201905092915050565b7f5265766572742061667465722066697273742076616c69646174696f6e000000600082015250565b600061051b601d836104d4565b9150610526826104e5565b602082019050919050565b6000602082019050818103600083015261054a8161050e565b905091905056fea26469706673582212204c68e4a5f3897c4f094bc7f45170c81f5081a8e58da9113bdc7ba85bf5aac9ca64736f6c63430008180033";

type MaliciousAccountConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MaliciousAccountConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MaliciousAccount__factory extends ContractFactory {
  constructor(...args: MaliciousAccountConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _ep: AddressLike,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_ep, overrides || {});
  }
  override deploy(
    _ep: AddressLike,
    overrides?: PayableOverrides & { from?: string }
  ) {
    return super.deploy(_ep, overrides || {}) as Promise<
      MaliciousAccount & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MaliciousAccount__factory {
    return super.connect(runner) as MaliciousAccount__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MaliciousAccountInterface {
    return new Interface(_abi) as MaliciousAccountInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MaliciousAccount {
    return new Contract(address, _abi, runner) as unknown as MaliciousAccount;
  }
}
