import { gql } from '@apollo/client';

export const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    createdAt: Int!
  }

  type Recipe {
    name: String!
    description: String!
  }

  input SignUpInput {
    email: String!
    password: String!
  }

  input SignInInput {
    email: String!
    password: String!
  }

  type SignUpPayload {
    user: User!
  }

  type SignInPayload {
    user: User!
  }

  input RecipeInput {
    name: String!
    description: String!
  }

  type AddRecipePayload {
    recipe: Recipe!
  }

  type Query {
    user(id: ID!): User!
    users: [User]!
    recipes: [Recipe]
    viewer: User
  }

  type Mutation {
    signUp(input: SignUpInput!): SignUpPayload!
    signIn(input: SignInInput!): SignInPayload!
    addRecipe(input: RecipeInput!): AddRecipePayload!
    signOut: Boolean!
  }
`;
