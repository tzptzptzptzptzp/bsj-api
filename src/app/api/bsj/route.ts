import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { createImageName } from "@/utils/createImageName.util";
import { getCurrentMonth } from "@/utils/getCurrentMonth.util";
import { resizeImage } from "@/utils/resizeImage.util";

const defaultImageName = createImageName("0");
const defaultImagePath = path.resolve(".", "public", defaultImageName);
const defaultImage = fs.readFileSync(defaultImagePath);

export async function GET(req: NextRequest): Promise<NextResponse> {
  const month = req.nextUrl.searchParams.get("month");
  const size = req.nextUrl.searchParams.get("size");

  const headers = new Headers();
  headers.set("Content-Type", "image/png");

  const successOptions = {
    status: 200,
    headers: headers,
  };

  const imageName = month
    ? createImageName(month)
    : createImageName(getCurrentMonth());

  const filePath = path.resolve(".", "public", imageName);

  if (fs.existsSync(filePath)) {
    const image = fs.readFileSync(filePath);
    if (size) {
      try {
        const resizedImage = await resizeImage(image, size);
        return new NextResponse(resizedImage, successOptions);
      } catch (err) {
        console.error("Error:", err);
      }
    } else {
      return new NextResponse(image, { status: 200, headers: headers });
    }
  }
  return new NextResponse(defaultImage, { status: 200, headers: headers });
}
