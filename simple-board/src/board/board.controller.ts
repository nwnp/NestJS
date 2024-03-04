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
  @Get()
  findAll() {
    return 'findall';
  }

  @Get(':id')
  find(@Param('id') id: number) {
    return 'find';
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
