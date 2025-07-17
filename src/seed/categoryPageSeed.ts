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

  {
    name: "Slim Fit Polo",
    category: "Men's Clothing",
    subCategory: "Shirts",
    price: 499,
    imageUrl: "emptyUrlImg",
    gender: "male",
    type: "clothing",
    description: "Casual slim fit polo ideal for warm weather"
  },
  {
    name: "Cotton Cargo Pants",
    category: "Men's Clothing",
    subCategory: "Pants",
    price: 620,
    imageUrl: "emptyUrlImg",
    gender: "male",
    type: "clothing",
    description: "Durable and stylish cargo pants for daily wear"
  },
  {
    name: "Bomber Jacket",
    category: "Men's Clothing",
    subCategory: "Jackets",
    price: 1050,
    imageUrl: "emptyUrlImg",
    gender: "male",
    type: "clothing",
    description: "Trendy bomber jacket for everyday layering"
  },
  {
    name: "Henley T-Shirt",
    category: "Men's Clothing",
    subCategory: "Shirts",
    price: 399,
    imageUrl: "emptyUrlImg",
    gender: "male",
    type: "clothing",
    description: "Breathable cotton Henley with a relaxed fit"
  },
  {
    name: "Crew Neck T-Shirt",
    category: "Men's Clothing",
    subCategory: "Shirts",
    price: 349,
    imageUrl: "emptyUrlImg",
    gender: "male",
    type: "clothing",
    description: "Soft cotton tee with modern printed design"
  },
  {
    name: "Relaxed Fit Sweatpants",
    category: "Men's Clothing",
    subCategory: "Pants",
    price: 550,
    imageUrl: "emptyUrlImg",
    gender: "male",
    type: "clothing",
    description: "Cozy sweatpants perfect for lounging"
  },
  {
    name: "Waterproof Windbreaker",
    category: "Men's Clothing",
    subCategory: "Jackets",
    price: 1120,
    imageUrl: "emptyUrlImg",
    gender: "male",
    type: "clothing",
    description: "Lightweight windbreaker ideal for rainy days"
  },
  {
    name: "Striped Formal Shirt",
    category: "Men's Clothing",
    subCategory: "Shirts",
    price: 540,
    imageUrl: "emptyUrlImg",
    gender: "male",
    type: "clothing",
    description: "Smart striped shirt for business meetings"
  },
  {
    name: "Stretch Fit Jeans",
    category: "Men's Clothing",
    subCategory: "Pants",
    price: 720,
    imageUrl: "emptyUrlImg",
    gender: "male",
    type: "clothing",
    description: "Classic dark wash jeans with extra comfort"
  },
  {
    name: "Linen Kurta",
    category: "Men's Clothing",
    subCategory: "Shirts",
    price: 670,
    imageUrl: "emptyUrlImg",
    gender: "male",
    type: "clothing",
    description: "Traditional kurta with breathable fabric"
  },
  {
    name: "Sleeveless Hoodie",
    category: "Men's Clothing",
    subCategory: "Jackets",
    price: 799,
    imageUrl: "emptyUrlImg",
    gender: "male",
    type: "clothing",
    description: "Stylish sleeveless hoodie for active days"
  },
  {
    name: "Athletic Shorts",
    category: "Men's Clothing",
    subCategory: "Pants",
    price: 320,
    imageUrl: "emptyUrlImg",
    gender: "male",
    type: "clothing",
    description: "Lightweight shorts for sports and workouts"
  },
  {
    name: "Checked Shirt",
    category: "Men's Clothing",
    subCategory: "Shirts",
    price: 425,
    imageUrl: "emptyUrlImg",
    gender: "male",
    type: "clothing",
    description: "Smart casual checked shirt"
  },
  {
    name: "Trench Coat",
    category: "Men's Clothing",
    subCategory: "Jackets",
    price: 1490,
    imageUrl: "emptyUrlImg",
    gender: "male",
    type: "clothing",
    description: "Elegant trench coat for winter wear"
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

  {
    name: "Casual Canvas Belt",
    category: "Men's Accessories",
    subCategory: "Belts",
    price: 129,
    imageUrl: "emptyUrlImg",
    gender: "male",
    type: "accessories",
    description: "Durable canvas belt with adjustable buckle"
  },
  {
    name: "RFID Wallet",
    category: "Men's Accessories",
    subCategory: "Wallets",
    price: 270,
    imageUrl: "emptyUrlImg",
    gender: "male",
    type: "accessories",
    description: "Slim wallet with RFID protection and coin pocket"
  },
  {
    name: "Striped Tie",
    category: "Men's Accessories",
    subCategory: "Ties",
    price: 159,
    imageUrl: "emptyUrlImg",
    gender: "male",
    type: "accessories",
    description: "Professional striped tie in soft polyester"
  },
  {
    name: "Beaded Bracelet",
    category: "Men's Accessories",
    subCategory: "Jewelry",
    price: 90,
    imageUrl: "emptyUrlImg",
    gender: "male",
    type: "accessories",
    description: "Simple beaded bracelet for casual styling"
  },
  {
    name: "Canvas Crossbody Bag",
    category: "Men's Accessories",
    subCategory: "Bags",
    price: 490,
    imageUrl: "emptyUrlImg",
    gender: "male",
    type: "accessories",
    description: "Casual bag for daily essentials"
  },
  {
    name: "Aviator Sunglasses",
    category: "Men's Accessories",
    subCategory: "Sunglasses",
    price: 260,
    imageUrl: "emptyUrlImg",
    gender: "male",
    type: "accessories",
    description: "Classic aviators with UV protection"
  },
  {
    name: "Sport Watch",
    category: "Men's Accessories",
    subCategory: "Watches",
    price: 950,
    imageUrl: "emptyUrlImg",
    gender: "male",
    type: "accessories",
    description: "Multi-functional sports wristwatch"
  },
  {
    name: "Tie Clip Set",
    category: "Men's Accessories",
    subCategory: "Ties",
    price: 210,
    imageUrl: "emptyUrlImg",
    gender: "male",
    type: "accessories",
    description: "Polished tie clips in assorted styles"
  },
  {
    name: "Wool Beanie",
    category: "Men's Accessories",
    subCategory: "Headwear",
    price: 120,
    imageUrl: "emptyUrlImg",
    gender: "male",
    type: "accessories",
    description: "Warm beanie for colder days"
  },
  {
    name: "Leather Gloves",
    category: "Men's Accessories",
    subCategory: "Gloves",
    price: 430,
    imageUrl: "emptyUrlImg",
    gender: "male",
    type: "accessories",
    description: "Insulated gloves with leather finish"
  },
  {
    name: "Chain Bracelet",
    category: "Men's Accessories",
    subCategory: "Jewelry",
    price: 290,
    imageUrl: "emptyUrlImg",
    gender: "male",
    type: "accessories",
    description: "Silver tone chain link bracelet"
  },
  {
    name: "Classic Fedora Hat",
    category: "Men's Accessories",
    subCategory: "Headwear",
    price: 310,
    imageUrl: "emptyUrlImg",
    gender: "male",
    type: "accessories",
    description: "Retro-style fedora with modern edge"
  },
  {
    name: "Leather Card Holder",
    category: "Men's Accessories",
    subCategory: "Wallets",
    price: 270,
    imageUrl: "emptyUrlImg",
    gender: "male",
    type: "accessories",
    description: "Compact wallet for cards and ID"
  },
  {
    name: "Key Organizer",
    category: "Men's Accessories",
    subCategory: "Keychains",
    price: 180,
    imageUrl: "emptyUrlImg",
    gender: "male",
    type: "accessories",
    description: "Stylish key holder for organization"
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

  {
    name: "Ruffle Sleeve Top",
    category: "Women's Clothing",
    subCategory: "Tops",
    price: 420,
    imageUrl: "emptyUrlImg",
    gender: "female",
    type: "clothing",
    description: "Chic top with ruffle sleeves and V-neckline"
  },
  {
    name: "Palazzo Pants",
    category: "Women's Clothing",
    subCategory: "Pants",
    price: 590,
    imageUrl: "emptyUrlImg",
    gender: "female",
    type: "clothing",
    description: "Flowy palazzo pants with elastic waistband"
  },
  {
    name: "Faux Fur Jacket",
    category: "Women's Clothing",
    subCategory: "Jackets",
    price: 980,
    imageUrl: "emptyUrlImg",
    gender: "female",
    type: "clothing",
    description: "Cozy faux fur jacket with open front"
  },
  {
    name: "Printed Tunic Dress",
    category: "Women's Clothing",
    subCategory: "Dresses",
    price: 720,
    imageUrl: "emptyUrlImg",
    gender: "female",
    type: "clothing",
    description: "Easy-to-wear printed tunic dress with side slits"
  },
  {
    name: "Cropped Knit Top",
    category: "Women's Clothing",
    subCategory: "Tops",
    price: 370,
    imageUrl: "emptyUrlImg",
    gender: "female",
    type: "clothing",
    description: "Trendy crop top for casual wear"
  },
  {
    name: "Wide Leg Trousers",
    category: "Women's Clothing",
    subCategory: "Pants",
    price: 645,
    imageUrl: "emptyUrlImg",
    gender: "female",
    type: "clothing",
    description: "Formal high-waisted trousers"
  },
  {
    name: "Denim Jacket",
    category: "Women's Clothing",
    subCategory: "Jackets",
    price: 890,
    imageUrl: "emptyUrlImg",
    gender: "female",
    type: "clothing",
    description: "Classic blue denim jacket"
  },
  {
    name: "A-Line Dress",
    category: "Women's Clothing",
    subCategory: "Dresses",
    price: 750,
    imageUrl: "emptyUrlImg",
    gender: "female",
    type: "clothing",
    description: "Elegant A-line dress for semi-formal occasions"
  },
  {
    name: "Off-Shoulder Top",
    category: "Women's Clothing",
    subCategory: "Tops",
    price: 390,
    imageUrl: "emptyUrlImg",
    gender: "female",
    type: "clothing",
    description: "Stylish off-shoulder summer top"
  },
  {
    name: "Printed Culottes",
    category: "Women's Clothing",
    subCategory: "Pants",
    price: 520,
    imageUrl: "emptyUrlImg",
    gender: "female",
    type: "clothing",
    description: "Flowy culottes with modern print"
  },
  {
    name: "Oversized Hoodie",
    category: "Women's Clothing",
    subCategory: "Sweaters",
    price: 870,
    imageUrl: "emptyUrlImg",
    gender: "female",
    type: "clothing",
    description: "Warm oversized hoodie for cozy evenings"
  },
  {
    name: "Blazer Dress",
    category: "Women's Clothing",
    subCategory: "Dresses",
    price: 1120,
    imageUrl: "emptyUrlImg",
    gender: "female",
    type: "clothing",
    description: "Stylish dress with a blazer-style top"
  },
  {
    name: "Longline Cardigan",
    category: "Women's Clothing",
    subCategory: "Sweaters",
    price: 720,
    imageUrl: "emptyUrlImg",
    gender: "female",
    type: "clothing",
    description: "Soft knit cardigan with open front"
  },
  {
    name: "High Neck Blouse",
    category: "Women's Clothing",
    subCategory: "Tops",
    price: 430,
    imageUrl: "emptyUrlImg",
    gender: "female",
    type: "clothing",
    description: "Formal blouse with high neck design"
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
  },

  {
    name: "Tote Bag",
    category: "Women's Accessories",
    subCategory: "Bags",
    price: 580,
    imageUrl: "emptyUrlImg",
    gender: "female",
    type: "accessories",
    description: "Spacious everyday tote with zip closure"
  },
  {
    name: "Wool Shawl",
    category: "Women's Accessories",
    subCategory: "Scarves",
    price: 220,
    imageUrl: "emptyUrlImg",
    gender: "female",
    type: "accessories",
    description: "Warm and soft wool shawl for winter layering"
  },
  {
    name: "Pearl Earrings",
    category: "Women's Accessories",
    subCategory: "Jewelry",
    price: 275,
    imageUrl: "emptyUrlImg",
    gender: "female",
    type: "accessories",
    description: "Elegant pearl drop earrings for formal looks"
  },
  {
    name: "Stacked Rings Set",
    category: "Women's Accessories",
    subCategory: "Jewelry",
    price: 180,
    imageUrl: "emptyUrlImg",
    gender: "female",
    type: "accessories",
    description: "Stylish set of 4 stackable rings"
  },
  {
    name: "Mini Backpack",
    category: "Women's Accessories",
    subCategory: "Bags",
    price: 540,
    imageUrl: "emptyUrlImg",
    gender: "female",
    type: "accessories",
    description: "Cute and compact backpack for essentials"
  },
  {
    name: "Printed Headband",
    category: "Women's Accessories",
    subCategory: "Hair Accessories",
    price: 90,
    imageUrl: "emptyUrlImg",
    gender: "female",
    type: "accessories",
    description: "Floral headband for casual style"
  },
  {
    name: "Charm Bracelet",
    category: "Women's Accessories",
    subCategory: "Jewelry",
    price: 310,
    imageUrl: "emptyUrlImg",
    gender: "female",
    type: "accessories",
    description: "Personalized charm bracelet for gifting"
  },
  {
    name: "Layered Necklace",
    category: "Women's Accessories",
    subCategory: "Jewelry",
    price: 330,
    imageUrl: "emptyUrlImg",
    gender: "female",
    type: "accessories",
    description: "Trendy layered necklace for modern looks"
  },
  {
    name: "Oversized Sunglasses",
    category: "Women's Accessories",
    subCategory: "Sunglasses",
    price: 290,
    imageUrl: "emptyUrlImg",
    gender: "female",
    type: "accessories",
    description: "UV-protected oversized fashion glasses"
  },
  {
    name: "Embroidered Clutch",
    category: "Women's Accessories",
    subCategory: "Bags",
    price: 450,
    imageUrl: "emptyUrlImg",
    gender: "female",
    type: "accessories",
    description: "Traditional style clutch with embroidery"
  },
  {
    name: "Knitted Beanie",
    category: "Women's Accessories",
    subCategory: "Headwear",
    price: 120,
    imageUrl: "emptyUrlImg",
    gender: "female",
    type: "accessories",
    description: "Soft beanie for winter comfort"
  },
  {
    name: "Stud Earrings",
    category: "Women's Accessories",
    subCategory: "Jewelry",
    price: 190,
    imageUrl: "emptyUrlImg",
    gender: "female",
    type: "accessories",
    description: "Elegant studs for daily wear"
  },
  {
    name: "Printed Silk Bandana",
    category: "Women's Accessories",
    subCategory: "Scarves",
    price: 170,
    imageUrl: "emptyUrlImg",
    gender: "female",
    type: "accessories",
    description: "Printed bandana scarf for style and function"
  },
  {
    name: "Leather Watch",
    category: "Women's Accessories",
    subCategory: "Watches",
    price: 620,
    imageUrl: "emptyUrlImg",
    gender: "female",
    type: "accessories",
    description: "Minimal leather watch with gold accents"
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