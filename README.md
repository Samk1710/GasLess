# Gasless Transactions DApp

This project implements a forwarder contract that enables users to send ERC-20 and ERC-721 transactions without holding ETH. The application includes a Solidity smart contract and a user-friendly Next.js interface to facilitate gasless transfers.

---

## Features

- **Forwarder Smart Contract**: Accepts user transactions and forwards them on-chain.
- **Gasless Transfers**: Allows users to send transactions without requiring ETH.
- **Simple Interface**: User-friendly UI for entering transaction details and initiating transfers.
- **Security Checks**: Includes comprehensive security measures for safe usage.
- **Audited Code**: Solidity Shield audit score ensured for the smart contract.

---

## Requirements

- Node.js (v16 or later)
- MetaMask or another Web3-enabled browser
- Avalanche Fuji Testnet setup for contract deployment

---

## Setup Instructions

1. **Clone the Repository**  
   ```bash
 2.   git clone <repository-url>
   cd <repository-folder>
   3 set up .env SEPOLIA_RPC_URL=https://base-sepolia.g.alchemy.com/v2/_JSNJRKYSq4e1X_Yaik_3buI_uDNyAyX
PRIVATE_KEY=<privatekey>
BASE_API_KEY=MA55G9IVCP9URJG9B1J69JGF5WN1MP9M9T
3. npm run dev
