import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  let pipe: FilterPipe;

  beforeEach(() => {
    pipe = new FilterPipe();
  });

  it('should return an empty array if items is null', () => {
    expect(pipe.transform([], 'search')).toEqual([]);
  });

  it('should return items if searchText is null', () => {
    const items = [{ name: 'item 1' }, { name: 'item 2' }];
    expect(pipe.transform(items, '')).toEqual(items);
  });

  it('should filter items based on searchText', () => {
    const items = [{ name: 'item 1' }, { name: 'item 2' }];
    expect(pipe.transform(items, '1')).toEqual([{ name: 'item 1' }]);
  });
});
