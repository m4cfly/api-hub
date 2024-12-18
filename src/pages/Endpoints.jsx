import React from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
  padding: 1rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 0;
  min-width: 800px;
`;

const Th = styled.th`
  background-color: #2c3e50;
  color: white;
  padding: 12px;
  text-align: left;
  font-weight: bold;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #34495e;
  }
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #eee;
  color: #333;
  font-family: monospace;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const CodeBlock = styled.pre`
  background-color: #f8f9fa;
  padding: 8px;
  border-radius: 4px;
  font-size: 0.9em;
  white-space: pre-wrap;
  word-break: break-word;
  color: #555;
  max-width: 100%;
  overflow-x: auto;
`;

const endpoints = [
  {
    method: 'GET',
    url: '{{url}}/auth/test/',
    description: 'A simple GET request to the test endpoint. No need for login.',
    headers: null,
    body: null,
    exampleResponse: null,
  },
  {
    method: 'POST',
    url: '{{url}}/pizza-orders/populate/',
    description: 'Populate the database with pizza orders for testing purposes.',
    headers: null,
    body: null,
    exampleResponse: 'Populated pizza data',
  },
  {
    method: 'POST',
    url: '{{url}}/auth/register/',
    description: 'Create a new user with a USER role by default.',
    headers: { 'Content-Type': 'application/json' },
    body: {
      username: 'user',
      password: 'test123',
    },
    exampleResponse: '{ "message": "User registered successfully" }',
  },
  {
    method: 'POST',
    url: '{{url}}/auth/login/',
    description: 'Login a user and get a JWT token.',
    headers: { 'Content-Type': 'application/json' },
    body: {
      username: 'user',
      password: 'test123',
    },
    exampleResponse: '{ "token": "your_jwt_token" }',
  },
  {
    method: 'GET',
    url: '{{url}}/protected/user_demo/',
    description: 'Access user protected route.',
    headers: { 'Accept': 'application/json', 'Authorization': 'Bearer {{jwt_token}}' },
    body: null,
    exampleResponse: null,
  },
  {
    method: 'GET',
    url: '{{url}}/protected/admin_demo/',
    description: 'Access admin protected route.',
    headers: { 'Accept': 'application/json', 'Authorization': 'Bearer {{jwt_token}}' },
    body: null,
    exampleResponse: null,
  },
  {
    method: 'POST',
    url: '{{url}}/auth/user/addrole/',
    description: 'Add admin role to user.',
    headers: { 'Accept': 'application/json', 'Authorization': 'Bearer {{jwt_token}}' },
    body: { role: 'ADMIN' },
    exampleResponse: null,
  },
  {
    method: 'GET',
    url: '{{url}}/pizza-orders',
    description: 'Get all pizza orders.',
    headers: { 'Accept': 'application/json', 'Authorization': 'Bearer {{jwt_token}}' },
    body: null,
    exampleResponse: null,
  },
  {
    method: 'GET',
    url: '{{url}}/pizza-orders/mine',
    description: 'Get my pizza orders.',
    headers: { 'Accept': 'application/json', 'Authorization': 'Bearer {{jwt_token}}' },
    body: null,
    exampleResponse: null,
  },
  {
    method: 'GET',
    url: '{{url}}/pizza-orders/1',
    description: 'Get a specific pizza order by ID.',
    headers: { 'Accept': 'application/json', 'Authorization': 'Bearer {{jwt_token}}' },
    body: null,
    exampleResponse: null,
  },
  {
    method: 'POST',
    url: '{{url}}/pizza-orders',
    description: 'Create a new pizza order.',
    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer {{jwt_token}}' },
    body: {
      pizzaName: 'Margherita',
      quantity: 2,
      price: 15.99,
      done: false,
      user: {
        username: 'usertest',
        password: null,
        roles: ['USER'],
      },
    },
    exampleResponse: null,
  },
  {
    method: 'PUT',
    url: '{{url}}/pizza-orders/1',
    description: 'Update a specific pizza order by ID.',
    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer {{jwt_token}}' },
    body: {
      pizzaName: 'Pepperoni',
      quantity: 3,
      price: 18.99,
    },
    exampleResponse: null,
  },
  {
    method: 'DELETE',
    url: '{{url}}/pizza-orders/1',
    description: 'Delete a specific pizza order by ID.',
    headers: { 'Authorization': 'Bearer {{jwt_token}}' },
    body: null,
    exampleResponse: null,
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
            <Th>Headers</Th>
            <Th>Request Body</Th>
            <Th>Example Response</Th>
          </tr>
        </thead>
        <tbody>
          {endpoints.map((endpoint, index) => (
            <tr key={index}>
              <Td>{endpoint.method}</Td>
              <Td>{endpoint.url}</Td>
              <Td>{endpoint.description}</Td>
              <Td>
                {endpoint.headers ? (
                  <CodeBlock>{JSON.stringify(endpoint.headers, null, 2)}</CodeBlock>
                ) : (
                  '-'
                )}
              </Td>
              <Td>
                {endpoint.body ? (
                  <CodeBlock>{JSON.stringify(endpoint.body, null, 2)}</CodeBlock>
                ) : (
                  '-'
                )}
              </Td>
              <Td>
                {endpoint.exampleResponse ? (
                  <CodeBlock>{endpoint.exampleResponse}</CodeBlock>
                ) : (
                  '-'
                )}
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default EndpointTable;