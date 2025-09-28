import React, { useState } from "react";
import { ethers } from "ethers";
import { WebUploader } from "@irys/web-upload";
import { WebEthereum } from "@irys/web-upload-ethereum";
import { EthersV6Adapter } from "@irys/web-upload-ethereum-ethers-v6";
import { Link } from "react-router-dom";
import Irys from '../irys.jpg';

const Header = () => {

      const [walletStatus, setWalletStatus] = useState("Not connected");
  const [irysStatus, setIrysStatus] = useState("Not connected");

   const connectWallet = async () => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      setWalletStatus(`Connected: ${address}`);
    } catch (error) {
      console.error("Error connecting to wallet:", error);
      setWalletStatus("Error connecting to wallet");
    }
  };


   const connectIrys = async () => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const irysUploader = await WebUploader(WebEthereum).withAdapter(EthersV6Adapter(provider));
      setIrysStatus(`Connected to Irys: ${irysUploader.address}`);
    } catch (error) {
      console.error("Error connecting to Irys:", error);
      setIrysStatus("Error connecting to Irys");
    }
  };


  const connect = async () => {
    
    connectWallet();  
    connectIrys();


  }




  return (
      <header>
      <div className="leftH">
        <img src={Irys} alt="logo" className="logo" />
        <a href="/" className="link">
          <div className="headerItem">Swap</div>
        </a>
        <a href="/stake" className="link">
          <div className="headerItem">Stake</div>
        </a>
      </div>
      <div className="rightH">
        <div className="headerItem">
          <img src={Irys} alt="eth" className="eth" />
          {/* <span className="connectButton" onClick={connectIrys}>Irys</span>
          <p>{irysStatus}</p> */}
        </div>
        <div className="connectButton" onClick={connect}>
          {walletStatus !='Not connected'  ? (walletStatus.slice(10,15) +"..." +walletStatus.slice(48)) : "Connect"}
         
        
        </div>
      </div>
    </header>
  )
}

export default Header
