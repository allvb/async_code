import GameSavingLoader from '../js/GameSavingLoader';

test('testing class GamesavingLoader', async () => {
  expect.assertions();
  const saving = await GameSavingLoader.load();
  const example = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };
  expect(JSON.parse(saving)).toEqual(example);
});
