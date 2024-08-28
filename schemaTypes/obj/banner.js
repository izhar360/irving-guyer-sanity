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
      name: 'artworks',
      title: 'Artworks',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'artwork' }] }],
      description: 'Select the artworks to display in the banner.',
    },

  
  ],

  preview: {
    select: {
      media: 'artworks.0.artImage',  // Assuming artwork has an image field
      subtitle: 'description',
      
    },
    prepare({ media, subtitle }) {
      return {
        title: `Banner ~ Slider`,  // Fallback if no title is available
        media: media,
        subtitle: subtitle ? subtitle.substring(0, 50) + '...' : 'No description',  // Show first 50 characters of description
      };
    },
  },
};
