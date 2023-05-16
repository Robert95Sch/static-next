// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';

const query = groq`
*[_type == "questions"]
`

export default async function handler(req, res) {
    const questions = await sanityClient.fetch(query)
    res.status(200).json({ questions })
}
  