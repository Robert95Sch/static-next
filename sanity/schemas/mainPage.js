export default {
    name: 'mainPage',
    title: 'Main Page',
    type: 'document',
    fields: [
        {
            name: 'heroSectionImage',
            title: 'Hero Image',
            type: 'image'
        },
        {
            name: 'playerUrl',
            title: 'Video',
            type: 'file'
        },
        {
            name: 'aboutHeader',
            title: 'About Header',
            type: 'string'
        },
        {
            name: 'aboutBody',
            title: 'About Text',
            type: 'text'
        }
    ]
}