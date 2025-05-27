/**
 * Hertzuly E-commerce - Product Detail Page JavaScript
 *
 * This script handles the product detail page functionality.
 */

// DOM Elements
const productDetailContainer = document.getElementById("product-detail");
const relatedProductsContainer = document.getElementById("related-products");
const recentlyViewedContainer = document.getElementById(
  "recently-viewed-products"
);
const descriptionPanel = document.getElementById("description-panel");
const featuresPanel = document.getElementById("features-panel");
const specificationsPanel = document.getElementById("specifications-panel");
const reviewsPanel = document.getElementById("reviews-panel");
const reviewsContainer = document.querySelector(".reviews-container");
const categoryBreadcrumb = document.getElementById("category-breadcrumb");
const categoryLink = document.getElementById("category-link");
const productNameBreadcrumb = document.getElementById(
  "product-name-breadcrumb"
);
const tabButtons = document.querySelectorAll(".tab-btn");
const averageRating = document.getElementById("average-rating");
const averageRatingStars = document.getElementById("average-rating-stars");
const totalReviews = document.getElementById("total-reviews");
const reviewsList = document.getElementById("reviews-list");
const reviewCount = document.getElementById("review-count");
const writeReviewBtn = document.getElementById("write-review-btn");
const reviewFormContainer = document.getElementById("review-form-container");
const cancelReviewBtn = document.getElementById("cancel-review");
const reviewForm = document.getElementById("review-form");
const ratingSelect = document.querySelectorAll(".rating-select i");
const ratingValue = document.getElementById("rating-value");

// Get product ID from URL
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get("id"));

// Variables for product data
let currentProduct = null;
let currentQuantity = 1;
let selectedOptions = {};

// Mock data for the current product (in real app, this would come from a server API)
// Using same product data from products.js
const PRODUCTS_DATA = [
  {
    id: 1,
    name: "iPhone 16 Pro Max",
    description:
      "The latest flagship smartphone from Apple, featuring cutting-edge technology, an advanced camera system, and an ultra-smooth display.",
    price: 1299,
    images: [
      "https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-geo-240909_inline.jpg.large.jpg",
      "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-16-pro-max-1.jpg",
      "https://images.unsplash.com/photo-1730036900477-09391e7a5414?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwMTYlMjBwcm8lMjBtYXh8ZW58MHx8MHx8fDA%3D",
    ],
    category: "phones",
    brand: "Apple",
    deviceType: "Smartphones",
    rating: 4.8,
    reviewCount: 124,
    stockCount: 32,
    onSale: false,
    isNew: true,
    features: [
      "6.7-inch Super Retina XDR display with ProMotion technology",
      "A18 Bionic chip for unparalleled performance",
      "Triple 48MP camera system with LiDAR scanner",
      "5G connectivity for faster downloads and streaming",
      "Ceramic Shield front cover and surgical-grade stainless steel frame",
    ],
  },
  {
    id: 2,
    name: "Samsung Galaxy Book3 Pro 360",
    description:
      "A premium 2-in-1 convertible laptop with a sleek design, powerful performance, and vivid AMOLED touchscreen, ideal for professionals and creatives.",
    price: 1899.99,
    images: [
      "https://cdn.mos.cms.futurecdn.net/QWFCVzRNt2N7WJWf84zHF7.jpg",
      "https://www.notebookcheck.net/fileadmin/_processed_/2/7/csm_Samsung_Galaxy_Book3_8_3a04445f26.jpg",
      "https://www.pcworld.com/wp-content/uploads/2025/04/PHO23_167_GalaxyBook3Series_v2.00_07_15_10.Still002-1.jpg?quality=50&strip=all",
    ],
    category: "computers",
    brand: "samsung",
    deviceType: "Laptops",
    rating: 4.9,
    reviewCount: 287,
    stockCount: 87,
    onSale: false,
    isNew: false,
    colors: ["Brown", "White", "Honey"],
    sizes: ['Small (8")', 'Medium (12")', 'Large (16")'],
    features: [
      "13th Gen Intel Core i7 processor",
      "16-inch 3K AMOLED touchscreen with S Pen support",
      "16GB LPDDR5 RAM and 1TB SSD storage",
      "360-degree hinge for tablet and laptop modes",
      "Lightweight aluminum chassis and long-lasting battery",
    ],
  },
  {
    id: 3,
    name: "Sony BRAVIA XR A95L (QD-OLED, 4K)",
    description:
      "Sony's flagship 4K QD-OLED TV offering vibrant colors, deep blacks, and advanced cognitive processing for an immersive viewing experience, perfect for both cinema and gaming enthusiasts.",
    price: 2499,
    salePrice: 2299,
    images: [
      "https://www.digitaltrends.com/wp-content/uploads/2023/10/sony-a95l-qd-oled-review-29.jpg?fit=3840%2C2160&p=1",
      "https://cdn.mos.cms.futurecdn.net/Lk6dCXJhznwxULbqQj8U4P-1200-80.jpg",
      "https://clsonyb2c.vtexassets.com/arquivos/ids/464317-800-800?v=638554711128900000&width=800&height=800&aspect=true",
    ],
    category: "smartdevice",
    brand: "sony",
    deviceType: "3-12",
    rating: 4.7,
    reviewCount: 96,
    stockCount: 12,
    onSale: true,
    isNew: false,
    features: [
      "QD-OLED panel for exceptional contrast and color accuracy",
      "Cognitive Processor XR for lifelike picture and sound",
      "4K resolution with support for HDR10, Dolby Vision, and HLG",
      "Google TV with hands-free voice control and smart home integration",
      "Perfect for gaming with HDMI 2.1, 120Hz refresh rate, and VRR support",
    ],
  },
  {
    id: 4,
    name: "Bose SoundWear Companion Speaker",
    description:
      "A wearable speaker that rests comfortably on your shoulders, delivering rich, immersive sound while keeping you aware of your surroundings—perfect for home, work, or on the go.",
    price: 299,
    images: [
      "https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/speakers/soundwear_companion/product_silo_images/soundwear_companion_black_EC_hero.psd/jcr:content/renditions/cq5dam.web.600.600.png",
      "https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/speakers/soundwear_companion/product_silo_images/soundwear_companion_black_EC_03.psd/jcr:content/renditions/cq5dam.web.600.600.png",
      "https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/speakers/soundwear_companion/product_silo_images/soundwear_companion_black_EC_04.psd/jcr:content/renditions/cq5dam.web.600.600.png",
    ],
    category: "wearable",
    brand: "bose",
    deviceType: "6+",
    rating: 4.5,
    reviewCount: 153,
    stockCount: 42,
    onSale: false,
    isNew: true,
    features: [
      "Wearable design for hands-free listening",
      "Deep, clear sound with waveguide technology",
      "Up to 12 hours of battery life per charge",
      "Sweat- and weather-resistant (IPX4 rated)",
      "Bluetooth connectivity with voice assistant integration",
    ],
  },
  {
    id: 5,
    name: "Huawei Mate XT (Ultimate Design)",
    description:
      "A premium foldable smartphone that blends cutting-edge technology with exquisite design, featuring ultra-thin foldable glass, flagship performance, and an artistic gold-accented frame for discerning users.",
    price: 2500,
    salePrice: 2488,
    images: [
      "https://i.ebayimg.com/images/g/KUAAAOSw3KFm7mJ-/s-l1200.jpg",
      "https://down-sg.img.susercontent.com/file/sg-11134201-7rdyk-m0cxw39jtn0p8d",
      "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/6/7/4/2/1/1/PXL_20240919_183723139-900922db3cf5a475.jpg",
    ],
    category: "phones",
    brand: "Huawei",
    deviceType: "",
    rating: 4.6,
    reviewCount: 201,
    stockCount: 56,
    onSale: true,
    isNew: false,
    features: [
      "7.85-inch foldable OLED display with 2K+ resolution",
      "Ultra-thin design with 18K gold-plated hinge and ceramic back",
      "Kirin 9000S chip with 5G connectivity",
      "512GB storage + 16GB RAM, with NM card expansion",
      "Ultra Vision Leica Quad Camera System with 50MP main sensor",
    ],
  },
  {
    id: 6,
    name: "iMac 24-inch 2024 M4",
    description:
      "The 2024 iMac 24-inch, powered by Apple's M4 chip, delivers enhanced performance, vibrant color options, and a sleek design. With improvements in processing power and graphics, it caters to both professionals and creatives seeking a reliable all-in-one desktop solution.",
    price: 1299,
    images: [
      "https://i.pcmag.com/imagery/reviews/06JtnFXxnDBIQX46RvfGWkf-12.fit_lim.size_1050x591.v1731081986.jpg",
      "https://thedisconnekt.com/wp-content/uploads/2024/11/Apple-iMac-M4-16.jpg",
      "https://fs.npstatic.com/userfiles/7695213/image/apple-imac-m4-2024/apple-imac-m4-nextpit-review-8-w1400h1050.jpg",
    ],
    category: "computers",
    brand: "Apple",
    deviceType: "",
    rating: 4.7,
    reviewCount: 167,
    stockCount: 38,
    onSale: false,
    isNew: true,
    colors: ["White", "Pink", "Purple"],
    features: [
      "Offers up to 1.7x faster performance compared to the previous M1 model, enhancing productivity and handling demanding tasks with ease.",
      " 24-inch 4.5K Retina display with 4480 x 2520 resolution, 500 nits brightness, and support for 1 billion colors. Optional nano-texture glass reduces glare, ideal for bright environments.",
      "12MP FaceTime HD camera featuring Center Stage and Desk View, ensuring clear video calls. Equipped with a six-speaker sound system and studio-quality three-microphone array for immersive audio experiences.",
      "Includes up to four Thunderbolt 4/USB-C ports, Wi-Fi 6E, and Bluetooth 5.3, ensuring fast data transfer and wireless connectivity.",
      "Maintains the ultra-thin design with new color options including green, yellow, orange, pink, purple, blue, and silver, allowing for personalized aesthetics.",
    ],
  },
  {
    id: 7,
    name: "Samsung SmartThings",
    description:
      "The Samsung SmartThings Hub 3rd Generation is a smart home automation hub designed to connect and control a wide range of smart devices. It enables users to create routines, monitor devices remotely, and integrate with voice assistants like Alexa and Google Assistant.",
    price: 69.99,
    images: [
      "https://i0.wp.com/staceyoniot.com/wp-content/uploads/2020/01/SmartThings-PCD-desktop.jpg?ssl=1",
      "https://img.us.news.samsung.com/us/wp-content/uploads/2018/10/14104237/TLCSHP11.png",
      "https://www.reliant.co.uk/blog/wp-content/uploads/2024/02/SmartThings3.jpg",
    ],
    category: "smartdevice",
    brand: "FunPlay",
    deviceType: "3-10",
    rating: 4.4,
    reviewCount: 89,
    stockCount: 24,
    onSale: false,
    isNew: false,
    features: [
      "Supports Zigbee, Z-Wave, and Wi-Fi for broad device compatibility",
      "Works with Amazon Alexa, Google Assistant, and Samsung Bixby",
      "Create custom automation routines based on time, location, or device status",
      "Receive remote alerts and notifications from connected sensors and cameras",
      "Easy Wi-Fi setup with no need for Ethernet connection",
    ],
  },
  {
    id: 8,
    name: "Sony Xperia 1 VII",
    description:
      "The Sony Xperia 1 VII is a flagship smartphone featuring a 6.5-inch 4K OLED display, triple-lens camera system with ZEISS optics, and Snapdragon 865 processor, designed for multimedia enthusiasts and professionals.",
    price: 1199.99,
    images: [
      "https://m-cdn.phonearena.com/images/article/159499-wide-two_1200/Xperia-1-VII-tipped-to-feature-larger-camera-sensors-for-better-low-light-pictures-with-less-noise.jpg",
      "https://petapixel.com/assets/uploads/2025/05/sony-xperia-1-vii-featured.jpg",
      "https://www.androidauthority.com/wp-content/uploads/2024/08/sony-xperia-1-vi-review-front-handheld-scaled.jpg",
    ],
    category: "phones",
    brand: "Sony",
    deviceType: "",
    rating: 4.8,
    reviewCount: 112,
    stockCount: 35,
    onSale: false,
    isNew: false,
    features: [
      "6.5-inch 4K HDR OLED display with 21:9 CinemaWide aspect ratio",
      "Triple rear camera system with 12MP sensors and ZEISS optics",
      "Qualcomm Snapdragon 865 processor with 5G support",
      "8GB RAM and 256GB internal storage, expandable via microSD",
      "IP68 water and dust resistance and 4000mAh battery with fast charging",
    ],
  },
  {
    id: 9,
    name: "Bose Frames Tenor",
    description:
      "Bose Frames Tenor are high-performance audio sunglasses with a refined, modern square frame design and advanced open-ear audio technology.",
    price: 259,
    salePrice: 249,
    images: [
      "https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/wearables/bose_frames_tenor/product_silo_images/tenor_product_page_ec_hero.png/jcr:content/renditions/cq5dam.web.1920.1920.png",
      "https://media.sweetwater.com/m/products/image/02abd9fe9aGFgqbicghQtOmZ6YbPs5PN4Zj9oc8M.wm-lw.jpg?quality=82&width=750&ha=02abd9fe9adf4656",
      "https://i5.walmartimages.com/asr/edd2ac30-98cd-40d2-9756-e21e04d927d4.5f81f802048bb31d23c9315d7cbfc80e.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    ],
    category: "wearable",
    brand: "Bose",
    deviceType: "",
    rating: 4.3,
    reviewCount: 78,
    stockCount: 20,
    onSale: true,
    isNew: false,
    colors: ["Rainbow", "Blue", "Pink"],
    features: [
      "Open-ear audio for immersive sound without earbuds",
      "Advanced microphone system for clear calls",
      "Bluetooth connectivity for wireless streaming",
      "Polarized lenses with UV protection",
      "Up to 5.5 hours of battery life per charge",
    ],
  },
  {
    id: 10,
    name: "Huawei P50 Pro",
    description:
      "The Huawei P50 Pro is a flagship smartphone that combines cutting-edge camera technology with elegant design and powerful performance for an exceptional user experience.",
    price: 999,
    images: [
      "https://m.media-amazon.com/images/I/51tNBbfB4DL._AC_SL1000_.jpg",
      "https://149367133.v2.pressablecdn.com/wp-content/uploads/2022/01/220128-GadgetMatch-Huawei-P50-Pro-Beauty-4.jpg",
      "https://m-cdn.phonearena.com/images/review/5327-wide-two_1200/Huawei-P50-Pro-review.jpg",
    ],
    category: "phones",
    brand: "Huawei",
    deviceType: "",
    rating: 4.7,
    reviewCount: 156,
    stockCount: 47,
    onSale: false,
    isNew: true,
    features: [
      "6.6-inch OLED display with 120Hz refresh rate",
      "Quad-camera system with 50MP main sensor",
      "Snapdragon 888 4G processor",
      "4360mAh battery with 66W fast charging",
      "IP68 dust and water resistance",
    ],
  },
  {
    id: 11,
    name: "Apple HomePod  Second-Generation HomePod",
    description:
      "The second-generation Apple HomePod is a smart speaker that delivers rich, spatial audio with Siri voice control, smart home integration, and seamless Apple ecosystem compatibility.",
    price: 320,
    salePrice: 299,
    images: [
      "https://www.macworld.com/wp-content/uploads/2023/10/Apple-HomePod-Gen2_review_2.jpg?quality=50&strip=all",
      "https://www.soundandvision.com/images/styles/600_wide/public/SV_020123_homepod_hero.jpg",
      "https://i.ytimg.com/vi/P9egR90Lh7E/sddefault.jpg",
    ],
    category: "smartdevice",
    brand: "Apple",
    deviceType: "",
    rating: 4.5,
    reviewCount: 92,
    stockCount: 18,
    onSale: true,
    isNew: false,
    colors: ["Red", "Blue", "Black"],
    features: [
      "High-excursion woofer and beamforming tweeters for immersive sound",
      "Spatial Audio with dynamic head tracking",
      "Built-in Siri voice assistant",
      "Seamless integration with Apple devices and HomeKit",
      "Temperature and humidity sensors for smart home automation",
    ],
  },
  {
    id: 12,
    name: "Samsung Odyssey OLED G9 (G95SC)",
    description:
      "The Samsung Odyssey OLED G9 (G95SC) is a high-end ultra-wide gaming monitor that combines stunning OLED visuals with a curved 1000R design and advanced gaming features.",
    price: 2499.99,
    images: [
      "https://thegadgetflow.com/wp-content/uploads/2023/01/Samsung-Odyssey-OLED-G9-G95SC-Curved-Gaming-Monitor-03-768x432.jpg",
      "https://i.rtings.com/assets/products/juqbbyEi/samsung-odyssey-oled-g9-g95sc-s49cg95/design-medium.jpg?format=auto",
      "https://media.licdn.com/dms/image/v2/D4D22AQEF24uUBITIyw/feedshare-shrink_800/feedshare-shrink_800/0/1715769176589?e=2147483647&v=beta&t=sEgLOfOdcctx6TcIqwFuTZdlT1o7JuSfSXjPM3UM1yk",
    ],
    category: "computers",
    brand: "samsung",
    deviceType: "",
    rating: 4.9,
    reviewCount: 215,
    stockCount: 63,
    onSale: false,
    isNew: false,
    colors: ["Gray", "Pink", "Blue"],
    features: [
      "49-inch ultra-wide OLED display with 240Hz refresh rate",
      "1000R curved screen for immersive gaming experience",
      "1ms response time and NVIDIA G-SYNC compatibility",
      "HDR support with 1000 nits peak brightness",
      "Multiple connectivity options including DisplayPort and USB-C",
    ],
  },
];

// Mock data for product reviews
const REVIEWS_DATA = {
  1: [
    {
      id: 1,
      productId: 1,
      name: "Jennifer Smith",
      email: "jennifer.smith@example.com",
      rating: 5,
      title: "Amazing phones toy!",
      content:
        "My 7-year-old absolutely loves this learning robot. He spends hours coding and solving puzzles with it. The voice recognition feature works surprisingly well, and the screen-free play option is perfect for limiting screen time while still engaging with technology.",
      date: "2023-03-15",
      verified: true,
    },
    {
      id: 2,
      productId: 1,
      name: "Michael Johnson",
      email: "michael.j@example.com",
      rating: 4,
      title: "Great phones value",
      content:
        "This robot has been a hit with my daughter. She's learning basic coding concepts without even realizing it. The only reason I'm giving it 4 stars instead of 5 is that battery life could be better - we get about 3 hours of play before needing to recharge.",
      date: "2023-02-28",
      verified: true,
    },
    {
      id: 3,
      productId: 1,
      name: "Sarah Williams",
      email: "sarah.w@example.com",
      rating: 5,
      title: "Worth every penny",
      content:
        "As an elementary school teacher, I appreciate toys that actually deliver on phones promises. This robot does exactly that! It's intuitive enough for kids to use independently but complex enough to grow with them. The multiple learning games keep it fresh and interesting.",
      date: "2023-01-10",
      verified: true,
    },
  ],
  2: [
    {
      id: 4,
      productId: 2,
      name: "Emily Davis",
      email: "emily.d@example.com",
      rating: 5,
      title: "The perfect bedtime companion",
      content:
        "This teddy bear is incredibly soft and well-made. My 2-year-old refuses to sleep without it now! I love that it's machine washable - we've already had to clean it twice and it comes out looking brand new. Very durable stitching too.",
      date: "2023-04-05",
      verified: true,
    },
    {
      id: 5,
      productId: 2,
      name: "Robert Miller",
      email: "robert.m@example.com",
      rating: 5,
      title: "High-quality computers toy",
      content:
        "I've bought a lot of stuffed animals over the years, and this is one of the best. The material is super soft but durable, and the embroidered features mean no plastic parts that could potentially come loose. We got the medium size and it's perfect.",
      date: "2023-03-22",
      verified: true,
    },
  ],
};

// Initialize product detail page
document.addEventListener("DOMContentLoaded", function () {
  // Check if we have a valid product ID
  if (!productId) {
    showErrorMessage("Product not found. Please try another product.");
    return;
  }

  // Get product data
  const product = PRODUCTS_DATA.find((p) => p.id === productId);

  if (!product) {
    showErrorMessage("Product not found. Please try another product.");
    return;
  }

  // Save current product
  currentProduct = product;

  // Add to recently viewed
  addToRecentlyViewed(product);

  // Display product details
  displayProductDetails(product);

  // Display product description, features, etc.
  displayProductTabs(product);

  // Display product reviews
  displayProductReviews(product);

  // Load related products
  loadRelatedProducts(product);

  // Load recently viewed products
  loadRecentlyViewedProducts();

  // Setup tab navigation
  setupTabNavigation();

  // Setup review form
  setupReviewForm();
});

/**
 * Display error message when product not found
 */
function showErrorMessage(message) {
  if (productDetailContainer) {
    productDetailContainer.innerHTML = `
      <div class="error-message">
        <i class="fas fa-exclamation-circle"></i>
        <h2>Oops!</h2>
        <p>${message}</p>
        <a href="../pages/products.html" class="btn btn-primary">Browse Products</a>
      </div>
    `;
  }
}

/**
 * Display product details
 */
function displayProductDetails(product) {
  // Update page title
  document.title = `${product.name} - Hertzuly`;

  // Update breadcrumb
  if (categoryBreadcrumb && categoryLink && productNameBreadcrumb) {
    // Format category name
    const formattedCategory =
      product.category.charAt(0).toUpperCase() + product.category.slice(1);

    categoryLink.textContent = formattedCategory;
    categoryLink.href = `../pages/products.html?category=${product.category}`;
    productNameBreadcrumb.textContent = product.name;
  }

  // Display product details
  if (productDetailContainer) {
    const isOnSale = product.onSale;
    const displayPrice = isOnSale ? product.salePrice : product.price;
    const discount = isOnSale
      ? Math.round((1 - product.salePrice / product.price) * 100)
      : 0;
    const isInWish = isInWishlist(product.id);

    productDetailContainer.innerHTML = `
      <div class="product-images">
        <div class="product-image-main">
          <img src="${product.images[0]}" alt="${
      product.name
    }" id="main-product-image">
          
          ${product.isNew ? '<span class="badge badge-new">New</span>' : ""}
          ${
            isOnSale
              ? `<span class="badge badge-sale">Sale ${discount}% Off</span>`
              : ""
          }
        </div>
        
        <div class="product-image-thumbnails">
          ${product.images
            .map(
              (image, index) => `
            <div class="thumbnail ${
              index === 0 ? "active" : ""
            }" data-image="${image}">
              <img src="${image}" class="thumbnail-img" alt="${
                product.name
              } - Image ${index + 1}">
            </div>
          `
            )
            .join("")}
        </div>
      </div>
      
      <div class="product-info">
        <h1 class="product-title">${product.name}</h1>
        
        <div class="product-meta">
          <div class="product-rating">
            <div class="rating-stars">
              ${createStarRating(product.rating)}
            </div>
            <span class="rating-count">${product.reviewCount} Reviews</span>
          </div>
          
          <div class="product-brand">
            <span>Brand:</span> <a href="products.html?brand=${
              product.brand
            }">${product.brand}</a>
          </div>
          
          <div class="product-sku">
            <span>SKU:</span> TOY-${product.id.toString().padStart(4, "0")}
          </div>
        </div>
        
        <div class="product-price">
          <span class="current-price">${formatPrice(displayPrice)}</span>
          ${
            isOnSale
              ? `
            <span class="old-price">${formatPrice(product.price)}</span>
            <span class="price-save">You save: ${formatPrice(
              product.price - product.salePrice
            )}</span>
          `
              : ""
          }
        </div>
        
        <div class="product-short-description">
          ${product.description}
        </div>
        
        ${
          product.colors
            ? `
          <div class="product-options">
            <div class="option-label">Color: <span id="selected-color">${
              product.colors[0]
            }</span></div>
            <div class="color-options">
              ${product.colors
                .map(
                  (color, index) => `
                <button class="color-option ${
                  index === 0 ? "active" : ""
                }" data-color="${color}" 
                  style="background-color: ${getColorCode(color)};">
                  ${index === 0 ? '<i class="fas fa-check"></i>' : ""}
                </button>
              `
                )
                .join("")}
            </div>
          </div>
        `
            : ""
        }
        
        ${
          product.sizes
            ? `
          <div class="product-options">
            <div class="option-label">Size: <span id="selected-size">${
              product.sizes[0]
            }</span></div>
            <div class="size-options">
              ${product.sizes
                .map(
                  (size, index) => `
                <button class="size-option ${
                  index === 0 ? "active" : ""
                }" data-size="${size}">
                  ${size}
                </button>
              `
                )
                .join("")}
            </div>
          </div>
        `
            : ""
        }
        
        <div class="product-quantity">
          <div class="option-label">Quantity:</div>
          <div class="quantity-selector">
            <button id="decrease-quantity" class="quantity-btn" ${
              currentQuantity <= 1 ? "disabled" : ""
            }>
              <i class="fas fa-minus"></i>
            </button>
            <input type="number" id="quantity-input" value="${currentQuantity}" min="1" max="${
      product.stockCount
    }">
            <button id="increase-quantity" class="quantity-btn" ${
              currentQuantity >= product.stockCount ? "disabled" : ""
            }>
              <i class="fas fa-plus"></i>
            </button>
          </div>
          <div class="stock-status">
            ${
              product.stockCount > 10
                ? '<span class="in-stock">In Stock</span>'
                : product.stockCount > 0
                ? `<span class="low-stock">Only ${product.stockCount} left!</span>`
                : '<span class="out-of-stock">Out of Stock</span>'
            }
          </div>
        </div>
        
        <div class="product-actions">
          <button id="add-to-cart" class="btn btn-primary btn-add-to-cart" ${
            product.stockCount === 0 ? "disabled" : ""
          }>
            <i class="fas fa-cart-plus"></i> Add to Cart
          </button>
          
          <button id="add-to-wishlist" class="btn btn-outline btn-wishlist ${
            isInWish ? "active" : ""
          }">
            <i class="fas fa-heart"></i> ${
              isInWish ? "Remove from Wishlist" : "Add to Wishlist"
            }
          </button>
        </div>
        
        <div class="product-info-extra">
          <div class="shipping-info">
            <i class="fas fa-truck"></i>
            <span>Free shipping for orders over $50</span>
          </div>
          
          <div class="return-info">
            <i class="fas fa-undo"></i>
            <span>30-day easy returns</span>
          </div>
          
          <div class="age-info">
            <i class="fas fa-child"></i>
            <span>Recommended age: ${product.deviceType}</span>
          </div>
        </div>
        
        <div class="social-share">
          <span class="share-label">Share:</span>
          <div class="share-buttons">
            <a href="#" class="share-button" title="Share on Facebook">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="share-button" title="Share on Twitter">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="share-button" title="Share on Pinterest">
              <i class="fab fa-pinterest-p"></i>
            </a>
            <a href="#" class="share-button" title="Share via Email">
              <i class="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    `;

    // Initialize product options
    if (product.colors) {
      selectedOptions.color = product.colors[0];
    }

    if (product.sizes) {
      selectedOptions.size = product.sizes[0];
    }

    // Add event listeners
    setupProductEventListeners(product);
  }
}

/**
 * Set up product event listeners
 */
function setupProductEventListeners(product) {
  // Image thumbnails
  const thumbnails = document.querySelectorAll(".thumbnail");
  const mainImage = document.getElementById("main-product-image");

  if (thumbnails && mainImage) {
    thumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener("click", function () {
        // Update active thumbnail
        thumbnails.forEach((t) => t.classList.remove("active"));
        this.classList.add("active");

        // Update main image
        const imageUrl = this.getAttribute("data-image");
        mainImage.src = imageUrl;

        // Add smooth transition
        mainImage.style.opacity = "0";
        setTimeout(() => {
          mainImage.style.opacity = "1";
        }, 50);
      });
    });
  }

  // Color options
  const colorOptions = document.querySelectorAll(".color-option");
  const selectedColorText = document.getElementById("selected-color");

  if (colorOptions && selectedColorText) {
    colorOptions.forEach((option) => {
      option.addEventListener("click", function () {
        // Update active color
        colorOptions.forEach((o) => {
          o.classList.remove("active");
          o.innerHTML = "";
        });
        this.classList.add("active");
        this.innerHTML = '<i class="fas fa-check"></i>';

        // Update selected color text
        const color = this.getAttribute("data-color");
        selectedColorText.textContent = color;

        // Update selected options
        selectedOptions.color = color;
      });
    });
  }

  // Size options
  const sizeOptions = document.querySelectorAll(".size-option");
  const selectedSizeText = document.getElementById("selected-size");

  if (sizeOptions && selectedSizeText) {
    sizeOptions.forEach((option) => {
      option.addEventListener("click", function () {
        // Update active size
        sizeOptions.forEach((o) => o.classList.remove("active"));
        this.classList.add("active");

        // Update selected size text
        const size = this.getAttribute("data-size");
        selectedSizeText.textContent = size;

        // Update selected options
        selectedOptions.size = size;
      });
    });
  }

  // Quantity selector
  const decreaseBtn = document.getElementById("decrease-quantity");
  const increaseBtn = document.getElementById("increase-quantity");
  const quantityInput = document.getElementById("quantity-input");

  if (decreaseBtn && increaseBtn && quantityInput) {
    decreaseBtn.addEventListener("click", function () {
      if (currentQuantity > 1) {
        currentQuantity--;
        quantityInput.value = currentQuantity;

        // Enable/disable buttons
        decreaseBtn.disabled = currentQuantity <= 1;
        increaseBtn.disabled = false;
      }
    });

    increaseBtn.addEventListener("click", function () {
      if (currentQuantity < product.stockCount) {
        currentQuantity++;
        quantityInput.value = currentQuantity;

        // Enable/disable buttons
        decreaseBtn.disabled = false;
        increaseBtn.disabled = currentQuantity >= product.stockCount;
      }
    });

    quantityInput.addEventListener("change", function () {
      let value = parseInt(this.value);

      // Validate quantity
      if (isNaN(value) || value < 1) {
        value = 1;
      } else if (value > product.stockCount) {
        value = product.stockCount;
      }

      currentQuantity = value;
      this.value = currentQuantity;

      // Enable/disable buttons
      decreaseBtn.disabled = currentQuantity <= 1;
      increaseBtn.disabled = currentQuantity >= product.stockCount;
    });
  }

  // Add to cart button
  const addToCartBtn = document.getElementById("add-to-cart");

  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", function () {
      addToCart(product, currentQuantity, selectedOptions);
    });
  }

  // Add to wishlist button
  const addToWishlistBtn = document.getElementById("add-to-wishlist");

  if (addToWishlistBtn) {
    addToWishlistBtn.addEventListener("click", function () {
      const result = toggleWishlist(product);

      // Update button text and style
      if (result) {
        this.classList.add("active");
        this.innerHTML = '<i class="fas fa-heart"></i> Remove from Wishlist';
      } else {
        this.classList.remove("active");
        this.innerHTML = '<i class="fas fa-heart"></i> Add to Wishlist';
      }
    });
  }
}

/**
 * Display product tabs (description, features, specs, reviews)
 */
function displayProductTabs(product) {
  // Display description tab
  if (descriptionPanel) {
    descriptionPanel.innerHTML = `
      <div class="tab-content">
        <p>${product.description}</p>
      </div>
    `;
  }

  // Display features tab
  if (featuresPanel) {
    featuresPanel.innerHTML = `
      <div class="tab-content">
        <ul class="features-list">
          ${product.features
            .map(
              (feature) => `
            <li><i class="fas fa-check-circle"></i> ${feature}</li>
          `
            )
            .join("")}
        </ul>
      </div>
    `;
  }

  // Display specifications tab
  if (specificationsPanel) {
    specificationsPanel.innerHTML = `
      <div class="tab-content">
        <table class="specs-table">
          <tr>
            <th>Brand</th>
            <td>${product.brand}</td>
          </tr>
          <tr>
            <th>Age Group</th>
            <td>${product.deviceType}</td>
          </tr>
          <tr>
            <th>Category</th>
            <td>${
              product.category.charAt(0).toUpperCase() +
              product.category.slice(1)
            }</td>
          </tr>
          <tr>
            <th>Item Weight</th>
            <td>1.5 lbs</td>
          </tr>
          <tr>
            <th>Dimensions</th>
            <td>10 x 5 x 7 inches</td>
          </tr>
          <tr>
            <th>Materials</th>
            <td>High-quality plastic, non-toxic</td>
          </tr>
          <tr>
            <th>Battery Required</th>
            <td>${product.id % 2 === 0 ? "No" : "Yes (included)"}</td>
          </tr>
          <tr>
            <th>Package Contents</th>
            <td>${product.name}, user manual, warranty card</td>
          </tr>
          <tr>
            <th>Warranty</th>
            <td>1 year manufacturer warranty</td>
          </tr>
        </table>
      </div>
    `;
  }
}

/**
 * Setup tab navigation
 */
function setupTabNavigation() {
  if (tabButtons) {
    tabButtons.forEach((button) => {
      button.addEventListener("click", function () {
        // Remove active class from all tabs
        tabButtons.forEach((btn) => btn.classList.remove("active"));

        // Add active class to clicked tab
        this.classList.add("active");

        // Get tab name
        const tabName = this.getAttribute("data-tab");

        // Hide all tab panels
        const tabPanels = document.querySelectorAll(".tab-panel");
        tabPanels.forEach((panel) => panel.classList.remove("active"));

        // Show selected tab panel
        const activePanel = document.getElementById(`${tabName}-panel`);
        if (activePanel) {
          activePanel.classList.add("active");
        }
      });
    });
  }
}

/**
 * Display product reviews
 */
function displayProductReviews(product) {
  if (reviewsPanel && reviewCount) {
    reviewCount.textContent = `(${product.reviewCount})`;

    // Get reviews for this product
    const productReviews = REVIEWS_DATA[product.id] || [];

    // Show reviews container if we have reviews
    if (reviewsContainer) {
      reviewsContainer.style.display = "block";
    }

    // Update average rating
    if (averageRating && averageRatingStars && totalReviews) {
      averageRating.textContent = product.rating.toFixed(1);
      averageRatingStars.innerHTML = createStarRating(product.rating);
      totalReviews.textContent = `Based on ${product.reviewCount} reviews`;
    }

    // Update review rating bars
    const ratingBars = document.querySelectorAll(".rating-bar .progress");
    if (ratingBars && ratingBars.length === 5) {
      // Calculate ratings distribution (simplified)
      const distribution = [10, 15, 25, 35, product.reviewCount - 85]; // 1, 2, 3, 4, 5 stars

      // Update progress bars and counts
      ratingBars.forEach((bar, index) => {
        const percent = (distribution[4 - index] / product.reviewCount) * 100;
        bar.style.width = `${percent}%`;

        // Update count
        const countElement = bar.parentElement.nextElementSibling;
        if (countElement) {
          countElement.textContent = distribution[4 - index];
        }
      });
    }

    // Display reviews
    if (reviewsList) {
      if (productReviews.length === 0) {
        reviewsList.innerHTML = `
          <div class="no-reviews">
            <p></p>
          </div>
        `;
      } else {
        reviewsList.innerHTML = productReviews
          .map(
            (review) => `
          <div class="review">
            <div class="review-header">
              <div class="review-meta">
                <h4 class="review-title">${review.title}</h4>
                <div class="review-rating">
                  <div class="rating-stars">
                    ${createStarRating(review.rating)}
                  </div>
                </div>
              </div>
              <div class="review-author">
                <span class="review-name">${review.name}</span>
                <span class="review-date">${formatDate(review.date)}</span>
                ${
                  review.verified
                    ? '<span class="verified-badge">Verified Purchase</span>'
                    : ""
                }
              </div>
            </div>
            <div class="review-content">
              <p>${review.content}</p>
            </div>
          </div>
        `
          )
          .join("");
      }
    }
  }
}

/**
 * Setup review form
 */
function setupReviewForm() {
  if (writeReviewBtn && reviewFormContainer && cancelReviewBtn && reviewForm) {
    // Show review form
    writeReviewBtn.addEventListener("click", function () {
      reviewFormContainer.style.display = "block";
      writeReviewBtn.style.display = "none";

      // Scroll to review form
      reviewFormContainer.scrollIntoView({ behavior: "smooth" });
    });

    // Hide review form
    cancelReviewBtn.addEventListener("click", function () {
      reviewFormContainer.style.display = "none";
      writeReviewBtn.style.display = "block";
    });

    // Star rating selection
    if (ratingSelect && ratingValue) {
      ratingSelect.forEach((star) => {
        // Hover effect
        star.addEventListener("mouseover", function () {
          const rating = parseInt(this.getAttribute("data-rating"));

          ratingSelect.forEach((s, index) => {
            if (index < rating) {
              s.classList.remove("far");
              s.classList.add("fas");
            } else {
              s.classList.remove("fas");
              s.classList.add("far");
            }
          });
        });

        // Click to select
        star.addEventListener("click", function () {
          const rating = parseInt(this.getAttribute("data-rating"));
          ratingValue.value = rating;

          ratingSelect.forEach((s, index) => {
            if (index < rating) {
              s.classList.remove("far");
              s.classList.add("fas");
            } else {
              s.classList.remove("fas");
              s.classList.add("far");
            }
          });
        });
      });

      // Mouse leave
      const ratingSelectContainer = document.querySelector(".rating-select");
      if (ratingSelectContainer) {
        ratingSelectContainer.addEventListener("mouseleave", function () {
          const rating = parseInt(ratingValue.value);

          ratingSelect.forEach((s, index) => {
            if (index < rating) {
              s.classList.remove("far");
              s.classList.add("fas");
            } else {
              s.classList.remove("fas");
              s.classList.add("far");
            }
          });
        });
      }
    }

    // Submit review form
    reviewForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const rating = parseInt(ratingValue.value);
      const title = document.getElementById("review-title").value;
      const name = document.getElementById("review-name").value;
      const email = document.getElementById("review-email").value;
      const content = document.getElementById("review-content").value;

      // Validate form
      if (rating === 0) {
        showToast("Please select a rating", "error");
        return;
      }

      if (!title || !name || !email || !content) {
        showToast("Please fill in all required fields", "error");
        return;
      }

      // In a real app, we would submit this to a server
      // Here we'll just show a success message
      showToast(
        "Thank you for your review! It will be published after moderation.",
        "success"
      );

      // Reset form
      reviewForm.reset();
      ratingValue.value = 0;
      ratingSelect.forEach((star) => {
        star.classList.remove("fas");
        star.classList.add("far");
      });

      // Hide form
      reviewFormContainer.style.display = "none";
      writeReviewBtn.style.display = "block";
    });
  }
}

/**
 * Load related products
 */
function loadRelatedProducts(product) {
  if (!relatedProductsContainer) return;

  // Get products in the same category
  const relatedProducts = PRODUCTS_DATA.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  if (relatedProducts.length === 0) {
    const sectionContainer = relatedProductsContainer.closest(
      ".related-products-section"
    );
    if (sectionContainer) {
      sectionContainer.style.display = "none";
    }
    return;
  }

  // Generate HTML for related products
  const html = relatedProducts
    .map((product) => {
      const isOnSale = product.onSale;
      const displayPrice = isOnSale ? product.salePrice : product.price;
      const isInWish = isInWishlist(product.id);

      return `
      <div class="product-card" data-product-id="${product.id}">
        <div class="product-card-image">
          <a href="../pages/product-detail.html?id=${product.id}">
            <img src="${product.images[0]}" alt="${product.name}">
          </a>
          
          <div class="product-card-badges">
            ${product.isNew ? '<span class="badge badge-new">New</span>' : ""}
            ${isOnSale ? '<span class="badge badge-sale">Sale</span>' : ""}
          </div>
          
          <div class="product-card-actions">
            <button class="product-action wishlist-toggle ${
              isInWish ? "active" : ""
            }" data-product-id="${product.id}" title="Add to Wishlist">
              <i class="fas fa-heart"></i>
            </button>
            <button class="product-action quick-view" data-product-id="${
              product.id
            }" title="Quick View">
              <i class="fas fa-eye"></i>
            </button>
          </div>
        </div>
        
        <div class="product-card-content">
          <div class="product-card-category">${product.category}</div>
          
          <h3 class="product-card-title">
            <a href="../pages/product-detail.html?id=${product.id}">${
        product.name
      }</a>
          </h3>
          
          <div class="product-card-rating">
            <div class="rating-stars">
              ${createStarRating(product.rating)}
            </div>
            <div class="rating-count">(${product.reviewCount})</div>
          </div>
          
          <div class="product-card-price">
            <span class="current-price">${formatPrice(displayPrice)}</span>
            ${
              isOnSale
                ? `<span class="old-price">${formatPrice(product.price)}</span>`
                : ""
            }
          </div>
          
          <div class="product-card-footer">
            <button class="add-to-cart" data-product-id="${product.id}">
              <i class="fas fa-shopping-cart"></i> Add to Cart
            </button>
          </div>
        </div>
      </div>
    `;
    })
    .join("");

  relatedProductsContainer.innerHTML = html;

  // Add event listeners to product cards
  const addToCartButtons =
    relatedProductsContainer.querySelectorAll(".add-to-cart");
  if (addToCartButtons) {
    addToCartButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const productId = parseInt(this.getAttribute("data-product-id"));
        const product = PRODUCTS_DATA.find((p) => p.id === productId);

        if (product) {
          addToCart(product);
        }
      });
    });
  }

  const wishlistButtons =
    relatedProductsContainer.querySelectorAll(".wishlist-toggle");
  if (wishlistButtons) {
    wishlistButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const productId = parseInt(this.getAttribute("data-product-id"));
        const product = PRODUCTS_DATA.find((p) => p.id === productId);

        if (product) {
          const result = toggleWishlist(product);

          if (result) {
            this.classList.add("active");
          } else {
            this.classList.remove("active");
          }
        }
      });
    });
  }

  const quickViewButtons =
    relatedProductsContainer.querySelectorAll(".quick-view");
  if (quickViewButtons) {
    quickViewButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const productId = parseInt(this.getAttribute("data-product-id"));
        window.location.href = `product-detail.html?id=${productId}`;
      });
    });
  }
}

/**
 * Load recently viewed products
 */
function loadRecentlyViewedProducts() {
  if (!recentlyViewedContainer) return;

  const recentlyViewedProducts = getRecentlyViewed().filter(
    (p) => p.id !== productId
  );

  if (recentlyViewedProducts.length === 0) {
    const sectionContainer = recentlyViewedContainer.closest(
      ".recently-viewed-section"
    );
    if (sectionContainer) {
      sectionContainer.style.display = "none";
    }
    return;
  }

  // Generate HTML for recently viewed products
  const html = recentlyViewedProducts
    .slice(0, 4)
    .map((product) => {
      const isOnSale = product.onSale;
      const displayPrice = isOnSale ? product.salePrice : product.price;
      const isInWish = isInWishlist(product.id);

      return `
      <div class="product-card" data-product-id="${product.id}">
        <div class="product-card-image">
          <a href="../pages/product-detail.html?id=${product.id}">
            <img src="${product.image}" alt="${product.name}">
          </a>
          
          <div class="product-card-badges">
            ${product.isNew ? '<span class="badge badge-new">New</span>' : ""}
            ${isOnSale ? '<span class="badge badge-sale">Sale</span>' : ""}
          </div>
          
          <div class="product-card-actions">
            <button class="product-action wishlist-toggle ${
              isInWish ? "active" : ""
            }" data-product-id="${product.id}" title="Add to Wishlist">
              <i class="fas fa-heart"></i>
            </button>
            <button class="product-action quick-view" data-product-id="${
              product.id
            }" title="Quick View">
              <i class="fas fa-eye"></i>
            </button>
          </div>
        </div>
        
        <div class="product-card-content">
          <div class="product-card-category">${product.category}</div>
          
          <h3 class="product-card-title">
            <a href="../pages/product-detail.html?id=${product.id}">${
        product.name
      }</a>
          </h3>
          
          <div class="product-card-price">
            <span class="current-price">${formatPrice(displayPrice)}</span>
            ${
              isOnSale
                ? `<span class="old-price">${formatPrice(product.price)}</span>`
                : ""
            }
          </div>
        </div>
      </div>
    `;
    })
    .join("");

  recentlyViewedContainer.innerHTML = html;

  // Add event listeners to product cards
  const wishlistButtons =
    recentlyViewedContainer.querySelectorAll(".wishlist-toggle");
  if (wishlistButtons) {
    wishlistButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const productId = parseInt(this.getAttribute("data-product-id"));
        const product = PRODUCTS_DATA.find((p) => p.id === productId);

        if (product) {
          const result = toggleWishlist(product);

          if (result) {
            this.classList.add("active");
          } else {
            this.classList.remove("active");
          }
        }
      });
    });
  }

  const quickViewButtons =
    recentlyViewedContainer.querySelectorAll(".quick-view");
  if (quickViewButtons) {
    quickViewButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const productId = parseInt(this.getAttribute("data-product-id"));
        window.location.href = `product-detail.html?id=${productId}`;
      });
    });
  }
}

/**
 * Helper functions
 */

// Create star rating HTML
function createStarRating(rating) {
  let starsHtml = "";

  // Full stars
  const fullStars = Math.floor(rating);
  for (let i = 0; i < fullStars; i++) {
    starsHtml += '<i class="fas fa-star"></i>';
  }

  // Half star
  if (rating % 1 >= 0.5) {
    starsHtml += '<i class="fas fa-star-half-alt"></i>';
  }

  // Empty stars
  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    starsHtml += '<i class="far fa-star"></i>';
  }

  return starsHtml;
}

// Format date
function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("en-US", options);
}

// Get color code from color name
function getColorCode(colorName) {
  const colorMap = {
    Red: "#dc3545",
    Blue: "#0d6efd",
    Green: "#198754",
    Yellow: "#ffc107",
    Purple: "#6f42c1",
    Pink: "#d63384",
    Orange: "#fd7e14",
    Brown: "#794f45",
    Black: "#000000",
    White: "#ffffff",
    Gray: "#6c757d",
    Honey: "#e8a04b",
    Rainbow:
      "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)",
  };

  return colorMap[colorName] || "#cccccc";
}
