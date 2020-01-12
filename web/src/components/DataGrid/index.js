import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useTable, useSortBy } from 'react-table';

import questions from '../../data';

import './styles.scss';

function Table({ columns, data }) {
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
    },
    useSortBy,
  );

  // We don't want to render all 2000 rows for this example, so cap
  // it at 20 for this use case
  const firstPageRows = rows.slice(0, 20);

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  {/* Add a sort direction indicator */}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <div>Showing the first 20 results of {rows.length} rows</div>
    </>
  );
}

// {
//   id: 1,
//   name: 'My Question',
//   url: 'wwww.google.ca',
//   pattern: 'Arrays',
//   companies: ['abc', 'def', 'ghi'],
// },

const DataGrid = () => {
  const data = React.useMemo(() => questions, []);
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: '#',
            accessor: 'id',
          },
          {
            Header: 'Question Name',
            accessor: 'name',
          },
          {
            Header: 'URL',
            accessor: 'url',
          },
          {
            Header: 'Pattern',
            accessor: 'pattern',
          },
          {
            Header: 'Companies',
            accessor: 'companies',
          },
        ],
      },
    ],
    [],
  );

  return (
    <Container className="datagrid" fluid>
      <Col>
        <Row>
          <Col>
            <Table columns={columns} data={data} />
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default DataGrid;
