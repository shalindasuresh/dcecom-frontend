import React, { useState } from 'react';
import Web3 from 'web3';

const BuyButton = () => {
  const [message, setMessage] = useState('');
  const [wallet_balance, setBalance] = useState('');

  const handleBuyClick = async () => {
 const web3 = new Web3(window.ethereum);
 const accounts = await web3.eth.getAccounts()
 const address = accounts[0]
console.log(address)
    // Check if Web3 is available
    if (window.ethereum) {
      
      web3.eth.getBalance(address)
  .then(balance => {
    setBalance(web3.utils.fromWei(balance, 'ether'),'ETH')
    // console.log('Account balance:', web3.utils.fromWei(balance, 'ether'), 'ETH')
  })
  .catch(error => {
    console.error('Error fetching balance:', error);
  });

     
      try {
        // Request user's permission to access their accounts
        await window.ethereum.enable();

        // Define the contract ABI and contract address
        const contractABI = [
          {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "bool",
                "name": "approvalStatus",
                "type": "bool"
              }
            ],
            "name": "PurchaseApproved",
            "type": "event"
          },
          {
            "inputs": [
              {
                "internalType": "uint32",
                "name": "_productID",
                "type": "uint32"
              },
              {
                "internalType": "string",
                "name": "_productName",
                "type": "string"
              }
            ],
            "name": "addProduct",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint32",
                "name": "_productID",
                "type": "uint32"
              }
            ],
            "name": "approvePurchase",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint32",
                "name": "_productID",
                "type": "uint32"
              }
            ],
            "name": "buyProduct",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "buyer",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "declinePurchase",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint32",
                "name": "_productID",
                "type": "uint32"
              }
            ],
            "name": "getProductPrice",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "getProducts",
            "outputs": [
              {
                "components": [
                  {
                    "internalType": "string",
                    "name": "productName",
                    "type": "string"
                  },
                  {
                    "internalType": "uint256",
                    "name": "productPrice",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint64",
                    "name": "productQty",
                    "type": "uint64"
                  }
                ],
                "internalType": "struct Product[]",
                "name": "",
                "type": "tuple[]"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint32",
                "name": "productID",
                "type": "uint32"
              }
            ],
            "name": "products",
            "outputs": [
              {
                "internalType": "string",
                "name": "productName",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "productPrice",
                "type": "uint256"
              },
              {
                "internalType": "uint64",
                "name": "productQty",
                "type": "uint64"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint32",
                "name": "_productID",
                "type": "uint32"
              },
              {
                "internalType": "uint256",
                "name": "_productPrice",
                "type": "uint256"
              }
            ],
            "name": "setProductPrice",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint32",
                "name": "_productID",
                "type": "uint32"
              },
              {
                "internalType": "uint64",
                "name": "_productQty",
                "type": "uint64"
              }
            ],
            "name": "setProductQty",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          }
        ];


        // Create a contract instance
        const contractAddress='0xDBF214aE78Ed744DcB268e8E9d66e275950351A0'
        const contract = new web3.eth.Contract(contractABI, contractAddress);
       
        
        // Call the "buy" function on the contract
        await contract.methods.buyProduct('001').send({ from: address });

        // Update the message state to show a success message
        setMessage('Purchase successful!');
      } catch (error) {
        // Handle errors (e.g., user denied access, transaction failed)
        console.error(error);
        setMessage('Error occurred during purchase.');
      }
    } else {
      setMessage('Web3 not available. Please install MetaMask or use an Ethereum-enabled browser.');
    }
  };

  return (
    <div>
      <p>{wallet_balance}</p>
      <button className='buy-btn' onClick={handleBuyClick}>Buy Item</button>
      <p>{message}</p>
      
    </div>
  );
};

export default BuyButton;