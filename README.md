# Plataforma Virtual do 11º Festival Maestro Felinto Lúcio Dantas

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

Devido ao contexto atual causado pela pandemia do Coronavírus-19 (COVID-19), o Festival Maestro Felinto Lúcio Dantas optou por realizar a sua 11ª edição de maneira totalmente virtual. Para tanto, foi desenvolvida esta plataforma, contendo:

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
        - Acessar link para certificados obtidos.
    
    - Professores e administradores, podem:
        - Visualizar estatísticas em tempo real do banco de dados [(*MongoDb Charts*)](https://www.mongodb.com/charts).
    
    - Administradores podem:
        - Obter códigos de presença para as aulas das oficinas;
        - Visualizar lista de presença nas aulas das oficinas.
    
## Resultados
    
### Estatísticas

Para que fosse possível o monitoramento dos dados do sistema em tempo real, foi utilizada a ferramenta gratuita [*MongoDB Charts*](https://mongodb.com/charts) que permitiu a geração automática de gráficos a partir do banco de dados.  

[Clique aqui para visualizar todos os gráficos](https://charts.mongodb.com/charts-festival2020-pmddq/public/dashboards/5f52a994-7e7d-4e9a-81a4-e54d968a06aa)

<div style="display: flex; flex-wrap: wrap; gap: 4px; margin-bottom: 40px;">
    <iframe style="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" width="50%" height="200" src="https://charts.mongodb.com/charts-festival2020-pmddq/embed/charts?id=dceaa6a9-2e08-4d2f-8633-93424c1d872f&theme=light"></iframe>  
    <iframe style="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" width="50%" height="200" src="https://charts.mongodb.com/charts-festival2020-pmddq/embed/charts?id=70dcc5c5-097e-48b4-90b9-33c5c5deb7ba&theme=light"></iframe>
    <iframe style="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" width="50%" height="200" src="https://charts.mongodb.com/charts-festival2020-pmddq/embed/charts?id=2f3f5151-272e-46f9-b8ff-cc21f2f5c24a&theme=light"></iframe>
    <iframe style="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" width="50%" height="200" src="https://charts.mongodb.com/charts-festival2020-pmddq/embed/charts?id=11f3cc09-8d9f-4e31-ab76-8f2fdc2732b7&theme=light"></iframe>
</div>

### Exemplos de telas

Na **Figura 1**, resumidamente, é possível observar as funcionalidades disponíveis para os administradores. Já na **Figura 2** é possível observar a tela em que todos os usuários confirmam as presenças nas aulas das oficinas.

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
    
Esse projeto só possível graças as constribuições de:
- Camilo Henrique Dantas Soares;
- Ivanilde Maria Santos da Cruz;
- Alana Freire Santos;
- Moisés da Rocha Soares; e
- Equipe do festival.

### Vercel

Esse projeto foi principalmente baseado no framework [Next.js](https://nextjs.org/) e foi colocado em "produção" na [Edge Network](https://vercel.com/docs/edge-network/overview) da [Vercel Platform](https://vercel.com/home?utm_source=next-site&utm_medium=banner&utm_campaign=next-website)

- [Aprenda Next.js](https://nextjs.org/learn);
- Confira também a [documentação de deployment no Next.js](https://nextjs.org/docs/deployment);
- Veja o [respositório do Next.js no GitHub](https://github.com/vercel/next.js/) - seu feedback e suas contribuições são bem-vindos.

## Autores

| [<img src="https://avatars3.githubusercontent.com/u/31693006?s=460&v=4" width=115><br><sub>@isaacmsl</sub>](https://github.com/isaacmsl) | [<img src="https://avatars3.githubusercontent.com/u/31678236?s=400&v=4" width=115><br><sub>@PauloVLB</sub>](https://github.com/PauloVLB) | [<img src="https://avatars3.githubusercontent.com/u/70401246?s=400&v=4" width=115><br><sub>@tiago-rodrigues1</sub>](https://github.com/tiago-rodrigues1) |
| :---: | :---: | :---: |