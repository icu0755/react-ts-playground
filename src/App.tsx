import React from 'react';
import './App.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import Item from '../Domain/Item';
import ItemsEditor from './Components/ItemsEditor';

interface AppState {
    activePage: number,
    items: Item[],
}


function compareItems(a: Item, b: Item): number {
    return (a.page - b.page === 0)
        ? a.position - b.position
        : a.page - b.page;
}

class App extends React.Component<{}, AppState> {
    constructor(props: any) {
        super(props);
        this.state = {
            activePage: 0,
            items: [],
        };
    }

    componentDidMount() {
        const items = [
            { id: 0, page: 0, position: 0 },
            { id: 1, page: 0, position: 1 },
            { id: 2, page: 1, position: 0 },
            { id: 3, page: 1, position: 1 },
            { id: 4, page: 2, position: 0 },
            { id: 5, page: 2, position: 1 },
        ];
        this.setState({ items });
    }

    pagesFromItems(items: Item[]) {
        const pages = items.reduce((acc: Set<number>, item: Item) => {
            acc.add(item.page);
            return acc;
        }, new Set());
        return Array.from(pages);
    };

    onPageTabDrop(page: number, item: Item) {
        this.moveItemToPage(page, item);
        this.setActivePage(page);
    }

    moveItemToPage(page: number, item: Item) {
        const items = this.state.items
            .map(x => x.id === item.id ? { ...item, page, position: -1 } : x)
            .sort(compareItems)
            .map((x, i) => x.page === page ? { ...x, position: i } : x);
        this.setState({ items });
    }

    setActivePage(page: number) {
        this.setState({ activePage: page });
    }

    render() {
        const { activePage, items } = this.state;
        const pages = this.pagesFromItems(items);

        return (
            <ItemsEditor
                activePage={activePage}
                items={items}
                pages={pages}
                onPageTabDrop={this.onPageTabDrop.bind(this)}
                onPageTabClick={this.setActivePage.bind(this)}/>
        );
    }
}

export default App;
