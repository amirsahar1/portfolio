import { groq } from 'next-sanity';

export const educationQuery = groq`
*[_type == "education"] | order(date desc) {
  course,
  "courseContents": courseContents[]->.title,
  date,
  "institution": institution-> {
    name,
    url,
    "logo": logo.asset->.url,
  }
}
`;
