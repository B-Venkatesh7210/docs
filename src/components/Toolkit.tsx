import React, { useState, useEffect } from "react";
import magicLogo from "../logos/magicLogo.jpg";
import particleLogo from "../logos/particleLogo.png";
import { CopyBlock, dracula, vs2015 } from "react-code-blocks";

interface Button {
  id: string;
  icon: string;
  label: string;
  importData: string;
  initialization: string;
}

const Toolkit = () => {
  const loginButtons = [
    {
      id: "magic",
      icon: magicLogo,
      label: "Magic",
      importData: `import magic from "magic"`,
      initialization: `
      
// Initialize the Magic instance
export const magic = new Magic("YOUR_API_KEY", {
  network: {
    rpcUrl: "",
    chainId: 11155111, // or preferred chain
  },
});

      
const connect = async () => {
  try {
    await magic.wallet.connectWithUI();
    const web3Provider = new ethers.providers.Web3Provider(
      magic.rpcProvider,
      "any"
    );
      
    const smartAccount = await createSmartAccountClient({
      signer: web3Provider.getSigner() as LightSigner,
      bundlerUrl: "", // <-- Read about this at https://docs.biconomy.io/dashboard#bundler-url
      biconomyPaymasterApiKey: "", // <-- Read about at https://docs.biconomy.io/dashboard/paymaster
      rpcUrl: "" // <-- read about this at https://docs.biconomy.io/Account/methods#createsmartaccountclient
    });
      
    const address = await smartAccount.getAccountAddress();
  } catch (error) {
    console.error(error);
  }
};
      `,
    },
    {
      id: "particle",
      icon: particleLogo,
      label: "Particle",
      importData: `import magic from "particle"`,
      initialization: `
      
// Initialize the Particle instance
const particle = new ParticleAuthModule.ParticleNetwork({
  projectId: "",
  clientKey: "",
  appId: "",
  wallet: {
    displayWalletEntry: true,
    defaultWalletEntryPosition: ParticleAuthModule.WalletEntryPosition.BR,
  },
});


const connect = async () => {
  try {
    const userInfo = await particle.auth.login();
    console.log("Logged in user:", userInfo);
    const particleProvider = new ParticleProvider(particle.auth);
    const web3Provider = new ethers.providers.Web3Provider(
      particleProvider,
      "any"
    );
      
    const smartAccount = await createSmartAccountClient({
      signer: web3Provider.getSigner() as LightSigner,
      bundlerUrl: "", // <-- Read about this at https://docs.biconomy.io/dashboard#bundler-url
      biconomyPaymasterApiKey: "", // <-- Read about at https://docs.biconomy.io/dashboard/paymaster
      rpcUrl: "" // <-- read about this at https://docs.biconomy.io/Account/methods#createsmartaccountclient
    });
      
    const address = await smartAccount.getAccountAddress();
  } catch (error) {
    console.error(error);
  }
};
      `,
    },
    {
      id: "dynamic",
      icon: magicLogo,
      label: "Dynamic",
      importData: `import magic from "dynamic"`,
      initialization: `// Initialize the Dynamic instance`,
    },
    {
      id: "privy",
      icon: magicLogo,
      label: "Privy",
      importData: `import magic from "privy"`,
      initialization: `// Initialize the Privy instance`,
    },
    {
      id: "dfns",
      icon: magicLogo,
      label: "DFNS",
      importData: `import magic from "dfns"`,
      initialization: `// Initialize the DFNS instance`,
    },
    {
      id: "capsule",
      icon: magicLogo,
      label: "Capsule",
      importData: `import magic from "capsule"`,
      initialization: `// Initialize the Capsule instance`,
    },
    {
      id: "turnkey",
      icon: magicLogo,
      label: "Turnkey",
      importData: `import magic from "turnkey"`,
      initialization: `// Initialize the Turnkey instance`,
    },
    {
      id: "web3auth",
      icon: magicLogo,
      label: "Web3Auth",
      importData: `import magic from "web3auth"`,
      initialization: `// Initialize the Web3Auth instance`,
    },
    {
      id: "ethers",
      icon: magicLogo,
      label: "Ethers",
      importData: `import magic from "ethers"`,
      initialization: `// Initialize the Ethers instance`,
    },
    {
      id: "viem",
      icon: magicLogo,
      label: "Viem",
      importData: `import magic from "viem"`,
      initialization: `// Initialize the Viem instance`,
    },
    {
      id: "wagmi",
      icon: magicLogo,
      label: "Wagmi",
      importData: `import magic from "wagmi"`,
      initialization: `// Initialize the Wagmi instance`,
    },
  ];

  const transactionButtons = [
    {
      id: "sponsored",
      icon: magicLogo,
      label: "Sponsored",
      importData: `import sponsored from "sponsored"`,
      initialization: `// Initialize the Sponsored instance`,
    },
    {
      id: "erc20",
      icon: magicLogo,
      label: "ERC20",
      importData: `import erc20 from "erc20"`,
      initialization: `// Initialize the ERC20 instance`,
    },
    {
      id: "userPaid",
      icon: magicLogo,
      label: "User Paid",
      importData: `import userPaid from "userPaid"`,
      initialization: `// Initialize the User Paid instance`,
    },
  ];

  const [activeLoginType, setActiveLoginType] = useState<Button>(
    loginButtons[0]
  );
  const [transactionType, setTransactionType] = useState<Button>(
    transactionButtons[0]
  );
  const [imports, setImports] = useState("");
  const [initializationCode, setInitializationCode] = useState("");

  useEffect(() => {
    updateImports([activeLoginType, transactionType]);
    updateInitializationCode([activeLoginType, transactionType]);
  }, [activeLoginType, transactionType]);

  const updateImports = (buttons: Button[]) => {
    const newImport = buttons.map((button) => button.importData).join("\n");
    setImports(newImport);
    console.log("New Imports final", newImport);
  };

  const updateInitializationCode = (buttons: Button[]) => {
    const newInitializationCode = buttons
      .map((button) => button.initialization)
      .join("\n");
    setInitializationCode(newInitializationCode);
    console.log("New Initialization Code final", newInitializationCode);
  };

  const handleLoginButtonClick = (button: Button) => {
    setActiveLoginType(button);
  };

  const handleTransactionButtonClick = (button: Button) => {
    setTransactionType(button);
  };

  return (
    <div className="flex flex-row justify-between items-start w-[130%] h-auto">
      <div className="flex flex-col justify-start items-start w-[35%] h-auto">
        <span className="font-bold text-2xl pb-2">Social Logins</span>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 pb-4">
          {loginButtons.slice(0, 8).map((button) => (
            <button
              key={button.id}
              className={`flex items-center justify-start w-[10rem] h-[2.5rem] px-4 py-2 my-1 bg-gray-800 text-white border-0 rounded-lg cursor-pointer transition-colors duration-300 ${
                activeLoginType.id == button.id ? "bg-red-500" : ""
              }`}
              onClick={() => handleLoginButtonClick(button)}
            >
              {/* <img src={button.icon} alt={button.label} width={20} /> */}
              <span>{button.label}</span>
            </button>
          ))}
        </div>
        <span className="font-bold text-2xl pb-2">Sign with EOA</span>
        <div className="grid grid-cols-3 gap-x-6 gap-y-2 pb-4">
          {loginButtons.slice(8, 11).map((button) => (
            <button
              key={button.id}
              className={`flex items-center justify-start w-[6rem] h-[2.5rem] px-4 py-2 my-1 bg-gray-800 text-white border-0 rounded-lg cursor-pointer transition-colors duration-300 ${
                activeLoginType.id == button.id ? "bg-red-500" : ""
              }`}
              onClick={() => handleLoginButtonClick(button)}
            >
              {/* <img src={button.icon} alt={button.label} width={20} /> */}
              <span>{button.label}</span>
            </button>
          ))}
        </div>
        <span className="font-bold text-2xl pb-2">Executing Transactions</span>
        <div className="grid grid-cols-3 gap-x-6 gap-y-2 pb-4">
          {transactionButtons.map((button) => (
            <button
              key={button.id}
              className={`flex items-center justify-start w-[6rem] h-[2.5rem] px-4 py-2 my-1 bg-gray-800 text-white border-0 rounded-lg cursor-pointer transition-colors duration-300 ${
                transactionType.id == button.id ? "bg-red-500" : ""
              }`}
              onClick={() => handleTransactionButtonClick(button)}
            >
              {/* <img src={button.icon} alt={button.label} width={20} /> */}
              <span>{button.label}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-start items-start w-[65%] h-[30rem] py-2 px-4">
        Code
        <div className="flex flex-col bg-[#131417] border-solid border-[1px] border-opacity-60 border-gray-500 justify-start items-start w-full h-full mt-2 rounded-md overflow-y-auto overflow-x-auto py-2 px-4">
          <div className="w-full h-full">
            {" "}
            <CopyBlock
              text={imports + initializationCode}
              language="typescript"
              theme={vs2015}
              customStyle={{ backgroundColor: "#131417" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolkit;
