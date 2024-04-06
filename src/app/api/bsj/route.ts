import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import sharp from "sharp";

export async function GET(req: NextRequest): Promise<NextResponse> {
  const month = req.nextUrl.searchParams.get("month");
  const size = req.nextUrl.searchParams.get("size");

  const headers = new Headers();
  headers.set("Content-Type", "image/png");

  const filePath = path.resolve(".", "public", "bisyojo_chan.png");
  const image = fs.readFileSync(filePath);

  if (size) {
    try {
      const resizeImage = await sharp(image)
        .resize({
          width: parseInt(size),
          height: parseInt(size),
          fit: "fill",
        })
        .toBuffer();
      return new NextResponse(resizeImage, { status: 200, headers: headers });
    } catch (err) {
      console.error("Error:", err);
    }
  }

  return new NextResponse(image, { status: 200, headers: headers });
}
