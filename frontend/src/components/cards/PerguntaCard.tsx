import { Alternativa } from "../../types/Cursos";

type Props = {
  id: string;
  content: string;
  alternativas: Alternativa[]
  parentCallback: any;
}

export default function PerguntaCard(props: Props) {
  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card">
          <div className="card-header text-bold">
            <h5>{props.content}</h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  {props.alternativas.map((alternativa) => {
                    return (
                      <div className="form-check" key={alternativa.id}>
                        <input onChange={()=>{props.parentCallback(props.id, alternativa.id)}} className="form-check-input input-primary" name={props.id} type="radio" id={alternativa.id} value={alternativa.id} required />
                        <label className="form-check-label" htmlFor={alternativa.id}>{alternativa.content}</label>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}