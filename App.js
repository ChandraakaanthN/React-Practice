import React from "react";
import ReactDOM from "react-dom/client";
// const heading =React.createElement("h1",{id:"heading"},"React Practice by  myself");


const Header =()=>{
    return (
        <div className="header">
            <div className="logo-container"> 
                <img className="logo" src="https://webstockreview.net/images/clipart-restaurant-restaurant-logo-2.png" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>

    )
}
const stylecard={
    backgroundColor:"rgb(248,248,255)"
}

const RestuarantCard = ({ resData }) => {
    const { info } = resData;

    return (
        <div className="res-card" style={stylecard}>
            <img
                className="res-logo"
                alt="res-logo"
                src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                    info.cloudinaryImageId
                }
            />
            <h3>{info.name}</h3>
            <h4>{info.cuisines.join(", ")}</h4>
            <h4>{info.avgRating}</h4>
            <h4>{info.costForTwo}</h4>
        </div>
    );
};

const resList=[
                  {
                    "info": {
                      "id": "378344",
                      "name": "Theobroma",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/3/ce076850-29c5-4954-80eb-05bbc0faa0ad_378344.JPG",
                      "locality": "Banjara Hills",
                      "areaName": "Banjara Hills",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Desserts"
                      ],
                      "avgRating": 4.5,
                      "parentId": "1040",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "4.3K+",
                      "sla": {
                        "deliveryTime": 36,
                        "lastMileTravel": 4.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "4.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-10 00:30:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Desserts.png",
                            "description": "Delivery!"
                          },
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Desserts.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "70% OFF",
                        "subHeader": "UPTO ₹126",
                        "headerTypeV2": 12
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.0",
                          "ratingCount": "265"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4c9876b6-8be8-4818-a207-258fe6a2f5f0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/theobroma-banjara-hills-rest378344",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "23734",
                      "name": "McDonald's",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/3/9226049d-598f-4da2-8ebc-dc16c6d1b0a8_23734.jpg",
                      "locality": "Mehdipatnam",
                      "areaName": "Humayun Nagar",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Beverages",
                        "Cafe",
                        "Desserts"
                      ],
                      "avgRating": 4.3,
                      "parentId": "630",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "52K+",
                      "sla": {
                        "deliveryTime": 30,
                        "lastMileTravel": 2.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "2.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-10 04:45:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Burger.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹165 OFF",
                        "subHeader": "ABOVE ₹649",
                        "discountTag": "FLAT DEAL",
                        "headerTypeV2": 12
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4c9876b6-8be8-4818-a207-258fe6a2f5f0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/mcdonalds-mehdipatnam-humayun-nagar-rest23734",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "657474",
                      "name": "Burger King",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/ea422e81-79ea-4ffa-b56b-bc0dbc34520d_657474.jpg",
                      "locality": "R5 Chambers",
                      "areaName": "Mehdipatnam",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Burgers",
                        "American"
                      ],
                      "avgRating": 4.2,
                      "parentId": "166",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "9.9K+",
                      "sla": {
                        "deliveryTime": 31,
                        "lastMileTravel": 2.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "2.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-10 04:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Burger.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "70% OFF",
                        "subHeader": "UPTO ₹126",
                        "headerTypeV2": 12
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4c9876b6-8be8-4818-a207-258fe6a2f5f0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/burger-king-r5-chambers-mehdipatnam-rest657474",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "17105",
                      "name": "KFC",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/5cd9018c-0e72-4cbd-8b53-4e0495282338_17105.JPG",
                      "locality": "Mehdipatnam",
                      "areaName": "Mehdipatnam",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Fast Food",
                        "Rolls & Wraps"
                      ],
                      "avgRating": 4.1,
                      "parentId": "547",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "35K+",
                      "sla": {
                        "deliveryTime": 28,
                        "lastMileTravel": 2.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "2.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-10 00:45:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Burger.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "70% OFF",
                        "subHeader": "UPTO ₹126",
                        "headerTypeV2": 12
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.1",
                          "ratingCount": "6.1K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4c9876b6-8be8-4818-a207-258fe6a2f5f0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/kfc-mehdipatnam-rest17105",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "185544",
                      "name": "NIC Ice Creams",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/8/cfbc3475-a332-4547-9266-e552b8189e89_185544.JPG",
                      "locality": "Khairatabad",
                      "areaName": "Banjara Hills",
                      "costForTwo": "₹120 for two",
                      "cuisines": [
                        "Desserts",
                        "Ice Cream"
                      ],
                      "avgRating": 4.6,
                      "veg": true,
                      "parentId": "6249",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "7.4K+",
                      "sla": {
                        "deliveryTime": 32,
                        "lastMileTravel": 4.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "4.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-10 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "brand",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "brand"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "70% OFF",
                        "subHeader": "UPTO ₹126",
                        "headerTypeV2": 12
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4c9876b6-8be8-4818-a207-258fe6a2f5f0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/nic-ice-creams-khairatabad-banjara-hills-rest185544",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "651014",
                      "name": "Pizza Hut",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/fcff55c6-5ba9-4539-b78b-fa7f58413b84_651014.JPG",
                      "locality": "Gudimalkapur",
                      "areaName": "Mehdipatnam",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Pizzas"
                      ],
                      "avgRating": 4.3,
                      "parentId": "721",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "2.3K+",
                      "sla": {
                        "deliveryTime": 47,
                        "lastMileTravel": 4.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "45-55 mins",
                        "lastMileTravelString": "4.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-09 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Pizza.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹65 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL",
                        "headerTypeV2": 12
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4c9876b6-8be8-4818-a207-258fe6a2f5f0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/pizza-hut-gudimalkapur-mehdipatnam-rest651014",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "435640",
                      "name": "Bakingo",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/5/152c0da2-26ce-4f63-a0d7-5166a4b2dc16_435640.JPG",
                      "locality": "Khairtabad",
                      "areaName": "Banjara Hills",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Bakery"
                      ],
                      "avgRating": 4.5,
                      "parentId": "3818",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "7.5K+",
                      "sla": {
                        "deliveryTime": 42,
                        "lastMileTravel": 6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-50 mins",
                        "lastMileTravelString": "6.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-10 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹165 OFF",
                        "subHeader": "ABOVE ₹899",
                        "discountTag": "FLAT DEAL",
                        "headerTypeV2": 12
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4c9876b6-8be8-4818-a207-258fe6a2f5f0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/bakingo-khairtabad-banjara-hills-rest435640",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "560732",
                      "name": "Natural Ice Cream",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/21/cee3277a-2b10-44c0-abe4-304c869bb29b_560732.jpg",
                      "locality": "Himayath Nagar",
                      "areaName": "Himayat Nagar",
                      "costForTwo": "₹150 for two",
                      "cuisines": [
                        "Ice Cream",
                        "Desserts"
                      ],
                      "avgRating": 4.7,
                      "parentId": "2093",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "3.7K+",
                      "sla": {
                        "deliveryTime": 35,
                        "lastMileTravel": 4.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "4.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-10 00:45:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "20% OFF",
                        "subHeader": "UPTO ₹50"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.5",
                          "ratingCount": "777"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4c9876b6-8be8-4818-a207-258fe6a2f5f0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/natural-ice-cream-himayath-nagar-himayat-nagar-rest560732",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "355751",
                      "name": "Grameen Kulfi",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/16/81393cb4-20c1-4e9f-89da-086efb599d8e_355751.jpg",
                      "locality": "Khairatabad",
                      "areaName": "Banjara Hills",
                      "costForTwo": "₹120 for two",
                      "cuisines": [
                        "Ice Cream",
                        "Desserts"
                      ],
                      "avgRating": 4.7,
                      "veg": true,
                      "parentId": "12175",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "1.0K+",
                      "sla": {
                        "deliveryTime": 32,
                        "lastMileTravel": 4.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "4.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-10 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "70% OFF",
                        "subHeader": "UPTO ₹126",
                        "headerTypeV2": 12
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4c9876b6-8be8-4818-a207-258fe6a2f5f0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/grameen-kulfi-khairatabad-banjara-hills-rest355751",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "612602",
                      "name": "Kwality Walls Ice Cream and More",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/b3739937-c8ca-40ea-96cd-03b049b4600e_612602.JPG",
                      "locality": "Circle No 13",
                      "areaName": "Charminar",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Desserts",
                        "Ice Cream",
                        "Ice Cream Cakes"
                      ],
                      "avgRating": 4.6,
                      "veg": true,
                      "parentId": "582",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "2.8K+",
                      "sla": {
                        "deliveryTime": 24,
                        "lastMileTravel": 2.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "2.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-10 04:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹151 OFF",
                        "subHeader": "ABOVE ₹399",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4c9876b6-8be8-4818-a207-258fe6a2f5f0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/kwality-walls-ice-cream-and-more-circle-no-13-charminar-rest612602",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "367769",
                      "name": "Lucky Restaurant",
                      "cloudinaryImageId": "qems028i3da5rxf81rbp",
                      "locality": "Banjara Hills",
                      "areaName": "Banjara Hills",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Biryani",
                        "Tandoor"
                      ],
                      "avgRating": 4,
                      "parentId": "535180",
                      "avgRatingString": "4.0",
                      "totalRatingsString": "84K+",
                      "sla": {
                        "deliveryTime": 28,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-09 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "40% OFF",
                        "subHeader": "UPTO ₹80"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4c9876b6-8be8-4818-a207-258fe6a2f5f0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/lucky-restaurant-banjara-hills-rest367769",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "681600",
                      "name": "LeanCrust Pizza- ThinCrust Experts",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/30/12e3ef41-1079-47a2-a2b0-411cb9a072be_681600.jpg",
                      "locality": "Vaibhav Nagar",
                      "areaName": "Khairatabad",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Pizzas",
                        "Italian",
                        "Desserts"
                      ],
                      "avgRating": 4.4,
                      "parentId": "11216",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "1.1K+",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-30 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-10 02:00:00",
                        "opened": true
                      },
                      "badges": {
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹165 OFF",
                        "subHeader": "ABOVE ₹549",
                        "discountTag": "FLAT DEAL",
                        "headerTypeV2": 12
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4c9876b6-8be8-4818-a207-258fe6a2f5f0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/leancrust-pizza-thincrust-experts-vaibhav-nagar-khairatabad-rest681600",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "262087",
                      "name": "Imperial Multicuisine Restaurant",
                      "cloudinaryImageId": "rqlwvsmzcfxbg9u6ajgm",
                      "locality": "Banjara Hills",
                      "areaName": "Redhills",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Biryani",
                        "Chinese",
                        "Indian",
                        "Kebabs",
                        "Tandoor"
                      ],
                      "avgRating": 4.4,
                      "parentId": "543714",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "24K+",
                      "sla": {
                        "deliveryTime": 27,
                        "lastMileTravel": 2.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "2.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-09 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹201 OFF",
                        "subHeader": "ABOVE ₹499",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4c9876b6-8be8-4818-a207-258fe6a2f5f0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/imperial-multicuisine-restaurant-banjara-hills-redhills-rest262087",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "798552",
                      "name": "Harley's Fine Baking",
                      "cloudinaryImageId": "c3be1a7587dc2ece5b869adf63903a33",
                      "locality": "Amberpet Circle No 16",
                      "areaName": "Abids",
                      "costForTwo": "₹500 for two",
                      "cuisines": [
                        "Bakery",
                        "Desserts",
                        "Burgers",
                        "Fast Food"
                      ],
                      "avgRating": 4.5,
                      "veg": true,
                      "parentId": "11126",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "1.7K+",
                      "sla": {
                        "deliveryTime": 34,
                        "lastMileTravel": 3.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "3.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-10 01:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Desserts.png",
                            "description": "Delivery!"
                          },
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Desserts.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "70% OFF",
                        "subHeader": "UPTO ₹126",
                        "headerTypeV2": 12
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4c9876b6-8be8-4818-a207-258fe6a2f5f0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/harleys-fine-baking-amberpet-circle-no-16-abids-rest798552",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "487214",
                      "name": "ZAZA Mughal Biryani",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/7ebfac9e-877d-4737-882f-bd72d9d07650_487214.jpg",
                      "locality": "Khairatabad",
                      "areaName": "Vaibhav Nagar",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Biryani",
                        "North Indian",
                        "Awadhi"
                      ],
                      "avgRating": 4.2,
                      "parentId": "22473",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "451",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-30 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-10 02:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Mughlai.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Mughlai.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹165 OFF",
                        "subHeader": "ABOVE ₹549",
                        "discountTag": "FLAT DEAL",
                        "headerTypeV2": 12
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4c9876b6-8be8-4818-a207-258fe6a2f5f0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/zaza-mughal-biryani-khairatabad-vaibhav-nagar-rest487214",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "44119",
                      "name": "Baskin Robbins - Ice Cream Desserts",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/24/1a787057-6e1c-4fac-8969-78d748b20a87_44119.JPG",
                      "locality": "Masab Tank",
                      "areaName": "Masab Tank",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Ice Cream",
                        "Beverages"
                      ],
                      "avgRating": 4.2,
                      "parentId": "5588",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "3.7K+",
                      "sla": {
                        "deliveryTime": 26,
                        "lastMileTravel": 2.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "2.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-10 02:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "3.9",
                          "ratingCount": "288"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4c9876b6-8be8-4818-a207-258fe6a2f5f0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/baskin-robbins-ice-cream-desserts-masab-tank-rest44119",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "487211",
                      "name": "BOX8 - Desi Meals",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/26/821f692b-57a9-4304-9c2b-cd847e59775a_487211.jpg",
                      "locality": "Vaibhav Nagar",
                      "areaName": "Khairatabad",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "North Indian",
                        "Biryani",
                        "Thalis",
                        "Home Food"
                      ],
                      "avgRating": 4.4,
                      "parentId": "10655",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "3.3K+",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-30 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-10 02:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Mughlai.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Mughlai.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹165 OFF",
                        "subHeader": "ABOVE ₹549",
                        "discountTag": "FLAT DEAL",
                        "headerTypeV2": 12
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4c9876b6-8be8-4818-a207-258fe6a2f5f0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/box8-desi-meals-vaibhav-nagar-khairatabad-rest487211",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "853135",
                      "name": "Go Zero Ice Creams & Desserts",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/24/ab797910-dcd5-4cb0-9e69-23acb74f2ea2_853135.JPG",
                      "locality": "Nampally",
                      "areaName": "Abids",
                      "costForTwo": "₹150 for two",
                      "cuisines": [
                        "Ice Cream",
                        "Desserts",
                        "Healthy Food"
                      ],
                      "avgRating": 4,
                      "veg": true,
                      "parentId": "343689",
                      "avgRatingString": "4.0",
                      "totalRatingsString": "290",
                      "sla": {
                        "deliveryTime": 34,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-09 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "brand",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "brand"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "70% OFF",
                        "subHeader": "UPTO ₹126",
                        "headerTypeV2": 12
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4c9876b6-8be8-4818-a207-258fe6a2f5f0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/go-zero-ice-creams-and-desserts-nampally-abids-rest853135",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "312287",
                      "name": "Zomoz - The Momo Company",
                      "cloudinaryImageId": "okkier1zvmpp2p3xccji",
                      "locality": "Santosh Nagar",
                      "areaName": "Mehdipatnam",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Momos",
                        "Fast Food"
                      ],
                      "avgRating": 4.4,
                      "parentId": "10838",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "3.6K+",
                      "sla": {
                        "deliveryTime": 34,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-09 23:45:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹165 OFF",
                        "subHeader": "ABOVE ₹399",
                        "discountTag": "FLAT DEAL",
                        "headerTypeV2": 12
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4c9876b6-8be8-4818-a207-258fe6a2f5f0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/zomoz-the-momo-company-santosh-nagar-mehdipatnam-rest312287",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "9304",
                      "name": "Rayalaseema Ruchulu",
                      "cloudinaryImageId": "oqngjvi8wsc38wffxfa6",
                      "locality": "Lakdi-Ka-Pul",
                      "areaName": "Banjara Hills",
                      "costForTwo": "₹450 for two",
                      "cuisines": [
                        "South Indian",
                        "Biryani",
                        "Rayalaseema",
                        "North Indian"
                      ],
                      "avgRating": 4.4,
                      "parentId": "766",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "20K+",
                      "sla": {
                        "deliveryTime": 34,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-08-09 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "20% OFF",
                        "subHeader": "UPTO ₹50"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "3.8",
                          "ratingCount": "9.7K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-4c9876b6-8be8-4818-a207-258fe6a2f5f0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/hyderabad/rayalaseema-ruchulu-lakdi-ka-pul-banjara-hills-rest9304",
                      "type": "WEBLINK"
                    }
                  }
];
const Body=()=>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                  {resList.map((restaurant) =>
                    (
                    <RestuarantCard key={restaurant.info.id} resData={restaurant} />
                    ))
                   }
            </div>
        </div>
    )
}


const AppLayout=()=>{
  return(
    <div>
     <Header/>
     <Body/>

    </div>
  )

}

















// const heading=<h1>This is my React practice</h1>
const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// const Title=()=>{
//     <h1 className="title" tabIndex="5">
//         Hello Macho!!
//     </h1>
// }
// const HeadingComponent=()=>{
//     return <h1>This is my Heading Component</h1>;
// };
root.render(<AppLayout/>);
