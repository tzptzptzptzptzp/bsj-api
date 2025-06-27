import { AVAILABLE_MONTHS, FILENAME_PREFIX } from "@/constants/api";
import { createImageDataObject } from "./createImageDataObject";

/**
 * 利用可能な全ての画像情報のリストを生成して返す
 */
export function getAvailableImageDataList() {
  const imageDataList = AVAILABLE_MONTHS.map((month) => {
    const monthNumber = String(month).padStart(2, "0");
    const fileName = `${FILENAME_PREFIX}${monthNumber}.png`;
    return createImageDataObject(month, fileName);
  });
  return imageDataList;
}
