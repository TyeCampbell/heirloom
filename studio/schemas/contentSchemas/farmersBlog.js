import {isUniqueAcrossAllDocuments, todayDate} from '../schema-helper-functions/helper-functions';

export default {
    name: 'farmersBlogPost',
    title: "Farmer's Blog",
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: 'Click generate to create a unique slug from title for URL links. Will automatically add today\'s date to end of slug.',
            validation: Rule => Rule.required(),
            options: {
                isUnique: isUniqueAcrossAllDocuments,
                source: (doc) => {
                    const date = todayDate();
                    return `${doc.title}-${date}`
                }
            }

        },
        {
            name: 'summary',
            title: 'Summary',
            description: 'Short summary of blog post. Displays on landing page and blog post tab.',
            type: 'text',
            validation: Rule => Rule.required()
        },
        {
            name: 'image',
            title: 'Cover Image',
            type: 'image',
            validation: Rule => Rule.required()
        },
        {
            name: 'body',
            title: 'Blog Post Article',
            type: 'array',
            of: [
                {
                    type: 'block'
                },
                {
                    name: 'image',
                    type: 'object',
                    title: 'Image',
                    fields: [
                        {
                            name: 'image',
                            type: 'image',
                            validation: Rule => Rule.required()
                        },
                        {
                            name: 'altText',
                            title: 'Alt Text',
                            type: 'string'
                        }
                    ]
                }
            ],
            validation: Rule => Rule.required()
        }
    ]
}
