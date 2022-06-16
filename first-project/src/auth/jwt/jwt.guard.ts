import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// strategy가 자동으로 실행이 됨
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
