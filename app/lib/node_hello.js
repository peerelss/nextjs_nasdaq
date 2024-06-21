import fs from "fs";
import Papa from "papaparse";
export async function csv2json() {
  const csvFile = fs.readFileSync("nasdaq.csv", "utf8");
  const parsedData = Papa.parse(csvFile, {
    header: true,
    dynamicTyping: true,
  });
  const result = [];
  for (let i = 0; i < parsedData.data.length; i++) {
    result.push([
      moment(parsedData.data[i]["Date"], "MM/DD/YYYY"),
      parsedData.data[i]["Open"],
    ]);
  }
  const monthlyData = {};
  result.forEach(([dateString, value]) => {
    const month = parseDate(dateString);
    if (!monthlyData[month]) {
      monthlyData[month] = { sum: 0, count: 0 };
    }
    monthlyData[month].sum += value;
    monthlyData[month].count += 1;
  });
  const monthlyAverages = Object.keys(monthlyData).map((month) => {
    const { sum, count } = monthlyData[month];
    return {
      month: month,
      average: sum / count,
    };
  });

  return monthlyAverages;
}
csv2json();