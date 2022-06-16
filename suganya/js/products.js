const products = [
  {
    id: 1,
    title: "Padmaavat Collections: Special Gold Jewellery Design for Padmavati",
    price: 109.95,
    description:
      "Antique Floral Necklace with Kundan Stones crafted in 22 Karat Yellow Gold",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://www.tanishq.co.in/wps/wcm/connect/tanishq/b629da6f-83f0-465d-ad64-7dfa6e871abc/images%252Fsecondary-collection-banner-mobile.jpg?MOD=AJPERES&CVID=",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Gold jewellery",
    price: 22.3,
    description: "Lavanyam tanishq | Buy gold jewellery online, Gold jewellery",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://i.pinimg.com/736x/b3/0c/d6/b30cd6e498122bfac2dbb0801971dffa.jpg",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: "South India Gold Jewellery",
    price: 55.99,
    description:
      "Matt Finish Gold Antique Mango Mala Designs, Matt Finish Indian Necklace Designs",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://static.peachmode.com/media/images/product/80067/original/1609248300_1_FCLAXMI05.jpg",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 4,
    title: "Peacock Gold Jewellery",
    price: 15.99,
    description:
      "We offers an exclusive collection of finest quality 63632 CZ Peacock Necklace with matte gold plating Fashion Jewellery manufacturer in india.",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image: "https://d25xd2afqp2r8a.cloudfront.net/products/63632_RUBYGREEN.JPG",
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
  {
    id: 5,
    title: "Manubhai Jewellers ",
    price: 695,
    description: "This stunning beauty in matt gold on florals GoldNeckpiece",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://i.pinimg.com/originals/a7/47/a0/a747a0c4d383154fe4c407815229a25d.jpg",
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
  {
    id: 6,
    title: "CRK WORLD - Beautiful South Indian Jewellery",
    price: 168,
    description:
      "Buy CRK WORLD - Beautiful South Indian Jewellery Set for Women's wear online India, best price",
    category: "Jewelery",
    cart: "cart",
    buy: "buy",
    image:
      "https://static.peachmode.com/media/images/product/80065/original/1609248299_1_FCLAXMI03.jpg",
    rating: {
      rate: 3.9,
      count: 70,
    },
  },
  {
    id: 7,
    title: "Gold plated ruby emerald CZ necklace",
    price: 9.99,
    description:
      "South indian gold plated ruby emerald CZ Necklace set with matching earings designer polki real pearl necklace jewelry bridal jewellery",
    category: "Jewelery",
    cart: "cart",
    buy: "buy",
    image:
      "https://i.etsystatic.com/20370258/r/il/43fbd6/3356554084/il_340x270.3356554084_1sn8.jpg",
    rating: {
      rate: 4.0,
      count: 400,
    },
  },
  {
    id: 8,
    title: "Lavanyam jewellery",
    price: 10.99,
    description: "Lavanyam-Explore Lavanyam Jewellery Designs by Tanishq",
    category: "Jewelery",
    cart: "cart",
    buy: "buy",
    image:
      "https://www.tanishq.co.in/wps/wcm/connect/tanishq/11987eac-7e55-4a01-8ea8-3f256aa76271/images%252Fjewellery%252Fj-banner-mob.jpg?MOD=AJPERES&CVID=",
    rating: {
      rate: 1.9,
      count: 100,
    },
  },
  {
    id: 9,
    title: "Zaveri Pearls Green & Red Stones South Indian Style Long Necklace",
    price: 64,
    description:
      "Beautiful real zaveri pearls green & red stones south indian long necklace with perfect matching earrings.",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://images-static.nykaa.com/media/catalog/product/d/0/d0ac28azpfk9388_rev_1.jpg",
    rating: {
      rate: 3.3,
      count: 203,
    },
  },
  {
    id: 10,
    title: "Antique South Indian Necklace with Matte Gold Plating ",
    price: 109,
    description:
      "We offers an exclusive collection of finest quality 201240 Antique South Indian Necklace With Matte Gold Plating Fashion Jewellery.",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image: "https://d25xd2afqp2r8a.cloudfront.net/products/201240_GOLD.JPG",
    rating: {
      rate: 2.9,
      count: 470,
    },
  },
  {
    id: 11,
    title: "Apara South Indian Gold",
    price: 109,
    description:
      "Apara South Indian Gold Plated Long Copper Haram and Short Combo Jhumki One Gram Necklace Jewellery Set for Women/Girls",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image: "https://m.media-amazon.com/images/I/81jypy+iKpL._UL1100_.jpg",
    rating: {
      rate: 4.8,
      count: 319,
    },
  },
  {
    id: 12,
    title: "Short Kasulaperu Necklace | Bridal Gold Jewellery",
    price: 114,
    description:
      "Find Fresh gold, Diamond, Silver, Platinum, Handmade, Bridal, Fashion jewelry sets - earrings, bracelet, rings bangles, necklace.",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://i.pinimg.com/736x/a2/13/85/a213857249afcf434dffe9bbbd073105.jpg",
    rating: {
      rate: 4.8,
      count: 400,
    },
  },
  {
    id: 13,
    title:
      "Rectangle Faceted Sapphire Blue AD Rhinestone Rhodium Plated Crystal Necklace Set",
    price: 599,
    description:
      "American Diamond necklace studded with clear CZ stones and encrusted on Silver | Rhodium background. Floral designed settings of Necklace set.",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://cdn11.bigcommerce.com/s-ls8hir/images/stencil/1280x1280/products/15890/18495/519CADN02__52110.1557863593.jpg?c=2",
    rating: {
      rate: 2.9,
      count: 250,
    },
  },
  {
    id: 14,
    title: "Floral-Design Oxidised Silver Necklace with Earrings Set ",
    price: 999.99,
    description:
      "Buy Silver-Toned Fashion Jewellery Sets for Women by Shining Diva Online in india at Rs. 238. Shop for more Shining Diva Fashion Jewellery Set.",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",

    image:
      "https://assets.ajio.com/medias/sys_master/root/20220204/DuaF/61fc27adf997dd03e2bf5770/-473Wx593H-469119098-multi-MODEL8.jpg",
    rating: {
      rate: 2.2,
      count: 140,
    },
  },
  {
    id: 15,
    title:
      "Weibang African Jewelry Silver Color Jewelry Set for Women Marriage Necklace",
    price: 56.99,
    description:
      "Cheap Jewelry Sets, Buy Quality Jewelry & Accessories Directly form China Suppliers: Weibang African Jewelry Silver Color Jewelry Set for Women",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://ae01.alicdn.com/kf/HTB1fnSWTW6qK1RjSZFmq6x0PFXa8/Weibang-African-Jewelry-Silver-Color-Jewelry-Set-for-Women-Marriage-Necklace-Earrings-Wedding-Jewelry-Girl-Gift.jpg",
    rating: {
      rate: 2.6,
      count: 235,
    },
  },
  {
    id: 16,
    title: "Wedding Silver Necklace",
    price: 29.95,
    description: "Weddings Silver Necklace Set Best Sale, 56% OFF",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://i.etsystatic.com/13436931/r/il/110b20/2034336850/il_794xN.2034336850_8mcy.jpg",
    rating: {
      rate: 2.9,
      count: 340,
    },
  },
  {
    id: 17,
    title: "Jiayijiaduo Glamour Women's Wedding Jewelry set Silver Necklace",
    price: 39.99,
    description:
      "Quality accessories with free worldwide shipping. Jewelry gifts and the best choice to match your daily style. Find products of Jewelry set.",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://ae01.alicdn.com/kf/HTB1nHRwmGSWBuNjSsrbq6y0mVXae/jiayijiaduo-Glamour-Women-s-Wedding-Jewelry-Set-Silver-Color-Zircon-Flower-Necklace-Earrings-Set-Girl-Accessories.jpg",
    rating: {
      rate: 3.8,
      count: 679,
    },
  },
  {
    id: 18,
    title: "Cheerfeel Ne-235 Fashion Silver Necklace Bracelet Earrings",
    price: 9.85,
    description:
      "Cheerfeel NE-235 Fashion Silver Necklace Bracelet Earrings Ring Set Zircon Wedding Bridal Necklace Jewelry set.",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://sc04.alicdn.com/kf/H8cee43bb0ccd404e8a432ac142deb2b4Z/223353415/H8cee43bb0ccd404e8a432ac142deb2b4Z.jpg",
    rating: {
      rate: 4.7,
      count: 130,
    },
  },
  {
    id: 19,
    title: "Bridal diamond jewellery",
    price: 7.95,
    description:
      "Welcome to Arzano | Bridal diamond jewellery, Bridal diamon necklace",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://i.pinimg.com/originals/d6/71/36/d671362807398e94cd8c224c037508ed.jpg",
    rating: {
      rate: 4.5,
      count: 146,
    },
  },
  {
    id: 20,
    title: "Crystal Bridal Jewelry",
    price: 12.99,
    description:
      "Minlover Silver Color Crystal Bridal Jewelry Sets Leaf Shape Choker Necklace Earrings wedding jewellery",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://i.pinimg.com/originals/c6/a9/b8/c6a9b8cfe68cf5701b1352f2f01a0669.jpg",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 21,
    title: "Artificial Jewellery",
    price: 12.99,
    description:
      "Artificial Jewellery Sets - Buy Fashion jewelry Sets | Necklace Sets & Artificial Bridal, crystal Necklace set",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://rukminim1.flixcart.com/image/612/612/kw2fki80/jewellery-set/z/j/t/na-na-stonechokerset-samridhi-dc-original-imag8u2wxhxpbugd.jpeg?q=70",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 22,
    title: "Wedding Silver Necklace",
    price: 12.99,
    description:
      "12 Luxury in Silver Necklaces ideas | weddings Jewellery, Silver Necklaces, Jewellery",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6aexUmv3BZhH_uF2KuLA1gq93LWheksqAdA&usqp=CAU",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 23,
    title: "Unicra Bride Silver Necklace",
    price: 12.99,
    description:
      "Unicra Bride Silver Necklace Earrings Set Crystal Bridal Wedding Jewelry Set Rhinestone Bridesmaid Party Choker Necklace Drop Dangle Earrings Sets for Women and Girls",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://www.ubuy.co.in/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjErcEdMY2JBUkwuX0FDX1VMMTA1MF8uanBn.jpg",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 24,
    title: "Silver Pendant Artificial Diamon Necklace",
    price: 12.99,
    description:
      "Silver Pendant Artificial Diamond Necklace Set - Style Icon www.dressrent.in",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "http://cdn.shopify.com/s/files/1/0071/4466/9243/products/HTB1EnIrHXXXXXXpaXXXq6xXFXXX1_1200x1200.jpg?v=1533442876",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 25,
    title: "Platinum Necklace",
    price: 12.99,
    description: "Gold Necklace & Platinum Necklace Manufacturer form Guwahati",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://5.imimg.com/data5/TC/GC/GLADMIN-14444939/platinum-necklace-500x500.png",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 26,
    title: "Platinum Jewelley Designs",
    price: 12.99,
    description:
      "Platinum Jewellery Designs Discount, 57% Off | www.elmonstruodelasgalletas.com",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://i.pinimg.com/originals/80/bf/ce/80bfce1a62b5befad39891712e87ee2a.jpg",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 29,
    title: "Custom Platinum Pear Shaped Diamond Wedding Necklace",
    price: 12.99,
    description:
      "Custom Platinum Pear Shaped Diamond Wedding Necklace Earrings Jewelry Set, Find Complete Details About Custom Platinum Pear Shaped Diamond",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://sc02.alicdn.com/kf/H6f9ba31980be4c9d84512117ab1c9da9i/230072978/H6f9ba31980be4c9d84512117ab1c9da9i.jpg",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 30,
    title: "Platinum Jewellery Showrooms in Guwahati",
    price: 12.99,
    description:
      "Top 20 Platinum Jewellery Showrooms in Guwahati - Best Platinum Jewellery Showrooms - Justdial",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://content.jdmagicbox.com/comp/guwahati/60/9999pmulkolstd57460/catalogue/manikchand-and-sons-pvt-ltd-fancy-bazar-guwahati-jewellery-showrooms-4-250.jpg",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 31,
    title: "Modern Platinum Diamond Necklace",
    price: 12.99,
    description:
      "An exquisite diamond necklace, designed as a series of graduated trefoil pear-shaped diamond links of a foliate motif, alternating with luminous brilliant-cut diamonds, the front set with a fringe of pear-shaped diamonds, finely mounted in platinum. The diamond weighing approximately 150.97 cts.",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://i.pinimg.com/736x/c7/5b/05/c75b056f3fab15c35e3cc62284eb5fcd.jpg",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 32,
    title: "Platinum Diamond Necklace",
    price: 12.99,
    description: "Classic Platinum Diamond Necklace - Yafa Signed Jewels",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://vintagesignedjewels.com/wp-content/uploads/2018/05/N2131-450x450.jpg",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 33,
    title: "Indian Wedding Jewellery",
    price: 12.99,
    description:
      "Emerald, Diamond and Platinum Choker Necklace | Fine jewelry, Real diamond Necklace",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://i.pinimg.com/736x/e7/a5/19/e7a5197a8028a0f4f591c873bb7766b9.jpg",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 34,
    title: "Silver Plated Floral Fantasy Pearl Diamond Necklace",
    price: 12.99,
    description:
      "Floral Fantasy Pearl Bridal Jewelry Set This beautiful Bridal jewelry set features creamy freshwater pearls, marquise cut rhinestones and brilliant round clear and ab rhinestones in a delightful silver plated floral pattern. ",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://i.pinimg.com/originals/f0/f4/63/f0f4635428a1e574c972e6682c8b8b69.jpg",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 35,
    title: "China Platinum Jewellery",
    price: 12.99,
    description:
      "Platinum Jewellery, Platinum Jewellery Wholesale, Manufacturers, Price",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image: "https://sc02.alicdn.com/kf/UT8ly4gXGBaXXcUQpbX6.png",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 36,
    title: "Platinum Necklace Set",
    price: 12.99,
    description:
      "In order to cater the varied demands of our clients, we have come up with a wide range of Platinum Necklace Set. ",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image: "https://3.imimg.com/data3/JX/DM/MY-16580403/s4005732-500x500.jpg",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 37,
    title: "Platinum Wedding Jewelry",
    price: 12.99,
    description:
      "Platinum wedding Jewelry Set Fashion Jewellery for Sale | shop New & Pre-Owned Jewellery",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image: "https://i.ebayimg.com/thumbs/images/g/uHIAAOSw4A9c0e3l/s-l300.jpg",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 38,
    title: "Elegant Gold Silver Two Tones Silver Mixed Stand",
    price: 12.99,
    description:
      "Elegant Gold Silver 2 Tones Silver Mixed Stand-out Bold Cubic Zirconia Necklace UK Dispatch Set Complete set includes; Necklace, Earring, Ring",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://cdn.shopify.com/s/files/1/0086/4986/7311/products/0115642_hypoallergenic-platinum-plated-big-4-piece-jewelry-set-with-easy-return_d57a6c19-a9b2-48cd-8e5f-6cccbb3f7a9d.jpg?v=1623956903",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 39,
    title: "Silk Thread Necklace",
    price: 12.99,
    description:
      "Silk thread necklace, Brand: MyAngadi.com - online shopping for tanjore | Hand made silk thread necklace with attractive colours.",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://www.myangadi.com/image/cache/catalog/silk-thread-jewellery/11492-Silk-Thread-Jewellery-Necklace-Purple-640x852.jpg",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 40,
    title: "Gold Silk Thread Necklace ",
    price: 12.99,
    description:
      "Buy Gold Silk Thread necklace and Designer Jhumkas!!!(ID # 36749) Online at best Price in USA.",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://www.desiclik.com/images/P/CBBAFA28-7A25-47A7-8D7C-D675E6FC5B76.jpg",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 41,
    title: "Green Silk Thread Necklace",
    price: 12.99,
    description:
      "This set contains: 1 Necklace 1 pair of earring 1 Bangle set A fine thread of silk woven into a lustrous form of jewellery is silk thread",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "http://cdn.shopify.com/s/files/1/1004/5250/products/Green_Silk_Thread_Full_Set_grande.jpg?v=1571439161",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 42,
    title: "Blue and Black Silk Thread Necklace",
    price: 12.99,
    description:
      "Buy Krishna Collection Trendy Blue & Black silk Thread Jewellery.",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://4.imimg.com/data4/CG/FB/ANDROID-56556594/product-500x500.jpeg",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 43,
    title: "Silk Thread Necklace & Earrings set",
    price: 12.99,
    description:
      "Silk Thread Necklace with anique pendant and silk thread Jhumka with antique stud. Available in Yellow, Green colours.",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://cdn.shopify.com/s/files/1/0477/4576/1434/products/Necklace-silkthread-Green_647x646.jpg?v=1604033124",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 44,
    title:
      "Anique yellow - green silk thread necklace peacock designer Necklace",
    price: 12.99,
    description:
      "Product includes A Necklace and pair of Earrings, A Necklace comes with a dori.",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "http://cdn.shopify.com/s/files/1/0627/1651/0441/products/DSC_0252.jpg?v=1645865205",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 45,
    title: "Beautiful handmade silk thread necklace green lue peacocl necklace",
    price: 12.99,
    description:
      "DREAMJWELL Comes in Multicolor color with 1 nacklace:1 pair of earrings.",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://assets0.mirraw.com/images/5254056/DJ13182_zoom.JPG?1508939624",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 46,
    title: "Beautiful Blue Silk Thread necklace Peacock Necklace",
    price: 12.99,
    description:
      "The Product includes A Pair of Earrings - Length: 5cm, Width: 2.5 cm A Necklace-Lenght:34 cm Earrings Types.",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://cdn.shopify.com/s/files/1/0627/1651/0441/products/dj-23509-2_a370701d-9880-4554-9baa-b66c23f102ab_1445x.jpg?v=1644884463",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 47,
    title: "Unique Designer handmade black white peacock silk thread necklace",
    price: 12.99,
    description:
      "Dreamjwell of DREAMJWELL Comes in multicolor color with 1 Nacklace: 1 pair od earings.",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://assets0.mirraw.com/images/4004558/DJ_00916_large.JPG?1487590285",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 48,
    title: "Beautiful Green Silk Thread Necklace",
    price: 12.99,
    description:
      "The Product includes A Necklace - Lenght: 15cm A pair of Earrings - Length: 3.5cm Earrings type.",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://cdn.shopify.com/s/files/1/0627/1651/0441/products/dj-24827-2_0a09dcc8-2d2f-45cf-9b5f-f973d36882b6_1445x.jpg?v=1644902973",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 49,
    title: "Antique Black Silk Thread Peacock Necklace",
    price: 12.99,
    description:
      "The product includes pair of Earrings - Length: 4.2em, Width: 2.5cm Necklace.",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwgG449yKmiiZ_DRsMOiyGzQccTQrl0mM_lw&usqp=CAU",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 50,
    title: "Ailsie Stylish Fashion Beautiful Silk Thread Necklace",
    price: 12.99,
    description:
      "Buy Ailsie Stylish Fashion Beautiful Silk Thread Necklace set with peacock earing online at a discounted price from ShopClues. Shop Earrings",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://cdn.shopclues.com/images1/thumbnails/94495/320/320/142215185-94495090-1541199284.jpg",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 51,
    title: "Beautiful handmade blue green silk thread necklace",
    price: 12.99,
    description:
      "Dreamjwell of DREAMJWELL Comes in Multicolor color with 1 Necklace:1 pair of earrings.",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://assets0.mirraw.com/images/5576014/DJ13882_large.JPG?1513925037",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 52,
    title: "Beautiful Black-White Black Silk Thread",
    price: 12.99,
    description:
      "The Product include A pair of Earrings-Length: 2cm, width: 1cm A Necklace-Length: 13cm Earrings type - push back Necklace.",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "http://cdn.shopify.com/s/files/1/0627/1651/0441/products/dj-23968-0.jpg?v=1644891566",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 53,
    title: "Ethnic Indian style Black Plated Red & Green Polki Necklace",
    price: 12.99,
    description:
      "This jewellery is made using high quality materials. The alloy used is led free. It will be Comfortable on the skin when worn.",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image: "https://m.media-amazon.com/images/I/61Rt9WSMBhL.jpg",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 54,
    title: "Peacock Necklace",
    price: 12.99,
    description:
      "Peacock Necklace Set - Buy From Latest Design od Peacock Necklace Sukkhi| Sukkhi.com.",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://cdn.shopify.com/s/files/1/1587/9445/products/2191NGLDPP1560_BG_900x.jpg?v=1596880290",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 55,
    title: "Gold Bead Chain",
    price: 12.99,
    description:
      "14k Solid Gold Bead Chain Necklace Gold Beaded Necklace | Etsy in 2022 | Gold Bead Necklace",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://i.pinimg.com/originals/61/77/21/617721ef7f1af29557a1a566bced4cf5.jpg",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 56,
    title: "Geo Pendant Layered Chain Necklace",
    price: 12.99,
    description:
      "ROMWE Discover the Geo Pendant Layered Chain Necklace you never Knew you needed. At ROMWE.",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://img.ltwebstatic.com/images3_pi/2021/08/23/162968327402ff38357f3f371664418ec66c297776.jpg",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 57,
    title: "2pcs Lock & Charm Chain Necklace",
    price: 12.99,
    description:
      "To find out about the 2pcs Lock & Key Charm Chain Necklace at SHEIN, Part of our latest Necklace ready to shop online today! Free Shipping.",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://img.ltwebstatic.com/images3_pi/2020/01/14/15789847180a0c0fe94adc1757c294227f046e0164_thumbnail_600x.webp",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 58,
    title: "4pcs Geo Charm Layered Chain Necklace",
    price: 12.99,
    description:
      "Get discounts for 4pcs Geo Charm Layered Chain Necklace and find more style you'll Enjoy, Students get an extra 15% OFF.",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://img.ltwebstatic.com/images3_pi/2020/08/18/159772204520c43255a6048e59e5efa9b3717e6f54_thumbnail_600x.webp",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 59,
    title: "Light Weight Gold chain",
    price: 12.99,
    description:
      "Latest simple and light weight gold chain designs - Simple Creft Ideas",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image: "https://simplecraftidea.com/wp-content/uploads/2019/06/5-11.png",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 60,
    title: "Gold Chain",
    price: 12.99,
    description:
      "22 Carat Gold Chain, Weight: 8.040 gm, Rs 255000 / Unit Aashirwad Jewellery | ID: 23444528.",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image: "https://5.imimg.com/data5/TG/TW/MY-2534169/gold-chain-500x500.jpg",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 61,
    title: "Gold Chain With Pendant",
    price: 12.99,
    description:
      "Gold Chain With Pendant - Buy Gold Chain With Pendent Designs online at Best Prices in India.",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://rukminim1.flixcart.com/image/332/398/ktlu9ow0/mangalsutra-tanmaniya/9/f/h/cp96-jay-khodal-original-imag6ws88bamsenf.jpeg?q=50",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 62,
    title: "Gold Chain With Floral Pendant ~ South India Jewels",
    price: 12.99,
    description:
      "Gold chain Pendants, Gold Pendant for Chains, Gold Chains with Pendants.",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://i.pinimg.com/originals/e0/c2/a3/e0c2a30bff1e67e9a0aa7040822c0383.jpg",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 63,
    title: "Golden Heart Pendant handmade Earrings",
    price: 12.99,
    description:
      "Buy golden heart pendant handmade earrings online in india at 2950, available only at Azilaa.com.",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://i.etsystatic.com/25299260/r/il/655cef/3314010533/il_340x270.3314010533_aq0g.jpg",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 64,
    title: "Flower with Diamond Beautiful Gold plated Necklace set",
    price: 12.99,
    description:
      "Necklace Dimension Height: 47 cm(18.5 inch) Pendant Dimension Height: 58 mm(5.8 cm) Width: 35 mm(3.5 cm) Depth: 5mm(0.5 cm) Earrings.",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://cdn.shopify.com/s/files/1/0416/8417/2955/products/LNS8A142_grande.jpg?v=1642844408",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 65,
    title: "Gold Pendants",
    price: 12.99,
    description:
      "Gold pendants - Buy Gold Pendants Online for Men, Women and boys.",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/18289356/2022/5/16/d897841a-e700-41e3-8d89-a6ed02d986b41652714164310BrandsoonMenGoldNecklaceandChains1.jpg",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },

  {
    id: 66,
    title: "Simple Chain And Pendants",
    price: 12.99,
    description:
      "130 Simple Chain and Pendants ideas | Gold Jewellery fashion, gold pendant jewellery design..",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://i.pinimg.com/550x/fe/d4/b8/fed4b861f9f15678bc65aa7727703c06.jpg",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 67,
    title: "Large Victorian Bull's-Eye Agate Pendant Necklace",
    price: 12.99,
    description:
      "Black is Black! And in this case, it;s back 'big' time! Measuring a sizable 1 3/4 by 1 3/8 inches, this striking Victorian Pendant Necklace.",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://d17anp2eo56k6j.cloudfront.net/media/catalog/product/cache/69a9f301de1749073166f9043f4fef2a/l/a/large-victorian-bull-s-eye-agate-pendant-necklace_1_90-1-11635.jpg",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 68,
    title: "Moss Agate Pendant Boho Crystal Necklace",
    price: 12.99,
    description:
      "Boho moss agate crystal slice teardrop-shaped pendant nacklace. Handmade nacklace by Estrella and Luna.",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://i.etsystatic.com/13290659/r/il/d64f72/1929839274/il_fullxfull.1929839274_tdb6.jpg",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 69,
    title:
      "Magic Agate Druzy Emperor Quartz stone Natural Gold Pendant Necklace Jewelry",
    price: 12.99,
    description:
      "Features: \n100% brand new with great quality; \nDecorate your nacklace; \nContracted style make you energetic; \n Prefect for daily use and easy to take.",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://n1.sdlcdn.com/imgs/h/f/0/Magic-Agate-Druzy-Emperor-Quartz-SDL408627422-1-52e1b.jpg",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },

  {
    id: 70,
    title:
      "Druzy Necklace Round Druzy Pendant Gold Necklace Druzy | Etsy India",
    price: 12.99,
    description:
      "druzy necklace, round druzy pendant, gold necklace, druzy agate, champagne druzy, Boho, layering necklace",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://i.etsystatic.com/5186479/r/il/2753cb/2693137765/il_fullxfull.2693137765_6sax.jpg",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 71,
    title: "Druzy Agate Pendant",
    price: 12.99,
    description:
      "Natural Black druzy agate electroformed in pure Copper and hung on a 30 inch soldered soldered copper chain with wire wrapped red garnet. Other chain.",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://assets.bigcartel.com/product_images/333964782/1651035788830.jpg?auto=format&fit=max&h=1000&w=1000",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 72,
    title: "Men Stainless Steel Jewellery",
    price: 12.99,
    description:
      "Fashion Men Stainless Steel Jewellery Pendant Druzy Natural Chain",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://image.made-in-china.com/202f0j00NCRVItTPVrqz/Fashion-Men-Stainless-Steel-Jewelry-Pendant-Druzy-Natural-Agate-Stone-Gemstone-Necklace.jpg",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 73,
    title:
      "What Is Druzy Jewelry? Here's What You Need to Know | Emmaline Bride ",
    price: 12.99,
    description:
      "what is druzy jewelry? We'll share some of our favorite (handmade!) druzy jewelry pieces tell you where to get your hands on and tell you why this.",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://i.pinimg.com/originals/fb/50/8b/fb508bf4994a5804365de3a2d53efa1f.jpg",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 74,
    title: "Pink Gold Tone Kundan Inspired Beads Necklace",
    price: 12.99,
    description:
      "Buy Pink Golden Gold Tone Kundan Inspired Beads Necklace Silver Copper Alloy Beaded Fashion Jewelry Necklace / Pendants And Glittering Necklace.",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://static.jaypore.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/s/pspjwf30015635-1_1.jpg",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 75,
    title: "Multi Coloured Beads Necklace",
    price: 12.99,
    description:
      "Buy Multi Coloured beads necklace earring set designer beaded jewelry online in india at Rs.1950, available only at Azilaa.com ",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "http://www.azilaa.com/pics/Modern-Multi-agate-gemstone-handmade-silver-necklace-set-41347_1_full.jpg",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 76,
    title: "Green Emerald Beaded Necklace",
    price: 12.99,
    description:
      "Buy Green Emerald Beaded Necklace Beads Fashion Jewelry Necklace ? Pendants Shine All Season Sparkly Kundan inspired Pearl studded to complete.",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://static.jaypore.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/m/y/mynjwf30014923-1_3.jpg",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 77,
    title: "Beads Necklace",
    price: 12.99,
    description:
      "This Beautiful Luxury look beads in blue color gives the Perfect bold and dashing looks, its perfect for any traditional occasion, and makes a bold",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "http://cdn.shopify.com/s/files/1/0269/0554/2755/products/8.1_8ba64ec2-de9f-49b2-86d8-76b3333a65d3_grande.jpg?v=1647412039",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 78,
    title: "Beads Necklace Designs",
    price: 12.99,
    description:
      "Designer handcrafted Semi - Precious long muli - Layered Pearls and red jade beads necklace from the house of the Gehna shop.",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://gehnashop.com/wp-content/uploads/2021/05/IMG-20210512-WA0000-e1620985421810.jpg",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 79,
    title: "Real Kemp Agate Beads Pendant Necklace ~ South India Jewels",
    price: 12.99,
    description:
      "Check out this beautiful real kemp agate beads pendant necklace that you can shop from shop.southindiajewels.com.",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://i.pinimg.com/736x/c8/be/b5/c8beb5ee6c249463297e88cfd66dea9d.jpg",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 80,
    title:
      "Soft Pink Flower indo western Pendant Necklace set at Rs. 1550 | Azilaa",
    price: 12.99,
    description:
      "Gorgeous soft pink modern flower indo western pendant gemstone necklace set. For fashionista in you! Enjoy and have fun !! Great as gifts!!",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://www.azilaa.com/pics/PINK-agate-necklace-earrings-set-antique-gold-tone-42616_1_3.jpg",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 81,
    title: "Agate Bead Nakshi Motif Lakshmi Choker Set ~ South India Jewels",
    price: 12.99,
    description:
      "Check out this stunning maroon agate bead nakashi motif lakshmi choker necklace set by the brand Aarvee.",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://i.pinimg.com/736x/77/91/1d/77911d0320813ac238f635770a3d2450.jpg",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 82,
    title: "Black Beads Necklace",
    price: 12.99,
    description:
      "150 Black Beads Ideas | Black beaded jewelry, Gold jewelry Indian",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://i.pinimg.com/originals/0d/6d/82/0d6d82e1a2686b61422a9f85abb34e39.jpg",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 83,
    title: "Indian Jewellery",
    price: 12.99,
    description: "Shop Indian Jewelry Sets Online For Women | Tarinika.",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://cdn.shopify.com/s/files/1/2026/1561/products/INX0092BC_808af321-8eb1-44bf-8b8b-bcd908afadf7_1600x.jpg?v=1641063290",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 84,
    title: "Beads and Gold plated Necklace",
    price: 12.99,
    description:
      "Buy SURATDIAMOND 3 Line Real Ruby Beads and Gold Plated Necklace and Earring set.",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image: "https://m.media-amazon.com/images/I/612x3Lo-vlL._UY395_.jpg",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 85,
    title: "Pearl Necklace",
    price: 12.99,
    description:
      "Pearl Necklace - Pearl Necklace Sets Designs Online at Best Prices in india",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://rukminim1.flixcart.com/image/332/398/knc2p3k0/necklace-chain/z/2/h/hc-804-thushi-golden-white-pearl-beads-necklace-necklace-heer-original-imag2fzhdsztfzsg.jpeg?q=50",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
  {
    id: 86,
    title: "Glimmering Pearl Necklace",
    price: 12.99,
    description:
      "If you are looking for Pearl Necklace Designs for each of your wedding event, this might be helpful! Take a look at some stunning designs for pearl inspiration.",
    category: "Jewellery",
    cart: "cart",
    buy: "buy",
    image:
      "https://cdn0.weddingwire.in/articles/images/7/2/1/2/img_52127/t30_pearl-necklace-designs-jagdamba-jewellers-cover.jpg",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
];

const filterproduct = document.querySelector(".filterProduct");

window.onload = () => {
  const product = document.querySelector(".products");

  for (let i of products) {
    const a = document.createElement("div");
    const card = document.createElement("div");
    const category = document.createElement("h4");
    const image = document.createElement("img");
    const cart = document.createElement("button");
    const buy = document.createElement("button");
    const title = document.createElement("h3");
    const price = document.createElement("h2");
    const description = document.createElement("p");
    const rating = document.createElement("h5");

    a.onclick = () => {
      window.location.href = `http://192.168.0.108:5501/suganya/public/HTML/productdetails.html?id=${i.id}`;
    };
    image.src = i.image;
    title.innerHTML = i.title;
    rating.innerHTML = i.rating.rate + "/ 5";

    cart.innerHTML = i.cart;
    buy.innerHTML = i.buy;
    // category.innerHTML = i.category;
    category.classList.add("category");
    description.innerHTML = i.description;
    price.innerHTML = i.price;

    card.classList.add("card");
    a.appendChild(card);

    product.appendChild(a);
    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(rating);

    // card.appendChild(category);
    card.appendChild(cart);
    card.appendChild(buy);
    card.appendChild(description);
    card.appendChild(price);

    cart.addEventListener("click", function (e) {
      e.stopPropagation();

      const cartOld = JSON.parse(localStorage.getItem("cart"));

      if (!cartOld) {
        localStorage.setItem("cart", JSON.stringify([i.id]));
        return;
      }

      const isOldId = cartOld.find((p) => p === i.id);

      if (isOldId) {
        const filterData = cartOld.filter((p) => p !== i.id);
        localStorage.setItem("cart", JSON.stringify(filterData));
        cart.innerHTML = "cart";
        return;
      }

      cartOld.push(i.id);
      localStorage.setItem("cart", JSON.stringify(cartOld));

      cart.innerHTML = "dislike";
    });

    buy.addEventListener("click", function (e) {
      e.stopPropagation();
      window.location.href =
        "http://192.168.0.108:5501/suganya/public/HTML/checkout.html";
    });
  }
};

// function filterproduct(values) {
//   console.log(values);
// }
