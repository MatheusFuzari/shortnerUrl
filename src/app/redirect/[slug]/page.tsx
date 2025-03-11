'use client';
import { useEffect } from "react";


export default function Page({params}: {params: {slug: string}}) {

    useEffect(() => {
        window.location.assign(`${process.env.SHORTNER_URL!}/redirect/${params.slug}`);
    })

    return null;
}