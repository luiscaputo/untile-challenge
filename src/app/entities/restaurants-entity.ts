export interface IRestaurantsEntity {
  address:string;
  city: string;
  country?: string;
  keys?: string;
  latitude: number;
  longitude: number;
  name:string;
  postalCode?:string;
  province?:string;
  websites?: string;
}