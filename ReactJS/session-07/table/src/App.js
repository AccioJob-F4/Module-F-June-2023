import React from "react";
import TableBox from "./Table";

const App = () => {
  const items = [
    {
      id: "JHVJ",
      name: {
        firstName: "Divyansh",
        lastName: "Singh",
      },
      age: 25,
      org: "Razorpay",
      yoe: "2 years",
      designation: "SDE",
    },
    {
      id: "JHG8",
      name: {
        firstName: "Anshu",
        lastName: "Raj",
      },
      age: 27,
      org: "Google",
      yoe: "4 years",
      designation: "Frontend Engineer",
    },
    {
      id: "MNSK",
      name: {
        firstName: "Ayush",
        lastName: "Shrivastav",
      },
      age: 24,
      org: "Juspay",
      yoe: "2 years",
      designation: "SDE",
    },
  ];

  let fields = [
    ["ID", (item) => item.id],
    ["Name", (item) => item.name.firstName + " " + item.name.lastName],
    ["Age", (item) => item.age],
    ["Organization", (item) => item.org],
    ["YOE", (item) => item.yoe],
    ["Designation", (item) => item.designation],
  ];

  return (
    <div>
      <TableBox items={items} fields={fields} />
    </div>
  );
};

export default App;
