const products = [
  {
    id: 1,
    title: "Statement Designer bib pearl kundan necklace set",
    price: "₹ 5355.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    category: "silk",
    image:
      "https://www.azilaa.com/pics/Statement-Designer-bib-pearl-kundan-necklace-set-42799_1_full.jpg",
    description:
      "Glam Statement designer pearl kundan necklace set. A big statement bib style kundan studded with pearl necklace earrings set. The necklace has beautiful back minakari hand painted so you can wear this necklace both side depending on your mood or outfit.. All bling bling or multi necklace..Lets get ready for the party we are all waiting for. Parties here we go, Enjoy!!",
  },
  {
    id: 2,
    title: "Sansar India Bib Necklace for Girls (Silver) (410A)",
    price: "₹ 399.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    category: "silk",

    image: "https://m.media-amazon.com/images/I/81g6WQvc1YL._UY695_.jpg",
    description:
      "It is advisable to store jewellery in a zip lock pouch (air tight pouch), keep away from water perfume and other chemicals and clean it with dry and soft cloth",
  },
  {
    id: 3,
    title:
      "Fstrend Fashion Openwork Bib Necklace Gold Fish Scale Sequins Chain Statement Necklaces Jewelry for Women and Girls (Black)",
    price: "₹ 1000.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image: "https://m.media-amazon.com/images/I/61+qcum7JVL._SX679_.jpg",
    description:
      " Layered necklace is made of alloy,can be free to match according to your preferences.",
  },
  {
    id: 4,
    title: "The Serina Necklace",
    price: "₹ 6409.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    category: "silk",

    image:
      "https://kinclimg4.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BIAB0654N23_YAA18DIG6WHTOCITR_ABCD00-PICS-00000-1024-50036.png",
    description:
      "Diamond , White Topaz And Citrine Necklace In 18Kt Yellow Gold (10.2 gram) with Diamonds (0.1020 Ct)",
  },
  {
    id: 5,
    title: "The Ariella Lariat Necklace",
    price: "₹ 25063.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    category: "silk",

    image:
      "https://kinclimg9.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BIMG0717N08_YAA22XXXXXXXXXXXX_ABCD00-PICS-00003-1024-52910.png",
    description: "Necklace In 22Kt Yellow Gold (4.08 gram)",
  },
  {
    id: 6,
    title: "Gold Butterfly Lariat Necklace",
    price: "₹ 355.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSJ8kWwbqitZqfiQknG52u1NEfanVW52qeM06ZQmYVirbHxEilz-QQBcRXAZdI2TOxQda5Sguh_NInD94Y_G07Cal0h_ZSl&usqp=CAY",
    description:
      "The Gold Butterfly Lariat Necklace is the perfect piece for someone looking to add a tad bit of drama to their personal style. This stunning necklace is studded with Cubic Zirconia stones and pairs well with a low-cut top or open shirt. Style this with your favorite brunch or night-out outfit to complete your look.",
  },
  {
    id: 7,
    title: "Dual Sway Gemstone Necklace",
    price: "₹ 81052.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    category: "silk",

    image:
      "https://cdn.caratlane.com/media/catalog/product/J/L/JL03724-RGP9S0_1_lar.jpg",
    description:
      "This design is meticulously crafted using a fusion of shades of natural sapphires, to bring to you stunning jewellery inspired by the most captivating scenic beauties.",
  },
  {
    id: 8,
    title: "The Meliza Lariat Necklace",
    price: "₹ 36057.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    category: "silk",

    image:
      "https://kinclimg8.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BIMG0717N02_YAA18DIG6SYRUXXXX_ABCD00-PICS-00001-1024-52913.png",
    description:
      "Diamond And Ruby Necklace In 18Kt Yellow Gold (5.14 gram) with Diamonds (0.0760 Ct)",
  },
  {
    id: 9,
    title: "GOLD CHAIN & EVIL EYE LARIAT NECKLACE SET",
    price: "₹ 525.00",
    cart: "cart",
    buy: "buy",
    category: "silk",

    like: "like",
    image:
      "https://backend.pipabella.com/media/catalog/product/1080/o/-/o-oc21nl00215533_1.jpg",
    description:
      "Decorate your decolletage with this on-trend necklace set. From work to a night-out, this versatile piece can be worn on any occasion. Style it with a low-neck top or blazer to add an dusting of spazzaz to your overall look.",
  },
  {
    id: 10,
    title: "Blossom Coin Lariat Necklace in Rose Gold",
    price: "₹ 5447.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://cdn.shopify.com/s/files/1/0140/0245/4586/products/blossomcoinlariatnecklacerosegold1_900x.jpg?v=1602857056",
    description:
      "Dainty, rose gold and with a hint of sparkle - just how we like our jewellery. The Blossom Coin Lariat Necklace in Rose Gold features a linked chain with a pretty coin pendant, which is completed with super subtle cubic zirconias.",
  },
  {
    id: 11,
    title: "The Hiwaya Necklace",
    price: "₹ 48004.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://kinclimg5.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BIJP0639N206_YAA18DIG6WHTOXXXX_ABCD00-PICS-00003-1024-48375.png",
    description:
      "Diamond And White Topaz Necklace In 18Kt Yellow Gold (6.24 gram) with Diamonds (0.1370 Ct)",
  },
  {
    id: 12,
    title: "The Sheen Necklace",
    price: "₹ 52840.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://kinclimg4.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BISP0311N24_YAA18DIG6PRWHPRWF_ABCD00-PICS-00003-1024-27438.png",
    description:
      "Diamond And White Pearl Necklace In 18Kt Yellow Gold (8.3 gram) with Diamonds (0.0700 Ct)",
  },
  {
    id: 13,
    title: "Lilia Y necklace",
    price: "₹ 12500.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image: "javascript:void(0)",
    description:
      "Add a touch of glamorous femininity to your everyday look with this Y-shaped necklace. Designed with rose gold-tone plating, it features delicate butterfly motifs adorned with shimmering pink pavé. Style yours with everything from a simple white T-shirt to elegant eveningwear for dramatic effect.",
  },
  {
    id: 14,
    title: "Large Chakra Locket Necklace",
    price: "₹ 7343.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://www.poshtottydesigns.com/media/catalog/product/cache/521a7c155cd8b6caba84b4d4dd055a1f/n/e/new_lockets_group_resized_for_ptd.jpg",
    description:
      "Exclusive to Posh Totty Designs, the Large Chakra Locket Necklace is a variation on our bestselling Chakra Locket Necklace, in a striking larger locket size. The locket is handcrafted in our Brighton workshop from sterling silver, with optional 18ct gold plating, and features a delicately engraved mandala design. Considered to bring harmony, unity and inner peace, the mandala is a spiritual motif that represents the universe and the notion that life is a never ending circle. The interior of the locket is double-sided and holds up to two photos, one on each side. The Large Chakra Locket Necklace makes a wonderful gift for any occasion.",
  },
  {
    id: 15,
    title: "Sterling Silver and Peridot Locket Necklace",
    price: "₹ 6227.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image: "https://images1.novica.net/pictures/10/p187253_2_400.jpg",
    description:
      "Peridot glistens on a sterling silver droplet in the beautiful design of this locket pendant. By Buana, the ornate locket pendant is crafted by hand and opens for precious keepsakes. It hangs from a luminous Venetian chain.",
  },
  {
    id: 16,
    title:
      "Folding Photo Box Necklace 4 Photos Locket Necklace with Chain and Clasp,oval Shape Locket Necklace",
    price: "₹ 233.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://img.joomcdn.net/820ede9da7214347e59457a1043401fd08b13399_original.jpeg",
    description:
      "Catch this beautiful accessories for you. Match with suitable apparel for different occasion. Special design and unique structure, a popular item.",
  },
  {
    id: 17,
    title:
      "Heart locket necklace with photo and engraving , Stainless Steel locket necklace, Engraved Locket, gift for her, memorial gift",
    price: "₹ 2639.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://i.etsystatic.com/10226879/r/il/c9b158/3743702029/il_1588xN.3743702029_erev.jpg",
    description:
      "A beautiful plated heart locket necklace, engraved with your name, date, word etc.",
  },
  {
    id: 18,
    title: "Personalised Silver Locket Necklace With Bee Charm",
    price: "₹ 7009.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://cdn.notonthehighstreet.com/fs/e3/f4/c1f0-97ca-49a5-bb0b-244d969ac8b0/original_personalised-silver-locket-necklace-with-bee-charm.jpg",
    description:
      "Handmade in the UK, our solid sterling silver locket necklace comes with a bee charm and optional birthstone and can be personalised with engraving.",
  },
  {
    id: 20,
    title: "Silk Thread Necklace",
    price: "₹ 800.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://www.myangadi.com/image/cache/catalog/silk-thread-jewellery/11493-Silk-Thread-Jewellery-Necklace-Purple-Blue-1500x1500h.jpg",
    description:
      "Decorate this Navarathri with Unique collection of Bagavathi Amman Golu Doll / Golu Bommai - பகவதி அம்மன் கொலு பொம்மை from MyAngadi!",
  },
  {
    id: 21,
    title: "Elegant Simple Black Thread Necklace",
    price: "₹ 1800.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://shop.southindiajewels.com/wp-content/uploads/2020/08/Elegant-Mango-Design-Thread-Necklace-01-768x768.jpg",
    description:
      "Elegant & Simple Black Thread Necklace with matching earrings studded with pink & green stones. It looks best worn on your favorite silk sari or layered with other antique necklaces.",
  },
  {
    id: 22,
    title: "Silk Thread Handmade Necklace And Earrings Jewellery Set In Golden",
    price: "₹ 1440.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://www.99sarees.com/images/Products/original/SB78_7195_2280.jpg",
    description:
      "Silk Thread Handmade Necklace And Earrings Jewellery Set In Golden",
  },
  {
    id: 23,
    title: "Red & Gold-Toned Handmade Silk Thread Necklace",
    price: "₹ 449.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13190922/2020/12/9/60ad5080-68bb-4939-8fdd-341321a40c181607522602558-AKSHARA-Women-Pendant-6801607522601235-1.jpg",
    description:
      "Red and gold-toned handmade silk thread pendant with necklace, oxidized copper circular-shaped pendant with textured detail and beaded droplets",
  },
  {
    id: 24,
    title:
      "Beautiful Multi Color Silk Thread Ganesha Designer Pendant Necklace",
    price: "₹ 850.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://cdn.shopify.com/s/files/1/0627/1651/0441/products/dj-22520-0_713x.jpg?v=1644872126",
    description:
      "The product includesA pair of Earrings - Length : 5 cm , Width : 2.5 cmA Necklace - Length : 19 cmEarrings type - Push back Necklace comes with a dori .",
  },
  {
    id: 25,
    title: "Multicolored Beaded Layered Necklace",
    price: "₹ 4800.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://static.jaypore.com/tr:w-60,h-79,e-sharpen/media/catalog/product/9/9/990008786-1_1.jpg",
    description:
      "This product has been crafted by hand and may have slight irregularities or imperfections in color or embellishment. These irregularities are the result of the human involvement in the process and add to the finished products charm while ensuring you have a one-of-a-kind piece.",
  },
  {
    id: 26,
    title: "Paparazzi ~ Life of the FIESTA Multi Color Necklace",
    price: "₹ 100.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image: "https://i.ebayimg.com/images/g/7ooAAOSwH0RhZIAW/s-l500.jpg",
    description:
      "Two strands of silver chain are decorated in a flirtatious fringe of faceted green, pink, and plum teardrops. Glittery beveled silver teardrops are sprinkled between the colorful beading, adding hints of shimmer to the vibrant design. Features an adjustable clasp closure.",
  },
  {
    id: 27,
    title: "Leaf-Design Bead Statement Collar Necklace",
    price: "₹ 480.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20211013/jWBD/6165d611aeb2692b85d2198e/-473Wx593H-469041891-multi-MODEL2.jpg",
    description: "Leaf-Design Bead Statement Collar Necklace",
  },
  {
    id: 28,
    title: "Multi coloured beads necklace earring set designer beaded jewelry",
    price: "₹ 1753.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://www.azilaa.com/pics/Modern-Multi-agate-gemstone-handmade-silver-necklace-set-41347_1_full.jpg",
    description:
      "imple and versatile trendy multi coloured beads necklace earring set designer beaded jewelry. Made of finest gemstone beads goes with every thing. Due to natural nature to gemstone all necklaces are going to be unique one of a kind. You will get the best match as listed.",
  },
  {
    id: 29,
    title: "BRASS THREAD MATINEE NECKLACE D8C",
    price: "₹ 3550.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://cdn.shopify.com/s/files/1/0258/6243/8966/products/D8c500x750_1_1024x1024@2x.jpg?v=1607583073",
    description: "BRASS THREAD MATINEE NECKLACE D8C",
  },
  {
    id: 30,
    title: "Paper Blue Matinee Necklace",
    price: "₹ 790.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://www.fabindia.com/ccstore/v1/images/?source=/file/v6484792272822973174/products/10654482NK.f.210920.jpg&height=475&width=475",
    description: "Paper Blue Matinee Necklace",
  },
  {
    id: 31,
    title: "BRASS THREAD MATINEE NECKLACE",
    price: "₹ 2550.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://cdn.shopify.com/s/files/1/0258/6243/8966/products/D5b2000_6_fd8d4c56-1042-4442-b6c4-ece9d61542ab_1024x1024@2x.jpg?v=1603865508",
    description: "BRASS THREAD MATINEE NECKLACE",
  },
  {
    id: 32,
    title: "SIGNORA CHAIN MATINEE NECKLACE",
    price: "₹ 38300.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://cdn.shopify.com/s/files/1/2621/9412/products/NK505_61_YG-1_540x.jpg?v=1611638402",
    description:
      "Gold Plated Silver. We use 925 Sterling Silver as the base of our jewelry and plate it with 1-2 microns of Gold. We make sure that our plating technique is durable enough to withstand the everyday use of our jewelry pieces.",
  },
  {
    id: 33,
    title:
      "Long aquamarine chain gold with matt intermediate parts, extraordinary design, versatile combinable top matinee chain for evening",
    price: "₹ 32258.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://i.etsystatic.com/21488876/r/il/66f9d5/2507770965/il_1588xN.2507770965_5vgr.jpg",
    description:
      "The extraordinary chain is handmade in top quality and workmanship. The versatile gemstone necklace skilfully underlines your noble style.",
  },
  {
    id: 34,
    title:
      "Multicoloured semiprecious gemstone necklace with real gems and matt gold vermeil beads",
    price: "₹ 3293.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://i.etsystatic.com/26514328/r/il/b9ed93/3001879735/il_1588xN.3001879735_fl14.jpg",
    description:
      "long multi color real gemstone necklaces with matt gold vermeil (gold plated silver) round beads.",
  },
  {
    id: 35,
    title:
      "Baroque Pearl necklace, White Pearl Necklace with 24K gold plated clasp Gift for her Matinee Length Necklaces Wedding pearls jewelry",
    price: "₹ 17921.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://i.etsystatic.com/17100345/r/il/d3a42a/3606100312/il_1588xN.3606100312_3yn2.jpg",
    description:
      "Fantastic, beautiful natural AAA grade white freshwater pearl necklace. Cross shaped pearls with high lustre.",
  },
  {
    id: 36,
    title:
      "Argentium Sterling Silver Byzantine weave and Lampwork Glass Chainmaille Necklace -Handmade - Anniversary",
    price: "₹ 22798.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://i.etsystatic.com/5317621/r/il/8d64cb/423580374/il_1588xN.423580374_5d8i.jpg",
    description:
      "The colorful lampwork glass beads compliment the bold look of the handmade byzantine weave chaimaille. Two side knot weaves repeat the pattern of the petals on the lampwork beads. This is a great workplace jewelry. This necklace is entirely made by hand. All the jump rings are hand cut using Argentium Silver. This stunning necklace is a great 25th anniversary.",
  },
  {
    id: 37,
    title:
      "Lilac Flower Swarovski Crystal Japanese Beads Pendent Matinee Charm Necklace",
    price: "₹ 16111.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://i.etsystatic.com/28591285/r/il/e3d0c3/3029148937/il_1588xN.3029148937_h986.jpg",
    description:
      "Lilac Flower Swarovski Crystal Japanese Beads Pendent Matinee Charm Necklace",
  },
  {
    id: 38,
    title: "a unique pendant on a black dress",
    price: "₹ 1450.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://i.etsystatic.com/21367864/r/il/6a62fc/3796301824/il_1588xN.3796301824_nv9o.jpg",
    description:
      "Handmade resin necklace with natural dried leaves, designed passionately and made by love which make a unique and perfect gift for your beloved one and yourself! As mentioned, this necklace is made by resin and love which means in order to maintain the beauty and perfect condition of your jewelry",
  },
  {
    id: 39,
    title: "Spring Rain Drop Necklace",
    price: "₹ 1740.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://i.etsystatic.com/6404212/r/il/8b61f0/3029925739/il_1588xN.3029925739_ggsg.jpg",
    description:
      "The Spring Rain Drop Necklace is a favorite because it's Magically Sparkly, Simple, Dainty, and goes with everything. It has Vintage appeal with its Antiqued Brass chain. Nature Lovers will adore its Earthy, Wanderlust Aesthetic!",
  },
  {
    id: 40,
    title:
      "Vintage Korea Graduated Gold-Tone Bead Necklace, Mid Century Matinee Length",
    price: "₹ 2500.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://i.etsystatic.com/17049082/r/il/9b56f1/3564903739/il_1588xN.3564903739_kexs.jpg",
    description:
      "Bright gold-tone beads, strung on a chain, graduated in size to the largest at the front center. A simple, elegant necklace for the holiday season! Very good vintage condition. A bit of very light tarnish, center bead has two black dashes on one side. Beads are highly reflective, obscuring any minor flaws.",
  },
  {
    id: 41,
    title: "Basil Agate Matinee Charm Necklace",
    price: "₹ 11273.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://i.etsystatic.com/28591285/r/il/89a200/2972416504/il_1588xN.2972416504_m4gd.jpg",
    description:
      "Agate Charm Necklace is made from the two kinds of Agate stones. The colors are pine, basil, snow and gold. There is a possibility of an individual order.",
  },
  {
    id: 42,
    title:
      "Women Long Sweater Chain Bohemia Nepal Style Wood Bead Necklace Pendant",
    price: "₹ 1748.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://i.etsystatic.com/20176351/r/il/c4c70f/3192494120/il_1588xN.3192494120_2rtd.jpg",
    description:
      "Some beads may be a little rough, because they are handmade products. If you mind this, please think twice before place your order. Thanks.",
  },
  {
    id: 43,
    title: "Black and White Elegant Matinee Length Necklace and Earring Set",
    price: "₹ 675.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://i.etsystatic.com/10411478/r/il/52ae5f/846475196/il_1588xN.846475196_l4gh.jpg",
    description:
      "Elegant Black and White Stunning Matinee Length Necklace and Earring Set. This One of a Kind Sophisticated Beautiful Necklace Set is a simple Statement Piece. You will love the look and feel of this necklace around your neck. It is sure to garner many compliments.",
  },
  {
    id: 44,
    title: "14 k Gold Pineapple Pendant on 19-Inch 14 k Gold Chain",
    price: "₹ 100070.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://i.etsystatic.com/33215666/r/il/0368e1/3924267761/il_1588xN.3924267761_3nue.jpg",
    description:
      "This 14 k gold pineapple necklace is an absolute treat. The gold base and crown of the pineapple are finely crafted out of 14 k gold while the body of the pineapple is dark brown and simply engraved, giving this piece additional texture and dimension. Hanging from a 19-inch 14 k gold chain, this lovely pendant hangs at matinee length and is sure to delight!",
  },
  {
    id: 45,
    title:
      "Plastron necklace in golden leather and rooster feathers and pheasant",
    price: "₹ 14500.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://i.etsystatic.com/8535743/r/il/e5b201/3967655789/il_1588xN.3967655789_nete.jpg",
    description:
      "This necklace has a powerful illuminating effect thanks to its metallic gold leather! You will collect compliments by the hundreds! With a thin bronze chain and striped rooster and pheasant feathers, all with purple or green highlights, this necklace is a unique piece handcrafted with materials from the circular economy for the respect of animals and the planet :) The rooster is a symbol of pride and protection of the family or clan.",
  },
  {
    id: 46,
    title: "Choker necklace torque",
    price: "₹ 3059.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://i.etsystatic.com/15063775/r/il/3268ff/3129399150/il_1588xN.3129399150_gi7t.jpg",
    description:
      "torque choker; tribal necklace; brass silver plated; rajasthan indian gipsy choker; ethnic jewelry; ajustable",
  },
  {
    id: 47,
    title: "Torque flat collar Hammered and smooth brass - Boho, boho chic",
    price: "₹ 1534.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://i.etsystatic.com/18225576/r/il/af272c/2916956304/il_1588xN.2916956304_k80m.jpg",
    description:
      "2 models for these pretty torques: Hammered or smooth brass. To wear on any occasion Easily tightens at the back but you can ask me for a safety chain and message clasp ( )",
  },
  {
    id: 48,
    title: "Silver necklace plastron deer and silver key",
    price: "₹ 1321.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://i.etsystatic.com/14378416/r/il/6179b4/3859208504/il_1588xN.3859208504_avoj.jpg",
    description:
      "Here is a pretty necklace inspired by nature. It is composed of a breastplate formed from the head of a deer and connectors to the silver arabesques. A pompom (20 mm) is placed at the end of the chain. The chain of the necklace measures 44 cm. It can be freely lengthened or shortened... Do not hesitate to let me know ;)))",
  },
  {
    id: 49,
    title:
      "Necklace plastron pearls Egyptian style golden and vintage blue 1960's",
    price: "₹ 5964.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://i.etsystatic.com/17052025/r/il/338d77/3004893464/il_1588xN.3004893464_l2jc.jpg",
    description:
      "Egyptian style breastplate necklace, a nice mesh of pearl pearls and turquoise colored pearls. An elegant necklace with the perfect manufacture of the 1960s. He has passed the test of time, 60 years, without taking a wrinkle, his style remains perfectly current. The pearls in blue and pearlescent resin are in perfect condition. The golden links that associate them are impeccable. the length of the collar is 37.5 cm, and the largest width is 9 cm. This necklace is adjustable if necessary, It is enough for this to add a few golden rings on either side and others from the clasp. For international, packages are sent by registered mail.",
  },
  {
    id: 50,
    title: "Multicolor necklace in african loincloth fabric for women",
    price: "₹ 3408.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://i.etsystatic.com/14976437/r/il/730ffd/3770855799/il_1588xN.3770855799_clqu.jpg",
    description:
      "Choker necklace, bib type with several rigid rows, was made from loincloth wax fabric. Carefully handmade in Dakar by a small family business, this necklace bears witness to technique and know-how. Each necklace is thus unique! With this very high quality accessory, you will always be trendy and feminine in all seasons. By combining wax and golden touches, you get a distinguished necklace, always original, classy and timeless, capable of sublimating all your outfits.",
  },
  {
    id: 51,
    title: "Ethnic Wood Alloy Leaf Pendant Necklaces",
    price: "₹ 1717.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSTiUQuqg7ofb1qZq1M0o82zjiJ8Qbbd_ekSB1KDAISpkh6hlt-QUV8eva0cy4mT5NQ-tAabO28F2fX6JfV4CyOrz-ksVGdZv6KjW2fKBM&usqp=CAE",
    description:
      "ETHNIC WOOD ALLOY LEAF PENDANT NECKLACES VINTAGE LEATHER ROPE LONG SWEATER NECKLACE ",
  },
  {
    id: 52,
    title: "Blue Sandstone Moon Phase Necklace - Charm Necklace ",
    price: "₹ 1931.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://i.etsystatic.com/28382707/r/il/bfdc06/3959959651/il_1588xN.3959959651_c7mr.jpg",
    description: " All jewelry is custom handcrafted with Love and Care",
  },
  {
    id: 53,
    title: "vintage zodiac charm necklaces",
    price: "₹ 14976.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://i.etsystatic.com/17368178/r/il/330746/2396896703/il_1588xN.2396896703_7oos.jpg",
    description:
      "Choose your gorgeous vintage zodiac sign and we will attach to our amazing 14 karat gold filled chain with gold filled toggle. Chain is 17 inches in length. If you want longer or shorter, just let us know. This listing is for zodiac sign complete with chain and toggle only. You can find our choker and star necklace in our store as well. These beautiful zodiac charms were made in Germany in the 1970's, making them 50 years old! The domed charm itself is glass and the backing is made of brass.",
  },
  {
    id: 54,
    title: "Bee Necklace, HoneyBee Charm Necklace Silver",
    price: "₹ 3948.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://i.etsystatic.com/6244698/r/il/812ea6/3389512531/il_1588xN.3389512531_71yf.jpg",
    description:
      "Bee Necklace for Women, Bee Necklace Silver, Bee Necklace Charm, Bee Necklace, Honey Bee Necklace, Honey Bee, Honeycomb Necklace with Bee Charm - Honeycomb Necklace - Honeycomb Pendant, Bee hive necklace Beekeeper jewelry, Honey bee necklace",
  },
  {
    id: 55,
    title: "Moonstone Astronaut Necklace, Spacemen Charm Necklace",
    price: "₹ 1354.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://i.etsystatic.com/20225618/r/il/978449/3879484637/il_1588xN.3879484637_8huo.jpg",
    description: "Simple design necklace, lightweight and elegant design",
  },
  {
    id: 56,
    title: "Family Charm Necklace",
    price: "₹ 2804.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://i.etsystatic.com/6120089/r/il/3eeedc/3550061086/il_1588xN.3550061086_pc7i.jpg",
    description:
      "Family Charm Necklace, Custom Birthstone Initial Necklace, Delicate Necklace, Unique Gift, Gift for Her, Mom Necklace, Stamped Necklace",
  },
  {
    id: 57,
    title:
      "Tassel Necklace. Leather Tassel Necklace. Turquoise Orange Aqua Tassel Necklace. Long Tassel Necklace. Boho Tassel Jewelry.",
    price: "₹ 3707.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://i.etsystatic.com/6129803/r/il/e8d06f/3625604387/il_1588xN.3625604387_f16q.jpg",
    description:
      "Tassel Necklace. Leather Tassel Necklace. Turquoise Orange Aqua Tassel Necklace. Long Tassel Necklace. Boho Tassel Jewelry.",
  },
  {
    id: 58,
    title:
      "Nefertiti’s Boo Thang Beaded Necklace - 36 inches with a 6 inch tassel",
    price: "₹ 18180.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://i.etsystatic.com/11665307/r/il/e94600/2525554411/il_1588xN.2525554411_s0eq.jpg",
    description:
      "This necklace features a mix of beads from around the world. Glass imported from the Czech Republic. Swarovski Crystal from Austria, vintage beads from Germany, or hand blown glass form various artists. ",
  },
  {
    id: 59,
    title:
      "Pink Bohemian Tassel Necklace, Hippie Necklace, Gold and Pink Pendant, Fabric Tassel Necklace, Pink Lover Gifts, Pink Jewelry",
    price: "₹ 2010.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://i.etsystatic.com/19515325/r/il/876411/3978621077/il_1588xN.3978621077_l20p.jpg",
    description:
      "This gorgeous, pink and gold bohemian/hippie style necklace is made from a variety of materials. I used pink (with AB rainbow coating) glass beads, gold plated hematite beads, and a resin and clay Indonesian focal bead (with gold tone accents embedded in the clay), along with a fabric tassel, and a gold plated connector bead for the chain. The chain itself is a dainty cable chain made of high-quality gold plated brass (so no nickel, cadmium, or lead). The necklace latches with a gold plated brass lobster claw clasp.",
  },
  {
    id: 60,
    title:
      "Tassel Necklace, Sea Green Silk Tassel and Gold Feather Pendant Necklace, Feather Charm, Gold Necklace, Boho Necklace, Funky Jewellery",
    price: "₹ 3007.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://i.etsystatic.com/11000481/r/il/99abe4/2985870444/il_1588xN.2985870444_sdqo.jpg",
    description:
      "Fabulous 'sea' green silk tassel with gold feather pendant on a twisted ring hanging on a 30 gold cable necklace chain. Looks great with any top...t-shirt, jumper or shirt! The sea green is such a delicious colour and goes with so many clothes. If you'd like to change the colour of the tassel, click through to the end photo of the photo real and choose from the colours available and let me know.",
  },
  {
    id: 61,
    title: "Torque Brass Necklace -Labradorite Leaf",
    price: "₹ 5709.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://i.etsystatic.com/25262383/r/il/1befe8/3781696943/il_1588xN.3781696943_58kd.jpg",
    description:
      "Labradorite stone is known for its protective properties. It is extremely protective by absorbing the negative, but also by being a shield in its own right. ... The action of labradorite is recognized as regenerative at the physical and mental level following periods of exhaustion.",
  },
  {
    id: 62,
    title:
      "Gold-Plated Necklace Set with Goddess Lakshmi & Ganesha Design Motif",
    price: "₹ 6580.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://cdn.shopify.com/s/files/1/0796/1959/products/antique-necklace-ruby-antique-necklace-135035-24076265947292_600x600.jpg?v=1641143645",
    description:
      "Accessorise your outfit with the gracefulness of gold. This piece of gold necklace can be paired perfectly with anything you are wearing. Be ready to accept endless compliments once you enter the party with this gorgeous antique necklace.",
  },
  {
    id: 63,
    title: "Antique Necklace 137743",
    price: "₹ 5450.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://cdn.shopify.com/s/files/1/0796/1959/products/antique-necklace-gold-antique-necklace-137743-32367977037980_600x600.jpg?v=1640101619",
    description:
      "Accessorise your outfit with the gracefulness of gold. This piece of gold necklace can be paired perfectly with anything you are wearing. Be ready to accept endless compliments once you enter the party with this gorgeous antique necklace.",
  },
  {
    id: 64,
    title: "Antique Bridal Necklace Set for Women",
    price: "₹ 1621.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTvgJEE069qlRQ9mEwhUq25_PotQgVUefnVu_yG9SKdvHeF-uWyoY4xs5g9G7YXsilFJXl5IlLhm2pr4BmyG7F15q7moLeuLeHNHfcd8hE&usqp=CAE",
    description:
      "Get this Necklace set online here at Navishka's. Material - Premium Quality Gold Plated ; Polish – Antique Gold ; Base Metal - Copper Alloy ; Stone  Semi-precious gemstones",
  },
  {
    id: 65,
    title:
      "22K Jadtar Necklace Set (55.3 gms) - Antique Jewellery for Women by Jewelegance (JGS-2001-00293)",
    price: "₹ 305984.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS5SU84rAF_1mmaLlLH2pcNNHRlXMdToR5PztkEJm0-f1kw_y8FwgQXcPP9bp6tBnb3h7GbD6RJAEtJ0lKlMhh9iZxKM4RmdgEjW8w7ENKq7bc5f1H99UIf&usqp=CAE",
    description:
      "Every piece of jewellery has been certified for purity/authenticity by BIS and International laboratories like IGI.",
  },
  {
    id: 66,
    title: "Shrinika Antique Choker",
    price: "₹ 320625.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://www.svtmjewels.com/media/catalog/product/cache/1/image/910x/9df78eab33525d08d6e5fb8d27136e95/s/v/svtm-102-3246_1.jpg",
    description:
      "Get modern, the old-fashioned way! Find inspiration from classics, give it a modern twist and here you get an elegant statement 22kt gold Choker stunner for any occasion.",
  },
  {
    id: 67,
    title:
      "Antique Gold Necklace/Indian choker/South Indian Necklace/ Ganesha Necklace/ Bridal Necklace/Temple Jewelry/Temple Necklace/Amrapali/Wedding",
    price: "₹ 10921.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://i.etsystatic.com/22562645/r/il/7aa459/3228621615/il_1588xN.3228621615_flet.jpg",
    description:
      "South Indian Necklace With Gold Plating. Indian Bridal Temple Traditional One Gram Jewelry Choker Set. Gorgeous 24 K gold plated. Very Gorgeous and elegant one 24 k thick micron gold plated dainty Polki necklace set Comes with matching earrings",
  },
  {
    id: 68,
    title: "Varunika Choker",
    price: "₹ 307892.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://www.svtmjewels.com/media/catalog/product/cache/1/image/910x/9df78eab33525d08d6e5fb8d27136e95/s/v/svtm-102-3370_1.jpg",
    description:
      "A modern charm with this minimalistic yet traditional gold Choker inspired by nature. the necklace features a Lakshmi design with floral and paisley patterns, while the neckpiece features antique-designed patterns.",
  },
  {
    id: 69,
    title:
      "Victorian Choker/Green uncut Kundan Choker /Meenakari Choker /Indian Rajasthani Choker /Indian Necklace/Pakistani jewelry/Sabyasachi jewelry",
    price: "₹ 7198.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://i.etsystatic.com/22562645/r/il/5c27df/3897064320/il_1588xN.3897064320_dsvw.jpg",
    description:
      "Elegant and delicate Indian Necklace With Gold Plating. Indian Bridal Kundan set One Gram Jewelry Choker Set. Very Gorgeous and pretty, fine Kundan choker necklace with matching earrings",
  },
  {
    id: 70,
    title:
      "Meenakari Kundan Necklace, Kundan Choker, Aqua Pink choker ,Rajasthani jewelry , Polki choker, Indian Jewelry, Indian Necklace ,Sabyasachi",
    price: "₹ 5596.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://i.etsystatic.com/22562645/r/il/4fb493/3868994042/il_1588xN.3868994042_sply.jpg",
    description:
      "Elegant Indian Necklace Gold Plating. Indian Bridal Kundan greenTraditional One Gram Jewelry Choker Set. Gorgeous 24 K gold plated. Beautiful and elegant Kundan and Meenakari Green beads choker.",
  },
  {
    id: 71,
    title: "Navya Necklace Set",
    price: "₹ 596867.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://www.svtmjewels.com/media/catalog/product/cache/1/image/910x/9df78eab33525d08d6e5fb8d27136e95/s/v/svtm-102-3335.jpg",
    description:
      "Dress like a diva by donning this stunner of an Antique necklace. the 22kt stunning, eye-catching neckpiece features an elaborate, four-layered chakri design with its matching Earrings, Studded with Fancy, Mozonit, Pearls.",
  },
  {
    id: 72,
    title: "Ragi Diamond Necklace Set",
    price: "₹ 536828.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://www.kameswarijewellers.com/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/D/3/D33A7095.jpg",
    description:
      "Want to look chic and elegant on special occasions? Then we have the perfect match for you! This gorgeous necklace is inspired with nature and modern elements, further decorated with the sparkle of diamonds. The two tone gold adds a unique touch to the piece.",
  },
  {
    id: 73,
    title: "Extremely beautiful and versatile, this Diamond necklace",
    price: "₹ 345625.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://img1.krishnajewellers.com/DealImages/11039/LargeImages/5.jpg",
    description:
      "Extremely beautiful and versatile, this Diamond necklace encapsulates the grace and grandeur of a modern bride. Perfect for your Sangeet or Reception night, it features Yellow Gold, Diamonds and a Stunning Emerald piece.",
  },
  {
    id: 74,
    title: "ALLURING ROYAL BRIDAL CHOKER",
    price: "₹ 507621.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://navrathan.com/wp-content/uploads/2022/04/NJJ-01-408249-min.jpg",
    description:
      "Alluring antique collection that embellish the stunning glow to traditional outfits for occassions that are timeless as gold.",
  },
  {
    id: 75,
    title: "MAJESTIC ETHNIC ROYAL GOLD HAAR",
    price: "₹ 2410783.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://navrathan.com/wp-content/uploads/2022/05/NJM-2110104-min-scaled.jpg",
    description:
      "Spinning a legacy of jewels and embellishments with an extravagant motif-each piece studded with utmost modernity in rich culture.",
  },
  {
    id: 76,
    title: "Antique Necklace 143056",
    price: "₹ 6950.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://cdn.shopify.com/s/files/1/0796/1959/products/antique-necklace-ruby-antique-necklace-143056-33813710471324_600x600.jpg?v=1651487882",
    description: "Antique Necklace 143056",
  },
  {
    id: 77,
    title: "AAA+ Zircon Jewelry sets ",
    price: "₹ 6595.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image: "https://ae01.alicdn.com/kf/HTB1CHV8bHrpK1RjSZTEq6AWAVXaU.jpg",
    description:
      "Newest Gold-Color Design wedding Necklace set AAA Cubic Zircon Bridal Jewelry Sets Earrings Necklace Promotion Nickel Free",
  },
  {
    id: 78,
    title: "Peacock diamond haram",
    price: "₹ 583929.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://www.southjewellery.com/wp-content/uploads/2022/06/diamond-haram-krishna.jpg",
    description:
      "18k gold peacock diamond haram studded with diamonds, emeralds and rubies by Krishna Jewellers, Pearls & gems.",
  },
  {
    id: 79,
    title: "Wedding Brass American Diamond Necklace ",
    price: "₹ 755343.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2021/12/AX/XF/DY/9424487/american-diamond-necklace-set-500x500.jpg",
    description:
      "Beuatiful american diamond wedding choker necklacelook with matching earring tika more different design available",
  },
  {
    id: 80,
    title: "American Diamond Ruby Necklace",
    price: "₹ 12999.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://cdn.shopify.com/s/files/1/1911/0603/products/American-Diamond-Ruby-Necklace-2_1000x.jpg?v=1644654387",
    description:
      "American Diamond Ruby Necklace is designed with superior quality products and will add dash of glamour to your Festive Outfits. Grab yours now. ",
  },
  {
    id: 81,
    title: "AD Peacock Ruby White Necklace",
    price: "₹ 976.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://cdn.shopify.com/s/files/1/1911/0603/products/AD-Peacock-Ruby-White-Necklace-1_1000x.jpg?v=1652782235",
    description:
      "AD Peacock Ruby Green Necklace designed with superior quality products and will add dash of glamour to your Festive Outfits. Grab yours now. ",
  },
  {
    id: 82,
    title: "Peacock Pearl Choker",
    price: "₹ 5368.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://cdn.shopify.com/s/files/1/1911/0603/products/Peacock-Pearl-Choker-1_1000x.jpg?v=1652177898",
    description:
      "Peacock Pearl Choker designed with superior quality products and will add dash of glamour to your Festive Outfits. Grab yours now.",
  },
  {
    id: 83,
    title: "Ruby Matt Necklace",
    price: "₹ 1772.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://cdn.shopify.com/s/files/1/1911/0603/products/Ruby-Matt-Necklace-1_1000x.jpg?v=1650451725",
    description:
      "Ruby Matt Necklace is designed with superior quality products and will add dash of glamour to your Festive Outfits. Grab yours now. ",
  },
  {
    id: 84,
    title: "Round Pearl Oxidised Choker",
    price: "₹ 2134.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://cdn.shopify.com/s/files/1/1911/0603/products/Round-Pearl-Oxidised-Choker-1_1000x.jpg?v=1649764901",
    description:
      "Round Pearl Oxidised Choker designed with superior quality products and will add dash of glamour to your Festive Outfits. Grab yours now. ",
  },
  {
    id: 85,
    title: "Ruby Stone Short Necklace",
    price: "₹ 543.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://cdn.shopify.com/s/files/1/1911/0603/products/Ruby-Stone-Short-Necklace-1_1000x.jpg?v=1647691706",
    description:
      "Ruby Stone Short Necklace designed with superior quality products and will add dash of glamour to your Festive Outfits. Grab yours now. ",
  },
  {
    id: 86,
    title: "Lakshmi Green Bead Pearl Bridal Necklace",
    price: "₹ 3980.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://cdn.shopify.com/s/files/1/1911/0603/products/Lakshmi-Green-Bead-Pearl-Bridal-Necklace-1_1000x.jpg?v=1647344645",
    description:
      "Lakshmi Green Bead Pearl Bridal Necklace Set designed with superior quality products and will add dash of glamour to your Festive Outfits. Grab yours now. ",
  },
  {
    id: 87,
    title: "Simple Emerald Necklace",
    price: "₹ 1000.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://cdn.shopify.com/s/files/1/1911/0603/products/Simple-Emerald-Necklace-1_1000x.jpg?v=1645702163",
    description:
      "Simple Emerald Necklace Set designed with superior quality products and will add dash of glamour to your Festive Outfits. Grab yours now. ",
  },
  {
    id: 88,
    title: "Emerald Gold Short Necklace",
    price: "₹ 1298.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://cdn.shopify.com/s/files/1/1911/0603/products/Emerald-Gold-Short-Necklace_1_1000x.jpg?v=1641658684",
    description:
      "Emerald Gold Short Necklace is designed with superior quality products and will add dash of glamour to your Festive Outfits. Grab yours now. ",
  },
  {
    id: 89,
    title: "Antique Bridal Peacock Ruby necklace",
    price: "₹ 5330.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://cdn.shopify.com/s/files/1/1911/0603/products/Antique-Bridal-Peacock-Ruby-Haram_1_1000x.jpg?v=1633453796",
    description:
      "Antique Bridal Peacock Ruby Haram form House of Kattam for complete traditional look.  This designer necklace set has golden beads droplets for more stylish look",
  },
  {
    id: 90,
    title: "Bridal Green Pearl Dasavatharam Necklace Set With Jhumka",
    price: "₹ 3980.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://cdn.shopify.com/s/files/1/1911/0603/products/Bridal-Green-PearlDasavatharam-Necklace-Set_1_1000x.jpg?v=1633363621",
    description:
      "Bridal Green Pearl Dasavatharam Necklace Set With Jhumka is Handcrafted Antique Matt Finish Set designed with superior quality products and will add dash of glamour to your Festive Outfits. Grab yours now. ",
  },
  {
    id: 91,
    title: "Ruby Emerald Grand Choker",
    price: "₹ 3880.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://cdn.shopify.com/s/files/1/1911/0603/products/Ruby-Emerald-Grand-Choker_5_1000x.jpg?v=1629964406",
    description:
      "Ruby Emerald Grand Choker is elegant choker design that suits the ethnic occasion. Beautifully designed this necklace is sure to turn heads. ",
  },
  {
    id: 92,
    title: "Layered Ruby Necklace",
    price: "₹ 2798.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://cdn.shopify.com/s/files/1/1911/0603/products/Layered-Ruby-Necklace-1_1000x.jpg?v=1647345379",
    description:
      "Layered Ruby Necklace designed with superior quality products and will add dash of glamour to your Festive Outfits. Grab yours now. ",
  },
  {
    id: 93,
    title: "American Diamond Peacock Necklace",
    price: "₹ 1880.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://cdn.shopify.com/s/files/1/1911/0603/products/American-Diamond-Peacock-Necklace-2_1000x.jpg?v=1645700523",
    description:
      "American Diamond Peacock Necklace Set designed with superior quality products and will add dash of glamour to your Festive Outfits. Grab yours now. ",
  },
  {
    id: 94,
    title: "Ruby Green Pearl Gold Plated Choker Set",
    price: "₹ 1180.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://cdn.shopify.com/s/files/1/1911/0603/products/Ruby-Green-Pearl-Gold-Plated-Choker-Set-1_1000x.jpg?v=1645168266",
    description:
      "Ruby Stones Beads Gold Plated Peacock Choker Set designed with superior quality products and will add dash of glamour to your Festive Outfits. Grab yours now. ",
  },
  {
    id: 95,
    title: "Bridal American Diamond Necklace Emerald",
    price: "₹ 3585.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://cdn.shopify.com/s/files/1/1911/0603/products/Bridal-American-Diamond-Necklace-emerald-2_3a6808f1-0f4a-4c58-9ea5-3db4b9014bf1_394x.jpg?v=1651923742",
    description:
      "Bridal American Diamond Necklace Emerald designed with superior quality products and will add dash of glamour to your Festive Outfits. Grab yours now. ",
  },
  {
    id: 96,
    title: "Ruby Kids AD Choker",
    price: "₹ 1735.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://cdn.shopify.com/s/files/1/1911/0603/products/Ruby-Kids-AD-Choker-1_1000x.jpg?v=1651662827",
    description:
      "Ruby Kids AD Choker designed with superior quality products and will add dash of glamour to your Festive Outfits. Grab yours now. ",
  },
  {
    id: 97,
    title: "Emerald Leaf AD Short Necklace",
    price: "₹ 2699.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://cdn.shopify.com/s/files/1/1911/0603/products/Emerald-Leaf-AD-Short-Necklace-1_1000x.jpg?v=1651315717",
    description:
      "Emerald Leaf AD Short Necklace Design is designed with superior quality products and will add dash of glamour to your Festive Outfits. Grab yours now. ",
  },
  {
    id: 98,
    title: "Pearl Gold Ball Chain",
    price: "₹ 1578.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://cdn.shopify.com/s/files/1/1911/0603/products/Pearl-Gold-Ball-Chain-1_1000x.jpg?v=1652781473",
    description:
      "Pearl Gold Ball Chain designed with superior quality products and will add dash of glamour to your Festive Outfits. Grab yours now. ",
  },
  {
    id: 99,
    title: "14k Yellow Gold Emerald and Diamond Necklace",
    price: "₹ 192812.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%202048%201365%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3C%2Fsvg%3E",
    description:
      "14k solid yellow gold rope chain features a prong set round natural emerald and a tiny round natural diamond, exquisite minimalist everyday fine piece of jewelry. This emerald and diamond necklace is a great combination of gemstone and diamond.",
  },
  {
    id: 100,
    title: "Simulated Emerald Green Necklace",
    price: "₹ 26775.00",
    cart: "cart",
    buy: "buy",
    like: "like",
    image:
      "https://cdn.shopify.com/s/files/1/0041/0664/9709/products/SimulatedEmeraldNecklacewithCushionCutEmerald_1024x1024.jpg?v=1605884842",
    description:
      "This Outstanding Emerald Green Necklace carries a Splendorous High Quality 1.8ct Cushion Cut Simulated Emerald from Russia. The Emerald Simulant is set in a 92,5% Pure Silver pendant and surrounded by 30 Simulated Diamonds. The emerald necklace comes with a matching 45cm silver chain.",
  },
];

let newdata = products.filter(function (el) {
  return el.price >= 1250 && e1.Price <= 29800;
});
console.log(newdata);

const filter = document.querySelector("#chocker");
const filtered = document.querySelector(".filter");
const product = document.querySelector("#products_container");
const filteredProduct = document.querySelector("#filtered_products_container");

window.onload = () => {
  for (let pro of products) {
    const a = document.createElement("div");
    const card = document.createElement("div");
    const image = document.createElement("img");
    const row = document.createElement("div");
    const buttonFlex = document.createElement("div");
    const like = document.createElement("button");
    const buy = document.createElement("button");
    const title = document.createElement("h2");
    const price = document.createElement("h3");

    a.onclick = () => {
      window.location.href = `http://127.0.0.1:5500/Public/HTML/productdetails.html?id=${pro.id}`;
    };
    card.classList.add("card");
    title.innerHTML = pro.title;
    title.classList.add("title");
    image.src = pro.image;
    image.classList.add("img");
    like.innerHTML = pro.cart;
    buy.innerHTML = pro.buy;
    price.innerHTML = pro.price;
    price.classList.add("price");
    row.classList.add("row");
    buttonFlex.classList.add("button-flex");

    like.addEventListener("click", function (e) {
      e.stopPropagation();

      const oldCart = JSON.parse(localStorage.getItem("like"));

      if (!oldCart) {
        localStorage.setItem("like", JSON.stringify([pro.id]));
        return;
      }

      const isOldId = oldCart.find((p) => p === pro.id);

      if (isOldId) {
        const filteredData = oldCart.filter((p) => p !== pro.id);
        localStorage.setItem("like", JSON.stringify(filteredData));
        like.innerHTML = "cart";
        return;
      }

      oldCart.push(pro.id);
      localStorage.setItem("like", JSON.stringify(oldCart));
      like.innerHTML = "remove";
    });

    buy.addEventListener("click", function (e) {
      e.stopPropagation();
      window.location.href = "http://127.0.0.1:5500/Public/HTML/checkout.html";
    });

    a.appendChild(card);
    product.appendChild(a);
    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(row);
    row.appendChild(price);
    row.appendChild(buttonFlex);
    buttonFlex.appendChild(like);
    buttonFlex.appendChild(buy);
  }
};

function filterProducts(values) {
  console.log(values);
  function filterByValue(products, term) {
    var ans = products.filter(function (v, i) {
      if (v.title.toLowerCase().indexOf(term) >= 0) {
        return true;
      } else false;
    });
    return ans;
  }
  const filteredValues = filterByValue(products, values);
  console.log(filteredValues);

  product.remove();

  for (let pro of filteredValues) {
    const a = document.createElement("div");
    const card = document.createElement("div");
    const image = document.createElement("img");
    const row = document.createElement("div");
    const buttonFlex = document.createElement("div");
    const like = document.createElement("button");
    const buy = document.createElement("button");
    const title = document.createElement("h2");
    const price = document.createElement("h3");

    a.onclick = () => {
      window.location.href = `http://127.0.0.1:5500/Public/HTML/productdetails.html?id=${pro.id}`;
    };
    card.classList.add("card");
    title.innerHTML = pro.title;
    title.classList.add("title");
    image.src = pro.image;
    image.classList.add("img");
    like.innerHTML = pro.cart;
    buy.innerHTML = pro.buy;
    price.innerHTML = pro.price;
    price.classList.add("price");
    row.classList.add("row");
    buttonFlex.classList.add("button-flex");

    like.addEventListener("click", function (e) {
      e.stopPropagation();

      const oldCart = JSON.parse(localStorage.getItem("like"));

      if (!oldCart) {
        localStorage.setItem("like", JSON.stringify([pro.id]));
        return;
      }

      const isOldId = oldCart.find((p) => p === pro.id);

      if (isOldId) {
        const filteredData = oldCart.filter((p) => p !== pro.id);
        localStorage.setItem("like", JSON.stringify(filteredData));
        like.innerHTML = "cart";
        return;
      }

      oldCart.push(pro.id);
      localStorage.setItem("like", JSON.stringify(oldCart));
      like.innerHTML = "remove";
    });

    buy.addEventListener("click", function (e) {
      e.stopPropagation();
      window.location.href = "http://127.0.0.1:5500/Public/HTML/checkout.html";
    });

    a.appendChild(card);
    filteredProduct.appendChild(a);
    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(row);
    row.appendChild(price);
    row.appendChild(buttonFlex);
    buttonFlex.appendChild(like);
    buttonFlex.appendChild(buy);
  }
}
