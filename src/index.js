const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */

// Header
{
  let i = 1;
  const headerAnchor = document.querySelectorAll(".container>header>nav>a");
  headerAnchor.forEach((element) => {
    element.textContent = siteContent.nav[`nav-item-${i}`];
    element.className = "italic";
    i++;
  });
}

document.getElementById("logo-img").src = siteContent.images["logo-img"];

//Cta
{
  const sectionDiv = document.querySelector(".cta-text").children;
  sectionDiv[0].textContent = siteContent.cta.h1;
  sectionDiv[1].textContent = siteContent.cta.button;
}

document.getElementById("cta-img").src = siteContent.images["cta-img"];

//Ana İçerik
{
  let i = 0;
  const mainContentArr = [];

  for (let key in siteContent["ana-içerik"])
    mainContentArr.push(siteContent["ana-içerik"][key]);

  const divTextContent = document.querySelectorAll("section.main-content .text-content");
  divTextContent.forEach((element) => {
    element.children[0].textContent = mainContentArr[i++];
    element.children[1].textContent = mainContentArr[i++];
  });
}

document.getElementById("middle-img").src = siteContent.images["accent-img"];

//İletişim
{
  const contactTags = document.querySelector("section.contact").children;
  const siteContactArr = [];

  for (let key in siteContent["iletisim"])
    siteContactArr.push(siteContent["iletisim"][key]);

  for (let i = 0; i < siteContactArr.length; i++)
    contactTags[i].textContent = siteContactArr[i];
}

//Footer
{
  const footerAnchor = document.querySelector("footer>a");
  footerAnchor.className = "bold";
  footerAnchor.textContent = siteContent.footer.copyright;
}
