export type coursePreviewType = {
  id?: number;
  rate: number;
  slug: string;
  cover: string;
  price: number;
  title: string;
  duration: string;
  description?: string;
  membersCount: number;
  shortDescription: string;
  recordingFinished: boolean;
  isInstallmentAvailable: boolean;
};
