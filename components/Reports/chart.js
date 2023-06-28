/* eslint-disable @next/next/no-img-element */

const Chart = ({ filename, maxWidth, width }) => {
  return (
    <img
      style={{ width: `${width}%`, maxWidth: `${maxWidth}%` }}
      src={filename}
      alt="Image-graph"
    />
  );
};

export default Chart;
