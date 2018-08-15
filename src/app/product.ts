import { Category } from './category';

export class Product {
    constructor(
        public ProductId: number,
        public Name: string,
        public Description?: string,
        public Url?: string,
        public Categories?: Array<Category>
    ) {  }
}
