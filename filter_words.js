const fs = require("fs");
const path = require("path");

const inputFile = path.join(__dirname, "30wChinsesSeqDic_clean.txt");
const outputFile = path.join(__dirname, "30wChinsesSeqDic_clean.txt");

console.log("开始处理文件...");

// 读取文件
const content = fs.readFileSync(inputFile, "utf-8");
const lines = content.split("\n");

// 过滤：只保留3个字及以上的词
const filteredLines = lines.filter((line) => {
  if (!line.trim()) return false; // 跳过空行

  const parts = line.trim().split(/\s+/);
  if (parts.length === 0) return false;

  const word = parts[0];
  // 计算字符长度（中文字符）
  return word.length > 2;
});

// 写入新文件
fs.writeFileSync(outputFile, filteredLines.join("\n"), "utf-8");

console.log(`处理完成！`);
console.log(`原始行数: ${lines.length}`);
console.log(`过滤后行数: ${filteredLines.length}`);
console.log(`删除行数: ${lines.length - filteredLines.length}`);
console.log(`输出文件: ${outputFile}`);
