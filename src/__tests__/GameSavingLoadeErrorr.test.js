import GameSavingLoader from '../js/GameSavingLoader';
import read from '../js/reader';

jest.mock('../js/reader');

beforeEach(() => {
  jest.resetAllMocks();
});

test('testing mock', async () => {
  expect.assertions();
  expect(async () => {
    const mockRead = false;
    read.mockReturnValue(mockRead);
    await GameSavingLoader.load();
  }).toThrowError('Не удалось загрузить игру');
});
