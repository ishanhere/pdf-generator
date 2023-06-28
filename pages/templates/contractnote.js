import ContractNote from "../../components/ContractNote/contractNote.jsx";

function ContractNotePage({ data }) {
  //   let data = {
  //     sections: [
  //       {
  //         title: "Title is good",
  //         data: [
  //           { key: "key1", value: "value1", superscript: "superscript1" },
  //           { key: "key1", value: "value1", superscript: "superscript1" },
  //           { key: "key1", value: "value1", superscript: "superscript1" },
  //           { key: "key1", value: "value1", superscript: "superscript1" },
  //           { key: "key1", value: "value1", superscript: "superscript1" },
  //           { key: "key1", value: "value1", superscript: "superscript1" },
  //         ],
  //         superScriptDefinitions: [
  //           { key: "key1", value: "value1" },
  //           { key: "key1", value: "value1" },
  //           { key: "key1", value: "value1" },
  //           { key: "key1", value: "value1" },
  //           { key: "key1", value: "value1" },
  //         ],
  //       },
  //       {
  //         title: "Title is good",
  //         data: [
  //           { key: "key1", value: "value1", superscript: "superscript1" },
  //           { key: "key1", value: "value1", superscript: "superscript1" },
  //           { key: "key1", value: "value1", superscript: "superscript1" },
  //           { key: "key1", value: "value1", superscript: "superscript1" },
  //           { key: "key1", value: "value1", superscript: "superscript1" },
  //           { key: "key1", value: "value1", superscript: "superscript1" },
  //         ],
  //         superScriptDefinitions: [
  //           { key: "key1", value: "value1" },
  //           { key: "key1", value: "value1" },
  //           { key: "key1", value: "value1" },
  //           { key: "key1", value: "value1" },
  //           { key: "key1", value: "value1" },
  //         ],
  //       },
  //     ],
  //     disclaimer: [
  //       "disclaimer",
  //       "test, disclaimer testtest testtestv disclaimer  disclaimer disclaimerdisclaimer",
  //     ],
  //     riskDisclosure: [
  //       "riskDisclosure riskDiscl osureris kDisclosureriskDisclosure riskDisclosure",
  //       "riskDisclosure, riskDisclosure testtest testtestv riskDisclosure  riskDisclosure riskDisclosure",
  //     ],
  //     generatedOn: "12-02-2020",
  //   };
  return <ContractNote data={data} />;
}
export default ContractNotePage;
