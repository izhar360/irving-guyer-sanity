import { CogIcon } from '@sanity/icons'


const TITLE = 'Settings'

export default {
  name: 'settings',
  title: TITLE,
  type: 'document',
  icon: CogIcon,


  
  fields: [
    // Menu
    {
      name: 'menu',
      title: 'Menu',
      type: 'object',
      options: {
        collapsed: false,
        collapsible: true
      },
      fields: [
        // Links
        {
          name: 'links',
          title: 'Links',
          type: 'array',
          of: [
           
            { type: 'linkInternal' },
            { type: 'linkExternal' }
          
          ]
        }
      ]
    },



    {
        name: 'footer',
        title: 'Footer',
        type: 'object',
     
        options: {
            collapsed: false,
            collapsible: true
          },
        fields: [
          // Estate and Website Information
          {
            name: 'estateInfo',
            title: 'Estate Information',
            type: 'object',
            fields: [
              {
                name: 'estateName',
                title: 'Estate Name',
                type: 'string',
                description: 'The name of the estate to be displayed.',
              },
              {
                name: 'websiteUrl',
                title: 'Website URL',
                type: 'string',
                description: 'The URL of the website.',
              },
            ],
          },
      
          // Footer Links
          {
            name: 'footerLinks',
            title: 'Footer Links',
            type: 'array',
            of: [
              { type: 'linkInternal' },
              { type: 'linkExternal' },
            ],
            description: 'List of links to be displayed in the footer.',
          },
      
      
        
        ],
      }


  
 

  
  ],
  preview: {
    prepare() {
      return {
        title: TITLE
      }
    }
  }
}
