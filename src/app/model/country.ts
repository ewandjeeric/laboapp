export interface Country{
  "Vsd"?:number,
  "CountryName"?: string,
    "CountryCode"?: string,
    "Year"?: string,
    "id"?: string
}

export enum DataStateEnum{
  LOADING,
  LOADED,
  ERROR
}

export interface AppDataState<T>{
  dataState?:DataStateEnum,
  data?:T,
  errorMessage?:string
}
