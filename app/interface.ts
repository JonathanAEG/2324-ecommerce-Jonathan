export interface simplifiedProduct{

    _id: string;
    name: string;
    image: string;
    price: number;
    slug: string;
    category: string;
}

export interface fullProduct{

    _id: string;
    name: string;
    images: any;
    price: number;
    slug: string;
    category: string;
    description: string;
    stripe: string;
}