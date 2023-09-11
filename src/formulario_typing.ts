export enum MaterialToldo {
    Lona,
    Policarbonato,
}

export enum MaterialCobertura {
    Lona,
    Policarbonato,
    Zinco,
}

export enum TipoVidro {
    Box,
    Porta,
    Janela,
}

export enum TipoJanela {
    DuasFolhas,
    QuatroFolhas,
}

export enum TipoAcionamentoToldo {
    Manual,
    Retratil
}

export enum TipoToldo {
    Enrolavel,
    Fixo,
}

export interface ToldoInfo {
    tipo: TipoToldo | undefined,
    tipo_acionamento: TipoAcionamentoToldo | undefined,
    material: MaterialToldo | undefined,
    projecao: string | undefined,
    altura: string | undefined,
}

export interface CoberturaInfo {
    material: MaterialCobertura,
    projecao: string | undefined
}

export interface VidroInfo {
    tipo: TipoVidro,
    tipo_janela: TipoJanela | undefined,
}

export interface TelaInfo {
    material: MaterialCobertura,
    projecao: string | undefined
}

export interface CortinaInfo {
    material: MaterialCobertura,
    projecao: string | undefined
}

export interface UserInfo {
    nome: string,
    email: string,
    telefone: string | undefined,
    endereco: string | undefined,
    outros_dados: string | undefined,
}

export interface UserAnswers {
    userinfo: UserInfo,
    toldo: ToldoInfo,
    cobertura: CoberturaInfo,
    vidro: VidroInfo,
    tela: TelaInfo,
    cortina: CortinaInfo,
}