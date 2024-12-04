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
      name: 'slug',
      type: 'slug',
      options: { source: 'title' },
     
    },
    {
      name: 'biography',
      title: 'Biography',
      type: 'biography',
      group: 'biography',
     
    },
    {
      name: 'cv',
      title: 'CV',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 1', value: 'h1' },
            { title: 'Heading 2', value: 'h2' },
            { title: 'Heading 3', value: 'h3' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
              { title: 'Underline', value: 'underline' },
              { title: 'Code', value: 'code' },
            ],
           
          },
        },
      ],
      description: 'The main content of the CV, supporting rich text and HTML.',
    },

    {
      name: 'writing',
      title: 'Writing',
      type: 'array',
      group: 'writing',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'array',
              of: [
                {
                  type: 'block',
                  styles: [
                    { title: 'Normal', value: 'normal' },
                    { title: 'Heading 1', value: 'h1' },
                    { title: 'Heading 2', value: 'h2' },
                    { title: 'Heading 3', value: 'h3' },
                    { title: 'Quote', value: 'blockquote' },
                  ],
                  lists: [
                    { title: 'Bullet', value: 'bullet' },
                    { title: 'Numbered', value: 'number' },
                  ],
                  marks: {
                    decorators: [
                      { title: 'Bold', value: 'strong' },
                      { title: 'Italic', value: 'em' },
                      { title: 'Underline', value: 'underline' },
                      { title: 'Strike-through', value: 'strike-through' },
                    ],
                    annotations: [
                      {
                        name: 'link',
                        type: 'object',
                        title: 'URL',
                        fields: [
                          {
                            name: 'href',
                            type: 'url',
                            title: 'URL',
                          },
                        ],
                      },
                    ],
                  },
                },
              ],
            },
          ],
        },
      ],
    }    
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
