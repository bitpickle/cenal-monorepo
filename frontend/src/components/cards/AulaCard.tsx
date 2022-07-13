import Image from "next/image";
import Link from "next/link";

type Props = {
  id: string;
  title: string;
  image: string;
}

export default function AulaCard(props: Props) {
  return (
    <div className="col-md-4">
      <div className="card mb-3 bg-primary">
        <Image width={200} height={200} className="img-fluid card-img-top" src={props.image} alt="<?= $aula['nome']; ?>" />
        <div className="card-body">
          <h5 className="card-title text-white">
            {props.title}
          </h5>
          <Link href={`/aulas/${props.id}`}>
            <a className="btn btn-light">Assistir</a>
          </Link>
        </div>
      </div>
    </div>
  )
}