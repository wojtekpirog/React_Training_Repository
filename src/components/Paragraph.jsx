export default function Paragraph(props) {
  const { className, errorMessage } = props;
  return <p className={className}>{errorMessage}</p>
}