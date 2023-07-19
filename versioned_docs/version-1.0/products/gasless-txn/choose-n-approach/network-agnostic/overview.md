---
sidebar_position: 1
---

# Overview

> Do meta transactions on Layer 2 without making your users change their RPC on Metamask or other wallets.

:::info
Network Agnostic Transactions are required if using SDK version 2.0.35 or earlier
:::

## No more changing RPC URLs !!

Layer 2 networks are great for building dApps because they are cheap to use and super fast! However, they can create a UX nightmare, as users will need to [change their RPC](https://metamask.zendesk.com/hc/en-us/articles/360043227612-How-to-add-a-custom-Network-RPC-and-or-Block-Explorer) to access the network. This may not even be possible for users of mobile wallets - where options are intentionally limited. Moreover, users would need to know what's layer 2, why is it important, what's an exit etc. Users want things to be quick and easy so that all these complexities are handled under the hood.

**In Network Agnostic Transactions, all the user needs to do is just sign a message irrespective of selected RPC/network in the wallet and Biconomy Relayers will send the transaction to the desired network.** *Amazing!! right?*

Now let's understand how to achieve this in your dApp. There are multiple ways to enable network-agnostic transactions in your dApp. Let's discuss them one by one.
