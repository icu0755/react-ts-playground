import { Tabs } from "react-bulma-components";
import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../Domain/Constants';
import Item from '../../Domain/Item';

interface PageTabProps {
    active: boolean,
    page: number,

    onDrop(page: number, item: Item): void,

    onClick(page: number): void,
}

interface CollectedProps {
    isOver: boolean,
    item: Item,
}

export default function PageTab({ active, page, onClick, onDrop }: PageTabProps) {
    const [{ isOver, item }, dropRef] = useDrop({
        accept: ItemTypes.ITEM,
        drop: (): void => onDrop(page, item),
        collect: (monitor): CollectedProps => {
            return {
                isOver: monitor.isOver(),
                item: monitor.getItem(),
            };
        },
    });

    return (
        <Tabs.Tab
            domRef={dropRef}
            active={active}
            style={{
                backgroundColor: isOver ? 'lightgreen' : null,
            }}
            onClick={() => onClick(page)}
        >Page {page}</Tabs.Tab>
    );
}