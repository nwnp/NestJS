import { ApiProperty } from '@nestjs/swagger';

export class ReadOnlyCatDto {
  @ApiProperty({
    example: 'test@test.com',
    description: 'email',
    required: true,
  })
  email: string;

  @ApiProperty({
    example: 'test@test.com',
    description: 'id',
    required: true,
  })
  id: string;

  @ApiProperty({
    example: 'jin',
    description: 'name',
    required: true,
  })
  name: string;
}
