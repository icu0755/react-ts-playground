import Manager from './Manager';
import Item from '../Domain/Item';

test('Manager exists', () => {
    new Manager({});
});

test('Manager.getAllItems() returns an array', () => {
    const manager = new Manager({});
    expect(manager.getAllItems()).toEqual([]);
});

test('Manager can be initialized with items', () => {
    const items = [];
    const manager = new Manager({ items });
    expect(manager.getAllItems()).toBe(items);
});

test('Manager.getItemsOnPage', () => {
    const items = [
        new Item({page: 1}),
        new Item({page: 1}),
        new Item({page: 2}),
        new Item({page: 2}),
        new Item({page: 3}),
        new Item({page: 3}),
    ];
    const manager = new Manager({ items });
    const itemsOnPage = manager.getItemsOnPage(2);
    expect(itemsOnPage.every(item => item.page === 2)).toEqual(true);
});

test('Manager.getItemsOnPage is ordered by position', () => {
    const items = [
        new Item({page: 1, position: 3}),
        new Item({page: 1, position: 2}),
        new Item({page: 1, position: 4}),
        new Item({page: 1, position: 1}),
    ];
    const manager = new Manager({ items });
    const itemsOnPage = manager.getItemsOnPage(1);
    expect(itemsOnPage.map(item => item.position)).toEqual([1, 2, 3, 4]);
});