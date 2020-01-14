import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Badge, NavLink } from 'reactstrap';
import ReactTooltip from 'react-tooltip';
import TableView from './TableView';
import { Event } from '../Shared/Tracking';

import questionList from '../../data';

import './styles.scss';

const images = require.context('../../icons', true);

const Table = () => {
  const [checked, setChecked] = useState(
    JSON.parse(localStorage.getItem('checked')) ||
      new Array(questionList.length).fill(false),
  );

  useEffect(() => {
    window.localStorage.setItem('checked', JSON.stringify(checked));
  }, [checked]);

  const data = React.useMemo(() => questionList, []);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Sort questions by name or pattern!',
        columns: [
          {
            id: 'Checkbox',
            Cell: cellInfo => {
              return (
                <input
                  type="checkbox"
                  className="checkbox"
                  name={cellInfo.row.original.name}
                  checked={checked[cellInfo.row.original.id]}
                  onChange={() => {
                    checked[cellInfo.row.original.id] = !checked[
                      cellInfo.row.original.id
                    ];
                    setChecked([...checked]);
                  }}
                />
              );
            },
          },
          {
            Header: 'Name',
            accessor: 'name',
          },
          {
            Header: 'URL',
            accessor: 'url',
            Cell: cellInfo => (
              <NavLink
                target="_blank"
                href={cellInfo.row.original.url}
                onClick={() => {
                  Event(
                    'Table',
                    'Clicked url',
                    `${cellInfo.row.original.name} url`,
                  );
                }}
              >
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
              const companies = cellInfo.row.original.companies.map(company => {
                const icon = images(`./${company}.png`);
                return (
                  <img
                    key={company}
                    src={icon}
                    alt={company}
                    data-tip={company}
                  />
                );
              });

              return <Row className="companies">{companies}</Row>;
            },
            disableSortBy: true,
          },
        ],
      },
    ],
    // eslint-disable-next-line
    [],
  );

  return (
    <Container className="table">
      <Col>
        <Row>
          <Col>
            <ReactTooltip />
            <TableView columns={columns} data={data} />
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default Table;
