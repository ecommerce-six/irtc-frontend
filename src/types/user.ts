import { coursePreviewType } from "./course";

export type userType = {
  id: number;
  email: string;
  lastName: string;
  firstName: string;
  createdAt: number;
  coverImage: string;
  phoneNumber: string;
  description: string;
  profileImage: string;
  cart?: coursePreviewType[];
  emailVerified?: boolean;
  phoneNumberVerified?: boolean;
  confirmEmail?: boolean;
  confirmPhoneNumber?: boolean;
  role: "admin" | "user" | string;
};

export type userFilterType = {
  name: string;
  phoneNumber: string;
  role: "admin" | "user" | string;
};

export type userGenderType = "male" | "female" | "others";

export type userStoreType = null | userType | undefined;
