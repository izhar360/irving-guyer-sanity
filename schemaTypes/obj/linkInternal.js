import { LinkIcon } from '@sanity/icons'
import { PAGE_REFERENCES } from '../../constant'


export default {
  title: 'Internal Link',
  name: 'linkInternal',
  type: 'object',
  icon: LinkIcon,
  fields: [
    // Title
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    // Reference
    {
      name: 'reference',
      type: 'reference',
      weak: true,
      validation: Rule => Rule.required(),
      to: PAGE_REFERENCES
    }
  ],
  preview: {
    select: {
    
      
      title: 'title'
    },
    prepare(selection) {
      const {
        
       
        title
      } = selection

     
      return {
      
        title
      }
    }
  }
}
