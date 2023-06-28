import { Fragment } from "react";

const FeesOnBoarding = ({ data }) => {
  return data ? (
    <div>
      {data.sections.map((item, index) => {
        return (
          <div key={index} className="fees_container">
            <div className="row">
              {/* <div className="col-md-12" /> */}
              <h3
                style={{
                  padding: 15,
                  fontSize: 20,
                  borderBottom: "1px solid #cccccc",
                  marginBottom: 0,
                }}
              >
                {item.title}
              </h3>
              {/* <div style={{ background: "#FAFAFA" }} className="row" /> */}
              <div
                style={{
                  marginLeft: 5,
                  marginTop: 1,
                  width: "30%",
                  position: "relative",
                  float: "left",
                  borderBottom: "1px solid #cccccc",
                  backgroundColor: "#FAFAFA",
                }}
                className="col-md-3"
              >
                <h4 style={{ fontSize: 14, padding: 12 }}>Fee Item</h4>
              </div>
              <div
                style={{
                  overflow: "auto",
                  marginTop: 1,
                  borderLeft: "1px solid #cccccc",
                  borderBottom: "1px solid #cccccc",
                  backgroundColor: "#FAFAFA",
                }}
                className="col-md-8"
              >
                <h4 style={{ fontSize: 14, fontWeight: 400, padding: 12 }}>
                  Fee Description
                </h4>
              </div>
            </div>
            {item.data.map((field, index) => {
              return (
                <div
                  style={{ borderBottom: "1px solid #cccccc" }}
                  className="row page-break-inside-avoid"
                  key={index}
                >
                  {/* <hr /> */}
                  <div
                    style={{
                      marginLeft: 5,
                      marginTop: 1,
                      width: "30%",
                      position: "relative",
                      float: "left",
                    }}
                    className="col-md-3"
                  >
                    <div style={{ fontSize: 14, padding: 12 }}>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: field.key,
                        }}
                      ></span>
                      <span style={{ paddingLeft: 5 }}>
                        {field.superscript}
                      </span>
                    </div>
                  </div>

                  {/* <sup /> */}
                  <div
                    style={{
                      overflow: "auto",
                      marginTop: 1,
                      borderLeft: "1px solid #cccccc",
                    }}
                    className="col-md-8"
                  >
                    <div
                      style={{ fontSize: 14, fontWeight: 400, padding: 12 }}
                      dangerouslySetInnerHTML={{
                        __html: field.value,
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}

      <h6
        style={{ color: "#808080", lineHeight: "1.3", fontSize: 14 }}
        className="font400"
      >
        Generated on: {data.generatedOn}
      </h6>
    </div>
  ) : (
    <></>
  );
};
export default FeesOnBoarding;
