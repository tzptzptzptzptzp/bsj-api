import { IMAGE_BASE_URL } from "@/constants/api";

export const createImageDataObject = (
  month: number | "default",
  fileName: string
) => ({
  month,
  fileName,
  path: `${IMAGE_BASE_URL}/${fileName}`,
});
