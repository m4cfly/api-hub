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

const EndpointTable = () => {
  return (
      <TableContainer>
        <Table>
          <thead>
          <tr>
            <Th>Method</Th>
            <Th>URL</Th>
            <Th>Request Body (JSON)</Th>
            <Th>Response (JSON)</Th>
            <Th>Error</Th>
          </tr>
          </thead>
          <tbody>
          {/* Pizza Endpoints */}
          <tr>
            <Td>GET</Td>
            <Td>/api/pizzas/populate</Td>
            <Td>-</Td>
            <Td>Populated pizza data</Td>
            <Td>-</Td>
          </tr>
          <tr>
            <Td>POST</Td>
            <Td>/api/pizzas/multiple</Td>
            <Td>[pizza1, pizza2, ...]</Td>
            <Td>Array of created pizzas</Td>
            <Td>400 bad request</Td>
          </tr>

          {/* OrderLine Endpoints */}
          <tr>
            <Td>POST</Td>
            <Td>/api/orders/{'{id}'}/orderline</Td>
            <Td>{`{ "pizza_id": Number, "quantity": Number }`}</Td>
            <Td>Added order line</Td>
            <Td>400 bad request</Td>
          </tr>
          <tr>
            <Td>PUT</Td>
            <Td>/api/orders/orderline/{'{id}'}</Td>
            <Td>{`{ "pizza_id": Number, "quantity": Number }`}</Td>
            <Td>Updated order line</Td>
            <Td>404 not found</Td>
          </tr>
          <tr>
            <Td>DELETE</Td>
            <Td>/api/orders/orderline/{'{id}'}</Td>
            <Td>-</Td>
            <Td>Order line deleted</Td>
            <Td>404 not found</Td>
          </tr>
          <tr>
            <Td>GET</Td>
            <Td>/api/orders/orderline/{'{id}'}</Td>
            <Td>-</Td>
            <Td>Order line details</Td>
            <Td>404 not found</Td>
          </tr>
          <tr>
            <Td>GET</Td>
            <Td>/api/orders/orderline</Td>
            <Td>-</Td>
            <Td>All order lines</Td>
            <Td>-</Td>
          </tr>
          <tr>
            <Td>GET</Td>
            <Td>/api/orders/{'{id}'}/orderline</Td>
            <Td>-</Td>
            <Td>All order lines for order</Td>
            <Td>404 not found</Td>
          </tr>
          </tbody>
        </Table>

        <div style={{ padding: '20px' }}>
          <h3>REQUEST BODY AND RESPONSE FORMATS</h3>
          <p>(1) User format (don't provide ID, for POST):</p>
          <CodeBlock>
            {`{
  "id": Number,
  "age": Number,
  "name": String,
  "gender": String ("Male" | "Female" | "Other"),
  "email": String (email)
}`}
          </CodeBlock>

          <p>Pizza format:</p>
          <CodeBlock>
            {`{
  "id": Number,
  "name": String,
  "toppings": String,
  "price": Number
}`}
          </CodeBlock>

          <p>Order format:</p>
          <CodeBlock>
            {`{
  "order_id": Number,
  "order_date": String,
  "user_id": Number,
  "order_item_list": [
    {
      "pizza_id": Number,
      "quantity": Number
    }
  ]
}`}
          </CodeBlock>

          <p>OrderLine format:</p>
          <CodeBlock>
            {`{
  "order_line_id": Number,
  "pizza_id": Number,
  "quantity": Number,
  "pizza_price": Number
}`}
          </CodeBlock>

          <h3>ERRORS</h3>
          <CodeBlock>
            {`{ "status": statusCode, "msg": "Explains the problem" }`}
          </CodeBlock>
          <p>Examples:</p>
          <p>(e1):</p>
          <CodeBlock>
            {`{ "status": 404, "msg": "No content found for this request" }`}
          </CodeBlock>
          <p>(e2):</p>
          <CodeBlock>
            {`{ "status": 400, "msg": "Field 'xxx' is required" }`}
          </CodeBlock>
          <p>(e3):</p>
          <CodeBlock>
            {`{ "status": 401, "msg": "No user is logged in" }`}
          </CodeBlock>
          <p>(e4):</p>
          <CodeBlock>
            {`{ "status": 403, "msg": "Current user does not have access rights to this content" }`}
          </CodeBlock>
        </div>
      </TableContainer>
  );
};

export default EndpointTable;