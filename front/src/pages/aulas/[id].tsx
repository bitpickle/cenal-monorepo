import { useParams } from "react-router-dom";

export default function Aulas() {
  const { id } = useParams<{ id: string }>();
  return <div className="App">aulas com id = {id}</div>;
}
