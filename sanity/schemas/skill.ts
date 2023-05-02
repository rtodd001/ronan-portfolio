export default {
    name: 'skill',
    title: 'Skill',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            description: 'Title of Skill',
            type: 'string'
        },
        {
            name: 'progress',
            title: 'Progress',
            type: 'number',
            description: 'Progress of skill from 0% to 100%',
            validation: (Rule: { required: () => { (): number; new(): number; min: { (arg0: number): { (): number; new(): number; max: { (arg0: number): number; new(): number; }; }; new(): number; }; }; }) => Rule.required().min(0).max(100)
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
        }
    ]
}