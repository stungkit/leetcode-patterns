import React from 'react';
import { Table } from 'reactstrap';
import { useTable, useSortBy } from 'react-table';
import { FaSortAlphaUp, FaSortAlphaDown } from 'react-icons/fa';

function TableView({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      initialState: {
        sortBy: [{ id: 'pattern', desc: false }],
      },
    },
    useSortBy,
  );

  return (
    <Table align="center" striped hover {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                <span>
                  {' '}
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <FaSortAlphaUp />
                    ) : (
                      <FaSortAlphaDown />
                    )
                  ) : (
                    ''
                  )}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default TableView;
