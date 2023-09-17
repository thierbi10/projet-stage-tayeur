import React from 'react';
import PaginationComponent from 'react-bootstrap/Pagination'; // Renommé le composant

export default function MyPagination() { // Renommé le nom du composant
  let active = 2;
  let items = [];

  for (let number = 1; number <= 5; number++) {
    items.push(
      <PaginationComponent.Item key={number} active={number === active}>
        {number}
      </PaginationComponent.Item>
    );
  }

  return (
    <div>
      <PaginationComponent>{items}</PaginationComponent>
    </div>
  );
}
