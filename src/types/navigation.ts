import { Filme } from "./Filme";

export type RootStackParamList = {
  Home: { novoFilme?: Filme };
  AdicionarFilme: undefined;
  DetalhesFilme: { filme: Filme };
};