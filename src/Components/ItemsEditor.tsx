import { List, Tabs } from "react-bulma-components";
import React from 'react';
import Item from '../../Domain/Item';
import ItemListItem from './ItemListItem';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import PageTab from './PageTab';

export interface ItemsEditorProps {
    activePage: number,
    items: Item[],
    pages: number[],
    onPageTabDrop(page: number, item: Item): void,
    onPageTabClick(page: number): void,
}

export default function ItemsEditor({ items, pages, activePage, onPageTabClick, onPageTabDrop }: ItemsEditorProps) {
    return (
        <div className="App">
            <DndProvider backend={HTML5Backend}>
                <Tabs align="centered">
                    {pages.map(page => {
                        const isActive = page === activePage;
                        return (
                            <PageTab
                                key={`tab-${page}`}
                                active={isActive}
                                page={page}
                                onDrop={onPageTabDrop}
                                onClick={onPageTabClick}/>
                        );
                    })}
                </Tabs>
                <List hoverable>
                    {items
                        .filter(item => item.page === activePage)
                        .map(item => <ItemListItem key={`item-${item.id}`} item={item}/>)}
                </List>
            </DndProvider>
        </div>
    );
}