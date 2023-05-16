import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'tutors',
  title: 'Tutors',
  type: 'document',
  fields: [
    {
        name: "title",
        title: "Name",
        type: "string",
    },
    {
        name: "image",
        title: "Image",
        type: "image"
    },
    {
      name: "instrument",
      title: "Instrument",
      type: "string",
    },
    {
      name: "startPrice",
      title: "Starting Price",
      type: "string",
    },
  ],
})
