import type { NextPage } from 'next'
import Head from 'next/head'
import Router from 'next/router';
import { useEffect } from 'react'

const Unauthorized: NextPage = () => {

  useEffect(()=>{
    setTimeout(() => {
      Router.push('/')
    }, 5000);
  });

  return (
    <div>
      <Head>
        <title>Cenal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <div className="col-sm-12">
          <div className="card">
              <div className="card-header">
                  <h5>Hello card</h5>
              </div>
              <div className="card-body">
                  <p>
                    Você não tem permissão para visitar esta página. Iremos te redirecionar para o perfil em alguns segundos.
                  </p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Unauthorized
