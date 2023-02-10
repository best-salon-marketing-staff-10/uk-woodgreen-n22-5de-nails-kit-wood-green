// Phần info này bố trí như sau
//Cần up website lên rồi check với schema validator xem thực sự ổn chưa
//Tối ưu hóa thẻ h1 h2 h3 cho từng page, sửa các đầu mục, phần description đã sửa xong

//images và các serviceList là các mục ko cần sửa gì

//Viết hướng dẫn và đào tạo người sửa trang này

/*
businessOpeningTimeInput - Cần thay đổi cái này, nhập đầu vào giờ làm việc của tiệm
processedBusinessOpeningTime - Cái này kiểm soát thông tin hiển thị trên website của tiệm
changedInfo - Các thông tin cần thay đổi thường xuyên
processedInfo - Là các thông tin được xử lý từ thằng changedInfo

menu - Danh sách các tab trên thanh navigation
serviceCategory - Danh sách các hạng mục dịch vụ của tiệm (Nhóm dịch vụ lớn, để trong đó có các dịch vụ con cụ thể)
seoInfo - Là các mảnh ghép từ khóa
seoKeyword - Là các từ khóa để làm SEO
imageAlt - Là các thẻ Alt cho ảnh, đã vào công thức

headerInput - Là những thông tin đc dùng để nhập vào mục Header
schemaInput - Là những thông tin đc dùng để nhập vào mục schemaData
schemaData - Là những thông tin sẽ hiển thị lên Schema của website
  Giờ mở cửa của tiệm khai báo lên Schema
  Nếu ko mở ngày nào thì xóa ngày đó đi trong mục openingHoursSpecification

pageContent - Chứa tất cả các nội dung của website trừ phần Button
button - Tất cả về các nút, nội dung của nút, link nút sẽ dẫn đến khi click vào
images - Đường link của tất cả các ảnh trên website
serviceList1 - Danh sách các dịch vụ thuộc serviceCategory tương ứng
serviceList2 - Danh sách các dịch vụ thuộc serviceCategory tương ứng
serviceList3 - Danh sách các dịch vụ thuộc serviceCategory tương ứng
serviceList4 - Danh sách các dịch vụ thuộc serviceCategory tương ứng
serviceList5 - Danh sách các dịch vụ thuộc serviceCategory tương ứng
serviceList6 - Danh sách các dịch vụ thuộc serviceCategory tương ứng
serviceList7 - Danh sách các dịch vụ thuộc serviceCategory tương ứng

Các mục cần thay đổi thông tin khi tạo website mới
changedInfo
serviceList
*/


//  thongTinTiem1 gồm:
//    1. Thông tin cơ bản của tiệm
//    2. Các ảnh của tiệm
//    3. Các đường link của tiệm
//    4. Nội dung các nút

//  thongtinTiem2 gồm:
//    1. Các nội dung của tiệm
//    2. Các thẻ Alt

//Cần bố trí lại, xem những thông tin gì cần sửa thì cho riêng vào 1 mục

//Cần sửa mục nào thì ghi hết vào đây
  /*
  businessOpeningTimeInput
  personReviewAuthorName
  */
const businessOpeningTimeInput = {
  //Thời gian làm việc của tiệm
  monOpeningTime : "09:30",
  monClosingTime : "18:30",

  tueOpeningTime : "09:30",
  tueClosingTime : "18:30",

  wedOpeningTime : "09:30",
  wedClosingTime : "18:30",

  thuOpeningTime : "09:30",
  thuClosingTime : "18:30",

  friOpeningTime : "09:30",
  friClosingTime : "18:30",

  satOpeningTime : "09:30",
  satClosingTime : "18:30",

  sunOpeningTime : "",
  sunClosingTime : "",
}

const processedBusinessOpeningTime = {
  //Thời gian làm việc của tiệm hiển thị trong file time-schedule.js
  //Đóng cửa ngày nào chỉnh sửa ngày đó thành Closed
  workingTimeMon : "Monday: " + businessOpeningTimeInput.monOpeningTime + "–" + businessOpeningTimeInput.monClosingTime,
  workingTimeTue : "Tuesday: " + businessOpeningTimeInput.tueOpeningTime + "–" + businessOpeningTimeInput.tueClosingTime,
  workingTimeWed : "Wednesday: " + businessOpeningTimeInput.wedOpeningTime + "–" + businessOpeningTimeInput.wedClosingTime,
  workingTimeThu : "Thursday: " + businessOpeningTimeInput.thuOpeningTime + "–" + businessOpeningTimeInput.thuClosingTime,
  workingTimeFri : "Friday: " + businessOpeningTimeInput.friOpeningTime + "–" + businessOpeningTimeInput.friClosingTime,
  workingTimeSat : "Saturday: " + businessOpeningTimeInput.satOpeningTime + "–" + businessOpeningTimeInput.satClosingTime,
  workingTimeSun : "Sunday: Closed " + businessOpeningTimeInput.sunOpeningTime + "" + businessOpeningTimeInput.sunClosingTime,
}

const changedInfo = {
  businessName: "The Nail Bar",
  businessAddressLevel1: "69 High St",
  businessAddressLevel2: "Christchurch",
  businessAddressLevel3: "Bournemouth",
  businessAddressLevel4: "England",
  businessCountry: "United Kingdom",
  businessGeoRegionCode: "GB",

  //Tra cứu tên thành phố trong https://www.geonames.org/GB/administrative-division-united-kingdom.html và điền vào mã code tương ứng
  businessAddressDivisionCode: "BCP",

  businessPostCode: "BH23 1AS",
  

  businessPhoneNumber: "+447877889900",

  //Website tiệm KO có dấu / ở cuối
  businessWebsite: "",

  linkBookingMap: "",
  linkBookingApp: "https://bit.ly/3JHC0iQ",
  linkToMap: "https://goo.gl/maps/XTJdjs8FKN1swLTH7",

  

  //Mở Google Maps tiệm, zoom sát vào, chuột phải  
  geoLatitude: 50.7337416093408,
  geoLongitude: -1.7761649676105957,

  //Code xác minh của website trên Google Search
  metaGoogleSiteVerification: "",

  //iframe map
  iframeMapLink : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d157.8286074853419!2d-1.7761284225136251!3d50.73370871760787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48739f2541bbddd7%3A0xcadfdc1122a8e899!2sThe%20Nail%20Bar!5e0!3m2!1sen!2sus!4v1675048635909!5m2!1sen!2sus",

  // Các ảnh của tiệm
  ogImage:"https://the-nail-bar-christchurch.web.app/images/desktop-nail-salon-happy-customer-1.jpg",
  icon:"/icon.jpg",
  businessLogo:"/logo.jpg",
}

const menu = {
  mainMenu1 : "Home",
  mainMenu2 : "About us",
  mainMenu3 : "Book Now",
  mainMenu4 : "Services",
  mainMenu5 : "Our Policies",
  mainMenu6 : "Contact us",

  linkToMainMenu1 : "/",
  linkToMainMenu2 : "/about-us",
  linkToMainMenu3 : "/appointment",
  linkToMainMenu4 : "/services",
  linkToMainMenu5 : "/our-policy",
}

const serviceCategory = {
  //Danh sách các dịch vụ của tiệm
  serviceCategory1:"Nail extensions",
  serviceCategory2:"Gel nails / Shellac nails",
  serviceCategory3:"Regular",
  serviceCategory4:"Hair Wash massage with NuSkin",
  serviceCategory5:"Nail design",
  serviceCategory6:"Waxing",
  serviceCategory7:"Facial",

  mobileLinkToServiceCategory1 : "/services#m-service-list-1",
  mobileLinkToServiceCategory2 : "/services#m-service-list-2",
  mobileLinkToServiceCategory3 : "/services#m-service-list-3",
  mobileLinkToServiceCategory4 : "/services#m-service-list-4",
  mobileLinkToServiceCategory5 : "/services#m-service-list-5",
  mobileLinkToServiceCategory6 : "/services#m-service-list-6",
  mobileLinkToServiceCategory7 : "/services#m-service-list-7",
  
  tabletLinkToServiceCategory1 : "/services#t-service-list-1",
  tabletLinkToServiceCategory2 : "/services#t-service-list-2",
  tabletLinkToServiceCategory3 : "/services#t-service-list-3",
  tabletLinkToServiceCategory4 : "/services#t-service-list-4",
  tabletLinkToServiceCategory5 : "/services#t-service-list-5",
  tabletLinkToServiceCategory6 : "/services#t-service-list-6",
  tabletLinkToServiceCategory7 : "/services#t-service-list-7",

  desktopLinkToServiceCategory1 : "/services#d-service-list-1",
  desktopLinkToServiceCategory2 : "/services#d-service-list-2",
  desktopLinkToServiceCategory3 : "/services#d-service-list-3",
  desktopLinkToServiceCategory4 : "/services#d-service-list-4",
  desktopLinkToServiceCategory5 : "/services#d-service-list-5",
  desktopLinkToServiceCategory6 : "/services#d-service-list-6",
  desktopLinkToServiceCategory7 : "/services#d-service-list-7",
}

const seoInfo = {
  keyword1: "nail salon",
  keyword2: "nails",

  serviceKeyword1: "acrylic nails",
  serviceKeyword2: "nails extension",
  serviceKeyword3: "shellac nails",
  serviceKeyword4: "manicure",
  serviceKeyword5: "pedicure",

  localKeyword1: changedInfo.businessAddressLevel2,
  localKeyword2: changedInfo.businessAddressLevel3,
}

const seoKeyword = {
  seoKeyword1: seoInfo.keyword1 + " " + seoInfo.localKeyword1,
  seoKeyword2: seoInfo.keyword1 + " " + seoInfo.localKeyword2,

  seoKeyword3: seoInfo.keyword2 + " " + seoInfo.localKeyword1,
  seoKeyword4: seoInfo.keyword2 + " " + seoInfo.localKeyword2,

  seoKeyword5: seoInfo.serviceKeyword1 + " " + seoInfo.localKeyword1,
  seoKeyword6: seoInfo.serviceKeyword1 + " " + seoInfo.localKeyword2,

  seoKeyword7: seoInfo.serviceKeyword2 + " " + seoInfo.localKeyword1,
  seoKeyword8: seoInfo.serviceKeyword2 + " " + seoInfo.localKeyword2,

  seoKeyword9: seoInfo.serviceKeyword3 + " " + seoInfo.localKeyword1,
  seoKeyword10: seoInfo.serviceKeyword3 + " " + seoInfo.localKeyword2,

  seoKeyword11: seoInfo.serviceKeyword4 + " " + seoInfo.localKeyword1,
  seoKeyword12: seoInfo.serviceKeyword4 + " " + seoInfo.localKeyword2,

  seoKeyword13: seoInfo.serviceKeyword5 + " " + seoInfo.localKeyword1,
  seoKeyword14: seoInfo.serviceKeyword5 + " " + seoInfo.localKeyword2,
}

const imageAlt = {
  //Ảnh customer review - customer-review.js
  cusReviewImage1Alt: seoKeyword.seoKeyword1,
  cusReviewImage2Alt: seoKeyword.seoKeyword2,
  cusReviewImage3Alt: seoKeyword.seoKeyword3,
  cusReviewImage4Alt: seoKeyword.seoKeyword4,
  cusReviewImage5Alt: seoKeyword.seoKeyword1,
  
  //Thanh Mobile Bottom Nav
  BottomNavButton1IconAlt: seoKeyword.seoKeyword1,
  BottomNavButton2IconAlt: seoKeyword.seoKeyword2,
  BottomNavButton3IconAlt: seoKeyword.seoKeyword3,
  
  //Ảnh Footer
  footerImagePhoneIconAlt: seoKeyword.seoKeyword1,
  footerImageMapPointerIconAlt: seoKeyword.seoKeyword1,

  //Ảnh trang about cho 3 giao diện
  mobileAboutUsImage1Alt: seoKeyword.seoKeyword1,
  mobileAboutUsImage2Alt: seoKeyword.seoKeyword2,
  mobileAboutUsImage3Alt: seoKeyword.seoKeyword3,
  mobileAboutUsImage4Alt: seoKeyword.seoKeyword4,
  mobileAboutUsImage5Alt: seoKeyword.seoKeyword5,

  tabletAboutUsImage1Alt: seoKeyword.seoKeyword1,
  tabletAboutUsImage2Alt: seoKeyword.seoKeyword2,
  tabletAboutUsImage3Alt: seoKeyword.seoKeyword3,
  tabletAboutUsImage4Alt: seoKeyword.seoKeyword4,
  tabletAboutUsImage5Alt: seoKeyword.seoKeyword5,

  desktopAboutUsImage1Alt: seoKeyword.seoKeyword1,
  desktopAboutUsImage2Alt: seoKeyword.seoKeyword2,
  desktopAboutUsImage3Alt: seoKeyword.seoKeyword3,

  desktopAboutUsDongVienImage1Alt: seoKeyword.seoKeyword1,
  desktopAboutUsDongVienImage2Alt: seoKeyword.seoKeyword2,
  desktopAboutUsDongVienImage3Alt: seoKeyword.seoKeyword3,

  section1Image1Alt: seoKeyword.seoKeyword1,
  section2Image1Alt: seoKeyword.seoKeyword2,
  section3Image1Alt: seoKeyword.seoKeyword3,
  section5Image1Alt: seoKeyword.seoKeyword4,
  section6Image1Alt: seoKeyword.seoKeyword5,
  section7Image1Alt: seoKeyword.seoKeyword6,
  section7Image2Alt: seoKeyword.seoKeyword7,

  mobileCarouselImage1Alt: seoKeyword.seoKeyword8,
  mobileCarouselImage2Alt: seoKeyword.seoKeyword9,
  mobileCarouselImage3Alt: seoKeyword.seoKeyword10,
  
  tabletCarouselImage1Alt: seoKeyword.seoKeyword8,
  tabletCarouselImage2Alt: seoKeyword.seoKeyword9,
  tabletCarouselImage3Alt: seoKeyword.seoKeyword10,
  
  desktopCarouselImage1Alt: seoKeyword.seoKeyword8,
  desktopCarouselImage2Alt: seoKeyword.seoKeyword9,
  desktopCarouselImage3Alt: seoKeyword.seoKeyword10,
  
  LocationImage1Alt: seoKeyword.seoKeyword1,

  serviceList1Image1Alt : seoKeyword.seoKeyword7,
  serviceList1Image2Alt : seoKeyword.seoKeyword7,
  serviceList1Image3Alt : seoKeyword.seoKeyword7,
  serviceList1Image4Alt : seoKeyword.seoKeyword8,
  serviceList1Image5Alt : seoKeyword.seoKeyword8,
  
  serviceList2Image1Alt : seoKeyword.seoKeyword9,
  serviceList2Image2Alt : seoKeyword.seoKeyword9,
  serviceList2Image3Alt : seoKeyword.seoKeyword9,
  serviceList2Image4Alt : seoKeyword.seoKeyword10,
  serviceList2Image5Alt : seoKeyword.seoKeyword10,
    
  serviceList3Image1Alt : seoKeyword.seoKeyword11,
  serviceList3Image2Alt : seoKeyword.seoKeyword12,
  serviceList3Image3Alt : seoKeyword.seoKeyword13,
  serviceList3Image4Alt : seoKeyword.seoKeyword14,
  serviceList3Image5Alt : seoKeyword.seoKeyword14,
  
  serviceList4Image1Alt : "hair wash" + " " + changedInfo.businessAddressLevel2,
  serviceList4Image2Alt : "hair wash" + " " + changedInfo.businessAddressLevel2,
  serviceList4Image3Alt : "hair wash" + " " + changedInfo.businessAddressLevel2,
  serviceList4Image4Alt : "hair wash" + " " + changedInfo.businessAddressLevel2,
  serviceList4Image5Alt : "hair wash" + " " + changedInfo.businessAddressLevel2,
  
  serviceList5Image1Alt : "nail design" + " " + changedInfo.businessAddressLevel2,
  serviceList5Image2Alt : "nail design" + " " + changedInfo.businessAddressLevel2,
  serviceList5Image3Alt : "nail design" + " " + changedInfo.businessAddressLevel2,
  serviceList5Image4Alt : "nail design" + " " + changedInfo.businessAddressLevel2,
  serviceList5Image5Alt : "nail design" + " " + changedInfo.businessAddressLevel2,
  
  serviceList6Image1Alt : "waxing" + " " + changedInfo.businessAddressLevel2,
  serviceList6Image2Alt : "waxing" + " " + changedInfo.businessAddressLevel2,
  serviceList6Image3Alt : "waxing" + " " + changedInfo.businessAddressLevel2,
  serviceList6Image4Alt : "waxing" + " " + changedInfo.businessAddressLevel2,
  serviceList6Image5Alt : "waxing" + " " + changedInfo.businessAddressLevel2,

  serviceList7Image1Alt : "facial" + " " + changedInfo.businessAddressLevel2,
  serviceList7Image2Alt : "facial" + " " + changedInfo.businessAddressLevel2,
  serviceList7Image3Alt : "facial" + " " + changedInfo.businessAddressLevel2,
  serviceList7Image4Alt : "facial" + " " + changedInfo.businessAddressLevel2,
  serviceList7Image5Alt : "facial" + " " + changedInfo.businessAddressLevel2,
}

const processedInfo = {
  //Xử lý Slogan tiệm
  slogan : "Clean and Professional " + seoKeyword.seoKeyword1 + " - " +  changedInfo.businessName,

  //Dòng full address của tiệm
  businessAddress: changedInfo.businessAddressLevel1 + ", " + changedInfo.businessAddressLevel2 + ", " + changedInfo.businessPostCode,

  callBusiness: `tel:${changedInfo.businessPhoneNumber}`,

  //Link booking thực sự của tiệm sửa ở đây
  businessBookingLink: changedInfo.linkBookingApp,

  //offer.js
  offerTitle : "Our Offers and Benefits",
  offerDescription : "Free all cold drink and hot drink, chocolate, sweet or snack",
  offerHeading : "Our offers:",
  offerContent1 : "✅10% for Student. ",
  offerContent2 : "✅Refer a friend to get 5 pounds voucher. ",
  offerContent3 : "✅Group from 3 people get 10% with the main treatment",
}

const headerInput = {
  headerTitle: "The best " + seoKeyword.seoKeyword1 + " - " + changedInfo.businessName,
  metaDescription : "Best " + seoKeyword.seoKeyword1 + ". " + "Friendly staff and excellent service. Treat yourself or enjoy with friends and family",
  relIcon: changedInfo.icon,
  relCanonical: changedInfo.businessWebsite,
  metaGeoPosition : changedInfo.geoLatitude + ", " + changedInfo.geoLongitude,
  metaGeoPlaceName : changedInfo.businessAddressLevel2 + ", " + changedInfo.businessCountry,
  metaGeoRegion: changedInfo.businessGeoRegionCode + "-" + changedInfo.businessAddressDivisionCode,
  
  metaOgTitle: processedInfo.slogan,
  metaOgImage: changedInfo.ogImage,
  metaOgImageWidth: "1200",
  metaOgImageHeight: "630",

  metaGoogleSiteVerification: changedInfo.metaGoogleSiteVerification,
}


//Cần sửa trong mục này
const schemaInput = {
  schemaType: "NailSalon",
  schemaName: changedInfo.businessName,
  schemaStreetAddress: changedInfo.businessAddressLevel1,
  schemaAddressLocality: changedInfo.businessAddressLevel2,
  schemaAddressRegion: changedInfo.businessAddressLevel4,
  schemaPostalCode: changedInfo.businessPostCode,
  schemaAddressCountry: changedInfo.businessGeoRegionCode,

  schemaImage1: "/images/nail-extension-1.jpg",
  schemaImage2: "/images/nail-extension-2.jpg",
  schemaImage3: "/images/nail-extension-3.jpg",
  schemaImage4: "/images/nail-extension-4.jpg",
  schemaImage5: "/images/nail-extension-5.jpg",
  schemaImage6: "/images/gel-nails-shellac-nails-1.jpg",
  schemaImage7: "/images/gel-nails-shellac-nails-2.jpg",
  schemaImage8: "/images/gel-nails-shellac-nails-3.jpg",
  schemaImage9: "/images/gel-nails-shellac-nails-4.jpg",
  schemaImage10: "/images/gel-nails-shellac-nails-5.jpg",
  schemaImage11: "/images/nail-design-1.jpg",
  schemaImage12: "/images/nail-design-2.jpg",
  schemaImage13: "/images/nail-design-3.jpg",
  schemaImage14: "/images/nail-design-4.jpg",
  schemaImage15: "/images/nail-design-5.jpg",
  schemaImage16: "/images/pedicure-1.jpg",
  schemaImage17: "/images/pedicure-2.jpg",
  schemaImage18: "/images/pedicure-3.jpg",
  schemaImage19: "/images/pedicure-4.jpg",
  schemaImage20: "/images/pedicure-5.jpg",


  schemaTelephone: changedInfo.businessPhoneNumber,

  //Thời gian làm việc của tiệm
  schemaMonOpeningTime: businessOpeningTimeInput.monOpeningTime,
  schemaMonClosingTime: businessOpeningTimeInput.monClosingTime,

  schemaTueOpeningTime: businessOpeningTimeInput.tueOpeningTime,
  schemaTueClosingTime: businessOpeningTimeInput.tueClosingTime,

  schemaWedOpeningTime: businessOpeningTimeInput.wedOpeningTime,
  schemaWedClosingTime: businessOpeningTimeInput.wedClosingTime,

  schemaThuOpeningTime: businessOpeningTimeInput.thuOpeningTime,
  schemaThuClosingTime: businessOpeningTimeInput.thuClosingTime,

  schemaFriOpeningTime: businessOpeningTimeInput.friOpeningTime,
  schemaFriClosingTime: businessOpeningTimeInput.friClosingTime,

  schemaSatOpeningTime: businessOpeningTimeInput.satOpeningTime,
  schemaSatClosingTime: businessOpeningTimeInput.satClosingTime,

  schemaSunOpeningTime: businessOpeningTimeInput.sunOpeningTime,
  schemaSunClosingTime: businessOpeningTimeInput.sunClosingTime,

  //Logo
  schemaLogo : changedInfo.businessWebsite + changedInfo.businessLogo,

  //Đơn vị tiền tệ chấp nhận thanh toán
  schemaCurrenciesAccepted: "GBP",
  schemaPaymentAccepted: ["cash", "credit card"],

  schemaPriceRange: "££",
  //Cần đổi tên khách
  schemaPersonReviewAuthorName: "",
  //Xem điểm review trung bình của tiệm là bao nhiêu
  schemaRatingValue: "",
  schemaBestRating: "5",

  schemaGeoLatitude: 50.7337416093408,
  schemaLongitude: -1.7761649676105957,

  schemaUrl: changedInfo.businessWebsite,

  schemaHasMap: changedInfo.linkToMap,
  schemaKeywords: [seoKeyword.seoKeyword1, 
                  seoKeyword.seoKeyword2,
                  seoKeyword.seoKeyword3,
                  seoKeyword.seoKeyword4,
                  seoKeyword.seoKeyword5,
                  seoKeyword.seoKeyword6,
                  seoKeyword.seoKeyword7,
                  seoKeyword.seoKeyword8,
                  seoKeyword.seoKeyword9,
                  seoKeyword.seoKeyword10,
                  seoKeyword.seoKeyword11,
                  seoKeyword.seoKeyword12,
              ],
  schemaSlogan: processedInfo.slogan,
  schemaDescription: headerInput.metaDescription,
}

//Dữ liệu schema
const schemaData = {
  "@context": "http://schema.org",
  "@type": schemaInput.schemaType,
  "name": schemaInput.schemaName,
  "image": [
    schemaInput.schemaImage1,
    schemaInput.schemaImage2,
    schemaInput.schemaImage3,
    schemaInput.schemaImage4,
    schemaInput.schemaImage5,
    schemaInput.schemaImage6,
    schemaInput.schemaImage7,
    schemaInput.schemaImage8,
    schemaInput.schemaImage9,
    schemaInput.schemaImage10,
    schemaInput.schemaImage11,
    schemaInput.schemaImage12,
    schemaInput.schemaImage13,
    schemaInput.schemaImage14,
    schemaInput.schemaImage15,
    schemaInput.schemaImage16,
    schemaInput.schemaImage17,
    schemaInput.schemaImage18,
    schemaInput.schemaImage19,
    schemaInput.schemaImage20,
   ],
  "telephone": schemaInput.schemaTelephone,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": schemaInput.schemaStreetAddress,
    "addressLocality": schemaInput.schemaAddressLocality,
    "addressRegion": schemaInput.schemaAddressRegion,
    "postalCode": schemaInput.schemaPostalCode,
    "addressCountry": schemaInput.schemaAddressCountry,
  },
  "currenciesAccepted" : schemaInput.schemaCurrenciesAccepted,
  "paymentAccepted": schemaInput.schemaPaymentAccepted,
  "logo": schemaInput.schemaLogo,
  "review": {
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": schemaInput.schemaRatingValue,
      "bestRating": schemaInput.schemaBestRating,
    },
    "author": {
      "@type": "Person",
      "name": schemaInput.schemaPersonReviewAuthorName,
    },
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": schemaInput.schemaGeoLatitude,
    "longitude": schemaInput.schemaLongitude,
  },
  "url": schemaInput.schemaUrl,
  "priceRange": schemaInput.schemaPriceRange,
  //Giờ mở cửa của tiệm khai báo lên Schema
  //Nếu ko mở ngày nào thì xóa ngày đó đi
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Monday",
      "opens": schemaInput.schemaMonOpeningTime,
      "closes": schemaInput.schemaMonOpeningTime,
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Tuesday",
      "opens": schemaInput.schemaTueOpeningTime,
      "closes": schemaInput.schemaTueClosingTime,
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Wednesday",
      "opens": schemaInput.schemaWedOpeningTime,
      "closes": schemaInput.schemaWedClosingTime,
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Thursday",
      "opens": schemaInput.schemaThuOpeningTime,
      "closes": schemaInput.schemaThuClosingTime,
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Friday",
      "opens": schemaInput.schemaFriOpeningTime,
      "closes": schemaInput.schemaFriClosingTime,
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": schemaInput.schemaSatOpeningTime,
      "closes": schemaInput.schemaSatClosingTime,
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": schemaInput.schemaSunOpeningTime,
      "closes": schemaInput.schemaSunClosingTime,
    },
  ],
  "hasMap": schemaInput.schemaHasMap,
  "keywords": schemaInput.schemaKeywords,
  "slogan": schemaInput.schemaSlogan,
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Book an appointment or asking question",
    "telephone": schemaInput.schemaTelephone,
  },
  "description" : schemaInput.schemaDescription,
}

//Nội dung trên phần thân trang thì cho vào đây
const pageContent = {
  //our-story.js
  ourStoryHeading: "Our " + seoKeyword.seoKeyword1 + " story",
  ourStoryDescription: "Located at " + changedInfo.businessAddressLevel1 + ", we are a nail shop in " + changedInfo.businessAddressLevel2 + ". Skilled manicurists and pedicurists look forward to bringing you the best products and services. We are always researching and learning the best products and services, trendy nails, to bring more and more satisfaction to customers who are coming to us.",

  //dong-vien-1.js
  section1Heading: "We are " + seoKeyword.seoKeyword3 + " experienced manicurists and pedicurists",
  section1Description: "Are you looking for nail salon in " + changedInfo.businessAddressLevel2 + "? One of the best nail salon in " + changedInfo.businessAddressLevel3 + "? We are proud to say that here we are. We can give you amazing nails with our acrylic extensions and great relaxation with our manicure and pedicure services. We cater to both men and women. You can rest assured and get a sense of satisfaction when you come to us",

  //dong-vien-2.js
  section2Heading : "Always clean",
  section2Description : "We are committed to the safety and well being of our customer therefore we always maintain our clean environment, clean work stations, clean employees, and sterilization practices.",

  //dong-vien-3.js
  section3Heading : "Always leading And Ethical",
  section3Description : "Having been in the nail industry for a long time, and wanting to provide the best " + changedInfo.businessAddressLevel2 + " nail services, we guarantee to bring you the best experience ever. Our mission is to provide our customers with the ultimate pampering experience beginning with a beverage in one hand, a social scene in-between and a stunning set of services.",

  // nhan-manh-1.js
  section4Heading : "The best " + seoKeyword.seoKeyword1,

  // nhan-manh-2.js
  section5Heading : "DON'T LET DOWN YOUR NAILS",
  section5Description : "For a flawless manicure and pedicure, visit us at " + changedInfo.businessName + ". We offer a variety of polish and acrylic options to suit everyone's needs. 😸💅",

  // nhan-manh-3.js
  section6Heading : "OUR MISSION",
  section6Description : "Going to the " + seoKeyword.seoKeyword1 + " is like a visit to your favorite person ever, who always makes you feel amazing no matter what. Visiting a " + seoKeyword.seoKeyword1 + " can have so many great side benefits: it can be a time to take care of yourself, a way to make you feel better about yourself, and an opportunity for you and your friends or family to chat with each other",


  // nhan-manh-4.js
  section7Heading : "SERVICES",
  section7Description : "Gorgeous nails are a great way to make a good first impression! Give your hands the love they deserve and call our " + seoKeyword.seoKeyword1 + " now for an appointment. We have a wide variety of colors for each occasion. We know what you want, and we’re here to give you amazing nails with our acrylic extensions and the best relaxation for your feet.",

  // nhan-manh-5.js
  section8Heading : "ENJOYABLE & RELAXATION",
  section8Description : "Getting your nails done should be enjoyable! At " + changedInfo.businessName +", our focus is to help you relax so you can enjoy the experience. It’s your day made for you. Our " + changedInfo.businessAddressLevel2  + " nail salon will make it fun and memorable for you with our wide selection of nail colors, our pink gowns, or by customizing your experience.⁣",

  carouselHeading : "One of the best nails salon in " + changedInfo.businessAddressLevel2 + " here to serve you",

  customerReviewHeading: "WHAT OUR CUSTOMERS SAY",
  customerReviewDescription: "",

  //content-our-policy.js
  contentOurPolicyHeadingMain : "OUR POLICIES",
  contentOurPolicyHeadingSmall1 : "Refunds",
  contentOurPolicyHeadingSmall2 : "Guarantee",
  contentOurPolicyHeadingSmall3 : "Tardiness",
  contentOurPolicyHeadingSmall4 : "Cancellations",
  contentOurPolicyHeadingSmall5 : "Gift Cards",
  contentOurPolicyDescription1 : "At " + changedInfo.businessName +", we will do anything we can to make sure you are satisfied. You are never just a customer, you’re part of the family. If your nails are not up to your expectations or if there’s something we can do to rectify it, speak up and let us know.    No refunds will be given after you have left the salon.",
  contentOurPolicyDescription2 : "Enhancements and gel polish manicures are guaranteed for 7 business days after your appointment; excluding breakages. If you lose an enhancement or notice chips or lifting in the first seven days, please call us to schedule a free repair. Repairs after 7 days or for breakages, tears, and corner breaks are charged. Be kind to your nails and they will look beautiful for weeks after your service. Traditional polish services are not guaranteed.",
  contentOurPolicyDescription3 : "Scheduled appointments have a 15 minute grace period to allow for traffic snarls or parking difficulties. If you anticipate that you will be later than 15 minutes, please call ahead to see if we have the availability to complete your service in full. One late client can throw off our entire schedule and cause our other clients to be late for their commitments. Therefore, if you arrive more than 15 minutes late, we reserve the right to refuse partial or complete services.",
  contentOurPolicyDescription41 : "Appointments can be cancelled 24 hours in advance by calling or texting ",
  contentOurPolicyDescription42 : ". Please give at least 24 hours notice so that we have the opportunity to offer your reserved time to another client on our waiting list. We understand that sometimes emergencies happen, and it's not always possible to give adequate notice when you can't make an appointment. However, be aware that if you repeatedly cancel appointments without proper notice, we reserve the right to ask for a non-refundable deposit to secure your next appointment.",
  contentOurPolicyDescription5 : "The Gift Card and its balance are valid for a period of six months from the date of purchase. Your Gift Card will cease to be valid six months from the date of purchase and you will no longer be entitled to use it. ",

  //service-1.js
  serviceCategory1Description : "The nail extensions that you can get at our " + seoKeyword.seoKeyword1 + " are so beautiful! They are easy to put on, and they last for two whole weeks on average.  Our " + seoKeyword.seoKeyword1 + " was also built to be very comfy for customers. We hope you come see us soon!",
    
  //service-2.js
  serviceCategory2Description : "Your nails deserve the same attention as your hair, makeup, and wardrobe. That’s why we have Gel-polish manicures at our " + seoKeyword.seoKeyword1 + ". Our nail technicians are masters of the art of manicure and pedicure to transform your hands and feet into flawless works of art.",
  
  //service-3.js
  serviceCategory3Description : "Does a manicure or pedicure make you feel relaxed? The folks over at our " + seoKeyword.seoKeyword1 + " want you to feel pampered, and are here for your every nail and beauty need day or night. No matter your style, face challenge or nail desire, " + changedInfo.businessName + " has the perfect cure for you. Come in today for a manicure or pedicure.",
  
  //service-4.js
  serviceCategory4Description : "When you’re treating yourself to a pampering appointment with us, you deserve good things! Our soothing & relaxing services have you feeling like a new person. Imagine feeling the heated water on your scalp while the shampoo scrubs away impurities. Imagine feeling more refreshed and relaxed than ever with our Indian head massage therapy.",
  
  //service-5.js
  serviceCategory5Description : "Style your nails like celebrities! Learn about trending nail design and visit our salon for a manicure today! Smile to the world with bright and healthy-looking nails. " +
  "Whatever design you want, we can do it for you. We are proud to be one of the " + seoKeyword.seoKeyword3 + " leading professional artists.",
  
  //service-6.js
  serviceCategory6Description : "We offer waxing service. Our estheticians use the latest techniques and products to ensure your hair removal experience is as smooth and gentle as possible.",

  //service-7.js
  serviceCategory7Description : "It’s time to pamper yourself and forget about the day’s stress 🌸. No question, we know that being healthy is the best beauty tip. Come have a facial with us and learn how to take care of your skin so you can look and feel beautiful everyday.",

  locationHeading: "LOCATION",
  timeScheduleHeading: "OPENING HOURS",
  
  copyrightContent: "© Copyright and Powered by Best Salon Marketing",
  copyrightWebsiteLink : "https://bestsalonmarketing.com",
}



const button = {
  //Các nút trên website
  button1Content: "Learn more",
  button1LinkToMobile: "#m-section-1",
  button1LinkToTablet: "#t-section-1",
  button1LinkToDesktop: "#d-section-1",

  button2Content: "View Our Services",
  button2LinkTo: menu.linkToMainMenu4,

  button3Content : "Book Appointment",
  button3LinkTo : menu.linkToMainMenu3,

  button4Content : "Find us",
  button4LinkTo : changedInfo.linkToMap,

  button5Content : "Full list of our services",
  button5LinkTo : menu.linkToMainMenu4,

  button6Content : "View details services",
  button6LinkToMobile : "/services/#m-service-list-1",
  button6LinkToTablet : "/services/#t-service-list-1",
  button6LinkToDesktop : "/services/#d-service-list-1",
  
  button7Content : "View details services",
  button7LinkToMobile : "/services/#m-service-list-2",
  button7LinkToTablet : "/services/#t-service-list-2",
  button7LinkToDesktop : "/services/#d-service-list-2",
  
  button8Content : "View details services",
  button8LinkToMobile : "/services/#m-service-list-3",
  button8LinkToTablet : "/services/#t-service-list-3",
  button8LinkToDesktop : "/services/#d-service-list-3",
  
  button9Content : "View details services",
  button9LinkToMobile : "/services/#m-service-list-4",
  button9LinkToTablet : "/services/#t-service-list-4",
  button9LinkToDesktop : "/services/#d-service-list-4",
  
  button10Content : "View details services",
  button10LinkToMobile : "/services/#m-service-list-5",
  button10LinkToTablet : "/services/#t-service-list-5",
  button10LinkToDesktop : "/services/#d-service-list-5",
  
  button11Content : "View details services",
  button11LinkToMobile : "/services/#m-service-list-6",
  button11LinkToTablet : "/services/#t-service-list-6",
  button11LinkToDesktop : "/services/#d-service-list-6",

  button12Content : "View details services",
  button12LinkToMobile : "/services/#m-service-list-7",
  button12LinkToTablet : "/services/#t-service-list-7",
  button12LinkToDesktop : "/services/#d-service-list-7",
}

const images = {
  //Ảnh ở Homepage carousel
  mobileCarouselImage1 : "/images/mobile-nail-salon-happy-customer-1.jpg",
  mobileCarouselImage2 : "/images/mobile-nail-salon-happy-customer-2.jpg",
  mobileCarouselImage3 : "/images/mobile-nail-salon-happy-customer-3.jpg",

  tabletCarouselImage1 : "/images/tablet-nail-salon-happy-customer-1.jpg",
  tabletCarouselImage2 : "/images/tablet-nail-salon-happy-customer-2.jpg",
  tabletCarouselImage3 : "/images/tablet-nail-salon-happy-customer-3.jpg",

  desktopCarouselImage1 : "/images/desktop-nail-salon-happy-customer-1.jpg",
  desktopCarouselImage2 : "/images/desktop-nail-salon-happy-customer-2.jpg",
  desktopCarouselImage3 : "/images/desktop-nail-salon-happy-customer-3.jpg",
      //Ảnh ở Homepage khi vuốt xuống
  section5Image1 : "/images/nail-extension-1.jpg",

  section6Image1 : "/images/nail-extension-2.jpg",

  section7Image1 : "/images/nail-extension-3.jpg",
  section7Image2 : "/images/nail-extension-4.jpg",

  LocationImage1 : "/images/nail-extension-11.jpg",

  serviceList1Image1 : "/images/nail-extension-5.jpg",
  serviceList1Image2 : "/images/nail-extension-6.jpg",
  serviceList1Image3 : "/images/nail-extension-7.jpg",
  serviceList1Image4 : "/images/nail-extension-8.jpg",
  serviceList1Image5 : "/images/nail-extension-9.jpg",

  serviceList2Image1 : "/images/gel-nails-shellac-nails-1.jpg",
  serviceList2Image2 : "/images/gel-nails-shellac-nails-2.jpg",
  serviceList2Image3 : "/images/gel-nails-shellac-nails-3.jpg",
  serviceList2Image4 : "/images/gel-nails-shellac-nails-4.jpg",
  serviceList2Image5 : "/images/gel-nails-shellac-nails-5.jpg",
  
  serviceList3Image1 : "/images/pedicure-1.jpg",
  serviceList3Image2 : "/images/pedicure-2.jpg",
  serviceList3Image3 : "/images/pedicure-3.jpg",
  serviceList3Image4 : "/images/pedicure-4.jpg",
  serviceList3Image5 : "/images/pedicure-5.jpg",

  serviceList4Image1 : "/images/hair-wash-1.jpg",
  serviceList4Image2 : "/images/hair-wash-2.jpg",
  serviceList4Image3 : "/images/hair-wash-3.jpg",
  serviceList4Image4 : "/images/hair-wash-4.jpg",
  serviceList4Image5 : "/images/hair-wash-5.jpg",

  serviceList5Image1 : "/images/nail-design-1.jpg",
  serviceList5Image2 : "/images/nail-design-2.jpg",
  serviceList5Image3 : "/images/nail-design-3.jpg",
  serviceList5Image4 : "/images/nail-design-4.jpg",
  serviceList5Image5 : "/images/nail-design-5.jpg",

  serviceList6Image1 : "/images/waxing-1-1.jpg",
  serviceList6Image2 : "/images/waxing-2-1.jpg",
  serviceList6Image3 : "/images/waxing-3-1.jpg",
  serviceList6Image4 : "",
  serviceList6Image5 : "",

  serviceList7Image1 : "/images/facial-1.jpg",
  serviceList7Image2 : "/images/facial-2.jpg",
  serviceList7Image3 : "/images/facial-3.jpg",
  serviceList7Image4 : "/images/facial-4.jpg",
  serviceList7Image5 : "/images/facial-5.jpg",

  //Ảnh trang about cho 3 giao diện

  mobileAboutUsImage1 : "/images/mobile-nail-salon-1.jpg",
  mobileAboutUsImage2 : "/images/mobile-nail-salon-2.jpg",
  mobileAboutUsImage3 : "/images/mobile-nail-salon-3.jpg",

  tabletAboutUsImage1 : "/images/tablet-nail-salon-1.jpg",
  tabletAboutUsImage2 : "/images/tablet-nail-salon-2.jpg",
  tabletAboutUsImage3 : "/images/tablet-nail-salon-3.jpg",

  desktopAboutUsImage1 : "/images/desktop-nail-salon-1.jpg",
  desktopAboutUsImage2 : "/images/desktop-nail-salon-2.jpg",
  desktopAboutUsImage3 : "/images/desktop-nail-salon-3.jpg",

  desktopAboutUsDongVienImage1 : "/images/nail-extension-15.jpg",
  desktopAboutUsDongVienImage2 : "/images/nail-extension-16.jpg",
  desktopAboutUsDongVienImage3 : "/images/nail-extension-17.jpg",

    //Ảnh cho phần động viên
  section1Image1 : "/images/nail-extension-18.jpg",
  section2Image1 : "/images/nail-extension-19.jpg",
  section3Image1: "/images/nail-extension-20.jpg",

  //Thanh Mobile Bottom Nav
  BottomNavButton1Icon : "/images/icons/icon-home.png",
  BottomNavButton1Content : "Home",
  BottomNavButton1LinkTo : "/",

  BottomNavButton2Icon : "/images/icons/icon-bussiness-services.png",
  BottomNavButton2Content : "Services",
  BottomNavButton2LinkTo : "/services",

  BottomNavButton3Icon : "/images/icons/icon-contact.png",
  BottomNavButton3Content : "Appointment now",  //Cái này chưa cho vào vì bị xuống dòng
  BottomNavButton3LinkTo : "",

  //Ảnh customer review - customer-review.js
  cusReviewImage1 : "/images/nail-salon-customer-review-1.jpg",
  cusReviewImage2 : "/images/nail-salon-customer-review-2.jpg",
  cusReviewImage3 : "/images/nail-salon-customer-review-3.jpg",
  cusReviewImage4 : "/images/nail-salon-customer-review-4.jpg",
  cusReviewImage5 : "/images/nail-salon-customer-review-5.jpg",


  //Ảnh Footer
  footerImagePhoneIcon : "/images/icons/icon-phone-product.png",
  footerImageMapPointerIcon : "/images/icons/icon-google-maps-pointer.png",

  //Phần footer copyright
  //Phần này có thể chuyển sang chỗ khác
}



    
  
  //Danh sách các dịch vụ
  const serviceList1 = {
    service1 : "Acrylic Fullset with normal nail polish",
    service1Time : "45 mins",
    service1Price : "35",
    service1Description : "Acrylics are a combination of a liquid monomer and a powder polymer that form a paste which is bonded to the natural nail. It's then given the desired shape, where it hardens in place to add strength, length, and thickness to the nail. Our " + seoKeyword.seoKeyword7 + " service help your hands shine by adding a little length to your natural nail. If you're ready for flawless, fierce nails, let the nail technicians at this salon lend their talent and artistry to your tips.",

    service2 : "Acrylic Infill with normal nail polish",
    service2Time : "35 mins",
    service2Price : "25",
    service2Description : "Infills are done when the natural part of your nail starts to show at the bottom of your fake nail. Instead of having all your nails taken off and redone, you just have the natural part filled in with acrylic or gel powder. Nail refills are recommended around 3 to 4 weeks from the date of the initial application. A quick nail refill is the best way to make the most of your nail extensions.",
  
    service3 : "Acrylic Full Set with Shellac",
    service3Time : "1 hr",
    service3Price : "42",
    service3Description : "When you're getting a full set of acrylics, the nail technician will usually put on tips, (or use nail forms to achieve a more natural look) Each acrylic is then shaped as desired and painted with polish. Our " + seoKeyword.seoKeyword7 + " service help your hands shine by adding a little length to your natural nail. If you're ready for flawless, fierce nails, let the nail technicians at this salon lend their talent and artistry to your tips.",
 
    service4 : "Acrylic Infill with Shellac",
    service4Time : "45 mins",
    service4Price : "32",
    service4Description : "Infills are done when the natural part of your nail starts to show at the bottom of your fake nail. Instead of having all your nails taken off and redone, you just have the natural part filled in with acrylic or gel powder. Nail refills are recommended around 3 to 4 weeks from the date of the initial application. A quick nail refill is the best way to make the most of your nail extensions.",
  
    service5 : "Gel Powder Full Set with normal nail polish",
    service5Time : "45 mins",
    service5Price : "38",
    service5Description : "Our " + seoKeyword.seoKeyword7 + " service help your hands shine by adding a little length to your natural nail. If you're ready for flawless, fierce nails, let the nail technicians at this salon lend their talent and artistry to your tips.",
  
    service6 : "Gel Powder Infill with normal nail polish",
    service6Time : "45 mins",
    service6Price : "28",
    service6Description : "Nail refills are recommended around 3 to 4 weeks from the date of the initial application. A quick nail refill is the best way to make the most of your nail extensions.",
  
    service7 : "Full Set Pink & White",
    service7Time : "45 mins",
    service7Price : "45",
    service7Description : "Prepare to take all the compliments you’re lately getting. We’ve just added a new extension option for our clients: Pink and White! Chances are you know someone who loves the look, because it’s been trending for a while now. Now, with our " + seoKeyword.seoKeyword2 +" making it possible to infuse this unconventional color into your look – we’ve opened up an entire new world of possibilities.",

    service8 : "Infill Pink & White",
    service8Time : "45 mins",
    service8Price : "35",
    service8Description : "This is our nail salon service that involves filling in the gaps of previously applied pink and white acrylic nails. This process helps to maintain the appearance and prolong the life of your nails",

    service9 : "Full Set Ombre",
    service9Time : "45 mins",
    service9Price : "45",
    service9Description : "You could be the Queen of the Ombre nails, with the right technique. The technicians at our " + seoKeyword.seoKeyword2 + " will masterfully blend one color into another, creating a unique and beautiful look, and adding it to your finger tips.",

    service10 : "Infill Ombre",
    service10Time : "45 mins",
    service10Price : "35",
    service10Description : "Nail refills are recommended around 3 to 4 weeks from the date of the initial application. A quick nail refill is the best way to make the most of your nail extensions.",

    service11 : "Full Set Colour Powder",
    service11Time : "45 mins",
    service11Price : "30",
    service11Description : "Our " + seoKeyword.seoKeyword7 + " service help your hands shine by adding a little length to your natural nail. If you're ready for flawless, fierce nails, let the nail technicians at this salon lend their talent and artistry to your tips.",
  
    service12 : "Infill Colour Powder (Same Colour)",
    service12Time : "45 mins",
    service12Price : "23",
    service12Description : "This is our pampering nail service that will make you fall in love with your nails all over again! It involves filling in the gaps of previously applied color powder nails with the same color powder. This helps to maintain the appearance and prolong the life of your nails, ensuring a consistent and cohesive look.",
  
    service13 : "Infill Colour Powder (Different Colour)",
    service13Time : "45 mins",
    service13Price : "25",
    service13Description : "A thrilling nail service that will make you feel refreshed and confident with a brand new color! Say goodbye to the same old look and hello to a bold new hue. Our talented technicians will fill in the gaps of your previously applied color powder nails with a stunning new shade, making you feel like you're walking on a fashion runway. Embrace the change and treat yourself to a little pampering session. You deserve it, gorgeous!",

    service14 : "Acrylic Fullset on Feet with normal nail polish",
    service14Time : "45 mins",
    service14Price : "30",
    service14Description : "An acrylic extension on your toes is just the thing to give yourself a little extra pampering. Whether you just want to do something new for your nails or you’ve been looking for an excuse to treat yo-self. This could be a great option for you",
  
    service15 : "Acrylic Infill on Feet with normal nail polish",
    service15Time : "45 mins",
    service15Price : "30",
    service15Description : "Our talented technicians will fill in the gaps of your previously applied acrylic nails on your feet finish with a smooth, gorgeous coat of normal nail polish. You'll leave feeling refreshed and confident with beautifully polished toes. So sit back, relax, and let us take care of you. You deserve a little self-care and pampering, lovely!",
  
    service16 : "Acrylic Fullset on Feet with Shellac",
    service16Time : "1 hr",
    service16Price : "40",
    service16Description : "With this extension on your feet, you will have them look absolutely amazing again. Get those feet painted with colours that are bright and pleasing to the eye. And when you're done, give them some extra love with a protective layer of Shellac",
  
    service17 : "Acrylic Infill on Feet with Shellac",
    service17Time : "1 hr",
    service17Price : "35",
    service17Description : "Our skilled technicians will fill in the gaps of your previously applied acrylic nails on your feet and finish with a long-lasting and glossy coat of Shellac. This service will give you a stunning and polished look that will have you walking on clouds and feeling confident all day long. So go ahead and treat yourself to a little pampering session. You deserve it, gorgeous!",
  
    service18 : "Take off Powder",
    service18Time : "20 mins",
    service18Price : "10",
    service18Description : "Just take off powder",
  
    service19 : "Take off Acrylic and Redone a Newset",
    service19Time : "1 hr",
    service19Price : "3 to 5",
    service19Description : "Extra from £3 to £5",
  
    service20 : "Take off Powder and Polish",
    service20Time : "30 mins",
    service20Price : "18",
    service20Description : "Our technicians will carefully remove your old powder coating, leaving your nails refreshed and rejuvenated. And that's just the beginning! To finish, we'll treat you to a beautiful new color of normal nail polish, expertly applied to make sure your nails are left looking their best. Embrace the indulgence of this service and fall in love with your beautiful nails all over again!",
  
    service21 : "Take off Powder + Shellac",
    service21Time : "30 mins",
    service21Price : "30",
    service21Description : "Say goodbye to your old nail polish and hello to stunning, long-lasting color with a high-gloss finish. Our expert technicians will gently remove your old powder and apply a fresh layer of Shellac, leaving you with gorgeous nails that will make you feel confident and beautiful. Love yourself and embrace your femininity with this luxurious nail treatment.",
  
    service22 : "Take off Powder + Manicure + Shellac",
    service22Time : "50 mins",
    service22Price : "35",
    service22Description : "Our expert technicians will start by gently removing any existing powder, then shape and buff your nails for a smooth, even surface. Next, a relaxing manicure will leave your hands feeling refreshed and rejuvenated. Finally, we'll finish with a glossy and long-lasting Shellac polish, ensuring your nails stay looking stunning for weeks to come. Treat yourself to some much-deserved love and care with this all-in-one package. You'll leave feeling rejuvenated, refreshed, and oh-so-fabulous.",
  
    service23 : "Dipping Powder SNS (from)",
    service23Time : "45 mins",
    service23Price : "36",
    service23Description : "SNS Dipping Powder creates a stronger polish finish which can help strengthen brittle or weak nails. This innovative treatment will leave your hands looking fabulous, while also feeling lightweight and comfortable. The delicate touch of femininity will make you fall in love with yourself all over again. Indulge in a little pampering, and let our skilled technicians bring out the best in your nails. Get ready to feel confident, stylish, and beautiful with our Dipping Powder SNS.",
  
    service24 : "BIAB buider gel Fullset",
    service24Time : "35 mins",
    service24Price : "35",
    service24Description : "This service will leave your nails looking stunning and fabulous, making you feel confident and beautiful. The BIAB builder gel creates a long-lasting and durable finish for your nails, perfect for those who desire low maintenance and chip-free nails. Our skilled technicians will carefully apply the builder gel to create the look you desire, leaving you with salon-quality nails that will last for weeks. So, why not treat yourself and embrace the feeling of self-love by booking a BIAB Builder Gel Fullset today!",
  
    service25 : "BIAB buider gel Infill",
    service25Time : "40 mins",
    service25Price : "25",
    service25Description : "Our gentle and skilled technicians will ensure your nails receive the ultimate pampering, leaving them looking and feeling revitalized. Say goodbye to chips, cracks, and brittle nails, and hello to the confidence that comes with having beautiful and healthy nails. Give yourself the gift of self-care and love, and let us take care of the rest. Book your appointment today and fall in love with your nails all over again!",

    service26 : "Long nails extra",
    service26Time : "",
    service26Price : "3",
    service26Description : "Indulge in a pampering session as we expertly extend the length of your nails to give you that extra edge of confidence. With delicate and precise care, you'll leave our salon feeling absolutely gorgeous. Treat yourself to a little bit of luxury, and allow us to create a stunning set of nails that will have you feeling loved and appreciated.",

    service27 : "Single Toe Nails",
    service27Time : "",
    service27Price : "5",
    service27Description : "Give yourself the ultimate treat with a polished and stylish look for your toes. Experience a touch of luxury and let us take care of your toes with a flawless and stunning finish.",

    service28 : "Single nails repair",
    service28Time : "",
    service28Price : "5",
    service28Description : "Our talented technicians will expertly fix any imperfections, leaving your nails looking and feeling beautiful again. You deserve to feel confident and stylish with every step you take, and we are here to make sure that happens. ",

    service29 : "Take off Acrylic and Redone with normal nail polish",
    service29Time : "1 hr",
    service29Price : "40",
    service29Description : "Pamper yourself with a relaxing nail transformation that will leave you feeling refreshed and confident. Our skilled technicians will carefully remove any existing acrylic, followed by a revitalizing manicure. Finally, we will apply a stunning normal nail polish to give you a stunning and polished look. You deserve to love your nails, so come and experience the ultimate pampering session that will leave you feeling like a brand new woman!",

    service30 : "Take off Acrylic and Redone with Shellac",
    service30Time : "45 mins",
    service30Price : "47",
    service30Description : "Say goodbye to your old acrylic nails and hello to a stunning new look with the long-lasting, chip-resistant Shellac polish. With this service, you'll feel confident and beautiful with every step, while taking a break from the everyday hustle and bustle. Show yourself some love and treat your nails to the ultimate makeover. You deserve it!",

    service31 : "Take off Ombre and Redone Ombre Fullset",
    service31Time : "1 hr",
    service31Price : "40",
    service31Description : "Our talented technicians will carefully remove your current ombre look and transform your nails into a stunning work of art with a new and refreshed ombre design. You'll feel like a brand new woman, ready to conquer the world with confidence and grace. Love yourself and your nails with our expert touch.",

    service32 : "Dipping Powder SNS infill",
    service32Time : "40 mins",
    service32Price : "30",
    service32Description : "This pampering session will leave your nails looking and feeling fabulous. With its long-lasting and lightweight formula, you can enjoy a polished and sophisticated look every day without worrying about any damage to your natural nails. Our professional technicians will take the time to carefully apply the dipping powder, ensuring a flawless finish. Our goal is to make you feel confident and beautiful, and that starts with stunning nails. Book your appointment today and treat yourself to a truly unforgettable experience.",

    service33 : "Take off and Redone Dipping Powder SNS",
    service33Time : "1 hr",
    service33Price : "40",
    service33Description : "Our skilled nail technicians will effortlessly remove your current dip powder and create stunning new nails that will leave you feeling confident and beautiful. With a soft and feminine touch, our technicians will work to create a look that perfectly matches your personal style and enhances your natural beauty. Trust us to provide the ultimate care and attention to detail, leaving you with gorgeous, long-lasting nails that will have you feeling love for yourself.",

    service34 : "Take off and Redone Acrylic Fullset on Feet with normal nail polish",
    service34Time : "1 hr",
    service34Price : "40",
    service34Description : "Let us transform your tired, dull feet into a stunning work of art. Our professional technicians use only the finest products to give you a pedicure that will leave you feeling refreshed, rejuvenated and ready to show off your beautiful feet. Love yourself, love your feet and treat yourself to our luxurious Take off and Redone Acrylic Fullset on Feet with normal nail polish today!",

    service35 : "Take off and Redone Acrylic Fullset on Feet with Shellac",
    service35Time : "1 hr 15 mins",
    service35Price : "45",
    service35Description : "Our skilled technicians will carefully remove your old acrylic nails and redo a fullset using the latest Shellac technology. This long-lasting, glossy formula will leave your feet looking fabulous for weeks to come. Pamper yourself and show some love to your feet by letting us take care of your nails. Trust us, you'll feel like a brand new woman with this indulgent experience. Book your appointment now and step into a world of comfort, relaxation and beauty.",

    service36 : "Take off Powder and Manicure with normal polish",
    service36Time : "35 mins",
    service36Price : "25",
    service36Description : "Say hello to refreshed and beautifully polished nails that will make you feel confident and beautiful. Allow our skilled technicians to give you a luxurious spa experience, leaving you with stunning nails that will make you feel pampered and loved. Let us help you fall in love with yourself again, book your appointment now!",

    service37 : "Take off and Redone Colour Powder",
    servicce37Time : "60 mins",
    service37Price : "37",
    service37Description : "The ultimate treat for your nails! Let us pamper you with a luxurious experience as we remove your old powder and replace it with a new and vibrant shade. Our experienced technicians will make sure your nails look stunning and feel great, making you fall in love with your own hands again. This service is perfect for those who want to switch up their nail game and add a pop of color to their daily routine. Trust us, with this service, you'll feel confident and beautiful, ready to take on the world with a new-found love for yourself!",

    service38 : "Full set Acrylic French Tip",
    service38Time : "45 mins",
    service38Price : "40",
    service38Description : "Experience the feeling of being pampered and adored as our skilled technicians transform your nails into a work of art with a classic French tip design. This full set acrylic application will leave your hands looking elegantly polished and feeling silky smooth. Embrace the essence of femininity and treat yourself to the ultimate pampering experience today!",

    service39 : "Infill Acrylic French Tip",
    service39Time : "45 mins",
    service39Price : "35",
    service39Description : "Our Infill Acrylic French Tip service is perfect for those who want to keep their nails looking fabulous! Our gentle technicians will provide you with a touch-up, bringing back the shine and glamour to your tips. With a French tip design, you will feel confident and stylish wherever you go. Pamper yourself and show off your love for beautiful nails. Treat yourself to an Infill Acrylic French Tip service today and experience the love you have for your nails.",
//Có lưu ý cần chỉnh ở dịch vụ này

    service40 : "Take off Acrylic Frech Tip and Redone Full set Acrylic French Tip",
    service40Time : "60 mins",
    service40Price : "45",
    service40Description : "Our talented technicians will gently remove your current acrylics and give you a brand new, stunning set of French tips. This service will leave you feeling refreshed and confident, with beautifully polished nails that show off your personal style. Embrace your femininity and love your nails again with this indulgent treatment. Book now for a luxurious and rejuvenating experience!",

    //Có lưu ý cần chỉnh ở dịch vụ này
    
    service41 : "Take off and Renew Pink & White",
    service41Time : "60 mins",
    service41Price : "45",
    service41Description : "The perfect way to pamper yourself and show some love to your hands. With a gentle removal of your old pink & white design and a brand new application, your nails will look refreshed and rejuvenated. Let our skilled technicians make you feel beautiful and confident with a long-lasting, flawless finish. Treat yourself to a luxurious experience and indulge in the love and care that your hands deserve.",

    service43 : "XXL Long nails extra",
    service43Time : "",
    service43Price : "15",
    service43Description : "",

    service44 : "XL Long nails extra",
    service44Time : "",
    service44Price : "10",
    service44Description : "",

    service45 : "Take off Powder and Pedicure with normal polish",
    service45Time : "35 mins",
    service45Price : "30",
    service45Description : "",

    service46 : "Take off Powder and Pedicure with gel polich",
    service46Time : "35 mins",
    service46Price : "35",
    service46Description : "",

    service47 : "Infill Colour Powder",
    service47Time : "45 mins",
    service47Price : "25",
    service47Description : "",

    service48 : "COMBO TAKE OFF GEL COLOUR & COMBO GEL MANICURE & GEL PEDICURE",
    service48Time : "1 hr 20 mins",
    service48Price : "65",
    service48Description : "",

    service49 : "Take off and Renew Acrylic Powder",
    service49Time : "50 mins",
    service49Price : "30",
    service49Description : "",

    service50 : "Take off Gel Colour and Gel Colour Manicure",
    service50Time : "40 mins",
    service50Price : "30",
    service50Description : "",

    service51 : "Single Big Toe Extension",
    service51Time : "10 mins",
    service51Price : "5",
    service51Description : "",

    service52 : "High skill French tips",
    service52Time : "10 mins",
    service52Price : "5",
    service52Description : "",

    service53 : "French tip",
    service53Time : "10 mins",
    service53Price : "5",
    service53Description : "",

    service54 : "TAKE OFF GEL COLOUR & MANICURE (Normal colour)",
    service54Time : "50 mins ",
    service54Price : "23",
    service54Description : "",

    service56 : "Take off and Redone BIAB",
    service56Time : "35 mins",
    service56Price : "38",
    service56Description : "Our expert technicians will expertly remove your old manicure and replace it with a brand new BIAB gel manicure that will leave your nails looking and feeling refreshed. We understand the importance of self-care and making time for yourself, and our service will help you love and appreciate yourself even more. Our nurturing and personalized approach will make you feel pampered and confident, so why wait? Book your appointment now and experience the ultimate nail transformation.",

    service58 : "Acrylic Fullset without Polish",
    service58Time : "35 mins",
    service58Price : "32",
    service58Description : "This luxurious treatment will leave your nails looking stunning and perfectly shaped. Our experienced technicians will ensure that your hands are pampered and taken care of, giving you a stunning set of nails that will leave you feeling confident and beautiful. ",

    service59 : "Gel Powder Fullset without Polish",
    service59Time : "35 mins",
    service59Price : "35",
    service59Description : "Let our skilled technicians transform your nails into a beautiful, long-lasting masterpiece. With a gentle touch and eye for detail, they will give you a gorgeous set of nails that are durable, yet gentle on your natural nails. And best of all, you won't have to worry about regular touch-ups or polishing",

    service60: "Gel Powder Fullset with Shellac",
    service60Time : "45 mins",
    service60Price : "45",
    service60Description : "Our talented technicians will carefully apply a gel powder fullset, followed by a glossy Shellac color of your choice. You will fall in love with the stunning results, and feel confident and beautiful with every glance at your hands. Allow yourself to be pampered and treated like royalty, as you indulge in a bit of self-care and show love to yourself. Give in to the temptation of beautiful, vibrant nails that will leave you feeling confident and stunning.",

    service61 : "Take off Acrylic and Redone Acrylic Fullset without Polish",
    service61Time : "45 mins",
    service61Price : "37",
    service61Description : "Get pampered as we remove your old acrylic and transform your nails with a stunning new fullset. Embrace your natural beauty and feel confident in your newly refreshed nails, without the added polish. Our professional technicians use high-quality products to provide a safe and seamless service, ensuring you leave with the gorgeous nails you deserve.",

    service62 : "Take off Gel Powder and Redone without Polish",
    service62Time : "50 mins",
    service62Price : "40", 
    service62Description : "This service is perfect for women who want to maintain the beauty of their nails and feel confident with their appearance. The process is simple, convenient, and will leave you feeling refreshed and rejuvenated. Embrace the love for yourself with our Take off Gel Powder and Redone without Polish service and feel the difference in your nails and your confidence.",
 
    service63 : "Take off Gel Powder and Redone with Polish",
    service63Time : "50 mins",
    service63Price : "43",
    service63Description : "Our talented technicians will carefully remove your old gel powder and transform your nails with a fresh new set. This service includes a beautiful polish of your choice to complete the look. You'll love the confidence boost that comes with perfectly styled nails. Indulge in a moment of self-care and love your nails again with this service.",

    service64 : "Take off Gel Powder and Redone with Shellac",
    service64Time : "60 mins",
    service64Price : "50",
    service64Description : "Our professional technicians will gently remove your gel powder and redo your manicure with a perfect finish using the latest Shellac technology. Trust us, you'll love the way your nails look and feel. Indulge in a little pampering and boost your confidence with a gorgeous manicure. Love yourself, love your nails!",

    service65 : "Acrylic Infill without Polish",
    service65Time : "35 mins",
    service65Price : "22",
    service65Description : "Perfect for women who love to keep their nails looking gorgeous, this treatment will make you feel confident and stylish at all times. Our experienced technicians will expertly infill your acrylic nails, giving you a polished and well-maintained appearance. With this service, you will love your nails more than ever and feel proud to show them off. Book now to experience the magic of perfectly maintained acrylic nails, and fall in love with your own reflection.",

    service66 : "Gel Powder Infill without Polish",
    service66Time : "35 mins",
    service66Price : "25",
    service66Description : "Our expert technicians will rejuvenate your nails, bringing back their luster and radiance. You deserve to feel confident and beautiful, and with this service, you can love your nails just as much as you love yourself. Trust us to give you the pampering and care you deserve, leaving you feeling refreshed and renewed.",

    service67 : "Full Set Glitter Powder",
    service67Time : "45 mins",
    service67Price : "45",
    service67Description : "Treat yourself to a dazzling look with our nail salon service! Perfect for adding some sparkle to your life, our professional nail technicians will pamper you from start to finish, giving you a set of nails that will have you feeling confident and glamorous. With our feminine touch, we will bring out the best in you, making you feel pampered and adored. Whether you're looking to make a statement or just add a touch of glamour to your everyday look, our Full Set Glitter Powder is the perfect choice. So why wait? Book your appointment today and love your beautiful nails!",

    service68 : "Infill Glitter Powder",
    service68Time : "45 mins",
    service68Price : "35",
    service68Description : "Unleash your inner sparkle with our nails service. Perfect for adding a touch of glamour to your already fabulous look, our expert technicians will carefully infill your nails with the latest in glitter powder technology, giving you a stunning, attention-grabbing manicure that you'll absolutely adore. Embrace your feminine side and love the way you feel with our nails service.",

    service69 : "Full Set Permanent white tip",
    service69Time : "35 mins",
    service69Price : "35",
    service69Description : "Treat yourself to a luxurious Full Set Permanent White Tip Nail Service at our salon. Embrace your femininity and love for sophistication with beautifully crafted white tips that will last for weeks. Our experienced technicians will make sure each nail is perfectly shaped and the white tips are applied seamlessly. Indulge in a spa-like experience and fall in love with your refreshed, polished look. Embrace your natural beauty with confidence and walk away feeling rejuvenated and pampered. Your beauty deserves the best and we are here to provide just that!",

    service70 : "Take off Acrylic + Shellac",
    service70Time : "40 mins",
    service70Price : "32",
    service70Description : "Say farewell to tired, worn out nails and embrace the beauty of a refreshed and revitalized set of nails. Our skilled technicians will carefully remove any Acrylic and Shellac, leaving your nails feeling rejuvenated. Indulge in the luxurious feeling of silky smooth, nourished nails that radiate confidence and beauty. Love the skin you're in and celebrate your natural beauty with our service.",

    service71 : "Take off Builder gel and Redone a Newset",
    service71Time : "60 mins ",
    service71Price : "38",
    service71Description : " Give yourself a fresh start with stunning nails! Our skilled technicians will gently remove your builder gel and replace it with a new set, leaving you with a stunning manicure that will make you feel confident and beautiful. Our mission is to help you fall in love with your nails again and enjoy a stress-free, pampering experience. Trust us to provide you with the best care and attention to detail, and embrace the feeling of renewed beauty.",

    service72 : "Take off Acrylic + BIAB gel",
    service72Time : "45 mins",
    service72Price : "43",
    service72Description : "Perfect for women who value their beauty and well-being, this service will help you bid farewell to old and worn-out nail enhancements and welcome a refreshed, rejuvenated look. Our experienced technicians will meticulously remove your current acrylic or BIAB gel with care and precision, leaving you with a blank canvas ready for a new, gorgeous set of nails. Pamper yourself and love the skin you're in with this must-have beauty service.",

    service73 : "Take off Gel Polish",
    service73Time : "10 mins",
    service73Price : "8",
    service73Description : "Our skilled technicians will carefully remove your old gel polish, leaving your nails feeling refreshed and rejuvenated. You'll love the way your nails look and feel after our expert treatment. Our gentle and nurturing approach is sure to leave you feeling confident and beautiful.",

    service74 : "Take off BIAB Gel",
    service74Time : "15 mins",
    service74Price : "10",
    service74Description : "Treat yourself to a luxurious pampering experience with our nail salon service. Our skilled technicians will carefully remove your BIAB gel, leaving your nails looking refreshed and renewed. This service is perfect for those who want to switch up their style or simply want to give their nails some much-needed TLC (Treat Love & Color).",

    service75 : "Take off Acrylic",
    service75Time : "12 mins",
    service75Price : "12",
    service75Description : "Say hello to a refreshed and rejuvenated look for your nails. Our expert technicians will gently remove your old acrylic, leaving your nails feeling revitalized. Embrace the love and care you deserve with our gentle, yet effective, process.",

    service76 : "Gel Powder Infill with Shellac",
    service76Time : "45 mins",
    service76Price : "35",
    service76Description : "Say hello to a perfect set of nails that not only look gorgeous, but also last for weeks. Our professional technicians use only the finest products to make sure your nails are strong, healthy, and have an amazing shine. Indulge in a relaxing nail care session that leaves you feeling confident, refreshed and ready to take on the world.",


    }; 
  
  const serviceList2 = {
    service1 : "Nail shape with Shellac polish",
    service1Time : "25 mins",
    service1Price : "25",
    service1Description : "Let us transform your nails into perfectly shaped works of art, while long-lasting Shellac polish adds a pop of vibrant color to your fingertips. You'll feel confident and beautiful with every hand gesture, making you fall in love with yourself all over again.",

    service2 : "Nail shape with Shellac nails on feet",
    service2Time : "30 mins",
    service2Price : "20",
    service2Description : "Our expert technicians will shape and polish your toes to perfection, leaving you with beautifully polished and well-groomed feet. With the long-lasting, chip-resistant Shellac polish, you can enjoy your stunning feet for weeks to come. Give yourself the gift of self-care and feel confident and stylish with every step.",
  
    service3 : "Manicure Shellac",
    service3Time : "30 mins",
    service3Price : "30",
    service3Description : "Manicures are a difficult art to master. No matter how great they look when finished, they seem to always chip within days, if not in a matter of hours. Enter the Gel nail manicure - a groundbreaking technique that uses gel polishes that get 'cured' under UV lights. The result? Shiny, strong nails for weeks and no drying time!",

    service4 : "Pedicure Shellac",
    service4Time : "45 mins",
    service4Price : "40",
    service4Description : "Highly recommended with Gel Colour. Last longer and less likely to chip! Fries instantly so you don't have to worry about smudging it.",
  
    service5 : "Gel Polish Manicure & Pedicure",
    service5Time : "1 hr 25 mins",
    service5Price : "60",
    service5Description : "Manicure includes massage, cuticle, shaping, file, polish and moisturiser. Pedicure includes scrub, dead skin, cuticle, massage, moisturise, shape, file and polish. Shellac pedicure and manicure lasts up to two weeks, it’s well worth the wait.",
  
    service6 : "Take off shellac and Redone Gel Polish on Hand",
    service6Time : "30 mins",
    service6Price : "28",
    service6Description : "Pamper yourself with a polished and refreshed look for your nails. Our expert technicians will expertly remove your old shellac and reapply a beautiful gel polish that will leave your hands looking stunning and feeling silky smooth. Treat yourself to a little self-love and let us help you fall in love with your hands all over again.",
  
    service7 : "Take off shellac and Redone Gel Polish on Feet",
    service7Time : "40 mins",
    service7Price : "25",
    service7Description : "Our skilled technicians will expertly remove your shellac and expertly apply a new, fresh coat of gel polish for a pampered, polished look. Indulge in the self-care you deserve and show your feet some love with this rejuvenating treatment",

    service9 : "Take off shellac and Redone Normal Polish on Hand",
    service9Time : "30 mins",
    service9Price : "20",
    service9Description : "Our expert technicians will carefully remove your old shellac and flawlessly reapply a normal polish that will leave your hands looking and feeling refreshed. ",

    service10 : "Take off shellac and Redone Normal Polish on Feet",
    service10Time : "40 mins",
    service10Price : "20",
    service10Description : "Give your tired feet the break they deserve and step out with confidence and style. Our professional technicians will gently remove your old shellac and give your feet a makeover with a stunning new normal polish. Enjoy the feeling of silky smooth feet and bask in the glow of a refreshed, polished look.",

     service11 : "",
     service11Time : "45 mins",
     service11Price : "35",
     service11Description :"",

  };
  
  const serviceList3 = {
    service1 : "Manicure with normal polish",
    service1Time : "30 mins",
    service1Price : "20",
    service1Description : "A manicure is a cosmetic beauty treatment for the fingernails and hands performed at home or in a nail salon. A manicure consists of filing and shaping the free edge, pushing and clipping (with a cuticle pusher and cuticle nippers) any nonliving tissue (but limited to the cuticle and hangnails), treatments with various liquids, massage of the hand, and the application of fingernail polish. When the same is applied to the toenails and feet, the treatment is referred to as a pedicure. A classic manicure is all you need to take great care of your hands and nails. Includes massage, cuticle, shaping, file, polish and moisturiser.",

    service2 : "Pedicure with normal polish",
    service2Time : "40 mins",
    service2Price : "35",
    service2Description : "A classic pedicure is all you need to take great care of your feet and nails. Includes scrub, dead skin, cuticle, massage, moisturise, shape, file and polish.",
  
    service3 : "Gel Colour Luxury Pedicure",
    service3Time : "45 mins",
    service3Price : "40",
    service3Description : "Get healthy, happy feet with the help of VOESH's Pedi in a Box Deluxe 4-Step pedicure system. This single-use pedicure kit contains a sea salt soak, sugar scrub, mud masque, and massage butter to detoxify, exfoliate, cleanse, and hydrate your skin. Plus Disposable Pedicure Pro Pack for use at the treatment or you can bring it home.",

    service4 : "Manicure & Pedicure with normal polish",
    service4Time : "1 hr 15 mins",
    service4Price : "45",
    service4Description : "Manicure includes massage, cuticle, shaping, file, polish and moisturiser. Pedicure includes scrub, dead skin, cuticle, massage, moisturise, shape, file and polish.",
 
    service5 : "Men's Manicure & Pedicure",
    service5Time : "1 hr 15 mins",
    service5Price : "40",
    service5Description : "Manicure includes massage, cuticle, shaping, file, polish and moisturiser. Pedicure includes scrub, dead skin, cuticle, massage, moisturise, shape, file and polish.",

    service6 : "Shape & paint on hands",
    service6Time : "15 mins",
    service6Price : "10",
    service6Description : "Want to show off your individuality? Come to " + changedInfo.businessName + " to paint on your nails with designs from experts at our " + seoKeyword.seoKeyword1,
  
    service7 : "Shape & paint on toes",
    service7Time : "15 mins",
    service7Price : "15",
    service7Description : "Fancy something a little different? Head into our " + seoKeyword.seoKeyword2 + " for new ways to choose the perfect colour for your toes. Pick from a range of colours or go for an intricate design on your toe nails.",

    service8 : "Smoothing Pedicure with normal polish",
    service8Time : "45 mins",
    service8Price : "35",
    service8Description : "Starting with a Mineral Herbal Bath Soak then followed by a gentle massage and exfoliation with natural Body Liquid Lufra.After nails and cuticles are carefully trimmed and shape, heels are treated with all spice berry solution. Finish with a traditional lower leg message using body Smoother solution leaving your skin feeling silky",

    service9 : "Smoothing Pedicure with gel polish",
    service9Time : "45 mins",
    service9Price : "40",
    service9Description : "Starting with a Mineral Herbal Bath Soak then followed by a gentle massage and exfoliation with natural Body Liquid Lufra.After nails and cuticles are carefully trimmed and shape, heels are treated with all spice berry solution. Finish with a traditional lower leg message using body Smoother solution leaving your skin feeling silky",

    service10 : "Icedancer Pedicure with normal polish",
    service10Time : "50 mins",
    service10Price : "40",
    service10Description : "Your feet have been longawaiting for rejuvenating pedicur. Say ahh… to a warm whirlpool soaking with Mineral Herbal Bath. Then a gentle massage and Walnut Husk Liquid Body Lufra exfoliation.While regular pedicure components are tented, a calf massage with the Invigorating Icedancer and steamy towel wrap are added for restoring vitality and energizing the legs. Dry heel are also treated with an all Spice Berry Sole Solution. Finish with a soft yet intense hydrating Baobab Body Butter for an ultimate experience.",

    service11 : "Icedancer Pedicure with gel polish",
    service11Time : "50 mins",
    service11Price : "45",
    service11Description : "Your feet have been longawaiting for rejuvenating pedicur. Say ahh… to a warm whirlpool soaking with Mineral Herbal Bath. Then a gentle massage and Walnut Husk Liquid Body Lufra exfoliation.While regular pedicure components are tented, a calf massage with the Invigorating Icedancer and steamy towel wrap are added for restoring vitality and energizing the legs. Dry heel are also treated with an all Spice Berry Sole Solution. Finish with a soft yet intense hydrating Baobab Body Butter for an ultimate experience.",

    service12 : "Firewalker Pedicure with normal polish",
    service12Time : "60 mins",
    service12Price : "45",
    service12Description : "Your feet have been longawaiting for rejuvenating pedicur. Say ahh… to a warm whirlpool soaking with Mineral Herbal Bath. Then a gentle massage and Walnut Husk Liquid Body Lufra exfoliation.While regular pedicure components are tented, a calf massage with the Invigorating Icedancer and steamy towel wrap are added for restoring vitality and energizing the legs. Dry heel are also treated with an all Spice Berry Sole Solution. Finish with a soft yet intense hydrating Baobab Body Butter for an ultimate experience.",

    service13 : "Firewalker Pedicure with gel polish",
    service13Time : "60 mins",
    service13Price : "50",
    service13Description : "Your feet have been longawaiting for rejuvenating pedicur. Say ahh… to a warm whirlpool soaking with Mineral Herbal Bath. Then a gentle massage and Walnut Husk Liquid Body Lufra exfoliation.While regular pedicure components are tented, a calf massage with the Invigorating Icedancer and steamy towel wrap are added for restoring vitality and energizing the legs. Dry heel are also treated with an all Spice Berry Sole Solution. Finish with a soft yet intense hydrating Baobab Body Butter for an ultimate experience.",

    service14 : "Smoothing Manicure with normal polish",
    service14Time : "40 mins",
    service14Price : "28",
    service14Description : "Starting with a Mineral Herbal Bath Soak then followed by a gentle massage and exfoliation with natural Body Liquid Lufra.After nails and cuticles are carefully trimmed and shape, heels are treated with all spice berry solution. Finish with a traditional lower leg message using body Smoother solution leaving your skin feeling silky",

    service15 : "Smoothing Manicure with gel polish",
    service15Time : "40 mins",
    service15Price : "35",
    service15Description : "Starting with a Mineral Herbal Bath Soak then followed by a gentle massage and exfoliation with natural Body Liquid Lufra.After nails and cuticles are carefully trimmed and shape, heels are treated with all spice berry solution. Finish with a traditional lower leg message using body Smoother solution leaving your skin feeling silky",

    service16 : "Icedancer Pedicure & Manicure with normal polish",
    service16Time : "90 mins",
    service16Price : "55",
    service16Description : "Your feet & hand have been longawaiting for rejuvenating pedicure & manicure. Say ahh… to a warm whirlpool soaking with Mineral Herbal Bath. Then a gentle massage and Walnut Husk Liquid Body Lufra exfoliation.While regular pedicure components are tented, a calf massage with the Invigorating Icedancer and steamy towel wrap are added for restoring vitality and energizing the legs. Dry heel are also treated with an all Spice Berry Sole Solution. Finish with a soft yet intense hydrating Baobab Body Butter for an ultimate experience",

    service17 : "Icedancer Pedicure & Manicure with gel polish",
    service17Time : "90 mins",
    service17Price : "70",
    service17Description : "Your feet & hand have been longawaiting for rejuvenating pedicure & manicure. Say ahh… to a warm whirlpool soaking with Mineral Herbal Bath. Then a gentle massage and Walnut Husk Liquid Body Lufra exfoliation.While regular pedicure components are tented, a calf massage with the Invigorating Icedancer and steamy towel wrap are added for restoring vitality and energizing the legs. Dry heel are also treated with an all Spice Berry Sole Solution. Finish with a soft yet intense hydrating Baobab Body Butter for an ultimate experience",

    service18 : "Massage Chair Experience",
    service18Time : "30 mins",
    service18Price : "10",
    service18Description : "",

    service19 : "VOESH's Deluxe 4-step pedicure system",
    service19Time : "10 mins",
    service19Price : "10",
    service19Description : "",

    service20 : "COMBO LUXURY GEL MANICURE & GEL PEDICURE",
    service20Time : "1 hr 15 mins",
    service20Price : "60",
    service20Description : "",

    service21 : "Peficure",
    service21Time : "20 mins",
    service21Price : "15",
    service21Description : "",

    service22 : "Disposable Pedicure Pro Pack",
    service22Time : "5 mins",
    service22Price : "3",
    service22Description : "",

    service23 : "Gel Colour Luxury Manicure",
    service23Time : "40 mins",
    service23Price : "25",
    service23Description : "",

    service24 : "VIP Deluxe Pedicure",
    service24Time : "1 hr 5 mins",
    service24Price : "53",
    service24Description : "",

    service25 : "Manicure without Polish",
    service25Time : "30 mins",
    service25Price : "15",
    service25Description: "Let our professional technicians treat you to a luxurious hand care routine that will leave you feeling refreshed and rejuvenated. Say goodbye to rough, dry skin and hello to soft, smooth hands. Show yourself some love and embrace the simple elegance of a naked nail. This service is the perfect choice for those who prefer a natural look or are looking for a quick and easy upkeep between color changes. Treat yourself to a relaxing and revitalizing experience today!",
 
    service26 : "Pedicure without Polish",
    service26Time : "30 mins",
    service26Price : "30",
    service26Description : "Treat yourself to a luxurious Pedicure without Polish experience, where we'll take care of your tired feet with love and care. Our expert technicians will shape, buff, and clean your nails, leaving your feet feeling refreshed and rejuvenated. You'll love the way your feet look and feel, and you'll leave with a sense of self-love and confidence. Our goal is to make you feel beautiful from head to toe, and this Pedicure without Polish service is the perfect way to show yourself some love.",
   
    service27 : "Take Off Shellac Colour + Manicure + New Shellac Colour",
    service27Time : "45 mins",
    service27Price : "32",
    service27Description : "Our expert technicians will gently take off the shellac colour on your hand, provide a pampering manicure to give your hands the attention they deserve. And to complete the transformation, a new and trendy shellac color will be applied, leaving you feeling confident and gorgeous. Treat yourself to some much-needed self-care and love the skin you're in. Embrace the feeling of being pampered and let us take care of your beautiful nails.",

    service28 : "Take Off Shellac Colour + Pedicure + New Shellac Colour",
    service28Time : "60 mins",
    service28Price : "42",
    service28Description : "Our team of professional technicians will gently take off the shellac colour on your feet, provide a luxurious pedicure, complete with cuticle care and moisturizing to keep your feet looking and feeling their best. And, with the addition of a new shellac color, you'll walk away feeling confident and beautiful. Indulge in the ultimate in self-care and love yourself from the soles of your feet to the tips of your toes",







  };
  
  const serviceList4 = {
    service1 : "Asian Style Hair Wash, Head Massage",
    service1Time : "30 mins",
    service1Price : "35",
    service1Description : "Apart from using the highest quality products, we will apply our trademark hair wash and head massage technique, ensuring that you will enjoy the moment our hands massage into your scalp ensuring the conditioner absorbs deep into the hair shaft. The Indian head massage is extended to the neck, shoulders and upper arms. The treatment is completed by a complete head and facial rinse.",
  
    service2 : "Balance , Moisturising Shampoo",
    service2Time : "45 mins",
    service2Price : "45",
    service2Description : "Starts with a gentle hair wash and scalp massage using popular branded hair shampoo (Nu Skin shampoo avaiable if required at extra cost). The hair is rinsed in comforting warm water. A luxurious cream (Nu Skin ageLOC LumiSpa Cleanser) is then applied and gently rubbed into the face using the Nu Skin ageLOC LumiSpa device which deep cleans and invigorates the facial tissues.The Indian head massage is extended to the neck, shoulders and upper arms. The treatment is completed by a complete head and facial rinse.",
  
    service3 : "AgeLoc Nutriol Scalp & Hair Shampoo",
    service3Time : "60 mins",
    service3Price : "70",
    service3Description : "A holistic hair beauty system, Ageloc Nutriol Scalp & Hair System product contain powerfull ingredients for a scientifically advance treatment that, when combined with Ageloc Galvanise Spa, delivers instant benefits for your hair and lasting results up to your sclap. Enjoy a healthier hair appearance that looks & feels thicker, fuller, stronger, softer, shinier. Invest in hair up to your scalp, it’s the crown you wear every day!",
    
    service4 : "",
    service4Time : "50 mins",
    service4Price : "35",
    service4Description : "",
  
    service5 : "",
    service5Time : "1 hr",
    service5Price : "55",
    service5Description : "",
  }; 
  const serviceList5 = {
    service1 : "Nail Design (from)",
    service1Time : "",
    service1Price : "5",
    service1Description : "The best looking nails are made with the best nail care services from our " + seoKeyword.seoKeyword1 +". Caring for your surface is the key to keeping it looking good for as long as possible. So come on over and treat yourself today.⁣",

    service2 : "Diamond Crystal x10",
    service2Time : "",
    service2Price : "3",
    service2Description : "Allow us to pamper your nails with an extra sparkle and shine. The diamond-like crystals will leave your nails looking stunning and unique, sure to make you feel confident and beautiful. Embrace your feminine side and love the skin you're in with this elegant and sophisticated addition to your nails",

    service3 : "3D nail art (from)",
    service3Time : "",
    service3Price : "5",
    service3Description : "",

    service4 : "Three colours/five colours",
    service4Time : "",
    service4Price : "5",
    service4Description : "",

    service5 : "Nail Art - 4 nails",
    service5Time : "15 mins",
    service5Price : "10",
    service5Description : "Indulge in the ultimate self-care experience with our Nail Art service. Discover the perfect way to express your personality and style through a customized design tailored to your taste. Our talented nail artists will turn your nails into a masterpiece, making you feel confident and beautiful from tip to toe. Embrace the latest fashion trends and indulge in the luxurious feeling of well-groomed nails. Love yourself and show off your new look with pride. Experience Nail Art and fall in love with your fabulous self.",

    service6 : "Nail Art - 2 nails",
    service6Time : "10 mins",
    service6Price : "5",
    service6Description : "Indulge in the ultimate self-care experience with our Nail Art service. Discover the perfect way to express your personality and style through a customized design tailored to your taste. Our talented nail artists will turn your nails into a masterpiece, making you feel confident and beautiful from tip to toe. Embrace the latest fashion trends and indulge in the luxurious feeling of well-groomed nails. Love yourself and show off your new look with pride. Experience Nail Art and fall in love with your fabulous self.",

    service7 : "Nail Art ",
    service7Time : "",
    service7Price : "7",
    service7Description : "Indulge in the ultimate self-care experience with our Nail Art service. Discover the perfect way to express your personality and style through a customized design tailored to your taste. Our talented nail artists will turn your nails into a masterpiece, making you feel confident and beautiful from tip to toe. Embrace the latest fashion trends and indulge in the luxurious feeling of well-groomed nails. Love yourself and show off your new look with pride. Experience Nail Art and fall in love with your fabulous self.",

    service8 : "Chrome",
    service8Time : "",
    service8Price : "8",
    service8Description : "Our skilled technicians will expertly apply a layer of chrome finish to give your nails a metallic shine that will have everyone envious. From classic silver to bold and brilliant gold, we have a range of chrome colors to choose from. Embrace your feminine side and pamper yourself with a touch of glamour with Chrome Nails. Get ready to turn heads and feel confident in your skin with this chic and sophisticated manicure. Your nails deserve the best, come and visit us today!",

    service9 : "Nail tip Design",
    service9Time : "",
    service9Price : "5",
    service9Description : "You'll love the way you feel with your new stylish look. Embrace your femininity and show off your personality with confidence. Our high-quality products and expert techniques ensure long-lasting, picture-perfect results. Pamper yourself today and let us help you shine brighter than ever before!",

    service10 : "Matte top coat",
    service10Time : "",
    service10Price : "3",
    service10Description : "Let your nails speak volumes with a smooth and elegant matte finish. Experience a luxurious transformation as you fall in love with the stylish and chic look that our top coat provides. Pamper yourself and embrace the beauty of simplicity, with our expert technicians, who will cater to all your nail needs.",







  }; 
  
  const serviceList6 = {
    service1 : "Eyebrow Shape",
    service1Time : "15 mins",
    service1Price : "6",
    service1Description : "Our skilled beauty technicians will shape your eyebrows to perfection, giving you a stunning and confident look. Experience the love for yourself as you bask in compliments and feel proud of your beautifully shaped eyebrows. Get ready to fall in love with your new, bold, and gorgeous brows, and radiate confidence everywhere you go",

    service2 : "Lip waxing",
    service2Time : "15 mins",
    service2Price : "5",
    service2Description : "Our gentle and effective waxing formula leaves your lips silky smooth, enhancing your natural beauty and allowing you to feel confident and beautiful. Say hello to smooth, kissable lips with our lip waxing service. Our expert aestheticians will take care of everything, leaving you with nothing but gorgeous results. Embrace your feminine charm and love the skin you're in. ",
  
    service3 : "Chin waxing",
    service3Time : "15 mins",
    service3Price : "8",
    service3Description : "Our team of beauty experts is dedicated to making you look and feel your best, with a focus on pampering and indulging your every desire. Our Chin Waxing service will leave you with silky smooth skin that will have you feeling confident and beautiful. You'll love the way your chin looks and feels, and you'll be amazed at the compliments you receive. With our Chin Waxing service, you'll finally be able to say goodbye to chin hair and hello to radiant, glowing skin.",
  
    service4 : "Under arm waxing",
    service4Time : "15 mins",
    service4Price : "10",
    service4Description : "Our skilled technicians use gentle and effective waxing methods to leave your under arms smooth and silky. Say goodbye to stubble and hello to a refreshed and rejuvenated feeling every day. Indulge in a luxurious and self-care experience that will leave you feeling fabulous. With our under arm waxing, you'll be able to embrace every outfit and embrace your femininity with pride.",
  
    service5 : "Bikini line",
    service5Time : "20 mins",
    service5Price : "30",
    service5Description : "Let us help you enhance your natural beauty and boost your confidence with perfectly groomed bikini lines. Our gentle and effective waxing technique will leave your skin smooth and silky, making you feel pampered and refreshed. Trust us to take care of all your intimate beauty needs, and embrace your femininity with pride.",
  
    service6 : "Brazilian waxing",
    service6Time : "20 mins",
    service6Price : "25",
    service6Description : "Embrace confidence and beauty with our Brazilian Waxing services. Our skilled estheticians will provide a gentle and professional experience, leaving you feeling smooth and gorgeous from head to toe. Indulge in self-care and enhance your natural curves with perfectly sculpted and maintained skin. Cherish your body and radiate beauty with every step you take.",
  
    service7 : "Hollywood waxing",
    service7Time : "20 mins",
    service7Price : "30",
    service7Description : "",
  
    service8 : "Full leg waxing",
    service8Time : "20 mins",
    service8Price : "35",
    service8Description : "",
  
    service9 : "Half leg waxing",
    service9Time : "15 mins",
    service9Price : "24",
    service9Description : "",
  
    service10 : "Full arm waxing",
    service10Time : "20 mins",
    service10Price : "20",
    service10Description : "",
  
    service11 : "Half arm waxing",
    service11Time : "15 mins",
    service11Price : "12",
    service11Description : "",
  
    service12 : "Eye - Last Lift With Tinting",
    service12Time : "",
    service12Price : "40",
    service12Description : "PATCH TEST 24 HOURS PRIOR",
  
    service13 : "Eyebrow tinting ",
    service13Time : "20 mins",
    service13Price : "8",
    service13Description : "Our Eyebrow Tinting service will enhance your natural beauty and bring out the best in you. Experience the love and care for your eyebrows with our expert technicians using only the finest tinting products. Perfectly groomed brows can do wonders for your self-confidence and overall appearance. Let us help you embrace your beauty and feel stunning every day. ",
  
    service14 : "Eyebrow THREADING",
    service14Time : "15 mins",
    service14Price : "8",
    service14Description : "",
  
    service15 : "Lip THREADING",
    service15Time : "15 mins",
    service15Price : "6",
    service15Description : "",
  
    service16 : "Chin THREADING",
    service16Time : "15 mins",
    service16Price : "8",
    service16Description : "",

    service17 : "Eyelash tinting",
    service17Time : "20 mins",
    service17Price : "10",
    service17Description : "",

    service18 : "Henna eyebrows",
    service18Time : "15 mins",
    service18Price : "25",
    service18Description: "",

    service19 : "Face waxing",
    service19Time : "20 mins",
    service19Price : "15",
    service19Description : "",

    service20 : "Upper lip or chin",
    service20Time : "15 mins",
    service20Price : "6",
    service20Description : "",

    service21 : "Upper lip and chin",
    service21Time : "30 mins",
    service21Price : "10",
    service21Description : "",
    
    service22 : "Bikini waxing",
    service22Time : "20 mins",
    service22Price : "35",
    service22Description : "",
  };

  const serviceList7 = {
    service1 : "AgeLoc Moisturzing Refresh Mask",
    service1Time : "30 mins",
    service1Price : "35",
    service1Description : "Treat yourself to a refreshing mask that will deep cleanse, exfoliate and moisturise your facial tissues leaving you with a rejuvenated look",
  
    service2 : "AgeLoc Refreshing Mask for Oily Skin",
    service2Time : "40 mins",
    service2Price : "45",
    service2Description : "Alternatively, if you suffer from oily skin, treat yourself a refreshing face mask that will deep cleanse and remove excessive oil on from your facial tissues, leaving your skin a clean, balanced structure and a healthy looking.",

    service3 : "AgeLoc Face Lift",
    service3Time : "50 mins",
    service3Price : "55",
    service3Description : "To exfoliate dead skin, lift and tighten the facial for a firmer, more youthful appearance. We use AgeLoc Cleanse & Tone",

    service4 : "AgeLoc Anti Aging Facial",
    service4Time : "60 mins",
    service4Price : "70",
    service4Description : "Reduce fine line and restore skin to a more youthful look. Facial tissues are stimulatedfor an improved appearance. Provide facial toning, improves facial contouring, thereby making the skin look more voluminous: Tru Face, Features microcurrent technology, Clean & reduces pores.",
  }; 
  
  export { changedInfo };
  export { processedInfo };
  export { images };
  export { imageAlt };
  export { processedBusinessOpeningTime };
  export { headerInput };
  export { schemaData };
  export { menu };
  export { serviceCategory };
  export { pageContent };
  export { button };
  
  export { serviceList1 };
  export { serviceList2 };
  export { serviceList3 };
  export { serviceList4 };
  export { serviceList5 };
  export { serviceList6 };
  export { serviceList7 };

  export default function Info() {
    return (
      <>
      </>
      );
    }