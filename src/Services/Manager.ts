type Item = {
    id: number,
    page: number,
    position: number,
    added?: boolean,
    deleted?: boolean,
};

export default class Manager {
    private items: Item[];

    constructor({ items }: {items: Item[]}) {
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
