// 1. ---------------------------------------------------------------------
interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}

function formatUser(user: User): string {
  return `Name: ${user.name}, Age: ${user.age}, Admin: ${
    user.isAdmin ? "Yes" : "No"
  }`;
}

const user1 = { name: "Nickolas", age: 23, isAdmin: true };
console.log(formatUser(user1));

// 2. ---------------------------------------------------------------------
function reverseArray<T>(array: T[]): T[] {
  return array.slice().reverse();
}

console.log(reverseArray([1, 2, 3, 4]));

// 3. ---------------------------------------------------------------------
function fibonacci(n: number): number[] {
  if (n <= 0) return [];
  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence.slice(0, n);
}

console.log(fibonacci(8));

// 4. ---------------------------------------------------------------------
function countWords(text: string): number {
  if (!text.trim()) return 0;
  return text.trim().split(/\s+/).length;
}

console.log(countWords("Hello world! This is a test."));

// 5. ---------------------------------------------------------------------
function findMax(array: number[]): number | null {
  if (array.length === 0) return null;
  return Math.max(...array);
}

console.log(findMax([1, 2, 3, 99, 5]));

// 6. ---------------------------------------------------------------------
function transformArray<T>(array: T[]): T[] {
  return array.map((item) => {
    if (typeof item === "number") {
      return ((item as number) * 2) as T;
    } else if (typeof item === "string") {
      return (item as string).toUpperCase() as T;
    }
    return item;
  });
}

console.log(transformArray([1, 2, 3]));
console.log(transformArray(["a", "b", "c"]));
