# TypeScript 变量重复声明问题解决方案

## 问题原因

在 TypeScript 中，**如果文件不是模块**（没有 `import` 或 `export`），它们会在**全局作用域**中共享变量，导致变量名冲突。

## 解决方案

### ✅ 方案 1: 使用模块（推荐）

**在每个文件顶部添加 `export` 语句**，使文件成为模块：

```typescript
// 文件: 0002.ts
export type MyReturnType<T> = ...;
export const fn = ...;
```

**优点：**
- 每个文件有独立作用域
- 避免全局污染
- 符合现代 TypeScript 最佳实践

### ✅ 方案 2: 使用不同的变量名

如果不想使用模块，使用更具体的变量名：

```typescript
// 文件 1
const returnTypeFn = ...;

// 文件 2  
const pickFn = ...;
```

### ✅ 方案 3: 使用命名空间

```typescript
namespace Challenge0002 {
  export const fn = ...;
}

namespace Challenge0004 {
  export const fn = ...;
}
```

## 关键概念

### 模块 vs 脚本

- **模块**：文件中有 `import` 或 `export` → 独立作用域 ✅
- **脚本**：文件中没有 `import` 或 `export` → 全局作用域 ❌

### 类型可以重复（声明合并）

```typescript
// ✅ 接口可以重复声明，会合并
interface A { x: number; }
interface A { y: string; } // 合并为 { x: number; y: string; }

// ❌ 但 type 在同一个文件中不能重复
type B = { x: number; };
// type B = { y: string; }; // 错误！
```

## 实际应用

对于 type-challenges 练习：

1. **每个挑战文件添加 `export`**，使其成为模块
2. **使用描述性的变量名**，如 `testFn`, `exampleFn`
3. **类型工具可以导出**，方便在其他文件中使用

## 示例

```typescript
// ✅ 正确：模块文件
export type MyReturnType<T> = ...;
export const testFn = (v: boolean) => { ... };

// ❌ 错误：脚本文件（全局作用域）
const fn = (v: boolean) => { ... }; // 如果其他文件也有 fn，会冲突
```

