export interface itemType {
  id: string;
  title: string;
  price: number;
}
[];

export interface cartType{
  item: itemType,
  quantity: number
}[]

export interface formStateType{
  cart ?: cartType[]
}