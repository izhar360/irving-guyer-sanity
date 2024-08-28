import { HiOutlinePaintBrush } from "react-icons/hi2";


export default {
    name: 'artwork',
    title: 'Artwork',
    icon: HiOutlinePaintBrush,
    type: 'document',
    fields: [
      {
        name: 'artImage',
        title: 'Artwork Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'The title of the artwork, e.g., "Tennesse valley".',
      },
      {
        name: 'medium',
        title: 'Medium',
        type: 'string',
        description: 'The medium of the artwork, e.g., "oil on canvas".',
      },
      {
        name: 'year',
        title: 'Year',
        type: 'string',
        description: 'The year the artwork was created, e.g., "1970".',
      },
      {
        name: 'collection',
        title: 'Collection',
        type: 'reference',
        to: [{ type: 'collection' }],
      },
    ],
  };
  