"use client";

import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

// Sample JSON data for top clients
interface ClientData {
  userName: string;
  email: string;
  phoneNumber: string;
}

const topClientsData: ClientData[] = [
  {
    userName: "Paula Mora",
    email: "paula@gmail.com",
    phoneNumber: "0185019343",
  },
  {
    userName: "Paula Mora",
    email: "david@sample.com",
    phoneNumber: "0185019343",
  },
  {
    userName: "Paula Mora",
    email: "mary@sample.com",
    phoneNumber: "0185019343",
  },
  {
    userName: "Paula Mora",
    email: "david@sample.com",
    phoneNumber: "0185019343",
  },
  {
    userName: "Paula Mora",
    email: "mary@sample.com",
    phoneNumber: "0185019343",
  },
];

export default function TopClient() {
  return (
    <Card className="bg-white rounded-xl border-none gap-3 h-[424px]" style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)' }}>
      <CardHeader>
        <h2 className="text-lg font-semibold text-[#4A4C56]">Top Client</h2>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto border border-[#edf1f3] rounded-md">
          <table className="w-full">
            <thead className="bg-[#FAFBFC] ">
              <tr className="border-b border-gray-200">
                <th className="text-left py-5 px-3 text-nowrap text-sm font-semibold text-gray-700">
                  User Name
                </th>
                <th className="text-left py-5 px-3 text-nowrap text-sm font-semibold text-gray-700">
                  Email
                </th>
                <th className="text-left py-5 px-3 text-nowrap text-sm font-semibold text-gray-700">
                  Phone number
                </th>
                <th className="text-left py-5 px-3 text-nowrap text-sm font-semibold text-gray-700">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="text-nowrap">
              {topClientsData.map((client, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 last:border-b-0"
                >
                  <td className="py-3.5 px-4 text-[12px] text-gray-900">
                    {client.userName}
                  </td>
                  <td className="py-3.5 px-4 text-[12px] text-gray-600">
                    {client.email}
                  </td>
                  <td className="py-3.5 px-4 text-[12px] text-gray-600">
                    {client.phoneNumber}
                  </td>
                  <td className="py-3.5 px-4">
                    <a href="#" className="text-[12px]">
                      View profile
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
