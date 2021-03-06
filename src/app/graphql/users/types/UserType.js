import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList
} from 'graphql';
import ErrorType from '../../ErrorType';

const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'UserType.',
  fields: {
    errors: {
      type: new GraphQLNonNull(new GraphQLList(ErrorType))
    },
    id: {
      type: GraphQLString,
      description: 'User ID.'
    },
    email: {
      type: GraphQLString,
      description: 'User email.'
    }
  }
});

export default UserType;
