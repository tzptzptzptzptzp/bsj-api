/**
 * 画像がホストされているCloudflare R2のベースURL
 */
export const IMAGE_BASE_URL = process.env.IMAGE_BASE_URL;

/**
 * APIのベースURL
 */
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";

/**
 * 画像ファイル名の共通接頭辞
 */
export const FILENAME_PREFIX = "bisyojo_chan_";

/**
 * R2に存在する画像の「月」の番号リスト
 */
export const AVAILABLE_MONTHS = [1, 2, 6, 7, 10, 11, 12];

/**
 * R2に配備されている、配信対象の画像ファイル名のリスト
 */
export const AVAILABLE_IMAGE_FILENAMES = AVAILABLE_MONTHS.map((month) => {
  const monthNumber = String(month).padStart(2, "0");
  return `${FILENAME_PREFIX}${monthNumber}.png`;
});

/**
 * フォールバック時に使用されるデフォルトの画像ファイル名
 */
export const DEFAULT_IMAGE_FILENAME = `${FILENAME_PREFIX}00.png`;
