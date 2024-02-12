## Controller

```
NestJs의 컨트롤러는 클라이언트의 요청을 받아 처리하고 응답을 반환하는 역할을 한다
REST API 엔드포인트를 노출하는데 사용된다
```

### Controller 사용 예시

```tsx
@Controller("hello")
export class HelloController {
  @Get()
  get(): string {
    return "get";
  }

  @Post()
  post(): string {
    return "post";
  }

  @Put()
  put(): string {
    return "put";
  }

  @Delete()
  delete(): string {
    return "delete";
  }
}
```

- **`@Contrller`** 데코레이터 사용
- 모든 표준 HTTP 메서드를 데코레이터로 제공
- 데코레이터 안에 문자열을 기입하면 해당 라우팅을 prefix로 동작한다

### 매개변수와 쿼리스트링

```tsx
// 예시: /hello/gildong?country=korea
@Get(':name')
get(
		@Param('name') name: string,
		@Query('country') country: string
	): string {
	return `my name is ${name} from ${country}`;
}
```
