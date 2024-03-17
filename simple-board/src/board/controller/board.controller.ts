import { BoardService } from './../service/board.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get()
  findAll() {
    return this.boardService.findAll();
  }

  @Get(':id')
  find(@Param('id') id: number) {
    return this.boardService.find(id);
  }

  @Post()
  create(@Body() data: string) {
    return 'create';
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: string) {
    return;
  }

  @Delete(':id')
  remove() {
    return 'delete';
  }
}
