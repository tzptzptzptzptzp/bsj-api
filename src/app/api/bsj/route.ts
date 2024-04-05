import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const month = req.nextUrl.searchParams.get("month");
  const width = req.nextUrl.searchParams.get("width");
  const height = req.nextUrl.searchParams.get("height");
  console.log(month, width, height);
  return Response.json({ month, width, height }, { status: 200 });
}
