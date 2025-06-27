import { NextRequest, NextResponse } from "next/server";
import { unstable_noStore as noStore } from "next/cache";
import { getImageDataById } from "@/app/api/utils/getImageDataById";
import { getAvailableImageDataList } from "@/app/api/utils/getAvailableImageDataList";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  noStore();
  const { id } = params;

  // 'all' が指定された場合は、リストを返す関数を呼ぶ
  if (id === "all") {
    const allImageData = getAvailableImageDataList();
    return NextResponse.json(allImageData);
  }

  // それ以外のIDの場合は、単一データを取得する関数を呼ぶ
  const imageData = getImageDataById(id);

  if (!imageData) {
    return NextResponse.json({ error: "Not Found" }, { status: 404 });
  }

  return NextResponse.json(imageData);
}
