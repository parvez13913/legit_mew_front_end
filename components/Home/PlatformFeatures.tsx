import CheckIcon from "@/public/icons/CheckIcon";
import ComputerIcon from "@/public/icons/ComputerIcon";
import DashboardIcon from "@/public/icons/DashboardIcon";
import HeartIcon from "@/public/icons/HeartIcon";
import TrackingIcon from "@/public/icons/TrackingIcon";
import TransparentIcon from "@/public/icons/TransparentIcon";

export function PlatformFeatures() {
  const features = [
    {
      icon: <HeartIcon className="text-white h-6 w-6" />,
      title: "Wishlist Feature",
      description:
        "Users can save their preferred stocks for friends & family to choose from — making gifting easier and more meaningful.",
    },
    {
      icon: <TrackingIcon className="text-white h-6 w-6" />,
      title: "Real-time Portfolio Tracking",
      description:
        "Track portfolio performance instantly with real-time updates. Every gifted stock reflects live, so users always stay informed.",
    },
    {
      icon: <CheckIcon className="text-white h-6 w-6" />,
      title: "Safe & Licensed Broker",
      description:
        "Security comes first. StockGifter works only with fully licensed and regulated brokerage partners to ensure every transaction stays safe and secure",
    },
    {
      icon: <DashboardIcon className="text-white h-6 w-6" />,
      title: "User-friendly Dashboard",
      description:
        "A clean and intuitive dashboard that gives users full control, clarity, and easy access to every activity  from gifts to portfolio details.",
    },
    {
      icon: <ComputerIcon className="text-white h-6 w-6" />,
      title: "Responsive & Modern Design",
      description:
        "Built with a modern and fully responsive layout for a smooth experience on desktop, tablet, and mobile — anytime, anywhere.",
    },
    {
      icon: <TransparentIcon className="text-white h-6 w-6" />,
      title: "Transparent Platform",
      description:
        "Transparency is at the core. Every action — from gifted stocks to portfolio updates — stays clear, trackable, and accountable.",
    },
  ];

  return (
    <section className="w-full bg-[#E6F6F1] py-12">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl lg:text-[56px] font-semibold leading-[130%] text-[#1D1F2C]">
            Platform Features
          </h2>
          <p className="text-[#404C5C] text-sm leading-[140%] tracking-[0.07px] mt-4.5">
            Everything you need to support users and grow portfolios
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#FFF] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Icon Circle */}
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4 text-white text-xl">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-[25px] font-medium leading-[130%] tracking-[0.125px] text-[#1D1F2C] mb-4.5">
                {feature.title}
              </h3>
              <p className="text-[#1D1F2C] text-[16px] leading-[160%] tracking-[0.08px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
