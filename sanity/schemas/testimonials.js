import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
        name: "name",
        title: "Name",
        description: "Name of Reviewer",
        type: "string",
    },
    {
        name: "review",
        title: "Review",
        type: "text"
    },
  ],
})
