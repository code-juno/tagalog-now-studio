import {defineField, defineType} from 'sanity'

/**
 * Represents an author who can be assigned to blog posts.
 */
export const author = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Full name of the author',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      description: 'A photo or avatar for the author',
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      description: 'A short biography of the author',
    }),
  ],
})
