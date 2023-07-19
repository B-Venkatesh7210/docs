---
sidebar_position: 3
---

# Using API

> Use our APIs to easily implement meta transactions!

:::note
Before using this API, make sure you have Trusted Forwarder support in your smart contracts i.e., you have removed the dependency on `msg.sender` property from your smart contracts and trusted forwarder is added.
:::

!TODO

### Example Curl Request

```node
curl 
--request POST 'https://api.biconomy.io/api/v2/meta-tx/native'  
--header 'x-api-key: <api_key_from_dashboard>'  
--header 'Content-Type: application/json'  
--data-raw '{ 
"from": "<user_public_address>",
"apiId": "<api_id_from_dashboard>", 
"params": [<param1>,<param2>,...... ],
"to": "<recipient_contract_address>",
"gasLimit":"0xF4240",
"signatureType":"EIP712Sign"
}'
```

:::caution
**If the signature type is [EIP712](https://eips.ethereum.org/EIPS/eip-712), params are [request, domainSeperator, signature]**
`params = [request, domainSeparator, sig];`
**If signature type is personal sign, (assumed default if signatureType parameter is omitted in API request body) params are [request, signature].**
`params = [request, sig];`
:::

Biconomy has **[helpers](https://github.com/bcnmy/biconomy-helpers)** available to build above mentioned parameters from your dapp transaction.

For EIP2771, below is an example code on how to use Biconomy helpers JS to build request, domain separator and data to sign for each signature type and then send API request to the Biconomy servers where our relayer infrastructure will process your transaction.

### Sample code

!TODO

Great! Once your parameters are built you are ready to make the API call to send gasless transactions!

```js
const sendTransaction = async ({userAddress, request, sig, domainSeparator, signatureType}) => {
        if (web3 && contract) {
          let params;
          if (domainSeparator) {
            params = [request, domainSeparator, sig];
          } else {
            params = [request, sig];
          }
          try {
            fetch(`https://api.biconomy.io/api/v2/meta-tx/native`, {
              method: "POST",
              headers: {
                "x-api-key": <YOUR_DAPP_API_KEY>,
                "Content-Type": "application/json;charset=utf-8",
              },
              body: JSON.stringify({
                to: <CONTRACT_ADDRESS>,
                apiId: <METHOD_API_ID>,
                params: params,
                from: userAddress,
                signatureType: signatureType
              }),
            })
              .then((response) => response.json())
              .then(async function (result) {
                console.log(result);
                showInfoMessage(
                  `Transaction sent by relayer with hash ${result.txHash}`
                );

                let receipt = await getTransactionReceiptMined(
                  result.txHash,
                  2000
                );
                setTransactionHash(result.txHash);
                showSuccessMessage("Transaction confirmed on chain");
                getQuoteFromNetwork();
              })
              .catch(function (error) {
                console.log(error);
              });
          } catch (error) {
            console.log(error);
          }
        }
    };
    
  ////helper///

  //for web3  
  const getTransactionReceiptMined = (txHash, interval) => {
        const self = this;
        const transactionReceiptAsync = async function(resolve, reject) {
          var receipt = await web3.eth.getTransactionReceipt(txHash);
          if (receipt == null) {
              setTimeout(
                  () => transactionReceiptAsync(resolve, reject),
                  interval ? interval : 500);
          } else {
              resolve(receipt);
          }
        };
    
        if (typeof txHash === "string") {
            return new Promise(transactionReceiptAsync);
        } else {
            throw new Error("Invalid Type: " + txHash);
        }
      };
```

### Congratulations 👏

You're now ready to use the trusted forwarder approach and enable gasless transactions in your dApp using SDK and/or APIs. Check out other implementations and in-depth technical details in the following sections.
