// schemas/cv.js
export default {
  name: 'cv',
  title: 'Curriculum Vitae',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'CV Title',
      type: 'string',
      description: 'Title or heading for this section of the CV.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'entries',
      title: 'CV Entries',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'subtitle',
              title: 'Entry Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'lines',
              title: 'Details',
              type: 'array',
              of: [{ type: 'string' }],
              description: 'One-line details for this entry.',
            },
          ],
        },
      ],
    },
  ],
  description: 'A structured CV section with titles and multiple details per entry.',
};
