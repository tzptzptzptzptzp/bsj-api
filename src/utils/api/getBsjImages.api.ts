import { API_BASE_URL } from "@/constants/api";
import { BsjImageType } from "@/types/bsjImage.type";
import { ofetch } from "ofetch";

/**
 * 指定されたIDに基づいて画像情報を取得する
 * APIの戻り値が単一オブジェクトでも、必ず配列の形式で返すように正規化する
 * @param id - 'all', 'random', 'current', 1-12 など
 * @returns 画像情報オブジェクトの配列を返すPromise
 */
export const getBsjImages = async (
  id: string | number
): Promise<BsjImageType[]> => {
  try {
    // APIからデータを取得する;
    const data = await ofetch<BsjImageType | BsjImageType[]>(
      `${API_BASE_URL}/api/bsj/json/${id}`
    );

    // 配列の場合はそのまま返し、オブジェクトの場合は配列に格納して返す
    return Array.isArray(data) ? data : [data];
  } catch (error) {
    // APIからのレスポンスがエラーだった場合
    console.error(`Failed to fetch image data for id: ${id}`, error);
    // エラー時は空の配列を返すことで、呼び出し元でのエラーを回避
    return [];
  }
};
