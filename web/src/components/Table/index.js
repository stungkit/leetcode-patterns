import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ReactTable from '../ReactTable';

import questionList from '../../data';

import './styles.scss';

const Table = () => {
  const data = React.useMemo(() => questionList, []);

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
