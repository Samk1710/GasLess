// components/GaslessForwarder.js
"use client"
import { useState } from 'react';
import { ethers } from 'ethers';

const GaslessForwarder = ({ contractAddress, abi }) => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [value, setValue] = useState('');
    const [nonce, setNonce] = useState('');
    const [data, setData] = useState('');
    const [signature, setSignature] = useState('');

    const executeMetaTransaction = async () => {
        if (!window.ethereum) {
            alert('Please install MetaMask!');
            return;
        }

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        const contract = new ethers.Contract(contractAddress, abi, signer);

        try {
            const tx = await contract.executeMetaTransaction(
                from,
                to,
                ethers.utils.parseEther(value),
                nonce,
                data,
                signature
            );
            await tx.wait();
            alert('Transaction successful!');
        } catch (error) {
            console.error(error);
            alert('Transaction failed!');
        }
    };

    return (
        <div>
            <h1>Gasless Forwarder</h1>
            <input
                type="text"
                placeholder="From Address"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
            />
            <input
                type="text"
                placeholder="To Address"
                value={to}
                onChange={(e) => setTo(e.target.value)}
            />
            <input
                type="text"
                placeholder="Value (ETH)"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <input
                type="text"
                placeholder="Nonce"
                value={nonce}
                onChange={(e) => setNonce(e.target.value)}
            />
            <input
                type="text"
                placeholder="Data"
                value={data}
                onChange={(e) => setData(e.target.value)}
            />
            <input
                type="text"
                placeholder="Signature"
                value={signature}
                onChange={(e) => setSignature(e.target.value)}
            />
            <button onClick={executeMetaTransaction}>Execute Meta Transaction</button>
        </div>
    );
};

export default GaslessForwarder;