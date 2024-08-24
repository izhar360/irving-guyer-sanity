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
        author: 'author',
        text: 'text',
      },
      prepare({ author, text }) {
        return {
          title: 'Quote',
          subtitle: `${author ? author : 'Unknown Author'} - ${text ? text.substring(0, 50) + '...' : 'No quote text'}`,
        };
      },
    },
  };
  