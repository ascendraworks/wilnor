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
      validation: Rule => Rule.required(),
    }),
    defineField({
        name: 'nationality',
        title: 'Nationality',
        type: 'string',
        validation: Rule => Rule.required(),
    }),
    defineField({
        name: 'age',
        title: 'Age',
        type: 'number',
        validation: Rule => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Now In Singapore", value: "now-in-singapore" },
          { title: "Ex Singapore", value: "ex-singapore" },
          { title: "Ex Abroad", value: "ex-abroad" },
          { title: "Fresh Helpers", value: "fresh-helpers" }
        ],
        layout: "radio"
      },
      validation: Rule => Rule.required()
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
