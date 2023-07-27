---
sidebar_label: 'Webhook API'
sidebar_position: 3

---

# Webhook APIs


Use these APIs for authorizing sponsorship of transactions via webhooks

### Auth Token

To obtain an authToken required in the header, please reach out to our support team.



#### 1. Get list of Registered webhooks: 

> ***GET Request***

URL: https://paymaster-dashboard-backend.prod.biconomy.io/api/v1/public/sdk/webhook/users

Parameters

Header

| Param | Type | Description | Required |
| --------------- | --------------- | --------------- | --------------- |
| authToken | string | Token unique to every user account | Required |
| apiKey | string | API Key Associated with dApp | Required |


Responses

> ***200 OK***


```javascript
{
    "statusCode": 200,
    "message": "Webhook list fetched",
    "data": [
        {
            "webhookId": "1704bab9-2173-4416-b897-71d41942014f",
            "webhookUrl": "https://twitter.com/home",
            "requestType": "POST"
        }
    ]
}
```

> ***401 Unauthorized***


```javascript
{
    "statusCode": 401,
    "message": "Auth token and API key is required in the headers"
}
```

#### 2. Register Webhook: 

> ***POST Request***

URL: https://paymaster-dashboard-backend.prod.biconomy.io/api/v1/public/sdk/webhook/users

Parameters

Header

| Param | Type | Description | Required |
| --------------- | --------------- | --------------- | --------------- |
| authToken | string | Token unique to every user account | Required |

Body

| Param | Type | Description | Required |
| --------------- | --------------- | --------------- | --------------- |
| webhookUrl | string | Webhook url to be called | Required |
| requestType | string | "GET" or "POST"| Required |

> ***200 OK***


```javascript
{
    "statusCode": 200,
    "message": "Webhook created",
    "data": {
        "webhookId": "1704bab9-2173-4416-b897-71d41942014f",
        "webhookUrl": "https://twitter.com/home",
        "requestType": "POST"
    }
}
```



#### 3. Update Webhook status:

> ***PATCH Request***

URL: https://paymaster-dashboard-backend.prod.biconomy.io/api/v1/public/sdk/webhook/users
Parameters

Header

| Param | Type | Description | Required |
| --------------- | --------------- | --------------- | --------------- |
| authToken | string | Token unique to every user account | Required |
| apiKey | string | API Key Associated with dApp | Required |

Body

| Param | Type | Description | Required |
| --------------- | --------------- | --------------- | --------------- |
| webhookId | string | Webhook ID received when first created | Required |
| active | boolean | true or false | Required |


Responses

> ***200 OK***


```javascript
{
    "statusCode": 200,
    "message": "Webhook updated"
}
```

> ***400 Bad Request***

Active must be a boolean value

```javascript
{
    "statusCode": 400,
    "message": "active must be a boolean value"
}
```

> ***401 Unauthorized***


```javascript
{
    "statusCode": 401,
    "message": "Auth token and API key is required in the headers"
}
```
> ***404 Not Found***

```javascript
{
    "statusCode": 400,
    "message": "Smart contract not found"
}
```


#### 4. Delete Webhook:

> ***Delete Request***

URL: https://paymaster-dashboard-backend.prod.biconomy.io/api/v1/public/sdk/webhook/users

Parameters

Header

| Param | Type | Description | Required |
| --------------- | --------------- | --------------- | --------------- |
| authToken | string | Token unique to every user account | Required |
| apiKey | string | API Key Associated with dApp | Required |

Body

| Param | Type | Description | Required |
| --------------- | --------------- | --------------- | --------------- |
| webhookId | string | Webhook ID received when first created | Required |

> ***200 OK***


```javascript
{
    "statusCode": 200,
    "message": "Webhook deleted"
}
```

> ***400 Bad Request***

WebhookId must be a string

```javascript
{
    "statusCode": 400,
    "message": "webhookId must be a string"
}
```

> ***401 Unauthorized***


```javascript
{
    "statusCode": 401,
    "message": "Auth token and API key is required in the headers"
}
```

> ***404 Not Found***

```javascript
{
    "statusCode": 404,
    "message": "Webhook not found"
}
```

Using Webhooks with the SDK:

When using functions sendTransaction and sendTransactionBatch you can pass in webhookData in the paymasterServiceData object. The webhookData object gets directly passed to the registered webhook.

When building a `userOperation` and sponsoring with paymaster you can optionally send webhook data to the `paymasterServiceData` 

```javascript
let paymasterServiceData: SponsorUserOperationDto = {
    mode: PaymasterMode.SPONSORED,
    calculateGasLimits: true,
    webhookData: {
      num: 2
    },
  };
```

