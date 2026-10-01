/* ==========================================================
   AquaAgri.id — Logika Katalog Affiliate
   Semua produk contoh (dummy) di bawah ini bisa langsung
   kamu ganti. Cukup edit array `products`.
   ========================================================== */

// ---------- 1. DATA PRODUK (edit di sini) ----------

const products = [
  {
    id: 1,
    nama: "Abon Ikan Tuna Pedas 100gr",
    harga: "Rp34.000",
    gambar: "assets/products/abon-ikan.jpg",
    deskripsi: "Abon ikan tuna gurih pedas, cocok untuk lauk atau camilan.",
    kategori: "produk-olahan-ikan",
    linkAffiliate: "https://s.shopee.co.id/6L4k4e0L0t"
  },
  {
    id: 1,
    nama: "Kerupuk Ikan Tenggiri 500gr (Mentah)",
    harga: "Rp22.000",
    gambar: "assets/products/ikan-tenggiri-mentah.jpg",
    deskripsi: "Kerupuk ikan tenggiri asli, renyah dan gurih.",
    kategori: "produk-olahan-ikan",
    linkAffiliate: "https://s.shopee.co.id/7KxHgFK2xJ"
  },
  {
    id: 1,
    nama: "Sambal ikan ROA Khas Manado",
    harga: "Rp36.000",
    gambar: "assets/products/sambal-roa.jpg",
    deskripsi: "Cita rasa sambal ikan ROA Manado diolah oleh Sambal Nagih dengan rempah pilihan ",
    kategori: "produk-olahan-ikan",
    linkAffiliate: "https://s.shopee.co.id/6L4kV6TNMv"
  },
  {
    id: 1,
    nama: "Ikan Wader Goreng Crispy (100gr)",
    harga: "Rp16.000",
    gambar: "assets/products/Ikan-Wader-Goreng-Crispy.jpg",
    deskripsi: "Ikan wader spesial pedes gurih enak renyah  ",
    kategori: "produk-olahan-ikan",
    linkAffiliate: "https://s.shopee.co.id/6q15oXrPRj"
  },
  {
    id: 1,
    nama: "Kerupuk Kulit Ikan Patin 230gr ",
    harga: "Rp46.000",
    gambar: "assets/products/Kerupuk-Kulit-Ikan-Patin .jpg",
    deskripsi: "Kerupuk Kulit Ikan Patin Original - Renyah dan Gurih! ",
    kategori: "produk-olahan-ikan",
    linkAffiliate: "https://s.shopee.co.id/LnZwHBJCs"
  },
  {
    id: 1,
    nama: "Kerupuk Tulang Lele ",
    harga: "Rp13.000",
    gambar: "assets/products/Kerupuk-Tulang-Lele.jpg",
    deskripsi: "Cocok untuk teman makan ataupun camilan",
    kategori: "produk-olahan-ikan",
    linkAffiliate: "https://s.shopee.co.id/5q8WV2nDKy"
  },
  {
    id: 1,
    nama: "Kerupuk Stik Ikan Tongkol 500gr",
    harga: "Rp12.000",
    gambar: "assets/products/Kerupuk-Stik-Ikan-Tongkol.jpg",
    deskripsi: "Nikmati kelezatan kerupuk ikan tongkol yang gurih, renyah, dan bikin ketagihan",
    kategori: "produk-olahan-ikan",
    linkAffiliate: "https://s.shopee.co.id/9pefGpWMQm"
  },
  {
    id: 1,
    nama: "Maksor Pedas Special Cap Ikan Tawes 1 Ball Grosir ",
    harga: "Rp25.000",
    gambar: "assets/products/Maksor-Pedas-Special-Cap-Ikan-Tawes.jpg",
    deskripsi: "Maksorr Pedas Special Cap Ikan Tawes memberikan rasa pedas yang khas dan istimewa.  ",
    kategori: "produk-olahan-ikan",
    linkAffiliate: "https://s.shopee.co.id/AUuM4aQ7Ib"
  },
  {
    id: 1,
    nama: "Kerupuk Kemplang Mini Super Ikan Tenggiri 200gr",
    harga: "Rp15.000",
    gambar: "assets/products/Kerupuk-Kemplan-Tenggiri.jpg",
    deskripsi: "Kemplang merupakan camilan khas Palembang dengan bahan baku utama ikan tenggiri yang dibumbui gurih asin",
    kategori: "produk-olahan-ikan",
    linkAffiliate: "https://s.shopee.co.id/4qG1QWT9X0"
  },
  {
    id: 1,
    nama: "Ikan Cakalang Suwir Rica Khas Manado",
    harga: "Rp48.000",
    gambar: "assets/products/Ikan-Cakalang-Suwir-Rica-Khas-Manado.jpg",
    deskripsi: "IKAN CAKALANG SUWIR RICA KHAS MANADO",
    kategori: "produk-olahan-ikan",
    linkAffiliate: "https://s.shopee.co.id/BU9tio9xn"
  },
  {
    id: 1,
    nama: "Baso Ikan Sinar Bahari Bandung 40 Butir",
    harga: "Rp24.000",
    gambar: "assets/products/Baso-Ikan-Sinar-Bahari-Bandung.jpg",
    deskripsi: "BASO IKAN SINAR BAHARI BANDUNG ",
    kategori: "produk-olahan-ikan",
    linkAffiliate: "https://s.shopee.co.id/9V1p1QZKrx"
  },
  {
    id: 1,
    nama: "Sambal ikan ROA Khas Manado",
    harga: "Rp36.000",
    gambar: "assets/products/Baso-Ikan-Sinar-Bahari-Bandung.jpg",
    deskripsi: "Cita rasa sambal ikan ROA Manado diolah oleh Sambal Nagih dengan rempah pilihan ",
    kategori: "produk-olahan-ikan",
    linkAffiliate: "https://s.shopee.co.id/6L4kV6TNMv"
  },
  {
    id: 2,
    nama: "Kepala Kakap Merah Segar 1kg",
    harga: "Rp44.000",
    gambar: "assets/products/kepala-kakap-merah.jpg",
    deskripsi: "Kepala kakap merah fresh dijual per kilo dipacking dengan plastik frozen.",
    kategori: "ikan-seafood-segar",
    linkAffiliate: "https://s.shopee.co.id/3LR8wC3aMw"
  },
  {
    id: 2,
    nama: "Udang Vaname Segar 500gr",
    harga: "Rp45.000",
    gambar: "assets/products/udang-vaname.jpg",
    deskripsi: "Udang vaname segar ukuran sedang, siap masak.",
    kategori: "ikan-seafood-segar",
    linkAffiliate: "https://s.shopee.co.id/9zy2stK622"
  },
  {
    id: 2,
    nama: "Ikan Cakalang Bersih Segar 1kg",
    harga: "Rp46.000",
    gambar: "assets/products/Ikan-Cakalang.jpg",
    deskripsi: " Ikan Cakalang segar dibekukan dengan teknologi flash freezing .",
    kategori: "ikan-seafood-segar",
    linkAffiliate: "https://s.shopee.co.id/2LYgLoyWyK"
  },
  {
    id: 2,
    nama: "Kepiting Bakau Jumbo",
    harga: "Rp126.000",
    gambar: "assets/products/Kepiting-Bakau.jpg",
    deskripsi: "Kepiting bakau frozen premium berkualitas pilihan dengan daging tebal, padat, dan cita rasa manis alami khas seafood.",
    kategori: "ikan-seafood-segar",
    linkAffiliate: "https://s.shopee.co.id/9pehIBhlZN"
  },
  {
    id: 2,
    nama: "Steak Tuna Merah 500gr",
    harga: "Rp55.000",
    gambar: "assets/products/Steak-Tuna-Merah .jpg",
    deskripsi: "Fillet tuna berkualitas premium yang telah difillet bersih tanpa tulang dan duri.",
    kategori: "ikan-seafood-segar",
    linkAffiliate: "https://s.shopee.co.id/4B0KYIPg9P"
  },
  {
    id: 2,
    nama: "Ikan Gabus Premium Fresh",
    harga: "Rp50.000",
    gambar: "assets/products/Ikan-Gabus.jpg",
    deskripsi: "Ikan gabus pilihan dengan kualitas segar dan daging putih yang padat.",
    kategori: "ikan-seafood-segar",
    linkAffiliate: "https://s.shopee.co.id/1gIzZxNVa3"
  },
  {
    id: 2,
    nama: "Ikan Kembung Banjar Segar 1kg",
    harga: "Rp29.000",
    gambar: "assets/products/Ikan-Kembung.jpg",
    deskripsi: "Ikan Kembung Segar Premium 1kg ukuran besar isi 1-8pcs.",
    kategori: "ikan-seafood-segar",
    linkAffiliate: "https://s.shopee.co.id/2qUwyTjnab"
  },
  {
    id: 2,
    nama: "Ikan Salmon Trout Fillet Segar 200gr",
    harga: "Rp58.000",
    gambar: "assets/products/Ikan-Salmon.jpg",
    deskripsi: " Produk yang kami kirimkan adalah BEKU dan BAGUS..",
    kategori: "ikan-seafood-segar",
    linkAffiliate: "https://s.shopee.co.id/AUuO71vp7Q"
  },
  {
    id: 3,
    nama: "Joran Pancing Carbon 200cm",
    harga: "Rp174.000",
    gambar: "assets/products/joran-pancing-carbon.jpg",
    deskripsi: "Joran ringan bahan carbon, cocok untuk pemancing pemula.",
    kategori: "pancing-umpan",
    linkAffiliate: "https://s.shopee.co.id/1qcLKGwOZz"
  },
   {
    id: 3,
    nama: "Essen Super Ikan NILA",
    harga: "Rp120.000",
    gambar: "assets/products/AGA-Essen -uper Ikan-NILA.jpg",
    deskripsi: "Diformulasikan untuk target ikan nila .",
    kategori: "pancing-umpan",
    linkAffiliate: "https://s.shopee.co.id/5LCKobxOA1"
  },
  {
    id: 3,
    nama: " Umpan Mancing Ikan Mas 30g",
    harga: "Rp14.000",
    gambar: "assets/products/umpan-mancing-ikan-mas.jpg",
    deskripsi: "Pelet umpan wangi, disukai ikan mas dan nila.",
    kategori: "pancing-umpan",
    linkAffiliate: "https://s.shopee.co.id/20vlXdm0ow"
  },
  {
    id: 4,
    nama: "Airator Aquarium Kolam Ikan Koi 4 cabang",
    harga: "Rp150.000",
    gambar: "assets/products/aerator-4-lubang.jpg",
    deskripsi: "Aerator hemat listrik untuk suplai oksigen kolam budidaya.",
    kategori: "Benih-Pakan-Budidaya",
    linkAffiliate: "https://s.shopee.co.id/1BMeZfH9oP"
  },
  {
    id: 4,
    nama: "Jaring Waring Ukuran 100 M x 120 CM ",
    harga: "Rp279.000",
    gambar: "assets/products/Jaring-Waring-Ukuran.jpg",
    deskripsi: "Jaring waring untuk penutup atau pembatas kolam ikan.",
    kategori: "Benih-Pakan-Budidaya",
    linkAffiliate: "https://s.shopee.co.id/60RwflhpFa"
  }
];

// ---------- 2. DAFTAR KATEGORI ----------

const categories = [
  { id: "produk-olahan-ikan", nama: "Produk Olahan Ikan", ikon: "🍥🐠" },
  { id: "ikan-seafood-segar", nama: "Ikan & Seafood Segar", ikon: "🦐" },
  { id: "pancing-umpan", nama: "Pancing & Umpan", ikon: "🎣" },
  { id: "Benih-Pakan-Budidaya", nama: "Benih, Pakan & Budidaya", ikon: "🐟🌱" }
];

// Placeholder gambar (dipakai kalau file gambar produk tidak ditemukan)
const PLACEHOLDER_IMG =
  "data:image/svg+xml;charset=UTF-8," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300">' +
    '<rect width="300" height="300" fill="#e8f4fb"/>' +
    '<text x="50%" y="50%" font-family="sans-serif" font-size="16" fill="#1a6fa8" text-anchor="middle" dominant-baseline="middle">Gambar belum tersedia</text>' +
    '</svg>'
  );

// ---------- 3. STATE ----------

let currentCategory = "semua";
let currentKeyword = "";

// ---------- 4. AMBIL ELEMEN DOM (dengan aman, setelah DOM siap) ----------

document.addEventListener("DOMContentLoaded", function () {
  const homeView = document.getElementById("homeView");
  const categoryView = document.getElementById("categoryView");
  const categoryGrid = document.getElementById("categoryGrid");
  const productGrid = document.getElementById("productGrid");
  const categoryTitle = document.getElementById("categoryTitle");
  const emptyState = document.getElementById("emptyState");
  const backBtn = document.getElementById("backBtn");
  const brandLogo = document.getElementById("brandLogo");

  const searchInput = document.getElementById("searchInput");
  const searchInputCategory = document.getElementById("searchInputCategory");
  const filterSelect = document.getElementById("filterSelect");

  if (
    !homeView || !categoryView || !categoryGrid || !productGrid ||
    !categoryTitle || !emptyState || !backBtn || !searchInput ||
    !searchInputCategory || !filterSelect
  ) {
    // Jika ada elemen penting yang hilang, hentikan tanpa membuat error di console.
    return;
  }

  // ---------- 5. RENDER KATEGORI DI HALAMAN UTAMA ----------

  function renderCategories() {
    categoryGrid.innerHTML = "";
    categories.forEach(function (cat) {
      const card = document.createElement("div");
      card.className = "category-card";
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");

      const icon = document.createElement("span");
      icon.className = "category-icon";
      icon.textContent = cat.ikon;

      const name = document.createElement("span");
      name.className = "category-name";
      name.textContent = cat.nama;

      card.appendChild(icon);
      card.appendChild(name);

      card.addEventListener("click", function () {
        openCategory(cat.id, cat.nama);
      });
      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openCategory(cat.id, cat.nama);
        }
      });

      categoryGrid.appendChild(card);
    });
  }

  // ---------- 6. RENDER PRODUK ----------

  function renderProducts(list) {
    productGrid.innerHTML = "";

    if (list.length === 0) {
      emptyState.classList.remove("hidden");
      return;
    }
    emptyState.classList.add("hidden");

    list.forEach(function (produk) {
      const card = document.createElement("div");
      card.className = "product-card";

      const img = document.createElement("img");
      img.className = "product-image";
      img.src = produk.gambar || PLACEHOLDER_IMG;
      img.alt = produk.nama;
      img.loading = "lazy";
      img.addEventListener("error", function () {
        img.src = PLACEHOLDER_IMG;
      });

      const body = document.createElement("div");
      body.className = "product-body";

      const nama = document.createElement("p");
      nama.className = "product-name";
      nama.textContent = produk.nama;

      const desc = document.createElement("p");
      desc.className = "product-desc";
      desc.textContent = produk.deskripsi;

      const harga = document.createElement("p");
      harga.className = "product-price";
      harga.textContent = produk.harga;

      const btn = document.createElement("button");
      btn.className = "product-btn";
      btn.type = "button";
      btn.textContent = "Lihat Produk";
      btn.addEventListener("click", function () {
        openAffiliateLink(produk);
      });

      body.appendChild(nama);
      body.appendChild(desc);
      body.appendChild(harga);
      body.appendChild(btn);

      card.appendChild(img);
      card.appendChild(body);

      productGrid.appendChild(card);
    });
  }

  // ---------- 7. FILTER + SEARCH (bisa jalan bersamaan) ----------

  function getFilteredProducts() {
    const keyword = currentKeyword.trim().toLowerCase();

    return products.filter(function (produk) {
      const cocokKategori =
        currentCategory === "semua" || produk.kategori === currentCategory;

      if (!cocokKategori) return false;
      if (!keyword) return true;

      const catNama = getCategoryName(produk.kategori).toLowerCase();

      return (
        produk.nama.toLowerCase().includes(keyword) ||
        produk.deskripsi.toLowerCase().includes(keyword) ||
        catNama.includes(keyword)
      );
    });
  }

  function getCategoryName(id) {
    const found = categories.find(function (c) {
      return c.id === id;
    });
    return found ? found.nama : "";
  }

  function refreshProductView() {
    renderProducts(getFilteredProducts());
  }

  // ---------- 8. NAVIGASI ANTAR HALAMAN ----------

  function openCategory(categoryId, categoryName) {
    currentCategory = categoryId;
    currentKeyword = searchInput ? searchInput.value : "";

    categoryTitle.textContent = categoryName || "Semua Produk";
    filterSelect.value = categoryId;
    searchInputCategory.value = currentKeyword;

    homeView.classList.add("hidden");
    categoryView.classList.remove("hidden");

    refreshProductView();
    window.scrollTo(0, 0);
  }

  function goHome() {
    currentCategory = "semua";
    currentKeyword = "";
    searchInput.value = "";

    categoryView.classList.add("hidden");
    homeView.classList.remove("hidden");
    window.scrollTo(0, 0);
  }

  // ---------- 9. EVENT LISTENER ----------

  backBtn.addEventListener("click", goHome);
  brandLogo.addEventListener("click", goHome);

  // Search dari halaman utama langsung membuka tampilan "Semua Produk"
  searchInput.addEventListener("input", function () {
    const keyword = searchInput.value;
    if (keyword.trim().length > 0) {
      openCategory("semua", "Semua Produk");
      searchInputCategory.value = keyword;
      currentKeyword = keyword;
      refreshProductView();
    }
  });

  // Search realtime di halaman kategori
  searchInputCategory.addEventListener("input", function () {
    currentKeyword = searchInputCategory.value;
    refreshProductView();
  });

  // Filter kategori (dropdown)
  filterSelect.addEventListener("change", function () {
    currentCategory = filterSelect.value;
    categoryTitle.textContent =
      currentCategory === "semua"
        ? "Semua Produk"
        : getCategoryName(currentCategory);
    refreshProductView();
  });

  // ---------- 10. REDIRECT AFFILIATE (aman & tervalidasi) ----------

  function openAffiliateLink(produk) {
    if (!produk || !produk.linkAffiliate) {
      alert("Link produk belum tersedia.");
      return;
    }
    try {
      const url = new URL(produk.linkAffiliate);
      if (url.protocol !== "http:" && url.protocol !== "https:") {
        alert("Link produk tidak valid.");
        return;
      }
      window.open(url.href, "_blank", "noopener,noreferrer");
    } catch (error) {
      alert("Link produk tidak valid.");
    }
  }

  // ---------- 11. INISIALISASI ----------

  renderCategories();
});
