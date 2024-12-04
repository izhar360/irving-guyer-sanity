import { HiOutlinePaintBrush } from "react-icons/hi2";


export default {
    name: 'artwork',
    title: 'Artwork',
    icon: HiOutlinePaintBrush,
    type: 'document',
    fields: [
      {
        name: 'artImage',
        title: 'Artwork Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      

      {
        name: 'titleTest',
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
            lists: [], // Disable lists
            marks: {
              decorators: [
                { title: 'Italic', value: 'em' },
                { title: 'Bold', value: 'strong' },
                { title: 'Underline', value: 'underline' },
                { title: 'Strikethrough', value: 'strike-through' },
              ],
              annotations: [] // Disable external links or annotations
            },
          },
        ],
        description: 'The title and additional details of the artwork, allowing various text styles for emphasis.',
        validation: Rule => Rule.required().error('Title is required.')
      },
   
  
     
    ],
  };
  