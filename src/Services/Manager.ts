import Item from '../Domain/Item';

export default class Manager {
    private items: Item[];

    constructor({ items }) {
        this.items = items || [];
    }

    getAllItems(): Item[] {
        return this.items;
    }

    getItemsOnPage(page: number) {
        return this.items
            .filter(item => item.page === page)
            .sort((a, b) => a.position - b.position);
    }
}
