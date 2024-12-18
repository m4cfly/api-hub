import React from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
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
  font-size: 0.9em;
  white-space: pre-wrap;
  word-break: break-word;
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
    description: 'Authenticate a user and retrieve a JWT token.',
    headers: { 'Content-Type': 'application/json' },
    body: {
      username: 'user',
      password: 'test123',
    },
    exampleResponse: '{ "token": "your-jwt-token" }',
  },
  {
    method: 'GET',
    url: '{{url}}/protected/user_demo/',
    description: 'Retrieve information accessible by USER roles.',
    headers: { Authorization: 'Bearer {{jwt_token}}', Accept: 'application/json' },
    body: null,
    exampleResponse: '{ "message": "User demo content" }',
  },
  {
    method: 'POST',
    url: '{{url}}/auth/user/addrole/',
    description: 'Grant ADMIN role to an existing user.',
    headers: {
      Authorization: 'Bearer {{jwt_token}}',
      Accept: 'application/json',
    },
    body: {
      role: 'ADMIN',
    },
    exampleResponse: '{ "message": "Role added successfully" }',
  },
  {
    method: 'GET',
    url: '{{url}}/pizza-orders',
    description: 'Retrieve all pizza orders.',
    headers: {
      Authorization: 'Bearer {{jwt_token}}',
      Accept: 'application/json',
    },
    body: null,
    exampleResponse: '[{ "pizzaName": "Margherita", "quantity": 2, "price": 15.99 }]',
  },
  {
    method: 'POST',
    url: '{{url}}/pizza-orders',
    description: 'Create a new pizza order.',
    headers: {
      Authorization: 'Bearer {{jwt_token}}',
      'Content-Type': 'application/json',
    },
    body: {
      pizzaName: 'Margherita',
      quantity: 2,
      price: 15.99,
      done: false,
      user: { username: 'usertest', roles: ['USER'] },
    },
    exampleResponse: '{ "message": "Pizza order created successfully" }',
  },
  {
    method: 'GET',
    url: '{{url}}/pizza-orders/mine',
    description: 'Retrieve pizza orders specific to the logged-in user.',
    headers: {
      Authorization: 'Bearer {{jwt_token}}',
      Accept: 'application/json',
    },
    body: null,
    exampleResponse: '[{ "pizzaName": "Margherita", "quantity": 1, "price": 12.99 }]',
  },
  {
    method: 'GET',
    url: '{{url}}/pizza-orders/1',
    description: 'Retrieve details of a specific pizza order by ID.',
    headers: {
      Authorization: 'Bearer {{jwt_token}}',
      Accept: 'application/json',
    },
    body: null,
    exampleResponse: '{ "pizzaName": "Pepperoni", "quantity": 2, "price": 18.99 }',
  },
  {
    method: 'PUT',
    url: '{{url}}/pizza-orders/1',
    description: 'Update details of a specific pizza order by ID.',
    headers: {
      Authorization: 'Bearer {{jwt_token}}',
      'Content-Type': 'application/json',
    },
    body: {
      pizzaName: 'Veggie Delight',
      quantity: 3,
      price: 19.99,
    },
    exampleResponse: '{ "message": "Pizza order updated successfully" }',
  },
  {
    method: 'DELETE',
    url: '{{url}}/pizza-orders/1',
    description: 'Delete a specific pizza order by ID.',
    headers: {
      Authorization: 'Bearer {{jwt_token}}',
    },
    body: null,
    exampleResponse: '{ "message": "Pizza order deleted successfully" }',
  }
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
