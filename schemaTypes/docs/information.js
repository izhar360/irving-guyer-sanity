import { RiQuillPenLine } from "react-icons/ri";



export default {
  name: 'information',
  title: 'Information',
  icon: RiQuillPenLine,
  type: 'document',
  groups: [
    {
    
      name: 'biography',
      title: 'Biography'
    },
    {
      name: 'cv',
      title: 'Curriculum Vitae'
    },
    {
      name: 'writing',
      title: 'Writing'
    }
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of the information page.',
    },
    {
      name: 'biography',
      title: 'Biography',
      type: 'biography',
      group: 'biography',
     
    },
    {
      name: 'cv',
      title: 'Curriculum Vitae',
      type: 'cv',
      group: 'cv',
     
    },

    {
        name: 'writing',
        title: 'Writing',
        type: 'string',
        group: 'writing',
     
      },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'biography',
    },
    prepare({ title, subtitle }) {
      const plainText = subtitle
        ? subtitle.filter(block => block._type === 'block').map(block => block.children.map(child => child.text).join('')).join(' ')
        : 'No biography content';

      return {
        title: title || 'Information Page',
        subtitle: plainText.substring(0, 50) + '...',
      };
    },
  },
};
