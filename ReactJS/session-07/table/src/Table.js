import React from "react";
import styled from "styled-components";
import "./Table.css";

const STableHead = styled.td`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgba(22, 47, 86, 0.87);
  border: 1px solid #ddd;
  padding: 8px;
`;

const STableHeadRow = styled.tr`
  background: rgba(11, 112, 231, 0.02);
`;

const SDimTableCell = styled.td`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgba(22, 47, 86, 0.74);
  border: 1px solid #ddd;
  padding: 8px;
`;

const CenteredDimCell = styled.td`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgba(22, 47, 86, 0.74);
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
`;

const STableContainer = styled.div`
  box-shadow: none;
  margin-top: 22px;
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const STableRow = styled.tr`
  border: 1px solid rgba(11, 112, 231, 0.1);
`;

const Value = (props) => {
  return (
    <SDimTableCell>{props.valueFn(props.item, props.index)}</SDimTableCell>
  );
};

const TableBox = ({ items, fields, isLoading = false }) => {
  return (
    <STableContainer>
      <table>
        <thead>
          <STableHeadRow>
            {fields?.map((field, index) => (
              <STableHead key={index}>{field[0]}</STableHead>
            ))}
          </STableHeadRow>
        </thead>
        {items.length > 0 ? (
          <tbody>
            {items?.map((item, idx) => (
              <STableRow key={idx}>
                {fields.map((field, index) => (
                  <Value
                    key={index}
                    index={index}
                    item={item}
                    valueFn={field[1]}
                  />
                ))}
              </STableRow>
            ))}
          </tbody>
        ) : isLoading ? (
          <STableRow>
            <CenteredDimCell colSpan={fields.length}>
              Loading ...
            </CenteredDimCell>
          </STableRow>
        ) : (
          <STableRow>
            <CenteredDimCell colSpan={fields.length}>
              No data available
            </CenteredDimCell>
          </STableRow>
        )}
      </table>
    </STableContainer>
  );
};

export default TableBox;
