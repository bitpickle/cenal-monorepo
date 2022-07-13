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