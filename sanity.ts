import {createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url';

export const config = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!, // "pv8y60vp"
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production", // "production"
    apiVersion: "2021-10-02", // "2022-11-16"
    useCdn: process.env.NODE_ENV === "production"
}

export const sanityClient = createClient(config);

export const urlFor = (source: any) => createImageUrlBuilder(config).image(source);
