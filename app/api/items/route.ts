// pages/api/data.js
import fs from "fs";
import path from "path";
import Papa from "papaparse";

export async function GET() {
  // 设置文件路径
  const csvFile = fs.readFileSync("nasdaq.csv", "utf8");
  const parsedData = Papa.parse(csvFile, {
    header: true,
    dynamicTyping: true,
  });

  return Response.json({ parsedData });
}
