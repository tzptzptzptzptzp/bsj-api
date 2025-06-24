import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { createImageName } from "@/utils/createImageName.util";
import { getCurrentMonth } from "@/utils/getCurrentMonth.util";
import { resizeImage } from "@/utils/resizeImage.util";

const defaultImageName = createImageName("0");
const defaultImagePath = path.resolve(".", "public", defaultImageName);
const defaultImage = fs.readFileSync(defaultImagePath);

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  const resourceId = params.id;
  const size = req.nextUrl.searchParams.get("size");

  const headers = new Headers();
  headers.set("Content-Type", "image/png");

  const successOptions = {
    status: 200,
    headers: headers,
  };

  if (resourceId === "default") {
    return new NextResponse(defaultImage, successOptions);
  }

  let month: string;

  if (resourceId === "random") {
    const publicDir = path.resolve(".", "public");
    const availableMonths: string[] = [];

    for (let i = 1; i <= 12; i++) {
      const monthStr = String(i);
      const imageName = createImageName(monthStr);
      if (fs.existsSync(path.join(publicDir, imageName))) {
        availableMonths.push(monthStr);
      }
    }

    if (availableMonths.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableMonths.length);
      month = availableMonths[randomIndex];
    } else {
      return new NextResponse(defaultImage, successOptions);
    }
  } else if (resourceId === "current") {
    month = getCurrentMonth();
  } else {
    month = resourceId;
  }

  const imageName = createImageName(month);
  const filePath = path.resolve(".", "public", imageName);

  if (fs.existsSync(filePath)) {
    const image = fs.readFileSync(filePath);
    if (size) {
      try {
        const resizedImage = await resizeImage(image, size);
        return new NextResponse(resizedImage, successOptions);
      } catch (err) {
        console.error("Error resizing image:", err);
        return new NextResponse(defaultImage, successOptions);
      }
    } else {
      return new NextResponse(image, successOptions);
    }
  }

  return new NextResponse(defaultImage, successOptions);
}
