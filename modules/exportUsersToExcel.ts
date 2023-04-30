import * as XLSX from "xlsx";
import { userType } from "../types/user";
import { deleteProperties } from "./deleteProperties";

export const exportToExcel = (users: userType[]) => {
  const excelUsers: userType[] = [...users];

  excelUsers.forEach((item) => {
    const propertiesToDelete = ["cart", "profileImage", "coverImage", "description"];

    deleteProperties(item, propertiesToDelete);
  });

  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.json_to_sheet(excelUsers);

  const columnsArray = ["A1", "B1", "C1", "D1", "E1", "F1", "G1", "H1", "I1"];

  const columnsArrayValue = [
    "ایدی",
    "نام",
    "نام خانوادگی",
    "ایمیل تایید شده؟",
    "ایمیل",
    "شماره تایید شده؟",
    "شماره همراه",
    "نقش",
    "تاریخ پیوستن",
  ];

  columnsArray.forEach((item, index) => {
    ws[item].v = columnsArrayValue[index];
  });

  const wscols = [
    { wch: 7 },
    { wch: 12 },
    { wch: 18 },
    { wch: 12 },
    { wch: 26 },
    { wch: 12 },
    { wch: 14 },
    { wch: 6 },
    { wch: 23 },
  ];

  ws["!cols"] = wscols;

  XLSX.utils.book_append_sheet(wb, ws, "کاربر ها");

  XLSX.writeFile(wb, "irtc-users.xlsx");
};
