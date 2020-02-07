import { getById, getMovies, addMovie, deleteMovie } from "./db";

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || "World"}`,
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id)
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id)
  }
};

export default resolvers;
