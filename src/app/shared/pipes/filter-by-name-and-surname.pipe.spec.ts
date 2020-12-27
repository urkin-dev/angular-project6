import { FilterByNameAndSurnamePipe } from './filter-by-name-and-surname.pipe';

describe('FilterByNameAndSurnamePipe', () => {
  it('create an instance', () => {
    const pipe = new FilterByNameAndSurnamePipe();
    expect(pipe).toBeTruthy();
  });
});
