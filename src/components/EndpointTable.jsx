import React from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 0;
  min-width: 600px;
`;

const Th = styled.th`
  background-color: #2c3e50;
  color: white;
  padding: 12px;
  text-align: left;
  font-weight: 600;
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #eee;
  color: #333;
  font-family: monospace;
`;

const CodeBlock = styled.pre`
  background-color: #f8f9fa;
  padding: 8px;
  border-radius: 4px;
  margin: 0;
  font-size: 0.9em;
`;

const endpoints = [
  {
    method: 'GET',
    url: '{{url}}/auth/test/',
    description: 'A simple GET request to the test endpoint. No need for login.',
    body: null,
    response: null,
    error: null,
  },
  {
    method: 'POST',
    url: '{{url}}/pizza-orders/populate/',
    description: 'Populate the database with pizza orders for testing purposes.',
    body: null,
    response: 'Populated pizza data',
    error: null,
  },
  {
    method: 'POST',
    url: '{{url}}/auth/register/',
    description: 'Create a new user with a USER role by default.',
    body: `{ "username": "user", "password": "test123" }`,
    response: 'User created successfully',
    error: '{ "status": 400, "msg": "Validation error" }',
  },
  {
    method: 'POST',
    url: '{{url}}/auth/login/',
    description: 'Authenticate a user and retrieve a JWT token.',
    body: `{ "username": "user", "password": "test123" }`,
    response: `{ "token": "your-jwt-token" }`,
    error: '{ "status": 401, "msg": "Invalid credentials" }',
  },
  {
    method: 'GET',
    url: '{{url}}/protected/user_demo/',
    description: 'Retrieve information accessible by USER roles.',
    body: null,
    response: 'User demo data',
    error: '{ "status": 403, "msg": "Unauthorized access" }',
  },
  {
    method: 'POST',
    url: '{{url}}/auth/user/addrole/',
    description: 'Grant ADMIN role to an existing user.',
    body: `{ "role": "ADMIN" }`,
    response: 'Role added successfully',
    error: '{ "status": 400, "msg": "Invalid role specified" }',
  },
];

const EndpointTable = () => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <Th>Method</Th>
            <Th>URL</Th>
            <Th>Description</Th>
            <Th>Request Body</Th>
            <Th>Response</Th>
            <Th>Error</Th>
          </tr>
        </thead>
        <tbody>
          {endpoints.map((endpoint, index) => (
            <tr key={index}>
              <Td>{endpoint.method}</Td>
              <Td>{endpoint.url}</Td>
              <Td>{endpoint.description}</Td>
              <Td>
                {endpoint.body ? <CodeBlock>{endpoint.body}</CodeBlock> : '-'}
              </Td>
              <Td>
                {endpoint.response ? <CodeBlock>{endpoint.response}</CodeBlock> : '-'}
              </Td>
              <Td>
                {endpoint.error ? <CodeBlock>{endpoint.error}</CodeBlock> : '-'}
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default EndpointTable;
