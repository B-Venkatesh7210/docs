import React, { useState } from "react";
import "../css/toolkit.css";
import magicLogo from "../logos/magicLogo.jpg";
import particleLogo from "../logos/particleLogo.png";

const Toolkit = () => {
  const [activeButton, setActiveButton] = useState(null);
  const buttons = [
    { id: "magic", icon: magicLogo, label: "Magic" },
    { id: "particle", icon: particleLogo, label: "Particle" },
    { id: "dynamic", icon: magicLogo, label: "Dynamic" },
    { id: "privy", icon: magicLogo, label: "Privy" },
    { id: "dfns", icon: magicLogo, label: "DFNS" },
    { id: "capsule", icon: magicLogo, label: "Capsule" },
    { id: "turnkey", icon: magicLogo, label: "Turnkey" },
    { id: "web3auth", icon: magicLogo, label: "Web3Auth" },
    { id: "ethers", icon: magicLogo, label: "Ethers" },
    { id: "viem", icon: magicLogo, label: "Viem" },
    { id: "wagmi", icon: magicLogo, label: "Wagmi" },
  ];

  const handleButtonClick = (id: string) => {
    setActiveButton(id);
  };

  return (
    <div className="flex flex-row justify-between items-start w-[130%] h-auto bg-blue-400">
      <div className="flex flex-col justify-start items-start w-[35%] h-auto bg-green-500">
        <span className="font-bold text-2xl pb-2">Social Logins</span>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 pb-4">
          {buttons.slice(0, 8).map((button) => (
            <button
              key={button.id}
              className={`flex items-center justify-start w-[10rem] h-[2.5rem] px-4 py-2 my-1 bg-gray-800 text-white border-0 rounded-lg cursor-pointer transition-colors duration-300 ${
                activeButton === button.id ? "bg-blue-500" : ""
              }`}
              onClick={() => handleButtonClick(button.id)}
            >
              {/* <img src={button.icon} alt={button.label} width={20} /> */}
              <span>{button.label}</span>
            </button>
          ))}
        </div>
        <span className="font-bold text-2xl pb-2">Sign with EOA</span>
        <div className="grid grid-cols-3 gap-x-6 gap-y-2">
          {buttons.slice(8, 11).map((button) => (
            <button
              key={button.id}
              className={`flex items-center justify-start w-[6rem] h-[2.5rem] px-4 py-2 my-1 bg-gray-800 text-white border-0 rounded-lg cursor-pointer transition-colors duration-300 ${
                activeButton === button.id ? "bg-blue-500" : ""
              }`}
              onClick={() => handleButtonClick(button.id)}
            >
              {/* <img src={button.icon} alt={button.label} width={20} /> */}
              <span>{button.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Toolkit;
