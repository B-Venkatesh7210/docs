---
sidebar_position: 2
---

# EIP-2771 Approach

> Secure Protocol For Native Meta Transactions.

## Smart Contract change - Personal & EIP712 Signature

1. Inherit [BaseRelayRecipient](https://github.com/opengsn/forwarder/blob/master/contracts/BaseRelayRecipient.sol) contract in your contract.
2. Set trustedForwarder to [Biconomy Forwarder's address](https://docs-gasless.biconomy.io/misc/contract-addresses) while deploying your contract.
3. Replace msg.sender in your contract with _msgSender().

More details about Standard EIP-2771 Approach can be found [here.](https://docs-gasless.biconomy.io/products/enable-gasless-transactions/choose-an-approach-to-enable-gasless/eip-2771)

```solidity
import "@opengsn/gsn/contracts/BaseRelayRecipient.sol";

contract MyContract is BaseRelayRecipient {

    /** 
     * Set the trustedForwarder address either in constructor or 
     * in other init function in your contract
     */ 
    constructor(address _trustedForwarder) public {
        trustedForwarder = _trustedForwarder;
    }
    
    ...
    
    /**
     * OPTIONAL
     * You should add one setTrustedForwarder(address _trustedForwarder)
     * method with onlyOwner modifier so you can change the trusted
     * forwarder address to switch to some other meta transaction protocol
     * if any better protocol comes tomorrow or current one is upgraded.
     */
    
    /** 
     * Override this function.
     * This version is to keep track of BaseRelayRecipient you are using
     * in your contract. 
     */
    function versionRecipient() external view override returns (string memory) {
        return "1";
    }
}
```

## Client Side changes

Now the contracts are updated and deployed, it's time to do the changes in your script.

1. After Registering Your dApp, SmartContact & Contract method on Desired network on Biconomy Dashboard, copy the `<api-key>`, you will need it on the client-side code.
2. Here comes the most important part, you need to pass the normal provider from your connected wallet e.g. `window.ethereum` for Metamask in Biconomy options. Using this provider Biconomy will take care of getting the User Signature.
The main provider object to be passed in Biconomy should be JSON RPC provider initialized with network RPC URL on which your Dapp is deployed.
That's it.
3. So the flow will be, Mexa will take the user signature using the connected wallet and will relay the transaction on your network via Biconomy servers.

## Gasless SDK (EOA) Based Integration

:::tip
In basic terms, you need one provider object for using Gasless SDK (EOA), another for signing meta transactions (to be passed in Biconomy options)
:::

## 1. Importing Gasless SDK (EOA)

!TODO

## 2. Initializing Gasless SDK (EOA)

You can use Gasless SDK (EOA) either with [Web3.js](https://web3js.readthedocs.io/) or [Ethers.js](https://docs.ethers.io/v5/). We'll be making two provider objects, one linked to your dApp's network RPC, and the other to your user's wallet.

!TODO

## 3. Initialize your dApp after Gasless SDK (EOA) initialization

Gasless SDK (EOA) fetches data from Biconomy's servers. Because of this, it's best to initialize your dApp or perform any action after the `biconomy.READY` event occurs.

If there is an error while initializing Gasless SDK (EOA), it's good to catch and log a `biconomy.ERROR` event for better debugging.

In this scenario, you may need to initialise both instances of Gasless SDK (EOA).

```js EIP2771
biconomy.onEvent(biconomy.READY, () => {
  // Initialize your contracts here using biconomy's provider instance
  // Initialize dapp here like getting user accounts etc
}).onEvent(biconomy.ERROR, (error, message) => {
  // Handle error while initializing mexa
});
```

## 4. Sign & Send Meta Transactions

!TODO
