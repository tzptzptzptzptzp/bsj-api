import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const param = request.nextUrl.searchParams.get("param");
  console.log(param);
  return Response.json({ param }, { status: 200 });
}
