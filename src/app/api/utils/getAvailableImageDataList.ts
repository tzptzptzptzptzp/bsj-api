import {
  AVAILABLE_MONTHS,
  FILENAME_PREFIX,
  DEFAULT_IMAGE_FILENAME,
} from "@/constants/api";
import { createImageDataObject } from "./createImageDataObject";

/**
 * 利用可能な全ての画像情報のリストを生成して返す
 * 全12ヶ月分を返し、存在しない月はデフォルトの画像情報で補完する
 * @returns {Array} 画像情報オブジェクトの配列
 */
export function getAvailableImageDataList() {
  // デフォルトの画像データオブジェクトを作成
  const defaultImageData = createImageDataObject(
    "default",
    DEFAULT_IMAGE_FILENAME
  );

  // 12までの配列を生成し、各月について処理を行う
  const fullImageDataList = Array.from({ length: 12 }, (_, index) => {
    const month = index + 1;

    // その月の画像が利用可能リスト（AVAILABLE_MONTHS）に含まれているかチェック
    if (AVAILABLE_MONTHS.includes(month)) {
      // 存在する場合：その月の画像データを生成する
      const monthNumber = String(month).padStart(2, "0");
      const fileName = `${FILENAME_PREFIX}${monthNumber}.png`;
      return createImageDataObject(month, fileName);
    } else {
      // 存在しない場合：デフォルトの画像データを返す
      return { ...defaultImageData, month: month };
    }
  });

  return fullImageDataList;
}
