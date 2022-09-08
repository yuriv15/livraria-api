import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { LivrosService } from './livros.service';
import { CreateLivroDto } from './dto/create-livro.dto';

@Controller('livros')
export class LivrosController {
  constructor(private livrosService: LivrosService) {}

  @Get()
  obterTodos() {
    return this.livrosService.obterTodos();
  }

  @Get(':id')
  obterUm(@Param() { id }) {
    return this.livrosService.obterUm(id);
  }

  @Post()
  criar(@Body() livro: CreateLivroDto) {
    return this.livrosService.criar(livro);
  }

  @Put()
  alterar(@Body() livro: Partial<CreateLivroDto>) {
    return this.livrosService.alterar(livro);
  }

  @Delete(':id')
  apagar(@Param() { id }) {
    return this.livrosService.apagar(id);
  }
}
