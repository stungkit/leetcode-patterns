import React from 'react';
import { Container, Row, Col, Badge, NavLink } from 'reactstrap';
import ReactTable from '../ReactTable';

import questionList from '../../data';

import './styles.scss';

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
              <Badge className={cellInfo.row.original.difficulty} pill>
                {cellInfo.row.original.difficulty}
              </Badge>
            ),
          },
          {
            Header: 'Companies',
            accessor: 'companies',
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
            <ReactTable columns={columns} data={data} />
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default Table;
