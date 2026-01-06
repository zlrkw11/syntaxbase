// 实现 MyReturnType：从函数类型中提取返回类型
type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : never;

const fn = (v: boolean) => {
  if (v) return 1;
  else return 2;
};

type a = MyReturnType<typeof fn>; // 应推导出 1 | 2

// 验证类型
const test: a = 1; // ✅ 正确
const test2: a = 2; // ✅ 正确
// const test3: a = 3; // ❌ 错误：Type '3' is not assignable to type '1 | 2'
