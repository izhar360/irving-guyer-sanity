// contact.js
import { EnvelopeIcon } from '@sanity/icons';

export default {
  name: 'contact',
  title: 'Contact Information',
  type: 'document',
  icon: EnvelopeIcon,

  fields: [

    {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'The title of the page.',
      },
    {
      name: 'email',
      title: 'Contact Email',
      type: 'string',
      description: 'The email address for contact inquiries.'
    },
    {
      name: 'contactFormInstructions',
      title: 'Contact Form Instructions',
      type: 'text',
      description: 'Instructions for using the contact form.'
    }
  ],

  preview: {
    select: {
      title: 'title'
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title || 'Contact Information'
      };
    }
  }
};




