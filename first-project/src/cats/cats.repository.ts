import { CatRequestDto } from './dto/cats.request.dto';
import { Injectable, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat } from './cats.schema';

@Injectable()
export class CatsRepository {
  constructor(@InjectModel(Cat.name) private readonly catModel: Model<Cat>) {}

  async existsByEmail(email: string): Promise<object> {
    try {
      const result = await this.catModel.exists({ email });
      return result;
    } catch (error) {
      throw new HttpException('db error', 400);
    }
  }

  async create(cat: CatRequestDto): Promise<Cat> {
    return await this.catModel.create(cat);
  }

  async findCatByEmail(email: string) {
    try {
      const result = await this.catModel.findOne({ email });
      return result;
    } catch (error) {
      throw new HttpException('존재하지 않는 이메일입니다.', 401);
    }
  }

  async findCatByIdWithoutPassword(catId: string) {
    const cat = await this.catModel.findById(catId).select('-password');
    // select()를 사용하면 원하는 것만 가져오고, - 를 붙이면 제외하고 가져옴
    // ex - select('email name password')
    return cat;
  }

  async findByIdAndUpdateImg(id: string, fileName: string) {
    const cat = await this.catModel.findById(id);
    cat.imgUrl = `http://localhost:8080/media/${fileName}`;

    const newCat = await cat.save();
    console.log(newCat);
    return newCat;
  }

  async findAll() {
    return await this.catModel.find();
  }
}
