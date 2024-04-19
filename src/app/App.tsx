import * as React from 'react';

import { Header } from './components/Header.tsx';
import { Title } from './components/Title.tsx';
import { Activity } from './components/Activity.tsx';
import { Footer } from './components/Footer.tsx';

const App = (): React.ReactNode => {
  return (
    <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
      <h1 style={{ display: 'none' }}>Lionel Lebon</h1>
      <Header />

      <Title>
        Mon{' '}
        <span className="underline underline-offset-3 decoration-8 decoration-violet-600">
          espace
        </span>
      </Title>

      <Activity
        tag="Développement"
        title={
          <div className="leading-none tracking-tight">
            LinkedIn{' '}
            <span className="text-sm underline underline-offset-3 decoration-6 decoration-violet-600">
              En recherche d'emploi
            </span>
          </div>
        }
        content={
          <>
            <p>
              Retrouvez l'ensemble de mes activités courantes et passées ainsi
              que mes formations sur LinkedIn. N'hésitez pas à prendre contact
              avec moi pour discuter de vos projets !
            </p>

            <p className="text-sm italic pt-3">
              Vous pouvez également jeter un œil à mon{' '}
              <a
                href="https://github.com/lebolnobel"
                title="Github/lebolnobel"
                className="underline text-violet-600"
              >
                Github
              </a>{' '}
              !
            </p>
          </>
        }
        link="https://www.linkedin.com/in/lionellebon/"
      />

      <Activity
        tag="Nature"
        title="Photographe/Naturaliste"
        content={
          <p>
            La crise sanitaire liée au COVID m'a permis de développer davantage
            mes passions pour la nature et le regard qu'on porte sur elle.
            J'essaie de la sublimer et de sensibiliser un maximum de personnes.
            Jetez un œil à mes posts et mes stories à la une sur Instagram.
          </p>
        }
        link="https://www.instagram.com/lebolnobel"
      />

      <Title>
        Mes{' '}
        <span className="underline underline-offset-3 decoration-8 decoration-violet-600">
          projets
        </span>
      </Title>

      <Activity
        date="2024"
        tag="Nature"
        title="Plecotus"
        content={
          <p>
            Dans le cadre de la formation de Plecotus (chiroptère, aka
            Chauves-souris), j'ai réalisé une petite application afin de
            permettre aux étudiants de revoir les critères d'identifications des
            individus, pendant l'hibernation hivernale.
          </p>
        }
        link="https://plecotus.netlify.app/"
      />

      <Footer />
    </main>
  );
};

export default App;
