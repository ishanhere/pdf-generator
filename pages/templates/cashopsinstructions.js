import CashOpsInstructions from "../../components/CashOpsInstructions/cashopsinstructions.jsx";

function CashOpsInstructionsPage({ data }) {
  //pass dummydata to test on browser else pass from pros for API usage
  //   let dummydata = {
  //     name: "test",
  //     accountDetails: [
  //       {
  //         key: "key1",
  //         value: "value1",
  //       },
  //       {
  //         key: "key2",
  //         value: "value2",
  //       },
  //       {
  //         key: "key2",
  //         value: "value2",
  //       },
  //       {
  //         key: "key2",
  //         value: "value2",
  //       },
  //     ],
  //     comment: "comment123123 123123",
  //   };
  return <CashOpsInstructions data={data} />;
}

export default CashOpsInstructionsPage;
