import Item from './Item';

test('Item exists', () => {
    new Item({});
});

test('Item can be initialized', () => {
    const item = new Item({ id: 3, added: true, deleted: true, page: 1, position: 2 });

    expect(item.id).toEqual(3);
    expect(item.page).toEqual(1);
    expect(item.position).toEqual(2);
    expect(item.added).toEqual(true);
    expect(item.deleted).toEqual(true);
});

test('Item defaults', () => {
    const item = new Item({});
    expect(item.added).toEqual(false);
    expect(item.deleted).toEqual(false);
});
