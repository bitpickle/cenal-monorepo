import { Link } from "react-router-dom";

export default function MenuList() {
  return (
    <>
      <li className="pc-item pc-caption">
        <label>Vereadores</label>
        <span></span>
      </li>
      <li className="pc-item">
        <Link to="/">
          <a className="pc-link">
            <span className="pc-micon">
              <i className="material-icons-two-tone">account_circle</i>
            </span>
            <span className="pc-mtext">Meu Perfil</span>
          </a>
        </Link>
      </li>
      <li className="pc-item ">
        <Link to="/aulas">
          <a className="pc-link">
            <span className="pc-micon">
              <i className="material-icons-two-tone">school</i>
            </span>
            <span className="pc-mtext">Aulas</span>
          </a>
        </Link>
      </li>
      <li className="pc-item ">
        <Link to="/avaliacoes">
          <a className="pc-link">
            <span className="pc-micon">
              <i className="material-icons-two-tone">article</i>
            </span>
            <span className="pc-mtext">Avaliações</span>
          </a>
        </Link>
      </li>
      <li className="pc-item ">
        <Link to="https://coralconsultoria.com.br/sistema/duvidas">
          <a className="pc-link">
            <span className="pc-micon">
              <i className="material-icons-two-tone">help_outline</i>
            </span>
            <span className="pc-mtext">Tirar Dúvidas</span>
          </a>
        </Link>
      </li>

      <li className="pc-item ">
        <Link to="https://coralconsultoria.com.br/sistema/leis">
          <a className="pc-link">
            <span className="pc-micon">
              <i className="material-icons-two-tone">history_edu</i>
            </span>
            <span className="pc-mtext">Principais Leis</span>
          </a>
        </Link>
      </li>

      <li className="pc-item ">
        <Link to="https://coralconsultoria.com.br/sistema/glossario">
          <a className="pc-link">
            <span className="pc-micon">
              <i className="material-icons-two-tone">search</i>
            </span>
            <span className="pc-mtext">Glossário</span>
          </a>
        </Link>
      </li>

      <li className="pc-item pc-caption">
        <label>Mesa Diretora</label>
        <span></span>
      </li>

      <li className="pc-item ">
        <Link to="https://coralconsultoria.com.br/sistema/consultoria">
          <a className="pc-link">
            <span className="pc-micon">
              <i className="material-icons-two-tone">help_center</i>
            </span>
            <span className="pc-mtext">Consultorias</span>
          </a>
        </Link>
      </li>

      <li className="pc-item pc-caption">
        <label>Secretaria da Câmara</label>
        <span></span>
      </li>
      <li className="pc-item ">
        <Link to="https://coralconsultoria.com.br/sistema/arquivo">
          <a className="pc-link">
            <span className="pc-micon">
              <i className="material-icons-two-tone">bookmark</i>
            </span>
            <span className="pc-mtext">Arquivo Geral</span>
          </a>
        </Link>
      </li>
      <li className="pc-item ">
        <Link to="https://coralconsultoria.com.br/sistema/protocolos">
          <a className="pc-link">
            <span className="pc-micon">
              <i className="material-icons-two-tone">bookmark</i>
            </span>
            <span className="pc-mtext">Protocolo de Documentos</span>
          </a>
        </Link>
      </li>

      <li className="pc-item pc-caption">
        <label>Assessores</label>
        <span></span>
      </li>

      <li className="pc-item ">
        <Link to="https://coralconsultoria.com.br/sistema/assessoria">
          <a className="pc-link">
            <span className="pc-micon">
              <i className="material-icons-two-tone">help_center</i>
            </span>
            <span className="pc-mtext">Interação Profissional</span>
          </a>
        </Link>
      </li>
    </>
  );
}
