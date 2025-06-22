export const helpersQuery = `*[_type == "helper"] | order(_createdAt desc){
  _id,
  name,
  age,
  nationality,
  category,
  skills,
  salary,
  offDays,
  languages,
  "photoUrl": photo.asset->url,
  "biodataPDFUrl": biodataPDF.asset->url
}`
  