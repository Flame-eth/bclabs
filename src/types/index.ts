export interface AssetType {
  id: number;
  symbol: string;
  price: number;
  image: string;
  name: string;
  percentage_24H: number;
  price_24H: number;
  createdAt: Date;
  updatedAt: Date;
}
