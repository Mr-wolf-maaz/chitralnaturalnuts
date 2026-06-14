export const PRODUCTS = [
  {
    id: "1", name: "Premium Almonds", slug: "premium-almonds", price: 1800, comparePrice: 2200,
    category: "Almonds", image: "/images/almonds.jpg", rating: 4.8, reviewCount: 124, isFeatured: true,
    isOrganic: true, isNew: false, stock: 50, weight: 500, unit: "g",
    shortDesc: "Freshly harvested premium almonds from Chitral valleys. Rich in nutrients and naturally dried.",
    tags: ["almonds", "protein", "healthy"], origin: "Chitral Valley",
    benefits: ["High in Vitamin E", "Rich in Protein", "Heart Healthy", "Antioxidant Rich"],
    sku: "ALM-500", description: "Our premium almonds are hand-picked from the lush valleys of Chitral, at altitudes over 2000 meters. The natural mountain climate and pure glacier water create almonds of exceptional quality and flavor. Each batch is carefully cleaned, sorted, and packaged to preserve freshness."
  },
  {
    id: "2", name: "Walnuts (Akhrot)", slug: "walnuts", price: 2200, comparePrice: 2800,
    category: "Walnuts", image: "/images/walnuts.jpg", rating: 4.9, reviewCount: 98, isFeatured: true,
    isOrganic: true, isNew: false, stock: 35, weight: 500, unit: "g",
    shortDesc: "Brain-shaped wonder! Our Chitral walnuts are famous for their rich, buttery flavor.",
    tags: ["walnuts", "omega-3", "brain-food"], origin: "Chitral",
    benefits: ["Omega-3 Fatty Acids", "Brain Health", "Anti-inflammatory", "Rich in Antioxidants"],
    sku: "WAL-500", description: "Chitral is renowned across Pakistan for producing the finest walnuts. Our walnuts are harvested from century-old walnut trees, grown naturally without any pesticides. The result is a nut with a rich, complex flavor and exceptional nutritional profile."
  },
  {
    id: "3", name: "Pistachios (Pista)", slug: "pistachios", price: 3200, comparePrice: 3800,
    category: "Pistachios", image: "/images/pistachios.jpg", rating: 4.7, reviewCount: 87, isFeatured: true,
    isOrganic: false, isNew: false, stock: 25, weight: 250, unit: "g",
    shortDesc: "Premium quality pistachios with their distinctive green color and rich taste.",
    tags: ["pistachios", "snack", "premium"], origin: "Chitral / Afghanistan Border",
    benefits: ["Rich in Protein", "Healthy Fats", "Fiber Rich", "Eye Health"],
    sku: "PST-250", description: "Our pistachios come from the arid mountains near Chitral, where the harsh climate produces nuts with an intensely rich flavor. These naturally opened, lightly roasted pistachios are a true premium snacking experience."
  },
  {
    id: "4", name: "Pine Nuts (Chilgoza)", slug: "pine-nuts-chilgoza", price: 4500, comparePrice: 5200,
    category: "Pine Nuts", image: "/images/chilgoza.jpg", rating: 5.0, reviewCount: 156, isFeatured: true,
    isOrganic: true, isNew: false, stock: 20, weight: 200, unit: "g",
    shortDesc: "The crown jewel of Chitral! Rare Chilgoza pine nuts with exceptional flavor.",
    tags: ["chilgoza", "pine-nuts", "rare", "chitral"], origin: "Chitral Mountains",
    benefits: ["Extremely Rare", "High Energy", "Rich Minerals", "Anti-aging Properties"],
    sku: "CHG-200", description: "Chilgoza (pine nuts) are the pride of Chitral. Harvested from ancient pine forests at elevations above 2500 meters, these rare nuts take 3 years to mature. With a distinctive buttery flavor, they are considered a luxury superfood worldwide."
  },
  {
    id: "5", name: "Cashews (Kaju)", slug: "cashews", price: 2800, comparePrice: 3200,
    category: "Cashews", image: "/images/cashews.jpg", rating: 4.6, reviewCount: 72, isFeatured: false,
    isOrganic: false, isNew: true, stock: 40, weight: 500, unit: "g",
    shortDesc: "Creamy, rich cashews - perfect for snacking, cooking, and baking.",
    tags: ["cashews", "creamy", "versatile"], origin: "Premium Selection",
    benefits: ["Iron Rich", "Zinc Source", "Good Fats", "Magnesium Rich"],
    sku: "CSH-500", description: "Premium grade W320 cashews carefully selected for size and quality. These buttery, kidney-shaped nuts are perfect for snacking, cooking, and making cashew milk. Freshly packed to ensure maximum freshness."
  },
  {
    id: "6", name: "Dried Apricots (Khubani)", slug: "dried-apricots", price: 1400, comparePrice: 1800,
    category: "Dried Fruits", image: "/images/apricots.jpg", rating: 4.8, reviewCount: 143, isFeatured: true,
    isOrganic: true, isNew: false, stock: 60, weight: 500, unit: "g",
    shortDesc: "Sun-dried Chitral apricots. Naturally sweet, soft, and incredibly nutritious.",
    tags: ["apricots", "dried-fruit", "organic", "chitral"], origin: "Chitral Valley",
    benefits: ["Iron Rich", "Vitamin A", "Digestive Health", "Natural Sweetener"],
    sku: "APR-500", description: "Chitral's apricots are world-famous. Our sun-dried apricots are harvested from traditional orchards and dried using age-old techniques. No added sugar, no preservatives - just pure natural sweetness. These are a staple of the Chitrali diet and are exported worldwide."
  },
  {
    id: "7", name: "Premium Raisins (Kishmish)", slug: "raisins", price: 800, comparePrice: 1000,
    category: "Dried Fruits", image: "/images/raisins.jpg", rating: 4.5, reviewCount: 89, isFeatured: false,
    isOrganic: true, isNew: false, stock: 80, weight: 500, unit: "g",
    shortDesc: "Sweet, plump raisins from the vineyards of the mountain region.",
    tags: ["raisins", "kishmish", "sweet"], origin: "Northern Pakistan",
    benefits: ["Natural Energy", "Iron Rich", "Bone Health", "Digestive Aid"],
    sku: "RAS-500", description: "Our premium raisins are selected from the finest grape varieties grown in the high-altitude regions. Sun-dried over several weeks, these raisins develop an intense natural sweetness and chewy texture perfect for snacking or cooking."
  },
  {
    id: "8", name: "Organic Mountain Honey", slug: "organic-mountain-honey", price: 2500, comparePrice: 3000,
    category: "Honey", image: "/images/honey.jpg", rating: 4.9, reviewCount: 211, isFeatured: true,
    isOrganic: true, isNew: false, stock: 30, weight: 500, unit: "g",
    shortDesc: "Pure, raw mountain honey from the bee-keepers of Chitral.",
    tags: ["honey", "organic", "raw", "mountain"], origin: "Chitral Mountains",
    benefits: ["Antibacterial", "Natural Energy", "Immune Boost", "Anti-aging"],
    sku: "HON-500", description: "Our mountain honey is collected by traditional beekeepers from hives placed in the wildflower meadows of Chitral at elevations above 3000 meters. This raw, unfiltered honey retains all its natural enzymes, pollen, and propolis for maximum health benefits."
  },
  {
    id: "9", name: "Mixed Premium Nuts", slug: "mixed-premium-nuts", price: 2200, comparePrice: 2600,
    category: "Mixed Nuts", image: "/images/mixed-nuts.jpg", rating: 4.7, reviewCount: 178, isFeatured: true,
    isOrganic: false, isNew: false, stock: 45, weight: 500, unit: "g",
    shortDesc: "A luxurious blend of almonds, walnuts, cashews, pistachios, and more.",
    tags: ["mixed-nuts", "assorted", "gift"], origin: "Chitral & Northern Pakistan",
    benefits: ["Complete Nutrition", "Healthy Fats", "Protein Rich", "Perfect Snack"],
    sku: "MIX-500", description: "Our signature mixed nut blend brings together the finest nuts from Chitral and Northern Pakistan. A carefully curated mix of almonds, walnuts, cashews, pistachios, and pine nuts creates the perfect healthy snack or gift."
  },
  {
    id: "10", name: "Dates (Khajoor) Premium", slug: "dates-premium", price: 1600, comparePrice: 2000,
    category: "Dried Fruits", image: "/images/dates.jpg", rating: 4.6, reviewCount: 67, isFeatured: false,
    isOrganic: false, isNew: true, stock: 55, weight: 500, unit: "g",
    shortDesc: "Premium quality Medjool-style dates. Naturally sweet and extremely nutritious.",
    tags: ["dates", "khajoor", "sweet", "ramadan"], origin: "Premium Selection",
    benefits: ["Natural Sweetener", "Fiber Rich", "Energy Boost", "Mineral Rich"],
    sku: "DAT-500", description: "Premium quality dates carefully selected for their size, sweetness, and texture. These naturally ripened dates are a perfect healthy alternative to refined sugar and make an excellent snack or ingredient."
  },
  {
    id: "11", name: "Black Raisins (Munaqqa)", slug: "black-raisins", price: 1200, comparePrice: 1500,
    category: "Dried Fruits", image: "/images/black-raisins.jpg", rating: 4.4, reviewCount: 45, isFeatured: false,
    isOrganic: true, isNew: true, stock: 35, weight: 500, unit: "g",
    shortDesc: "Premium black raisins with exceptional nutritional profile.",
    tags: ["raisins", "black", "munaqqa"], origin: "Northern Pakistan",
    benefits: ["Antioxidant Rich", "Blood Health", "Natural Energy", "Skin Health"],
    sku: "BLR-500", description: "Our black raisins (Munaqqa) are traditionally used in Pakistani cuisine and are known for their rich, deep flavor and exceptional health benefits. These are larger than regular raisins and have a more intense sweetness."
  },
  {
    id: "12", name: "Dry Fig (Anjeer)", slug: "dry-fig", price: 1800, comparePrice: 2200,
    category: "Dried Fruits", image: "/images/fig.jpg", rating: 4.7, reviewCount: 56, isFeatured: false,
    isOrganic: true, isNew: false, stock: 25, weight: 250, unit: "g",
    shortDesc: "Sweet and nutritious dried figs, a natural superfood.",
    tags: ["fig", "anjeer", "superfood"], origin: "Northern Pakistan",
    benefits: ["Calcium Rich", "Digestive Health", "Blood Sugar Control", "Anti-cancer"],
    sku: "FIG-250", description: "Our premium dried figs (Anjeer) are slowly sun-dried to preserve their natural sweetness and nutritional content. Rich in fiber, calcium, and antioxidants, these are a true superfood from the mountains."
  }
];

export const CATEGORIES = [
  { id: "1", name: "Almonds", slug: "almonds", icon: "🥜", count: 4 },
  { id: "2", name: "Walnuts", slug: "walnuts", icon: "🌰", count: 3 },
  { id: "3", name: "Pistachios", slug: "pistachios", icon: "🫘", count: 3 },
  { id: "4", name: "Pine Nuts", slug: "pine-nuts", icon: "🌲", count: 2 },
  { id: "5", name: "Cashews", slug: "cashews", icon: "🥜", count: 3 },
  { id: "6", name: "Dried Fruits", slug: "dried-fruits", icon: "🍑", count: 6 },
  { id: "7", name: "Mixed Nuts", slug: "mixed-nuts", icon: "🎁", count: 3 },
  { id: "8", name: "Honey", slug: "honey", icon: "🍯", count: 2 },
];

export const TESTIMONIALS = [
  {
    id: 1, name: "Ayesha Rahman", location: "Karachi", rating: 5,
    comment: "The quality of almonds is absolutely exceptional! I've tried many brands but Chitral Natural Nuts is in a completely different league. Fresh, crispy, and you can taste the mountain freshness. Will definitely order again!",
    product: "Premium Almonds", avatar: "AR", date: "2 weeks ago"
  },
  {
    id: 2, name: "Muhammad Hassan", location: "Lahore", rating: 5,
    comment: "Chilgoza from Chitral - absolutely incredible! The authentic taste brings back childhood memories. The packaging is premium, delivery was fast. Highly recommended for anyone who loves quality nuts.",
    product: "Pine Nuts (Chilgoza)", avatar: "MH", date: "1 month ago"
  },
  {
    id: 3, name: "Sara Ahmed", location: "Islamabad", rating: 5,
    comment: "Ordered the mixed nuts as a gift for my family. Everyone loved it! The variety is great and each nut is of exceptional quality. The mountain honey is a bonus gem - purely organic and incredibly delicious.",
    product: "Mixed Premium Nuts", avatar: "SA", date: "3 weeks ago"
  },
  {
    id: 4, name: "Dr. Imran Khan", location: "Peshawar", rating: 5,
    comment: "As a nutritionist, I always recommend natural and organic nuts to my patients. Chitral Natural Nuts delivers exactly what they promise - pure, natural, and sourced directly from Chitral. The walnuts are especially impressive.",
    product: "Walnuts (Akhrot)", avatar: "IK", date: "1 month ago"
  },
  {
    id: 5, name: "Fatima Malik", location: "Rawalpindi", rating: 4,
    comment: "The dried apricots taste like nothing I've had before - pure Chitral sweetness. Delivery was on time and the packaging was excellent. Will definitely make this my regular supplier for premium dry fruits.",
    product: "Dried Apricots", avatar: "FM", date: "2 weeks ago"
  },
  {
    id: 6, name: "Zubair Ali", location: "Multan", rating: 5,
    comment: "Exceptional quality and authentic taste. The mountain honey is pure gold - no artificial sweeteners, just pure mountain goodness. I love that it's directly sourced from Chitral beekeepers.",
    product: "Organic Mountain Honey", avatar: "ZA", date: "5 days ago"
  }
];

export const WHY_CHOOSE_US = [
  {
    icon: "🏔️", title: "Directly Sourced from Chitral",
    desc: "We work directly with farmers and harvesters in Chitral, ensuring the freshest and most authentic products reach your table without any middlemen."
  },
  {
    icon: "✅", title: "100% Natural & Organic",
    desc: "No artificial preservatives, no chemicals, no additives. Just pure nature's bounty from the pristine mountains of Chitral, Pakistan."
  },
  {
    icon: "🎁", title: "Premium Packaging",
    desc: "Our products are carefully packed to preserve freshness and nutritional value, using eco-friendly packaging that keeps your nuts fresh for months."
  },
  {
    icon: "🚚", title: "Fast Pakistan-Wide Delivery",
    desc: "We deliver to all major cities across Pakistan within 3-5 business days. Free shipping on orders over Rs. 2,000."
  },
  {
    icon: "⭐", title: "Quality Guarantee",
    desc: "100% quality guarantee on all products. If you're not satisfied, we offer a full refund or replacement. Your satisfaction is our priority."
  },
  {
    icon: "💚", title: "Supporting Local Communities",
    desc: "Every purchase supports the farming communities of Chitral. We pay fair prices and invest in the sustainable future of mountain agriculture."
  }
];

export const HEALTH_BENEFITS = [
  {
    title: "Heart Health", icon: "❤️",
    desc: "Rich in omega-3 fatty acids and monounsaturated fats that reduce bad cholesterol and support cardiovascular health.",
    nuts: ["Walnuts", "Almonds", "Pistachios"]
  },
  {
    title: "Brain Power", icon: "🧠",
    desc: "DHA and essential fatty acids in nuts support cognitive function, memory, and protect against neurodegenerative diseases.",
    nuts: ["Walnuts", "Cashews", "Pine Nuts"]
  },
  {
    title: "Energy & Vitality", icon: "⚡",
    desc: "Natural proteins and healthy fats provide sustained energy throughout the day without blood sugar spikes.",
    nuts: ["All Nuts", "Dried Fruits", "Honey"]
  },
  {
    title: "Immune System", icon: "🛡️",
    desc: "Zinc, selenium, and antioxidants in nuts and honey strengthen your immune system and fight inflammation.",
    nuts: ["Mountain Honey", "Almonds", "Cashews"]
  }
];

export const BLOG_POSTS = [
  {
    id: 1, slug: "health-benefits-of-walnuts", category: "Health",
    title: "10 Science-Backed Health Benefits of Eating Walnuts Daily",
    excerpt: "Discover why nutritionists and doctors worldwide recommend walnuts as nature's perfect brain food. From heart health to cognitive function.",
    image: "/images/blog-walnuts.jpg", readTime: 6, author: "Dr. Amina Shah",
    date: "December 10, 2024", tags: ["walnuts", "health", "nutrition"]
  },
  {
    id: 2, slug: "chitral-chilgoza-the-rare-pine-nut", category: "Culture",
    title: "Chilgoza: The Story of Chitral's Rare Pine Nuts",
    excerpt: "Learn about the fascinating journey of Chilgoza from Chitral's ancient pine forests to your table. A story of tradition, sustainability, and exceptional flavor.",
    image: "/images/blog-chilgoza.jpg", readTime: 8, author: "Ahmad Raza",
    date: "December 5, 2024", tags: ["chilgoza", "chitral", "culture"]
  },
  {
    id: 3, slug: "nut-recipes-pakistani-cuisine", category: "Recipes",
    title: "5 Traditional Pakistani Recipes Enhanced with Premium Nuts",
    excerpt: "From sheer khurma to karahi, discover how premium quality nuts can elevate your traditional Pakistani cooking to restaurant quality.",
    image: "/images/blog-recipes.jpg", readTime: 10, author: "Chef Nadia Ali",
    date: "November 28, 2024", tags: ["recipes", "cooking", "Pakistani cuisine"]
  },
  {
    id: 4, slug: "dried-apricots-of-chitral", category: "Products",
    title: "Why Chitral Apricots Are the World's Finest",
    excerpt: "The combination of glacial water, high altitude sunshine, and centuries of traditional farming creates apricots found nowhere else on earth.",
    image: "/images/blog-apricots.jpg", readTime: 5, author: "Sarah Williams",
    date: "November 20, 2024", tags: ["apricots", "chitral", "organic"]
  }
];

export const FAQS = [
  {
    category: "Shipping",
    questions: [
      { q: "How long does delivery take?", a: "We deliver to all major cities across Pakistan within 3-5 business days. Karachi, Lahore, and Islamabad typically receive orders within 2-3 days." },
      { q: "Do you offer free shipping?", a: "Yes! We offer free shipping on all orders above Rs. 2,000. For orders below this amount, a flat shipping fee of Rs. 200 applies." },
      { q: "Do you ship internationally?", a: "Currently, we ship within Pakistan only. We are working on international shipping and will announce when it's available. Sign up for our newsletter to be notified." },
      { q: "How can I track my order?", a: "Once your order is shipped, you'll receive a tracking number via SMS and email. You can track your order on our website or the courier's website." }
    ]
  },
  {
    category: "Products & Quality",
    questions: [
      { q: "Are your products 100% natural?", a: "Yes, absolutely! All our products are 100% natural with no artificial preservatives, colors, or additives. What you see is what you get - pure mountain goodness." },
      { q: "How do you ensure product freshness?", a: "We source our products directly from Chitral farmers and process them in our facility. Products are vacuum-packed or nitrogen-flushed to maintain maximum freshness." },
      { q: "What is the shelf life of your products?", a: "Most nuts have a shelf life of 12-18 months when stored in cool, dry conditions. Dried fruits last 6-12 months. Each product has a best-before date on the packaging." },
      { q: "Are your products certified organic?", a: "Many of our products are organically grown, though not all have formal organic certification. We clearly label organic products on our website and packaging." }
    ]
  },
  {
    category: "Payment",
    questions: [
      { q: "What payment methods do you accept?", a: "We accept Cash on Delivery (COD), Easypaisa, JazzCash, bank transfer, credit/debit cards via Stripe, and PayPal." },
      { q: "Is online payment secure?", a: "Yes, all online payments are processed through SSL-encrypted, PCI-compliant payment gateways. We never store your card details." },
      { q: "Can I pay cash on delivery?", a: "Yes! Cash on Delivery is available for all orders within Pakistan. Please ensure someone is available at the delivery address to receive and pay." }
    ]
  },
  {
    category: "Returns & Refunds",
    questions: [
      { q: "What is your return policy?", a: "We offer a 100% satisfaction guarantee. If you're not happy with your order, contact us within 7 days of delivery for a full refund or replacement." },
      { q: "What if my product arrives damaged?", a: "In the rare case of damage during transit, take photos and contact us immediately. We'll arrange a replacement or refund at no cost to you." }
    ]
  }
];

export const SHIPPING_METHODS = [
  { name: "Standard Delivery", cost: 200, days: "3-5 Business Days", cities: "All Pakistan" },
  { name: "Express Delivery", cost: 400, days: "1-2 Business Days", cities: "Major Cities" },
  { name: "Free Shipping", cost: 0, days: "3-5 Business Days", cities: "Orders above Rs. 2,000" }
];
