// banner.js
import { MdOutlineFeaturedPlayList } from "react-icons/md";


export default {
    name: 'banner',
    title: 'Banner',
    icon: MdOutlineFeaturedPlayList,
    type: 'object',
    fields: [
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        description: 'The description text for the banner.',
      },
      {
        name: 'artwork',
        title: 'Artwork',
        type: 'reference',
        to: [{ type: 'artwork' }],
        description: 'Select the artwork to display in the banner.',
      },
    ],


    preview: {
      select: {
       
        media: 'artwork.artImage',  // Assuming artwork has an image field
        subtitle: 'description',
      },
      prepare({ media, subtitle }) {
        return {
          title: 'Banner',  // Fallback if no title is available
          media: media,
          subtitle: subtitle ? subtitle.substring(0, 50) + '...' : 'No description',  // Show first 50 characters of description
        };
      },
    },
  };
  
  