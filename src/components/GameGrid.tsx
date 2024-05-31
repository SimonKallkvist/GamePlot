import { Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';

const GameGrid = () => {
  //   const [games, setGames] = useState<Game[]>([]);
  //   const [error, setError] = useState('');

  //   useEffect(() => {
  //     apiClient
  //       .get<FetchGamesResponse>('/games')
  //       .then((res) => setGames(res.data.results))
  //       .catch((err) => setError(err.message));
  //   });

  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
