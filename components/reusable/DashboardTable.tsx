import React from "react";
import { Info } from "lucide-react";

export interface TableColumn {
  key: string;
  label: string;
  isAction?: boolean; // Flag to identify action column
}

export interface TableRowData {
  [key: string]: string | number;
}

export interface DashboardTableProps {
  title?: string;
  columns: TableColumn[];
  data: TableRowData[];
  showDateRange?: boolean;
  statusKey?: string;
  onActionClick?: (row: TableRowData, rowIndex: number) => void;
}

export default function DashboardTable({
  title = "Donation History",
  columns,
  data,
  statusKey = "status",
  onActionClick,
}: DashboardTableProps) {
  const getStatusBadgeClass = (status: string) => {
    const normalizedStatus = status.toLowerCase();
    if (normalizedStatus === "paid") {
      return "bg-green-100 text-[#04A755]";
    } else if (normalizedStatus === "pending") {
      return "bg-yellow-100 text-[#F9C80E]";
    }
    return "bg-gray-100 text-gray-800";
  };

  const formatValue = (key: string, value: string | number): string => {
    if (key.toLowerCase() === "amount" && typeof value === "number") {
      return `$${value}`;
    }
    if (
      key.toLowerCase() === "order" &&
      typeof value === "string" &&
      !value.startsWith("#")
    ) {
      return `#${value}`;
    }
    return String(value);
  };

  return (
    <div className=" rounded-xl p-6 mb-5" style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)' }}>
      {/* Header Section */}
      <div className="flex flex-col md:flex-row gap-3 md:items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        <div>
          <input
            type="date"
            className="w-[200px] h-[44px] rounded-lg border border-gray-300 px-4 py-2"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-x-auto">
        {/* Table Container with minimum width */}
        <div className="min-w-max">
          {/* Table Header */}
          <div className="bg-[#08A270] text-white">
            <div
              className="grid gap-4 px-6 py-4"
              style={{
                gridTemplateColumns: `repeat(${columns.length}, minmax(120px, 1fr))`,
              }}
            >
              {columns.map((column) => (
                <div
                  key={column.key}
                  className="font-medium text-sm whitespace-nowrap"
                >
                  {column.label}
                </div>
              ))}
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {data.length === 0 ? (
              <div className="px-6 py-8 text-center text-gray-500">
                No data available
              </div>
            ) : (
              data.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className="grid gap-4 px-6 py-4 hover:bg-gray-50 transition-colors"
                  style={{
                    gridTemplateColumns: `repeat(${columns.length}, minmax(120px, 1fr))`,
                  }}
                >
                  {columns.map((column) => {
                    const value = row[column.key];
                    const isStatusColumn =
                      column.key.toLowerCase() === statusKey.toLowerCase();
                    const isActionColumn = column.isAction;

                    return (
                      <div
                        key={column.key}
                        className={`text-sm text-gray-700 whitespace-nowrap`}
                      >
                        {isActionColumn ? (
                          <button
                            onClick={() => onActionClick?.(row, rowIndex)}
                            className="w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors cursor-pointer"
                            aria-label="View details"
                          >
                            <Info className="w-4 h-4 text-gray-600" />
                          </button>
                        ) : isStatusColumn && typeof value === "string" ? (
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(
                              value
                            )}`}
                          >
                            {value}
                          </span>
                        ) : (
                          <span>{formatValue(column.key, value)}</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
