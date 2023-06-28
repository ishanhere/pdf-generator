import { Row, Col, Divider, Typography } from "antd";
import { Fragment } from "react";
const UserProfileOverViewPW = ({ data }) => {
  const { Title, Text } = Typography;

  return (
    <Row>
      <Col span={24}>
        <div className="container_overview">
          {data?.overview && (
            <Fragment>
              <Row className="ml10 mb10">
                <Col span={24} className="font24 font700 ">
                  {data?.name}
                </Col>
              </Row>
              <Row className="ml10 mb20">
                <Col span={2}>
                  <Divider type="vertical" />
                </Col>
                <Col span={10} className="row_dir_pw_overview">
                  <div className="display-flex-row">
                    <div className="">
                      <div>
                        <Text type="secondary">Compared Against</Text>
                      </div>
                      <div className="">
                        <div className="font14 align-left font700">
                          {data?.overview?.comparedAgainst ?? "--"}
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col span={1}>
                  <Divider type="vertical" />
                </Col>
                <Col span={10} className="row_dir_pw_overview">
                  <div className="">
                    <div>
                      <Text type="secondary">Total Investment Value</Text>
                    </div>
                    <div className="">
                      <div className="font14 align-left font700" style={{}}>
                        {data?.overview?.totalInvestmentValue ?? "--"}
                      </div>
                    </div>
                  </div>
                </Col>
                <Col span={1} className="align-right">
                  <Divider type="vertical" />
                </Col>
              </Row>
              <Row className="ml10 mb10">
                <Col span={24} className="font20 font700 ">
                  Portfolio Health Summary
                </Col>
              </Row>
              <Row className="ml10">
                <Col span={2}>
                  <Divider type="vertical" className="portfolio" />
                </Col>
                <Col span={6} className="row_dir_pw_overview">
                  <div className="display-flex-row">
                    <div className="">
                      <div className="font500 font16 fx_color mb5">
                        Asset Allocation
                      </div>
                      <div
                        className="font12 align-left font400 full-width"
                        dangerouslySetInnerHTML={{
                          __html:
                            data?.overview?.assetAllocation ??
                            "<span>--</span>",
                        }}
                      ></div>
                    </div>
                  </div>
                </Col>
                <Col span={1}>
                  <Divider type="vertical" className="portfolio" />
                </Col>
                <Col span={6} className="row_dir_pw_overview">
                  <div className="">
                    <div className="font500 font16 fx_color mb5">Returns</div>
                    <div
                      className="font12 align-left font400 full-width"
                      dangerouslySetInnerHTML={{
                        __html: data?.overview?.returns ?? "<span>--</span>",
                      }}
                    ></div>
                  </div>
                </Col>
                <Col span={1}>
                  <Divider type="vertical" className="portfolio" />
                </Col>
                <Col span={6} className="row_dir_pw_overview">
                  <div>
                    <div className="font500 font16 fx_color mb5">
                      Stress Test
                    </div>
                    <div
                      className="font12 align-left font400 full-width"
                      dangerouslySetInnerHTML={{
                        __html: data?.overview?.stressTest ?? "<span>--</span>",
                      }}
                    ></div>
                  </div>
                </Col>
                <Col span={2} className="align-right">
                  <Divider type="vertical" className="portfolio" />
                </Col>
              </Row>
            </Fragment>
          )}
        </div>
      </Col>
      <Divider className="custom_divider" />
    </Row>
  );
};

export default UserProfileOverViewPW;
