import { parseUnits, Wallet, getDefaultProvider, JsonRpcProvider } from 'ethers';


async function signTransaction() {

  // Create a Wallet
  const privateKey = '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80';
  const url = 'http://127.0.0.1:8545'
  const provider = new JsonRpcProvider(url);
  const signer = new Wallet(privateKey, provider);

  // Recipient address and amount to send (in Wei)
  const toAddress = '0x70997970C51812dc3A010C7d01b50e0d17dc79C8';

  const tx = await signer.sendTransaction({
        to: toAddress,
        value: parseUnits('0.666', 'ether'),
      });
      console.log(tx);
}

// Call the function to sign the transaction
signTransaction();

