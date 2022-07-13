import type { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useState } from "react";
import { HiMenu, HiPlay, HiX } from "react-icons/hi";
import { Aula } from "../../types/Cursos";
import ReactMarkdown from 'react-markdown'
import Link from "next/link";
import { coreApi } from "../../hooks/coreApi";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export async function getServerSideProps(context: any) {
  const aula: Aula = (
    await coreApi().get(process.env.API_URL+`/api/aulas/${context.params.id}`)
  ).data;

  const playlist: Aula[] = (
    await coreApi().get(
      process.env.API_URL+`/api/modulos/${aula.modulo.id}/aulas`)
  ).data;

  return {
    props: {
      playlist: playlist,
      aula: aula,
    },
  };
}

type Props = {
  playlist: Aula[];
  aula: Aula;
};

const Assistir: NextPage<Props> = (props: Props) => {
  const [playlistOpen, setPlaylistState] = useState<boolean>(false);

  const switchPlaylist = () => {
    setPlaylistState(!playlistOpen);
  };

  return (
    <div>
      <Head>
        <title>Cenal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <div className="row gx-0">
        <div className="col">
          <div className="ratio ratio-16x9 mb-4">
            <ReactPlayer
              className="col"
              width="100%"
              height="100%"
              url={props.aula.video}
              controls={true}
            />
          </div>

          <div className="bg-light mb-5 rounded" style={{ height: "768px" }}>
            <ul className="nav nav-tabs nav-justified font-bold" id="pills-tab" role="tablist">
              <li className="nav-item col w-100" role="presentation">
                <button
                  className="nav-link active w-100"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  Aula Escrita
                </button>
              </li>
              <li className="nav-item col w-100" role="presentation">
                <button
                  className="nav-link w-100"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Dúvidas
                </button>
              </li>
            </ul>
            <div className="bg-white p-5" style={{height: '100%'}}>
              <div className="tab-content overflow-auto" style={{ height: '100%' }} id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <ReactMarkdown>{props.aula.written}</ReactMarkdown>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  Duvidas aqui
                </div>
              </div>
            </div>
          </div>
        </div>

        {playlistOpen && (
          <>
            <div className="col-md-2 col-xs-12 pb-5 playlist">
              <div
                className="card p-0 bg-light shadow-lg"
                style={{ height: "100%" }}
              >
                <div className="card-header d-flex align-items-center">
                  <h5 className="w-100">Playlist</h5>
                  <div className="">
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={switchPlaylist}
                    >
                      <HiX />
                    </button>
                  </div>
                </div>
                <div className="card-body p-0" style={{ overflowY: "scroll" }}>
                  {props.playlist.map((aula) => {
                    return (
                      <Link key={aula.id} href={`/aulas/${aula.id}`}>
                        <div className={`alert ${aula.id === props.aula.id ? 'alert-dark' : 'alert-primary alert-hover'} row m-2`} style={{cursor: "pointer"}}>
                          <span className="col-10">{aula.title}</span>
                          <span className="col-2 text-right"><HiPlay/></span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-md-3 hide-mobile"></div>
          </>
        )}
      </div>
      {!playlistOpen && (
        <div style={{ position: "fixed", right: 20, bottom: 20 }}>
          <button
            className="btn btn-sm p-2 btn-success"
            onClick={switchPlaylist}
            data-bs-toggle="tooltip" 
            data-bs-placement="left" 
            title="Abrir playlist"
          >
            <HiMenu />
          </button>
        </div>
      )}
    </div>
  );
};

export default Assistir;
