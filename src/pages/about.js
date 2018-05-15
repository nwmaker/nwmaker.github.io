import React from 'react'
import { Column, Row } from 'simple-flexbox'

export default () => (
  <div>
    <Column flexGrow={1}>
      <Row horizontal='center'>
        <h1>Design studio</h1>
        <p>
          All beautiful kits designed here may be available in different package.            <ul>
            <li>Kit: for experienced electronics hobbyist</li>
            <li>Half-assembled: for beginner hobbyist to practice soldering of through-hole components</li>
            <li>Fully-assembled: for curious users without soldering experience</li>
          </ul>
          Once you have the kits, either assembled or not, you have all the information about the design, the circuits, and source code in some cases.
        </p>
      </Row>
    </Column>
  </div>
)
