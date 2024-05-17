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
import type { NonPayableOverrides } from "../../../common";
import type {
  VerifyingPaymaster,
  VerifyingPaymasterInterface,
} from "../../../contracts/samples/VerifyingPaymaster";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "_entryPoint",
        type: "address",
      },
      {
        internalType: "address",
        name: "_verifyingSigner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "unstakeDelaySec",
        type: "uint32",
      },
    ],
    name: "addStake",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "entryPoint",
    outputs: [
      {
        internalType: "contract IEntryPoint",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDeposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
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
    name: "getHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "paymasterAndData",
        type: "bytes",
      },
    ],
    name: "parsePaymasterAndData",
    outputs: [
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
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum IPaymaster.PostOpMode",
        name: "mode",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "context",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "actualGasCost",
        type: "uint256",
      },
    ],
    name: "postOp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "senderNonce",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unlockStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
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
        name: "userOpHash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "maxCost",
        type: "uint256",
      },
    ],
    name: "validatePaymasterUserOp",
    outputs: [
      {
        internalType: "bytes",
        name: "context",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "validationData",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "verifyingSigner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "withdrawAddress",
        type: "address",
      },
    ],
    name: "withdrawStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "withdrawAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60c06040523480156200001157600080fd5b50604051620021d7380380620021d7833981810160405281019062000037919062000244565b81620000586200004c620000c960201b60201c565b620000d160201b60201c565b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1681525050508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff168152505050506200028b565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001c7826200019a565b9050919050565b6000620001db82620001ba565b9050919050565b620001ed81620001ce565b8114620001f957600080fd5b50565b6000815190506200020d81620001e2565b92915050565b6200021e81620001ba565b81146200022a57600080fd5b50565b6000815190506200023e8162000213565b92915050565b600080604083850312156200025e576200025d62000195565b5b60006200026e85828601620001fc565b925050602062000281858286016200022d565b9150509250929050565b60805160a051611eee620002e9600039600081816104c60152610d0101526000818161039e01528181610435015281816106330152818161065f015281816106e901528181610779015281816108180152610ae00152611eee6000f3fe6080604052600436106100f35760003560e01c8063a9a234091161008a578063c399ec8811610059578063c399ec88146102f8578063d0e30db014610323578063f2fde38b1461032d578063f465c77e14610356576100f3565b8063a9a2340914610264578063b0d691fe1461028d578063bb9fe6bf146102b8578063c23a5cea146102cf576100f3565b80638da5cb5b116100c65780638da5cb5b1461017f57806394d4ad60146101aa57806394e1fc19146101ea5780639c90b44314610227576100f3565b80630396cb60146100f8578063205c28781461011457806323d9ac9b1461013d578063715018a614610168575b600080fd5b610112600480360381019061010d9190611112565b610394565b005b34801561012057600080fd5b5061013b600480360381019061013691906111d3565b61042b565b005b34801561014957600080fd5b506101526104c4565b60405161015f9190611234565b60405180910390f35b34801561017457600080fd5b5061017d6104e8565b005b34801561018b57600080fd5b506101946104fc565b6040516101a19190611234565b60405180910390f35b3480156101b657600080fd5b506101d160048036038101906101cc91906112b4565b610525565b6040516101e19493929190611380565b60405180910390f35b3480156101f657600080fd5b50610211600480360381019061020c9190611411565b610574565b60405161021e9190611499565b60405180910390f35b34801561023357600080fd5b5061024e600480360381019061024991906114e0565b6105ff565b60405161025b919061151c565b60405180910390f35b34801561027057600080fd5b5061028b6004803603810190610286919061155c565b610617565b005b34801561029957600080fd5b506102a2610631565b6040516102af919061162f565b60405180910390f35b3480156102c457600080fd5b506102cd610655565b005b3480156102db57600080fd5b506102f660048036038101906102f1919061164a565b6106df565b005b34801561030457600080fd5b5061030d610775565b60405161031a919061151c565b60405180910390f35b61032b610816565b005b34801561033957600080fd5b50610354600480360381019061034f91906114e0565b6108a4565b005b34801561036257600080fd5b5061037d600480360381019061037891906116a3565b610927565b60405161038b929190611780565b60405180910390f35b61039c61094a565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16630396cb6034836040518363ffffffff1660e01b81526004016103f691906117bf565b6000604051808303818588803b15801561040f57600080fd5b505af1158015610423573d6000803e3d6000fd5b505050505050565b61043361094a565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663205c287883836040518363ffffffff1660e01b815260040161048e9291906117e9565b600060405180830381600087803b1580156104a857600080fd5b505af11580156104bc573d6000803e3d6000fd5b505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6104f061094a565b6104fa60006109c8565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600080366000858560149060549261053f9392919061181c565b81019061054c9190611857565b8094508195505050858560549080926105679392919061181c565b9150915092959194509250565b600061057f84610a8c565b46306001600061058e89610ace565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205486866040516020016105e096959493929190611897565b6040516020818303038152906040528051906020012090509392505050565b60016020528060005260406000206000915090505481565b61061f610ade565b61062b84848484610b6e565b50505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b61065d61094a565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663bb9fe6bf6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156106c557600080fd5b505af11580156106d9573d6000803e3d6000fd5b50505050565b6106e761094a565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663c23a5cea826040518263ffffffff1660e01b815260040161074091906118ff565b600060405180830381600087803b15801561075a57600080fd5b505af115801561076e573d6000803e3d6000fd5b5050505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016107d09190611234565b602060405180830381865afa1580156107ed573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610811919061192f565b905090565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663b760faf934306040518363ffffffff1660e01b81526004016108709190611234565b6000604051808303818588803b15801561088957600080fd5b505af115801561089d573d6000803e3d6000fd5b5050505050565b6108ac61094a565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361091b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610912906119df565b60405180910390fd5b610924816109c8565b50565b60606000610933610ade565b61093e858585610ba9565b91509150935093915050565b610952610d95565b73ffffffffffffffffffffffffffffffffffffffff166109706104fc565b73ffffffffffffffffffffffffffffffffffffffff16146109c6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109bd90611a4b565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b606036600083806101200190610aa29190611a7a565b915091508360208184030360405194506020810185016040528085528082602087013750505050919050565b6000808235905080915050919050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610b6c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b6390611b29565b60405180910390fd5b565b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ba090611b95565b60405180910390fd5b606060008080366000610bcb89806101200190610bc69190611a7a565b610525565b93509350935093506040828290501480610be85750604182829050145b610c27576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c1e90611c27565b60405180910390fd5b6000610c3c610c378b8787610574565b610d9d565b905060016000610c4b8c610ace565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190610c9690611c76565b9190505550610ce98184848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050610dd3565b73ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1614610d6657610d4760018686610dfa565b6040518060200160405280600081525090965096505050505050610d8d565b610d7260008686610dfa565b60405180602001604052806000815250909650965050505050505b935093915050565b600033905090565b60007f19457468657265756d205369676e6564204d6573736167653a0a33320000000060005281601c52603c6000209050919050565b6000806000610de28585610e33565b91509150610def81610e84565b819250505092915050565b600060d08265ffffffffffff16901b60a08465ffffffffffff16901b85610e22576000610e25565b60015b60ff16171790509392505050565b6000806041835103610e745760008060006020860151925060408601519150606086015160001a9050610e6887828585610fea565b94509450505050610e7d565b60006002915091505b9250929050565b60006004811115610e9857610e97611cbe565b5b816004811115610eab57610eaa611cbe565b5b0315610fe75760016004811115610ec557610ec4611cbe565b5b816004811115610ed857610ed7611cbe565b5b03610f18576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f0f90611d39565b60405180910390fd5b60026004811115610f2c57610f2b611cbe565b5b816004811115610f3f57610f3e611cbe565b5b03610f7f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f7690611da5565b60405180910390fd5b60036004811115610f9357610f92611cbe565b5b816004811115610fa657610fa5611cbe565b5b03610fe6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fdd90611e37565b60405180910390fd5b5b50565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08360001c11156110255760006003915091506110c3565b60006001878787876040516000815260200160405260405161104a9493929190611e73565b6020604051602081039080840390855afa15801561106c573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036110ba576000600192509250506110c3565b80600092509250505b94509492505050565b600080fd5b600080fd5b600063ffffffff82169050919050565b6110ef816110d6565b81146110fa57600080fd5b50565b60008135905061110c816110e6565b92915050565b600060208284031215611128576111276110cc565b5b6000611136848285016110fd565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061116a8261113f565b9050919050565b61117a8161115f565b811461118557600080fd5b50565b60008135905061119781611171565b92915050565b6000819050919050565b6111b08161119d565b81146111bb57600080fd5b50565b6000813590506111cd816111a7565b92915050565b600080604083850312156111ea576111e96110cc565b5b60006111f885828601611188565b9250506020611209858286016111be565b9150509250929050565b600061121e8261113f565b9050919050565b61122e81611213565b82525050565b60006020820190506112496000830184611225565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f8401126112745761127361124f565b5b8235905067ffffffffffffffff81111561129157611290611254565b5b6020830191508360018202830111156112ad576112ac611259565b5b9250929050565b600080602083850312156112cb576112ca6110cc565b5b600083013567ffffffffffffffff8111156112e9576112e86110d1565b5b6112f58582860161125e565b92509250509250929050565b600065ffffffffffff82169050919050565b61131c81611301565b82525050565b600082825260208201905092915050565b82818337600083830152505050565b6000601f19601f8301169050919050565b600061135f8385611322565b935061136c838584611333565b61137583611342565b840190509392505050565b60006060820190506113956000830187611313565b6113a26020830186611313565b81810360408301526113b5818486611353565b905095945050505050565b600080fd5b600061016082840312156113dc576113db6113c0565b5b81905092915050565b6113ee81611301565b81146113f957600080fd5b50565b60008135905061140b816113e5565b92915050565b60008060006060848603121561142a576114296110cc565b5b600084013567ffffffffffffffff811115611448576114476110d1565b5b611454868287016113c5565b9350506020611465868287016113fc565b9250506040611476868287016113fc565b9150509250925092565b6000819050919050565b61149381611480565b82525050565b60006020820190506114ae600083018461148a565b92915050565b6114bd81611213565b81146114c857600080fd5b50565b6000813590506114da816114b4565b92915050565b6000602082840312156114f6576114f56110cc565b5b6000611504848285016114cb565b91505092915050565b6115168161119d565b82525050565b6000602082019050611531600083018461150d565b92915050565b6003811061154457600080fd5b50565b60008135905061155681611537565b92915050565b60008060008060608587031215611576576115756110cc565b5b600061158487828801611547565b945050602085013567ffffffffffffffff8111156115a5576115a46110d1565b5b6115b18782880161125e565b935093505060406115c4878288016111be565b91505092959194509250565b6000819050919050565b60006115f56115f06115eb8461113f565b6115d0565b61113f565b9050919050565b6000611607826115da565b9050919050565b6000611619826115fc565b9050919050565b6116298161160e565b82525050565b60006020820190506116446000830184611620565b92915050565b6000602082840312156116605761165f6110cc565b5b600061166e84828501611188565b91505092915050565b61168081611480565b811461168b57600080fd5b50565b60008135905061169d81611677565b92915050565b6000806000606084860312156116bc576116bb6110cc565b5b600084013567ffffffffffffffff8111156116da576116d96110d1565b5b6116e6868287016113c5565b93505060206116f78682870161168e565b9250506040611708868287016111be565b9150509250925092565b600081519050919050565b60005b8381101561173b578082015181840152602081019050611720565b60008484015250505050565b600061175282611712565b61175c8185611322565b935061176c81856020860161171d565b61177581611342565b840191505092915050565b6000604082019050818103600083015261179a8185611747565b90506117a9602083018461150d565b9392505050565b6117b9816110d6565b82525050565b60006020820190506117d460008301846117b0565b92915050565b6117e38161115f565b82525050565b60006040820190506117fe60008301856117da565b61180b602083018461150d565b9392505050565b600080fd5b600080fd5b600080858511156118305761182f611812565b5b8386111561184157611840611817565b5b6001850283019150848603905094509492505050565b6000806040838503121561186e5761186d6110cc565b5b600061187c858286016113fc565b925050602061188d858286016113fc565b9150509250929050565b600060c08201905081810360008301526118b18189611747565b90506118c0602083018861150d565b6118cd6040830187611225565b6118da606083018661150d565b6118e76080830185611313565b6118f460a0830184611313565b979650505050505050565b600060208201905061191460008301846117da565b92915050565b600081519050611929816111a7565b92915050565b600060208284031215611945576119446110cc565b5b60006119538482850161191a565b91505092915050565b600082825260208201905092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006119c960268361195c565b91506119d48261196d565b604082019050919050565b600060208201905081810360008301526119f8816119bc565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000611a3560208361195c565b9150611a40826119ff565b602082019050919050565b60006020820190508181036000830152611a6481611a28565b9050919050565b600080fd5b600080fd5b600080fd5b60008083356001602003843603038112611a9757611a96611a6b565b5b80840192508235915067ffffffffffffffff821115611ab957611ab8611a70565b5b602083019250600182023603831315611ad557611ad4611a75565b5b509250929050565b7f53656e646572206e6f7420456e747279506f696e740000000000000000000000600082015250565b6000611b1360158361195c565b9150611b1e82611add565b602082019050919050565b60006020820190508181036000830152611b4281611b06565b9050919050565b7f6d757374206f7665727269646500000000000000000000000000000000000000600082015250565b6000611b7f600d8361195c565b9150611b8a82611b49565b602082019050919050565b60006020820190508181036000830152611bae81611b72565b9050919050565b7f566572696679696e675061796d61737465723a20696e76616c6964207369676e60008201527f6174757265206c656e67746820696e207061796d6173746572416e6444617461602082015250565b6000611c1160408361195c565b9150611c1c82611bb5565b604082019050919050565b60006020820190508181036000830152611c4081611c04565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611c818261119d565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611cb357611cb2611c47565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f45434453413a20696e76616c6964207369676e61747572650000000000000000600082015250565b6000611d2360188361195c565b9150611d2e82611ced565b602082019050919050565b60006020820190508181036000830152611d5281611d16565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265206c656e67746800600082015250565b6000611d8f601f8361195c565b9150611d9a82611d59565b602082019050919050565b60006020820190508181036000830152611dbe81611d82565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202773272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b6000611e2160228361195c565b9150611e2c82611dc5565b604082019050919050565b60006020820190508181036000830152611e5081611e14565b9050919050565b600060ff82169050919050565b611e6d81611e57565b82525050565b6000608082019050611e88600083018761148a565b611e956020830186611e64565b611ea2604083018561148a565b611eaf606083018461148a565b9594505050505056fea264697066735822122001267a7596fcd795c728ded9ed8aefc7c9898d16362c43fc17d34f9cf8e9b0fb64736f6c63430008180033";

type VerifyingPaymasterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VerifyingPaymasterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VerifyingPaymaster__factory extends ContractFactory {
  constructor(...args: VerifyingPaymasterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _entryPoint: AddressLike,
    _verifyingSigner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _entryPoint,
      _verifyingSigner,
      overrides || {}
    );
  }
  override deploy(
    _entryPoint: AddressLike,
    _verifyingSigner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _entryPoint,
      _verifyingSigner,
      overrides || {}
    ) as Promise<
      VerifyingPaymaster & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): VerifyingPaymaster__factory {
    return super.connect(runner) as VerifyingPaymaster__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VerifyingPaymasterInterface {
    return new Interface(_abi) as VerifyingPaymasterInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): VerifyingPaymaster {
    return new Contract(address, _abi, runner) as unknown as VerifyingPaymaster;
  }
}
