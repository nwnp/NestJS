## DI(Dependency Injection, 의존성 주입)

```
소프트웨어 엔지니어링 디자인 패턴 중 하나
특정 클래스가 의존하고 있는 다른 클래스나 컴포넌트를 직접 만들지 않고, 외부에서 주입받아 사용하는 방식
**모듈간의 높은 결합도를 줄이고, 유연성과 재사용성을 높이고자** 나온 패턴
```

### DI 동작 방식

1. 클래스는 필요한 의존성을 명시적으로 정의
2. DI 컨테이너 또는 IoC(Inversion of Control) 컨테이너는 이러한 의존성을 관리한다
   1. 이 컨테이너는 필요한 의존성을 찾아서 인스턴스를 생성하고, 이를 요청한 클래스에 주입한다
3. 클래스는 직접적으로 의존성을 생성하거나 관리할 필요 없이 해당 의존성을 사용할 수 있게 된다

### NestJS DI

```tsx
import { Cat } from "./interfaces/cat.interface";
import { CatsService } from "./cats.service";
import { Controller, Get } from "@nestjs/common";

@Controller("cats")
export class CatsController {
  constructor(private catsService: CatsService) {} // DI

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
```

- CatService의 인스턴스는 NestJS 프레임워크에서 생성하여 CatController에 주입
- 의존성주입은 단위 테스트에 용이
  ➡️ 단, module에 providers에 명시되지 않은 service는 의존성 주입이 되지 않는다
