import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'questions',
  title: 'Questions',
  type: 'document',
  fields: [
    {
        name: "question",
        title: "FAQ Question",
        type: "string",
    },
    {
        name: "answer",
        title: "Answer",
        type: "string"
    },
  ],
})
