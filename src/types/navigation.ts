import { Filme } from "./Filme";

export type RootStackParamList = {
  Home: undefined;
  AdicionarFilme: undefined;
  DetalhesFilme: { filme: Filme };
};