// src/components/MetaMaskLogin.js
import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';

const MetaMaskLogin = () => {
  const [account, setAccount] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    checkMetaMaskAvailability();
  }, []);

  const checkMetaMaskAvailability = async () => {
    const provider = await detectEthereumProvider();

    if (provider) {
      // MetaMask is installed, so you can proceed with connecting to it.
      // Note: MetaMask injects the 'window.ethereum' object into the browser.
      // Let's set up the Web3 instance.
      const web3 = new Web3(window.ethereum);
      try {
        // Request account access if needed
        await window.ethereum.enable();
        // Get the current account
        const accounts = await web3.eth.getAccounts();
        if (accounts.length > 0) {
          setAccount(accounts[0]);
        }
      } catch (error) {
        console.error('Access to MetaMask account denied:', error);
      }
    } else {
      console.log('MetaMask is not installed in this browser.');
    }
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccount(accounts[0]);
    } catch (error) {
      console.error('Error while logging in:', error);
    } finally {
      setLoading(false);
    }
  };
 


  return (
    <div>
      {account ? (
        <div>
          <p>Logged-in Address: {account}</p>
          
          <button onClick={handleLogin} disabled={loading}>
            {loading ? 'Connecting...' : 'Login'}
          </button>
        </div>
      ) : (
        <button onClick={handleLogin} disabled={loading}>
          {loading ? 'Connecting...' : 'Login'}
        </button>
      )}
    </div>
  );
};

export default MetaMaskLogin;
