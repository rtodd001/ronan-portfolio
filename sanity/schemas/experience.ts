export default {
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
        {
            name: 'jobTitle',
            title: 'JobTitle',
            type: 'string'
        },
        {
            name: 'companyImage',
            title: 'CompanyImage',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'copmany',
            title: 'Company',
            type: 'text',
        },
        {
            name: 'summary',
            title: 'Summary',
            type: 'text',
        },
        {
            name: 'dateStarted',
            title: 'DateStarted',
            type: 'date',
        },
        {
            name: 'dateEnded',
            title: 'DateEnded',
            type: 'date',
        },
        {
            name: 'isCurrentlyWorkingHere',
            title: 'IsCurrentlyWorkingHere',
            type: 'boolean',
        },
        {
            name: 'technologies',
            title: 'Technologies',
            type: 'array',
            of: [{type: 'reference', to:{type:'skill'}}]
        },
    ]
}