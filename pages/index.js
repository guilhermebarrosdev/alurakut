import React from 'react';
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSideBar(propriedades) {
  return (
    <Box as="aside">
    <img src={`https://github.com/${propriedades.githubUsers}.png`} alt="Foto perfil" style={{ borderRadius: "8px"}} />
    <hr />
    <p>
      <a className="boxLink" href={`https://github.com/${propriedades.githubUsers}`}>
        @{propriedades.githubUsers}
      </a>
    </p>
    <hr />
    <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

export default function Home() {
  const [comunidades, setComunidades] = React.useState([{
    id: '122333444455555',
    title: 'Eu odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comnunidade-01.jpg'  
  }]);
  console.log(comunidades);
  const usuarioAleatorio = 'iamguui';
  // const comunidades = ['Alurakut'];
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'marcobrunodev',
    'peas',
    'rafaballerini',
    'felipefialho'
]

  return (
    <>
    <AlurakutMenu />
    <MainGrid>
      {/* <Box style="grid-area: profileArea;"> */}
      <div className="profileArea" style={{ gridArea: 'profileArea' }}>
        <ProfileSideBar githubUsers={usuarioAleatorio} />
      </div>
      <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
      <Box>
        <h1 className="title">
          Bem vindo
        </h1>   
        <OrkutNostalgicIconSet />   
      </Box>

      <Box>
        <h2 className="subTitle">Oque você deseja fazer ?</h2>
        <form action="" onSubmit={function handleCriaComunidade(e) {
          e.preventDefault();
          const dadosDoForm = new FormData(e.target);

          console.log('Campo: ', dadosDoForm.get('title'));
          console.log('Campo: ', dadosDoForm.get('image'));

          const comunidade = {
            id: new Date().toISOString(),
            title: dadosDoForm.get('title'),
            image: dadosDoForm.get('image')
          }
          const comunidadesAtualizadas = [...comunidades, comunidade]
          setComunidades(comunidadesAtualizadas);
        }}>
          <div>
            <input 
              type="text" 
              placeholder="Qual vai ser o nome da sua comunidade ?" 
              name="title" 
              aria-label="Qual vai ser o nome da sua comunidade ?" />
          </div>
          <div>
            <input 
              type="text" 
              placeholder="Coloque uma URL para usarmos como capa ?" 
              name="image" 
              aria-label="Coloque uma URL para usarmos como capa ?" />
          </div>
          <button>
            Criar comunidade
          </button>
        </form>
      </Box>
      </div>
      <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
      <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
          Comunidades ({comunidades.length})
        </h2>
        <ul>
        {comunidades.map((itemAtual) => {
          return (
            <li key={itemAtual.id}>
              <a href={`/users/${itemAtual.title}`} key={itemAtual.title}>
              <img src={itemAtual.image} />
              <span>{itemAtual.title}</span>
            </a>
            </li>
          )
        })}
        </ul>
      </ProfileRelationsBoxWrapper>
      <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">
          Pessoas da comunidades ({pessoasFavoritas.length})
        </h2>
        <ul>
        {pessoasFavoritas.map((itemAtual) => {
          return (
            <li key={itemAtual}>
              <a href={`/users/${itemAtual}`}>
              <img src={`https://github.com/${itemAtual}.png`} />
              <span>{itemAtual}</span>
            </a>
            </li>
          )
        })}
        </ul>
      </ProfileRelationsBoxWrapper>
      </div>
      </MainGrid>
      </>
  )
}
