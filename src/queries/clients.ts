import { groq } from 'next-sanity';

export const clientsQuery = groq`
*[_type == "client"] {
  name,
  url,
  "logo": logo.asset->.url
}
`;
