# Plataforma Virtual do 11º Festival Maestro Felinto Lúcio Dantas
![Contributions](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)
![License](https://img.shields.io/github/license/isaacmsl/festival2020)

<a href="https://vercel.com" target="_blank" rel="noopener">
    <img src="https://user-images.githubusercontent.com/31693006/94614158-1b2bfd00-027c-11eb-87af-d078ea2a621f.png" width="175" alt="Powered by Vercel" />
</a>

- [Motivo](#motivo)
- [Resultados](#resultados)
    - [Estatísticas](##estatísticas)
    - [Exemplos de telas](##exemplos-de-telas)
- [Considereções Finais](#considerações-finais)
- [Autores](#autores)


## Motivo

Devido ao contexto atual causado pela pandemia do Coronavírus-19 (COVID-19), o Festival Maestro Felinto Lúcio Dantas optou por realizar a sua 11ª edição de maneira totalmente virtual. Para tanto, foi desenvolvida este projeto, contendo:

1. Área de divulgação do evento (*Landing page*);
    - Contextualização histórica;
    - Oficinas ofertadas;
    - Horários;
    - Patrocinadores.
2. Banco de dados não relacional em nuvem [(*MongoDb Cloud*)](https://mongodb.com/cloud);
3. Área para inscrições dos participantes;
4. Área de acesso dos participantes;
    - Todos os usuários, podem:
        - Visualizar avisos do festival;
        - Acessar links paras aulas das oficinas escolhidas;
        - Confirmar presenças nas aulas das oficinas escolhidas;
        - Acessar link para certificados obtidos;
        - Enviar feedbacks sobre o festival em geral.
    
    - Professores e administradores, podem:
        - Visualizar estatísticas em tempo real do banco de dados [(*MongoDb Charts*)](https://www.mongodb.com/charts).
    
    - Administradores podem:
        - Obter códigos de presença para as aulas das oficinas;
        - Visualizar lista de presença nas aulas das oficinas.
    
## Resultados
    
### Estatísticas

Para que fosse possível o monitoramento dos dados do sistema em tempo real, foi utilizada a ferramenta gratuita [*MongoDB Charts*](https://mongodb.com/charts) que permitiu a geração automática de gráficos a partir do banco de dados.  

[Clique aqui para visualizar todos os gráficos](https://charts.mongodb.com/charts-festival2020-pmddq/public/dashboards/5f52a994-7e7d-4e9a-81a4-e54d968a06aa)

<a style="display: flex; flex-wrap: wrap; flex-direction: column; gap: 4px; margin-bottom: 40px; color: black;" href="https://charts.mongodb.com/charts-festival2020-pmddq/public/dashboards/5f52a994-7e7d-4e9a-81a4-e54d968a06aa">
<img width="50%" height="210" src="https://user-images.githubusercontent.com/31678236/94849652-1ee68d80-03fc-11eb-96b0-f05a38b2dbf6.png"></img>   
<img width="50%" height="210" src="https://user-images.githubusercontent.com/31678236/94849797-56553a00-03fc-11eb-961a-98a246d60391.png"></img> 
<img width="50%" height="210" src="https://user-images.githubusercontent.com/31678236/94850118-d4194580-03fc-11eb-840a-f8ebb4a45aaa.png"></img> 
<img width="50%" height="210" src="https://user-images.githubusercontent.com/31678236/94850026-b64be080-03fc-11eb-9ba4-8051d3cfa21f.png"></img>  
</a>

### Exemplos de telas

Na **Figura 1**, resumidamente, é possível observar as funcionalidades disponíveis para os administradores. Já na **Figura 2** é possível observar a tela em que todos os usuários confirmam as presenças nas aulas das oficinas.

[Clique aqui para conferir o site completo](https://festivalmfld2020.vercel.app/)

<div style="display: flex; flex-wrap: wrap;">
    <a style="width: 50%" href="https://user-images.githubusercontent.com/31693006/94610888-5972ed80-0277-11eb-9661-d3674563eba4.png">
        <img src="https://user-images.githubusercontent.com/31693006/94610888-5972ed80-0277-11eb-9661-d3674563eba4.png" width="100%" style="margin-bottom: 20px">
        Figura 1 - Tela de administradores
    </a>
    <a style="width: 50%" href="https://user-images.githubusercontent.com/31693006/94611527-3dbc1700-0278-11eb-8668-6fc120152760.png">
        <img src="https://user-images.githubusercontent.com/31693006/94611527-3dbc1700-0278-11eb-8668-6fc120152760.png" width="100%" style="margin-bottom: 20px">    
        Figura 2 - Tela de chamadas
    </a>    
</div>

## Tecnologias utilizadas

- [Next.js](https://nextjs.org/) - framework para o desenvolvimento da aplicação web;
- [Figma](https://www.figma.com/files/recent) - para prototipagem das páginas;
- [Tailwindcss](https://tailwindcss.com/) - para estilização das páginas;
- [*MongoDB Cloud & Tools*](https://mongodb.com/cloud) - banco de dados.

## Agradecimentos

### Contribuidores
    
Este projeto só possível graças as constribuições da equipe do festival, em especial à:
- Camilo Henrique Dantas Soares;
- Ivanilde Maria Santos da Cruz; e
- Alana Freire Santos;

### Vercel

Este projeto foi principalmente baseado no framework [Next.js](https://nextjs.org/) e foi colocado em "produção" na [Edge Network](https://vercel.com/docs/edge-network/overview) da [Vercel Platform](https://vercel.com/home?utm_source=next-site&utm_medium=banner&utm_campaign=next-website)

- [Aprenda Next.js](https://nextjs.org/learn);
- Confira também a [documentação de deployment no Next.js](https://nextjs.org/docs/deployment);
- Veja o [respositório do Next.js no GitHub](https://github.com/vercel/next.js/) - seu feedback e suas contribuições são bem-vindos.

## Considerações finais

Em geral, este projeto conseguiu resolver a demanda de inscrições e manutenção do festival. Entretanto, devido ao curto tempo de desenvolvimento, algumas funcionalidades não puderam ser desenvolvidas, como:

- Editar perfil de participante;
- Editar oficinas escolhidas pelo participante;
- Serviço de notificação por email;
- Tabela para Professores/Administradores visualizarem os participantes;
- Criar gráficos específicos para cada oficina (tempo de atuação, cidade etc) - importante para análise mais detalhada do professor;
- Participantes que escolheram "Outras" no campo "banda" informarem o nome de sua banda;
- Gráficos comparativos na relação número de inscritos x números de presentes nas oficinas.  

Para o 12º Festival Maestro Felinto Lúcio dantas, os [autores](#autores) pretendem refatorar boa parte do software e adicionar as funcionalidades carentes.

## Autores

| [<img src="https://avatars3.githubusercontent.com/u/31693006?s=460&v=4" width=115><br><sub>@isaacmsl</sub>](https://github.com/isaacmsl) | [<img src="https://avatars3.githubusercontent.com/u/31678236?s=400&v=4" width=115><br><sub>@PauloVLB</sub>](https://github.com/PauloVLB) | [<img src="https://avatars3.githubusercontent.com/u/70401246?s=400&v=4" width=115><br><sub>@tiago-rodrigues1</sub>](https://github.com/tiago-rodrigues1) |
| :---: | :---: | :---: |
