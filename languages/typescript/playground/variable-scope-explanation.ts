/**
 * TypeScript 变量作用域和重复声明规则
 * 
 * 问题：为什么不能有相同的变量？同一个 repo
 */

// ============================================
// 情况 1: 同一个文件内 - 不能重复声明
// ============================================
// 注意：这个文件已经是模块（因为有 export），所以变量不会与其他文件冲突
const exampleFn = (v: boolean) => {
  if (v) return 1;
  else return 2;
};

// ❌ 错误：Cannot redeclare block-scoped variable 'fn'
// const exampleFn = (x: number) => x * 2;

// ✅ 正确：使用不同的变量名
const exampleFn2 = (x: number) => x * 2;

// ============================================
// 情况 2: 不同文件之间 - 取决于是否是模块
// ============================================

// 文件 A (没有 import/export) - 全局作用域
// const globalVar = "hello"; // 如果在多个文件中都这样声明，会冲突

// 文件 B (没有 import/export) - 全局作用域
// const globalVar = "world"; // ❌ 错误：重复声明

// ============================================
// 解决方案 1: 使用模块（推荐）
// ============================================
// 只要文件中有 import 或 export，它就是模块，有自己的作用域

// 文件 A: myModuleA.ts
export const fnA = (v: boolean) => {
  if (v) return 1;
  else return 2;
};

// 文件 B: myModuleB.ts
export const fnB = (x: number) => x * 2; // ✅ 可以，因为不同模块

// ============================================
// 解决方案 2: 使用命名空间
// ============================================
namespace ModuleA {
  export const fn = (v: boolean) => {
    if (v) return 1;
    else return 2;
  };
}

namespace ModuleB {
  export const fn = (x: number) => x * 2; // ✅ 可以，因为不同命名空间
}

// 使用：
const result1 = ModuleA.fn(true);
const result2 = ModuleB.fn(5);

// ============================================
// 解决方案 3: 使用立即执行函数 (IIFE)
// ============================================
const ModuleC = (() => {
  const fn = (v: boolean) => {
    if (v) return 1;
    else return 2;
  };
  return { fn };
})();

const ModuleD = (() => {
  const fn = (x: number) => x * 2;
  return { fn };
})();

// ============================================
// 类型声明可以重复（声明合并）
// ============================================
// 类型和接口可以多次声明，TypeScript 会合并它们
// 注意：在同一个文件中，type 不能重复声明，但 interface 可以
interface MyInterfaceExample {
  name: string;
}

interface MyInterfaceExample {
  age: number; // ✅ 可以，会合并为 { name: string; age: number; }
}

// type 在同一个文件中不能重复声明
type MyTypeExample = {
  name: string;
  age: number; // 必须在同一个声明中
};

interface MyInterface {
  x: number;
}

interface MyInterface {
  y: string; // ✅ 可以，会合并为 { x: number; y: string; }
}

// ============================================
// 实际建议
// ============================================
/*
 * 1. 总是使用模块（添加 export）
 *    - 每个文件都有自己的作用域
 *    - 避免全局污染
 *    - 更好的代码组织
 * 
 * 2. 使用有意义的变量名
 *    - 避免使用 fn, a, b 等通用名称
 *    - 使用描述性的名称，如 getReturnType, calculateSum
 * 
 * 3. 使用命名空间组织相关代码
 *    - 当需要将相关功能分组时
 * 
 * 4. 类型可以重复声明（声明合并）
 *    - 但变量、函数、常量不能重复
 */

// ============================================
// 检查当前文件是否是模块
// ============================================
// 如果文件中有以下任何一项，它就是模块：
// - import 语句
// - export 语句
// 
// 否则，它是脚本文件，变量在全局作用域

// 当前文件是模块（因为有 export 或 import）
// 所以这里的变量不会与其他文件的变量冲突

