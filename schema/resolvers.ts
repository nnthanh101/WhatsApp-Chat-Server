import { GraphQLDateTime } from 'graphql-iso-date'
import { chats } from '../db'

export default {
  Date: GraphQLDateTime,

  Query: {
    chats() {
      return chats
    },
  },
}
