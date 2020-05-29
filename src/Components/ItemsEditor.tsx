import { List, Tabs } from "react-bulma-components";
import React from 'react';
import Item from '../../Domain/Item';

export interface ItemsEditorProps {
    activePage: number,
    items: Item[],
    pages: number[],

    onPageTabClick(page: number): void,
}

export default function ItemsEditor({ items, pages, activePage, onPageTabClick }: ItemsEditorProps) {
    return (
        <div className="App">
            <Tabs align="centered">
                {pages.map(page => {
                    const isActive = page === activePage;
                    return (
                        <Tabs.Tab
                            active={isActive}
                            onClick={() => onPageTabClick(page)}
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