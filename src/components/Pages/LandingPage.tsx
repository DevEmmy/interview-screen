"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaCcMastercard, FaMehBlank, FaSearch } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa6";
import { FiZap, FiBell, FiEye, FiMoreVertical } from "react-icons/fi";
import { RiBankLine } from "react-icons/ri";
import Nav from "../widgets/Nav";
import Table, { Payment } from "../widgets/Table";

const LandingPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [selectedMethod, setSelectedMethod] = useState("Payment Method");
  const [selectedDate, setSelectedDate] = useState("");

  const payments: Payment[] = [
    {
      id: "#PAY-2025001",
      customer: {
        name: "John Smith",
        email: "john@example.com",
        avatar:
          "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg",
      },
      amount: 299.0,
      status: "Paid",
      date: "Jan 15, 2025",
      method: {
        icon: <FaCcVisa color="blue" />,
        type: "Visa",
        details: "ending in 4242",
      },
    },
    {
      id: "#PAY-2025002",
      customer: {
        name: "Sarah Johnson",
        email: "sarah@example.com",
        avatar:
          "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg",
      },
      amount: 199.0,
      status: "Pending",
      date: "Jan 14, 2025",
      method: {
        icon: <RiBankLine color="gray" />,
        type: "Bank Transfer",
        details: "",
      },
    },
    {
      id: "#PAY-2025003",
      customer: {
        name: "Michael Brown",
        email: "michael@example.com",
        avatar:
          "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg",
      },
      amount: 599.0,
      status: "Failed",
      date: "Jan 13, 2025",
      method: {
        icon: <FaCcMastercard color="orange" />,
        type: "Mastercard",
        details: "ending in 8888",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Payments</h1>

          <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
            + New Payment
          </button>
        </div>

        <div className="bg-white rounded-lg shadow mb-6">
          <div className="p-4 grid grid-cols-4 gap-4">
            <div className="flex items-center gap-2 border border-gray-300 rounded-md p-2">
              <FaSearch className="h-4 w-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search payments..."
                className="flex-1 min-w-[200px] outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <select
              className="min-w-[150px] p-2 border border-gray-300 rounded-md"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option>All Status</option>
              <option>Paid</option>
              <option>Pending</option>
              <option>Failed</option>
            </select>
            <select
              className="min-w-[150px] p-2 border border-gray-300 rounded-md"
              value={selectedMethod}
              onChange={(e) => setSelectedMethod(e.target.value)}
            >
              <option>Payment Method</option>
              <option>Credit Card</option>
              <option>Bank Transfer</option>
            </select>
            <input
              type="date"
              className="min-w-[150px] p-2 border border-gray-300 rounded-md"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>
        </div>

        <Table payments={payments} />
      </div>
    </div>
  );
};

export default LandingPage;
