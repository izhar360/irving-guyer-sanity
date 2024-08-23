import { MdOutlineCategory } from "react-icons/md";


export default {
    name: 'category',
    title: 'Category',
    icon: MdOutlineCategory,
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'The name of the category (e.g., "New York School", "Still Life").',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        description: 'A URL-friendly version of the category title, generated from the title.',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
    ],
  };
  