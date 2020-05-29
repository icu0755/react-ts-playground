import React from 'react';
import './App.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { List, Tabs } from 'react-bulma-components';

interface Item {
    id: number,
    page: number,
    position: number,
}

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
            <div className="App">
                <Tabs align="centered">
                    {pages.map(page => {
                        const isActive = page === activePage;
                        return (
                            <Tabs.Tab
                                active={isActive}
                                onClick={() => this.setActivePage(page)}
                            >Page {page}</Tabs.Tab>
                        );
                    })}
                </Tabs>
                <List hoverable>
                    {items
                        .filter(item => item.page === activePage)
                        .map(item => (
                            <List.Item>Item {item.id}</List.Item>
                        ))}
                </List>
            </div>
        );
    }
}

export default App;
