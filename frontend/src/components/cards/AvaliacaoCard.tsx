import Link from "next/link";

type Props = {
  id: string;
  title: string;
}

export default function AvaliacaoCard(props: Props) {
  return (
      <div className="col-md-2">
        <div className="card mb-3 bg-success">
          <div className="card-body">
            <h5 className="card-title text-white">{props.title}</h5>
            <Link href={`/avaliacoes/${props.id}`}>
              <button className="btn btn-light">Iniciar</button>
            </Link>
          </div>
        </div>
      </div>
  )
}