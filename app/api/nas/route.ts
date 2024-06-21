import fs from "fs";
import Papa from "papaparse";
import { csv2json } from "../../lib/read_csv";
export async function GET() {
  const data = await csv2json();
  return Response.json({ data });
}
