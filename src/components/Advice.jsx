export default function Advice(props) {
  return (
    <div>
      <p className="advice">{props.advice}</p>
      <p className="adviceCount">🔹You have read <strong>{props.count}</strong> pieces of advice🔹</p>
    </div>
  );
}