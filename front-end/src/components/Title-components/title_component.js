function Title_Component() {
    // Access the client
    const queryClient = useQueryClient();
  
    // Queries
    const query = useQuery('movies', getMovies);
  
    // Mutations
    const mutation = useMutation(postMovie, {
      onSuccess: () => {
        queryClient.invalidateQueries('movies');
      },
    });
  
    return (
      <div>
        <ul>
          {query.data.map((movie) => (
            <li key={movie.id}> {movie.title} </li>
          ))}
        </ul>
        <button
          onClick={() => {
            mutation.mutate({
              id: Date.now(),
              title: 'Terminator',
            });
          }}
        >
          Add Movie
        </button>
      </div>
    );
  }