# React Check Speech AI

apresentação de uma API que utiliza Inteligência Artificial para conversão e interpretação de falas.

Demonstração: [https://bsallesb-check-speech-ai.netlify.app/](https://bsallesb-check-speech-ai.netlify.app/)

## Tecnologias

- [ReactJS](https://reactjs.org) (Typescript)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [React Hook Form](https://react-hook-form.com/) 
- [React Icons](https://react-icons.github.io/react-icons/)
- [Styled Components](https://styled-components.com/)
- [Vite](https://vitejs.dev/)
- [React Intl Tel Input](https://github.com/patw0929/react-intl-tel-input)
- [React Anchor Link Smooth Scroll](https://github.com/mauricevancooten/react-anchor-link-smooth-scroll)
- [reCAPTCHA](https://developers.google.com/recaptcha)
- [React Slick](https://react-slick.neostack.com/)

## Instalação

Pré-requisitos:

-   [NodeJS](https://nodejs.org/)
-   [Yarn](https://yarnpkg.com/) (opcional)

Após clonar o projeto e instalar os pré-requisitos, execute a partir da pasta raiz:
```
npm install
```
ou
```
yarn
```

Crie o arquivo `.env` a partir do `.env.example`:
```
cp .env.example .env
```

Crie uma key no site reCAPTCHA:

- [reCAPTCHA](https://www.google.com/recaptcha/admin/create)


Preencha a variável de ambiente do `.env` com os dados abaixo:
```
VITE_RECAPTCHA_API_KEY= Adicionar a KEY do reCAPTCHA
```

Após a instalação, para rodar o projeto, execute:
```
npm run dev
```
ou
```
yarn dev
```
