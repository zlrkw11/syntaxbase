// 实现 MyReturnType：从函数类型中提取返回类型
// 注意：添加 export 使文件成为模块，避免与其他文件的变量名冲突
export type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : never;

export const fn = (v: boolean) => {
  if (v) return 1;
  else return 2;
};

export type a = MyReturnType<typeof fn>; // 应推导出 1 | 2

// 验证类型
export const test: a = 1; // ✅ 正确
export const test2: a = 2; // ✅ 正确
// const test3: a = 3; // ❌ 错误：Type '3' is not assignable to type '1 | 2'
