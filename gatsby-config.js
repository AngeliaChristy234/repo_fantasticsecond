module.exports = {
  siteMetadata: {
    title: `Fantastic Second`,
    description: `Perlu landing page sederhana bayar per halaman untuk keperluan bisnis Anda? Tenang saja, we got you covered!`,
    image: `http://fantasticsecond.com/FS_images/iconlogo.png`,
    siteUrl: `https://fantasticsecond.com`,
    author: `Angelia Christy`,
    social: {
      instagram: 'fantasticsecond'
    },
    socialLinks: {
      instagram: 'https://instagram.com/fantasticsecond/',
      email: 'mailto:ask@fantasticsecond.com',
      whatsapp: 'https://api.whatsapp.com/send?phone=87775678991&text=&source=&data=&app_absent='
    },
    keywords: ['landing page', 'landing page custom', 'website custom', 'desain website custom', 'jasa buat website', 'jasa desain website', 'landing page murah', 'website murah']
  },
  plugins: [
    'gatsby-plugin-antd',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-less`,
      loader: `less-loader`,
      options: {
        javascriptEnabled: true,
        modifyVars: {
          'primary-color': '#C1A57B',
          'font-family': 'Arial',
          'layout-body-background': '#66ff79'
        }
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.jpg`, // This path is relative to the root of the site.
      }
    }
  ],
}
