import { useMemo } from 'react';

import Awesome from 'assets/awesome-tagline.jpeg';
import BBCompany from 'assets/bb-company.jpeg';
import BusinessWoman from 'assets/business-woman.jpeg';
import CoolNerd from 'assets/coolnerd.jpeg';
import Crown from 'assets/crown.jpeg';
import DCompany from 'assets/d-company.jpeg';
import Diamond from 'assets/diamond.jpeg';
import FoxCompany from 'assets/fox-company.jpeg';
import Longeste from 'assets/longeste.jpeg';
import Manager from 'assets/manager.jpeg';
import MKCompany from 'assets/mk-company.jpeg';
import RRModels from 'assets/rr-model.jpeg';
import Tagline from 'assets/tagline.jpeg';

import { CompaniesType } from 'types/companies';

type useClientsType = () => {
  companies: CompaniesType[];
};

const companies = [
  {
    id: 1,
    name: 'BB Company',
    logo: BBCompany,
    deposition:
      'Pra mim e sempre um prazer poder falar da nossa parceria com a MOST. Conseguimos melhorar os nossos processos e levar mais soluções para nossos clientes, sempre de forma estável e segura, sem contar no time incrível que está sempre disposto a nos atender e ajudar.',
    manager: BusinessWoman,
  },
  {
    id: 2,
    name: 'Cool  Nerd',
    logo: CoolNerd,
    deposition:
      'Neste mundo constante de transformação, é muito gratificante poder contar com as soluções inovadoras da Most que tem ajudado nossos clientes a construir jornadas de onboarding digital com foco na otimização, produtividade e assertividade, com resultado direto em suas diferentes operações.',
    manager: Manager,
  },
  {
    id: 3,
    name: 'Crown',
    logo: Crown,
    deposition:
      'A MostQI tem sido uma ferramenta muito útil na plataforma com uma acurácia superior a outras plataformas de mercado, dando confiabilidade e segurança na entrada de usuários. Além do mais, temos utilizado uma outra funcionalidade para leitura de conteúdos de imagem para facilitar no cadastro de usuários.',
    manager: BusinessWoman,
  },
  {
    id: 4,
    name: 'RR Models',
    logo: RRModels,
    deposition:
      'Pra mim e sempre um prazer poder falar da nossa parceria com a MOST. Conseguimos melhorar os nossos processos e levar mais soluções para nossos clientes, sempre de forma estável e segura, sem contar no time incrível que está sempre disposto a nos atender e ajudar.',
    manager: Manager,
  },
  {
    id: 5,
    name: 'Tagline',
    logo: Tagline,
    deposition:
      'A MostQI tem sido uma ferramenta muito útil na plataforma com uma acurácia superior a outras plataformas de mercado, dando confiabilidade e segurança na entrada de usuários. Além do mais, temos utilizado uma outra funcionalidade para leitura de conteúdos de imagem para facilitar no cadastro de usuários.',
    manager: BusinessWoman,
  },
  {
    id: 6,
    name: 'Fox Company',
    logo: FoxCompany,
    deposition:
      'Neste mundo constante de transformação, é muito gratificante poder contar com as soluções inovadoras da Most que tem ajudado nossos clientes a construir jornadas de onboarding digital com foco na otimização, produtividade e assertividade, com resultado direto em suas diferentes operações.',
    manager: Manager,
  },
  {
    id: 7,
    name: 'D Company',
    logo: DCompany,
    deposition:
      'Pra mim e sempre um prazer poder falar da nossa parceria com a MOST. Conseguimos melhorar os nossos processos e levar mais soluções para nossos clientes, sempre de forma estável e segura, sem contar no time incrível que está sempre disposto a nos atender e ajudar.',
    manager: BusinessWoman,
  },
  {
    id: 8,
    name: 'Diamond',
    logo: Diamond,
    deposition:
      'A MostQI tem sido uma ferramenta muito útil na plataforma com uma acurácia superior a outras plataformas de mercado, dando confiabilidade e segurança na entrada de usuários. Além do mais, temos utilizado uma outra funcionalidade para leitura de conteúdos de imagem para facilitar no cadastro de usuários.',
    manager: Manager,
  },
  {
    id: 9,
    name: 'Awesome',
    logo: Awesome,
    deposition:
      'Neste mundo constante de transformação, é muito gratificante poder contar com as soluções inovadoras da Most que tem ajudado nossos clientes a construir jornadas de onboarding digital com foco na otimização, produtividade e assertividade, com resultado direto em suas diferentes operações.',
    manager: BusinessWoman,
  },
  {
    id: 10,
    name: 'MK Company',
    logo: MKCompany,
    deposition:
      'A MostQI tem sido uma ferramenta muito útil na plataforma com uma acurácia superior a outras plataformas de mercado, dando confiabilidade e segurança na entrada de usuários. Além do mais, temos utilizado uma outra funcionalidade para leitura de conteúdos de imagem para facilitar no cadastro de usuários.',
    manager: Manager,
  },
  {
    id: 11,
    name: 'Longeste',
    logo: Longeste,
    deposition:
      'Pra mim e sempre um prazer poder falar da nossa parceria com a MOST. Conseguimos melhorar os nossos processos e levar mais soluções para nossos clientes, sempre de forma estável e segura, sem contar no time incrível que está sempre disposto a nos atender e ajudar.',
    manager: BusinessWoman,
  },
] as CompaniesType[];

const useClients: useClientsType = () => {
  return useMemo(
    () => ({
      companies: companies.sort((a, b) => (b.name > a.name ? -1 : 1)),
    }),
    [],
  );
};

export default useClients;
