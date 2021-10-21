import demo from '../app';

test('', () => {
  const received = 'test';
  expect(demo('test')).toBe(received);
});
