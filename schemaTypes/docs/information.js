import { RiQuillPenLine } from "react-icons/ri";

export default {
  name: 'information',
  title: 'Information',
  icon: RiQuillPenLine,
  type: 'document',
  groups: [
    {
      name: 'biography',
      title: 'Biography',
    },
    {
      name: 'cv',
      title: 'Curriculum Vitae',
    },
    {
      name: 'writing',
      title: 'Writing',
    },
    {
      name: 'media',
      title: 'Media',
    },
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
    },
    {
      name: 'slider',
      title: 'Slider',
      type: 'array',
      group: 'media',
      of: [
        {
          type: 'object',
          name: 'slide',
          title: 'Slide',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'array',
              of: [
                {
                  type: 'block',
                  styles: [
                    { title: 'Normal', value: 'normal' },
                    { title: 'Italic', value: 'italic' },
                    { title: 'Heading 1', value: 'h1' },
                    { title: 'Heading 2', value: 'h2' },
                    { title: 'Heading 3', value: 'h3' },
                  ],
                  lists: [],
                  marks: {
                    decorators: [
                      { title: 'Italic', value: 'em' },
                      { title: 'Bold', value: 'strong' },
                      { title: 'Underline', value: 'underline' },
                      { title: 'Strikethrough', value: 'strike-through' },
                    ],
                    annotations: [
                      {
                        name: 'link',
                        type: 'object',
                        title: 'Link',
                        fields: [
                          {
                            name: 'href',
                            title: 'URL',
                            type: 'url',
                            validation: (Rule) =>
                              Rule.uri({
                                scheme: ['http', 'https'],
                              }),
                          },
                        ],
                      },
                    ],
                  },
                },
              ],
              description:
                'The title and additional details of the slide, allowing various text styles for emphasis.',
              validation: (Rule) =>
                Rule.required().error('Title is required.'),
            },
            {
              name: 'slideImage',
              title: 'Slide Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              description: 'Upload an image to display on the slide.',
              validation: (Rule) =>
                Rule.required().error('Slide Image is required.'),
            },
          ],
        },
      ],
    },

    {
      name: 'qoute',
      title: 'Qoute',
      type: 'quote'
    },


  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Information Page',
      };
    },
  },
};
