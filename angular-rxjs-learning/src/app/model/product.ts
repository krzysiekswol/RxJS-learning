export interface Product {
 id: number,
 category: string,
 title: string,
 description: string,
 image: string, 
 price: number,
 rating: {
  count: number,
  rate: number,
 },
 newValue?: number
}