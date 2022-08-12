import { useEffect, useState } from "react";
import './minter.css';
import Navbar from '../navbar/nav.jsx'
import { connectWallet } from "../../utils/interact";
const Minter = (props) => {

  //State variables
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setURL] = useState("");

  useEffect(async () => { //TODO: implement

  }, []);

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  const onMintPressed = async () => { //TODO: implement

  };

  return (
    <div>
      <Navbar />
      <div className="minter-container">
        <button id="walletButton" onClick={connectWalletPressed}>
          {walletAddress.length > 0 ? (
            "Connected: " +
            String(walletAddress).substring(0, 6) +
            "..." +
            String(walletAddress).substring(38)
          ) : (
            <div>
              <img className="metamask-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png" />
              <div className="metamask-btn"><span className="meta-name">MetaMask</span></div> </div>
          )}
        </button>
        <div className="Minter">
          <br></br>
          <h1 id="title">🧙‍♂️ Macro NFT Minter</h1>
          <p className="minter-heading">
            Simply add your asset's link, name, and description, then press "Mint."
          </p>
          <form>
            <h2 className="mint-form-heading">🖼 Link to asset: </h2>
            <input
              className="mint-adress"
              type="text"
              placeholder="e.g. https://gateway.pinata.cloud/ipfs/<hash>"
              onChange={(event) => setURL(event.target.value)}
            />
            <h2 className="mint-form-heading">🤔 Name: </h2>
            <input
              className="mint-adress"
              type="text"
              placeholder="e.g. My first NFT!"
              onChange={(event) => setName(event.target.value)}
            />
            <h2 className="mint-form-heading">✍️ Description: </h2>
            <input
              className="mint-adress"
              type="text"
              placeholder="e.g. Even cooler than cryptokitties ;)"
              onChange={(event) => setDescription(event.target.value)}
            />
          </form>
          <button id="mintButton" onClick={onMintPressed}>
            Mint NFT
          </button>
          <p id="status">
            {status}
          </p>
        </div>
      </div>
    </div>


  );
};

export default Minter;
