import sanityClient from '@sanity/Client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: process.env.REACT__APP__SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-12-8',
    useCdn: true,
    token: process.env.REACT__APP__SANITY_TOKEN,
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
