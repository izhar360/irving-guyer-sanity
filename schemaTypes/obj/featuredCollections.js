// featuredCollections.js
import { BiCollection } from "react-icons/bi";


export default {
    name: 'featuredCollections',
    title: 'Featured Collections',
    icon: BiCollection,
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'The title for the featured collections section.',
      },
     
      
     
      
      {
        name: 'collections',
        title: 'Collections',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'collection' }] }],
        description: 'A list of collections to be featured in this section.',
      },
    ],

    preview: {
      select: {
        media: 'coverImage',
        title: 'title',
      },
      prepare({ media, title }) {
        return {
          title: 'Featured Collection',
          media: media,
          subtitle: title || 'No title provided',
        };
      },
    },
  };
  
  