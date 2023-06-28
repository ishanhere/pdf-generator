import WelcomLetter from "../../components/WelcomeLetter/welcomeLetter.jsx";

function WelcomLetterPage({ data }) {
  //pass dummydata to test on browser else pass from pros for API usage
  //   let data = {
  //     name: "abc",
  //     userDetailsList: [
  //       {
  //         name: "abc",
  //         kristalId: "10001",
  //         primary: false,
  //       },
  //       {
  //         name: "pqr",
  //         kristalId: "10002",
  //         primary: true,
  //       },
  //     ],
  //     userAccountDetailList: [
  //       {
  //         accountNumber: 10000,
  //         type: "ADVISED",
  //         advisoryMode: "default",
  //         currency: "USD",
  //       },
  //       {
  //         accountNumber: 10000,
  //         type: "ADVISED",
  //         advisoryMode: "default",
  //         currency: "USD",
  //       },
  //       {
  //         accountNumber: 10000,
  //         type: "ADVISED",
  //         advisoryMode: "default",
  //         currency: "USD",
  //       },
  //       {
  //         accountNumber: 10000,
  //         type: "ADVISED",
  //         advisoryMode: "default",
  //         currency: "USD",
  //       },
  //       {
  //         accountNumber: 10000,
  //         type: "ADVISED",
  //         advisoryMode: "default",
  //         currency: "USD",
  //       },
  //       {
  //         accountNumber: 10000,
  //         type: "ADVISED",
  //         advisoryMode: "default",
  //         currency: "USD",
  //       },
  //       {
  //         accountNumber: 10000,
  //         type: "ADVISED",
  //         advisoryMode: "default",
  //         currency: "USD",
  //       },
  //       {
  //         accountNumber: 10000,
  //         type: "ADVISED",
  //         advisoryMode: "default",
  //         currency: "USD",
  //       },
  //       {
  //         accountNumber: 10000,
  //         type: "ADVISED",
  //         advisoryMode: "default",
  //         currency: "USD",
  //       },
  //       {
  //         accountNumber: 10000,
  //         type: "ADVISED",
  //         advisoryMode: "default",
  //         currency: "USD",
  //       },
  //       {
  //         accountNumber: 10000,
  //         type: "ADVISED",
  //         advisoryMode: "default",
  //         currency: "USD",
  //       },
  //       {
  //         accountNumber: 10000,
  //         type: "ADVISED",
  //         advisoryMode: "default",
  //         currency: "USD",
  //       },
  //       {
  //         accountNumber: 10000,
  //         type: "ADVISED",
  //         advisoryMode: "default",
  //         currency: "USD",
  //       },
  //       {
  //         accountNumber: 10000,
  //         type: "ADVISED",
  //         advisoryMode: "default",
  //         currency: "USD",
  //       },
  //       {
  //         accountNumber: 10000,
  //         type: "ADVISED",
  //         advisoryMode: "default",
  //         currency: "USD",
  //       },
  //       {
  //         accountNumber: 10000,
  //         type: "ADVISED",
  //         advisoryMode: "default",
  //         currency: "USD",
  //       },
  //       {
  //         accountNumber: 10000,
  //         type: "ADVISED",
  //         advisoryMode: "default",
  //         currency: "USD",
  //       },
  //       {
  //         accountNumber: 10000,
  //         type: "ADVISED",
  //         advisoryMode: "default",
  //         currency: "USD",
  //       },

  //       {
  //         accountNumber: 10000,
  //         type: "ADVISED",
  //         advisoryMode: "default",
  //         currency: "USD",
  //       },
  //       {
  //         accountNumber: 10000,
  //         type: "ADVISED",
  //         advisoryMode: "default",
  //         currency: "USD",
  //       },
  //       {
  //         accountNumber: 10000,
  //         type: "ADVISED",
  //         advisoryMode: "default",
  //         currency: "USD",
  //       },
  //       {
  //         accountNumber: 10000,
  //         type: "ADVISED",
  //         advisoryMode: "default",
  //         currency: "USD",
  //       },
  //     ],
  //   };
  return <WelcomLetter data={data} />;
}

export default WelcomLetterPage;
