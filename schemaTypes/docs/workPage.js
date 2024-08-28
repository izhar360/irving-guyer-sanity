import { MdOutlineWorkOutline } from "react-icons/md";

export default {
  name: 'theWorkPage',
  title: 'The Work Page',
  icon: MdOutlineWorkOutline,
  type: 'document',
  fields: [

    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the page.',
    },
    {
      name: 'slug',
      type: 'slug',
      options: { source: 'title' },
     
    },
   
    {
      name: 'quote',
      title: 'Quote',
      type: 'quote',
      description: 'A quote to be displayed on the work page.',
    },
   
  ],
};
