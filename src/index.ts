import { ethers } from 'ethers';
import { publicClient } from './client'
 
const block = await publicClient.getBlockNumber();
console.log(block);

export async function signTransaction() {

  const privateKey = process.env.PRIVATE_KEY;
console.log(privateKey)
  const rpcUrl = 'http://127.0.0.1:8545';
  const signer = new ethers.Wallet(privateKey, new ethers.JsonRpcProvider(rpcUrl));
  const tx = await signer.sendTransaction({
        to: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
        value: ethers.parseUnits('1', 'ether'),
      });
  console.log(tx);
}

signTransaction();

