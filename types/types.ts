import { TableItem } from "@/components/reusable/reuseable-table";

export interface TableRowItem extends TableItem {
  id?: string | number;
  date?: string;
  donor?: string;
  message?: string;
  stock?: string;
  status?: string;
}
