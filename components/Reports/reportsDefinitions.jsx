import { Typography } from "antd";
import { Fragment } from "react";
const ReportsDefinitions = ({ data, title }) => {
  const { Title, Text } = Typography;
  return (
    <Fragment>
      <div className="page-break">
        <div className="definitions-container_header">
          <Title level={2}>{title}</Title>
        </div>
        {data.map((item, index) => (
          <div className="definitions-container" key={index}>
            <div className="definitions-container_first">
              <Text strong>
                <span dangerouslySetInnerHTML={{ __html: item.key }} />
              </Text>
              &nbsp;&nbsp;
              <Text type="secondary">{item.extraInfo}</Text>
            </div>
            <div className="definitions-container_last">
              <Text type="secondary">
                <span dangerouslySetInnerHTML={{ __html: item.value }} />
              </Text>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default ReportsDefinitions;
