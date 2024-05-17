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
  TestAggregatedAccountFactory,
  TestAggregatedAccountFactoryInterface,
} from "../../../contracts/test/TestAggregatedAccountFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "anEntryPoint",
        type: "address",
      },
      {
        internalType: "address",
        name: "anAggregator",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "accountImplementation",
    outputs: [
      {
        internalType: "contract TestAggregatedAccount",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "salt",
        type: "uint256",
      },
    ],
    name: "createAccount",
    outputs: [
      {
        internalType: "contract TestAggregatedAccount",
        name: "ret",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "salt",
        type: "uint256",
      },
    ],
    name: "getAddress",
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
] as const;

const _bytecode =
  "0x60a06040523480156200001157600080fd5b506040516200424f3803806200424f83398181016040528101906200003791906200016a565b81816040516200004790620000ad565b620000549291906200022d565b604051809103906000f08015801562000071573d6000803e3d6000fd5b5073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff168152505050506200025a565b6130ed806200116283390190565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620000ed82620000c0565b9050919050565b60006200010182620000e0565b9050919050565b6200011381620000f4565b81146200011f57600080fd5b50565b600081519050620001338162000108565b92915050565b6200014481620000e0565b81146200015057600080fd5b50565b600081519050620001648162000139565b92915050565b60008060408385031215620001845762000183620000bb565b5b6000620001948582860162000122565b9250506020620001a78582860162000153565b9150509250929050565b6000819050919050565b6000620001dc620001d6620001d084620000c0565b620001b1565b620000c0565b9050919050565b6000620001f082620001bb565b9050919050565b60006200020482620001e3565b9050919050565b6200021681620001f7565b82525050565b6200022781620000e0565b82525050565b60006040820190506200024460008301856200020b565b6200025360208301846200021c565b9392505050565b608051610edf620002836000396000818160db0152818161014501526102360152610edf6000f3fe60806040523480156200001157600080fd5b5060043610620000465760003560e01c806311464fbe146200004b5780635fbfb9cf146200006d5780638cb84e1814620000a3575b600080fd5b62000055620000d9565b604051620000649190620003e1565b60405180910390f35b6200008b600480360381019062000085919062000483565b620000fd565b6040516200009a9190620003e1565b60405180910390f35b620000c16004803603810190620000bb919062000483565b62000204565b604051620000d09190620004db565b60405180910390f35b7f000000000000000000000000000000000000000000000000000000000000000081565b6000806200010c848462000204565b905060008173ffffffffffffffffffffffffffffffffffffffff163b905060008111156200013f578192505050620001fe565b8360001b7f000000000000000000000000000000000000000000000000000000000000000086604051602401620001779190620004db565b60405160208183030381529060405263c4d66de860e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051620001ca9062000348565b620001d792919062000592565b8190604051809103906000f5905080158015620001f8573d6000803e3d6000fd5b50925050505b92915050565b6000620002fe8260001b60405180602001620002209062000348565b6020820181038252601f19601f820116604052507f000000000000000000000000000000000000000000000000000000000000000086604051602401620002689190620004db565b60405160208183030381529060405263c4d66de860e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051602001620002c092919062000592565b604051602081830303815290604052604051602001620002e292919062000608565b6040516020818303038152906040528051906020012062000306565b905092915050565b6000620003158383306200031d565b905092915050565b6000604051836040820152846020820152828152600b810160ff815360558120925050509392505050565b610879806200063183390190565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000620003a16200039b620003958462000356565b62000376565b62000356565b9050919050565b6000620003b58262000380565b9050919050565b6000620003c982620003a8565b9050919050565b620003db81620003bc565b82525050565b6000602082019050620003f86000830184620003d0565b92915050565b600080fd5b6000620004108262000356565b9050919050565b620004228162000403565b81146200042e57600080fd5b50565b600081359050620004428162000417565b92915050565b6000819050919050565b6200045d8162000448565b81146200046957600080fd5b50565b6000813590506200047d8162000452565b92915050565b600080604083850312156200049d576200049c620003fe565b5b6000620004ad8582860162000431565b9250506020620004c0858286016200046c565b9150509250929050565b620004d58162000403565b82525050565b6000602082019050620004f26000830184620004ca565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156200053457808201518184015260208101905062000517565b60008484015250505050565b6000601f19601f8301169050919050565b60006200055e82620004f8565b6200056a818562000503565b93506200057c81856020860162000514565b620005878162000540565b840191505092915050565b6000604082019050620005a96000830185620004ca565b8181036020830152620005bd818462000551565b90509392505050565b600081905092915050565b6000620005de82620004f8565b620005ea8185620005c6565b9350620005fc81856020860162000514565b80840191505092915050565b6000620006168285620005d1565b9150620006248284620005d1565b9150819050939250505056fe608060405260405161087938038061087983398181016040528101906100259190610520565b6100378282600061003e60201b60201c565b505061074f565b61004d8361007660201b60201c565b60008251118061005a5750805b156100715761006f83836100cb60201b60201c565b505b505050565b610085816100fe60201b60201c565b8073ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a250565b60606100f68383604051806060016040528060278152602001610852602791396101c360201b60201c565b905092915050565b61010d8161024f60201b60201c565b61014c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610143906105ff565b60405180910390fd5b8061017f7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b61027260201b60201c565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60606000808573ffffffffffffffffffffffffffffffffffffffff16856040516101ed9190610666565b600060405180830381855af49150503d8060008114610228576040519150601f19603f3d011682016040523d82523d6000602084013e61022d565b606091505b50915091506102448683838761027c60201b60201c565b925050509392505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000819050919050565b606083156102e45760008351036102dc5761029c8561024f60201b60201c565b6102db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102d2906106c9565b60405180910390fd5b5b8290506102f5565b6102f483836102fd60201b60201c565b5b949350505050565b6000825111156103105781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610344919061072d565b60405180910390fd5b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061038c82610361565b9050919050565b61039c81610381565b81146103a757600080fd5b50565b6000815190506103b981610393565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610412826103c9565b810181811067ffffffffffffffff82111715610431576104306103da565b5b80604052505050565b600061044461034d565b90506104508282610409565b919050565b600067ffffffffffffffff8211156104705761046f6103da565b5b610479826103c9565b9050602081019050919050565b60005b838110156104a4578082015181840152602081019050610489565b60008484015250505050565b60006104c36104be84610455565b61043a565b9050828152602081018484840111156104df576104de6103c4565b5b6104ea848285610486565b509392505050565b600082601f830112610507576105066103bf565b5b81516105178482602086016104b0565b91505092915050565b6000806040838503121561053757610536610357565b5b6000610545858286016103aa565b925050602083015167ffffffffffffffff8111156105665761056561035c565b5b610572858286016104f2565b9150509250929050565b600082825260208201905092915050565b7f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60008201527f6f74206120636f6e747261637400000000000000000000000000000000000000602082015250565b60006105e9602d8361057c565b91506105f48261058d565b604082019050919050565b60006020820190508181036000830152610618816105dc565b9050919050565b600081519050919050565b600081905092915050565b60006106408261061f565b61064a818561062a565b935061065a818560208601610486565b80840191505092915050565b60006106728284610635565b915081905092915050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b60006106b3601d8361057c565b91506106be8261067d565b602082019050919050565b600060208201905081810360008301526106e2816106a6565b9050919050565b600081519050919050565b60006106ff826106e9565b610709818561057c565b9350610719818560208601610486565b610722816103c9565b840191505092915050565b6000602082019050818103600083015261074781846106f4565b905092915050565b60f58061075d6000396000f3fe608060405236601057600e6018565b005b60166018565b005b601e602c565b602a6026602e565b603b565b565b565b600060366060565b905090565b3660008037600080366000845af43d6000803e8060008114605b573d6000f35b3d6000fd5b6000608c7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b60b5565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600081905091905056fea26469706673582212204986e37e349692cf59e3be9e7b4ef969506ec10cfb6ebe66d0d394ddc3b3b58764736f6c63430008180033416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212206ed0d4a1c317a3f39085d153120f684e422bceda81f8101d74b36a5a5611b67e64736f6c6343000818003360e06040523073ffffffffffffffffffffffffffffffffffffffff1660809073ffffffffffffffffffffffffffffffffffffffff168152503480156200004457600080fd5b50604051620030ed380380620030ed83398181016040528101906200006a919062000261565b818073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1681525050620000af620000ec60201b60201c565b508073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff168152505050506200038c565b600060019054906101000a900460ff16156200013f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000136906200032f565b60405180910390fd5b60ff801660008054906101000a900460ff1660ff1614620001b05760ff6000806101000a81548160ff021916908360ff1602179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249860ff604051620001a791906200036f565b60405180910390a15b565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001e482620001b7565b9050919050565b6000620001f882620001d7565b9050919050565b6200020a81620001eb565b81146200021657600080fd5b50565b6000815190506200022a81620001ff565b92915050565b6200023b81620001d7565b81146200024757600080fd5b50565b6000815190506200025b8162000230565b92915050565b600080604083850312156200027b576200027a620001b2565b5b60006200028b8582860162000219565b92505060206200029e858286016200024a565b9150509250929050565b600082825260208201905092915050565b7f496e697469616c697a61626c653a20636f6e747261637420697320696e69746960008201527f616c697a696e6700000000000000000000000000000000000000000000000000602082015250565b600062000317602783620002a8565b91506200032482620002b9565b604082019050919050565b600060208201905081810360008301526200034a8162000308565b9050919050565b600060ff82169050919050565b620003698162000351565b82525050565b60006020820190506200038660008301846200035e565b92915050565b60805160a05160c051612d07620003e6600039600081816106d90152611279015260008181610bca01526114e20152600081816106fd0152818161078b015281816109ad01528181610a3b0152610aeb0152612d076000f3fe6080604052600436106101175760003560e01c80634f1ef286116100a0578063bc197c8111610064578063bc197c8114610379578063c399ec88146103b6578063c4d66de8146103e1578063d087d2881461040a578063f23a6e61146104355761011e565b80634f1ef286146102b357806352d1902d146102cf5780638da5cb5b146102fa578063b0d691fe14610325578063b61d27f6146103505761011e565b8063245a7bfc116100e7578063245a7bfc146101ef5780633659cfe61461021a5780633a871cdd146102435780634a58db19146102805780634d44560d1461028a5761011e565b806223de291461012357806301ffc9a71461014c578063150b7a021461018957806318dfb3c7146101c65761011e565b3661011e57005b600080fd5b34801561012f57600080fd5b5061014a6004803603810190610145919061195b565b610472565b005b34801561015857600080fd5b50610173600480360381019061016e9190611a82565b61047c565b6040516101809190611aca565b60405180910390f35b34801561019557600080fd5b506101b060048036038101906101ab9190611ae5565b6105b6565b6040516101bd9190611b7c565b60405180910390f35b3480156101d257600080fd5b506101ed60048036038101906101e89190611c43565b6105cb565b005b3480156101fb57600080fd5b506102046106d7565b6040516102119190611cd3565b60405180910390f35b34801561022657600080fd5b50610241600480360381019061023c9190611cee565b6106fb565b005b34801561024f57600080fd5b5061026a60048036038101906102659190611d76565b610883565b6040516102779190611df4565b60405180910390f35b6102886108b6565b005b34801561029657600080fd5b506102b160048036038101906102ac9190611e4d565b61092b565b005b6102cd60048036038101906102c89190611fce565b6109ab565b005b3480156102db57600080fd5b506102e4610ae7565b6040516102f19190612039565b60405180910390f35b34801561030657600080fd5b5061030f610ba0565b60405161031c9190611cd3565b60405180910390f35b34801561033157600080fd5b5061033a610bc6565b60405161034791906120b3565b60405180910390f35b34801561035c57600080fd5b50610377600480360381019061037291906120ce565b610bee565b005b34801561038557600080fd5b506103a0600480360381019061039b9190612198565b610c4b565b6040516103ad9190611b7c565b60405180910390f35b3480156103c257600080fd5b506103cb610c63565b6040516103d89190611df4565b60405180910390f35b3480156103ed57600080fd5b5061040860048036038101906104039190611cee565b610ceb565b005b34801561041657600080fd5b5061041f610e2c565b60405161042c9190611df4565b60405180910390f35b34801561044157600080fd5b5061045c60048036038101906104579190612274565b610eb7565b6040516104699190611b7c565b60405180910390f35b5050505050505050565b60007f150b7a02000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061054757507f4e2312e0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806105af57507f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b9050919050565b600063150b7a0260e01b905095945050505050565b6105d3610ecd565b81819050848490501461061b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106129061236b565b60405180910390fd5b60005b848490508110156106d0576106c385858381811061063f5761063e61238b565b5b90506020020160208101906106549190611cee565b60008585858181106106695761066861238b565b5b905060200281019061067b91906123c9565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050610f9c565b808060010191505061061e565b5050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff1603610789576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107809061249e565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166107c8611020565b73ffffffffffffffffffffffffffffffffffffffff161461081e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161081590612530565b60405180910390fd5b61082781611077565b61088081600067ffffffffffffffff81111561084657610845611ea3565b5b6040519080825280601f01601f1916602001820160405280156108785781602001600182028036833780820191505090505b506000611082565b50565b600061088d6111f0565b6108978484611267565b90506108a684602001356112dc565b6108af826112df565b9392505050565b6108be610bc6565b73ffffffffffffffffffffffffffffffffffffffff1663b760faf934306040518363ffffffff1660e01b81526004016108f79190611cd3565b6000604051808303818588803b15801561091057600080fd5b505af1158015610924573d6000803e3d6000fd5b5050505050565b61093361137b565b61093b610bc6565b73ffffffffffffffffffffffffffffffffffffffff1663205c287883836040518363ffffffff1660e01b815260040161097592919061255f565b600060405180830381600087803b15801561098f57600080fd5b505af11580156109a3573d6000803e3d6000fd5b505050505050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff1603610a39576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a309061249e565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16610a78611020565b73ffffffffffffffffffffffffffffffffffffffff1614610ace576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ac590612530565b60405180910390fd5b610ad782611077565b610ae382826001611082565b5050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff1614610b77576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b6e906125fa565b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b905090565b600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b610bf6610ecd565b610c45848484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050610f9c565b50505050565b600063bc197c8160e01b905098975050505050505050565b6000610c6d610bc6565b73ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610ca59190611cd3565b602060405180830381865afa158015610cc2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ce6919061262f565b905090565b60008060019054906101000a900460ff16159050808015610d1c5750600160008054906101000a900460ff1660ff16105b80610d495750610d2b30611443565b158015610d485750600160008054906101000a900460ff1660ff16145b5b610d88576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d7f906126ce565b60405180910390fd5b60016000806101000a81548160ff021916908360ff1602179055508015610dc5576001600060016101000a81548160ff0219169083151502179055505b610dcf6000611466565b8015610e285760008060016101000a81548160ff0219169083151502179055507f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024986001604051610e1f9190612736565b60405180910390a15b5050565b6000610e36610bc6565b73ffffffffffffffffffffffffffffffffffffffff166335567e1a3060006040518363ffffffff1660e01b8152600401610e719291906127b0565b602060405180830381865afa158015610e8e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eb2919061262f565b905090565b600063f23a6e6160e01b90509695505050505050565b610ed5610bc6565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480610f5b5750600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b610f9a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f9190612825565b60405180910390fd5b565b6000808473ffffffffffffffffffffffffffffffffffffffff168484604051610fc591906128b6565b60006040518083038185875af1925050503d8060008114611002576040519150601f19603f3d011682016040523d82523d6000602084013e611007565b606091505b50915091508161101957805160208201fd5b5050505050565b600061104e7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b611546565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61107f61137b565b50565b6110ae7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd914360001b611550565b60000160009054906101000a900460ff16156110d2576110cd8361155a565b6111eb565b8273ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa92505050801561113a57506040513d601f19601f8201168201806040525081019061113791906128e2565b60015b611179576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161117090612981565b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b81146111de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111d590612a13565b60405180910390fd5b506111ea838383611613565b5b505050565b6111f8610bc6565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611265576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161125c90612a7f565b60405180910390fd5b565b60006112d460405180606001604052807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168152602001600065ffffffffffff168152602001600065ffffffffffff1681525061163f565b905092915050565b50565b600081146113785760003373ffffffffffffffffffffffffffffffffffffffff16827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9060405161132f90612ac5565b600060405180830381858888f193505050503d806000811461136d576040519150601f19603f3d011682016040523d82523d6000602084013e611372565b606091505b50509050505b50565b600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148061140257503073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b611441576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161143890612b26565b60405180910390fd5b565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b80600060026101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff167f47e55c76e7a6f1fd8996a1da8008c1ea29699cca35e7bcd057f2dec313b6e5de60405160405180910390a350565b6000819050919050565b6000819050919050565b61156381611443565b6115a2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161159990612bb8565b60405180910390fd5b806115cf7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b611546565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b61161c83611687565b6000825111806116295750805b1561163a5761163883836116d6565b505b505050565b600060d0826020015165ffffffffffff16901b60a0836040015165ffffffffffff16901b836000015173ffffffffffffffffffffffffffffffffffffffff1617179050919050565b6116908161155a565b8073ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a250565b60606116fb8383604051806060016040528060278152602001612cab60279139611703565b905092915050565b60606000808573ffffffffffffffffffffffffffffffffffffffff168560405161172d91906128b6565b600060405180830381855af49150503d8060008114611768576040519150601f19603f3d011682016040523d82523d6000602084013e61176d565b606091505b509150915061177e86838387611789565b925050509392505050565b606083156117eb5760008351036117e3576117a385611443565b6117e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117d990612c24565b60405180910390fd5b5b8290506117f6565b6117f583836117fe565b5b949350505050565b6000825111156118115781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118459190612c88565b60405180910390fd5b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061188d82611862565b9050919050565b61189d81611882565b81146118a857600080fd5b50565b6000813590506118ba81611894565b92915050565b6000819050919050565b6118d3816118c0565b81146118de57600080fd5b50565b6000813590506118f0816118ca565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f84011261191b5761191a6118f6565b5b8235905067ffffffffffffffff811115611938576119376118fb565b5b60208301915083600182028301111561195457611953611900565b5b9250929050565b60008060008060008060008060c0898b03121561197b5761197a611858565b5b60006119898b828c016118ab565b985050602061199a8b828c016118ab565b97505060406119ab8b828c016118ab565b96505060606119bc8b828c016118e1565b955050608089013567ffffffffffffffff8111156119dd576119dc61185d565b5b6119e98b828c01611905565b945094505060a089013567ffffffffffffffff811115611a0c57611a0b61185d565b5b611a188b828c01611905565b92509250509295985092959890939650565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611a5f81611a2a565b8114611a6a57600080fd5b50565b600081359050611a7c81611a56565b92915050565b600060208284031215611a9857611a97611858565b5b6000611aa684828501611a6d565b91505092915050565b60008115159050919050565b611ac481611aaf565b82525050565b6000602082019050611adf6000830184611abb565b92915050565b600080600080600060808688031215611b0157611b00611858565b5b6000611b0f888289016118ab565b9550506020611b20888289016118ab565b9450506040611b31888289016118e1565b935050606086013567ffffffffffffffff811115611b5257611b5161185d565b5b611b5e88828901611905565b92509250509295509295909350565b611b7681611a2a565b82525050565b6000602082019050611b916000830184611b6d565b92915050565b60008083601f840112611bad57611bac6118f6565b5b8235905067ffffffffffffffff811115611bca57611bc96118fb565b5b602083019150836020820283011115611be657611be5611900565b5b9250929050565b60008083601f840112611c0357611c026118f6565b5b8235905067ffffffffffffffff811115611c2057611c1f6118fb565b5b602083019150836020820283011115611c3c57611c3b611900565b5b9250929050565b60008060008060408587031215611c5d57611c5c611858565b5b600085013567ffffffffffffffff811115611c7b57611c7a61185d565b5b611c8787828801611b97565b9450945050602085013567ffffffffffffffff811115611caa57611ca961185d565b5b611cb687828801611bed565b925092505092959194509250565b611ccd81611882565b82525050565b6000602082019050611ce86000830184611cc4565b92915050565b600060208284031215611d0457611d03611858565b5b6000611d12848285016118ab565b91505092915050565b600080fd5b60006101608284031215611d3757611d36611d1b565b5b81905092915050565b6000819050919050565b611d5381611d40565b8114611d5e57600080fd5b50565b600081359050611d7081611d4a565b92915050565b600080600060608486031215611d8f57611d8e611858565b5b600084013567ffffffffffffffff811115611dad57611dac61185d565b5b611db986828701611d20565b9350506020611dca86828701611d61565b9250506040611ddb868287016118e1565b9150509250925092565b611dee816118c0565b82525050565b6000602082019050611e096000830184611de5565b92915050565b6000611e1a82611862565b9050919050565b611e2a81611e0f565b8114611e3557600080fd5b50565b600081359050611e4781611e21565b92915050565b60008060408385031215611e6457611e63611858565b5b6000611e7285828601611e38565b9250506020611e83858286016118e1565b9150509250929050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611edb82611e92565b810181811067ffffffffffffffff82111715611efa57611ef9611ea3565b5b80604052505050565b6000611f0d61184e565b9050611f198282611ed2565b919050565b600067ffffffffffffffff821115611f3957611f38611ea3565b5b611f4282611e92565b9050602081019050919050565b82818337600083830152505050565b6000611f71611f6c84611f1e565b611f03565b905082815260208101848484011115611f8d57611f8c611e8d565b5b611f98848285611f4f565b509392505050565b600082601f830112611fb557611fb46118f6565b5b8135611fc5848260208601611f5e565b91505092915050565b60008060408385031215611fe557611fe4611858565b5b6000611ff3858286016118ab565b925050602083013567ffffffffffffffff8111156120145761201361185d565b5b61202085828601611fa0565b9150509250929050565b61203381611d40565b82525050565b600060208201905061204e600083018461202a565b92915050565b6000819050919050565b600061207961207461206f84611862565b612054565b611862565b9050919050565b600061208b8261205e565b9050919050565b600061209d82612080565b9050919050565b6120ad81612092565b82525050565b60006020820190506120c860008301846120a4565b92915050565b600080600080606085870312156120e8576120e7611858565b5b60006120f6878288016118ab565b9450506020612107878288016118e1565b935050604085013567ffffffffffffffff8111156121285761212761185d565b5b61213487828801611905565b925092505092959194509250565b60008083601f840112612158576121576118f6565b5b8235905067ffffffffffffffff811115612175576121746118fb565b5b60208301915083602082028301111561219157612190611900565b5b9250929050565b60008060008060008060008060a0898b0312156121b8576121b7611858565b5b60006121c68b828c016118ab565b98505060206121d78b828c016118ab565b975050604089013567ffffffffffffffff8111156121f8576121f761185d565b5b6122048b828c01612142565b9650965050606089013567ffffffffffffffff8111156122275761222661185d565b5b6122338b828c01612142565b9450945050608089013567ffffffffffffffff8111156122565761225561185d565b5b6122628b828c01611905565b92509250509295985092959890939650565b60008060008060008060a0878903121561229157612290611858565b5b600061229f89828a016118ab565b96505060206122b089828a016118ab565b95505060406122c189828a016118e1565b94505060606122d289828a016118e1565b935050608087013567ffffffffffffffff8111156122f3576122f261185d565b5b6122ff89828a01611905565b92509250509295509295509295565b600082825260208201905092915050565b7f77726f6e67206172726179206c656e6774687300000000000000000000000000600082015250565b600061235560138361230e565b91506123608261231f565b602082019050919050565b6000602082019050818103600083015261238481612348565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600080fd5b600080fd5b600080fd5b600080833560016020038436030381126123e6576123e56123ba565b5b80840192508235915067ffffffffffffffff821115612408576124076123bf565b5b602083019250600182023603831315612424576124236123c4565b5b509250929050565b7f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060008201527f64656c656761746563616c6c0000000000000000000000000000000000000000602082015250565b6000612488602c8361230e565b91506124938261242c565b604082019050919050565b600060208201905081810360008301526124b78161247b565b9050919050565b7f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060008201527f6163746976652070726f78790000000000000000000000000000000000000000602082015250565b600061251a602c8361230e565b9150612525826124be565b604082019050919050565b600060208201905081810360008301526125498161250d565b9050919050565b61255981611e0f565b82525050565b60006040820190506125746000830185612550565b6125816020830184611de5565b9392505050565b7f555550535570677261646561626c653a206d757374206e6f742062652063616c60008201527f6c6564207468726f7567682064656c656761746563616c6c0000000000000000602082015250565b60006125e460388361230e565b91506125ef82612588565b604082019050919050565b60006020820190508181036000830152612613816125d7565b9050919050565b600081519050612629816118ca565b92915050565b60006020828403121561264557612644611858565b5b60006126538482850161261a565b91505092915050565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b60006126b8602e8361230e565b91506126c38261265c565b604082019050919050565b600060208201905081810360008301526126e7816126ab565b9050919050565b6000819050919050565b600060ff82169050919050565b600061272061271b612716846126ee565b612054565b6126f8565b9050919050565b61273081612705565b82525050565b600060208201905061274b6000830184612727565b92915050565b6000819050919050565b600077ffffffffffffffffffffffffffffffffffffffffffffffff82169050919050565b600061279a61279561279084612751565b612054565b61275b565b9050919050565b6127aa8161277f565b82525050565b60006040820190506127c56000830185611cc4565b6127d260208301846127a1565b9392505050565b7f6163636f756e743a206e6f74204f776e6572206f7220456e747279506f696e74600082015250565b600061280f60208361230e565b915061281a826127d9565b602082019050919050565b6000602082019050818103600083015261283e81612802565b9050919050565b600081519050919050565b600081905092915050565b60005b8381101561287957808201518184015260208101905061285e565b60008484015250505050565b600061289082612845565b61289a8185612850565b93506128aa81856020860161285b565b80840191505092915050565b60006128c28284612885565b915081905092915050565b6000815190506128dc81611d4a565b92915050565b6000602082840312156128f8576128f7611858565b5b6000612906848285016128cd565b91505092915050565b7f45524331393637557067726164653a206e657720696d706c656d656e7461746960008201527f6f6e206973206e6f742055555053000000000000000000000000000000000000602082015250565b600061296b602e8361230e565b91506129768261290f565b604082019050919050565b6000602082019050818103600083015261299a8161295e565b9050919050565b7f45524331393637557067726164653a20756e737570706f727465642070726f7860008201527f6961626c65555549440000000000000000000000000000000000000000000000602082015250565b60006129fd60298361230e565b9150612a08826129a1565b604082019050919050565b60006020820190508181036000830152612a2c816129f0565b9050919050565b7f6163636f756e743a206e6f742066726f6d20456e747279506f696e7400000000600082015250565b6000612a69601c8361230e565b9150612a7482612a33565b602082019050919050565b60006020820190508181036000830152612a9881612a5c565b9050919050565b50565b6000612aaf600083612850565b9150612aba82612a9f565b600082019050919050565b6000612ad082612aa2565b9150819050919050565b7f6f6e6c79206f776e657200000000000000000000000000000000000000000000600082015250565b6000612b10600a8361230e565b9150612b1b82612ada565b602082019050919050565b60006020820190508181036000830152612b3f81612b03565b9050919050565b7f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60008201527f6f74206120636f6e747261637400000000000000000000000000000000000000602082015250565b6000612ba2602d8361230e565b9150612bad82612b46565b604082019050919050565b60006020820190508181036000830152612bd181612b95565b9050919050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b6000612c0e601d8361230e565b9150612c1982612bd8565b602082019050919050565b60006020820190508181036000830152612c3d81612c01565b9050919050565b600081519050919050565b6000612c5a82612c44565b612c64818561230e565b9350612c7481856020860161285b565b612c7d81611e92565b840191505092915050565b60006020820190508181036000830152612ca28184612c4f565b90509291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212200bc8e8750d1a151fe472f667cdf64c6f616357c19376e7412550ec0996af935564736f6c63430008180033";

type TestAggregatedAccountFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestAggregatedAccountFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestAggregatedAccountFactory__factory extends ContractFactory {
  constructor(...args: TestAggregatedAccountFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    anEntryPoint: AddressLike,
    anAggregator: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      anEntryPoint,
      anAggregator,
      overrides || {}
    );
  }
  override deploy(
    anEntryPoint: AddressLike,
    anAggregator: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(anEntryPoint, anAggregator, overrides || {}) as Promise<
      TestAggregatedAccountFactory & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): TestAggregatedAccountFactory__factory {
    return super.connect(runner) as TestAggregatedAccountFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestAggregatedAccountFactoryInterface {
    return new Interface(_abi) as TestAggregatedAccountFactoryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): TestAggregatedAccountFactory {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as TestAggregatedAccountFactory;
  }
}
