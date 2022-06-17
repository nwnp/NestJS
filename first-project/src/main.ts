import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/exceptions/http-exception.filter';
import * as expressBasicAuth from 'express-basic-auth';
import * as path from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());
  app.use(
    ['/docs', '/docs-json'],
    expressBasicAuth({
      challenge: true,
      users: {
        [process.env.SWAGGER_USER]: process.env.SWAGGER_PASSWORD,
      },
    }),
  );
  /* static middleware */
  // 이 미들웨어를 등록해주기 위해서는 NestExpressApplication을 명시해줘야함
  app.useStaticAssets(path.join(__dirname, './common', 'uploads'), {
    // http://localhost:8080/media/cats/xxx.png로 접근할 수 있음
    // 없으면 http://localhost:8080/cats/xxx.png
    prefix: '/media',
  });
  const PORT = process.env.PORT;

  // Fastify setup
  const config = new DocumentBuilder()
    .setTitle('Cats Docs')
    .setDescription('cat')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document); // swagger endpoint setup

  await app.listen(PORT);
}

bootstrap();
