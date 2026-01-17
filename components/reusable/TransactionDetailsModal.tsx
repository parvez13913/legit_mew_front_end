"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Download, X } from "lucide-react";

export interface TransactionDetails {
  transactionId: string;
  date: string;
  userName: string;
  accountNumber: string;
  accountHolderName: string;
  transactionAmount: number;
  service: string;
}

interface TransactionDetailsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  transaction: TransactionDetails | null;
}

export default function TransactionDetailsModal({
  open,
  onOpenChange,
  transaction,
}: TransactionDetailsModalProps) {
  if (!transaction) return null;

  const formatAccountNumber = (accountNumber: string) => {
    // Mask account number, showing only last 3 digits
    const last3 = accountNumber.slice(-3);
    return `**** **** **** ${last3}`;
  };

  const handleDownload = () => {
    // Handle download logic here
    console.log("Downloading transaction details:", transaction);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="w-[444px] h-[586px] bg-white border-none"
        showCloseButton={false}
      >
        <DialogClose className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white rounded-sm w-6 h-6 flex items-center justify-center transition-colors">
          <X className="w-4 h-4" />
          <span className="sr-only">Close</span>
        </DialogClose>
        <DialogHeader>
          <DialogTitle className="text-center font-bold">
            Transaction Details
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-8 py-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Transaction ID :</span>
            <span className="text-sm font-medium text-gray-900">
              #{transaction.transactionId}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Date :</span>
            <span className="text-sm font-medium text-gray-900">
              {transaction.date}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">User name :</span>
            <span className="text-sm font-medium text-gray-900">
              {transaction.userName}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">A/C number :</span>
            <span className="text-sm font-medium text-gray-900">
              {formatAccountNumber(transaction.accountNumber)}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">A/C holder name :</span>
            <span className="text-sm font-medium text-gray-900">
              {transaction.accountHolderName}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Transaction amount :</span>
            <span className="text-sm font-medium text-gray-900">
              ${transaction.transactionAmount}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Service :</span>
            <span className="text-sm font-medium text-gray-900">
              {transaction.service}
            </span>
          </div>
        </div>
        <div className="flex justify-center pt-4">
          <button
            onClick={handleDownload}
            className="bg-[#08A270] hover:bg-[#06a06d] text-white w-[200px] h-[44px] rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <Download className="w-4 h-4" />
            Download
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
