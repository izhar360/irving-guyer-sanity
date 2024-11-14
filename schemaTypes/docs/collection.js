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
  