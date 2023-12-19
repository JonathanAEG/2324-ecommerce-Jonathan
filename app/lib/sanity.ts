import {createClient} from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId:'vqh13bit',
    dataset:'production',
    apiVersion:'2023-12-19',
    useCdn:true
});

const builder = imageUrlBuilder(client);

export function urlFor(source:any){
    return builder.image(source);
}