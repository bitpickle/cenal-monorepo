type Props = {
  text: string;
}
export default function ModalNota(props: Props) {
  return (
    <div className="modal fade" id="modalNota" tabIndex={-1} aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Nota da Avaliação</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {props.text}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Voltar</button>
          </div>
        </div>
      </div>
    </div>
  )
}