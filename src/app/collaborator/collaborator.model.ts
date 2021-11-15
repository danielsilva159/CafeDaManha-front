import { Option } from './../breakfast-options/option.model';
export interface Collaborator{
  id?: number,
  name?: string,
  cpf?: string
  options?: Option[]
}
