import { BiCollection } from "react-icons/bi";


export default {
    name: 'collection',
    title: 'Collection',
    type: 'document',
    icon: BiCollection,
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'The title of the collection.',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',  // Automatically generate the slug from the title
          maxLength: 96,    // Optional: limit slug length
          slugify: input => input
            .toLowerCase() // Convert to lowercase
            .replace(/\s+/g, '-') // Replace spaces with dashes
            .replace(/[^\w\-]+/g, '') // Remove all non-word characters
            .replace(/\-\-+/g, '-') // Replace multiple dashes with a single dash
            .trim(), // Trim any leading/trailing dashes
        },
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        description: 'A detailed introduction or description of the collection.',
      },
      {
        name: 'descriptionRich',
        title: 'Description (WYSIWYG)',
        type: 'array',
        of: [
          {
            type: 'block',
            styles: [
              { title: 'Normal', value: 'normal' },
              { title: 'Italic', value: 'italic' },
              { title: 'Heading 1', value: 'h1' },
              { title: 'Heading 2', value: 'h2' },
              { title: 'Heading 3', value: 'h3' },
            ],
            lists: [], // Disable lists
            marks: {
              decorators: [
                { title: 'Italic', value: 'em' },
                { title: 'Bold', value: 'strong' },
                { title: 'Underline', value: 'underline' },
                { title: 'Strikethrough', value: 'strike-through' },
              ],
              annotations: [
                {
                  name: 'link',
                  type: 'object',
                  title: 'Link',
                  fields: [
                    {
                      name: 'href',
                      title: 'URL',
                      type: 'url',
                      validation: (Rule) => Rule.uri({
                        scheme: ['http', 'https'], // Ensure it’s a valid HTTP or HTTPS URL
                      }),
                    },
                  ],
                },
              ],
            },
          },
        ]
      },
      {
        name: 'coverImage',
        title: 'Cover Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'dateRange',
        title: 'Date Range',
        type: 'string',
        description: 'The date range that the collection covers (if applicable).',
      },
     
      {
        name: 'artworks',
        title: 'Artworks',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'artwork' }] }],
        description: 'Select artworks included in this collection.',
      },

    ],
  };
  