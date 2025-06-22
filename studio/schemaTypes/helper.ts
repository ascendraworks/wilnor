import { defineType, defineField } from 'sanity'

export const helper = defineType({
  name: 'helper',
  title: 'Helper',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
        name: 'nationality',
        title: 'Nationality',
        type: 'string',
    }),      
    defineField({
        name: 'age',
        title: 'Age',
        type: 'number',
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'salary',
      title: 'Salary',
      type: 'string',
    }),
    defineField({
      name: 'offDays',
      title: 'Off Days',
      type: 'string',
    }),
    defineField({
        name: 'languages',
        title: 'Languages',
        type: 'array',
        of: [{ type: 'string' }],
    }),    
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'biodataPDF',
      title: 'Biodata PDF',
      type: 'file',
    }),
  ],
})
