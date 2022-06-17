import { ApiOperation } from '@nestjs/swagger';
import { CommentsService } from './../services/comments.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommentCreateDto } from '../dto/comments.create.dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @ApiOperation({ summary: '모든 고양이 프로필에 적힌 댓글 가져오기' })
  @Get()
  async getAllComments() {
    return this.commentsService.getAllcomments();
  }

  @ApiOperation({ summary: '특정 고양이 프로필에 댓글 남기기' })
  @Post(':id')
  async createComment(@Param('id') id: string, @Body() body: CommentCreateDto) {
    return this.commentsService.createComment(id, body);
  }

  @ApiOperation({ summary: '특정 고양이 프로필에 댓글 남기기' })
  @Post('/like/:id')
  async plusLike(@Param('id') id: string) {
    return this.commentsService.plusLike(id);
  }
}
