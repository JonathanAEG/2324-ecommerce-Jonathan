import AddToBag from "@/app/components/AddToBag";
import ImageGallery from "@/app/components/ImageGallery";
import { fullProduct } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import { Button } from "@/components/ui/button";
import { Star, Truck } from "lucide-react";


async function getData(slug: string){

    const query = `*[_type == 'product' && slug.current == "${slug}"][0]{
        _id,
        name,
        images,
        price,
        description,
        "slug": slug.current,
        "category": category->name
    }`
    return await client.fetch(query);
}

export default async function ProductPage(

    {params}:{params: {slug: string}}
    ){

    const product: fullProduct = await getData(params.slug);
    
    return(
        <div className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="grid gap-8 md:grid-cols-2">
                    <ImageGallery images={product.images}/>

                    <div className="md:py-8">
                        <div className="mb-2 md:mb-3">
                            <span className="mb-0.5 inline-block text-gray-500">
                                {product.category}
                            </span>
                            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                                {product.name}
                            </h2>
                        </div>

                        <div className="mg-6 flex items-center gap-3 md:mb-10">
                            <Button className="rounded gap-x-2">
                                <span className="text-sm">4.2</span>
                                <Star className="h-5 w-5"/>
                            </Button>
                            <span className="text-sm text-gray-500 transition duration-100"> 56 Ratings</span>
                        </div>
                        <div className="mb-4">
                            <div className="flex items-end gap-2">
                                <span className="text-xl font-bold">
                                    {product.price}€
                                </span>
                                <span className="mb-0.5 text-red-500 line-through"> {product.price +30}€</span>
                            </div>
                            <span className="text-sm text-gray-500">Incl. Vat plus Shipping</span>

                        </div>
                        <div className="mb-6 flex items-center gap-2 text-gray-500">
                            <Truck/>
                            <span className="text-sm">2-4 Day Shipping</span>
                        </div>  
                        <div className="flex gap-2.5">
                            <AddToBag 
                            currency="EUR" 
                            description={product.description} 
                            image={product.images[0]}
                            name={product.name}
                            price={product.price}
                            key={product._id}
                            />
                            <Button variant={"secondary"}>Checkout now</Button>
                        </div>
                        <p className="mt-12 text-base text-gray-500 tracking-wide">
                            {product.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}