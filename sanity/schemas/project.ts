export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            description: 'Title of Project',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'summary',
            title: 'Summary',
            type: 'text',
        },
        {
            name: 'technologies',
            title: 'Technologies',
            type: 'array',
            of: [{type: 'reference', to:{type:'skill'}}]
        },
        {
            name: 'linkToBuild',
            title: 'LinkToBuild',
            type: 'url',
        },
        {
            name: 'dateStarted',
            title: 'DateStarted',
            type: 'date'
        },
        {
            name: 'dateEnded',
            title: 'DateEnded',
            type: 'date',
        }
    ]
}