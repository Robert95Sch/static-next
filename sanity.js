import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: "2022-03-25",
    useCdn: process.env.node_ENV === "false",
};

export const sanityClient = createClient(config);

export const urlFor = (source) => {
    return createImageUrlBuilder(config).image(source);
}

export const urlForFile = ref => {
    const [_file, id, extension] = ref.split('-');
    return `https://cdn.sanity.io/files/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${id}.${extension}`
}