const products = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "Men's Clothing",
    like: "like",
    image:
      "https://5.imimg.com/data5/TestImages/FG/XL/FI/SELLER-45281882/gold-necklace-5-500x500.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "Men's Clothing",
    like: "like",
    image:
      "https://content3.jdmagicbox.com/comp/bhubaneshwar/dc/0674px674.x674.1231930748r6g9d6.dc/catalogue/hare-krishna-khimji-jewellers-nayapalli-bhubaneshwar-jewellery-showrooms-mhlkgt-250.jpg",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "Men's Clothing",
    like: "like",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2021/1/UM/MV/EI/94335171/gold-necklace-2--250x250.jpeg",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "Men's Clothing",
    like: "like",
    image:
      "https://5.imimg.com/data5/TestImages/WV/SK/TP/SELLER-45281882/gold-necklace-in-choker-style-250x250.jpg",
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "Jewelery",
    like: "like",
    image:
      "https://www.southjewellery.com/wp-content/uploads/2020/11/latest-gold-necklace-designs-2020-4.jpg",
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave ",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "Jewelery",
    like: "like",
    image:
      "https://www.krishnajewellers.com/blog/wp-content/uploads/2020/09/Gold-Choker-design.jpg",
    rating: {
      rate: 3.9,
      count: 70,
    },
  },
  {
    id: 7,
    title: "White Gold Plated Princess",
    price: 9.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "Jewelery",
    like: "like",
    image:
      "https://www.southjewellery.com/wp-content/uploads/2020/01/123VG5312-copy.jpg",
    rating: {
      rate: 3,
      count: 400,
    },
  },
  {
    id: 8,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "Jewelery",
    like: "like",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcmP4a-5ko0K-sOMCO3_FeJ_FgD0dcgEUhQw&usqp=CAU",
    rating: {
      rate: 1.9,
      count: 100,
    },
  },
  {
    id: 9,
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    price: 64,
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    category: "Electronics",
    like: "like",
    image:
      "https://i.pinimg.com/originals/3b/47/4d/3b474da7555837325871c730d9b25387.jpg",
    rating: {
      rate: 3.3,
      count: 203,
    },
  },
  {
    id: 10,
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 109,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: "Electronics",
    like: "like",
    image:
      "https://5.imimg.com/data5/TestImages/FV/FI/IS/SELLER-45281882/stylish-diamonds-necklace-2-500x500.jpg",
    rating: {
      rate: 2.9,
      count: 470,
    },
  },
  {
    id: 11,
    title:
      "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    price: 109,
    description:
      "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    category: "Electronics",
    like: "like",
    image:
      "https://i.pinimg.com/736x/3b/3e/68/3b3e682b01565c5ba646e069f560121d.jpg",
    rating: {
      rate: 4.8,
      count: 319,
    },
  },
  {
    id: 12,
    title:
      "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    price: 114,
    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    category: "Electronics",
    like: "like",
    image:
      "https://www.mehtajewellery.com/wp-content/uploads/2020/02/KE-3134-0-KN-1002-0.jpg",
    rating: {
      rate: 4.8,
      count: 400,
    },
  },
  {
    id: 13,
    title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    price: 599,
    description:
      "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    category: "Electronics",
    like: "like",
    image:
      "https://i.pinimg.com/600x315/ee/81/8a/ee818a3fc171ff1b0fd31225403d45a8.jpg",
    rating: {
      rate: 2.9,
      count: 250,
    },
  },
  {
    id: 14,
    title:
      "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    price: 999.99,
    description:
      "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    category: "Electronics",
    like: "like",

    image:
      "https://i.pinimg.com/originals/f0/af/79/f0af79283d4aa1b071bec4ad1b65bf51.jpg",
    rating: {
      rate: 2.2,
      count: 140,
    },
  },
  {
    id: 15,
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 56.99,
    description:
      "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    category: "Women's clothing",
    like: "like",
    image:
      "https://i.pinimg.com/736x/f6/1d/3d/f61d3d79a0aa1212a1edbc2ec9357456--pakistani-jewelry-diamond-necklaces.jpg",
    rating: {
      rate: 2.6,
      count: 235,
    },
  },
  {
    id: 16,
    title:
      "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 29.95,
    description:
      "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    category: "Women's clothing",
    like: "like",
    image:
      "https://i.pinimg.com/736x/dd/54/b4/dd54b4ef4708c284365df0b68a874a27--indian-diamond-necklace-diamond-necklace-set.jpg",
    rating: {
      rate: 2.9,
      count: 340,
    },
  },
  {
    id: 17,
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 39.99,
    description:
      "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category: "Women's clothing",
    like: "like",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2021/6/LN/WW/OG/692141/img-20210514-wa0045-250x250.jpg",
    rating: {
      rate: 3.8,
      count: 679,
    },
  },
  {
    id: 18,
    title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    price: 9.85,
    description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    category: "Women's clothing",
    like: "like",
    image:
      "https://i.pinimg.com/originals/35/a2/ba/35a2ba45c3014bbe6cddb127629b0877.jpg",
    rating: {
      rate: 4.7,
      count: 130,
    },
  },
  {
    id: 19,
    title: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    description:
      "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    category: "Women's clothing",
    like: "like",
    image:
      "https://i.pinimg.com/originals/97/bb/5f/97bb5ffbbf81b00c14ab2d612f0db8c2.jpg",
    rating: {
      rate: 4.5,
      count: 146,
    },
  },
  {
    id: 20,
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 12.99,
    description:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    category: "Women's clothing",
    like: "like",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTPizKjJ_W7AWKnj0_vokwp7_eZr9BooNDLh2hpZimFIg_nGT5FlbrVtFqo4UeY6qUSJM&usqp=CAU",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
];

window.onload = () => {
  const product = document.querySelector(".products");

  const cartOld = JSON.parse(localStorage.getItem("like"));
  const singleProduct = products.filter((p) => {
    const pro = cartOld.find((f) => f === p.id);
    return pro ? true : false;
  });

  console.log(singleProduct);

  for (let i of singleProduct) {
    const a = document.createElement("div");
    const card = document.createElement("div");
    const category = document.createElement("h4");
    const image = document.createElement("img");
    const like = document.createElement("button");
    const title = document.createElement("h3");
    const price = document.createElement("h2");

    const description = document.createElement("p");
    const rating = document.createElement("h5");

    a.onclick = () => {
      window.location.href = `http://192.168.0.106:5501/suganya/public/HTML/productdetails.html?id=${i.id}`;
    };
    image.src = i.image;
    like.innerHTML = i.like;
    category.innerHTML = i.category;
    category.classList.add("category");
    rating.innerHTML = i.rating.rate + "/ 5";
    title.innerHTML = i.title;
    description.innerHTML = i.description;
    price.innerHTML = i.price;

    card.classList.add("card");
    a.appendChild(card);
    product.appendChild(a);
    card.appendChild(image);
    card.appendChild(category);
    card.appendChild(rating);
    card.appendChild(like);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(price);
  }
};
