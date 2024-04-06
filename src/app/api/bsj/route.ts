import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export function GET(req: NextRequest): NextResponse {
  const month = req.nextUrl.searchParams.get("month");
  const width = req.nextUrl.searchParams.get("width");
  const height = req.nextUrl.searchParams.get("height");

  const filePath = path.resolve(".", "public", "bisyojo_chan.png");
  const image = fs.readFileSync(filePath);

  const headers = new Headers();
  headers.set("Content-Type", "image/png");

  return new NextResponse(image, { status: 200, headers: headers });
}
