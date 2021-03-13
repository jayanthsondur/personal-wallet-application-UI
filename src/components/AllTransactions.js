import React from "react";
import { Table } from "reactstrap";

function AllTransactions() {
  return (
    <div>
      <Table responsive className="mytable">
        <thead>
          <tr>
            <th>#</th>
            <th>User ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>User 1</td>
            <td>Name 1 </td>
            <td>998899998</td>
            <td>71265.43</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>User 2</td>
            <td>Name 2 </td>
            <td>998456877</td>
            <td>1765.43</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>User 3</td>
            <td>Name 3 </td>
            <td>721899877</td>
            <td>5765.43</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default AllTransactions;
