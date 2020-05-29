import Item from '../../Domain/Item';
import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../Domain/Constants';

interface ItemListItemProps {
    item: Item,
}

export default function ItemListItem({ item }: ItemListItemProps) {
    const [{ isDragging }, dragRef] = useDrag({
        item: { type: ItemTypes.ITEM, ...item },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    });

    return (
        <li
            className="list-item"
            ref={dragRef}
            style={{
                opacity: isDragging ? 0.5 : 1,
            }}>Item {item.id}</li>
    );
}