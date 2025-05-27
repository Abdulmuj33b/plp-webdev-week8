/**
 * Hertzuly E-commerce - Products Page JavaScript
 *
 * This script handles the product listing page functionality.
 */

// Mock data for products
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

// DOM elements
const productsContainer = document.getElementById("products-container");
const productsTitle = document.getElementById("products-title");
const productsCount = document.getElementById("products-count");
const sortBySelect = document.getElementById("sort-by");
const gridViewBtn = document.getElementById("grid-view");
const listViewBtn = document.getElementById("list-view");
const filterCheckboxes = document.querySelectorAll(
  '.filter-options input[type="checkbox"]'
);
const minPriceInput = document.getElementById("min-price");
const maxPriceInput = document.getElementById("max-price");
const priceRangeMin = document.getElementById("price-range-min");
const priceRangeMax = document.getElementById("price-range-max");
const clearFiltersBtn = document.getElementById("clear-filters");
const mobileFilterBtn = document.getElementById("mobile-filter-btn");
const filtersSidebar = document.getElementById("filters-sidebar");
const closeFiltersBtn = document.getElementById("close-filters");
const applyFiltersBtn = document.getElementById("apply-filters");
const paginationContainer = document.getElementById("pagination");
const categoryBreadcrumb = document.getElementById("category-breadcrumb");
const categoryName = document.getElementById("category-name");
const recentlyViewedContainer = document.getElementById(
  "recently-viewed-products"
);

// Pagination settings
const productsPerPage = 8;
let currentPage = 1;

// Current filters state
let filters = {
  category: [],
  age: [],
  brand: [],
  special: [],
  minPrice: 0,
  maxPrice: 2500,
  search: "",
  sort: "featured",
};

/**
 * Initialize the product listing page
 */
document.addEventListener("DOMContentLoaded", function () {
  // Initialize filters from URL parameters
  initFiltersFromUrl();

  // Set up event listeners
  setupEventListeners();

  // Load products based on filters
  loadProducts();

  // Load recently viewed products
  loadRecentlyViewed();
});

/**
 * Initialize filters from URL parameters
 */
function initFiltersFromUrl() {
  const params = getUrlParams();

  // Set category filter if specified in URL
  if (params.category) {
    filters.category = [params.category];

    // Update checkbox for the category
    const categoryCheckbox = document.querySelector(
      `.filter-option input[value="${params.category}"]`
    );
    if (categoryCheckbox) {
      categoryCheckbox.checked = true;
    }

    // Update breadcrumb and title
    updateCategoryDisplay(params.category);
  }

  // Set search filter if specified in URL
  if (params.search) {
    filters.search = params.search;
    productsTitle.textContent = `Search Results for "${params.search}"`;
  }

  // Set special filters (onSale, isNew)
  if (params.onSale === "true") {
    filters.special.push("onSale");
    const onSaleCheckbox = document.querySelector(
      '.filter-option input[value="onSale"]'
    );
    if (onSaleCheckbox) {
      onSaleCheckbox.checked = true;
    }

    if (!params.category && !params.search) {
      productsTitle.textContent = "Sale Items";
    }
  }

  if (params.isNew === "true") {
    filters.special.push("isNew");
    const isNewCheckbox = document.querySelector(
      '.filter-option input[value="isNew"]'
    );
    if (isNewCheckbox) {
      isNewCheckbox.checked = true;
    }

    if (!params.category && !params.search) {
      productsTitle.textContent = "New Arrivals";
    }
  }

  // Set price range if specified in URL
  if (params.minPrice) {
    filters.minPrice = parseInt(params.minPrice);
    if (minPriceInput) minPriceInput.value = filters.minPrice;
    if (priceRangeMin) priceRangeMin.value = filters.minPrice;
  }

  if (params.maxPrice) {
    filters.maxPrice = parseInt(params.maxPrice);
    if (maxPriceInput) maxPriceInput.value = filters.maxPrice;
    if (priceRangeMax) priceRangeMax.value = filters.maxPrice;
  }

  // Set sort if specified in URL
  if (params.sort) {
    filters.sort = params.sort;
    if (sortBySelect) sortBySelect.value = filters.sort;
  }

  // Set page if specified in URL
  if (params.page) {
    currentPage = parseInt(params.page);
  }
}

/**
 * Update category display in breadcrumb and title
 */
function updateCategoryDisplay(category) {
  // Format category name for display
  const formattedCategory =
    category.charAt(0).toUpperCase() + category.slice(1);

  // Update breadcrumb
  if (categoryBreadcrumb && categoryName) {
    categoryBreadcrumb.style.display = "list-item";
    categoryName.textContent = formattedCategory;
  }

  // Update page title
  if (productsTitle) {
    productsTitle.textContent = `${formattedCategory} Toys`;
  }
}

/**
 * Set up event listeners for filters, sorting, etc.
 */
function setupEventListeners() {
  // Sort by change
  if (sortBySelect) {
    sortBySelect.addEventListener("change", function () {
      filters.sort = this.value;
      currentPage = 1;
      loadProducts();
      updateUrlParams();
    });
  }

  // View mode (grid/list) toggle
  if (gridViewBtn && listViewBtn && productsContainer) {
    gridViewBtn.addEventListener("click", function () {
      gridViewBtn.classList.add("active");
      listViewBtn.classList.remove("active");
      productsContainer.classList.remove("view-mode-list");
      productsContainer.classList.add("view-mode-grid");
      localStorage.setItem("products_view_mode", "grid");
    });

    listViewBtn.addEventListener("click", function () {
      listViewBtn.classList.add("active");
      gridViewBtn.classList.remove("active");
      productsContainer.classList.remove("view-mode-grid");
      productsContainer.classList.add("view-mode-list");
      localStorage.setItem("products_view_mode", "list");
    });

    // Load saved view mode preference
    const savedViewMode = localStorage.getItem("products_view_mode");
    if (savedViewMode === "list") {
      listViewBtn.click();
    }
  }

  // Category, age, brand, and special filters
  if (filterCheckboxes) {
    filterCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", function () {
        const filterType = this.name;
        const filterValue = this.value;

        if (this.checked) {
          // Add filter value if it doesn't exist
          if (!filters[filterType].includes(filterValue)) {
            filters[filterType].push(filterValue);
          }
        } else {
          // Remove filter value
          filters[filterType] = filters[filterType].filter(
            (value) => value !== filterValue
          );
        }

        currentPage = 1;
        loadProducts();
        updateUrlParams();
      });
    });
  }

  // Price range inputs
  if (minPriceInput && maxPriceInput && priceRangeMin && priceRangeMax) {
    // Min price input change
    minPriceInput.addEventListener("change", function () {
      let value = parseInt(this.value);

      // Validate min price
      if (isNaN(value) || value < 0) {
        value = 0;
      } else if (value > filters.maxPrice) {
        value = filters.maxPrice;
      }

      filters.minPrice = value;
      this.value = value;
      priceRangeMin.value = value;
      updatePriceRangeSlider();
      loadProducts();
      updateUrlParams();
    });

    // Max price input change
    maxPriceInput.addEventListener("change", function () {
      let value = parseInt(this.value);

      // Validate max price
      if (isNaN(value) || value < filters.minPrice) {
        value = filters.minPrice;
      } else if (value > 2500) {
        value = 2500;
      }

      filters.maxPrice = value;
      this.value = value;
      priceRangeMax.value = value;
      updatePriceRangeSlider();
      loadProducts();
      updateUrlParams();
    });

    // Min price range slider change
    priceRangeMin.addEventListener("input", function () {
      let value = parseInt(this.value);

      if (value > filters.maxPrice) {
        value = filters.maxPrice;
        this.value = value;
      }

      filters.minPrice = value;
      minPriceInput.value = value;
      updatePriceRangeSlider();
    });

    priceRangeMin.addEventListener("change", function () {
      loadProducts();
      updateUrlParams();
    });

    // Max price range slider change
    priceRangeMax.addEventListener("input", function () {
      let value = parseInt(this.value);

      if (value < filters.minPrice) {
        value = filters.minPrice;
        this.value = value;
      }

      filters.maxPrice = value;
      maxPriceInput.value = value;
      updatePriceRangeSlider();
    });

    priceRangeMax.addEventListener("change", function () {
      loadProducts();
      updateUrlParams();
    });

    // Initialize price range slider
    updatePriceRangeSlider();
  }

  // Clear filters button
  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener("click", function () {
      clearFilters();
    });
  }

  // Mobile filter toggle
  if (mobileFilterBtn && filtersSidebar) {
    mobileFilterBtn.addEventListener("click", function () {
      filtersSidebar.classList.add("active");
      document.body.classList.add("filters-open");
    });
  }

  // Close filters button (mobile)
  if (closeFiltersBtn && filtersSidebar) {
    closeFiltersBtn.addEventListener("click", function () {
      filtersSidebar.classList.remove("active");
      document.body.classList.remove("filters-open");
    });
  }

  // Apply filters button (mobile)
  if (applyFiltersBtn && filtersSidebar) {
    applyFiltersBtn.addEventListener("click", function () {
      filtersSidebar.classList.remove("active");
      document.body.classList.remove("filters-open");
      loadProducts();
      updateUrlParams();
    });
  }
}

/**
 * Update the price range slider appearance
 */
function updatePriceRangeSlider() {
  const minValue = parseInt(priceRangeMin.value);
  const maxValue = parseInt(priceRangeMax.value);
  const track = document.querySelector(".slider-track");

  if (track) {
    const percent1 = (minValue / 2500) * 100;
    const percent2 = (maxValue / 2500) * 100;
    track.style.background = `linear-gradient(to right, var(--color-gray-300) ${percent1}%, var(--color-primary) ${percent1}%, var(--color-primary) ${percent2}%, var(--color-gray-300) ${percent2}%)`;
  }
}

/**
 * Clear all filters
 */
function clearFilters() {
  // Reset filters object
  filters = {
    category: [],
    device: [],
    brand: [],
    special: [],
    minPrice: 0,
    maxPrice: 2500,
    search: "",
    sort: "featured",
  };

  // Reset filter checkboxes
  if (filterCheckboxes) {
    filterCheckboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  }

  // Reset price inputs
  if (minPriceInput && maxPriceInput) {
    minPriceInput.value = filters.minPrice;
    maxPriceInput.value = filters.maxPrice;
  }

  // Reset price range sliders
  if (priceRangeMin && priceRangeMax) {
    priceRangeMin.value = filters.minPrice;
    priceRangeMax.value = filters.maxPrice;
    updatePriceRangeSlider();
  }

  // Reset sort select
  if (sortBySelect) {
    sortBySelect.value = filters.sort;
  }

  // Reset page
  currentPage = 1;

  // Reset title
  if (productsTitle) {
    productsTitle.textContent = "All Products";
  }

  // Hide category breadcrumb
  if (categoryBreadcrumb) {
    categoryBreadcrumb.style.display = "none";
  }

  // Load products with reset filters
  loadProducts();

  // Update URL parameters
  updateUrlParams();
}

/**
 * Update URL parameters based on current filters
 */
function updateUrlParams() {
  const params = new URLSearchParams();

  // Add category filter if present
  if (filters.category.length > 0) {
    params.set("category", filters.category[0]);
  }

  // Add search query if present
  if (filters.search) {
    params.set("search", filters.search);
  }

  // Add special filters
  if (filters.special.includes("onSale")) {
    params.set("onSale", "true");
  }

  if (filters.special.includes("isNew")) {
    params.set("isNew", "true");
  }

  // Add price range if not default
  if (filters.minPrice > 0) {
    params.set("minPrice", filters.minPrice.toString());
  }

  if (filters.maxPrice < 2500) {
    params.set("maxPrice", filters.maxPrice.toString());
  }

  // Add sort if not default
  if (filters.sort !== "featured") {
    params.set("sort", filters.sort);
  }

  // Add page if not first page
  if (currentPage > 1) {
    params.set("page", currentPage.toString());
  }

  // Update URL
  const newUrl = `${window.location.pathname}${
    params.toString() ? "?" + params.toString() : ""
  }`;
  window.history.replaceState({}, "", newUrl);
}

/**
 * Load products based on current filters
 */
function loadProducts() {
  if (!productsContainer) return;

  // Show loading spinner
  productsContainer.innerHTML = `
    <div class="loading-spinner">
      <div class="spinner"></div>
    </div>
  `;

  // Filter products based on current filters
  let filteredProducts = PRODUCTS_DATA.filter((product) => {
    // Category filter
    if (
      filters.category.length > 0 &&
      !filters.category.includes(product.category)
    ) {
      return false;
    }

    // Device Type filter
    if (filters.age.length > 0 && !filters.age.includes(product.deviceType)) {
      return false;
    }

    // Brand filter
    if (filters.brand.length > 0 && !filters.brand.includes(product.brand)) {
      return false;
    }

    // Special filters (sale, new)
    if (filters.special.includes("onSale") && !product.onSale) {
      return false;
    }

    if (filters.special.includes("isNew") && !product.isNew) {
      return false;
    }

    // Price range filter
    const productPrice = product.onSale ? product.salePrice : product.price;
    if (productPrice < filters.minPrice || productPrice > filters.maxPrice) {
      return false;
    }

    // Search filter
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      return (
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.brand.toLowerCase().includes(searchTerm)
      );
    }

    return true;
  });

  // Sort products
  filteredProducts = sortProducts(filteredProducts, filters.sort);

  // Update products count
  if (productsCount) {
    productsCount.textContent = `Showing ${filteredProducts.length} products`;
  }

  // Paginate products
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  if (currentPage > totalPages && totalPages > 0) {
    currentPage = totalPages;
  }

  const start = (currentPage - 1) * productsPerPage;
  const end = start + productsPerPage;
  const paginatedProducts = filteredProducts.slice(start, end);

  // Create HTML for products
  let productsHtml = "";

  if (paginatedProducts.length === 0) {
    productsHtml = `
      <div class="no-products">
        <div class="no-products-icon">
          <i class="fas fa-search"></i>
        </div>
        <h3>No products found</h3>
        <p>Try adjusting your filters or search criteria.</p>
        <button id="reset-filters" class="btn btn-primary">Clear Filters</button>
      </div>
    `;
  } else {
    // Generate HTML for each product
    paginatedProducts.forEach((product) => {
      productsHtml += createProductCardHtml(product);
    });
  }

  // Update products container
  productsContainer.innerHTML = productsHtml;

  // Add event listeners to product cards
  addProductCardEventListeners();

  // Update pagination
  if (paginationContainer) {
    updatePagination(filteredProducts.length, totalPages);
  }

  // Add event listener to reset filters button if no products found
  const resetFiltersBtn = document.getElementById("reset-filters");
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener("click", clearFilters);
  }
}

/**
 * Create HTML for a product card
 */
function createProductCardHtml(product) {
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
      
      <div class="product-card-list-content">
        <p class="product-card-description">${product.description}</p>
        <div class="product-card-features">
          <ul>
            ${
              product.features
                ? product.features
                    .slice(0, 3)
                    .map(
                      (feature) =>
                        `<li><i class="fas fa-check"></i> ${feature}</li>`
                    )
                    .join("")
                : ""
            }
          </ul>
        </div>
      </div>
    </div>
  `;
}

/**
 * Create HTML for star rating
 */
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

/**
 * Add event listeners to product cards
 */
function addProductCardEventListeners() {
  // Add to cart buttons
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
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

  //  Wishlist toggle buttons
  const wishlistButtons = document.querySelectorAll(".wishlist-toggle");
  if (wishlistButtons) {
    wishlistButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const productId = parseInt(this.getAttribute("data-product-id"));
        const product = PRODUCTS_DATA.find((p) => p.id === productId);

        if (product) {
          const result = toggleWishlist(product);

          // Update button appearance
          if (result) {
            this.classList.add("active");
          } else {
            this.classList.remove("active");
          }
        }
      });
    });
  }

  // Quick view buttons
  const quickViewButtons = document.querySelectorAll(".quick-view");
  if (quickViewButtons) {
    quickViewButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const productId = parseInt(this.getAttribute("data-product-id"));
        window.location.href = `../pages/product-detail.html?id=${productId}`;
      });
    });
  }
}

/**
 * Sort products based on sort option
 */
function sortProducts(products, sortOption) {
  const sortedProducts = [...products];

  switch (sortOption) {
    case "newest":
      return sortedProducts.sort((a, b) => b.id - a.id);

    case "price-low":
      return sortedProducts.sort((a, b) => {
        const priceA = a.onSale ? a.salePrice : a.price;
        const priceB = b.onSale ? b.salePrice : b.price;
        return priceA - priceB;
      });

    case "price-high":
      return sortedProducts.sort((a, b) => {
        const priceA = a.onSale ? a.salePrice : a.price;
        const priceB = b.onSale ? b.salePrice : b.price;
        return priceB - priceA;
      });

    case "best-selling":
      return sortedProducts.sort((a, b) => b.reviewCount - a.reviewCount);

    case "featured":
    default:
      // For featured, we'll use a combination of review count and rating
      return sortedProducts.sort((a, b) => {
        const scoreA = a.rating * 0.7 + (a.reviewCount / 300) * 0.3;
        const scoreB = b.rating * 0.7 + (b.reviewCount / 300) * 0.3;
        return scoreB - scoreA;
      });
  }
}

/**
 * Update pagination
 */
function updatePagination(totalProducts, totalPages) {
  if (totalPages <= 1) {
    paginationContainer.innerHTML = "";
    return;
  }

  let paginationHtml = "";

  // Previous button
  paginationHtml += `
    <button class="pagination-item pagination-prev ${
      currentPage === 1 ? "disabled" : ""
    }" ${currentPage === 1 ? "disabled" : ""}>
      <i class="fas fa-chevron-left"></i>
    </button>
  `;

  // Page numbers
  const maxPages = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxPages / 2));
  let endPage = Math.min(totalPages, startPage + maxPages - 1);

  if (endPage - startPage + 1 < maxPages) {
    startPage = Math.max(1, endPage - maxPages + 1);
  }

  if (startPage > 1) {
    paginationHtml += `
      <button class="pagination-item" data-page="1">1</button>
    `;

    if (startPage > 2) {
      paginationHtml += `
        <span class="pagination-item pagination-ellipsis">...</span>
      `;
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    paginationHtml += `
      <button class="pagination-item ${
        i === currentPage ? "active" : ""
      }" data-page="${i}">${i}</button>
    `;
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      paginationHtml += `
        <span class="pagination-item pagination-ellipsis">...</span>
      `;
    }

    paginationHtml += `
      <button class="pagination-item" data-page="${totalPages}">${totalPages}</button>
    `;
  }

  // Next button
  paginationHtml += `
    <button class="pagination-item pagination-next ${
      currentPage === totalPages ? "disabled" : ""
    }" ${currentPage === totalPages ? "disabled" : ""}>
      <i class="fas fa-chevron-right"></i>
    </button>
  `;

  paginationContainer.innerHTML = paginationHtml;

  // Add event listeners to pagination items
  const pageButtons = document.querySelectorAll(".pagination-item[data-page]");
  if (pageButtons) {
    pageButtons.forEach((button) => {
      button.addEventListener("click", function () {
        currentPage = parseInt(this.getAttribute("data-page"));
        loadProducts();
        updateUrlParams();

        // Scroll to top of products
        const productsSection = document.querySelector(".products-section");
        if (productsSection) {
          productsSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }

  // Add event listeners to prev/next buttons
  const prevButton = document.querySelector(".pagination-prev");
  if (prevButton && !prevButton.disabled) {
    prevButton.addEventListener("click", function () {
      currentPage = Math.max(1, currentPage - 1);
      loadProducts();
      updateUrlParams();

      // Scroll to top of products
      const productsSection = document.querySelector(".products-section");
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  const nextButton = document.querySelector(".pagination-next");
  if (nextButton && !nextButton.disabled) {
    nextButton.addEventListener("click", function () {
      currentPage = Math.min(totalPages, currentPage + 1);
      loadProducts();
      updateUrlParams();

      // Scroll to top of products
      const productsSection = document.querySelector(".products-section");
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
}

/**
 * Load recently viewed products
 */
function loadRecentlyViewed() {
  if (!recentlyViewedContainer) return;

  const recentlyViewedProducts = getRecentlyViewed();

  if (recentlyViewedProducts.length === 0) {
    recentlyViewedContainer.closest(".recently-viewed-section").style.display =
      "none";
    return;
  }

  let html = "";

  recentlyViewedProducts.forEach((product) => {
    const isInWish = isInWishlist(product.id);

    html += `
      <div class="product-card" data-product-id="${product.id}">
        <div class="product-card-image">
          <a href="../pages/product-detail.html?id=${product.id}">
            <img src="${product.image}" alt="${product.name}">
          </a>
          
          <div class="product-card-badges">
            ${product.isNew ? '<span class="badge badge-new">New</span>' : ""}
            ${
              product.onSale ? '<span class="badge badge-sale">Sale</span>' : ""
            }
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
            <span class="current-price">${formatPrice(
              product.onSale ? product.salePrice : product.price
            )}</span>
            ${
              product.onSale
                ? `<span class="old-price">${formatPrice(product.price)}</span>`
                : ""
            }
          </div>
        </div>
      </div>
    `;
  });

  recentlyViewedContainer.innerHTML = html;

  // Add event listeners
  addProductCardEventListeners();
}

////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  loadSuggestedProducts();
});

function loadSuggestedProducts() {
  const container = document.getElementById("suggested-products");

  // Ensure PRODUCTS_DATA is available
  if (!container || typeof PRODUCTS_DATA === "undefined") {
    console.error("PRODUCTS_DATA is not loaded or container is missing.");
    return;
  }

  // Remove spinner if any
  container.innerHTML = "";

  // Get 4 random products from PRODUCTS_DATA
  const shuffled = [...PRODUCTS_DATA].sort(() => 0.5 - Math.random());
  const suggested = shuffled.slice(0, 4);

  // Render suggested products
  suggested.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
      <a href="../pages/product-detail.html?id=${product.id}">
        <div class="product-card-image">
          <img src="${product.images[0]}" alt="${product.name}">
        </div>
        <h3 class="product-card-title">${product.name}</h3>
        <div class="product-card-price">
          <span class="current-price">${formatPrice(
            product.onSale ? product.salePrice : product.price
          )}</span>
          ${
            product.onSale
              ? `<span class="old-price">${formatPrice(product.price)}</span>`
              : ""
          }
        </div>
      </a>
    `;
    container.appendChild(productCard);
  });
}

// Example price formatter (customize to your locale)
function formatPrice(price) {
  return `$${price.toFixed(2)}`;
}

//////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  loadRecommendedProducts();
});

function loadRecommendedProducts() {
  const container = document.getElementById("recommended-products");

  // Ensure PRODUCTS_DATA is available
  if (!container || typeof PRODUCTS_DATA === "undefined") {
    console.error("PRODUCTS_DATA is not loaded or container is missing.");
    return;
  }

  // Remove spinner if present
  const spinner = container.querySelector(".loading-spinner");
  if (spinner) {
    spinner.remove();
  }

  // Get 4 random products from PRODUCTS_DATA
  const shuffled = [...PRODUCTS_DATA].sort(() => 0.5 - Math.random());
  const recommended = shuffled.slice(0, 4);

  // Render recommended products
  recommended.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
      <a href="../pages/product-detail.html?id=${product.id}">
        <div class="product-card-image">
          <img src="${product.images[0]}" alt="${product.name}">
        </div>
        <h3 class="product-card-title">${product.name}</h3>
        <div class="product-card-price">
          <span class="current-price">${formatPrice(
            product.onSale ? product.salePrice : product.price
          )}</span>
          ${
            product.onSale
              ? `<span class="old-price">${formatPrice(product.price)}</span>`
              : ""
          }
        </div>
      </a>
    `;
    container.appendChild(productCard);
  });
}

// Example price formatter (customize as needed)
function formatPrice(price) {
  return `$${price.toFixed(2)}`;
}

//////////////////////////////////
