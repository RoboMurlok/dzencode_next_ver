
import { Product } from './product';

export type Order = {
    id: number
    title: string
    date: string
    description: string
    products: Product[]
}