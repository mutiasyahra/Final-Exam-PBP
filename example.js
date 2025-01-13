const { MongoClient } = require('mongodb');
require('dotenv').config(); // Memuat variabel lingkungan dari file .env

// Menggunakan string koneksi dari variabel lingkungan
const mongoURI = process.env.MONGODB_URI;

const products = [
  {
    id: 'P001',
    name: 'Kaos Polos',
    description: 'Kaos polos berkualitas tinggi, nyaman dipakai.',
    price: 50000,
    stock: 100,
    imageUrl: 'https://example.com/images/kaos-polos.jpg',
  },
  {
    id: 'P002',
    name: 'Sepatu Sneakers',
    description: 'Sepatu sneakers stylish dan nyaman untuk sehari-hari.',
    price: 250000,
    stock: 50,
    imageUrl: 'https://example.com/images/sepat-sneakers.jpg',
  },
  {
    id: 'P003',
    name: 'Tas Ransel',
    description: 'Tas ransel multifungsi untuk sekolah atau traveling.',
    price: 150000,
    stock: 75,
    imageUrl: 'https://example.com/images/tas-ransel.jpg',
  },
  {
    id: 'P004',
    name: 'Jam Tangan',
    description: 'Jam tangan elegan untuk pria dan wanita.',
    price: 300000,
    stock: 30,
    imageUrl: 'https://example.com/images/jam-tangan.jpg',
  },
  {
    id: 'P005',
    name: 'Kacamata Hitam',
    description: 'Kacamata hitam stylish untuk melindungi mata Anda dari sinar UV.',
    price: 120000,
    stock: 60,
    imageUrl: 'https://example.com/images/kacamata-hitam.jpg',
  },
  {
    id: 'P006',
    name: 'Jaket Kulit',
    description: 'Jaket kulit berkualitas tinggi, cocok untuk cuaca dingin.',
    price: 450000,
    stock: 20,
    imageUrl: 'https://example.com/images/jaket-kulit.jpg',
  },
  {
    id: 'P007',
    name: 'Sepatu Formal',
    description: 'Sepatu formal yang elegan untuk acara resmi.',
    price: 350000,
    stock: 40,
    imageUrl: 'https://example.com/images/sepat-formal.jpg',
  },
];

const seedDatabase = async () => {
  const client = new MongoClient(mongoURI);

  try {
    // Koneksi ke MongoDB
    await client.connect();
    const database = client.db('olshop'); // Ganti dengan nama database Anda
    const collection = database.collection('products'); // Ganti dengan nama koleksi Anda

    // Hapus semua produk yang ada
    await collection.deleteMany({});

    // Tambahkan produk baru
    const result = await collection.insertMany(products);
    console.log(`${result.insertedCount} produk berhasil ditambahkan!`);
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Tutup koneksi
    await client.close();
  }
};

seedDatabase();