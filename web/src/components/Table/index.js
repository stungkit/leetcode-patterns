import React from 'react';
import { Container, Row, Col, Badge, NavLink } from 'reactstrap';
import TableView from './TableView';

import questionList from '../../data';

import './styles.scss';

const images = require.context('../../icons', true);

const Table = () => {
  const data = React.useMemo(() => questionList, []);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Sort questions by name or pattern!',
        columns: [
          {
            Header: 'Name',
            accessor: 'name',
          },
          {
            Header: 'URL',
            accessor: 'url',
            Cell: cellInfo => (
              <NavLink target="_blank" href={cellInfo.row.original.url}>
                {cellInfo.row.original.url}
              </NavLink>
            ),
            disableSortBy: true,
          },
          {
            Header: 'Pattern',
            accessor: 'pattern',
          },
          {
            Header: 'Difficulty',
            accessor: 'difficulty',
            disableSortBy: true,
            Cell: cellInfo => (
              <Badge
                className={cellInfo.row.original.difficulty.toLowerCase()}
                pill
              >
                {cellInfo.row.original.difficulty}
              </Badge>
            ),
          },
          {
            Header: 'Companies',
            accessor: 'companies',
            Cell: cellInfo => {
              return cellInfo.row.original.companies.map(company => {
                const img = images(`./Google.png`);
                return <img src={img} alt={company} key={company} />;
              });
            },
            disableSortBy: true,
          },
        ],
      },
    ],
    [],
  );

  return (
    <Container className="table">
      <Col>
        <Row>
          <Col>
            <TableView columns={columns} data={data} />
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default Table;
