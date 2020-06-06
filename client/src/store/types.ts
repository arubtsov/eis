export interface Product {
    _id: string;
    name: string;
    price: {
        "$numberDecimal": string;
    };
    quantity: number;
    colour: string;
    imageItem: File;
    imageUrl: string;
};
