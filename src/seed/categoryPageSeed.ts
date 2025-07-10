import mongoose from 'mongoose';
import CategoryPageProduct from '../models/categoryPageProduct';

const categoryPageProducts = [
  // Men's Clothing
  {
    name: "Classic Fit Shirt",
    category: "Men's Clothing",
    subCategory: "Shirts",
    price: 499.99,
    imageUrl: "https://assets.ajio.com/medias/sys_master/root/20240716/q251/6696aca91d763220fac86475/-1117Wx1400H-466747617-pink-MODEL6.jpg",
    gender: "male",
    type: "clothing",
    description: "Premium cotton dress shirt with a classic fit, perfect for formal occasions"
  },
  {
    name: "Summer Tshirt",
    category: "Men's Clothing",
    subCategory: "Pants",
    price: 598,
    imageUrl: "https://www.montecarlo.in/cdn/shop/products/223060596-1-38_1-dXt-051840-DqX.jpg?v=1719320329",
    gender: "male",
    type: "clothing",
    description: "Comfortable slim-fit chinos in a versatile vibrant color"
  },
  {
    name: "Wool Blend Blazer",
    category: "Men's Clothing",
    subCategory: "Jackets",
    price: 1290,
    imageUrl: "https://i.pinimg.com/1200x/dd/8c/39/dd8c3937249f7a335af22c0d86026668.jpg",
    gender: "male",
    type: "clothing",
    description: "Sophisticated wool blend blazer for a polished look"
  },
  {
    name: "Casual Denim Jacket",
    category: "Men's Clothing",
    subCategory: "Jackets",
    price: 700.99,
    imageUrl: "https://i5.walmartimages.com/seo/Men-s-Winter-Sherpa-Lined-Denim-Jacket-Windbreaker-Trucker-Jacket-Fleece-Jean-Jacket-Cotton-Cowboy-Coat_a38b9d1c-1602-4ffd-a2db-b58a2b5022ab.e331fe42a7064a670306f015acc07992.jpeg",
    gender: "male",
    type: "clothing",
    description: "Classic denim jacket with modern styling"
  },

  // Men's Accessories
  {
    name: "Leather Belt",
    category: "Men's Accessories",
    subCategory: "Belts",
    price: 179,
    imageUrl: "https://assetscdn1.paytm.com/images/catalog/product/A/AC/ACCFLYER-LEATHEACME38200F3645818/1563528710559_0..jpg",
    gender: "male",
    type: "accessories",
    description: "Genuine leather belt with classic buckle"
  },
  {
    name: "Leather Wallet",
    category: "Men's Accessories",
    subCategory: "Wallets",
    price: 350,
    imageUrl: "https://images-cdn.ubuy.co.in/6762e955fd9cfd496b5d6f29-leather-men-s-wallet-luxury-mens-purse.jpg",
    gender: "male",
    type: "accessories",
    description: "Slim leather wallet with multiple card slots"
  },
  {
    name: "Silk Tie",
    category: "Men's Accessories",
    subCategory: "Ties",
    price: 189.99,
    imageUrl: "https://www.violamilano.com/wp-content/uploads/2021/01/IMG_2627-760x860.jpeg",
    gender: "male",
    type: "accessories",
    description: "Elegant silk tie with subtle pattern"
  },

  // Women's Clothing
  {
    name: "Floral Summer Dress",
    category: "Women's Clothing",
    subCategory: "Dresses",
    price: 860,
    imageUrl: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/2024/AUGUST/26/MVdZamLK_86fac207f08047c6bae19c8e0ba5fc5f.jpg",
    gender: "female",
    type: "clothing",
    description: "Light and flowy floral dress perfect for summer"
  },
  {
    name: "High-Waisted Jeans",
    category: "Women's Clothing",
    subCategory: "Pants",
    price: 549,
    imageUrl: "https://static.aceomni.cmsaceturtle.com/prod/product-image/aceomni/Wrangler/Monobrand/WWJN001239/WWJN001239_2.jpg",
    gender: "female",
    type: "clothing",
    description: "Comfortable high-waisted jeans with perfect stretch"
  },
  {
    name: "Kashmiri Sweater",
    category: "Women's Clothing",
    subCategory: "Sweaters",
    price: 1200,
    imageUrl: "https://m.media-amazon.com/images/I/7114nCW0kwL._AC_UY1100_.jpg",
    gender: "female",
    type: "clothing",
    description: "Luxurious cashmere sweater for ultimate comfort"
  },
  {
    name: "Pleated Skirt",
    category: "Women's Clothing",
    subCategory: "Skirts",
    price: 300,
    imageUrl: "https://m.media-amazon.com/images/I/71cIoEjSkiL._AC_UY1100_DpWeblab_.jpg",
    gender: "female",
    type: "clothing",
    description: "Elegant pleated midi skirt for a sophisticated look"
  },

  // Women's Accessories
  {
    name: "Leather Crossbody Bag",
    category: "Women's Accessories",
    subCategory: "Bags",
    price: 650,
    imageUrl: "https://m.media-amazon.com/images/I/71jX3IIqu7L._AC_UY1000_.jpg",
    gender: "female",
    type: "accessories",
    description: "Stylish leather crossbody bag with adjustable strap"
  },
  {
    name: "Silk Scarf",
    category: "Women's Accessories",
    subCategory: "Scarves",
    price: 160,
    imageUrl: "https://sourcing-media.hktdc.com/product-original//36b9838c702540fabae7a679ada34eff.webp?width=450&height=450&mode=cover",
    gender: "female",
    type: "accessories",
    description: "Luxurious silk scarf with vibrant pattern"
  },
  {
    name: "Statement Necklace",
    category: "Women's Accessories",
    subCategory: "Jewelry",
    price: 200,
    imageUrl: "https://www.zeeyajewellery.co.in/cdn/shop/products/Untitleddesign-24_aaefe909-803f-4ac5-9f96-a08efa29a4fa.png?v=1745041218",
    gender: "female",
    type: "accessories",
    description: "Eye-catching statement necklace for special occasions"
  }
];

const seedCategoryPageProducts = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/wishcart');

    await CategoryPageProduct.deleteMany({});

    await CategoryPageProduct.insertMany(categoryPageProducts);

    process.exit(0);
  } catch (error) {
    console.error('Error seeding category page products:', error);
    process.exit(1);
  }
};

seedCategoryPageProducts(); 