export type Tema = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  modulos: Modulo[];
}

export type Modulo = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
}

export type Aula = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  video: string;
  image: string;
  written: string;
  index: number;
  modulo: Partial<Modulo>;
}

export type Avaliacao = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  perguntas: Pergunta[],
  modulo: Modulo
}

export type Pergunta = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string;
  alternativas: Alternativa[]
}

export type Alternativa = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string;
  isCorrect: boolean;
}