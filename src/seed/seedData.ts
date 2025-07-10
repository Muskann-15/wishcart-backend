import mongoose from 'mongoose';
import BestSeller from '../models/bestSeller';
import NewArrival from '../models/newArrival';

const bestSellers = [
  {
    name: "Classic White T-Shirt",
    category: "Men's Clothing",
    price: 450,
    imageUrl: "https://www.blackdenim.in/cdn/shop/files/0A0A6024_1.jpg?v=1726837920",
    description: "Premium cotton t-shirt with a perfect fit and timeless design",
    type: "clothing"
  },
  {
    name: "Floral Summer Dress",
    category: "Women's Clothing",
    price: 849,
    imageUrl: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/2024/AUGUST/26/MVdZamLK_86fac207f08047c6bae19c8e0ba5fc5f.jpg",
    description: "Light and flowy floral dress perfect for summer days",
    type: "clothing"
  },
  {
    name: "Leather Crossbody Bag",
    category: "Women's Accessories",
    price: 1900,
    imageUrl: "https://m.media-amazon.com/images/I/71jX3IIqu7L._AC_UY1000_.jpg",
    description: "Stylish and practical leather bag with adjustable strap",
    type: "accessories"
  },
  {
    name: "Denim Jeans",
    category: "Men's Clothing",
    price: 700,
    imageUrl: "https://www.montecarlo.in/cdn/shop/products/2230873548DN-1-32_1.jpg?v=1709974012",
    description: "Classic blue denim jeans with comfortable stretch fit",
    type: "clothing"
  },
  {
    name: "Silk Scarf",
    category: "Women's Accessories",
    price: 160,
    imageUrl: "https://sourcing-media.hktdc.com/product-original//36b9838c702540fabae7a679ada34eff.webp?width=450&height=450&mode=cover",
    description: "Elegant silk scarf with vibrant patterns",
    type: "accessories"
  },
  {
    name: "Casual Blazer",
    category: "Men's Clothing",
    price: 1299,
    imageUrl: "https://curato.in/cdn/shop/products/PAMB211C_1024x1024.jpg?v=1641022815",
    description: "Versatile blazer perfect for both formal and casual occasions",
    type: "clothing"
  },
  {
    name: "Leather Wallet",
    category: "Men's Accessories",
    price: 360,
    imageUrl: "https://images-cdn.ubuy.co.in/6762e955fd9cfd496b5d6f29-leather-men-s-wallet-luxury-mens-purse.jpg",
    description: "Genuine leather wallet with multiple card slots",
    type: "accessories"
  },
  {
    name: "Knit Sweater",
    category: "Women's Clothing",
    price: 550,
    imageUrl: "https://24thspoke.in/cdn/shop/files/1723225434788.jpg?v=1723225463&width=416",
    description: "Cozy knit sweater with modern design",
    type: "clothing"
  },
  {
    name: "Designer Watch",
    category: "Men's Accessories",
    price: 1290,
    imageUrl: "https://i5.walmartimages.com/seo/Poedagar-Men-Watch-Luxury-Business-Quartz-Watches-Stainless-Stain-Strap-Sport-Chronograph-Men-39-s-Wristwatch-Waterproof-Luminous-Quartz-Wristwatches_7b31bf36-11cf-4c68-8dfd-e630bc9a93f6.284ee349d31df69a9da1c2d294e2aade.jpeg",
    description: "Luxurious stainless steel watch with chronograph features",
    type: "accessories"
  },
  {
    name: "Skirt",
    category: "Women's Clothing",
    price: 535,
    imageUrl: "https://m.media-amazon.com/images/I/71cIoEjSkiL._AC_UY1100_DpWeblab_.jpg",
    description: "Elegant A-line skirt with comfortable waistband",
    type: "clothing"
  }
];

const newArrivals = [
  {
    name: "Denim Jacket",
    category: "Women's Clothing",
    price: 89.99,
    imageUrl: "https://www.originaldenimjeans.com/uploaded-files/category/images/thumbs/Jean-Jackets-For-Women-thumbs-400X400.jpg",
    description: "Classic denim jacket with modern styling",
    type: "clothing"
  },
  {
    name: "Minimalist Backpack",
    category: "Men's Accessories",
    price: 69.99,
    imageUrl: "https://i.etsystatic.com/15746647/r/il/f132f9/5628677542/il_fullxfull.5628677542_lh9m.jpg",
    description: "Sleek and functional backpack for everyday use",
    type: "accessories"
  },
  {
    name: "Linen Shirt",
    category: "Men's Clothing",
    price: 49.99,
    imageUrl: "https://img-farida-gupta.com/media/catalog/product/full_image/1/_/1_186_5.jpg",
    description: "Breathable linen shirt perfect for summer",
    type: "clothing"
  },
  {
    name: "Structured Handbag",
    category: "Women's Accessories",
    price: 99.99,
    imageUrl: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/25488290/2024/10/21/9ae77ee7-8318-4f56-9e44-dacbfad95d221729525409161-WOMEN-MARKS-Structured-Handheld-Bag-6221729525408629-1.jpg",
    description: "Elegant structured handbag with premium finish",
    type: "accessories"
  },
  {
    name: "Sunglasses",
    category: "Men's Accessories",
    price: 24.99,
    imageUrl: "https://chashm.pk/wp-content/uploads/2024/05/chashm-sunglasses-14.webp",
    description: "Stylish UV protection sunglasses",
    type: "accessories"
  },
  {
    name: "Saree",
    category: "Women's Clothing",
    price: 79.99,
    imageUrl: "https://cdn.sareeka.com/image/data2024/blue-paithni-traditional-saree-with-weaving-work-for-women-298407.jpg",
    description: "Traditional handwoven saree with intricate designs",
    type: "clothing"
  },
  {
    name: "Leather Belt",
    category: "Men's Accessories",
    price: 34.99,
    imageUrl: "https://assetscdn1.paytm.com/images/catalog/product/A/AC/ACCFLYER-LEATHEACME38200F3645818/1563528710559_0..jpg",
    description: "Classic leather belt with durable buckle",
    type: "accessories"
  },
  {
    name: "Kashmiri Cardigan",
    category: "Women's Clothing",
    price: 119.99,
    imageUrl: "https://m.media-amazon.com/images/I/7114nCW0kwL._AC_UY1100_.jpg",
    description: "Warm and stylish handcrafted Kashmiri cardigan",
    type: "clothing"
  },
  {
    name: "Earings",
    category: "Women's Accessories",
    price: 39.99,
    imageUrl: "https://rubans.in/cdn/shop/products/rubans-women-silver-toned-dome-shaped-jhumkas-earrings-earrings-33606119555246.jpg?v=1678703137&width=1080",
    description: "Traditional silver-toned jhumka earrings",
    type: "accessories"
  },
  {
    name: "Men's Shoes",
    category: "Men's Clothing",
    price: 64.99,
    imageUrl: "https://assets.ajio.com/medias/sys_master/root/20240601/YSSD/665b4df516fd2c6e6a44b97d/-473Wx593H-700032828-black-MODEL.jpg",
    description: "Classic black formal shoes with premium finish",
    type: "clothing"
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/wishcart');

    await BestSeller.deleteMany({});
    await NewArrival.deleteMany({});

    await BestSeller.insertMany(bestSellers);
    await NewArrival.insertMany(newArrivals);

    console.log('Database seeded successfully with separate collections!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase(); 