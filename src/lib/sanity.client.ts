import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'titlisnw',
  dataset: 'production',
  apiVersion: '2024-06-22', 
  useCdn: true,
})
