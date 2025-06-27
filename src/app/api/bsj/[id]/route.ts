import { NextRequest, NextResponse } from "next/server";
import { unstable_noStore as noStore } from "next/cache";
import { getImageDataById } from "../../utils/getImageDataById";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  noStore();
  const imageData = getImageDataById(params.id);

  if (!imageData) {
    return NextResponse.json({ error: "Not Found" }, { status: 404 });
  }

  return NextResponse.redirect(imageData.path);
}
