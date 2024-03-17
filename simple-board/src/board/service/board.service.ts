import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardService {
  private boards = [
    {
      id: 1,
      name: 'name1',
      contents: 'contents1',
    },
    {
      id: 2,
      name: 'name2',
      contents: 'contents2',
    },
    {
      id: 3,
      name: 'name3',
      contents: 'contents3',
    },
    {
      id: 4,
      name: 'name4',
      contents: 'contents4',
    },
    {
      id: 5,
      name: 'name5',
      contents: 'contents5',
    },
    {
      id: 6,
      name: 'name6',
      contents: 'contents6',
    },
    {
      id: 7,
      name: 'name7',
      contents: 'contents7',
    },
    {
      id: 8,
      name: 'name8',
      contents: 'contents8',
    },
    {
      id: 9,
      name: 'name9',
      contents: 'contents9',
    },
    {
      id: 10,
      name: 'name10',
      contents: 'contents10',
    },
  ];

  findAll(): any[] {
    return this.boards;
  }

  find(id: number): any {
    return this.boards.filter((board) => board.id == id);
  }
}
