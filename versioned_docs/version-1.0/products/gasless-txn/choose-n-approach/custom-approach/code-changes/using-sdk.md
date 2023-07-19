---
sidebar_position: 2
---

# Using SDK

> Gasless SDK (EOA) enables meta transactions or gasless transactions in your dApp out of the box.

Biconomy's SDK is a typescript based implementation that can be easily integrated into your dApp. The SDK can be used on client side code running in a browser or a javascript/typescript based dApp running on a backend server.

It works alongside your existing Web3/Ethers library by acting as a Web3/Ether provider that submits meta transactions to our relayer infrastructure - instead of directly to the network.

!TODO

<details>
    <summary>
        Get your API Key first
    </summary>
    In order to integrate SDK, you will need an API Key. Check out [how to get API key](https://docs-gasless.biconomy.io/guides/biconomy-dashboard#get-your-api-key) from the dashboard.
</details>

This section is divided into Frontend and Backend integration of SDK. You can choose either of them based on your requirement.

## SDK Frontend Integration

### 1. Installing and importing SDK 

Biconomy Gasless SDK can be installed either via npm or yarn repository.

```node
npm install @biconomy/mexa
yarn add @biconomy/mexa
```

You can use Gasless either with [Web3.js](https://web3js.readthedocs.io/) or [Ethers.js](https://docs.ethers.io/v5/) library. It works with both libraries.

!TODO 

:::info
If using SDK version 2.0.35 or earlier:
```js
import { Biconomy } from "@biconomy/mexa";
const biconomyWithWeb3 = new Biconomy(<web3 provider>,{apiKey: <API Key>, debug: true});
web3 = new Web3(biconomyWithWeb3);

const biconomyWithEthers = new Biconomy(<ethers provider>,{apiKey: <API Key>, debug: true});
let ethersProvider = new ethers.providers.Web3Provider(biconomyWithEthers);
```
:::

### 2. Initialize your dApp after SDK initialization

You need to call the init method. This method makes calls to the Biconomy backend to fetch data that you registered on the dashbaord.

```js
await biconomy.init();
```

Done! Interact with Web3/Ethers the same way you have been doing before!

Now, whenever a contract call is made [(provided that it is registered in the Dashboard)](https://docs-gasless.biconomy.io/products/enable-gasless-transactions/choose-an-approach-to-enable-gasless/eip-2771/dashboard)  Gasless SDK will ask for the user's signature and handle the transaction - rather than sending a signed transaction directly to the blockchain from the user's wallet. The message the user will be prompted to sign will be in an eth_personalsign format by default.

:::info
If you wish to get [EIP712](https://eips.ethereum.org/EIPS/eip-712) type structured message signature just include signatureType:”EIP712_SIGN” in your transaction parameters and SDK will take care of taking the signature and execution through the trusted forwarder.
:::

Refer to this [link](https://docs-gasless.biconomy.io/products/enable-gasless-transactions/gasless-sdk-eoa-3) for extensive code examples for you to interact with the SDK. 

Congratulations 👏  

You have now enabled meta transactions in your dApp.

## SDK Backend Integration

:::info
For using the SDK in the backend, use SDK version 2.0.35 or earlier
:::

Here, we provide more freedom to the developer in case you want to use Biconomy in the project running at the backend where a raw transaction is signed by the user's private key.

### Integration Steps

1. Initialize the Gasless SDK in the same way as mentioned [above](https://docs-gasless.biconomy.io/products/enable-gasless-transactions/choose-an-approach-to-enable-gasless/eip-2771/2.-code-changes/sdk#2.-initializing-sdk).
2. There is no change in the way you send the transactions from the backend except adding the extra information about the signature type.

:::info
The developer can choose to take the user’s signatures with any signature type they wish to.
:::

## Passing extra information using web3

`web3.eth.sendSignedTransaction(data, callback)` will be used here but with  parameters mentioned below

### Parameters

`data` A JSON object containing the user's signature, the raw transaction, forward request object and [signature type.](https://docs-gasless.biconomy.io/tutorials/native-meta-transactions/enable-native-meta-transactions/client-side/generate-signatures) Data to be signed can be generated using the method `getForwardRequestAndMessageToSign(rawTransaction)`

`callback` Optional callback, returns an error object as first parameter and the result as second.

### Returns

`PromiEvent` A [promise combined event emitter.](https://web3js.readthedocs.io/en/v1.2.6/callbacks-promises-events.html#promievent) Will be resolved when the transaction receipt is available

## Passing extra information using ethers

`provider.send("eth_sendRawTransaction", [data], callback)` will be used here but with  parameters mentioned below

### Parameters

`data` A JSON object containing the user's signature, the raw transaction, forward request object and [signature type.](https://docs-gasless.biconomy.io/tutorials/native-meta-transactions/enable-native-meta-transactions/client-side/generate-signatures) Data to be signed can be generated using the method `getForwardRequestAndMessageToSign(rawTransaction)`

`callback` Optional callback, returns an error object as first parameter and the result as second.

### Returns

`Promise` A promise which will not resolve until the transaction hash is mined. Promise resolves with transaction hash. One can use the event emitter method of ethers provider to get the mined transaction receipts. 

:::info
Based on your Meta Transaction Type on the recipient contract (registered as Trusted Forwarder) Mexa will prepare the data to sign in the EIP712 format as well as personal signature format (default)
:::

### Example Code

!TODO

:::info
If you don't wish to use the Gasless SDK (EOA), gasless meta transactions can be directly sent using [Biconomy's APIs](https://docs-gasless.biconomy.io/products/enable-gasless-transactions/choose-an-approach-to-enable-gasless/eip-2771/2.-code-changes/api) also. Check next section for implementation steps.
:::
