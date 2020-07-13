import { langkahPesan, packPrice } from './abs.content'

const content = {
  seo: {
    title: 'Jasa custom CSS, SEO, web desain dan lainnya untuk website Anda',
    desc: 'Merasa landing page Anda yang sekarang kurang cukup? Pesan saja jasa yang Anda inginkan kepada kami!'
  },
  
  card: {
    heading: 'Jasa buat Website baru',
    items: packPrice
  },

  desc: {
    heading: 'Layanan tambahan',
    items: [
      {
        title: 'CSS Animation',
        desc: 'Tambahan animasi CSS. Contohnya seperti animation when scrolling atau loading. ',
        img: 'https://media.giphy.com/media/xT0Gqn9yuw8hnPGn5K/source.gif',
        link: '/layanan'
      },
      {
        title: 'Web design only',
        desc: 'Mencakup desainnya saja. Dibuat dengan Adobe XD dan Photoshop.',
        img: 'https://image.freepik.com/free-vector/designer-concept-illustration_114360-676.jpg',
        link: '/layanan'
      },
      {
        title: 'Konfigurasi SEO',
        desc: 'Buat website Anda tampil di Google dengan SEO. Kami menyediakan jasa untuk menambahkan fitur SEO statis untuk website Anda.',
        img: 'https://media.giphy.com/media/3oKGzFba1fQEuthrkQ/giphy.gif',
        link: '/layanan'
      },
      {
        title: 'Website dengan desain custom',
        desc: 'Jasa buat website frontend dengan desain from scratch. Konsultasikan saja kepada kami melalui WA',
        img: 'https://media.giphy.com/media/2ikwIgNrmPZICNmRyX/giphy.gif',
        link: '/layanan'
      }
    ]
  },

  steps: {
    heading: 'langkah pesan',
    items: langkahPesan
  }
}

export default content