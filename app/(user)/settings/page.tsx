"use client";
import { ConnectBroker } from "@/components/settings/ConnectBroker";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CheckCircleIcon from "@/public/icons/CheckCircleIcon";
import UploadIcon from "@/public/icons/UploadIcon";
import { CheckCircle, Search } from "lucide-react";

import { useState } from "react";

const SettingsPage = () => {
  const stockList = [
    { id: 1, ticker: "AAPL", name: "Apple In" },
    { id: 2, ticker: "TSLA", name: "Tesla" },
    { id: 3, ticker: "MSFT", name: "Microsoft" },
    { id: 4, ticker: "GOOGL", name: "Google" },
    { id: 5, ticker: "NVDA", name: "NVIDIA" },
  ];
  const [activeTab, setActiveTab] = useState("general");
  const [selectedStockId, setSelectedStockId] = useState(1);
  const handelNavigation = (id: number) => {
    setSelectedStockId(id);
  };

  return (
    <main className="bg-[#F5F5F5] p-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-[#1D1F2C] text-[32px] font-medium leading-[130%] mb-3">
            Settings
          </h1>
          <p className="text-[#4A4C56] text-[14px] leading-[140%] tracking-[0.07px]">
            Manage your account preferences and integrations
          </p>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-8 border border-border rounded-lg p-0 h-auto">
            <TabsTrigger
              value="general"
              className="data-[state=active]:bg-primary data-[state=active]:text-white  px-6 py-2 border-b-2 border-transparent data-[state=active]:border-primary text-primary rounded-lg cursor-pointer"
            >
              Wishlist Settings
            </TabsTrigger>
            <TabsTrigger
              value="exchange"
              className="data-[state=active]:bg-primary data-[state=active]:text-white  px-6 py-2 border-b-2 border-transparent data-[state=active]:border-primary text-primary rounded-lg cursor-pointer"
            >
              Brokerage Account
            </TabsTrigger>
          </TabsList>

          {/* General Settings Tab */}
          <TabsContent value="general" className="space-y-6">
            {/* Currently Enabled Card */}
            <div className="bg-primary text-white rounded-lg p-6 flex items-center justify-between">
              <div>
                <p className="text-[16px] text-white leading-[160%] tracking-[0.07px] mb-1">
                  Currently Featured
                </p>
                <p className="text-2xl font-medium leading-[130%] tracking-[0.12px] text-white">
                  AAPL
                </p>
                <p className="text-sm leading-[140%] tracking-[0.07px] text-white mt-2">
                  Apple Inc.
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-medium leading-[130%] tracking-[0.12px] text-white mb-2">
                  $175.43
                </p>
                <p className="text-sm text-white leading-[140%] tracking-[0.07px]">
                  Market Price
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-border">
              {/* Search Box */}
              <div className="relative mb-3 mt-14">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary" />
                <input
                  type="text"
                  placeholder="Search stock"
                  className="w-full pl-10 pr-4 py-4.5 border border-input rounded-lg text-foreground placeholder:text-[#4A4C56] focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              {/* Stock List */}
              <div className="space-y-3">
                {stockList.map((stock) => (
                  <div
                    key={stock.id}
                    onClick={() => handelNavigation(stock.id)}
                    className={`p-6 rounded-lg cursor-pointer transition-all ${
                      selectedStockId === stock.id
                        ? "border-2 border-primary bg-white"
                        : "bg-white border border-border hover:bg-muted/30"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-[#1D1F2C] leading-[160%]">
                          {stock.name}
                        </p>
                        <p className="text-sm text-[#4A4C56] leading-[140%] tracking-[0.07px] mt-2">
                          {stock.ticker}
                        </p>
                      </div>
                      {selectedStockId === stock.id && (
                        <div>
                          <CheckCircle className="size-6 text-primary" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Save Button */}
            <div className="pt-4 max-w-60 mx-auto">
              <button className="bg-primary hover:bg-primary/80 text-white px-8 py-3 w-full rounded-lg cursor-pointer">
                Save Wishlist
              </button>
            </div>
          </TabsContent>

          <TabsContent value="exchange">
            <ConnectBroker onConnect={() => setActiveTab("broker")} />
          </TabsContent>

          {/* Broker Tab */}
          <TabsContent value="broker">
            <div className="bg-[#DDECE7] border border-primary rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <p className="p-3 h-12 w-12 bg-[#B2DDCF] rounded-full">
                    <CheckCircleIcon />
                  </p>
                  <div>
                    <p className="text-primary text-[16px] leading-[160%] tracking-[0.08px] mb-2">
                      Status: Connected
                    </p>
                    <h1 className="text-2xl text-primary font-medium leading-[130%] tracking-[0.12px] mb-2">
                      Interactive Brokers
                    </h1>
                    <p className="text-primary text-[16px] leading-[160%] tracking-[0.08px] mb-2">
                      Apple Inc.
                    </p>
                  </div>
                </div>
                <div>
                  <UploadIcon />
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
};

export default SettingsPage;
