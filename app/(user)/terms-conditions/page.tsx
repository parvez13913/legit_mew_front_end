"use client";

import Link from "next/link";

const TermsConditions = () => {
  const sections = [
    {
      number: 1,
      title: "Acceptance of Terms",
      content:
        "By using StockGifter, you acknowledge that you have read, understood, and agree to these Terms & Conditions. If you do not agree, please do not use our platform.",
    },
    {
      number: 2,
      title: "Eligibility",
      content:
        "You must be at least 18 years old and legally capable of entering into binding agreements to use our services.",
    },
    {
      number: 3,
      title: "User Accounts",
      content: [
        "Users must provide accurate and complete information when creating an account.",
        "You are responsible for maintaining the confidentiality of your account login details.",
        "You agree to notify us immediately of any unauthorized use of your account.",
      ],
    },
    {
      number: 4,
      title: "Stock Donations",
      content: [
        "Donations on StockGifter are executed through a licensed brokerage partner.",
        "Users do not transfer stock directly; all transactions are handled by the broker.",
        "StockGifter acts as an interface to facilitate donations and track portfolios.",
      ],
    },
    {
      number: 5,
      title: "Platform Fee",
      content: [
        "A platform fee of $1 per stock initiation applies.",
        "This fee is separate from the value of the stock itself.",
      ],
    },
    {
      number: 6,
      title: "User Conduct",
      content: [
        "Users agree to use the platform responsibly and not engage in any activity that may harm StockGifter, other users, or the broker. Prohibited activities include fraud, harassment, or any illegal activity.",
      ],
    },
    {
      number: 7,
      title: "Intellectual Property",
      content:
        "All content, designs, logos, and software on StockGifter are the property of StockGifter or its licensors. Users may not reproduce or distribute any materials without explicit permission.",
    },
    {
      number: 8,
      title: "Privacy",
      content:
        "Your personal information is protected under our Privacy Policy. By using StockGifter, you consent to the collection, use, and storage of your data as described in the Privacy Policy.",
    },
    {
      number: 9,
      title: "Limitation of Liability",
      content:
        "StockGifter is not liable for any losses, damages, or errors arising from the use of the platform or stock donations. Users understand that all stock transactions are executed by the broker.",
    },
    {
      number: 10,
      title: "Changes to Terms",
      content:
        "We may update these Terms & Conditions from time to time. All updates will be effective immediately upon posting on the platform. Continued use constitutes acceptance of the new terms.",
    },
  ];

  return (
    <div className=" bg-[#F8F8F8]">
      {/* Header */}
      <div className="bg-primary text-white py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-[56px] font-medium mb-2 leading-[130%]">
            Terms & Conditions
          </h1>

          {/* Breadcrumb */}
          <p className="text-white flex items-center gap-2 text-sm">
            <Link href="/" className="opacity-80">
              Home
            </Link>
            <span className="opacity-60">{"<<"}</span>
            <span className="font-medium cursor-pointer">
              Terms & Conditions Page
            </span>
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="py-12 px-4">
        <div className="container mx-auto">
          <div className="p-8 bg-white rounded-lg border border-border">
            <h2 className="text-[32px] font-medium text-[#333] mb-2 uppercase">
              Terms & Conditions
            </h2>
            <p className="text-sm text-[#4A4C56] mb-8 leading-[150%] mt-4.5">
              <span className="inline-block mb-5">
                Last Updated: December 9, 2025
              </span>
              <span className="inline-block">
                Welcome to Editor Marketplace. These Terms & Conditions govern
                your use of our platform, where clients and editors connect to
                complete projects efficiently and professionally. By accessing
                or using our services, you agree to comply with these Terms.
              </span>
            </p>

            {/* Sections */}
            <div className="space-y-8">
              {sections.map((section) => (
                <div key={section.number}>
                  <h3 className="text-2xl font-medium leading-[150%] text-[#333] mb-2">
                    {section.number}. {section.title}
                  </h3>
                  {Array.isArray(section.content) ? (
                    <ul className="text-[#333] text-lg space-y-2 leading-[144.444%%]">
                      {section.content.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-black mr-3 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-600 leading-relaxed">
                      {section.content}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TermsConditions;
