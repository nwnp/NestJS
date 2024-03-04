import { Module } from '@nestjs/common';
import { BoardController } from './board.controller';

@Module({
  imports: [],
  controllers: [BoardController],
  providers: [],
})
export class BoardModule {}
