import type Postagem from "./Postagem";

export interface Tema {
  id: number;
  descricao: string;
  postagem?: Postagem[] | null; //O tema pode pode ou não ter postagem, o campo é opcional (?)
}