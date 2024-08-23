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
        name: 'description',
        title: 'Description',
        type: 'text',
        description: 'A detailed introduction or description of the collection.',
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
        description: 'A list of artworks included in this collection.',
      },

      {
        name: 'category',
        title: 'Category',
        type: 'reference',
        to: [{ type: 'category' }],
        description: 'Select a category for this collection.',
      },

    

      {
        name: 'imageFirst',
        title: 'Image First',
        type: 'boolean',
        description: 'If set to true, the image will be displayed on the left side of the component.',
      },

      {
        name: 'imageMargin',
        title: 'Image Margin',
        type: 'boolean',
        description: 'Apply margin to the collection image.',
        initialValue: true,
      },

    ],
  };
  