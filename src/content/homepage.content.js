import { packPrice, langkahPesan } from './abs.content'

const content = {
  seo: {
    title: 'Jasa buat landing page layoutnya Anda yang atur',
    desc: 'Ingin bisnis Anda tampak profesional dengan landing page? Pesan saja di fantasticsecond.com. Bayar sekali langsung selesai.'
  },
  banner: {
    heading: 'Jasa pembuatan landing page untuk Bisnis Anda',
    desc: 'Terjangkau, sekali bayar selesai',
    img: 'banner.jpg'
  },

  card: {
    heading: 'Jasa kami pas untuk Anda bila',
    items: [
      {
        title: 'Atur layoutnya',
        desc: 'Kami menyediakan layout layout basic yang Anda dapat pilih untuk website Anda',
        img: `https://image.freepik.com/free-vector/responsive-concept-illustration_114360-674.jpg`
      },
  
      {
        title: 'Perlu website sederhana',
        desc: 'Terkadang yang simpel lebih baik ... dan cepat',
        img: `https://image.freepik.com/free-vector/illustration-computer-icon_53876-5559.jpg`
      },
  
      {
        title: 'Bisnis Anda aktif di Instagram',
        desc: 'Jasa kami memang dirancang untuk UMKM',
        img: `https://image.freepik.com/free-vector/social-media-marketing-mobile-phone-concept_23-2148424880.jpg`
      }
    ]
  },

  card_2: {
    heading: 'Harga',
    items: packPrice
  },

  stepsV: {
    heading: 'Langkah pemesanan', 
    items: langkahPesan
  },

  descImg: {
    heading: 'Begini Rasanya Memesan Website Dari Fantastic Second',
    items: [
      {
        title: 'Pilih dan atur desainnya',
        desc: 'Anda dapat mengatur layout, font, warna, spacing dari website Anda',
        img: `https://media.giphy.com/media/xT0Gqn9yuw8hnPGn5K/source.gif`
      },

      {
        title: 'Keperluan Lainnya Tinggal Ditambah',
        desc: 'paket Anda starter pack tapi perlu konfigurasi SEO? Facebook Pixel?',
        desc_2: 'Ajukan saja melalui WA atau lihat daftar layanan kami',
        img: `https://www.freevector.com/uploads/vector/preview/27768/Secretary_vector_2.jpg`
      }
    ]
  },

  desc2: {
    heading: 'Masih belum yakin?',
    items: [
      {
        title: 'Lihat portfolio',
        desc: 'Contoh website hasil karya sebelumnya',
        link: '/portfolio'
      },

      {
        title: 'Lihat daftar layananan',
        desc: 'Perlu tambahan spesifik seperti SEO, Facebook Pixel, custom animation atau lainnya? Bisa tanya tanya di WA atau cek page daftar layanan',
        link: '/layanan'
      }
    ]
  }
}

export default content