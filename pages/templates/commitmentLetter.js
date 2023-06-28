import CommitmentLetter from "../../components/CommitmentLetter/commitmentLetter.jsx";
// import { commitmentLetterData } from "../../components/Reports/dummyData.js";

function CommitmentLetterPage({ data }) {
  //pass dummydata to test on browser else pass from pros for API usage
  // var data = {
  //   replacementParams: {
  //     dateEntered: "12/02/2020",
  //     fullName: "Ishan Mehta",
  //     clientId: "123123",
  //     kristalName: "all weather",
  //     partnershipName: "kris",
  //     fundName: "all weather",
  //     termsheetName: "termsheetName all weather",
  //     commitmentAmount: "SGD 213098",
  //     initialAmount: "239182",
  //     commitmentDate: "2341080",
  //     paragraph:
  //       "paragraph from internal paragraph from internal paragraph from internalparagraph from internalparagraph from internal paragraph from internalparagraph from internalparagraph from internal paragraph from internalparagraph from internalparagraph from internal paragraph from internalparagraph from internal",
  //   },
  //   tableList: [
  //     { date: "12/02/2020", amount: "12345" },
  //     { date: "12/02/2020", amount: "4321" },
  //     { date: "12/02/2020", amount: "24567832" },
  //   ],
  //   isKristalPartnerShip: true,
  //   isTransactionFund: true,
  //   name: "ASHISH C",
  //   sign: "ASHISH C",
  //   date: "Apr 2, 2022",
  // };
  return <CommitmentLetter data={data} />;
}

export default CommitmentLetterPage;
