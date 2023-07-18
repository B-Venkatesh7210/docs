---
sidebar_position: 1
---

# Overview

> Incentive users, increase engagement & drive adoption using Gasless Transactions in your dApp.

Possessing chain native tokens is critical to users who wish to interact with a dApp. Anyone who sends an Ethereum transaction needs to have Ether to pay for its gas fees. This forces new users to purchase these crypto tokens before they can start using a dApp. This is a major hurdle in user onboarding. Gasless transactions can be enabled for your dApp using Biconomy's Gasless infrastructure. Biconomy uses meta transactions to enable gasless transactions.

## How do Gasless Transactions Work?

Sending a meta-transaction is similar to sending a standard transaction (from, to, value ... and signature) except that instead of sending it directly to the Blockchain, it sends the meta-transaction to a third party who will take care of the gas.

### How does a relayer facilitate the implementation of gasless transactions?

Meta Transactions are transactions whose data is created and signed by one person and executed by another trusted party(Relayer) who pays the gas fees. Relayers are responsible for signing valid transactions with this information and sending them to the network, paying for the gas cost. A base contract preserves the identity of the user that originally requested the transaction. In this way, users can interact directly with smart contracts without needing to have a wallet or own tokens. In order to support meta transactions in your application, you need the Biconomy Relayers.

:::info
Biconomy will be soon open sourcing their relayers and will eventually be decentralized. Anyone will be able to spin up an instance of the Biconomy relayer. You will also be able to choose which relayer endpoint to connect to. These open source relayers will also be able to execute cross chain transactions and act as execution layer in [Hyphen](https://hyphen.biconomy.io/bridge) bridge.
:::

### [EIP2771](https://eips.ethereum.org/EIPS/eip-2771)

The  EIP-2771 approach is a standardised way of sending Gasless transactions. The first step is to make the contract meta transaction compliant. Meta transaction aware recipient contracts rely on a trusted forwarder contract for their security. This contract verifies the signature and nonce of the original sender. Biconomy provides a default implementation of a secure Trusted Forwarder which verifies the signature and forwards the call to the recipient smart contract.

## How do we choose the optimum gas price to send the transaction ?

We select the 'medium' speed gas price to send the transactions. If the transaction fails, then we bump up the gas price by 50% and attempt a retry. This process goes on until the transaction is successful or a hard cap set by the dApp on gas limits is reached. This mechanism ensures that dApps do not overpay for gas. Our results show that we provide aa average savings of 20%-30% in gas costs for our partners.

We use the following trusted oracles for getting gas prices:

- [ETH Gas Station](https://ethgasstation.info/)
- [Etherscan](https://etherscan.io/)
- [Infura](https://infura.io/)
- [Polygon Gas Station](https://polygonscan.com/gastracker)
