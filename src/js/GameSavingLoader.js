import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static async load() {
    try {
      const buffer = await read();
      if (!buffer) {
        throw new Error('Не удалось загрузить игру');
      }
      const saving = await json(buffer);
      return saving;
    } catch (e) {
      return e;
    }
  }
}
