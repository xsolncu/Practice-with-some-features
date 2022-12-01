import React, { FC } from 'react';
import './Table.scss';
import { IUsers } from './UserFind';

const Table: FC<IUsers> = (props) => {
  const { id, name, username } = props;
  return (
    <div className="table">
      <div className="table-content">
        <span>
          {id}
          {name}
        </span>
        <span>{name}</span>
      </div>
    </div>
  );
};

export default Table;
