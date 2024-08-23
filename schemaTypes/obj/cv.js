// schemas/cv.js
export default {
    name: 'cv',
    title: 'Curriculum Vitae',
    type: 'array',
    of: [
      {
        type: 'block',
        styles: [{ title: 'Normal', value: 'normal' }],
        lists: [
          { title: 'Bullet', value: 'bullet' },
          { title: 'Numbered', value: 'number' },
        ],
        marks: {
          decorators: [
            { title: 'Strong', value: 'strong' },
            { title: 'Emphasis', value: 'em' },
          ],
          annotations: [
            {
              name: 'link',
              type: 'object',
              title: 'URL',
              fields: [
                {
                  title: 'URL',
                  name: 'href',
                  type: 'url',
                },
              ],
            },
          ],
        },
      },
    ],
    description: 'Curriculum Vitae with minimal formatting options.',
  };
  