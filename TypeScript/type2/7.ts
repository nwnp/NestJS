export {};

/* union type과 intersection type */
// 여러 타입과 교집합과 합집합을 표현할 수 있음
let v1: (1 | 3 | 5) & (3 | 5 | 7);
console.log(v1);
