export default class Item {
    public id: number;
    public added: boolean;
    public deleted: boolean;
    public page: number;
    public position: number;

    constructor({ id, added, deleted, page, position }) {
        this.id = id;
        this.added = added || false;
        this.deleted = deleted || false;
        this.page = page;
        this.position = position;
    }
}