// homePage.js

import { BLOCKS } from "../../constant";
import { FiHome } from "react-icons/fi";


export default {
  name: 'homePage',
  title: 'Home Page',
  icon: FiHome,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the home page.',
    },
    {
      name: 'blocks',
      title: 'Blocks',
      type: 'array',
      of: BLOCKS,
      validation: Rule => Rule.min(1).error('The page must have at least one content block.'),

    },
  ],
};
