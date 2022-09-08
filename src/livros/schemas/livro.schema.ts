import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LivroDocument = Livro & Document;

@Schema()
export class Livro {
  @Prop({required: true, unique: true})
  codigo: string;

  @Prop({required: true})
  nome: string;

  @Prop({required: true})
  preco: number;
}

export const LivroSchema = SchemaFactory.createForClass(Livro);