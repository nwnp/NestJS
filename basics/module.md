## Module

```
NestJs는 모듈 기반의 아키텍처로 구성되어 있다
각각의 기능 또는 비즈니스 로직을 독립적인 모듈로 분리하여 관리할 수 있으며, 이는 재사용성과 유지관리성을 향상시킬 수 있다
```

```tsx
import { Module } from "@nestjs/common";
import { CatsController } from "./cats.controller";
import { CatsService } from "./cats.service";

@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
```

### providers

- 모듈이 생성하고, 의존성 주입 컨테이너에 추가할 클래스 인스턴스 또는 값의 배열
- 주로 **`서비스`**와 **`리포지토리`** 등이 여기에 포함됨

### controllers

- 모듈이 정의하는 **`컨트롤러`**의 배열
- 컨트롤러의 요청을 처리하고 적절한 응답을 반환하는 역할

### imports

- 모듈이 의존하는 **`다른 모듈`**의 배열
- 현재 모듈의 providers와 controllers가 사용할 수 있도록 제공

### exports

모듈에서 제공하며, 다른 모듈에서 import하여 사용할 수 있는 providers의 배열

## 기능 모듈(Feature Modules)

- 애플리케이션의 특정 기능을 **`캡슐화`**
  예) 사용자 관리, 상품 관리, 주문 처리 등 특정 기능에 대해 컨트롤러, 서비스, 리포지토리 등을 그룹화

  ```tsx
  import { Module } from "@nestjs/common";
  import { UseresController } from "./users.controller";
  import { UsersService } from "./users.service";

  @Module({
    controllers: [UsersController],
    providers: [UsersService],
  })
  export class UsersModule {}
  ```

## 공유 모듈(Shared Modules)

- 애플리케이션 전반에 공유되는 기능을 제공
  예) 데이터베이스 접속, 로깅 인증 등 공통적인 작업을 수행하는 기능들을 Shared 모듈로 구성할 수 있음

  ```tsx
  import { Module } from "@nestjs/common";
  import { DatabaseService } from "./database.service";

  @Module({
    providers: [DatabaseService],
    exports: [DatabaseService],
  })
  export class DatabaseModule {}
  ```

## Global Decorator

- 애플리케이션 전역적으로 사용되는 모듈이라면 Global 데코레이터를 통해 전역적으로 설정 가능
- Global 데코레이터가 명시되어 있는 모듈은 imports 없이 사용 가능
- Global 데코레이터는 보통 애플리케이션의 루트나 코어 부분에 구현

  ```tsx
  import { Module, Global } from "@nestjs/common";
  import { DatabaseService } from "./database.service";

  @Global()
  @Module({
    providers: [DatabaseService],
    exports: [DatabaseService],
  })
  export class DatabaseModule {}
  ```
