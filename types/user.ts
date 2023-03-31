import { coursePreviewType } from "./course";

export type userType = {
  email?: string;
  lastName?: string;
  firstName?: string;
  createdAt?: number;
  coverImage?: string;
  phoneNumber?: string;
  description?: string;
  profileImage?: string;
  cart?: coursePreviewType[];
  emailVerified?: boolean;
  phoneNumberVerified?: boolean;
  role: "admin" | "author" | "user" | string;
};

export type userFilterType = {
  name: string;
  role: string;
  phoneNumber: string;
};

export type userStoreType = null | undefined | userType;
