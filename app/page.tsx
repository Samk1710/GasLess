// pages/index.js
import Head from 'next/head';
import GaslessForwarder from './components/GaslessForwarder.jsx';

const contractAddress = 'YOUR_CONTRACT_ADDRESS'; // Replace with your contract address
const abi = [
    // Add your contract ABI here
    "function executeMetaTransaction(address from, address to, uint256 value, uint256 nonce, bytes calldata data, bytes calldata signature) external payable",
    "event MetaTransactionExecuted(address indexed user, address indexed relayer, bytes data)"
];

export default function Home() {
    return (
        <div>
            <Head>
                <title>Gasless Forwarder UI</title>
                <meta name="description" content="Gasless Forwarder UI" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <GaslessForwarder contractAddress={contractAddress} abi={abi} />
            </main>
        </div>
    );
}