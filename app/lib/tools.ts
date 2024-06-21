// 处理数据 对于长数组，定义为size一组，
function average(arr) {
  return arr.reduce((acc, val) => acc + val, 0) / arr.length;
}
export function calculateAverages(data, groupSize) {
  let result = [];
  for (let i = 0; i < data.length; i += groupSize) {
    // 获取当前分组，即使组不完整，也会处理剩余的所有元素
    let group = data.slice(i, i + groupSize);
    // 计算当前分组的平均值
    let avg = average(group);
    // 将平均值添加到结果数组
    result.push(avg);
  }
  return result;
}
