import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {structureTemplate} from './deskStructure'
import {media} from 'sanity-plugin-media'

export default defineConfig({
  name: 'default',
  title: 'sanity-spa-template',

  projectId: 'k7cit4rc',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: structureTemplate,
    }), visionTool(), media()],

  schema: {
    types: schemaTypes,
  },
})
