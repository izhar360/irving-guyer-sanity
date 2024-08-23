
export default (S) => {
  return S.list()
    .title('Content')
    .items([


      S.listItem()
      .title('The Home Page')
      .schemaType('homePage')
      .child(
        S.editor()
          .title('The Home Page')
          .schemaType('homePage')
          .documentId('homePage')
      ),


      S.listItem()
      .title('The Work Page')
      .schemaType('theWorkPage')
      .child(
        S.editor()
          .title('The Work Page')
          .schemaType('theWorkPage')
          .documentId('theWorkPage')
      ),


      S.listItem()
      .title('Contact Page')
      .schemaType('contact')
      .child(
        S.editor()
          .title('Contact Page')
          .schemaType('contact')
          .documentId('contact')
      ),

      S.listItem()
      .title('Information Page')
      .schemaType('information')
      .child(
        S.editor()
          .title('Information Page')
          .schemaType('information')
          .documentId('information')
      ),


      S.divider(),

       S.listItem()
      .title('Collections')
     
      .schemaType('collection')
      .child(
        S.documentTypeList('collection')
      ),


      S.listItem()
      .title('Artworks')
    
      .schemaType('artwork')
      .child(
        S.documentTypeList('artwork')
      ),

      S.listItem()
      .title('Categories')
    
      .schemaType('category')
      .child(
        S.documentTypeList('category')
      ),


      S.divider(),
      
      S.listItem()
      .title('Settings')
      .schemaType('settings')
      .child(
        S.editor()
          .title('Settings')
          .schemaType('settings')
          .documentId('settings')
      ),
    
      ])
}
