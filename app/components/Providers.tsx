"use client"

import { ReactNode } from "react";
import { CartProvider as USCProvider } from "use-shopping-cart";

export default function CartProvider({children}:{children:ReactNode}){

    return(
        
        <USCProvider 
        mode="payment" 
        cartMode="client-only" 
        stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
        successUrl="https://2324-ecommerce-jonathan.vercel.app/stripe/success"
        cancelUrl="https://2324-ecommerce-jonathan.vercel.app/stripe/error"
        currency="EUR"
        billingAddressCollection={true}
        shouldPersist={true}
        language="en-UK"
        >
            {children}
        </USCProvider>
    )
}