import "./Line.css";

type LineProps = {
  colorLine?: string;
};

function Line({ colorLine = "black" }: LineProps) {
  return <div style={{ backgroundColor: colorLine }} className="line" />;
}

export default Line;
