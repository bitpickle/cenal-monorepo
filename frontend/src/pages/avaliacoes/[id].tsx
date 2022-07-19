import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import PerguntaCard from "../../components/cards/PerguntaCard";
import ModalNota from "../../components/modal/ModalNota";
import { coreApi } from "../../hooks/coreApi";
import { Avaliacao } from "../../types/Cursos";

export async function getServerSideProps(context: any) {
  const avaliacao: Avaliacao = (
    await coreApi().get(`/api/avaliacoes/${context.params.id}`)
  ).data;

  return {
    props: {
      avaliacao: avaliacao,
    },
  };
}

type Props = {
  avaliacao: Avaliacao;
};

const Prova: NextPage<Props> = (props: Props) => {
  const [nota, setNota] = useState<number>(0);
  const [textModal, setTextModal] = useState<string>("");
  let checked = new Map<string, string>();  

  const handleCallback = (pergunta: string, alternativa: string) => {
    checked.set(pergunta, alternativa);
  };

  const result = () => {
    let nota = 0;

    props.avaliacao.perguntas.map((pergunta) => {
      let correct = pergunta.alternativas.find(
        (alt) => alt.isCorrect === true
      )?.id;

      if (correct === checked.get(pergunta.id)) {
        document
          .getElementById(correct!)
          ?.parentElement?.setAttribute("class", "bg-success");
        nota++;
      } else {
        document
          .getElementById(checked.get(pergunta.id)!)
          ?.parentElement?.setAttribute("class", "bg-danger");
      }
    });
    setNota(nota);
    setTextModal(`A sua nota da avaliação foi ${nota}. As questões corretas estão marcadas de verde.`);
  };

  return (
    <div>
      <Head>
        <title>Cenal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <ModalNota text={textModal}/>

      <div className="col-sm-12">
        {props.avaliacao.perguntas.map((pergunta) => {
          return (
            <PerguntaCard
              parentCallback={handleCallback}
              alternativas={pergunta.alternativas}
              content={pergunta.content}
              id={pergunta.id}
              key={pergunta.id}
            />
          );
        })}
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          {(
            <button className="btn btn-success col-2" id="finalizar" onClick={()=>{
              if (checked.size >= props.avaliacao.perguntas.length) {
                result();
                document.getElementById('finalizar')?.setAttribute('disabled', 'true');
              } else {
                setTextModal("Responda todas as perguntas antes de finalizar.");
              }
            }}
            data-bs-toggle="modal" data-bs-target="#modalNota"
            >
              Finalizar
            </button>
          )}
          &nbsp;
          {nota > 0 && (
            <Link href={'/avaliacoes'}>
              <button onClick={()=>{window.location.reload()}} className="btn btn-warning col-2">
                Refazer
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Prova;
