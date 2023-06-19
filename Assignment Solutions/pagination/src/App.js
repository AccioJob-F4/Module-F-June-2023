import React from "react";
import PaginationExample from "./Pagination";

const App = () => {
  const data = [
    {
      id: "HJHSGJHBK235264",
      name: "John",
    },
    {
      id: "KDJFHE3982JDKF",
      name: "Jane",
    },
    {
      id: "ALSKDI439JFDLA",
      name: "Michael",
    },
    {
      id: "PQOWEU456FDHCV",
      name: "Emily",
    },
    {
      id: "ZXCMNB3476JDKL",
      name: "William",
    },
    {
      id: "QWEFDS9876JHGF",
      name: "Oliver",
    },
    {
      id: "MNVCXZ6543LKJH",
      name: "Sophia",
    },
    {
      id: "REWQPO8765YTRB",
      name: "James",
    },
    {
      id: "LKJHGF4321ZXCV",
      name: "Olivia",
    },
    {
      id: "BVNCXM0987OIUY",
      name: "Benjamin",
    },
    {
      id: "R1SAZ4E0KM96",
      name: "Name 1",
    },
    {
      id: "W6JV0BCWJ6C6",
      name: "Name 2",
    },
    {
      id: "2D6E2QCWIP7V",
      name: "Name 3",
    },
    {
      id: "84VJ9TISCL1C",
      name: "Name 4",
    },
    {
      id: "OP7BNAI78H5Y",
      name: "Name 5",
    },
    {
      id: "QXTXU898W3G3",
      name: "Name 6",
    },
    {
      id: "993DPGEAK00K",
      name: "Name 7",
    },
    {
      id: "P52C136XNH8J",
      name: "Name 8",
    },
    {
      id: "E81IB4S6VMGP",
      name: "Name 9",
    },
    {
      id: "Q4E4QXE5R3P0",
      name: "Name 10",
    },
    {
      id: "TU74DI3DJ4KB",
      name: "Name 11",
    },
    {
      id: "MBF58M2LSBHT",
      name: "Name 12",
    },
    {
      id: "YDTPWXOYISKA",
      name: "Name 13",
    },
    {
      id: "QY79OWUNJZP3",
      name: "Name 14",
    },
    {
      id: "2KS2MINC4XEK",
      name: "Name 15",
    },
    {
      id: "WVHG0CE6OEA7",
      name: "Name 16",
    },
    {
      id: "8CZKA5YP78Y7",
      name: "Name 17",
    },
    {
      id: "IKVKBXKYRI7B",
      name: "Name 18",
    },
    {
      id: "5QMDWC9PRA3F",
      name: "Name 19",
    },
    {
      id: "Z3HJWOD8MHVK",
      name: "Name 20",
    },
    {
      id: "U9XNX3EZCFP5",
      name: "Name 21",
    },
    {
      id: "2H0JHGITBX70",
      name: "Name 22",
    },
    {
      id: "452IZVIE1FAL",
      name: "Name 23",
    },
    {
      id: "U2I6KL7N695U",
      name: "Name 24",
    },
    {
      id: "0DNSD8Y755SD",
      name: "Name 25",
    },
    {
      id: "BHBQFZVMDZEJ",
      name: "Name 26",
    },
    {
      id: "8UMMMB57JV46",
      name: "Name 27",
    },
    {
      id: "21SXUZTV3RGQ",
      name: "Name 28",
    },
    {
      id: "5DT63Z4MZRN8",
      name: "Name 29",
    },
    {
      id: "FVUAX7COS093",
      name: "Name 30",
    },
    {
      id: "4ZAQK4880J3N",
      name: "Name 31",
    },
    {
      id: "KI81TDIK68JQ",
      name: "Name 32",
    },
    {
      id: "G0DGJO2EBU4D",
      name: "Name 33",
    },
    {
      id: "0BVZWQ4SH7BK",
      name: "Name 34",
    },
    {
      id: "QE76VWZ8O450",
      name: "Name 35",
    },
    {
      id: "R4C6R6R6IT02",
      name: "Name 36",
    },
    {
      id: "K6OH5B2VHMRS",
      name: "Name 37",
    },
    {
      id: "SSV7LFNZV1TA",
      name: "Name 38",
    },
    {
      id: "XDPO0RZ142VB",
      name: "Name 39",
    },
    {
      id: "BFR3PB2KTVOE",
      name: "Name 40",
    },
    {
      id: "NGKB4B73E790",
      name: "Name 41",
    },
    {
      id: "XMTI82N98RZC",
      name: "Name 42",
    },
    {
      id: "S6EDCU0VZJZG",
      name: "Name 43",
    },
    {
      id: "0TKN2Y47SZG2",
      name: "Name 44",
    },
    {
      id: "X3A8J0J4NDVU",
      name: "Name 45",
    },
    {
      id: "VK0TEXS6VK4K",
      name: "Name 46",
    },
    {
      id: "LT7LMS1ERYEK",
      name: "Name 47",
    },
    {
      id: "YH8J3P8EGKRN",
      name: "Name 48",
    },
    {
      id: "U1QPC6KFB7IN",
      name: "Name 49",
    },
    {
      id: "USK0H5IR8HBH",
      name: "Name 50",
    },
    {
      id: "AG17SFWACSF7",
      name: "Name 51",
    },
    {
      id: "R2PVB8V4F5O6",
      name: "Name 52",
    },
    {
      id: "SSDLYOGTI5JO",
      name: "Name 53",
    },
    {
      id: "T1H6D5FW6TBU",
      name: "Name 54",
    },
    {
      id: "1A0CMRHTA6VX",
      name: "Name 55",
    },
    {
      id: "T5PK0UCFORPS",
      name: "Name 56",
    },
    {
      id: "LIF03HEQRFQI",
      name: "Name 57",
    },
    {
      id: "K33DN6XWY900",
      name: "Name 58",
    },
    {
      id: "VQ0EZHLTL161",
      name: "Name 59",
    },
    {
      id: "QNISCNHC0OPN",
      name: "Name 60",
    },
    {
      id: "1ENLJIW1HYFJ",
      name: "Name 61",
    },
    {
      id: "4TZ8ECYYQYTS",
      name: "Name 62",
    },
    {
      id: "HNXE67XEJBF6",
      name: "Name 63",
    },
    {
      id: "ARRAL7YGD2LA",
      name: "Name 64",
    },
    {
      id: "6G7I91NAF6XW",
      name: "Name 65",
    },
    {
      id: "JNY7GP3LYL7H",
      name: "Name 66",
    },
    {
      id: "4NSIP67XUL95",
      name: "Name 67",
    },
    {
      id: "JIY5G5XK45B1",
      name: "Name 68",
    },
    {
      id: "YCFPWM3UM5TQ",
      name: "Name 69",
    },
    {
      id: "CF9VMNCJS10O",
      name: "Name 70",
    },
    {
      id: "Y8N2KFTS7P0P",
      name: "Name 71",
    },
    {
      id: "YN03XCN1P31V",
      name: "Name 72",
    },
    {
      id: "ZYUOKPCDYX4N",
      name: "Name 73",
    },
    {
      id: "0VVNI04ZR8Z0",
      name: "Name 74",
    },
    {
      id: "RVNKYKYY7O1H",
      name: "Name 75",
    },
    {
      id: "KH2FX5U001KE",
      name: "Name 76",
    },
    {
      id: "SPHEDPRROZ2O",
      name: "Name 77",
    },
    {
      id: "HD8MY61F353V",
      name: "Name 78",
    },
    {
      id: "4DJWP4X6G9BW",
      name: "Name 79",
    },
    {
      id: "64GK1789LAZ7",
      name: "Name 80",
    },
    {
      id: "MLFMPWJA29QE",
      name: "Name 81",
    },
    {
      id: "NKGVOL53SD34",
      name: "Name 82",
    },
    {
      id: "9FYQSLNAMZ6C",
      name: "Name 83",
    },
    {
      id: "3IEQWQ9AKV4P",
      name: "Name 84",
    },
    {
      id: "JGKY80LMHN26",
      name: "Name 85",
    },
  ];

  return (
    <div>
      <h1>Pagination Example</h1>
      <PaginationExample data={data} />
    </div>
  );
};

export default App;
