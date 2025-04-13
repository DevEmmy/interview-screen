import Image from "next/image";
import React, { useState } from "react";
import { FiEye, FiMoreVertical, FiChevronLeft, FiChevronRight } from "react-icons/fi";

export interface Payment {
  id: string;
  customer: {
    name: string;
    email: string;
    avatar: string;
  };
  amount: number;
  status: "Paid" | "Pending" | "Failed";
  date: string;
  method: {
    icon: React.ReactNode;
    type: string;
    details: string;
  };
}

const TABLE_HEADERS = [
  { id: 'payment_id', label: 'Payment ID' },
  { id: 'customer', label: 'Customer' },
  { id: 'amount', label: 'Amount' },
  { id: 'status', label: 'Status' },
  { id: 'date', label: 'Date' },
  { id: 'method', label: 'Method' },
  { id: 'actions', label: 'Actions' },
] as const;

interface PaginationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  onPageChange,
}) => {
  return (
    <nav
      className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
      aria-label="Pagination"
    >
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <FiChevronLeft className="h-5 w-5" />
        <span className="sr-only">Previous</span>
      </button>

      {[1, 2, 3, 4].map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium
            ${pageNumber === currentPage
              ? 'text-orange-500 border-orange-500'
              : 'text-gray-700 hover:bg-gray-50'
            }`}
        >
          {pageNumber}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === 4}
        className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <FiChevronRight className="h-5 w-5" />
        <span className="sr-only">Next</span>
      </button>
    </nav>
  );
};

const Table = ({ payments }: { payments: Payment[] }) => {
  const [currentPage, setCurrentPage] = useState(2);
  const itemsPerPage = 10;
  const totalItems = 100;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      
      <div className="hidden sm:block">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {TABLE_HEADERS.map((header) => (
                <th
                  key={header.id}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {header.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {payments.map((payment) => (
              <tr key={payment.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {payment.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <Image
                        className="h-8 w-8 rounded-full"
                        src="https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"
                        alt="User avatar"
                        width={32}
                        height={32}
                        unoptimized
                      />
                    </div>
                    <div className="ml-2">
                      <div className="text-sm font-medium text-gray-900">
                        {payment.customer.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {payment.customer.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  ${payment.amount.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                      ${
                        payment.status === "Paid"
                          ? "bg-green-100 text-green-800"
                          : payment.status === "Pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                  >
                    {payment.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {payment.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    {payment.method.icon}
                    {payment.method.type} {payment.method.details}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="flex gap-2">
                    <FiEye className="h-4 w-4 text-orange-500" />
                    <FiMoreVertical className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
      <div className="sm:hidden">
        <div className="divide-y divide-gray-200">
          {payments.map((payment) => (
            <div key={payment.id} className="p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Image
                    className="h-10 w-10 rounded-full"
                    src="https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"
                    alt="User avatar"
                    width={40}
                    height={40}
                    unoptimized
                  />
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {payment.customer.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {payment.customer.email}
                    </div>
                  </div>
                </div>
                <button className="flex items-center">
                  <FiMoreVertical className="h-5 w-5 text-gray-400" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-gray-500">Payment ID</div>
                  <div className="font-medium text-gray-900">{payment.id}</div>
                </div>
                <div>
                  <div className="text-gray-500">Amount</div>
                  <div className="font-medium text-gray-900">
                    ${payment.amount.toFixed(2)}
                  </div>
                </div>
                <div>
                  <div className="text-gray-500">Status</div>
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                      ${
                        payment.status === "Paid"
                          ? "bg-green-100 text-green-800"
                          : payment.status === "Pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                  >
                    {payment.status}
                  </span>
                </div>
                <div>
                  <div className="text-gray-500">Date</div>
                  <div className="text-gray-900">{payment.date}</div>
                </div>
                <div className="col-span-2">
                  <div className="text-gray-500">Payment Method</div>
                  <div className="flex items-center gap-2 text-gray-900">
                    {payment.method.icon}
                    {payment.method.type} {payment.method.details}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white px-4 py-3 flex flex-col sm:flex-row items-center justify-between border-t border-gray-200 sm:px-6 space-y-3 sm:space-y-0">
        <div className="text-sm text-gray-700 text-center sm:text-left">
          Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} results
        </div>
        <div className="flex justify-center sm:justify-end w-full sm:w-auto">
          <Pagination
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Table;
