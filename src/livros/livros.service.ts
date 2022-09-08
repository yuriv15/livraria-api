import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Livro, LivroDocument } from './schemas/livro.schema';
import { Model } from 'mongoose';
import { CreateLivroDto } from './dto/create-livro.dto';

@Injectable()
export class LivrosService {
  constructor(@InjectModel(Livro.name) private livroModel: Model<LivroDocument>) {}

  async obterTodos(): Promise<Livro[]> {
    return this.livroModel.find().exec();
  }

  async obterUm(id: string): Promise<Livro> {
    return this.livroModel.findById(id).exec();
  }

  async criar(livro: CreateLivroDto) {
    const createdLivro = new this.livroModel(livro);
    return createdLivro.save();
  }

  async alterar(livro: Partial<CreateLivroDto>) {
    return this.livroModel.findByIdAndUpdate(livro._id, livro).exec();
  }

  async apagar(id: string) {
    return this.livroModel.findByIdAndDelete(id).exec()
  }
}
