import {
  AVAILABLE_MONTHS,
  DEFAULT_IMAGE_FILENAME,
  FILENAME_PREFIX,
} from "@/constants/api";
import { createImageDataObject } from "./createImageDataObject";

const defaultImageData = createImageDataObject(
  "default",
  DEFAULT_IMAGE_FILENAME
);

/**
 * IDに基づいて、対象となる画像情報を計算して返す
 * @param id - "1", "random", "current", "default" など
 */
export function getImageDataById(id: string) {
  if (id === "random") {
    const randomMonth =
      AVAILABLE_MONTHS[Math.floor(Math.random() * AVAILABLE_MONTHS.length)];
    const monthNumber = String(randomMonth).padStart(2, "0");
    const fileName = `${FILENAME_PREFIX}${monthNumber}.png`;
    return createImageDataObject(randomMonth, fileName);
  }

  if (id === "current") {
    const month = new Date().getMonth() + 1;
    if (AVAILABLE_MONTHS.includes(month)) {
      const monthNumber = String(month).padStart(2, "0");
      const fileName = `${FILENAME_PREFIX}${monthNumber}.png`;
      return createImageDataObject(month, fileName);
    } else {
      return defaultImageData;
    }
  }

  if (id === "default") {
    return defaultImageData;
  }

  const numericId = parseInt(id, 10);
  if (!isNaN(numericId) && numericId >= 1 && numericId <= 12) {
    if (AVAILABLE_MONTHS.includes(numericId)) {
      // 存在する場合：その月の画像データを返す
      const monthNumber = String(numericId).padStart(2, "0");
      const fileName = `${FILENAME_PREFIX}${monthNumber}.png`;
      return createImageDataObject(numericId, fileName);
    } else {
      // 存在しない場合：デフォルトの画像データを返す
      return defaultImageData;
    }
  }

  // マッチしない場合はnullを返す（あるいはデフォルトを返す）
  return null;
}
