import { coursePreviewType } from "./course";

export type userType = {
  email: string;
  lastName: string;
  password?: string;
  firstName?: string;
  createdAt?: number;
  coverImage: string;
  phoneNumber: string;
  description?: string;
  profileImage?: string;
  cart?: coursePreviewType[];
  emailVerified?: boolean;
  phoneNumberVerified?: boolean;
  role: "admin" | "author" | "user";
};

export type userFilterType = {
  name: string;
  role: string;
  phoneNumber: string;
};
