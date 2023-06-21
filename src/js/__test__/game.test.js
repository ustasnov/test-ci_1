import { getHealthColor } from '../game';

test('should health color green', () => {
  const result = getHealthColor({ name: 'маг', health: 51 });

  expect(result).toBe('зелёный');
});

test('should health color green', () => {
  const result = getHealthColor({ name: 'мечник', health: 49 });

  expect(result).toBe('жёлтый');
});

test('should health color red', () => {
  const result = getHealthColor({ name: 'лучник', health: 14 });

  expect(result).toBe('красный');
});
