## Service

```
NestJs의 서비스는 일반적인 비즈니스 로직을 담당하며
컨트롤러가 클라이언트의 요청을 처리하는데 필요한 작업을 처리한다
데이터베이스의 데이터를 가져오거나 외부 API 호출 등의 데이터를 처리한다
```

### Service 예시

**`app.service.ts`**

- **`@Injectable 데코레이터`** 사용 → 클래스가 주입가능한 상태로 변환

```tsx
@Injectable()
export class AppService {
  getHello(): string {
    return "Hello World";
  }
}
```

**`service를 controller에서 사용하기`**

```tsx
@Controller()
export class AppController {
  constructor(private readonly appSerivce: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
```
