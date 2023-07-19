---
sidebar_position: 1
---

# Overview

> Implement meta transactions your own way.

There can be many ways to enable gasless transactions in your dApp. **For example**, DAI token has enabled gasless transactions by introducing a [permit function](https://eips.ethereum.org/EIPS/eip-2612) that allows a user to give allowance to other users by just **providing EIP-712 style signature** from their account and **anyone can submit that permit transaction** and pay the gas fees. The permit function implementation is DAI's way of enabling gasless transactions.

We have written some **standard contracts [(Audited)](https://docs-gasless.biconomy.io/misc/smart-contracts-audit)** that can be used to enable gasless transaction functionality in your smart contract itself. So you are able to interact with your smart contracts directly in a gasless way with **no other smart contracts involved.**

:::note
You still need a relayer infrastructure like Biconomy to relay those gasless transactions.
:::

## Gasless Transactions Using Custom Approach

In order to send gasless transactions in your dApp via Biconomy using custom meta transaction implementation, the following two integration steps will be required

1. Smart Contract Changes
2. Client Side Changes

### Smart Contract Changes

In order to allow your Smart Contract to accept meta transactions, it needs to get rid of the dependency on `msg.sender` and `msg.value`. The simple way to enable this is to inherit **one of the below mentioned** smart contracts based on your signature requirements:

1. ****[EIP712MetaTransaction.sol**](https://github.com/bcnmy/metatx-standard/blob/master/src/contracts/EIP712MetaTransaction.sol)** (for EIP-712 signatures)
2. **[BasicMetaTransaction.sol](https://github.com/bcnmy/metatx-standard/blob/basic-signature-metatx/src/contracts/BasicMetaTransaction.sol)** (for personal sign)

After inheriting **either one of the above** smart contracts, you need to use `msgSender()` method wherever you use `msg.sender`
That's it!! You have enabled native meta transaction support in your smart contract.

That's it!! You have enabled native meta transaction support in your smart contract.

## Client Side Changes

The next step is Biconomy's integration on the client side. This can either be done via Gasless SDK (EOA) integration or API integration. For both cases, first, you need to register your dApp on [Biconomy Dashboard](https://dashboard.biconomy.io/) and get your API Key.

Check out the next section on [how to register your dApp on the dashboard.](https://app.gitbook.com/o/-Lpby0ZArV7g0vPAbzRB/s/-LpEt-9ieHftQAHlxL9W/~/changes/gkPCjNPKn2Xia81iArH8/products/enable-gasless-transactions/choose-an-approach-to-enable-gasless/custom-implementation/dashboard)

### Use msgSender(), not msg.sender

EIP712MetaTransaction base contract is responsible for signature verification and replay protection and calls the generic method `executeMetaTransaction` method on itself by appending the user address at the end of call data. The `msgSender()` method in your smart contract (inherited by [EIP712MetaTransaction](https://github.com/bcnmy/metatx-standard/blob/master/src/contracts/EIP712MetaTransaction.sol)) does the rest by returning the correct address for any context. **Use `msgSender()` wherever you use msg.sender.**

## Why and when should you use this approach?

When the method you need to make gasless already has user signature as parameter for example `permit(...r,s,v)`, you can register the contract as Custom and directly register method name itself. Another use case is gasless token approvals on certain chains like Polygon as these contracts already inherit from EIP712MetaTransaction specs and have `executeMetaTransaction` method available. Also, custom approach can allow you to define your custom structured signatures.

Example in case of DAI, you can refer to the permit() function in the [contract code for DAI.](https://etherscan.io/address/0x6b175474e89094c44da98b954eedeac495271d0f#code)
