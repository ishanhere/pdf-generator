/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";

const CartOrder = ({ data }) => {
  return data ? (
    <div className="cartorder_container">
      {data.includesFailedOrders ? (
        <h2>Failed Transaction Summary</h2>
      ) : (
        <h2>Pending Transaction Summary</h2>
      )}
      <table className="table-one">
        <tbody>
          <tr>
            <td>
              <table>
                <tbody>
                  <tr>
                    <td>Kristal ID :</td>
                    <td>{data.kristalID}</td>
                  </tr>
                  <tr>
                    <td>Account :</td>
                    <td>{data.account}</td>
                  </tr>
                  <tr>
                    <td>Creation Date :</td>
                    <td>{data.basketDate}</td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td>
              <table>
                <tbody>
                  <tr>
                    <td>Client Name :</td>
                    <td>{data.clientName}</td>
                  </tr>
                  <tr>
                    <td>Creation Time :</td>
                    <td>{data.basketTime}</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <p>{data.salutation},</p>
      <p>{data.summaryText}</p>
      <br />

      {data.sections &&
        data.sections.map((item, index) => {
          return (
            <Fragment key={index}>
              <h3> {item.title}</h3>
              <table className="table-two">
                <tbody>
                  {item?.data &&
                    item?.data.length > 0 &&
                    item.data.map((field, itemIndex) => {
                      return (
                        // ,
                        <Fragment key={itemIndex}>
                          <tr>
                            <td>
                              <img src={field.image} alt="Logo" />
                            </td>
                            <td>
                              {field.kristalName} <br />
                              <span className="small">{field.mechanism}</span>
                            </td>
                            <td>
                              Units : {field.units || "--"}
                              <br /> Price :
                              <span className="unit">
                                {field.price > 0 ? field?.kristalCurrency : ""}
                              </span>
                              <span className="small">
                                {field.price > 0 ? field.price : "--"}
                              </span>
                            </td>
                            <td className="small">
                              {data.includesFailedOrders && (
                                <span className="font700">Order Failed</span>
                              )}
                            </td>
                            <td className="small">
                              Order Amount
                              <br />
                              <span className="total-unit">
                                {field?.orderCurrency}
                              </span>
                              <span className="total">
                                {(field.orderAmount || 0).toFixed(4)}
                              </span>
                            </td>
                          </tr>
                          {data.includesFailedOrders && (
                            <tr className="error-row">
                              <td colSpan={2}>
                                <span className="small">
                                  {field.failureReason}
                                </span>
                              </td>
                            </tr>
                          )}
                        </Fragment>
                      );
                    })}
                </tbody>
              </table>
            </Fragment>
          );
        })}

      <br />
      <p className="bottom-line"> {data.footnote}</p>
    </div>
  ) : (
    <Fragment></Fragment>
  );
};
export default CartOrder;
