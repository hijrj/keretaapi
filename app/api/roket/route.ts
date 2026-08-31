import { NextResponse } from "next/server";

export async function GET(request: Request) {

  const { searchParams } = new URL(request.url);

  const storeId = searchParams.get("storeId");

  if (!storeId) {
    return NextResponse.json({
      success: false,
      message: "storeId wajib diisi"
    });
  }


  const response = await fetch(
    `https://app.alfastore.co.id/prd/api/so/utility/get_jadwal?storeId=${storeId}`,
    {
      method: "GET",
      headers: {
        "App-Name": "SO-PDA",
        "Version-App": "V.2026.04.13.01-alfa",
        "Version-Code": "28",
        "Api-Key": "iVOZX9MLmKrj1L8R23uF1aryMR1vGMXG",
        "User-Agent":
          "Dalvik/2.1.0 (Linux; U; Android 11; PM75 Build/RKQ1.210518.002)"
      }
    }
  );


  const data = await response.text();


  return new NextResponse(data, {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });

}
