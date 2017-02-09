import { Mongo } from 'meteor/mongo';

// On the server, this sets up a MongoDB collection called my-collection;
// On the client, this creates a cache connected to the server collection. 
export const Experiments = new Mongo.Collection('experiments');