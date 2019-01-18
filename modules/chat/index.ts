import { GraphQLModule } from '@graphql-modules/core';
import { loadResolversFiles, loadSchemaFiles } from '@graphql-modules/sonar';
import { mergeGraphQLSchemas, mergeResolvers } from '@graphql-modules/epoxy';
import { CommonModule, ICommonModuleContext } from "../common";
import { IUserModuleContext, UserModule } from "../user";

export interface IChatModuleConfig {}

export interface IChatModuleSession {}

export interface IChatModuleContext extends ICommonModuleContext, IUserModuleContext {}

export const ChatModule = new GraphQLModule<IChatModuleConfig, IChatModuleSession, IChatModuleContext>({
  name: 'Chat',
  imports: [
    CommonModule,
    UserModule,
  ],
  typeDefs: mergeGraphQLSchemas(loadSchemaFiles(__dirname + '/schema/')),
  resolvers: mergeResolvers(loadResolversFiles(__dirname + '/resolvers/')),
});
