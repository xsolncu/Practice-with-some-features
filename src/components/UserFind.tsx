import axios from 'axios';
import React, { FC, useState } from 'react';
import Table from './Table';

export interface IResults {
  results: IUsers[];
}

export interface IUsers {
  id: number;
  name: string;
  username: string;
}

const UserFind: FC<IUsers> = () => {
  const [users, setUsers] = useState<IUsers[]>([]);
  const [text, setText] = useState<string>();

  async function UserFetch() {
    const { data } = await axios.get<IResults>('https://jsonplaceholder.typicode.com/users');
    setUsers(data.results);
  }

  return (
    <>
      {users.map((user) => {
        return <Table key={user.id} {...user} />;
      })}
    </>
  );
};

export default UserFind;
