export interface ICreateCategoriaDTO {
    id: number;
    nome: string;
    descricao?: string; 
    ativo: true; 
    created_at: Date;

}