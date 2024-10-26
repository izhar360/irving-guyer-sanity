// schemas/biography.js
export default {
  name: 'biography',
  title: 'Biography',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title for the biography or author name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'authorImage',
      title: 'Author Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Picture of the author',
    },
    {
      name: 'description',
      title: 'Biography Description',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Underline', value: 'underline' },
              { title: 'Code', value: 'code' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'URL',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        },
      ],
      description: 'Rich text field for detailed biography.',
      validation: (Rule) => Rule.required(),
    },
  ],
  description: 'Biography schema with title, author image, and a rich text description.',
};
