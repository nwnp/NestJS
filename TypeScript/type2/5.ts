export {};

function f1(): void {
  console.log("hello");
}

function f2(): never {
  throw new Error("some error");
}

function f3(): never {
  while (true) {}
}
