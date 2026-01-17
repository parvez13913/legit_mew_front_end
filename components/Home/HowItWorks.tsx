import CheckIcon from "@/public/icons/CheckIcon";
import HeartIcon from "@/public/icons/HeartIcon";
import UsersIcon from "@/public/icons/UsersIcon";

export function HowItWorks() {
  const categories = [
    { name: "Birthdays", id: "birthdays" },
    { name: "Graduations", id: "graduations" },
    { name: "Holidays", id: "holidays" },
    { name: "Thank You Gifts", id: "thank-you" },
  ];

  const steps = [
    {
      icon: <UsersIcon className="h-6 w-6" />,
      title: "Find Someone Special",
      description:
        "Choose a friend, family member, or loved one you want to celebrate with a meaningful stock gift for birthdays, graduations, or special moments.",
    },
    {
      icon: <HeartIcon className="h-6 w-6" />,
      title: "Learn What They Love",
      description:
        "View their profile, interests, favorite companies. Get inspired to give a gift that truly resonates.",
    },
    {
      icon: <CheckIcon className="h-6 w-6" />,
      title: "We Handle the Rest",
      description:
        "All stock donations are securely processed through our licensed broker partner. The platform ensures safe transfer without the user directly.",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/how-it-work.png')`,
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-4xl lg:text-[56px] font-semibold leading-[130%] text-white">
            How It Works
          </h2>
          <p className="text-[#FFF] text-sm leading-[140%] tracking-[0.07px]">
            Give meaningful stock gifts to the people you care about. It&apos;s
            simple and rewarding
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-15">
          {categories.map((category, index) => (
            <button
              key={category.id}
              className={`px-4 py-2.5 text-[14px] rounded-lg leading-[140%] tracking-[0.07px] transition-all ${
                index === 0
                  ? "bg-primary text-white hover:bg-primary/90"
                  : "bg-transparent text-white border border-white"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-[#E7F6F1] rounded-full flex items-center justify-center text-primary text-xl font-bold">
                  {step.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-medium text-[#1D1F2C] leading-[130%] tracking-[0.12px] mb-4">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[#4A4C56] text-sm leading-[140%] tracking-[0.07px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
