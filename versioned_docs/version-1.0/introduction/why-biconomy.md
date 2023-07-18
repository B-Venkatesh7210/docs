---
sidebar_position: 1
---

# Why Biconomy?

> Enable a simple blockchain transaction experience by leveraging our scalable relayer infrastructure.

Through Biconomy's powerful and easy to use SDK/APIs, you can enable a simple and customized transaction journey so that your end users don't get intimidated by blockchain complexities. This enables **seamless interactions between your application and your end-users.** The simplified web3 experience will ensure that drop-off rates decrease, thereby increasing user adoption.
Our aim is to make web3 products as intuitive and easy to use as legacy web2 products. Simplifying this transaction experience will be key for decentralized projects to achieve any sort of adoption. Thus, by solving key pain points at the crypto transactional layer, we are on a mission to simplify Web 3 experiences that will drive mass adoption.

**The problem we are solving**

Web3 applications today face major roadblocks to user adoption in the form of terrible user onboarding & transaction experience. Almost every interaction with your dApp is a complex transaction for your users. In comparison to intuitive web2 products that people are used to, dApp's can be extremely frustrating.

There are various bottlenecks in the transaction experience:

- **Necessity to pay a gas** fee every time the user uses your application. Netflix does not charge you their AWS fees for every time you watch a video, so why should dApps charge you gas fees for every interaction you do?

- **New Users have a long complicated onboarding process.** Non-crypto savvy new users will have to pass KYC, purchase ETH from an exchange, download a wallet, then connect their wallet before they can go any further, which can take days! No one waits for days to try out an application.

- **Proficiency in complex blockchain technicalities is required** such as using MetaMask, signing transactions, understanding gas etc. If the project is on layer 2, they need to know what that really means and be able to change RPC manually.

- **Volatile and high gas fees** further dampen the user experience on your dApp.

- **Pending and stuck transactions** can force your users to wait for minutes and even hours before they can carry on interacting with your application. And sometimes the transaction fails altogether.

**Solving these problems in-house is resource intensive**

As such, for developers wanting to solve the above they’d have to build an internal relayer infrastructure from scratch. This infrastructure would involve active management and maintenance including tasks such as:

- Monitoring gas prices at all times based on the congestion of the network and the mempool
- Keeping track of nonces and managing the transaction queue. This is important because if one transaction is stuck then the next transactions cannot be sent until the preceding one fails or goes through
- Managing long pending transactions and automating the process of re-publishing low-fee transactions with a higher gas when network conditions change.
- Ensuring relayers can scale as transactions increase and enable the auto funding of relayers.
- Addressing relayers private key management and associated security.

Learn how we simplify transactions in the next section.
