import { NextRequest, NextResponse } from "next/server";
import { unstable_noStore as noStore } from "next/cache";
import { getCurrentMonth } from "@/utils/getCurrentMonth.util";
import {
  AVAILABLE_IMAGE_FILENAMES,
  DEFAULT_IMAGE_FILENAME,
  IMAGE_BASE_URL,
} from "@/constants/api";

/**
 * APIリクエストに応じて、R2上の画像URLへリダイレクトする
 * @param req - Next.jsのリクエストオブジェクト
 * @param params - URLの動的セグメント（例: { id: 'random' }）
 * @returns 画像URLへのリダイレクトレスポンス
 */
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  // Vercelのデータキャッシュを無効化し、リクエストごとに動的な処理を保証する
  // 実際のコンテンツキャッシュは、リダイレクト先のCDN（Cloudflare）に完全に委ねる
  noStore();

  const resourceId = params.id;
  let targetImageFilename: string;

  // リクエストIDを解析し、対象となる画像ファイル名を決定する
  if (resourceId === "random") {
    // 利用可能な画像リストからランダムに一つを選択する
    const randomIndex = Math.floor(
      Math.random() * AVAILABLE_IMAGE_FILENAMES.length
    );
    targetImageFilename = AVAILABLE_IMAGE_FILENAMES[randomIndex];
  } else if (resourceId === "current") {
    // 現在の月に対応するファイル名を生成する
    const month = getCurrentMonth();
    const potentialFilename = `${month}.png`;
    // ただし、その月の画像が存在するかをリストで確認し、なければデフォルトを使用する
    targetImageFilename = AVAILABLE_IMAGE_FILENAMES.includes(potentialFilename)
      ? potentialFilename
      : DEFAULT_IMAGE_FILENAME;
  } else if (resourceId === "default") {
    // 明示的にデフォルト画像が要求された場合
    targetImageFilename = DEFAULT_IMAGE_FILENAME;
  } else if (AVAILABLE_IMAGE_FILENAMES.includes(`${resourceId}.png`)) {
    // 1-12などの有効なIDが指定された場合
    targetImageFilename = `${resourceId}.png`;
  } else {
    // 上記のいずれにも一致しない無効なIDの場合は、デフォルトにフォールバックする
    targetImageFilename = DEFAULT_IMAGE_FILENAME;
  }

  // ベースURLと決定したファイル名を結合して、最終的なリダイレクト先URLを構築する
  const redirectUrl = new URL(`${IMAGE_BASE_URL}/${targetImageFilename}`);

  // 元のリクエストに含まれる 'size' クエリパラメータをリダイレクト先URLに引き継ぐ
  // これにより、将来的にリダイレクト先でCloudflare Imagesなどの画像処理サービスを使う場合にも対応できる
  const size = req.nextUrl.searchParams.get("size");
  if (size) {
    redirectUrl.searchParams.set("size", size);
  }

  // 構築したURLへ307 Temporary Redirectレスポンスを返す
  return NextResponse.redirect(redirectUrl);
}
