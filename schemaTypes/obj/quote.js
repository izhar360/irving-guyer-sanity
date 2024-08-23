// quote.js
import { BsChatLeftQuote } from "react-icons/bs";

export default {
    name: 'quote',
    title: 'Quote',
    icon:  BsChatLeftQuote,
    type: 'object',
    fields: [
      {
        name: 'text',
        title: 'Quote Text',
        type: 'string',
        description: 'The text of the quote.',
      },
      {
        name: 'author',
        title: 'Author',
        type: 'string',
        description: 'The author of the quote.',
      },
    ],


    preview: {
      select: {
        title: 'author',
        subtitle: 'text',
      },
      prepare({ title, subtitle }) {
        return {
          title: title || 'Unknown Author',  // Fallback if no author is provided
          subtitle: subtitle ? subtitle.substring(0, 50) + '...' : 'No quote text',  // Show first 50 characters of the quote
        };
      },
    },
  };
  