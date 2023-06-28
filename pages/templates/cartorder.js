import CartOrder from "../../components/CartOrder/cartOrder.jsx";

function CartOrderPage({ data }) {
  //pass dummydata to test on browser else pass from pros for API usage
  // let data = {
  //   sections: [
  //     {
  //       title: "Invest Orders:",
  //       data: [
  //         {
  //           image:
  //             "https://s3-ap-southeast-1.amazonaws.com/kristal-prod-backend/Images/Kristals/KRIS-38105000.jpg",
  //           kristalName: "Canara Robeco Bluechip Equity Fund",
  //           mechanism: "One Time",
  //           price: 47.0,
  //           units: 100,
  //           orderAmount: 4700,
  //           currency: "USD",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Redeem Orders:",
  //       data: [
  //         {
  //           image:
  //             "https://s3-ap-southeast-1.amazonaws.com/kristal-prod-backend/Images/Kristals/KRIS-38105000.jpg",
  //           kristalName: "Canara Robeco Bluechip Equity Fund",
  //           mechanism: "One Time",
  //           price: 47.0,
  //           units: 100,
  //           orderAmount: 4700,
  //           currency: "USD",
  //         },
  //       ],
  //     },
  //   ],
  //   kristalID: "1100000",
  //   clientName: "Hrishikesh Kakade",
  //   account: "DU605292 (Listed Assets)",
  //   basketDate: "December 16, 2021",
  //   basketTime: "21:20 UTC",
  //   salutation: "Dear Hrishikesh Kakade",
  //   summaryText:
  //     "Here is the detailed summary of the Basket Order placed by your RM on December 16, 2021 at 21:20 UTC ",
  //   footnote:
  //     "This is just the summary of the basket orders, You can Approve or Reject these orders by logging in to the client portal or using link provided in the email",
  // };
  return <CartOrder data={data} />;
}
export default CartOrderPage;
