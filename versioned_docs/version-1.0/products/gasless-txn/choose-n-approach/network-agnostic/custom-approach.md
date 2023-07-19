---
sidebar_position: 3
---

# Custom Approach

Read more about Custom Approach [here](https://docs-gasless.biconomy.io/products/enable-gasless-transactions/choose-an-approach-to-enable-gasless/custom-implementation).

## Smart Contract changes - Personal Signature

1. Inherit [BasicMetaTransaction](https://github.com/bcnmy/metatx-standard/blob/basic-signature-metatx/src/contracts/BasicMetaTransaction.sol) contract in your contract
2. Replace `msg.sender` in your contract with `msgSender()`

## Smart Contract changes - EIP-712 Signature

1. Inherit [EIP712MetaTransaction](https://github.com/bcnmy/metatx-standard/blob/master/src/contracts/EIP712MetaTransaction.sol) contract in your contract
2. Replace `msg.sender` in your contract with `msgSender()`
3. Deploy contract on the desired network.

## Client Side changes

Now the contracts are updated and deployed, it's time to do the changes on your client-side.

1. After Registering Your dApp, SmartContact & Contract method on Desired network on Biconomy Dashboard, copy the `<api-key>`, you will need it on the client-side code.
2. It is **important** that you need to make 2 providers on your client-side. **One** normal provider from your connected wallet eg `window.ethereum` for Metamask, to take the User Signature on the wallet pop-up window.
**Second** provider object to be used with Biconomy to send the transaction. This second provider (network provider) should be a provider initialised with network RPC URL.
That's it.
3. In this custom approach instead of calling you contract methods directly, you will need to call executeMetaTransaction() method and pass your contract method in `functionSignature` along with other params.
4. So the flow will be like this, to take the user signature you need to use the wallet provider. Once you get the user signature, pass that signature in the `executeMetaTransaction()` along with `functionSignature` and other params and call `executeMetaTransaction()` method using the second provider which was passed to Biconomy object.

## SDK Integration

:::tip
In basic terms, you need one provider object for sending meta transactions using Gasless SDK (EOA), another for signing meta transaction parameters.
:::

### 1. Importing Gasless SDK (EOA)
!TODO

### 2. Initializing SDK

You can use Gasless SDK (EOA) either with [Web3.js](https://web3js.readthedocs.io/) or [Ethers.js](https://docs.ethers.io/v5/). We'll be making two provider objects, one linked to your dApp's network RPC, and the other to your user's wallet.

!TODO

### 3. Initialize your dApp after Gasless SDK (EOA) initialization

Gasless SDK (EOA) fetches data from Biconomy's servers. Because of this, it's best to initialize your dApp or perform any action after the biconomy.READY event occurs.

If there is an error while initializing Gasless SDK (EOA), it's good to catch and log a biconomy.ERROR event for better debugging.

```js Mexa Initialization
biconomy.onEvent(biconomy.READY, () => {
  // Initialize your contracts here using biconomy's provider instance
  // Initialize dapp here like getting user accounts etc
}).onEvent(biconomy.ERROR, (error, message) => {
  // Handle error while initializing mexa
});
```

### 4. Sign & Send Meta Transactions

!TODO
