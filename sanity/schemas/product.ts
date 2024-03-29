export default{
    name:'product',
    type:'document',
    title:'Product',
    fields:[
        {
            name:'name',
            type:'string',
            title:'Name of Product'
        },
        {
            name:'images',
            type:'array',
            title:'Product Images',
            of:[{type:'image'}]
        },
        {
            name:'description',
            type:'text',
            title:'Description of Product'
        },
        {
            name:'slug',
            type: 'slug',
            title: 'Slug of Product',
            options:{
                source: 'name'
            }
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price of Product'
        },
        {
            name: 'stripe',
            type: 'string',
            title: 'Stripe Price Id'
        },
        {
            name: 'category',
            type: 'reference',
            title: 'Category of Product',
            to:[ 
                {
                    type:'category'
                }
            ]
        }
    ]

}