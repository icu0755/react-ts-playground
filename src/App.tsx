import React from 'react';
import './App.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import Item from '../Domain/Item';
import ItemsEditor from './Components/ItemsEditor';

interface AppState {
    activePage: number,
    items: Item[],
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

    setActivePage(activePage: number) {
        this.setState({ activePage });
    }

    render() {
        const { activePage, items } = this.state;
        const pages = this.pagesFromItems(items);

        return (
            <ItemsEditor
                activePage={activePage}
                items={items}
                pages={pages}
                onPageTabClick={this.setActivePage.bind(this)} />
        );
    }
}

export default App;
