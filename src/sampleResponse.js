// 20191208154009
// https://localhost:8081/mschain-shopping-cart/catalogue/item

let res = {
    "message": "Request Successfully completed",
    "data": {
      "data": [
        {
          "itemID": "pd123",
          "itemName": "Blue-velvet-dress",
          "quantity": 100,
          "price": 1850.0
        },
        {
          "itemID": "b1",
          "itemName": "Blue-office-dress",
          "quantity": 20,
          "price": 2000.0
        },
        {
          "itemID": "t1",
          "itemName": "Black-linen-trouser",
          "quantity": 20,
          "price": 2500.0
        }
      ],
      "states": {
        "sendRequestToServer": {
          "sequenceID": 1,
          "stateDescription": "SEND_REQUEST_TO_SERVER",
          "stateMessage": "SUCCESS"
        },
        "establishTLSConnection": {
          "sequenceID": 2,
          "stateDescription": "ESTABLISH_TLS_CONNECTION",
          "stateMessage": "SUCCESS"
        },
        "receivedServerResponse": {
          "sequenceID": 3,
          "stateDescription": "RECEIVED_SEVER_RESPONSE",
          "stateMessage": "SUCCESS"
        },
        "sendCertToMSchain": {
          "sequenceID": 4,
          "stateDescription": "SEND_CERT_TO_MSCHAIN",
          "stateMessage": "SUCCESS"
        },
        "receivedMSChainResponse": {
          "sequenceID": 5,
          "stateDescription": "RECEIVED_MSCHAIN_RESPONSE",
          "stateMessage": "SUCCESS"
        },
        "validateServerCertificate": {
          "sequenceID": 6,
          "stateDescription": " VALIDATE_SERVER_CERTIFICATE",
          "stateMessage": "SUCCESS"
        }
      }
    },
    "status": 200
  }