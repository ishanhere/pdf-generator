import { Col, Row } from "antd";
import { AiOutlineInfoCircle } from "react-icons/ai";

const FeesOnBoardingV2 = ({ data }) => {
  return data ? (
    <div
      style={{
        background: "#FFFFFF",
        fontFamily: "aktiv-grotesk-std , sans-serif",
      }}
    >
      <div className="font700 font16 mb10 ml10">Kristal Fee</div>
      {data.sections.map((item, index) => {
        return (
          <div key={index}>
            {item.data.map((field, index) => {
              return (
                <div key={index}>
                  <div>
                    <div
                      style={{
                        fontSize: 14,
                        padding: 12,
                        marginBottom: "-20px",
                      }}
                    >
                      <span className="all_caps text_999 font700">
                        {field.key}
                      </span>
                    </div>
                  </div>

                  <div>
                    <div
                      className="fees_table_wrapper_v2"
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
      {data?.feesImportant && (
        <div dangerouslySetInnerHTML={{ __html: data?.feesImportant }} />
      )}
      {data?.feesNotes && (
        <Row className="fees_background mt30 page-break-inside-avoid">
          <Col xs={1} className="align-center mt8 ml10">
            <AiOutlineInfoCircle
              className="font20"
              style={{ color: "#3761C8" }}
            />
          </Col>
          <Col xs={22} className="ml10 mt5">
            <p className="font16 font700">{"Note"}</p>
            <p
              className="font14 no-bold mt10"
              dangerouslySetInnerHTML={{
                __html: data?.feesNotes,
              }}
            ></p>
          </Col>
        </Row>
      )}
    </div>
  ) : (
    <></>
  );
};
export default FeesOnBoardingV2;
