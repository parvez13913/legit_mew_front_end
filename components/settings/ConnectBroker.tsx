import ConnectIcon from "@/public/icons/ConnectIcon";
import WalletIcon from "@/public/icons/WalletIcon";

interface ConnectBrokerProps {
  onConnect: () => void;
}

export function ConnectBroker({ onConnect }: ConnectBrokerProps) {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-6 text-start">
        <h2 className="text-[#1D1F2C] text-[32px] font-medium leading-[130%] mb-3">
          Connect Broker
        </h2>
        <p className="text-[#4A4C56] text-[14px] leading-[140%] tracking-[0.07px]">
          Link your brokerage account to receive stocks directly.
        </p>
      </div>

      {/* Dashed Border Box */}
      <div className="border-2 border-dashed border-primary rounded-lg p-6 flex flex-col items-center justify-center min-h-64 bg-white">
        {/* Briefcase Icon */}
        <div className="mb-2.5 p-3 bg-[#E6F6F1] rounded-full">
          <WalletIcon />
        </div>

        {/* Text Content */}
        <h3 className="text-lg font-medium text-[#1D1F2C] leading-[140%] tracking-[0.07px] mb-2">
          No Broker Linked
        </h3>
        <p className="text-[#777980] text-sm leading-[150%]">
          Connect your account to start receiving stock rewards from your fans.
        </p>

        {/* Connect Button */}
        <button
          onClick={onConnect}
          className="bg-primary hover:bg-primary/90 text-white font-medium py-2.5 px-4 rounded-lg flex items-center gap-2 mt-6 cursor-pointer"
        >
          Connect Broker
          <ConnectIcon />
        </button>
      </div>
    </div>
  );
}
