import { Typography } from "antd";
const TaxDefinitions = ({ data, title }) => {
  const { Title, Text } = Typography;
  return (
    <div className="page-break-before ml10">
      <div className="font32 font700">{title}</div>
      {data.map((item, index) => {
        return (
          <div key={index} className="mt40 mb20">
            <div className="font16 font600">{item.title}</div>
            <div className="text_777 font12 font500 mb20">{item.subTitle}</div>
            {item.data.map((defination, index1) => {
              return (
                <div
                  className="page-break-inside-avoid definitions-container_tax mb20"
                  key={index1}
                >
                  <div className="definitions-container_first_tax">
                    <span
                      className="font700 all_caps font14"
                      dangerouslySetInnerHTML={{ __html: defination.key }}
                    />
                    &nbsp;&nbsp;
                    <Text type="secondary">{defination.extraInfo}</Text>
                  </div>
                  <div className="definitions-container_last_tax">
                    <span
                      className="text_777 font14 font400"
                      dangerouslySetInnerHTML={{ __html: defination.value }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default TaxDefinitions;
