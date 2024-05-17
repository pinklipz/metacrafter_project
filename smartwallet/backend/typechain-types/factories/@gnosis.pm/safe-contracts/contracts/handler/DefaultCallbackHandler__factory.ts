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
import type { NonPayableOverrides } from "../../../../../common";
import type {
  DefaultCallbackHandler,
  DefaultCallbackHandlerInterface,
} from "../../../../../@gnosis.pm/safe-contracts/contracts/handler/DefaultCallbackHandler";

const _abi = [
  {
    inputs: [],
    name: "NAME",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "VERSION",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "tokensReceived",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610985806100206000396000f3fe608060405234801561001057600080fd5b506004361061007c5760003560e01c8063a3f4df7e1161005b578063a3f4df7e146100fd578063bc197c811461011b578063f23a6e611461014b578063ffa1ad741461017b5761007c565b806223de291461008157806301ffc9a71461009d578063150b7a02146100cd575b600080fd5b61009b60048036038101906100969190610495565b610199565b005b6100b760048036038101906100b291906105bc565b6101a3565b6040516100c49190610604565b60405180910390f35b6100e760048036038101906100e2919061061f565b6102dd565b6040516100f491906106b6565b60405180910390f35b6101056102f2565b6040516101129190610761565b60405180910390f35b610135600480360381019061013091906107d9565b61032b565b60405161014291906106b6565b60405180910390f35b610165600480360381019061016091906108b5565b610343565b60405161017291906106b6565b60405180910390f35b610183610359565b6040516101909190610761565b60405180910390f35b5050505050505050565b60007f4e2312e0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061026e57507f150b7a02000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806102d657507f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b9050919050565b600063150b7a0260e01b905095945050505050565b6040518060400160405280601881526020017f44656661756c742043616c6c6261636b2048616e646c6572000000000000000081525081565b600063bc197c8160e01b905098975050505050505050565b600063f23a6e6160e01b90509695505050505050565b6040518060400160405280600581526020017f312e302e3000000000000000000000000000000000000000000000000000000081525081565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006103c78261039c565b9050919050565b6103d7816103bc565b81146103e257600080fd5b50565b6000813590506103f4816103ce565b92915050565b6000819050919050565b61040d816103fa565b811461041857600080fd5b50565b60008135905061042a81610404565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f84011261045557610454610430565b5b8235905067ffffffffffffffff81111561047257610471610435565b5b60208301915083600182028301111561048e5761048d61043a565b5b9250929050565b60008060008060008060008060c0898b0312156104b5576104b4610392565b5b60006104c38b828c016103e5565b98505060206104d48b828c016103e5565b97505060406104e58b828c016103e5565b96505060606104f68b828c0161041b565b955050608089013567ffffffffffffffff81111561051757610516610397565b5b6105238b828c0161043f565b945094505060a089013567ffffffffffffffff81111561054657610545610397565b5b6105528b828c0161043f565b92509250509295985092959890939650565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61059981610564565b81146105a457600080fd5b50565b6000813590506105b681610590565b92915050565b6000602082840312156105d2576105d1610392565b5b60006105e0848285016105a7565b91505092915050565b60008115159050919050565b6105fe816105e9565b82525050565b600060208201905061061960008301846105f5565b92915050565b60008060008060006080868803121561063b5761063a610392565b5b6000610649888289016103e5565b955050602061065a888289016103e5565b945050604061066b8882890161041b565b935050606086013567ffffffffffffffff81111561068c5761068b610397565b5b6106988882890161043f565b92509250509295509295909350565b6106b081610564565b82525050565b60006020820190506106cb60008301846106a7565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561070b5780820151818401526020810190506106f0565b60008484015250505050565b6000601f19601f8301169050919050565b6000610733826106d1565b61073d81856106dc565b935061074d8185602086016106ed565b61075681610717565b840191505092915050565b6000602082019050818103600083015261077b8184610728565b905092915050565b60008083601f84011261079957610798610430565b5b8235905067ffffffffffffffff8111156107b6576107b5610435565b5b6020830191508360208202830111156107d2576107d161043a565b5b9250929050565b60008060008060008060008060a0898b0312156107f9576107f8610392565b5b60006108078b828c016103e5565b98505060206108188b828c016103e5565b975050604089013567ffffffffffffffff81111561083957610838610397565b5b6108458b828c01610783565b9650965050606089013567ffffffffffffffff81111561086857610867610397565b5b6108748b828c01610783565b9450945050608089013567ffffffffffffffff81111561089757610896610397565b5b6108a38b828c0161043f565b92509250509295985092959890939650565b60008060008060008060a087890312156108d2576108d1610392565b5b60006108e089828a016103e5565b96505060206108f189828a016103e5565b955050604061090289828a0161041b565b945050606061091389828a0161041b565b935050608087013567ffffffffffffffff81111561093457610933610397565b5b61094089828a0161043f565b9250925050929550929550929556fea2646970667358221220c98d74c7af55e99786dbe7a1490ed7101f5cdec3be3a570650aa94b9f648bebe64736f6c63430008180033";

type DefaultCallbackHandlerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DefaultCallbackHandlerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DefaultCallbackHandler__factory extends ContractFactory {
  constructor(...args: DefaultCallbackHandlerConstructorParams) {
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
      DefaultCallbackHandler & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): DefaultCallbackHandler__factory {
    return super.connect(runner) as DefaultCallbackHandler__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DefaultCallbackHandlerInterface {
    return new Interface(_abi) as DefaultCallbackHandlerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): DefaultCallbackHandler {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as DefaultCallbackHandler;
  }
}
