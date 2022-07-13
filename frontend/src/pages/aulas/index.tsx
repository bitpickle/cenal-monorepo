/* eslint-disable react-hooks/rules-of-hooks */
import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react';
import AulaCard from '../../components/cards/AulaCard';
import { coreApi } from '../../hooks/coreApi';
import { Aula, Modulo, Tema } from '../../types/Cursos';

export async function getServerSideProps(context: any) {
  const { data } = await coreApi().get('/api/temas');

  return {
    props: {
      temas: data
    }
  }
}

type Props = {
  temas: Tema[]
}

const Aulas: NextPage<Props> = (props: Props) => {

  const [modulos, setModulos] = useState<Modulo[]>([]);
  const [aulas, setAulas] = useState<Aula[]>([]);


  const handleTemaChange = (temaId: string) => {
    setModulos(props.temas.find((tema) => tema.id === temaId)!.modulos);
  }

  const handleModuloChange = async (moduloId: string) => {
    const { data } = await coreApi().get('/api/modulos/' + moduloId + '/aulas')
    setAulas(data);
  }

  return (
    <div>
      <Head>
        <title>Cenal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <div className="col-sm-12">
        <form>
          <div className="card">
            <div className="card-header">
              <h4 className="text-center mb-3">Aulas</h4>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="input-group mb-3">
                    <label className="input-group-text">Tema</label>
                    <select className="form-select" id="selectTema" onChange={(e) => { handleTemaChange(e.target.value) }}>
                      <option selected disabled value="null">Selecione o Tema</option>
                      {props.temas.map((tema) => {
                        return (
                          <option value={tema.id} key={tema.id} >{tema.name}</option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="input-group mb-3">
                    <label className="input-group-text">Módulo</label>
                    <select className="form-select" id="selectModulo" onChange={(e) => { handleModuloChange(e.target.value) }} disabled={modulos.length <= 0} >
                      {modulos.map((modulo) => {
                        return (
                          <option value={modulo.id} key={modulo.id} >{modulo.name}</option>
                        )
                      })}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="col-sm-12">
        <div className="card">
          <div className="card-header">
            <h5>{ aulas[0]?.modulo.name || "SELECIONE O TEMA E MÓDULO ACIMA" }</h5>
          </div>
          <div className="card-body">
            <div className="row">
              {
                aulas.map((aula) => {
                  return (
                    <AulaCard index={aula.index} title={aula.title} image={aula.image} id={aula.id} key={aula.id}/>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Aulas
