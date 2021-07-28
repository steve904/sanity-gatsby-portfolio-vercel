export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60be3b974618854f08b20a39',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-pkdt157r',
                  apiId: '9c1d030d-ba55-4ea4-8c84-ab1277d042b3'
                },
                {
                  buildHookId: '60be3b970bf732d1be5fcafd',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-hxs7finc',
                  apiId: '5cb1cbfa-2553-4430-bd38-7af25e87caf7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/steve904/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-hxs7finc.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
