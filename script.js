// Product Data - Loaded from price lists
// Prices are in PKR (Pakistani Rupees)
// productType: "oil", "niche-spray", "impressions"
const products = [
    // OIL PRODUCTS
    { id: 1, name: "HASSAN IRFAN ARADH AL DUBAI **", category: "men", type: "ARABIC", price: 354, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "0.5ML": 354, "1ML": 1825, "3ML": 3041, "5ML": 3650, "10ML": 6083, "15ML": 7299, "80ML": 9124 } },
    { id: 2, name: "HASSAN IRFAN ARADH AL SAQEEF", category: "unisex", type: "ARABIC", price: 413, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "0.5ML": 413, "1ML": 2177, "3ML": 3629, "5ML": 4355, "10ML": 7258, "15ML": 8709, "80ML": 10887 } },
    { id: 3, name: "HASSAN IRFAN ASHES OF ROSE (FLAGSHIP)***", category: "unisex", type: "ORIENTAL", price: 417, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "0.5ML": 417, "1ML": 2201, "3ML": 3668, "5ML": 4402, "10ML": 7337, "15ML": 8804, "80ML": 11005 } },
    { id: 4, name: "HASSAN IRFAN MUSKY BLUE OUDH", category: "men", type: "ARABIC", price: 418, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "0.5ML": 418, "1ML": 2209, "3ML": 3682, "5ML": 4418, "10ML": 7363, "15ML": 8836, "80ML": 11045 } },
    { id: 5, name: "HASSAN IRFAN THE SMOKE (FLAGSHIP)*", category: "men", type: "ORIENTAL", price: 397, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "0.5ML": 397, "1ML": 2083, "3ML": 3471, "5ML": 4165, "10ML": 6942, "15ML": 8331, "80ML": 10413 } },
    { id: 6, name: "HASSAN IRFAN THE SOUL (FLAGSHIP)***", category: "men", type: "UNIQUE", price: 425, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "0.5ML": 425, "1ML": 2253, "3ML": 3754, "5ML": 4130, "10ML": 6608, "15ML": 8110, "80ML": 9762 } },
    { id: 7, name: "HASSAN IRFAN MUSK OF THE SOUL***", category: "men", type: "UNIQUE", price: 267, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "0.5ML": 267, "1ML": 1300, "3ML": 1800, "5ML": 2100, "10ML": 3300, "15ML": 3900, "80ML": 4200 } },
    { id: 8, name: "HASSAN IRFAN THE SYNTHETIC OUD", category: "men", type: "ORIENTAL", price: 353, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "0.5ML": 353, "1ML": 1821, "3ML": 3034, "5ML": 3641, "10ML": 6068, "15ML": 7282, "80ML": 9103 } },
    { id: 9, name: "HASSAN IRFAN EHSAS AL ARAB*", category: "men", type: "ARABIC", price: 379, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "0.5ML": 379, "1ML": 1973, "3ML": 3289, "5ML": 3947, "10ML": 6578, "15ML": 7894, "80ML": 9867 } },
    { id: 10, name: "HASSAN IRFAN WILD MAFIOSO (NEW)*", category: "men", type: "ORIENTAL", price: 365, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "0.5ML": 365, "1ML": 1892, "3ML": 3154, "5ML": 3785, "10ML": 6308, "15ML": 7569, "80ML": 9462 } },
    { id: 11, name: "HASSAN IRFAN MUSK AL KHAAS (FLAGSHIP)***", category: "unisex", type: "ARABIC", price: 623, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "0.5ML": 623, "1ML": 3440, "3ML": 5733, "5ML": 6879, "10ML": 11465, "15ML": 13758, "80ML": 17198 } },
    { id: 12, name: "HASSAN IRFAN SYRIAN GOLD", category: "unisex", type: "ARABIC", price: 385, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "0.5ML": 385, "1ML": 2007, "3ML": 3345, "5ML": 4014, "10ML": 6691, "15ML": 8029, "80ML": 10036 } },
    { id: 13, name: "HASSAN IRFAN MUSK AL MUNAWARAH**", category: "unisex", type: "ARABIC", price: 413, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "0.5ML": 413, "1ML": 2177, "3ML": 3629, "5ML": 4355, "10ML": 7258, "15ML": 8709, "80ML": 10887 } },
    { id: 14, name: "HASSAN IRFAN MUSKY OUD AL RUFAQAA***", category: "unisex", type: "ARABIC", price: 650, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "0.5ML": 650, "1ML": 3598, "3ML": 5997, "5ML": 7197, "10ML": 11995, "15ML": 14394, "80ML": 17992 } },
    { id: 15, name: "HASSAN IRFAN MUSKY ARAB***", category: "unisex", type: "ARABIC", price: 372, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "0.5ML": 372, "1ML": 1933, "3ML": 3221, "5ML": 3865, "10ML": 6442, "15ML": 7731, "80ML": 9663 } },
    { id: 16, name: "HASSAN IRFAN MUKHALLAT LAOS", category: "men", type: "ARABIC", price: 1122, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "3ML": 1122, "5ML": 3365, "10ML": 5608, "15ML": 10095 } },
    { id: 17, name: "HASSAN IRFAN MUKHALLAT OF PERSIA***", category: "unisex", type: "ARABIC", price: 2553, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "3ML": 2553, "5ML": 7660, "10ML": 12766, "15ML": 22979 } },
    { id: 18, name: "HASSAN IRFAN MUKHALLAT SANTAL & ROSE", category: "men", type: "ARABIC", price: 827, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "3ML": 827, "5ML": 2481, "10ML": 4135, "15ML": 7443 } },
    
    // NICHE SPRAY PRODUCTS
    { id: 19, name: "HASSAN IRFAN 1947 THE GREEN", category: "men", type: "FRENCH", price: 752, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 752, "15ML": 2912, "30ML": 4788, "50ML": 6817, "100ML": 10907 } },
    { id: 20, name: "HASSAN IRFAN AQUAMARINE***", category: "men", type: "FRENCH", price: 457, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 457, "15ML": 1337, "30ML": 3016, "50ML": 3862, "100ML": 6180 } },
    { id: 21, name: "HASSAN IRFAN ARADH AL DUBAI (NEW)", category: "men", type: "ARABIC", price: 708, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 708, "15ML": 1241, "30ML": 2908, "50ML": 4297, "100ML": 6874 } },
    { id: 22, name: "HASSAN IRFAN ASHES OF ROSE (FLAGSHIP)***", category: "unisex", type: "ORIENTAL", price: 1084, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 1084, "15ML": 2445, "30ML": 4263, "50ML": 6930, "100ML": 11089 } },
    { id: 23, name: "HASSAN IRFAN BERGAROSE", category: "unisex", type: "FLORAL", price: 781, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 781, "15ML": 3069, "30ML": 4964, "50ML": 7109, "100ML": 11375 } },
    { id: 24, name: "HASSAN IRFAN BEYOND VIOLET (FLAGSHIP)**", category: "men", type: "FRENCH", price: 503, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 503, "15ML": 1586, "30ML": 3296, "50ML": 4330, "100ML": 6928 } },
    { id: 25, name: "HASSAN IRFAN CANNABIS ONE", category: "unisex", type: "FRENCH", price: 470, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 470, "15ML": 1409, "30ML": 3097, "50ML": 3998, "100ML": 6397 } },
    { id: 26, name: "HASSAN IRFAN CHARGED HOMME", category: "men", type: "FRENCH", price: 494, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 494, "15ML": 1535, "30ML": 3239, "50ML": 4235, "100ML": 6776 } },
    { id: 27, name: "HASSAN IRFAN DAUNTLESS", category: "men", type: "FRENCH", price: 461, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 461, "15ML": 1359, "30ML": 3040, "50ML": 3903, "100ML": 6246 } },
    { id: 28, name: "HASSAN IRFAN EHSAS AL ARAB", category: "men", type: "ARABIC", price: 918, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 918, "15ML": 3666, "30ML": 5770, "50ML": 9232, "100ML": 0 } },
    { id: 29, name: "HASSAN IRFAN ESSCENSE OF KHALEEJ", category: "men", type: "ARABIC", price: 508, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 508, "15ML": 1611, "30ML": 3325, "50ML": 4377, "100ML": 7003 } },
    { id: 30, name: "HASSAN IRFAN FLOWER OF NILE", category: "women", type: "FRENCH", price: 447, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 447, "15ML": 1283, "30ML": 2955, "50ML": 3761, "100ML": 6018 } },
    { id: 31, name: "HASSAN IRFAN FEMMENIGHT", category: "women", type: "FRENCH", price: 536, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 536, "15ML": 1758, "30ML": 3490, "50ML": 4652, "100ML": 7443 } },
    { id: 32, name: "HASSAN IRFAN HALLUCINATION***", category: "unisex", type: "UNIQUE", price: 968, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 968, "15ML": 4062, "30ML": 6082, "50ML": 8972, "100ML": 14355 } },
    { id: 33, name: "HASSAN IRFAN HEAVENLY APPLE**", category: "women", type: "FRENCH", price: 442, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 442, "15ML": 1258, "30ML": 2927, "50ML": 3714, "100ML": 5942 } },
    { id: 34, name: "HASSAN IRFAN MUKHALLAT YANGI", category: "men", type: "ARABIC", price: 548, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 548, "15ML": 1823, "30ML": 3563, "50ML": 4775, "100ML": 7640 } },
    { id: 35, name: "HASSAN IRFAN MUSKU FATI (NEW)", category: "unisex", type: "ARABIC", price: 653, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 653, "15ML": 2382, "30ML": 4192, "50ML": 5822, "100ML": 9315 } },
    { id: 36, name: "HASSAN IRFAN MUSKY ARAB***", category: "unisex", type: "ARABIC", price: 816, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 816, "15ML": 3296, "30ML": 5051, "50ML": 8082, "100ML": 0 } },
    { id: 37, name: "HASSAN IRFAN MYSTERY MEN", category: "men", type: "FRENCH", price: 1055, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 1055, "15ML": 4529, "30ML": 6607, "50ML": 9848, "100ML": 15757 } },
    { id: 38, name: "HASSAN IRFAN 1 NAUTICAL MILE", category: "men", type: "FRENCH", price: 579, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 579, "15ML": 1990, "30ML": 3751, "50ML": 5088, "100ML": 8140 } },
    { id: 39, name: "HASSAN IRFAN NUTMEG TOBACCO", category: "men", type: "ORIENTAL", price: 485, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 485, "15ML": 1487, "30ML": 3185, "50ML": 4145, "100ML": 6632 } },
    { id: 40, name: "HASSAN IRFAN OUDH ARDHAMA", category: "men", type: "FRENCH", price: 1451, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 1451, "15ML": 5584, "30ML": 9500, "50ML": 15200, "100ML": 0 } },
    { id: 41, name: "HASSAN IRFAN BLACK PLATINUM", category: "men", type: "FRENCH", price: 518, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 518, "15ML": 1662, "30ML": 3412, "50ML": 3702, "100ML": 5223 } },
    { id: 42, name: "HASSAN IRFAN PINKNADE", category: "women", type: "FRENCH", price: 458, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 458, "15ML": 1346, "30ML": 3026, "50ML": 3880, "100ML": 6208 } },
    { id: 43, name: "HASSAN IRFAN ROGUE LEATHER", category: "men", type: "FRENCH", price: 533, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 533, "15ML": 1745, "30ML": 3475, "50ML": 4628, "100ML": 7405 } },
    { id: 44, name: "HASSAN IRFAN SPICY FEMME (GEL FORM)", category: "women", type: "FRENCH", price: 458, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 458, "15ML": 1346, "30ML": 3026, "50ML": 3880, "100ML": 6208 } },
    { id: 45, name: "HASSAN IRFAN SULTAN MUMTAZ (NEW)", category: "men", type: "ARABIC", price: 624, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 624, "15ML": 2230, "30ML": 4021, "50ML": 5538, "100ML": 8860 } },
    { id: 46, name: "HASSAN IRFAN THE SMOKE (FLAGSHIP)", category: "men", type: "ORIENTAL", price: 593, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 593, "15ML": 2066, "30ML": 3836, "50ML": 5230, "100ML": 8368 } },
    { id: 47, name: "HASSAN IRFAN THE SOUL (FLAGSHIP)*****", category: "men", type: "UNIQUE", price: 1284, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 1284, "15ML": 3853, "30ML": 6104, "50ML": 8500, "100ML": 12749 } },
    { id: 48, name: "HASSAN IRFAN TROPICAL BLISS***", category: "women", type: "FRENCH", price: 499, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 499, "15ML": 1561, "30ML": 3268, "50ML": 4282, "100ML": 6852 } },
    { id: 49, name: "HASSAN IRFAN VETIVER INTENSE*", category: "men", type: "ORIENTAL", price: 593, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 593, "15ML": 2066, "30ML": 3836, "50ML": 5230, "100ML": 8368 } },
    { id: 50, name: "HASSAN IRFAN ELEMENT Z (ZED)", category: "men", type: "FRENCH", price: 546, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 546, "15ML": 1811, "30ML": 3549, "50ML": 4751, "100ML": 7602 } },
    
    // IMPRESSIONS PRODUCTS
    { id: 51, name: "TOM FORD TOBACCO OUD***", category: "men", type: "ORIENTAL", price: 1124, image: "🌹", format: "spray", productType: "impressions", brand: "TOM FORD", sizes: { "10ML": 1124, "20ML": 2148, "30ML": 3737, "50ML": 5064, "100ML": 8102 } },
    { id: 52, name: "TOM FORD OUD WOOD", category: "men", type: "ORIENTAL", price: 789, image: "🌹", format: "spray", productType: "impressions", brand: "TOM FORD", sizes: { "10ML": 789, "20ML": 1479, "30ML": 2876, "50ML": 3629, "100ML": 5807 } },
    { id: 53, name: "TOM FORD OMBRE LEATHER", category: "men", type: "FRENCH", price: 1406, image: "🌹", format: "spray", productType: "impressions", brand: "TOM FORD", sizes: { "10ML": 1406, "20ML": 2712, "30ML": 4462, "50ML": 6272, "100ML": 10035 } },
    { id: 54, name: "CREED AVENTUS***", category: "men", type: "FRENCH", price: 848, image: "🌹", format: "spray", productType: "impressions", brand: "CREED", sizes: { "10ML": 848, "20ML": 1596, "30ML": 3027, "50ML": 3881, "100ML": 6210 } },
    { id: 55, name: "CREED SILVER MOUNTAIN WATER - UAE***", category: "men", type: "FRENCH", price: 910, image: "🌹", format: "spray", productType: "impressions", brand: "CREED", sizes: { "10ML": 910, "20ML": 1720, "30ML": 3185, "50ML": 4145, "100ML": 6632 } },
    { id: 56, name: "DIOR SAUVAGE", category: "men", type: "FRENCH", price: 799, image: "🌹", format: "spray", productType: "impressions", brand: "DIOR", sizes: { "10ML": 799, "20ML": 1499, "30ML": 2901, "50ML": 3671, "100ML": 5874 } },
    { id: 57, name: "DIOR SAUVAGE ELIXIR", category: "men", type: "FRENCH", price: 1156, image: "🌹", format: "spray", productType: "impressions", brand: "DIOR", sizes: { "10ML": 1156, "20ML": 2213, "30ML": 3819, "50ML": 5201, "100ML": 8322 } },
    { id: 58, name: "CHANEL BLUE DE CHANNEL-FRENCH ***", category: "men", type: "FRENCH", price: 809, image: "🌹", format: "spray", productType: "impressions", brand: "CHANEL", sizes: { "10ML": 809, "20ML": 1518, "30ML": 2927, "50ML": 3714, "100ML": 5942 } },
    { id: 59, name: "YSL Y BY YSL ***", category: "men", type: "FRENCH", price: 1016, image: "🌹", format: "spray", productType: "impressions", brand: "YSL", sizes: { "10ML": 1016, "20ML": 1933, "30ML": 3460, "50ML": 4602, "100ML": 7363 } },
    { id: 60, name: "BVLGARI MAN IN BLACK", category: "men", type: "FRENCH", price: 1152, image: "🌹", format: "spray", productType: "impressions", brand: "BVLGARI", sizes: { "10ML": 1152, "20ML": 2204, "30ML": 3808, "50ML": 5182, "100ML": 8292 } },
    { id: 61, name: "AMOUAGE INTERLUDE", category: "men", type: "FRENCH", price: 1057, image: "🌹", format: "spray", productType: "impressions", brand: "AMOUAGE", sizes: { "10ML": 1057, "20ML": 2015, "30ML": 3565, "50ML": 4778, "100ML": 7644 } },
    
    // Additional products from price lists
    { id: 62, name: "COLLAB SANDAL GEL", category: "unisex", type: "INDIAN", price: 396, image: "💧", format: "oil", productType: "oil", brand: "COLLAB", sizes: { "0.5ML": 396, "1ML": 2079, "3ML": 3465, "5ML": 4158, "10ML": 6930, "15ML": 8315, "80ML": 10394 } },
    { id: 63, name: "COLLAB WHITE OUD (S)**", category: "unisex", type: "ARABIC/INDIAN", price: 368, image: "💧", format: "oil", productType: "oil", brand: "COLLAB", sizes: { "0.5ML": 368, "1ML": 1905, "3ML": 3175, "5ML": 3810, "10ML": 6350, "15ML": 7620, "80ML": 9525 } },
    { id: 64, name: "COLLAB WHITE OUD INDIAN", category: "men", type: "ARABIC/INDIAN", price: 386, image: "💧", format: "oil", productType: "oil", brand: "COLLAB", sizes: { "0.5ML": 386, "1ML": 2014, "3ML": 3357, "5ML": 4028, "10ML": 6714, "15ML": 8056, "80ML": 10070 } },
    { id: 65, name: "COLLAB WHITE OUD SAUDIA", category: "men", type: "ARABIC/INDIAN", price: 410, image: "💧", format: "oil", productType: "oil", brand: "COLLAB", sizes: { "0.5ML": 410, "1ML": 2157, "3ML": 3595, "5ML": 4315, "10ML": 7191, "15ML": 8629, "80ML": 10786 } },
    { id: 66, name: "COLLAB HINDI OUD - B", category: "unisex", type: "ARABIC/INDIAN", price: 667, image: "💧", format: "oil", productType: "oil", brand: "COLLAB", sizes: { "0.5ML": 667, "1ML": 3703, "3ML": 6172, "5ML": 7407, "10ML": 12345, "15ML": 14814, "80ML": 18517 } },
    { id: 67, name: "HASSAN IRFAN OUDH AL SHEIKH**", category: "men", type: "ARABIC/ORIENTAL", price: 611, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "0.5ML": 611, "1ML": 3368, "3ML": 5613, "5ML": 6735, "10ML": 11225, "15ML": 13470, "80ML": 16838 } },
    { id: 68, name: "FREDRIC MALLE AL QAMAR - MOON GRADE A+ ***", category: "unisex", type: "ORIENTAL", price: 576, image: "💧", format: "oil", productType: "oil", brand: "FREDRIC MALLE", sizes: { "0.5ML": 576, "1ML": 3155, "3ML": 5258, "5ML": 6309, "10ML": 10516, "15ML": 12619, "80ML": 15774 } },
    { id: 69, name: "FREDRIC MALLE AL WA'AD", category: "unisex", type: "ARABIC", price: 462, image: "💧", format: "oil", productType: "oil", brand: "FREDRIC MALLE", sizes: { "0.5ML": 462, "1ML": 2469, "3ML": 4116, "5ML": 4939, "10ML": 8232, "15ML": 9878, "80ML": 12347 } },
    { id: 70, name: "HASSAN IRFAN SULTANAT E USMANIA", category: "unisex", type: "ARABIC", price: 481, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "0.5ML": 481, "1ML": 2588, "3ML": 4313, "5ML": 5176, "10ML": 8626, "15ML": 10352, "80ML": 12939 } },
    { id: 71, name: "KINGDOM OF SAUDI ARABIA SANDAL ROSE", category: "unisex", type: "ARABIC-INDIAN", price: 396, image: "💧", format: "oil", productType: "oil", brand: "KINGDOM OF SAUDI ARABIA", sizes: { "0.5ML": 396, "1ML": 2075, "3ML": 3458, "5ML": 4149, "10ML": 6916, "15ML": 8299, "80ML": 10374 } },
    { id: 72, name: "KINGDOM OF SAUDI ARABIA ZAFRAN RED", category: "unisex", type: "ARABIC-INDIAN", price: 409, image: "💧", format: "oil", productType: "oil", brand: "KINGDOM OF SAUDI ARABIA", sizes: { "0.5ML": 409, "1ML": 2154, "3ML": 3589, "5ML": 4307, "10ML": 7179, "15ML": 8615, "80ML": 10768 } },
    { id: 73, name: "UAE SANDAL (NEW)", category: "unisex", type: "INDIAN", price: 359, image: "💧", format: "oil", productType: "oil", brand: "UAE", sizes: { "0.5ML": 359, "1ML": 1854, "3ML": 3091, "5ML": 3709, "10ML": 6182, "15ML": 7418, "80ML": 9272 } },
    { id: 74, name: "HASSAN IRFAN METALLIC VETIVER**", category: "unisex", type: "FRENCH", price: 778, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 778, "15ML": 3051, "30ML": 4945, "50ML": 7077, "100ML": 11323 } },
    { id: 75, name: "HASSAN IRFAN PASSION BLEND NO.27", category: "unisex", type: "FRENCH", price: 570, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 570, "15ML": 1940, "30ML": 3694, "50ML": 4993, "100ML": 7989 } },
    { id: 76, name: "HASSAN IRFAN SMOKEY CANNABIS", category: "unisex", type: "FRENCH", price: 522, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 522, "15ML": 1687, "30ML": 3410, "50ML": 4519, "100ML": 7231 } },
    { id: 77, name: "HASSAN IRFAN SAPHIRE BLUE", category: "unisex", type: "FRENCH", price: 477, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 477, "15ML": 1447, "30ML": 3140, "50ML": 4069, "100ML": 6511 } },
    { id: 78, name: "HASSAN IRFAN WOODY VETIVER (NEW)", category: "men", type: "FRENCH", price: 508, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 508, "15ML": 1611, "30ML": 3325, "50ML": 4377, "100ML": 7003 } },
    { id: 79, name: "HASSAN IRFAN PINK SENSATION", category: "women", type: "FRENCH", price: 398, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 398, "15ML": 635, "30ML": 1707, "50ML": 2163, "100ML": 2916 } },
    { id: 80, name: "HASSAN IRFAN SPECIAL BLEND NO.27 - THE PASSION", category: "unisex", type: "FRENCH", price: 439, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 439, "15ML": 696, "30ML": 1842, "50ML": 2429, "100ML": 3529 } },
    { id: 81, name: "AMOUAGE INTERLUDE BLACK IRIS", category: "men", type: "FRENCH", price: 929, image: "🌹", format: "spray", productType: "impressions", brand: "AMOUAGE", sizes: { "10ML": 929, "20ML": 1757, "30ML": 3234, "50ML": 4226, "100ML": 6761 } },
    { id: 82, name: "BVLGARI ONEKH", category: "men", type: "FRENCH", price: 955, image: "🌹", format: "spray", productType: "impressions", brand: "BVLGARI", sizes: { "10ML": 955, "20ML": 1810, "30ML": 3302, "50ML": 4339, "100ML": 6943 } },
    { id: 83, name: "BVLGARI TYGAR *", category: "men", type: "FRENCH", price: 1135, image: "🌹", format: "spray", productType: "impressions", brand: "BVLGARI", sizes: { "10ML": 1135, "20ML": 2171, "30ML": 3765, "50ML": 5111, "100ML": 8178 } },
    { id: 84, name: "CALVIN KLEIN CONTRADICTION", category: "men", type: "FRENCH", price: 699, image: "🌹", format: "spray", productType: "impressions", brand: "CALVIN KLEIN", sizes: { "10ML": 699, "20ML": 1298, "30ML": 2643, "50ML": 3241, "100ML": 5185 } },
    { id: 85, name: "CALVIN KLEIN ETERNITY EDP", category: "men", type: "FRENCH", price: 880, image: "🌹", format: "spray", productType: "impressions", brand: "CALVIN KLEIN", sizes: { "10ML": 880, "20ML": 1661, "30ML": 3110, "50ML": 4020, "100ML": 6431 } },
    { id: 86, name: "CALVIN KLEIN ETERNITY EDT", category: "men", type: "FRENCH", price: 828, image: "🌹", format: "spray", productType: "impressions", brand: "CALVIN KLEIN", sizes: { "10ML": 828, "20ML": 1556, "30ML": 2975, "50ML": 3795, "100ML": 6071 } },
    { id: 87, name: "CAROLINA HERRERA BAD BOY COBALT", category: "men", type: "FRENCH", price: 931, image: "🌹", format: "spray", productType: "impressions", brand: "CAROLINA HERRERA", sizes: { "10ML": 931, "20ML": 1762, "30ML": 3239, "50ML": 4235, "100ML": 6776 } },
    { id: 88, name: "CHANEL BLUE DE CHANNEL-SWISS ***", category: "men", type: "FRENCH", price: 1815, image: "🌹", format: "spray", productType: "impressions", brand: "CHANEL", sizes: { "10ML": 1815, "20ML": 3530, "30ML": 5513, "50ML": 8025, "100ML": 12839 } },
    { id: 89, name: "CHANEL BLUE DE CHANNEL - PARFUM (NEW)", category: "men", type: "FRENCH", price: 1633, image: "🌹", format: "spray", productType: "impressions", brand: "CHANEL", sizes: { "10ML": 1633, "20ML": 3165, "30ML": 5044, "50ML": 7243, "100ML": 11589 } },
    { id: 90, name: "CHANEL CHANCE EAU TENDRE", category: "women", type: "FRENCH", price: 825, image: "🌹", format: "spray", productType: "impressions", brand: "CHANEL", sizes: { "10ML": 825, "20ML": 1549, "30ML": 2967, "50ML": 3780, "100ML": 6049 } },
    { id: 91, name: "CHANEL COCO CHANEL", category: "women", type: "FRENCH", price: 767, image: "🌹", format: "spray", productType: "impressions", brand: "CHANEL", sizes: { "10ML": 767, "20ML": 1434, "30ML": 2819, "50ML": 3534, "100ML": 5654 } },
    { id: 92, name: "CHANEL COCO MADEMOISELLE", category: "women", type: "FRENCH", price: 864, image: "🌹", format: "spray", productType: "impressions", brand: "CHANEL", sizes: { "10ML": 864, "20ML": 1628, "30ML": 3067, "50ML": 3948, "100ML": 6318 } },
    { id: 93, name: "CHANEL COCO MADEMOISELLE INTENSE", category: "women", type: "FRENCH", price: 820, image: "🌹", format: "spray", productType: "impressions", brand: "CHANEL", sizes: { "10ML": 820, "20ML": 1541, "30ML": 2955, "50ML": 3761, "100ML": 6018 } },
    { id: 94, name: "CHANEL COCO NOIR", category: "women", type: "FRENCH", price: 1028, image: "🌹", format: "spray", productType: "impressions", brand: "CHANEL", sizes: { "10ML": 1028, "20ML": 1956, "30ML": 3490, "50ML": 4652, "100ML": 7443 } },
    { id: 95, name: "CHOPARD OUD MALAKI", category: "men", type: "FRENCH", price: 966, image: "🌹", format: "spray", productType: "impressions", brand: "CHOPARD", sizes: { "10ML": 966, "20ML": 1832, "30ML": 3330, "50ML": 4387, "100ML": 7019 } },
    { id: 96, name: "CLIVE CHRISTIAN CLIVE CHRISTIAN", category: "men", type: "FRENCH", price: 1872, image: "🌹", format: "spray", productType: "impressions", brand: "CLIVE CHRISTIAN", sizes: { "10ML": 1872, "20ML": 1655, "30ML": 3209, "50ML": 5101, "100ML": 7338 } },
    { id: 97, name: "CLIVE CHRISTIAN X TWIST MYRRH", category: "men", type: "FRENCH", price: 1130, image: "🌹", format: "spray", productType: "impressions", brand: "CLIVE CHRISTIAN", sizes: { "10ML": 1130, "20ML": 2160, "30ML": 3751, "50ML": 5088, "100ML": 8141 } },
    { id: 98, name: "COLLAB BAHRAINI OUD", category: "men", type: "FRENCH", price: 1049, image: "🌹", format: "spray", productType: "impressions", brand: "COLLAB", sizes: { "10ML": 1049, "20ML": 1998, "30ML": 3544, "50ML": 4743, "100ML": 7588 } },
    { id: 99, name: "COLLAB INDONESIAN OUD", category: "men", type: "FRENCH", price: 957, image: "🌹", format: "spray", productType: "impressions", brand: "COLLAB", sizes: { "10ML": 957, "20ML": 1814, "30ML": 3307, "50ML": 4348, "100ML": 6957 } },
    { id: 100, name: "COLLAB OUD ABIYAD", category: "men", type: "FRENCH", price: 1069, image: "🌹", format: "spray", productType: "impressions", brand: "COLLAB", sizes: { "10ML": 1069, "20ML": 2038, "30ML": 3595, "50ML": 4828, "100ML": 7725 } },
    { id: 101, name: "COLLAB OUD AMBER", category: "men", type: "FRENCH", price: 1239, image: "🌹", format: "spray", productType: "impressions", brand: "COLLAB", sizes: { "10ML": 1239, "20ML": 2378, "30ML": 4033, "50ML": 5557, "100ML": 8891 } },
    { id: 102, name: "COLLAB OUD WOOD", category: "men", type: "FRENCH", price: 933, image: "🌹", format: "spray", productType: "impressions", brand: "COLLAB", sizes: { "10ML": 933, "20ML": 1767, "30ML": 3246, "50ML": 4246, "100ML": 6793 } },
    { id: 103, name: "COLLAB SANTAL INTENSE", category: "men", type: "FRENCH", price: 1649, image: "🌹", format: "spray", productType: "impressions", brand: "COLLAB", sizes: { "10ML": 1649, "20ML": 3198, "30ML": 5087, "50ML": 7314, "100ML": 11702 } },
    { id: 104, name: "CREED AVENTUS*** SPECIAL", category: "men", type: "FRENCH", price: 1318, image: "🌹", format: "spray", productType: "impressions", brand: "CREED", sizes: { "10ML": 1318, "20ML": 2535, "30ML": 4234, "50ML": 5893, "100ML": 9429 } },
    { id: 105, name: "CREED CREED GOLD", category: "men", type: "FRENCH", price: 1588, image: "🌹", format: "spray", productType: "impressions", brand: "CREED", sizes: { "10ML": 1588, "20ML": 3077, "30ML": 4930, "50ML": 7053, "100ML": 11286 } },
    { id: 106, name: "CREED GREEN IRISH TWEED", category: "men", type: "FRENCH", price: 886, image: "🌹", format: "spray", productType: "impressions", brand: "CREED", sizes: { "10ML": 886, "20ML": 1672, "30ML": 3124, "50ML": 4043, "100ML": 6469 } },
    { id: 107, name: "CREED ORIGINAL VETIVER", category: "men", type: "FRENCH", price: 1760, image: "🌹", format: "spray", productType: "impressions", brand: "CREED", sizes: { "10ML": 1760, "20ML": 3419, "30ML": 5371, "50ML": 7788, "100ML": 12460 } },
    { id: 108, name: "CREED ROYAL OUD", category: "men", type: "FRENCH", price: 1375, image: "🌹", format: "spray", productType: "impressions", brand: "CREED", sizes: { "10ML": 1375, "20ML": 2650, "30ML": 4382, "50ML": 6139, "100ML": 9823 } },
    { id: 109, name: "CREED SILVER MOUNTAIN WATER*", category: "men", type: "FRENCH", price: 788, image: "🌹", format: "spray", productType: "impressions", brand: "CREED", sizes: { "10ML": 788, "20ML": 1476, "30ML": 2872, "50ML": 3623, "100ML": 5796 } },
    { id: 110, name: "CREED VIRGIN ISLAND WATER (NEW)", category: "men", type: "FRENCH", price: 1428, image: "🌹", format: "spray", productType: "impressions", brand: "CREED", sizes: { "10ML": 1428, "20ML": 2756, "30ML": 4518, "50ML": 6367, "100ML": 10187 } },
    { id: 111, name: "DAVID BEKHAM DAVID BEKHAM", category: "men", type: "FRENCH", price: 728, image: "🌹", format: "spray", productType: "impressions", brand: "DAVID BEKHAM", sizes: { "10ML": 728, "20ML": 1355, "30ML": 2717, "50ML": 3364, "100ML": 5383 } },
    { id: 112, name: "DAVIDOFF SILVER SHADOW", category: "men", type: "FRENCH", price: 864, image: "🌹", format: "spray", productType: "impressions", brand: "DAVIDOFF", sizes: { "10ML": 864, "20ML": 1628, "30ML": 3067, "50ML": 3948, "100ML": 6318 } },
    { id: 113, name: "DIOR DIOR HOMME", category: "men", type: "FRENCH", price: 897, image: "🌹", format: "spray", productType: "impressions", brand: "DIOR", sizes: { "10ML": 897, "20ML": 1693, "30ML": 3151, "50ML": 4088, "100ML": 6541 } },
    { id: 114, name: "DIOR FAHRENHEIT***", category: "men", type: "FRENCH", price: 1152, image: "🌹", format: "spray", productType: "impressions", brand: "DIOR", sizes: { "10ML": 1152, "20ML": 2204, "30ML": 3808, "50ML": 5182, "100ML": 8292 } },
    { id: 115, name: "DIOR J'DORE", category: "women", type: "FRENCH", price: 816, image: "🌹", format: "spray", productType: "impressions", brand: "DIOR", sizes: { "10ML": 816, "20ML": 1533, "30ML": 2945, "50ML": 3745, "100ML": 5992 } },
    { id: 116, name: "DIOR OUD ISPAHAN **", category: "men", type: "FRENCH", price: 963, image: "🌹", format: "spray", productType: "impressions", brand: "DIOR", sizes: { "10ML": 963, "20ML": 1826, "30ML": 3322, "50ML": 4372, "100ML": 6996 } },
    { id: 117, name: "DIOR SAUVAGE UAE ***", category: "men", type: "FRENCH", price: 1072, image: "🌹", format: "spray", productType: "impressions", brand: "DIOR", sizes: { "10ML": 1072, "20ML": 2045, "30ML": 3603, "50ML": 4841, "100ML": 7746 } },
    { id: 118, name: "DOLCE & GABBANA K EDP", category: "men", type: "FRENCH", price: 785, image: "🌹", format: "spray", productType: "impressions", brand: "DOLCE & GABBANA", sizes: { "10ML": 785, "20ML": 1470, "30ML": 2864, "50ML": 3610, "100ML": 5776 } },
    { id: 119, name: "DOLCE & GABBANA THE ONE", category: "men", type: "FRENCH", price: 911, image: "🌹", format: "spray", productType: "impressions", brand: "DOLCE & GABBANA", sizes: { "10ML": 911, "20ML": 1723, "30ML": 3190, "50ML": 4152, "100ML": 6643 } },
    { id: 120, name: "DOLCE & GABBANA VELVET DESERT OUD", category: "men", type: "FRENCH", price: 860, image: "🌹", format: "spray", productType: "impressions", brand: "DOLCE & GABBANA", sizes: { "10ML": 860, "20ML": 1620, "30ML": 3058, "50ML": 3932, "100ML": 6291 } },
    { id: 121, name: "GIORGIO ARMANI AQUA DI GIO PROFONDO**", category: "men", type: "FRENCH", price: 1089, image: "🌹", format: "spray", productType: "impressions", brand: "GIORGIO ARMANI", sizes: { "10ML": 1089, "20ML": 2078, "30ML": 3647, "50ML": 4914, "100ML": 7862 } },
    { id: 122, name: "GIORGIO ARMANI AQUA DI GIO PROFUMO** IMPROVED", category: "men", type: "FRENCH", price: 1069, image: "🌹", format: "spray", productType: "impressions", brand: "GIORGIO ARMANI", sizes: { "10ML": 1069, "20ML": 2038, "30ML": 3595, "50ML": 4827, "100ML": 7723 } },
    { id: 123, name: "GIORGIO ARMANI OUD ROYAL ***", category: "men", type: "FRENCH", price: 986, image: "🌹", format: "spray", productType: "impressions", brand: "GIORGIO ARMANI", sizes: { "10ML": 986, "20ML": 1872, "30ML": 3382, "50ML": 4472, "100ML": 7155 } },
    { id: 124, name: "GIORGIO ARMANI STRONGER WITH YOU INTENSELY", category: "men", type: "FRENCH", price: 909, image: "🌹", format: "spray", productType: "impressions", brand: "GIORGIO ARMANI", sizes: { "10ML": 909, "20ML": 1717, "30ML": 3183, "50ML": 4140, "100ML": 6625 } },
    { id: 125, name: "GUCCI GUILTY MEN", category: "men", type: "FRENCH", price: 757, image: "🌹", format: "spray", productType: "impressions", brand: "GUCCI", sizes: { "10ML": 757, "20ML": 1415, "30ML": 2794, "50ML": 3492, "100ML": 5587 } },
    { id: 126, name: "GUCCI OUD INTENSE", category: "men", type: "FRENCH", price: 921, image: "🌹", format: "spray", productType: "impressions", brand: "GUCCI", sizes: { "10ML": 921, "20ML": 1742, "30ML": 3214, "50ML": 4192, "100ML": 6708 } },
    { id: 127, name: "HERMES TERRE D'HERMES ***", category: "men", type: "FRENCH", price: 986, image: "🌹", format: "spray", productType: "impressions", brand: "HERMES", sizes: { "10ML": 986, "20ML": 1872, "30ML": 3382, "50ML": 4472, "100ML": 7155 } },
    { id: 128, name: "HUGO BOSS BOSS BOTTLED", category: "men", type: "FRENCH", price: 736, image: "🌹", format: "spray", productType: "impressions", brand: "HUGO BOSS", sizes: { "10ML": 736, "20ML": 1372, "30ML": 2738, "50ML": 3400, "100ML": 5440 } },
    { id: 129, name: "KILIAN ANGEL'S SHARE ***", category: "men", type: "FRENCH", price: 1428, image: "🌹", format: "spray", productType: "impressions", brand: "KILIAN", sizes: { "10ML": 1428, "20ML": 2756, "30ML": 4518, "50ML": 6367, "100ML": 10187 } },
    { id: 130, name: "LE LABO ANOTHER 13", category: "men", type: "FRENCH", price: 1926, image: "🌹", format: "spray", productType: "impressions", brand: "LE LABO", sizes: { "10ML": 1926, "20ML": 3751, "30ML": 5797, "50ML": 8498, "100ML": 13597 } },
    { id: 131, name: "LOUIS VOITON OMBRE NOMADE ***", category: "men", type: "FRENCH", price: 1428, image: "🌹", format: "spray", productType: "impressions", brand: "LOUIS VOITON", sizes: { "10ML": 1428, "20ML": 2756, "30ML": 4518, "50ML": 6367, "100ML": 10187 } },
    { id: 132, name: "MAISON FRANCIS KURKDJIAN BACCARAT ROUGE 540", category: "men", type: "FRENCH", price: 1165, image: "🌹", format: "spray", productType: "impressions", brand: "MAISON FRANCIS KURKDJIAN", sizes: { "10ML": 1165, "20ML": 2230, "30ML": 3842, "50ML": 5239, "100ML": 8383 } },
    { id: 133, name: "MAISON FRANCIS KURKDJIAN OUD SATIN MOOD", category: "men", type: "FRENCH", price: 1067, image: "🌹", format: "spray", productType: "impressions", brand: "MAISON FRANCIS KURKDJIAN", sizes: { "10ML": 1067, "20ML": 2034, "30ML": 3590, "50ML": 4819, "100ML": 7710 } },
    { id: 134, name: "MANCERA CEDRAT BOISE***", category: "men", type: "FRENCH", price: 1208, image: "🌹", format: "spray", productType: "impressions", brand: "MANCERA", sizes: { "10ML": 1208, "20ML": 2316, "30ML": 3953, "50ML": 5424, "100ML": 8678 } },
    { id: 135, name: "NASOMATTO BLACK AFGHANO ***", category: "men", type: "FRENCH", price: 870, image: "🌹", format: "spray", productType: "impressions", brand: "NASOMATTO", sizes: { "10ML": 870, "20ML": 1640, "30ML": 3113, "50ML": 3975, "100ML": 6359 } },
    { id: 136, name: "NISHANE HACIVAT***", category: "men", type: "FRENCH", price: 1594, image: "🌹", format: "spray", productType: "impressions", brand: "NISHANE", sizes: { "10ML": 1594, "20ML": 3088, "30ML": 4975, "50ML": 7077, "100ML": 11323 } },
    { id: 137, name: "PARFUMS DE MARLEY LAYTON***", category: "men", type: "FRENCH", price: 1030, image: "🌹", format: "spray", productType: "impressions", brand: "PARFUMS DE MARLEY", sizes: { "10ML": 1030, "20ML": 1961, "30ML": 3495, "50ML": 4661, "100ML": 7458 } },
    { id: 138, name: "PENHALIGON'S JUNIPER SLING", category: "men", type: "FRENCH", price: 1130, image: "🌹", format: "spray", productType: "impressions", brand: "PENHALIGON", sizes: { "10ML": 1130, "20ML": 2159, "30ML": 3751, "50ML": 5088, "100ML": 8140 } },
    { id: 139, name: "PRADA LUNA ROSA CARBON**", category: "men", type: "FRENCH", price: 1097, image: "🌹", format: "spray", productType: "impressions", brand: "PRADA", sizes: { "10ML": 1097, "20ML": 2093, "30ML": 3666, "50ML": 4946, "100ML": 7913 } },
    { id: 140, name: "ROJA DOVE ELYSIUM***", category: "men", type: "FRENCH", price: 1823, image: "🌹", format: "spray", productType: "impressions", brand: "ROJA DOVE", sizes: { "10ML": 1823, "20ML": 3545, "30ML": 5533, "50ML": 8058, "100ML": 12892 } },
    { id: 141, name: "TOM FORD GREY VETIVER", category: "men", type: "FRENCH", price: 842, image: "🌹", format: "spray", productType: "impressions", brand: "TOM FORD", sizes: { "10ML": 842, "20ML": 1585, "30ML": 3012, "50ML": 3856, "100ML": 6170 } },
    { id: 142, name: "TOM FORD OUD WOOD INTENSE - B", category: "men", type: "FRENCH", price: 1037, image: "🌹", format: "spray", productType: "impressions", brand: "TOM FORD", sizes: { "10ML": 1037, "20ML": 1974, "30ML": 3512, "50ML": 4690, "100ML": 7504 } },
    { id: 143, name: "TOM FORD TOBACCO VANILA", category: "men", type: "FRENCH", price: 802, image: "🌹", format: "spray", productType: "impressions", brand: "TOM FORD", sizes: { "10ML": 802, "20ML": 1505, "30ML": 2909, "50ML": 3685, "100ML": 5896 } },
    { id: 144, name: "VERSACE DYLAN BLUE", category: "men", type: "FRENCH", price: 759, image: "🌹", format: "spray", productType: "impressions", brand: "VERSACE", sizes: { "10ML": 759, "20ML": 1419, "30ML": 2799, "50ML": 3501, "100ML": 5601 } },
    { id: 145, name: "VIKTOR&ROLF SPICEBOMB ***", category: "men", type: "FRENCH", price: 985, image: "🌹", format: "spray", productType: "impressions", brand: "VIKTOR&ROLF", sizes: { "10ML": 985, "20ML": 1870, "30ML": 3379, "50ML": 4468, "100ML": 7149 } },
    { id: 146, name: "XERJOFF XJ 1861 NAXOS", category: "men", type: "FRENCH", price: 1428, image: "🌹", format: "spray", productType: "impressions", brand: "XERJOFF", sizes: { "10ML": 1428, "20ML": 2756, "30ML": 4518, "50ML": 6367, "100ML": 10187 } },
    { id: 147, name: "YSL BLACK OPIUM", category: "women", type: "FRENCH", price: 776, image: "🌹", format: "spray", productType: "impressions", brand: "YSL", sizes: { "10ML": 776, "20ML": 1452, "30ML": 2842, "50ML": 3572, "100ML": 5715 } },
    { id: 148, name: "YSL TUXEDO", category: "men", type: "FRENCH", price: 1273, image: "🌹", format: "spray", productType: "impressions", brand: "YSL", sizes: { "10ML": 1273, "20ML": 2447, "30ML": 4120, "50ML": 5703, "100ML": 9126 } },
    { id: 149, name: "YSL Y LE PARFUM", category: "men", type: "FRENCH", price: 1318, image: "🌹", format: "spray", productType: "impressions", brand: "YSL", sizes: { "10ML": 1318, "20ML": 2535, "30ML": 4234, "50ML": 5893, "100ML": 9429 } },
    { id: 150, name: "VALENTINO DONNA BORN IN ROMA", category: "women", type: "FRENCH", price: 1052, image: "🌹", format: "spray", productType: "impressions", brand: "VALENTINO", sizes: { "10ML": 1052, "20ML": 2005, "30ML": 3552, "50ML": 4756, "100ML": 7610 } },
    
    // Additional products from all price lists
    { id: 151, name: "HASSAN IRFAN ARADH AL DUBAI **", category: "men", type: "ARABIC", price: 354, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "0.5ML": 354, "1ML": 1825, "3ML": 3041, "5ML": 3650, "10ML": 6083, "15ML": 7299, "80ML": 9124 } },
    { id: 152, name: "HASSAN IRFAN ARADH AL SAQEEF", category: "unisex", type: "ARABIC", price: 413, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "0.5ML": 413, "1ML": 2177, "3ML": 3629, "5ML": 4355, "10ML": 7258, "15ML": 8709, "80ML": 10887 } },
    { id: 153, name: "HASSAN IRFAN ASHES OF ROSE (FLAGSHIP)***", category: "unisex", type: "ORIENTAL", price: 417, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "0.5ML": 417, "1ML": 2201, "3ML": 3668, "5ML": 4402, "10ML": 7337, "15ML": 8804, "80ML": 11005 } },
    { id: 154, name: "HASSAN IRFAN MUSKY BLUE OUDH", category: "men", type: "ARABIC", price: 418, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "0.5ML": 418, "1ML": 2209, "3ML": 3682, "5ML": 4418, "10ML": 7363, "15ML": 8836, "80ML": 11045 } },
    { id: 155, name: "IRFAN THE SMOKE (FLAGSHIP)*", category: "men", type: "ORIENTAL", price: 397, image: "💧", format: "oil", productType: "oil", brand: "IRFAN THE", sizes: { "0.5ML": 397, "1ML": 2083, "3ML": 3471, "5ML": 4165, "10ML": 6942, "15ML": 8331, "80ML": 10413 } },
    { id: 156, name: "IRFAN THE SOUL (FLAGSHIP)***", category: "men", type: "UNIQUE", price: 425, image: "💧", format: "oil", productType: "oil", brand: "IRFAN THE", sizes: { "0.5ML": 425, "1ML": 2253, "3ML": 3754, "5ML": 4130, "10ML": 6608, "15ML": 8110, "80ML": 9762 } },
    { id: 157, name: "HASSAN IRFAN MUSK OF THE SOUL***", category: "men", type: "UNIQUE", price: 267, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "0.5ML": 267, "1ML": 1300, "3ML": 1800, "5ML": 2100, "10ML": 3300, "15ML": 3900, "80ML": 4200 } },
    { id: 158, name: "IRFAN THE SYNTHETIC OUD", category: "men", type: "ORIENTAL", price: 353, image: "💧", format: "oil", productType: "oil", brand: "IRFAN THE", sizes: { "0.5ML": 353, "1ML": 1821, "3ML": 3034, "5ML": 3641, "10ML": 6068, "15ML": 7282, "80ML": 9103 } },
    { id: 159, name: "IRFAN EHSAS AL ARAB*", category: "men", type: "ARABIC", price: 379, image: "💧", format: "oil", productType: "oil", brand: "IRFAN EHSAS", sizes: { "0.5ML": 379, "1ML": 1973, "3ML": 3289, "5ML": 3947, "10ML": 6578, "15ML": 7894, "80ML": 9867 } },
    { id: 160, name: "IRFAN WILD MAFIOSO ( NEW)*", category: "men", type: "ORIENTAL", price: 365, image: "💧", format: "oil", productType: "oil", brand: "IRFAN WILD", sizes: { "0.5ML": 365, "1ML": 1892, "3ML": 3154, "5ML": 3785, "10ML": 6308, "15ML": 7569, "80ML": 9462 } },
{ id: 151, name: "HASSAN IRFAN ARADH AL DUBAI **", category: "men", type: "ARABIC", price: 354, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "0.5ML": 354, "1ML": 1825, "3ML": 3041, "5ML": 3650, "10ML": 6083, "15ML": 7299, "80ML": 9124 } },
    { id: 152, name: "HASSAN IRFAN ARADH AL SAQEEF", category: "unisex", type: "ARABIC", price: 413, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "0.5ML": 413, "1ML": 2177, "3ML": 3629, "5ML": 4355, "10ML": 7258, "15ML": 8709, "80ML": 10887 } },
    { id: 153, name: "HASSAN IRFAN ASHES OF ROSE (FLAGSHIP)***", category: "unisex", type: "ORIENTAL", price: 417, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "0.5ML": 417, "1ML": 2201, "3ML": 3668, "5ML": 4402, "10ML": 7337, "15ML": 8804, "80ML": 11005 } },
    { id: 154, name: "HASSAN IRFAN MUSKY BLUE OUDH", category: "men", type: "ARABIC", price: 418, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "0.5ML": 418, "1ML": 2209, "3ML": 3682, "5ML": 4418, "10ML": 7363, "15ML": 8836, "80ML": 11045 } },
    { id: 155, name: "IRFAN THE SMOKE (FLAGSHIP)*", category: "men", type: "ORIENTAL", price: 397, image: "💧", format: "oil", productType: "oil", brand: "IRFAN THE", sizes: { "0.5ML": 397, "1ML": 2083, "3ML": 3471, "5ML": 4165, "10ML": 6942, "15ML": 8331, "80ML": 10413 } },
    { id: 156, name: "IRFAN THE SOUL (FLAGSHIP)***", category: "men", type: "UNIQUE", price: 425, image: "💧", format: "oil", productType: "oil", brand: "IRFAN THE", sizes: { "0.5ML": 425, "1ML": 2253, "3ML": 3754, "5ML": 4130, "10ML": 6608, "15ML": 8110, "80ML": 9762 } },
    { id: 157, name: "HASSAN IRFAN MUSK OF THE SOUL***", category: "men", type: "UNIQUE", price: 267, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "0.5ML": 267, "1ML": 1300, "3ML": 1800, "5ML": 2100, "10ML": 3300, "15ML": 3900, "80ML": 4200 } },
    { id: 158, name: "IRFAN THE SYNTHETIC OUD", category: "men", type: "ORIENTAL", price: 353, image: "💧", format: "oil", productType: "oil", brand: "IRFAN THE", sizes: { "0.5ML": 353, "1ML": 1821, "3ML": 3034, "5ML": 3641, "10ML": 6068, "15ML": 7282, "80ML": 9103 } },
    { id: 159, name: "IRFAN EHSAS AL ARAB*", category: "men", type: "ARABIC", price: 379, image: "💧", format: "oil", productType: "oil", brand: "IRFAN EHSAS", sizes: { "0.5ML": 379, "1ML": 1973, "3ML": 3289, "5ML": 3947, "10ML": 6578, "15ML": 7894, "80ML": 9867 } },
    { id: 160, name: "IRFAN WILD MAFIOSO ( NEW)*", category: "men", type: "ORIENTAL", price: 365, image: "💧", format: "oil", productType: "oil", brand: "IRFAN WILD", sizes: { "0.5ML": 365, "1ML": 1892, "3ML": 3154, "5ML": 3785, "10ML": 6308, "15ML": 7569, "80ML": 9462 } },
    { id: 161, name: "HASSAN IRFAN MUSK AL KHAAS (FLAGSHIP)***", category: "unisex", type: "ARABIC", price: 623, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "0.5ML": 623, "1ML": 3440, "3ML": 5733, "5ML": 6879, "10ML": 11465, "15ML": 13758, "80ML": 17198 } },
    { id: 162, name: "IRFAN SYRIAN GOLD", category: "unisex", type: "ARABIC", price: 385, image: "💧", format: "oil", productType: "oil", brand: "IRFAN SYRIAN", sizes: { "0.5ML": 385, "1ML": 2007, "3ML": 3345, "5ML": 4014, "10ML": 6691, "15ML": 8029, "80ML": 10036 } },
    { id: 163, name: "HASSAN IRFAN MUSK AL MUNAWARAH**", category: "unisex", type: "ARABIC", price: 413, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "0.5ML": 413, "1ML": 2177, "3ML": 3629, "5ML": 4355, "10ML": 7258, "15ML": 8709, "80ML": 10887 } },
    { id: 164, name: "IRFAN MUSKY OUD AL RUFAQAA***", category: "unisex", type: "ARABIC", price: 650, image: "💧", format: "oil", productType: "oil", brand: "IRFAN MUSKY", sizes: { "0.5ML": 650, "1ML": 3598, "3ML": 5997, "5ML": 7197, "10ML": 11995, "15ML": 14394, "80ML": 17992 } },
    { id: 165, name: "IRFAN MUSKY ARAB***", category: "unisex", type: "ARABIC", price: 372, image: "💧", format: "oil", productType: "oil", brand: "IRFAN MUSKY", sizes: { "0.5ML": 372, "1ML": 1933, "3ML": 3221, "5ML": 3865, "10ML": 6442, "15ML": 7731, "80ML": 9663 } },
    { id: 166, name: "SANDAL GEL", category: "unisex", type: "INDIAN", price: 396, image: "💧", format: "oil", productType: "oil", brand: "SANDAL GEL", sizes: { "0.5ML": 396, "1ML": 2079, "3ML": 3465, "5ML": 4158, "10ML": 6930, "15ML": 8315, "80ML": 10394 } },
    { id: 167, name: "COLLAB HIJR - E - ASWAD PREMIUM*", category: "unisex", type: "INDIAN", price: 393, image: "💧", format: "oil", productType: "oil", brand: "COLLAB HIJR", sizes: { "0.5ML": 393, "1ML": 2059, "3ML": 3432, "5ML": 4118, "10ML": 6863, "15ML": 8236, "80ML": 10295 } },
    { id: 168, name: "WHITE OUD (S)**", category: "unisex", type: "ARABIC/INDIAN", price: 368, image: "💧", format: "oil", productType: "oil", brand: "WHITE OUD", sizes: { "0.5ML": 368, "1ML": 1905, "3ML": 3175, "5ML": 3810, "10ML": 6350, "15ML": 7620, "80ML": 9525 } },
    { id: 169, name: "WHITE OUD", category: "unisex", type: "INDIAN", price: 386, image: "💧", format: "oil", productType: "oil", brand: "WHITE OUD", sizes: { "0.5ML": 386, "1ML": 2014, "3ML": 3357, "5ML": 4028, "10ML": 6714, "15ML": 8056, "80ML": 10070 } },
    { id: 170, name: "WHITE OUD SAUDIA", category: "men", type: "ARABIC/INDIAN", price: 410, image: "💧", format: "oil", productType: "oil", brand: "WHITE OUD", sizes: { "0.5ML": 410, "1ML": 2157, "3ML": 3595, "5ML": 4315, "10ML": 7191, "15ML": 8629, "80ML": 10786 } },
    { id: 171, name: "HINDI OUD - B", category: "unisex", type: "ARABIC/INDIAN", price: 667, image: "💧", format: "oil", productType: "oil", brand: "HINDI OUD", sizes: { "0.5ML": 667, "1ML": 3703, "3ML": 6172, "5ML": 7407, "10ML": 12345, "15ML": 14814, "80ML": 18517 } },
    { id: 172, name: "HASSAN IRFAN OUD AL SAUD MALIKI**", category: "men", type: "ARABIC/ORIENTAL", price: 447, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "0.5ML": 447, "1ML": 2383, "3ML": 3972, "5ML": 4767, "10ML": 7944, "15ML": 9533, "80ML": 11916 } },
    { id: 173, name: "IRFAN OUDH AL SHEIKH**", category: "men", type: "ARABIC/ORIENTAL", price: 611, image: "💧", format: "oil", productType: "oil", brand: "IRFAN OUDH", sizes: { "0.5ML": 611, "1ML": 3368, "3ML": 5613, "5ML": 6735, "10ML": 11225, "15ML": 13470, "80ML": 16838 } },
    { id: 174, name: "IRFAN OUDH ARDHAMA", category: "men", type: "FRENCH", price: 500, image: "💧", format: "oil", productType: "oil", brand: "IRFAN OUDH", sizes: { "0.5ML": 500, "1ML": 2703, "3ML": 4505, "5ML": 5405, "10ML": 9009, "15ML": 10811, "80ML": 13514 } },
    { id: 175, name: "FREDRIC MALLE AL FAJAR GRADE A+ ***", category: "unisex", type: "ORIENTAL", price: 625, image: "💧", format: "oil", productType: "oil", brand: "FREDRIC MALLE", sizes: { "0.5ML": 625, "1ML": 3448, "3ML": 5747, "5ML": 6897, "10ML": 11495, "15ML": 13794, "80ML": 17242 } },
    { id: 176, name: "FREDRIC MALLE AL LAIL", category: "unisex", type: "ARABIC", price: 494, image: "💧", format: "oil", productType: "oil", brand: "FREDRIC MALLE", sizes: { "0.5ML": 494, "1ML": 2667, "3ML": 4445, "5ML": 5334, "10ML": 8889, "15ML": 10667, "80ML": 13334 } },
    { id: 177, name: "MALLE AL WA'AD", category: "unisex", type: "ARABIC", price: 462, image: "💧", format: "oil", productType: "oil", brand: "MALLE AL", sizes: { "0.5ML": 462, "1ML": 2469, "3ML": 4116, "5ML": 4939, "10ML": 8232, "15ML": 9878, "80ML": 12347 } },
    { id: 178, name: "IRFAN SULTAN MUMTAZ", category: "men", type: "ARABIC", price: 381, image: "💧", format: "oil", productType: "oil", brand: "IRFAN SULTAN", sizes: { "0.5ML": 381, "1ML": 1987, "3ML": 3312, "5ML": 3974, "10ML": 6624, "15ML": 7948, "80ML": 9936 } },
    { id: 179, name: "IRFAN SULTANAT E USMANIA", category: "unisex", type: "ARABIC", price: 481, image: "💧", format: "oil", productType: "oil", brand: "IRFAN SULTANAT", sizes: { "0.5ML": 481, "1ML": 2588, "3ML": 4313, "5ML": 5176, "10ML": 8626, "15ML": 10352, "80ML": 12939 } },
    { id: 180, name: "KINGDOM OF SAUDI ARABIA FAWAKEH / REHAN E MADINA**", category: "unisex", type: "FLORAL", price: 405, image: "💧", format: "oil", productType: "oil", brand: "KINGDOM OF", sizes: { "0.5ML": 405, "1ML": 2132, "3ML": 3553, "5ML": 4263, "10ML": 7105, "15ML": 8526, "80ML": 10658 } },
    { id: 181, name: "TOBACCO OUD***", category: "men", type: "ORIENTAL", price: 393, image: "💧", format: "oil", productType: "oil", brand: "TOBACCO OUD***", sizes: { "0.5ML": 393, "1ML": 2055, "3ML": 3425, "5ML": 4110, "10ML": 6850, "15ML": 8220, "80ML": 10275 } },
    { id: 182, name: "UAE BUKHOOR AKHZAR", category: "unisex", type: "ARABIC", price: 354, image: "💧", format: "oil", productType: "oil", brand: "UAE BUKHOOR", sizes: { "0.5ML": 354, "1ML": 1826, "3ML": 3043, "5ML": 3652, "10ML": 6087, "15ML": 7304, "80ML": 9130 } },
    { id: 183, name: "SANDAL (NEW)", category: "unisex", type: "INDIAN", price: 359, image: "💧", format: "oil", productType: "oil", brand: "SANDAL (NEW)", sizes: { "0.5ML": 359, "1ML": 1854, "3ML": 3091, "5ML": 3709, "10ML": 6182, "15ML": 7418, "80ML": 9272 } },
    { id: 184, name: "HASSAN IRFAN MUKHALLAT LAOS", category: "men", type: "ARABIC", price: 1122, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "0.5ML": 1122, "1ML": 3365, "3ML": 5608, "5ML": 10095 } },
    { id: 185, name: "HASSAN IRFAN MUKHALLAT OF PERSIA***", category: "unisex", type: "ARABIC", price: 2553, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "0.5ML": 2553, "1ML": 7660, "3ML": 12766, "5ML": 22979 } },
    { id: 186, name: "HASSAN IRFAN MUKHALLAT LAOS (SYNTHETIC)", category: "men", type: "ARABIC", price: 680, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "0.5ML": 680, "1ML": 2039, "3ML": 3398, "5ML": 6116 } },
    { id: 187, name: "HASSAN IRFAN MUKHALLAT SANTAL & ROSE", category: "men", type: "ARABIC", price: 827, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "0.5ML": 827, "1ML": 2481, "3ML": 4135, "5ML": 7443 } },
    { id: 188, name: "HASSAN IRFAN 1947 THE GREEN", category: "men", type: "FRENCH", price: 520, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "0.5ML": 520, "1ML": 817, "3ML": 2109, "5ML": 2956, "10ML": 4744, "15ML": 6079, "80ML": 27642 } },
    { id: 189, name: "HASSAN IRFAN AQUAMARINE***", category: "men", type: "FRENCH", price: 389, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "0.5ML": 389, "1ML": 620, "3ML": 1676, "5ML": 2102, "10ML": 2775, "15ML": 3124, "80ML": 9261 } },
    { id: 190, name: "IRFAN BERGAROSE", category: "unisex", type: "FLORAL", price: 533, image: "💧", format: "oil", productType: "oil", brand: "IRFAN BERGAROSE", sizes: { "0.5ML": 533, "1ML": 837, "3ML": 2152, "5ML": 3040, "10ML": 4940, "15ML": 6371, "80ML": 29464 } },
    { id: 191, name: "HASSAN IRFAN BEYOND VIOLET (FLAGSHIP)**", category: "men", type: "FRENCH", price: 409, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "0.5ML": 409, "1ML": 652, "3ML": 1745, "5ML": 2237, "10ML": 3087, "15ML": 3592, "80ML": 12169 } },
    { id: 192, name: "HASSAN IRFAN CANNABIS ONE", category: "unisex", type: "FRENCH", price: 395, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "0.5ML": 395, "1ML": 629, "3ML": 1696, "5ML": 2141, "10ML": 2865, "15ML": 3260, "80ML": 10105 } },
    { id: 193, name: "HASSAN IRFAN CHARGED HOMME", category: "men", type: "FRENCH", price: 405, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "0.5ML": 405, "1ML": 645, "3ML": 1731, "5ML": 2210, "10ML": 3023, "15ML": 3497, "80ML": 11579 } },
    { id: 194, name: "IRFAN DAUNTLESS", category: "men", type: "FRENCH", price: 390, image: "💧", format: "oil", productType: "oil", brand: "IRFAN DAUNTLESS", sizes: { "0.5ML": 390, "1ML": 623, "3ML": 1682, "5ML": 2114, "10ML": 2802, "15ML": 3165, "80ML": 9516 } },
    { id: 195, name: "IRFAN ESSCENSE OF KHALEEJ", category: "men", type: "ARABIC", price: 411, image: "💧", format: "oil", productType: "oil", brand: "IRFAN ESSCENSE", sizes: { "0.5ML": 411, "1ML": 655, "3ML": 1752, "5ML": 2251, "10ML": 3118, "15ML": 3639, "80ML": 12463 } },
    { id: 196, name: "IRFAN FLOWER OF NILE", category: "women", type: "FRENCH", price: 384, image: "💧", format: "oil", productType: "oil", brand: "IRFAN FLOWER", sizes: { "0.5ML": 384, "1ML": 614, "3ML": 1661, "5ML": 2073, "10ML": 2708, "15ML": 3023, "80ML": 8632 } },
    { id: 197, name: "IRFAN FEMMENIGHT", category: "women", type: "FRENCH", price: 424, image: "💧", format: "oil", productType: "oil", brand: "IRFAN FEMMENIGHT", sizes: { "0.5ML": 424, "1ML": 673, "3ML": 1792, "5ML": 2330, "10ML": 3301, "15ML": 3914, "80ML": 14173 } },
    { id: 198, name: "IRFAN HALLUCINATION***", category: "unisex", type: "UNIQUE", price: 616, image: "💧", format: "oil", productType: "oil", brand: "IRFAN HALLUCINATION***", sizes: { "0.5ML": 616, "1ML": 961, "3ML": 2426, "5ML": 3578, "10ML": 6181, "15ML": 8234, "80ML": 41053 } },
    { id: 199, name: "HASSAN IRFAN HEAVENLY APPLE**", category: "women", type: "FRENCH", price: 382, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "0.5ML": 382, "1ML": 611, "3ML": 1654, "5ML": 2059, "10ML": 2676, "15ML": 2976, "80ML": 8337 } },
    { id: 200, name: "HASSAN IRFAN METALLIC VETIVER", category: "unisex", type: "FRENCH", price: 531, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "0.5ML": 531, "1ML": 835, "3ML": 2148, "5ML": 3031, "10ML": 4918, "15ML": 6339, "80ML": 29263 } },
    { id: 201, name: "HASSAN IRFAN MUKHALLAT YANGI", category: "men", type: "ARABIC", price: 429, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "0.5ML": 429, "1ML": 681, "3ML": 1810, "5ML": 2366, "10ML": 3383, "15ML": 4037, "80ML": 14939 } },
    { id: 202, name: "HASSAN IRFAN MUSKU FATI (NEW)", category: "unisex", type: "ARABIC", price: 476, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "0.5ML": 476, "1ML": 751, "3ML": 1964, "5ML": 2668, "10ML": 4081, "15ML": 5084, "80ML": 21453 } },
    { id: 203, name: "HASSAN IRFAN MYSTERY MEN", category: "men", type: "FRENCH", price: 655, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "0.5ML": 655, "1ML": 1019, "3ML": 2554, "5ML": 3831, "10ML": 6765, "15ML": 9110, "80ML": 46505 } },
    { id: 204, name: "IRFAN 1 NAUTICAL MILE", category: "men", type: "FRENCH", price: 443, image: "💧", format: "oil", productType: "oil", brand: "IRFAN 1", sizes: { "0.5ML": 443, "1ML": 702, "3ML": 1856, "5ML": 2456, "10ML": 3592, "15ML": 4350, "80ML": 16884 } },
    { id: 205, name: "HASSAN IRFAN NUTMEG TOBACCO", category: "men", type: "ORIENTAL", price: 401, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "0.5ML": 401, "1ML": 639, "3ML": 1718, "5ML": 2184, "10ML": 2963, "15ML": 3407, "80ML": 11019 } },
    { id: 206, name: "HASSAN IRFAN BLACK PLATINUM", category: "men", type: "FRENCH", price: 416, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "0.5ML": 416, "1ML": 661, "3ML": 1766, "5ML": 2278, "10ML": 3181, "15ML": 3734, "80ML": 13053 } },
    { id: 207, name: "HASSAN IRFAN PINK SENSATION", category: "women", type: "FRENCH", price: 398, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "0.5ML": 398, "1ML": 635, "3ML": 1707, "5ML": 2163, "10ML": 2916, "15ML": 3336, "80ML": 10577 } },
    { id: 208, name: "HASSAN IRFAN PINKNADE", category: "women", type: "FRENCH", price: 389, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "0.5ML": 389, "1ML": 622, "3ML": 1679, "5ML": 2107, "10ML": 2787, "15ML": 3142, "80ML": 9369 } },
    { id: 209, name: "HASSAN IRFAN PATCHOULI & PEPPER for MEN", category: "unisex", type: "FRENCH", price: 374, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "0.5ML": 374, "1ML": 598, "3ML": 1627, "5ML": 2004, "10ML": 2550, "15ML": 2787, "80ML": 7158 } },
    { id: 210, name: "HASSAN IRFAN ROGUE LEATHER", category: "men", type: "FRENCH", price: 423, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "0.5ML": 423, "1ML": 671, "3ML": 1788, "5ML": 2323, "10ML": 3285, "15ML": 3890, "80ML": 14025 } },
    { id: 211, name: "HASSAN IRFAN SAPHIRE BLUE", category: "unisex", type: "FRENCH", price: 398, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "0.5ML": 398, "1ML": 634, "3ML": 1707, "5ML": 2162, "10ML": 2913, "15ML": 3331, "80ML": 10548 } },
    { id: 212, name: "IRFAN SMOKEY CANNABIS", category: "unisex", type: "FRENCH", price: 418, image: "💧", format: "oil", productType: "oil", brand: "IRFAN SMOKEY", sizes: { "0.5ML": 418, "1ML": 664, "3ML": 1773, "5ML": 2292, "10ML": 3213, "15ML": 3781, "80ML": 13348 } },
    { id: 213, name: "IRFAN SPICY FEMME (GEL FORM)", category: "women", type: "FRENCH", price: 389, image: "💧", format: "oil", productType: "oil", brand: "IRFAN SPICY", sizes: { "0.5ML": 389, "1ML": 622, "3ML": 1679, "5ML": 2107, "10ML": 2787, "15ML": 3142, "80ML": 9369 } },
    { id: 214, name: "IRFAN SULTAN MUMTAZ (NEW)", category: "men", type: "ARABIC", price: 463, image: "💧", format: "oil", productType: "oil", brand: "IRFAN SULTAN", sizes: { "0.5ML": 463, "1ML": 732, "3ML": 1922, "5ML": 2586, "10ML": 3892, "15ML": 4800, "80ML": 19684 } },
    { id: 215, name: "IRFAN THE SMOKE (FLAGSHIP)", category: "men", type: "ORIENTAL", price: 449, image: "💧", format: "oil", productType: "oil", brand: "IRFAN THE", sizes: { "0.5ML": 449, "1ML": 712, "3ML": 1877, "5ML": 2497, "10ML": 3687, "15ML": 4492, "80ML": 17769 } },
    { id: 216, name: "IRFAN WOODY VETIVER (NEW)", category: "men", type: "FRENCH", price: 411, image: "💧", format: "oil", productType: "oil", brand: "IRFAN WOODY", sizes: { "0.5ML": 411, "1ML": 655, "3ML": 1752, "5ML": 2251, "10ML": 3118, "15ML": 3639, "80ML": 12463 } },
    { id: 217, name: "IRFAN TROPICAL BLISS***", category: "women", type: "FRENCH", price: 407, image: "💧", format: "oil", productType: "oil", brand: "IRFAN TROPICAL", sizes: { "0.5ML": 407, "1ML": 648, "3ML": 1738, "5ML": 2223, "10ML": 3055, "15ML": 3544, "80ML": 11874 } },
    { id: 218, name: "HASSAN IRFAN VETIVER INTENSE*", category: "men", type: "ORIENTAL", price: 449, image: "💧", format: "oil", productType: "oil", brand: "HASSAN IRFAN", sizes: { "0.5ML": 449, "1ML": 712, "3ML": 1877, "5ML": 2497, "10ML": 3687, "15ML": 4492, "80ML": 17769 } },
    { id: 219, name: "HASSAN IRFAN 1947 THE GREEN", category: "men", type: "FRENCH", price: 752, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 752, "15ML": 2912, "30ML": 4788, "50ML": 6817, "100ML": 10907 } },
    { id: 220, name: "HASSAN IRFAN AQUAMARINE***", category: "men", type: "FRENCH", price: 457, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 457, "15ML": 1337, "30ML": 3016, "50ML": 3862, "100ML": 6180 } },
    { id: 221, name: "HASSAN IRFAN ARADH AL DUBAI (NEW)", category: "men", type: "ARABIC", price: 708, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 708, "15ML": 1241, "30ML": 2908, "50ML": 4297, "100ML": 6874 } },
    { id: 222, name: "HASSAN IRFAN ASHES OF ROSE (FLAGSHIP)***", category: "unisex", type: "ORIENTAL", price: 1084, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 1084, "15ML": 2445, "30ML": 4263, "50ML": 6930, "100ML": 11089 } },
    { id: 223, name: "HASSAN IRFAN BERGAROSE", category: "unisex", type: "FLORAL", price: 781, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 781, "15ML": 3069, "30ML": 4964, "50ML": 7109, "100ML": 11375 } },
    { id: 224, name: "HASSAN IRFAN BEYOND VIOLET (FLAGSHIP)**", category: "men", type: "FRENCH", price: 503, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 503, "15ML": 1586, "30ML": 3296, "50ML": 4330, "100ML": 6928 } },
    { id: 225, name: "HASSAN IRFAN CANNABIS ONE", category: "unisex", type: "FRENCH", price: 470, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 470, "15ML": 1409, "30ML": 3097, "50ML": 3998, "100ML": 6397 } },
    { id: 226, name: "HASSAN IRFAN CHARGED HOMME", category: "men", type: "FRENCH", price: 494, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 494, "15ML": 1535, "30ML": 3239, "50ML": 4235, "100ML": 6776 } },
    { id: 227, name: "HASSAN IRFAN DAUNTLESS", category: "men", type: "FRENCH", price: 461, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 461, "15ML": 1359, "30ML": 3040, "50ML": 3903, "100ML": 6246 } },
    { id: 228, name: "HASSAN IRFAN EHSAS AL ARAB", category: "men", type: "ARABIC", price: 918, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 918, "15ML": 3666, "30ML": 5770, "50ML": 9232 } },
    { id: 229, name: "HASSAN IRFAN ESSCENSE OF KHALEEJ", category: "men", type: "ARABIC", price: 508, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 508, "15ML": 1611, "30ML": 3325, "50ML": 4377, "100ML": 7003 } },
    { id: 230, name: "HASSAN IRFAN FLOWER OF NILE", category: "women", type: "FRENCH", price: 447, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 447, "15ML": 1283, "30ML": 2955, "50ML": 3761, "100ML": 6018 } },
    { id: 231, name: "HASSAN IRFAN FEMMENIGHT", category: "women", type: "FRENCH", price: 536, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 536, "15ML": 1758, "30ML": 3490, "50ML": 4652, "100ML": 7443 } },
    { id: 232, name: "HASSAN IRFAN HALLUCINATION***", category: "unisex", type: "UNIQUE", price: 968, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 968, "15ML": 4062, "30ML": 6082, "50ML": 8972, "100ML": 14355 } },
    { id: 233, name: "HASSAN IRFAN HEAVENLY APPLE**", category: "women", type: "FRENCH", price: 442, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 442, "15ML": 1258, "30ML": 2927, "50ML": 3714, "100ML": 5942 } },
    { id: 234, name: "HASSAN IRFAN METALLIC VETIVER**", category: "unisex", type: "FRENCH", price: 778, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 778, "15ML": 3051, "30ML": 4945, "50ML": 7077, "100ML": 11323 } },
    { id: 235, name: "HASSAN IRFAN MUKHALLAT YANGI", category: "men", type: "ARABIC", price: 548, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 548, "15ML": 1823, "30ML": 3563, "50ML": 4775, "100ML": 7640 } },
    { id: 236, name: "HASSAN IRFAN MUSKU FATI (NEW)", category: "unisex", type: "ARABIC", price: 653, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 653, "15ML": 2382, "30ML": 4192, "50ML": 5822, "100ML": 9315 } },
    { id: 237, name: "HASSAN IRFAN MUSKY ARAB***", category: "unisex", type: "ARABIC", price: 816, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 816, "15ML": 3296, "30ML": 5051, "50ML": 8082 } },
    { id: 238, name: "HASSAN IRFAN MYSTERY MEN", category: "men", type: "FRENCH", price: 1055, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 1055, "15ML": 4529, "30ML": 6607, "50ML": 9848, "100ML": 15757 } },
    { id: 239, name: "HASSAN IRFAN 1 NAUTICAL MILE", category: "men", type: "FRENCH", price: 579, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 579, "15ML": 1990, "30ML": 3751, "50ML": 5088, "100ML": 8140 } },
    { id: 240, name: "HASSAN IRFAN NUTMEG TOBACCO", category: "men", type: "ORIENTAL", price: 485, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 485, "15ML": 1487, "30ML": 3185, "50ML": 4145, "100ML": 6632 } },
    { id: 241, name: "HASSAN IRFAN OUDH ARDHAMA", category: "men", type: "FRENCH", price: 1451, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 1451, "15ML": 5584, "30ML": 9500, "50ML": 15200 } },
    { id: 242, name: "HASSAN IRFAN BLACK PLATINUM", category: "men", type: "FRENCH", price: 518, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 518, "15ML": 1662, "30ML": 3412, "50ML": 3702, "100ML": 5223 } },
    { id: 243, name: "HASSAN IRFAN PINKNADE", category: "women", type: "FRENCH", price: 458, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 458, "15ML": 1346, "30ML": 3026, "50ML": 3880, "100ML": 6208 } },
    { id: 244, name: "HASSAN IRFAN PATCHOULI & PEPPER for MEN", category: "unisex", type: "FRENCH", price: 423, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 423, "15ML": 1157, "30ML": 2813, "50ML": 3525, "100ML": 5639 } },
    { id: 245, name: "HASSAN IRFAN PASSION BLEND NO.27", category: "unisex", type: "FRENCH", price: 570, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 570, "15ML": 1940, "30ML": 3694, "50ML": 4993, "100ML": 7989 } },
    { id: 246, name: "HASSAN IRFAN ROGUE LEATHER", category: "men", type: "FRENCH", price: 533, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 533, "15ML": 1745, "30ML": 3475, "50ML": 4628, "100ML": 7405 } },
    { id: 247, name: "HASSAN IRFAN SAPHIRE BLUE", category: "unisex", type: "FRENCH", price: 477, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 477, "15ML": 1447, "30ML": 3140, "50ML": 4069, "100ML": 6511 } },
    { id: 248, name: "HASSAN IRFAN SMOKEY CANNABIS", category: "unisex", type: "FRENCH", price: 522, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 522, "15ML": 1687, "30ML": 3410, "50ML": 4519, "100ML": 7231 } },
    { id: 249, name: "HASSAN IRFAN SPICY FEMME (GEL FORM)", category: "women", type: "FRENCH", price: 458, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 458, "15ML": 1346, "30ML": 3026, "50ML": 3880, "100ML": 6208 } },
    { id: 250, name: "HASSAN IRFAN SULTAN MUMTAZ (NEW)", category: "men", type: "ARABIC", price: 624, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 624, "15ML": 2230, "30ML": 4021, "50ML": 5538, "100ML": 8860 } },
    { id: 251, name: "HASSAN IRFAN THE SMOKE (FLAGSHIP)", category: "men", type: "ORIENTAL", price: 593, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 593, "15ML": 2066, "30ML": 3836, "50ML": 5230, "100ML": 8368 } },
    { id: 252, name: "HASSAN IRFAN THE SOUL (FLAGSHIP)*****", category: "men", type: "UNIQUE", price: 1284, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 1284, "15ML": 3853, "30ML": 6104, "50ML": 8500, "100ML": 12749 } },
    { id: 253, name: "HASSAN IRFAN THE SYNTHETIC OUD (NEW)", category: "men", type: "ORIENTAL", price: 470, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 470, "15ML": 3124, "30ML": 3303, "50ML": 4026 } },
    { id: 254, name: "HASSAN IRFAN TROPICAL BLISS***", category: "women", type: "FRENCH", price: 499, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 499, "15ML": 1561, "30ML": 3268, "50ML": 4282, "100ML": 6852 } },
    { id: 255, name: "HASSAN IRFAN VETIVER INTENSE*", category: "men", type: "ORIENTAL", price: 593, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 593, "15ML": 2066, "30ML": 3836, "50ML": 5230, "100ML": 8368 } },
    { id: 256, name: "HASSAN IRFAN WILD MAFIOSO ( NEW)", category: "men", type: "ORIENTAL", price: 519, image: "🌸", format: "spray", productType: "niche-spray", brand: "HASSAN IRFAN", sizes: { "5ML": 519, "15ML": 3423, "30ML": 3717, "50ML": 5255 } },
    { id: 257, name: "ABDUL SAMAD AL QURESHI SAFARI EXTREME**", category: "men", type: "FRENCH", price: 990, image: "🌹", format: "spray", productType: "impressions", brand: "ABDUL SAMAD AL QURESHI", sizes: { "10ML": 990, "20ML": 1881, "30ML": 3393, "50ML": 4491, "100ML": 7185 } },
    { id: 258, name: "AJMAL AMBER WOOD", category: "men", type: "FRENCH", price: 856, image: "🌹", format: "spray", productType: "impressions", brand: "AJMAL", sizes: { "10ML": 856, "20ML": 1611, "30ML": 3046, "50ML": 3913, "100ML": 6261 } },
    { id: 259, name: "AJMAL AMBRE PIMENTE", category: "men", type: "FRENCH", price: 854, image: "🌹", format: "spray", productType: "impressions", brand: "AJMAL", sizes: { "10ML": 854, "20ML": 1608, "30ML": 3042, "50ML": 3905, "100ML": 6249 } },
    { id: 260, name: "AJMAL AMIR ONE", category: "men", type: "FRENCH", price: 1082, image: "🌹", format: "spray", productType: "impressions", brand: "AJMAL", sizes: { "10ML": 1082, "20ML": 2064, "30ML": 3629, "50ML": 4884, "100ML": 7814 } },
    { id: 261, name: "AJMAL DREAM MERCHANT", category: "men", type: "FRENCH", price: 825, image: "🌹", format: "spray", productType: "impressions", brand: "AJMAL", sizes: { "10ML": 825, "20ML": 1550, "30ML": 2967, "50ML": 3781, "100ML": 6050 } },
    { id: 262, name: "AJMAL HATKORA WOOD***", category: "men", type: "FRENCH", price: 847, image: "🌹", format: "spray", productType: "impressions", brand: "AJMAL", sizes: { "10ML": 847, "20ML": 1595, "30ML": 3025, "50ML": 3877, "100ML": 6204 } },
    { id: 263, name: "AJMAL INCENSE WOOD", category: "men", type: "FRENCH", price: 847, image: "🌹", format: "spray", productType: "impressions", brand: "AJMAL", sizes: { "10ML": 847, "20ML": 1595, "30ML": 3025, "50ML": 3877, "100ML": 6204 } },
    { id: 264, name: "AJMAL QIBLA TUL WAFA - A", category: "men", type: "FRENCH", price: 1773, image: "🌹", format: "spray", productType: "impressions", brand: "AJMAL", sizes: { "10ML": 1773, "20ML": 3446, "30ML": 5405, "50ML": 7845, "100ML": 12551 } },
    { id: 265, name: "AJMAL QIBLA TUL WAFA - B", category: "men", type: "FRENCH", price: 1124, image: "🌹", format: "spray", productType: "impressions", brand: "AJMAL", sizes: { "10ML": 1124, "20ML": 2148, "30ML": 3737, "50ML": 5064, "100ML": 8102 } },
    { id: 266, name: "AMOUAGE BEACH HUT", category: "men", type: "FRENCH", price: 804, image: "🌹", format: "spray", productType: "impressions", brand: "AMOUAGE", sizes: { "10ML": 804, "20ML": 1507, "30ML": 2913, "50ML": 3690, "100ML": 5905 } },
    { id: 267, name: "AMOUAGE BELOVED MAN", category: "men", type: "FRENCH", price: 1065, image: "🌹", format: "spray", productType: "impressions", brand: "AMOUAGE", sizes: { "10ML": 1065, "20ML": 2029, "30ML": 3584, "50ML": 4809, "100ML": 7694 } },
    { id: 268, name: "AMOUAGE BRACKEN MAN", category: "men", type: "FRENCH", price: 986, image: "🌹", format: "spray", productType: "impressions", brand: "AMOUAGE", sizes: { "10ML": 986, "20ML": 1872, "30ML": 3382, "50ML": 4472, "100ML": 7155 } },
    { id: 269, name: "AMOUAGE DIA MEN", category: "men", type: "FRENCH", price: 936, image: "🌹", format: "spray", productType: "impressions", brand: "AMOUAGE", sizes: { "10ML": 936, "20ML": 1772, "30ML": 3253, "50ML": 4258, "100ML": 6812 } },
    { id: 270, name: "AMOUAGE EPIC MAN*", category: "men", type: "FRENCH", price: 1124, image: "🌹", format: "spray", productType: "impressions", brand: "AMOUAGE", sizes: { "10ML": 1124, "20ML": 2148, "30ML": 3737, "50ML": 5064, "100ML": 8102 } },
    { id: 271, name: "AMOUAGE INTERLUDE", category: "men", type: "FRENCH", price: 1057, image: "🌹", format: "spray", productType: "impressions", brand: "AMOUAGE", sizes: { "10ML": 1057, "20ML": 2015, "30ML": 3565, "50ML": 4778, "100ML": 7644 } },
    { id: 272, name: "AMOUAGE JOURNEY MAN", category: "men", type: "FRENCH", price: 1019, image: "🌹", format: "spray", productType: "impressions", brand: "AMOUAGE", sizes: { "10ML": 1019, "20ML": 1938, "30ML": 3467, "50ML": 4614, "100ML": 7382 } },
    { id: 273, name: "AMOUAGE MEMOIR MAN", category: "men", type: "FRENCH", price: 1120, image: "🌹", format: "spray", productType: "impressions", brand: "AMOUAGE", sizes: { "10ML": 1120, "20ML": 2140, "30ML": 3726, "50ML": 5045, "100ML": 8072 } },
    { id: 274, name: "AMOUAGE REFLECTION MAN", category: "men", type: "FRENCH", price: 935, image: "🌹", format: "spray", productType: "impressions", brand: "AMOUAGE", sizes: { "10ML": 935, "20ML": 1770, "30ML": 3250, "50ML": 4252, "100ML": 6803 } },
    { id: 275, name: "ARABIAN OUD KALEMAT", category: "men", type: "FRENCH", price: 1069, image: "🌹", format: "spray", productType: "impressions", brand: "ARABIAN OUD", sizes: { "10ML": 1069, "20ML": 2038, "30ML": 3595, "50ML": 4827, "100ML": 7723 } },
    { id: 276, name: "ARABIAN OUD RISALA", category: "men", type: "FRENCH", price: 1040, image: "🌹", format: "spray", productType: "impressions", brand: "ARABIAN OUD", sizes: { "10ML": 1040, "20ML": 1979, "30ML": 3519, "50ML": 4701, "100ML": 7522 } },
    { id: 277, name: "ARAMIS HAVANA RESERVA", category: "men", type: "FRENCH", price: 855, image: "🌹", format: "spray", productType: "impressions", brand: "ARAMIS", sizes: { "10ML": 855, "20ML": 1610, "30ML": 3045, "50ML": 3911, "100ML": 6257 } },
    { id: 278, name: "AZZARO THE MOST WANTED", category: "men", type: "FRENCH", price: 1229, image: "🌹", format: "spray", productType: "impressions", brand: "AZZARO", sizes: { "10ML": 1229, "20ML": 2358, "30ML": 4007, "50ML": 5514, "100ML": 8822 } },
    { id: 279, name: "AZZARO SILVER BLACK", category: "men", type: "FRENCH", price: 942, image: "🌹", format: "spray", productType: "impressions", brand: "AZZARO", sizes: { "10ML": 942, "20ML": 1784, "30ML": 3268, "50ML": 4282, "100ML": 6852 } },
    { id: 280, name: "BOADICEA THE VICTORIOUS AQUA SAPHIRE GRADE B", category: "men", type: "FRENCH", price: 1037, image: "🌹", format: "spray", productType: "impressions", brand: "BOADICEA", sizes: { "10ML": 1037, "20ML": 1974, "30ML": 3512, "50ML": 4690, "100ML": 7504 } },
    { id: 281, name: "BOADICEA THE VICTORIOUS COMPLEX - GRADE B", category: "men", type: "FRENCH", price: 851, image: "🌹", format: "spray", productType: "impressions", brand: "BOADICEA", sizes: { "10ML": 851, "20ML": 1602, "30ML": 3035, "50ML": 3894, "100ML": 6230 } },
    { id: 282, name: "BVLGARI AZARAN", category: "men", type: "FRENCH", price: 1793, image: "🌹", format: "spray", productType: "impressions", brand: "BVLGARI", sizes: { "10ML": 1793, "20ML": 3486, "30ML": 5456, "50ML": 7930, "100ML": 12688 } },
    { id: 283, name: "BVLGARI FALKAR *", category: "men", type: "FRENCH", price: 1815, image: "🌹", format: "spray", productType: "impressions", brand: "BVLGARI", sizes: { "10ML": 1815, "20ML": 3530, "30ML": 5513, "50ML": 8025, "100ML": 12839 } },
    { id: 284, name: "BVLGARI MAN IN BLACK", category: "men", type: "FRENCH", price: 1152, image: "🌹", format: "spray", productType: "impressions", brand: "BVLGARI", sizes: { "10ML": 1152, "20ML": 2204, "30ML": 3808, "50ML": 5182, "100ML": 8292 } },
    { id: 285, name: "BVLGARI ONEKH", category: "men", type: "FRENCH", price: 955, image: "🌹", format: "spray", productType: "impressions", brand: "BVLGARI", sizes: { "10ML": 955, "20ML": 1810, "30ML": 3302, "50ML": 4339, "100ML": 6943 } },
    { id: 286, name: "BVLGARI TYGAR *", category: "men", type: "FRENCH", price: 1135, image: "🌹", format: "spray", productType: "impressions", brand: "BVLGARI", sizes: { "10ML": 1135, "20ML": 2171, "30ML": 3765, "50ML": 5111, "100ML": 8178 } },
    { id: 287, name: "CALVIN KLEIN CONTRADICTION", category: "men", type: "FRENCH", price: 699, image: "🌹", format: "spray", productType: "impressions", brand: "CALVIN KLEIN", sizes: { "10ML": 699, "20ML": 1298, "30ML": 2643, "50ML": 3241, "100ML": 5185 } },
    { id: 288, name: "CALVIN KLEIN ETERNITY EDP", category: "men", type: "FRENCH", price: 880, image: "🌹", format: "spray", productType: "impressions", brand: "CALVIN KLEIN", sizes: { "10ML": 880, "20ML": 1661, "30ML": 3110, "50ML": 4020, "100ML": 6431 } },
    { id: 289, name: "CALVIN KLEIN ETERNITY EDT", category: "men", type: "FRENCH", price: 828, image: "🌹", format: "spray", productType: "impressions", brand: "CALVIN KLEIN", sizes: { "10ML": 828, "20ML": 1556, "30ML": 2975, "50ML": 3795, "100ML": 6071 } },
    { id: 290, name: "CAROLINA HERRERA BAD BOY COBALT", category: "men", type: "FRENCH", price: 931, image: "🌹", format: "spray", productType: "impressions", brand: "CAROLINA HERRERA", sizes: { "10ML": 931, "20ML": 1762, "30ML": 3239, "50ML": 4235, "100ML": 6776 } },
    { id: 291, name: "CHANEL BLUE DE CHANNEL-FRENCH ***", category: "men", type: "FRENCH", price: 809, image: "🌹", format: "spray", productType: "impressions", brand: "CHANEL", sizes: { "10ML": 809, "20ML": 1518, "30ML": 2927, "50ML": 3714, "100ML": 5942 } },
    { id: 292, name: "CHANEL BLUE DE CHANNEL-SWISS ***", category: "men", type: "FRENCH", price: 1815, image: "🌹", format: "spray", productType: "impressions", brand: "CHANEL", sizes: { "10ML": 1815, "20ML": 3530, "30ML": 5513, "50ML": 8025, "100ML": 12839 } },
    { id: 293, name: "CHANEL BLUE DE CHANNEL - PARFUM (NEW)", category: "men", type: "FRENCH", price: 1633, image: "🌹", format: "spray", productType: "impressions", brand: "CHANEL", sizes: { "10ML": 1633, "20ML": 3165, "30ML": 5044, "50ML": 7243, "100ML": 11589 } },
    { id: 294, name: "CHANEL CHANCE EAU TENDRE", category: "men", type: "FRENCH", price: 825, image: "🌹", format: "spray", productType: "impressions", brand: "CHANEL", sizes: { "10ML": 825, "20ML": 1549, "30ML": 2967, "50ML": 3780, "100ML": 6049 } },
    { id: 295, name: "CHANEL COCO CHANEL", category: "men", type: "FRENCH", price: 767, image: "🌹", format: "spray", productType: "impressions", brand: "CHANEL", sizes: { "10ML": 767, "20ML": 1434, "30ML": 2819, "50ML": 3534, "100ML": 5654 } },
    { id: 296, name: "CHANEL COCO MADEMOISELLE", category: "men", type: "FRENCH", price: 864, image: "🌹", format: "spray", productType: "impressions", brand: "CHANEL", sizes: { "10ML": 864, "20ML": 1628, "30ML": 3067, "50ML": 3948, "100ML": 6318 } },
    { id: 297, name: "CHANEL COCO MADEMOISELLE INTENSE", category: "men", type: "FRENCH", price: 820, image: "🌹", format: "spray", productType: "impressions", brand: "CHANEL", sizes: { "10ML": 820, "20ML": 1541, "30ML": 2955, "50ML": 3761, "100ML": 6018 } },
    { id: 298, name: "CHANEL COCO NOIR F", category: "men", type: "FRENCH", price: 1028, image: "🌹", format: "spray", productType: "impressions", brand: "CHANEL", sizes: { "10ML": 1028, "20ML": 1956, "30ML": 3490, "50ML": 4652, "100ML": 7443 } },
    { id: 299, name: "CHOPARD OUD MALAKI", category: "men", type: "FRENCH", price: 966, image: "🌹", format: "spray", productType: "impressions", brand: "CHOPARD", sizes: { "10ML": 966, "20ML": 1832, "30ML": 3330, "50ML": 4387, "100ML": 7019 } },
    { id: 300, name: "CLIVE CHRISTIAN CLIVE CHRISTIAN", category: "men", type: "FRENCH", price: 1655, image: "🌹", format: "spray", productType: "impressions", brand: "CLIVE CHRISTIAN", sizes: { "10ML": 1872, "20ML": 1655, "30ML": 3209, "50ML": 5101, "100ML": 7338 } },
    { id: 301, name: "CLIVE CHRISTIAN X TWIST MYRRH", category: "men", type: "FRENCH", price: 1130, image: "🌹", format: "spray", productType: "impressions", brand: "CLIVE CHRISTIAN", sizes: { "10ML": 1130, "20ML": 2160, "30ML": 3751, "50ML": 5088, "100ML": 8141 } },
    { id: 302, name: "COLLAB BAHRAINI OUD", category: "men", type: "FRENCH", price: 1049, image: "🌹", format: "spray", productType: "impressions", brand: "COLLAB", sizes: { "10ML": 1049, "20ML": 1998, "30ML": 3544, "50ML": 4743, "100ML": 7588 } },
    { id: 303, name: "COLLAB INDONESIAN OUD 6", category: "men", type: "FRENCH", price: 957, image: "🌹", format: "spray", productType: "impressions", brand: "COLLAB", sizes: { "10ML": 957, "20ML": 1814, "30ML": 3307, "50ML": 4348, "100ML": 6957 } },
    { id: 304, name: "COLLAB MUSK E TAHARA - B", category: "men", type: "FRENCH", price: 843, image: "🌹", format: "spray", productType: "impressions", brand: "COLLAB", sizes: { "10ML": 843, "20ML": 1585, "30ML": 3013, "50ML": 3857, "100ML": 6171 } },
    { id: 305, name: "COLLAB OUD ABIYAD", category: "men", type: "FRENCH", price: 1069, image: "🌹", format: "spray", productType: "impressions", brand: "COLLAB", sizes: { "10ML": 1069, "20ML": 2038, "30ML": 3595, "50ML": 4828, "100ML": 7725 } },
    { id: 306, name: "COLLAB OUD AMBER", category: "men", type: "FRENCH", price: 1239, image: "🌹", format: "spray", productType: "impressions", brand: "COLLAB", sizes: { "10ML": 1239, "20ML": 2378, "30ML": 4033, "50ML": 5557, "100ML": 8891 } },
    { id: 307, name: "COLLAB OUD WOOD", category: "men", type: "FRENCH", price: 933, image: "🌹", format: "spray", productType: "impressions", brand: "COLLAB", sizes: { "10ML": 933, "20ML": 1767, "30ML": 3246, "50ML": 4246, "100ML": 6793 } },
    { id: 308, name: "COLLAB OUD WOOD GEL", category: "men", type: "FRENCH", price: 1267, image: "🌹", format: "spray", productType: "impressions", brand: "COLLAB", sizes: { "10ML": 1267, "20ML": 2435, "30ML": 4105, "50ML": 5678, "100ML": 9084 } },
    { id: 309, name: "COLLAB SANTAL INTENSE", category: "men", type: "FRENCH", price: 1649, image: "🌹", format: "spray", productType: "impressions", brand: "COLLAB", sizes: { "10ML": 1649, "20ML": 3198, "30ML": 5087, "50ML": 7314, "100ML": 11702 } },
    { id: 310, name: "CREED AVENTUS*** FRENCH", category: "men", type: "FRENCH", price: 848, image: "🌹", format: "spray", productType: "impressions", brand: "CREED", sizes: { "10ML": 848, "20ML": 1596, "30ML": 3027, "50ML": 3881, "100ML": 6210 } },
    { id: 311, name: "CREED AVENTUS*** SPECIAL", category: "men", type: "FRENCH", price: 1318, image: "🌹", format: "spray", productType: "impressions", brand: "CREED", sizes: { "10ML": 1318, "20ML": 2535, "30ML": 4234, "50ML": 5893, "100ML": 9429 } },
    { id: 312, name: "CREED CREED GOLD", category: "men", type: "FRENCH", price: 1588, image: "🌹", format: "spray", productType: "impressions", brand: "CREED", sizes: { "10ML": 1588, "20ML": 3077, "30ML": 4930, "50ML": 7053, "100ML": 11286 } },
    { id: 313, name: "CREED GREEN IRISH TWEED", category: "men", type: "FRENCH", price: 886, image: "🌹", format: "spray", productType: "impressions", brand: "CREED", sizes: { "10ML": 886, "20ML": 1672, "30ML": 3124, "50ML": 4043, "100ML": 6469 } },
    { id: 314, name: "CREED ORIGINAL VETIVER", category: "men", type: "FRENCH", price: 1760, image: "🌹", format: "spray", productType: "impressions", brand: "CREED", sizes: { "10ML": 1760, "20ML": 3419, "30ML": 5371, "50ML": 7788, "100ML": 12460 } },
    { id: 315, name: "CREED ROYAL OUD", category: "men", type: "FRENCH", price: 1375, image: "🌹", format: "spray", productType: "impressions", brand: "CREED", sizes: { "10ML": 1375, "20ML": 2650, "30ML": 4382, "50ML": 6139, "100ML": 9823 } },
    { id: 316, name: "CREED SILVER MOUNTAIN WATER*", category: "men", type: "FRENCH", price: 788, image: "🌹", format: "spray", productType: "impressions", brand: "CREED", sizes: { "10ML": 788, "20ML": 1476, "30ML": 2872, "50ML": 3623, "100ML": 5796 } },
    { id: 317, name: "CREED SILVER MOUNTAIN WATER - UAE***", category: "men", type: "FRENCH", price: 910, image: "🌹", format: "spray", productType: "impressions", brand: "CREED", sizes: { "10ML": 910, "20ML": 1720, "30ML": 3185, "50ML": 4145, "100ML": 6632 } },
    { id: 318, name: "CREED VIRGIN ISLAND WATER (NEW)", category: "men", type: "FRENCH", price: 1428, image: "🌹", format: "spray", productType: "impressions", brand: "CREED", sizes: { "10ML": 1428, "20ML": 2756, "30ML": 4518, "50ML": 6367, "100ML": 10187 } },
    { id: 319, name: "DAVID BEKHAM DAVID BEKHAM", category: "men", type: "FRENCH", price: 728, image: "🌹", format: "spray", productType: "impressions", brand: "DAVID BEKHAM", sizes: { "10ML": 728, "20ML": 1355, "30ML": 2717, "50ML": 3364, "100ML": 5383 } },
    { id: 320, name: "DAVIDOFF SILVER SHADOW", category: "men", type: "FRENCH", price: 864, image: "🌹", format: "spray", productType: "impressions", brand: "DAVIDOFF", sizes: { "10ML": 864, "20ML": 1628, "30ML": 3067, "50ML": 3948, "100ML": 6318 } },
    { id: 321, name: "DIOR DIOR HOMME", category: "men", type: "FRENCH", price: 897, image: "🌹", format: "spray", productType: "impressions", brand: "DIOR", sizes: { "10ML": 897, "20ML": 1693, "30ML": 3151, "50ML": 4088, "100ML": 6541 } },
    { id: 322, name: "DIOR FAHRENHEIT***", category: "men", type: "FRENCH", price: 1152, image: "🌹", format: "spray", productType: "impressions", brand: "DIOR", sizes: { "10ML": 1152, "20ML": 2204, "30ML": 3808, "50ML": 5182, "100ML": 8292 } },
    { id: 323, name: "DIOR FAHRENHEIT 32", category: "men", type: "FRENCH", price: 731, image: "🌹", format: "spray", productType: "impressions", brand: "DIOR", sizes: { "10ML": 731, "20ML": 1361, "30ML": 2725, "50ML": 3377, "100ML": 5404 } },
    { id: 324, name: "DIOR J'DORE", category: "men", type: "FRENCH", price: 816, image: "🌹", format: "spray", productType: "impressions", brand: "DIOR", sizes: { "10ML": 816, "20ML": 1533, "30ML": 2945, "50ML": 3745, "100ML": 5992 } },
    { id: 325, name: "DIOR OUD ISPAHAN **", category: "men", type: "FRENCH", price: 963, image: "🌹", format: "spray", productType: "impressions", brand: "DIOR", sizes: { "10ML": 963, "20ML": 1826, "30ML": 3322, "50ML": 4372, "100ML": 6996 } },
    { id: 326, name: "DIOR PURPLE OUD", category: "men", type: "FRENCH", price: 846, image: "🌹", format: "spray", productType: "impressions", brand: "DIOR", sizes: { "10ML": 846, "20ML": 1591, "30ML": 3021, "50ML": 3870, "100ML": 6193 } },
    { id: 327, name: "DIOR SAUVAGE", category: "men", type: "FRENCH", price: 799, image: "🌹", format: "spray", productType: "impressions", brand: "DIOR", sizes: { "10ML": 799, "20ML": 1499, "30ML": 2901, "50ML": 3671, "100ML": 5874 } },
    { id: 328, name: "DIOR SAUVAGE ELIXIR", category: "men", type: "FRENCH", price: 1156, image: "🌹", format: "spray", productType: "impressions", brand: "DIOR", sizes: { "10ML": 1156, "20ML": 2213, "30ML": 3819, "50ML": 5201, "100ML": 8322 } },
    { id: 329, name: "DIOR SAUVAGE UAE ***", category: "men", type: "FRENCH", price: 1072, image: "🌹", format: "spray", productType: "impressions", brand: "DIOR", sizes: { "10ML": 1072, "20ML": 2045, "30ML": 3603, "50ML": 4841, "100ML": 7746 } },
    { id: 330, name: "DIOR SAUVAGE VERY COOL", category: "men", type: "FRENCH", price: 969, image: "🌹", format: "spray", productType: "impressions", brand: "DIOR", sizes: { "10ML": 969, "20ML": 1839, "30ML": 3339, "50ML": 4401, "100ML": 7041 } },
    { id: 331, name: "DIOR HOMME CLOGNE ***", category: "men", type: "FRENCH", price: 911, image: "🌹", format: "spray", productType: "impressions", brand: "DIOR", sizes: { "10ML": 2022, "20ML": 911, "30ML": 1723, "50ML": 3190, "100ML": 4152 } },
    { id: 332, name: "DIOR HOMME SPORT *", category: "men", type: "FRENCH", price: 911, image: "🌹", format: "spray", productType: "impressions", brand: "DIOR", sizes: { "10ML": 2021, "20ML": 911, "30ML": 1723, "50ML": 3190, "100ML": 4152 } },
    { id: 333, name: "DIOR SPICE BLEND", category: "men", type: "FRENCH", price: 1948, image: "🌹", format: "spray", productType: "impressions", brand: "DIOR", sizes: { "10ML": 1948, "20ML": 3796, "30ML": 5855, "50ML": 8594, "100ML": 13750 } },
    { id: 334, name: "DOLCE & GABBANA K EDP", category: "men", type: "FRENCH", price: 785, image: "🌹", format: "spray", productType: "impressions", brand: "DOLCE & GABBANA", sizes: { "10ML": 785, "20ML": 1470, "30ML": 2864, "50ML": 3610, "100ML": 5776 } },
    { id: 335, name: "DOLCE & GABBANA THE ONE", category: "men", type: "FRENCH", price: 911, image: "🌹", format: "spray", productType: "impressions", brand: "DOLCE & GABBANA", sizes: { "10ML": 911, "20ML": 1723, "30ML": 3190, "50ML": 4152, "100ML": 6643 } },
    { id: 336, name: "DOLCE & GABBANA THE ONE SPORTS", category: "men", type: "FRENCH", price: 1016, image: "🌹", format: "spray", productType: "impressions", brand: "DOLCE & GABBANA", sizes: { "10ML": 1016, "20ML": 1931, "30ML": 3457, "50ML": 4598, "100ML": 7357 } },
    { id: 337, name: "DOLCE & GABBANA VELVET DESERT OUD", category: "men", type: "FRENCH", price: 860, image: "🌹", format: "spray", productType: "impressions", brand: "DOLCE & GABBANA", sizes: { "10ML": 860, "20ML": 1620, "30ML": 3058, "50ML": 3932, "100ML": 6291 } },
    { id: 338, name: "DOLCE & GABBANA VELVET TENDER OUD", category: "men", type: "FRENCH", price: 785, image: "🌹", format: "spray", productType: "impressions", brand: "DOLCE & GABBANA", sizes: { "10ML": 785, "20ML": 1470, "30ML": 2864, "50ML": 3609, "100ML": 5775 } },
    { id: 339, name: "ERMENEGILDO ZEGNA JAVANESE PATCHOULI MEN", category: "men", type: "FRENCH", price: 765, image: "🌹", format: "spray", productType: "impressions", brand: "ERMENEGILDO ZEGNA", sizes: { "10ML": 765, "20ML": 1430, "30ML": 2813, "50ML": 3525, "100ML": 5639 } },
    { id: 340, name: "ESCENTRIC MOLECULES ESCENTRIC 02", category: "men", type: "FRENCH", price: 1152, image: "🌹", format: "spray", productType: "impressions", brand: "ESCENTRIC MOLECULES", sizes: { "10ML": 1152, "20ML": 2204, "30ML": 3808, "50ML": 5182, "100ML": 8292 } },
    { id: 341, name: "ESCENTRIC MOLECULES ESCENTRIC 02 - UAE", category: "men", type: "FRENCH", price: 1412, image: "🌹", format: "spray", productType: "impressions", brand: "ESCENTRIC MOLECULES", sizes: { "10ML": 1412, "20ML": 2723, "30ML": 4476, "50ML": 6296, "100ML": 10073 } },
    { id: 342, name: "ESCENTRIC MOLECULES ESCENTRIC 05 **", category: "men", type: "FRENCH", price: 1514, image: "🌹", format: "spray", productType: "impressions", brand: "ESCENTRIC MOLECULES", sizes: { "10ML": 1514, "20ML": 2929, "30ML": 4740, "50ML": 6736, "100ML": 10778 } },
    { id: 343, name: "EX NIHILO BROMPTON IMMORTALS", category: "men", type: "FRENCH", price: 969, image: "🌹", format: "spray", productType: "impressions", brand: "EX NIHILO", sizes: { "10ML": 969, "20ML": 1838, "30ML": 3337, "50ML": 4398, "100ML": 7038 } },
    { id: 344, name: "FRAGRANCE ONE OFFICE FOR MEN", category: "men", type: "FRENCH", price: 1959, image: "🌹", format: "spray", productType: "impressions", brand: "FRAGRANCE ONE", sizes: { "10ML": 1959, "20ML": 3817, "30ML": 5883, "50ML": 8640, "100ML": 13825 } },
    { id: 345, name: "FREDRIC MALLE AL FAJAR ***", category: "men", type: "FRENCH", price: 3075, image: "🌹", format: "spray", productType: "impressions", brand: "FREDRIC MALLE", sizes: { "10ML": 3075, "20ML": 6050, "30ML": 8783, "50ML": 11162, "100ML": 20144 } },
    { id: 346, name: "FREDRIC MALLE AL LAIL", category: "men", type: "FRENCH", price: 2537, image: "🌹", format: "spray", productType: "impressions", brand: "FREDRIC MALLE", sizes: { "10ML": 2537, "20ML": 4973, "30ML": 5939, "50ML": 10191, "100ML": 16305 } },
    { id: 347, name: "FREDRIC MALLE AL QAMAR - MOON ***", category: "men", type: "FRENCH", price: 2664, image: "🌹", format: "spray", productType: "impressions", brand: "FREDRIC MALLE", sizes: { "10ML": 2664, "20ML": 5228, "30ML": 7726, "50ML": 9694, "100ML": 17207 } },
    { id: 348, name: "FREDRIC MALLE AL WA'AD", category: "men", type: "FRENCH", price: 2181, image: "🌹", format: "spray", productType: "impressions", brand: "FREDRIC MALLE", sizes: { "10ML": 2181, "20ML": 4263, "30ML": 5229, "50ML": 8809, "100ML": 14095 } },
    { id: 349, name: "FREDRIC MALLE PORTRAIT OF A LADY", category: "men", type: "FRENCH", price: 1014, image: "🌹", format: "spray", productType: "impressions", brand: "FREDRIC MALLE", sizes: { "10ML": 1014, "20ML": 1927, "30ML": 3453, "50ML": 4590, "100ML": 7345 } },
    { id: 350, name: "GIORGIO ARMANI AQUA DI GIO - B", category: "men", type: "FRENCH", price: 742, image: "🌹", format: "spray", productType: "impressions", brand: "GIORGIO ARMANI", sizes: { "10ML": 742, "20ML": 1385, "30ML": 2755, "50ML": 3428, "100ML": 5485 } },
    { id: 351, name: "GIORGIO ARMANI AQUA DI GIO PROFONDO**", category: "men", type: "FRENCH", price: 1089, image: "🌹", format: "spray", productType: "impressions", brand: "GIORGIO ARMANI", sizes: { "10ML": 1089, "20ML": 2078, "30ML": 3647, "50ML": 4914, "100ML": 7862 } },
    { id: 352, name: "GIORGIO ARMANI AQUA DI GIO PROFUMO** IMPROVED", category: "men", type: "FRENCH", price: 1069, image: "🌹", format: "spray", productType: "impressions", brand: "GIORGIO ARMANI", sizes: { "10ML": 1069, "20ML": 2038, "30ML": 3595, "50ML": 4827, "100ML": 7723 } },
    { id: 353, name: "GIORGIO ARMANI MANIA FOR MAN*", category: "men", type: "FRENCH", price: 764, image: "🌹", format: "spray", productType: "impressions", brand: "GIORGIO ARMANI", sizes: { "10ML": 764, "20ML": 1428, "30ML": 2810, "50ML": 3520, "100ML": 5632 } },
    { id: 354, name: "GIORGIO ARMANI OUD ROYAL ***", category: "men", type: "FRENCH", price: 986, image: "🌹", format: "spray", productType: "impressions", brand: "GIORGIO ARMANI", sizes: { "10ML": 986, "20ML": 1872, "30ML": 3382, "50ML": 4472, "100ML": 7155 } },
    { id: 355, name: "GIORGIO ARMANI STRONGER WITH YOU INTENSELY", category: "men", type: "FRENCH", price: 909, image: "🌹", format: "spray", productType: "impressions", brand: "GIORGIO ARMANI", sizes: { "10ML": 909, "20ML": 1717, "30ML": 3183, "50ML": 4140, "100ML": 6625 } },
    { id: 356, name: "GIORGIO ARMANI STRONGER WITH YOU ABSOLUTELY", category: "men", type: "FRENCH", price: 975, image: "🌹", format: "spray", productType: "impressions", brand: "GIORGIO ARMANI", sizes: { "10ML": 975, "20ML": 1850, "30ML": 3353, "50ML": 4425, "100ML": 7079 } },
    { id: 357, name: "GIORGIO ARMANI STRONGER WITH YOU OUD", category: "men", type: "FRENCH", price: 1964, image: "🌹", format: "spray", productType: "impressions", brand: "GIORGIO ARMANI", sizes: { "10ML": 1964, "20ML": 3828, "30ML": 5897, "50ML": 8664, "100ML": 13862 } },
    { id: 358, name: "GUCCI BLOOM", category: "men", type: "FRENCH", price: 765, image: "🌹", format: "spray", productType: "impressions", brand: "GUCCI", sizes: { "10ML": 765, "20ML": 1430, "30ML": 2813, "50ML": 3525, "100ML": 5639 } },
    { id: 359, name: "GUCCI FLORA***", category: "men", type: "FRENCH", price: 804, image: "🌹", format: "spray", productType: "impressions", brand: "GUCCI", sizes: { "10ML": 804, "20ML": 1508, "30ML": 2914, "50ML": 3692, "100ML": 5908 } },
    { id: 360, name: "GUCCI GUILTY MEN", category: "men", type: "FRENCH", price: 757, image: "🌹", format: "spray", productType: "impressions", brand: "GUCCI", sizes: { "10ML": 757, "20ML": 1415, "30ML": 2794, "50ML": 3492, "100ML": 5587 } },
    { id: 361, name: "GUCCI OUD INTENSE", category: "men", type: "FRENCH", price: 921, image: "🌹", format: "spray", productType: "impressions", brand: "GUCCI", sizes: { "10ML": 921, "20ML": 1742, "30ML": 3214, "50ML": 4192, "100ML": 6708 } },
    { id: 362, name: "GUCCI POUR HOMME", category: "men", type: "FRENCH", price: 915, image: "🌹", format: "spray", productType: "impressions", brand: "GUCCI", sizes: { "10ML": 2003, "20ML": 915, "30ML": 1730, "50ML": 3198, "100ML": 4166 } },
    { id: 363, name: "GUCCI RUSH", category: "men", type: "FRENCH", price: 743, image: "🌹", format: "spray", productType: "impressions", brand: "GUCCI", sizes: { "10ML": 743, "20ML": 1386, "30ML": 2757, "50ML": 3431, "100ML": 5489 } },
    { id: 364, name: "GUERLAIN L'HOMME A LA ROSE", category: "men", type: "FRENCH", price: 793, image: "🌹", format: "spray", productType: "impressions", brand: "GUERLAIN", sizes: { "10ML": 793, "20ML": 1485, "30ML": 2884, "50ML": 3643, "100ML": 5829 } },
    { id: 365, name: "GUERLAIN SANTAL ROYAL", category: "men", type: "FRENCH", price: 1434, image: "🌹", format: "spray", productType: "impressions", brand: "GUERLAIN", sizes: { "10ML": 1434, "20ML": 2769, "30ML": 4535, "50ML": 6394, "100ML": 10230 } },
    { id: 366, name: "HERMES H24 HERMES", category: "men", type: "FRENCH", price: 1207, image: "🌹", format: "spray", productType: "impressions", brand: "HERMES", sizes: { "10ML": 1207, "20ML": 2314, "30ML": 3950, "50ML": 5419, "100ML": 8671 } },
    { id: 367, name: "HERMES TERRE D'HERMES ***", category: "men", type: "FRENCH", price: 986, image: "🌹", format: "spray", productType: "impressions", brand: "HERMES", sizes: { "10ML": 986, "20ML": 1872, "30ML": 3382, "50ML": 4472, "100ML": 7155 } },
    { id: 368, name: "HUGO BOSS BOSS BOTTLED", category: "men", type: "FRENCH", price: 736, image: "🌹", format: "spray", productType: "impressions", brand: "HUGO BOSS", sizes: { "10ML": 736, "20ML": 1372, "30ML": 2738, "50ML": 3400, "100ML": 5440 } },
    { id: 369, name: "HUGO BOSS BOSS BOTTLED UNITED", category: "men", type: "FRENCH", price: 100, image: "🌹", format: "spray", productType: "impressions", brand: "HUGO BOSS", sizes: { "10ML": 100, "20ML": 719, "30ML": 1339, "50ML": 2696, "100ML": 3329 } },
    { id: 370, name: "HUGO BOSS DARK BLUE", category: "men", type: "FRENCH", price: 101, image: "🌹", format: "spray", productType: "impressions", brand: "HUGO BOSS", sizes: { "10ML": 101, "20ML": 796, "30ML": 1492, "50ML": 2893, "100ML": 3657 } },
    { id: 371, name: "HUGO BOSS HUGO BOSS BY HUGO BOSS", category: "men", type: "FRENCH", price: 102, image: "🌹", format: "spray", productType: "impressions", brand: "HUGO BOSS", sizes: { "10ML": 102, "20ML": 746, "30ML": 1392, "50ML": 2764, "100ML": 3442 } },
    { id: 372, name: "HUGO BOSS HUGO ENERGIZE **", category: "men", type: "FRENCH", price: 103, image: "🌹", format: "spray", productType: "impressions", brand: "HUGO BOSS", sizes: { "10ML": 103, "20ML": 728, "30ML": 1355, "50ML": 2717, "100ML": 3364 } },
    { id: 373, name: "HUGO BOSS HUGO WOMAN", category: "men", type: "FRENCH", price: 104, image: "🌹", format: "spray", productType: "impressions", brand: "HUGO BOSS", sizes: { "10ML": 104, "20ML": 810, "30ML": 1520, "50ML": 2928, "100ML": 3716 } },
    { id: 374, name: "INITIO OUD FOR GREATNESS ***", category: "men", type: "FRENCH", price: 105, image: "🌹", format: "spray", productType: "impressions", brand: "INITIO", sizes: { "10ML": 105, "20ML": 1454, "30ML": 2808, "50ML": 4585, "100ML": 6478 } },
    { id: 375, name: "ISSEY MIYAKE L'EAU D'ISSEY MEN", category: "men", type: "FRENCH", price: 106, image: "🌹", format: "spray", productType: "impressions", brand: "ISSEY MIYAKE", sizes: { "10ML": 106, "20ML": 816, "30ML": 1531, "50ML": 2943, "100ML": 3741 } },
    { id: 376, name: "ISSEY MIYAKE WOOD & WOOD", category: "men", type: "FRENCH", price: 108, image: "🌹", format: "spray", productType: "impressions", brand: "ISSEY MIYAKE", sizes: { "10ML": 108, "20ML": 710, "30ML": 1319, "50ML": 2670, "100ML": 3287 } },
    { id: 377, name: "JEAN PAUL GAULTIER ULTRA MALE", category: "men", type: "FRENCH", price: 108, image: "🌹", format: "spray", productType: "impressions", brand: "JEAN PAUL GAULTIER", sizes: { "10ML": 108, "20ML": 892, "30ML": 1684, "50ML": 3140, "100ML": 4069 } },
    { id: 378, name: "JENIFER LOPEZ STILL", category: "men", type: "FRENCH", price: 109, image: "🌹", format: "spray", productType: "impressions", brand: "JENIFER LOPEZ", sizes: { "10ML": 109, "20ML": 838, "30ML": 1577, "50ML": 3002, "100ML": 3840 } },
    { id: 379, name: "JEREMY FRAGRANCE OFFICE FOR MEN FRENCH M", category: "men", type: "FRENCH", price: 110, image: "🌹", format: "spray", productType: "impressions", brand: "JEREMY", sizes: { "10ML": 110, "20ML": 1959, "30ML": 3817, "50ML": 5883, "100ML": 8640 } },
    { id: 380, name: "JUICY COUTURE VIVA LA JUICY ROSE- B", category: "men", type: "FRENCH", price: 110, image: "🌹", format: "spray", productType: "impressions", brand: "JUICY COUTURE", sizes: { "10ML": 110, "20ML": 776, "30ML": 1452, "50ML": 2842, "100ML": 3572 } },
    { id: 381, name: "JO MALONE INCENSE & CEDRAT", category: "men", type: "FRENCH", price: 111, image: "🌹", format: "spray", productType: "impressions", brand: "JO MALONE", sizes: { "10ML": 111, "20ML": 918, "30ML": 1736, "50ML": 3207, "100ML": 4181 } },
    { id: 382, name: "JOHN VARVATOS ARTISAN PURE **", category: "men", type: "FRENCH", price: 112, image: "🌹", format: "spray", productType: "impressions", brand: "JOHN VARVATOS", sizes: { "10ML": 112, "20ML": 1119, "30ML": 2137, "50ML": 3723, "100ML": 5040 } },
    { id: 383, name: "JOHN VARVATOS DARK REBEL **", category: "men", type: "FRENCH", price: 113, image: "🌹", format: "spray", productType: "impressions", brand: "JOHN VARVATOS", sizes: { "10ML": 113, "20ML": 813, "30ML": 1526, "50ML": 2937, "100ML": 3731 } },
    { id: 384, name: "JOHN VARVATOS JOHN VARVATOS OUD (PRICE REDUCED) ORIENTAL M", category: "men", type: "FRENCH", price: 114, image: "🌹", format: "spray", productType: "impressions", brand: "JOHN VARVATOS", sizes: { "10ML": 114, "20ML": 964, "30ML": 1828, "50ML": 3325, "100ML": 4377 } },
    { id: 385, name: "KILIAN ANGEL'S SHARE ***", category: "men", type: "FRENCH", price: 115, image: "🌹", format: "spray", productType: "impressions", brand: "KILIAN", sizes: { "10ML": 115, "20ML": 1428, "30ML": 2756, "50ML": 4518, "100ML": 6367 } },
    { id: 386, name: "KILIAN APPLE BRANDY ON THE ROCKS (NEW)", category: "men", type: "FRENCH", price: 115, image: "🌹", format: "spray", productType: "impressions", brand: "KILIAN", sizes: { "10ML": 115, "20ML": 922, "30ML": 1745, "50ML": 3218, "100ML": 4199 } },
    { id: 387, name: "KILIAN SMOKE FOR THE SOUL", category: "men", type: "FRENCH", price: 116, image: "🌹", format: "spray", productType: "impressions", brand: "KILIAN", sizes: { "10ML": 116, "20ML": 997, "30ML": 1894, "50ML": 3410, "100ML": 4519 } },
    { id: 388, name: "KILIAN VODKA ON THE ROCKS", category: "men", type: "FRENCH", price: 117, image: "🌹", format: "spray", productType: "impressions", brand: "KILIAN", sizes: { "10ML": 117, "20ML": 842, "30ML": 1585, "50ML": 3012, "100ML": 3856 } },
    { id: 389, name: "KINGDOM OF SAUDI ARABIA BLACK OUD-OUD AL ASWAD", category: "men", type: "FRENCH", price: 118, image: "🌹", format: "spray", productType: "impressions", brand: "KINGDOM OF SAUDI ARABIA", sizes: { "10ML": 118, "20ML": 1207, "30ML": 2314, "50ML": 3950, "100ML": 5419 } },
    { id: 390, name: "KINGDOM OF SAUDI ARABIA FAWAKEH / REHAN E MADINA ***", category: "men", type: "FRENCH", price: 119, image: "🌹", format: "spray", productType: "impressions", brand: "KINGDOM OF SAUDI ARABIA", sizes: { "10ML": 119, "20ML": 1573, "30ML": 3046, "50ML": 4012, "100ML": 6444 } },
    { id: 391, name: "LACOSTE LACOSTE BLUE", category: "men", type: "FRENCH", price: 120, image: "🌹", format: "spray", productType: "impressions", brand: "LACOSTE", sizes: { "10ML": 120, "20ML": 1010, "30ML": 1921, "50ML": 3444, "100ML": 4577 } },
    { id: 392, name: "LAMAR KAJAL", category: "men", type: "FRENCH", price: 121, image: "🌹", format: "spray", productType: "impressions", brand: "LAMAR", sizes: { "10ML": 121, "20ML": 1373, "30ML": 2646, "50ML": 4376, "100ML": 6130 } },
    { id: 393, name: "LE LABO ANOTHER 13", category: "men", type: "FRENCH", price: 121, image: "🌹", format: "spray", productType: "impressions", brand: "LE LABO", sizes: { "10ML": 121, "20ML": 1926, "30ML": 3751, "50ML": 5797, "100ML": 8498 } },
    { id: 394, name: "LOUIS VOITON APOGEE FRENCH F", category: "men", type: "FRENCH", price: 121, image: "🌹", format: "spray", productType: "impressions", brand: "LOUIS VOITON", sizes: { "10ML": 121, "20ML": 931, "30ML": 1762, "50ML": 3239, "100ML": 4235 } },
    { id: 395, name: "LOUIS VOITON AFTERNOON SWIM FRENCH U", category: "men", type: "FRENCH", price: 122, image: "🌹", format: "spray", productType: "impressions", brand: "LOUIS VOITON", sizes: { "10ML": 122, "20ML": 1008, "30ML": 1916, "50ML": 3438, "100ML": 4567 } },
    { id: 396, name: "LOUIS VOITON IMAGINATION FRENCH M", category: "men", type: "FRENCH", price: 123, image: "🌹", format: "spray", productType: "impressions", brand: "LOUIS VOITON", sizes: { "10ML": 123, "20ML": 1406, "30ML": 2712, "50ML": 4462, "100ML": 6272 } },
    { id: 397, name: "LOUIS VOITON OMBRE NOMADE ***", category: "men", type: "FRENCH", price: 124, image: "🌹", format: "spray", productType: "impressions", brand: "LOUIS VOITON", sizes: { "10ML": 124, "20ML": 1428, "30ML": 2756, "50ML": 4518, "100ML": 6367 } },
    { id: 398, name: "MAISON FRANCIS KURKDJIAN AMYRIS HOMME EXTRAIT DE PARFUM", category: "men", type: "FRENCH", price: 123, image: "🌹", format: "spray", productType: "impressions", brand: "MAISON FRANCIS KURKDJIAN", sizes: { "10ML": 123, "20ML": 1019, "30ML": 1938, "50ML": 3467, "100ML": 4614 } },
    { id: 399, name: "MAISON FRANCIS KURKDJIAN BACCARAT ROUGE", category: "men", type: "FRENCH", price: 124, image: "🌹", format: "spray", productType: "impressions", brand: "MAISON FRANCIS KURKDJIAN", sizes: { "10ML": 124, "20ML": 540, "30ML": 1165, "50ML": 2230, "100ML": 3842 } },
    { id: 400, name: "MAISON FRANCIS KURKDJIAN MASCULIN PLURIEL", category: "men", type: "FRENCH", price: 125, image: "🌹", format: "spray", productType: "impressions", brand: "MAISON FRANCIS KURKDJIAN", sizes: { "10ML": 125, "20ML": 885, "30ML": 1670, "50ML": 3122, "100ML": 4039 } },
    { id: 401, name: "MAISON FRANCIS KURKDJIAN OUD SATIN MOOD", category: "men", type: "FRENCH", price: 126, image: "🌹", format: "spray", productType: "impressions", brand: "MAISON FRANCIS KURKDJIAN", sizes: { "10ML": 126, "20ML": 1067, "30ML": 2034, "50ML": 3590, "100ML": 4819 } },
    { id: 402, name: "MAISON FRANCIS KURKDJIAN OUD SILK MOOD", category: "men", type: "FRENCH", price: 127, image: "🌹", format: "spray", productType: "impressions", brand: "MAISON FRANCIS KURKDJIAN", sizes: { "10ML": 127, "20ML": 1044, "30ML": 1989, "50ML": 3532, "100ML": 4722 } },
    { id: 403, name: "MAISON FRANCIS KURKDJIAN OUD VELVET MOOD", category: "men", type: "FRENCH", price: 128, image: "🌹", format: "spray", productType: "impressions", brand: "MAISON FRANCIS KURKDJIAN", sizes: { "10ML": 128, "20ML": 1099, "30ML": 2099, "50ML": 3673, "100ML": 4958 } },
    { id: 404, name: "MAISON MARTIN MARGEILA AT THE BARBER'S", category: "men", type: "FRENCH", price: 129, image: "🌹", format: "spray", productType: "impressions", brand: "MAISON MARTIN MARGEILA", sizes: { "10ML": 129, "20ML": 956, "30ML": 1813, "50ML": 3305, "100ML": 4345 } },
    { id: 405, name: "MAISON MARTIN MARGEILA JAZZ CLUB", category: "men", type: "FRENCH", price: 130, image: "🌹", format: "spray", productType: "impressions", brand: "MAISON MARTIN MARGEILA", sizes: { "10ML": 130, "20ML": 1340, "30ML": 2579, "50ML": 4291, "100ML": 5988 } },
    { id: 406, name: "MANCERA BLACK VANILA", category: "men", type: "FRENCH", price: 131, image: "🌹", format: "spray", productType: "impressions", brand: "MANCERA", sizes: { "10ML": 131, "20ML": 806, "30ML": 1512, "50ML": 2918, "100ML": 3700 } },
    { id: 407, name: "MANCERA CEDRAT BOISE***", category: "men", type: "FRENCH", price: 132, image: "🌹", format: "spray", productType: "impressions", brand: "MANCERA", sizes: { "10ML": 132, "20ML": 1208, "30ML": 2316, "50ML": 3953, "100ML": 5424 } },
    { id: 408, name: "MANCERA SAHARIAN WIND*", category: "men", type: "FRENCH", price: 133, image: "🌹", format: "spray", productType: "impressions", brand: "MANCERA", sizes: { "10ML": 133, "20ML": 931, "30ML": 1762, "50ML": 3239, "100ML": 4235 } },
    { id: 409, name: "MATIERE PREMIERE FALCON LEATHER", category: "men", type: "FRENCH", price: 134, image: "🌹", format: "spray", productType: "impressions", brand: "MATIERE PREMIERE", sizes: { "10ML": 134, "20ML": 931, "30ML": 1762, "50ML": 3269, "100ML": 4235 } },
    { id: 410, name: "MARC-ANTONIE GANYMEDE***", category: "men", type: "FRENCH", price: 135, image: "🌹", format: "spray", productType: "impressions", brand: "MARC-ANTONIE", sizes: { "10ML": 135, "20ML": 1240, "30ML": 2381, "50ML": 4065, "100ML": 5561 } },
    { id: 411, name: "MEMO PARIS AFRICAN LEATHER 3", category: "men", type: "FRENCH", price: 136, image: "🌹", format: "spray", productType: "impressions", brand: "MEMO PARIS", sizes: { "10ML": 136, "20ML": 838, "30ML": 1576, "50ML": 3031, "100ML": 3838 } },
    { id: 412, name: "MEMO PARIS ITALLIAN LEATHER", category: "men", type: "FRENCH", price: 137, image: "🌹", format: "spray", productType: "impressions", brand: "MEMO PARIS", sizes: { "10ML": 137, "20ML": 747, "30ML": 1395, "50ML": 2798, "100ML": 3449 } },
    { id: 413, name: "MEMO PARIS OCEAN LEATHER *", category: "men", type: "FRENCH", price: 138, image: "🌹", format: "spray", productType: "impressions", brand: "MEMO PARIS", sizes: { "10ML": 138, "20ML": 785, "30ML": 1470, "50ML": 2894, "100ML": 3610 } },
    { id: 414, name: "MEMO PARIS RUSSIAN LEATHER 5", category: "men", type: "FRENCH", price: 139, image: "🌹", format: "spray", productType: "impressions", brand: "MEMO PARIS", sizes: { "10ML": 139, "20ML": 747, "30ML": 1395, "50ML": 2798, "100ML": 3449 } },
    { id: 415, name: "MONTBLANC EXPLORER", category: "men", type: "FRENCH", price: 140, image: "🌹", format: "spray", productType: "impressions", brand: "MONTBLANC", sizes: { "10ML": 140, "20ML": 724, "30ML": 1349, "50ML": 2739, "100ML": 3351 } },
    { id: 416, name: "MONTBLANC FEMME INDIVIDUELLE***", category: "men", type: "FRENCH", price: 141, image: "🌹", format: "spray", productType: "impressions", brand: "MONTBLANC", sizes: { "10ML": 141, "20ML": 1071, "30ML": 2042, "50ML": 3630, "100ML": 4837 } },
    { id: 417, name: "MONTBLANC LEGEND ** 1", category: "men", type: "FRENCH", price: 142, image: "🌹", format: "spray", productType: "impressions", brand: "MONTBLANC", sizes: { "10ML": 142, "20ML": 761, "30ML": 1421, "50ML": 2832, "100ML": 3506 } },
    { id: 418, name: "MONTBLANC LEGEND SPIRIT", category: "men", type: "FRENCH", price: 143, image: "🌹", format: "spray", productType: "impressions", brand: "MONTBLANC", sizes: { "10ML": 143, "20ML": 842, "30ML": 1585, "50ML": 3042, "100ML": 3856 } },
    { id: 419, name: "NASOMATTO BLAMAGE", category: "men", type: "FRENCH", price: 143, image: "🌹", format: "spray", productType: "impressions", brand: "NASOMATTO", sizes: { "10ML": 143, "20ML": 1163, "30ML": 2226, "50ML": 3866, "100ML": 5230 } },
    { id: 420, name: "NASOMATTO BARAONDO", category: "men", type: "FRENCH", price: 144, image: "🌹", format: "spray", productType: "impressions", brand: "NASOMATTO", sizes: { "10ML": 144, "20ML": 1815, "30ML": 3530, "50ML": 5543, "100ML": 8025 } },
    { id: 421, name: "NASOMATTO BLACK AFGHANO ***", category: "men", type: "FRENCH", price: 144, image: "🌹", format: "spray", productType: "impressions", brand: "NASOMATTO", sizes: { "10ML": 144, "20ML": 870, "30ML": 1640, "50ML": 3113, "100ML": 3975 } },
    { id: 422, name: "NASOMATTO DURO", category: "men", type: "FRENCH", price: 145, image: "🌹", format: "spray", productType: "impressions", brand: "NASOMATTO", sizes: { "10ML": 145, "20ML": 2257, "30ML": 4414, "50ML": 6680, "100ML": 9919 } },
    { id: 423, name: "NISHANE HACIVAT***", category: "men", type: "FRENCH", price: 146, image: "🌹", format: "spray", productType: "impressions", brand: "NISHANE", sizes: { "10ML": 146, "20ML": 1594, "30ML": 3088, "50ML": 4975, "100ML": 7077 } },
    { id: 424, name: "ORMONDE JAYNE ARABESQUE", category: "men", type: "FRENCH", price: 145, image: "🌹", format: "spray", productType: "impressions", brand: "ORMONDE JAYNE", sizes: { "10ML": 145, "20ML": 1262, "30ML": 2425, "50ML": 4122, "100ML": 5656 } },
    { id: 425, name: "ORMONDE JAYNE MONTABACCO", category: "men", type: "FRENCH", price: 146, image: "🌹", format: "spray", productType: "impressions", brand: "ORMONDE JAYNE", sizes: { "10ML": 146, "20ML": 2478, "30ML": 4856, "50ML": 7248, "100ML": 10867 } },
    { id: 426, name: "ORMONDE JAYNE NAWAB OF OUD", category: "men", type: "FRENCH", price: 147, image: "🌹", format: "spray", productType: "impressions", brand: "ORMONDE JAYNE", sizes: { "10ML": 147, "20ML": 1594, "30ML": 3088, "50ML": 4975, "100ML": 7077 } },
    { id: 427, name: "PACO RABANNE 1 MILLION LUCKY", category: "men", type: "FRENCH", price: 148, image: "🌹", format: "spray", productType: "impressions", brand: "PACO RABANNE", sizes: { "10ML": 148, "20ML": 925, "30ML": 1749, "50ML": 3224, "100ML": 4209 } },
    { id: 428, name: "PACO RABANNE 1 MILLION INTENSE (NEW)", category: "men", type: "FRENCH", price: 149, image: "🌹", format: "spray", productType: "impressions", brand: "PACO RABANNE", sizes: { "10ML": 149, "20ML": 1141, "30ML": 2182, "50ML": 3779, "100ML": 5135 } },
    { id: 429, name: "PACO RABANNE INVICTUS PLATINUM (NEW)", category: "men", type: "FRENCH", price: 150, image: "🌹", format: "spray", productType: "impressions", brand: "PACO RABANNE", sizes: { "10ML": 150, "20ML": 887, "30ML": 1673, "50ML": 3126, "100ML": 4046 } },
    { id: 430, name: "PACO RABANNE PHANTOM", category: "men", type: "FRENCH", price: 149, image: "🌹", format: "spray", productType: "impressions", brand: "PACO RABANNE", sizes: { "10ML": 149, "20ML": 826, "30ML": 1552, "50ML": 2969, "100ML": 3785 } },
    { id: 431, name: "PARFUMS DE MARLEY GALLOWAY***", category: "men", type: "FRENCH", price: 150, image: "🌹", format: "spray", productType: "impressions", brand: "PARFUMS DE MARLEY", sizes: { "10ML": 150, "20ML": 900, "30ML": 1700, "50ML": 3160, "100ML": 4102 } },
    { id: 432, name: "PARFUMS DE MARLEY GREENLY***", category: "men", type: "FRENCH", price: 151, image: "🌹", format: "spray", productType: "impressions", brand: "PARFUMS DE MARLEY", sizes: { "10ML": 151, "20ML": 1439, "30ML": 2778, "50ML": 4547, "100ML": 6414 } },
    { id: 433, name: "PARFUMS DE MARLEY KALAN", category: "men", type: "FRENCH", price: 152, image: "🌹", format: "spray", productType: "impressions", brand: "PARFUMS DE MARLEY", sizes: { "10ML": 152, "20ML": 914, "30ML": 1728, "50ML": 3197, "100ML": 4164 } },
    { id: 434, name: "PARFUMS DE MARLEY LAYTON*** (PRICE REDUCED) FRENCH M", category: "men", type: "FRENCH", price: 153, image: "🌹", format: "spray", productType: "impressions", brand: "PARFUMS DE MARLEY", sizes: { "10ML": 153, "20ML": 1030, "30ML": 1961, "50ML": 3495, "100ML": 4661 } },
    { id: 435, name: "PARFUMS DE MARLEY OAJAN **", category: "men", type: "FRENCH", price: 154, image: "🌹", format: "spray", productType: "impressions", brand: "PARFUMS DE MARLEY", sizes: { "10ML": 154, "20ML": 876, "30ML": 1651, "50ML": 3097, "100ML": 3998 } },
    { id: 436, name: "PARFUMS DE MARLEY PEGASUS **", category: "men", type: "FRENCH", price: 155, image: "🌹", format: "spray", productType: "impressions", brand: "PARFUMS DE MARLEY", sizes: { "10ML": 155, "20ML": 931, "30ML": 1762, "50ML": 3239, "100ML": 4235 } },
    { id: 437, name: "PARFUMS DE MARLEY SEDLEY*", category: "men", type: "FRENCH", price: 156, image: "🌹", format: "spray", productType: "impressions", brand: "PARFUMS DE MARLEY", sizes: { "10ML": 156, "20ML": 908, "30ML": 1715, "50ML": 3180, "100ML": 4136 } },
    { id: 438, name: "PENHALIGON 'S CLANDESTINE CLARA (PRE ORDER)", category: "men", type: "FRENCH", price: 157, image: "🌹", format: "spray", productType: "impressions", brand: "PENHALIGON", sizes: { "10ML": 157, "20ML": 1461, "30ML": 2823, "50ML": 4604, "100ML": 6509 } },
    { id: 439, name: "PENHALIGON 'S HALFETI LEATHER**", category: "men", type: "FRENCH", price: 158, image: "🌹", format: "spray", productType: "impressions", brand: "PENHALIGON", sizes: { "10ML": 158, "20ML": 879, "30ML": 1658, "50ML": 3106, "100ML": 4013 } },
    { id: 440, name: "PENHALIGON 'S JUNIPER SLING 2", category: "men", type: "FRENCH", price: 159, image: "🌹", format: "spray", productType: "impressions", brand: "PENHALIGON", sizes: { "10ML": 159, "20ML": 1130, "30ML": 2159, "50ML": 3751, "100ML": 5088 } },
    { id: 441, name: "PENHALIGON 'S THE BLAZING MR SAM (PRE ORDER)", category: "men", type: "FRENCH", price: 159, image: "🌹", format: "spray", productType: "impressions", brand: "PENHALIGON", sizes: { "10ML": 159, "20ML": 1340, "30ML": 2579, "50ML": 4291, "100ML": 5988 } },
    { id: 442, name: "PENHALIGON 'S THE INIMITABLE WILLIAM PENHALIGON", category: "men", type: "FRENCH", price: 160, image: "🌹", format: "spray", productType: "impressions", brand: "PENHALIGON", sizes: { "10ML": 160, "20ML": 973, "30ML": 1846, "50ML": 3347, "100ML": 4415 } },
    { id: 443, name: "PRADA LUNA ROSA CARBON**", category: "men", type: "FRENCH", price: 162, image: "🌹", format: "spray", productType: "impressions", brand: "PRADA", sizes: { "10ML": 162, "20ML": 1097, "30ML": 2093, "50ML": 3666, "100ML": 4946 } },
    { id: 444, name: "RALPH LAUREN POLO BLACK - A (NEW)", category: "men", type: "FRENCH", price: 163, image: "🌹", format: "spray", productType: "impressions", brand: "RALPH LAUREN", sizes: { "10ML": 163, "20ML": 858, "30ML": 1617, "50ML": 3053, "100ML": 3925 } },
    { id: 445, name: "RALPH LAUREN POLO BLUE", category: "men", type: "FRENCH", price: 164, image: "🌹", format: "spray", productType: "impressions", brand: "RALPH LAUREN", sizes: { "10ML": 164, "20ML": 734, "30ML": 1367, "50ML": 2732, "100ML": 3390 } },
    { id: 446, name: "REMY LATOUR CIGAR", category: "men", type: "FRENCH", price: 165, image: "🌹", format: "spray", productType: "impressions", brand: "REMY LATOUR", sizes: { "10ML": 165, "20ML": 739, "30ML": 1378, "50ML": 2747, "100ML": 3414 } },
    { id: 447, name: "ROJA DOVE AMBER OUD", category: "men", type: "FRENCH", price: 166, image: "🌹", format: "spray", productType: "impressions", brand: "ROJA DOVE", sizes: { "10ML": 166, "20ML": 1389, "30ML": 2678, "50ML": 4418, "100ML": 6200 } },
    { id: 448, name: "ROJA DOVE ELYSIUM***", category: "men", type: "FRENCH", price: 167, image: "🌹", format: "spray", productType: "impressions", brand: "ROJA DOVE", sizes: { "10ML": 167, "20ML": 1823, "30ML": 3545, "50ML": 5533, "100ML": 8058 } },
    { id: 449, name: "ROJA DOVE ENIGMA", category: "men", type: "FRENCH", price: 168, image: "🌹", format: "spray", productType: "impressions", brand: "ROJA DOVE", sizes: { "10ML": 168, "20ML": 3029, "30ML": 5958, "50ML": 8635, "100ML": 13228 } },
    { id: 450, name: "ROJA DOVE O EXCLUSIVE PARFUM (PRE ORDER)", category: "men", type: "FRENCH", price: 169, image: "🌹", format: "spray", productType: "impressions", brand: "ROJA DOVE", sizes: { "10ML": 169, "20ML": 1099, "30ML": 2098, "50ML": 3671, "100ML": 4955 } },
    { id: 451, name: "ROJA DOVE OLIGARCG ROJA DOVE (NEW)", category: "men", type: "FRENCH", price: 170, image: "🌹", format: "spray", productType: "impressions", brand: "ROJA DOVE", sizes: { "10ML": 170, "20ML": 775, "30ML": 1449, "50ML": 2838, "100ML": 3566 } },
    { id: 452, name: "ROJA DOVE RECKLESS ROJA POUR FEMME***", category: "men", type: "FRENCH", price: 171, image: "🌹", format: "spray", productType: "impressions", brand: "ROJA DOVE", sizes: { "10ML": 171, "20ML": 1499, "30ML": 2898, "50ML": 4701, "100ML": 6671 } },
    { id: 453, name: "ROJA DOVE SCANDAL POUR HOMME (PRE ORDER)", category: "men", type: "FRENCH", price: 172, image: "🌹", format: "spray", productType: "impressions", brand: "ROJA DOVE", sizes: { "10ML": 172, "20ML": 1227, "30ML": 2354, "50ML": 4001, "100ML": 5505 } },
    { id: 454, name: "THAMEEN REGENT LEATHER", category: "men", type: "FRENCH", price: 172, image: "🌹", format: "spray", productType: "impressions", brand: "THAMEEN", sizes: { "10ML": 172, "20ML": 931, "30ML": 1762, "50ML": 3239, "100ML": 4235 } },
    { id: 455, name: "THOMAS KOSMALA No.1 TONIC BLANC**", category: "men", type: "FRENCH", price: 173, image: "🌹", format: "spray", productType: "impressions", brand: "THOMAS KOSMALA", sizes: { "10ML": 173, "20ML": 1030, "30ML": 1961, "50ML": 3495, "100ML": 4661 } },
    { id: 456, name: "THOMAS KOSMALA No.4 APRES l'AMOUR** PRICE", category: "men", type: "FRENCH", price: 174, image: "🌹", format: "spray", productType: "impressions", brand: "THOMAS KOSMALA", sizes: { "10ML": 174, "20ML": 2024 } },
    { id: 457, name: "TIZIANA TERENZI ORION", category: "men", type: "FRENCH", price: 175, image: "🌹", format: "spray", productType: "impressions", brand: "TIZIANA TERENZI", sizes: { "10ML": 175, "20ML": 967, "30ML": 1833, "50ML": 3332, "100ML": 4389 } },
    { id: 458, name: "TOMFORD BLACK ORCHID", category: "men", type: "FRENCH", price: 176, image: "🌹", format: "spray", productType: "impressions", brand: "TOMFORD", sizes: { "10ML": 176, "20ML": 921, "30ML": 1743, "50ML": 3215, "100ML": 4195 } },
    { id: 459, name: "TOMFORD EBENE FUME", category: "men", type: "FRENCH", price: 177, image: "🌹", format: "spray", productType: "impressions", brand: "TOMFORD", sizes: { "10ML": 177, "20ML": 1097, "30ML": 2093, "50ML": 3666, "100ML": 4946 } },
    { id: 460, name: "TOMFORD GREY VETIVER", category: "men", type: "FRENCH", price: 177, image: "🌹", format: "spray", productType: "impressions", brand: "TOMFORD", sizes: { "10ML": 177, "20ML": 842, "30ML": 1585, "50ML": 3012, "100ML": 3856 } },
    { id: 461, name: "TOMFORD NOIR", category: "men", type: "FRENCH", price: 178, image: "🌹", format: "spray", productType: "impressions", brand: "TOMFORD", sizes: { "10ML": 178, "20ML": 871, "30ML": 1641, "50ML": 3085, "100ML": 3977 } },
    { id: 462, name: "TOMFORD OMBRE LEATHER", category: "men", type: "FRENCH", price: 179, image: "🌹", format: "spray", productType: "impressions", brand: "TOMFORD", sizes: { "10ML": 179, "20ML": 1406, "30ML": 2712, "50ML": 4462, "100ML": 6272 } },
    { id: 463, name: "TOMFORD OUD WOOD", category: "men", type: "FRENCH", price: 180, image: "🌹", format: "spray", productType: "impressions", brand: "TOMFORD", sizes: { "10ML": 180, "20ML": 789, "30ML": 1479, "50ML": 2876, "100ML": 3629 } },
    { id: 464, name: "TOMFORD OUD WOOD INTENSE - B", category: "men", type: "FRENCH", price: 181, image: "🌹", format: "spray", productType: "impressions", brand: "TOMFORD", sizes: { "10ML": 181, "20ML": 1037, "30ML": 1974, "50ML": 3512, "100ML": 4690 } },
    { id: 465, name: "TOMFORD ROSE PRICK", category: "men", type: "FRENCH", price: 182, image: "🌹", format: "spray", productType: "impressions", brand: "TOMFORD", sizes: { "10ML": 182, "20ML": 862, "30ML": 1623, "50ML": 3062, "100ML": 3939 } },
    { id: 466, name: "TOMFORD RIVE D'AMBRE", category: "men", type: "FRENCH", price: 183, image: "🌹", format: "spray", productType: "impressions", brand: "TOMFORD", sizes: { "10ML": 183, "20ML": 778, "30ML": 1456, "50ML": 2847, "100ML": 3581 } },
    { id: 467, name: "TOMFORD TOBACCO OUD***", category: "men", type: "FRENCH", price: 183, image: "🌹", format: "spray", productType: "impressions", brand: "TOMFORD", sizes: { "10ML": 183, "20ML": 1124, "30ML": 2148, "50ML": 3737, "100ML": 5064 } },
    { id: 468, name: "TOMFORD TOBACCO VANILA", category: "men", type: "FRENCH", price: 184, image: "🌹", format: "spray", productType: "impressions", brand: "TOMFORD", sizes: { "10ML": 184, "20ML": 802, "30ML": 1505, "50ML": 2909, "100ML": 3685 } },
    { id: 469, name: "TOMFORD TOMFORD FOR MEN EXTREME", category: "men", type: "FRENCH", price: 185, image: "🌹", format: "spray", productType: "impressions", brand: "TOMFORD", sizes: { "10ML": 185, "20ML": 896, "30ML": 1692, "50ML": 3150, "100ML": 4086 } },
    { id: 470, name: "TOMFORD TUSCON LEATHER **", category: "men", type: "FRENCH", price: 186, image: "🌹", format: "spray", productType: "impressions", brand: "TOMFORD", sizes: { "10ML": 186, "20ML": 950, "30ML": 1800, "50ML": 3289, "100ML": 4318 } },
    { id: 471, name: "VERSACE DYLAN BLUE", category: "men", type: "FRENCH", price: 186, image: "🌹", format: "spray", productType: "impressions", brand: "VERSACE", sizes: { "10ML": 186, "20ML": 759, "30ML": 1419, "50ML": 2799, "100ML": 3501 } },
    { id: 472, name: "VICTORIA SECRET BOMBSHELL (NEW & BETTER) ***", category: "men", type: "FRENCH", price: 187, image: "🌹", format: "spray", productType: "impressions", brand: "VICTORIA SECRET", sizes: { "10ML": 187, "20ML": 1007, "30ML": 1914, "50ML": 3436, "100ML": 4562 } },
    { id: 473, name: "VICTORIA SECRET COCONUT PASSION", category: "men", type: "FRENCH", price: 188, image: "🌹", format: "spray", productType: "impressions", brand: "VICTORIA SECRET", sizes: { "10ML": 188, "20ML": 756, "30ML": 1412, "50ML": 2790, "100ML": 3487 } },
    { id: 474, name: "VICTORIA SECRET LOVE SPELL", category: "men", type: "FRENCH", price: 189, image: "🌹", format: "spray", productType: "impressions", brand: "VICTORIA SECRET", sizes: { "10ML": 189, "20ML": 737, "30ML": 1375, "50ML": 2742, "100ML": 3406 } },
    { id: 475, name: "VICTORIA SECRET RUSH", category: "men", type: "FRENCH", price: 190, image: "🌹", format: "spray", productType: "impressions", brand: "VICTORIA SECRET", sizes: { "10ML": 190, "20ML": 782, "30ML": 1463, "50ML": 2856, "100ML": 3596 } },
    { id: 476, name: "VICTORIA SECRET VERY SEXY", category: "men", type: "FRENCH", price: 191, image: "🌹", format: "spray", productType: "impressions", brand: "VICTORIA SECRET", sizes: { "10ML": 191, "20ML": 747, "30ML": 1395, "50ML": 2768, "100ML": 3449 } },
    { id: 477, name: "VICTORIA SECRET VICTORIA", category: "men", type: "FRENCH", price: 192, image: "🌹", format: "spray", productType: "impressions", brand: "VICTORIA SECRET", sizes: { "10ML": 192, "20ML": 748, "30ML": 1397, "50ML": 2770, "100ML": 3453 } },
    { id: 478, name: "VIKTOR&ROLF SPICEBOMB *", category: "men", type: "FRENCH", price: 193, image: "🌹", format: "spray", productType: "impressions", brand: "VIKTOR&ROLF", sizes: { "10ML": 193, "20ML": 925, "30ML": 1751, "50ML": 3225, "100ML": 4211 } },
    { id: 479, name: "VIKTOR&ROLF SPICEBOMB EXTREME ***", category: "men", type: "FRENCH", price: 194, image: "🌹", format: "spray", productType: "impressions", brand: "VIKTOR&ROLF", sizes: { "10ML": 194, "20ML": 985, "30ML": 1870, "50ML": 3379, "100ML": 4468 } },
    { id: 480, name: "XERJOFF XJ NAXOS", category: "men", type: "FRENCH", price: 195, image: "🌹", format: "spray", productType: "impressions", brand: "XERJOFF", sizes: { "10ML": 195, "20ML": 1861, "30ML": 1428, "50ML": 2756, "100ML": 4518 } },
    { id: 481, name: "XERJOFF XJ RENAISSANCE", category: "men", type: "FRENCH", price: 196, image: "🌹", format: "spray", productType: "impressions", brand: "XERJOFF", sizes: { "10ML": 196, "20ML": 1861, "30ML": 2147, "50ML": 4193, "100ML": 6366 } },
    { id: 482, name: "YSL BLACK OPIUM", category: "men", type: "FRENCH", price: 197, image: "🌹", format: "spray", productType: "impressions", brand: "YSL", sizes: { "10ML": 197, "20ML": 776, "30ML": 1452, "50ML": 2842, "100ML": 3572 } },
    { id: 483, name: "YSL LIBRE INTENSE **", category: "men", type: "FRENCH", price: 198, image: "🌹", format: "spray", productType: "impressions", brand: "YSL", sizes: { "10ML": 198, "20ML": 876, "30ML": 1651, "50ML": 3097, "100ML": 3998 } },
    { id: 484, name: "YSL TUXEDO", category: "men", type: "FRENCH", price: 199, image: "🌹", format: "spray", productType: "impressions", brand: "YSL", sizes: { "10ML": 199, "20ML": 1273, "30ML": 2447, "50ML": 4120, "100ML": 5703 } },
    { id: 485, name: "YSL WILD LEATHER", category: "men", type: "FRENCH", price: 200, image: "🌹", format: "spray", productType: "impressions", brand: "YSL", sizes: { "10ML": 200, "20ML": 869, "30ML": 1638, "50ML": 3080, "100ML": 3970 } },
    { id: 486, name: "YSL Y BY YSL ***", category: "men", type: "FRENCH", price: 201, image: "🌹", format: "spray", productType: "impressions", brand: "YSL", sizes: { "10ML": 201, "20ML": 1016, "30ML": 1933, "50ML": 3460, "100ML": 4602 } },
    { id: 487, name: "YSL Y LE PARFUM", category: "men", type: "FRENCH", price: 201, image: "🌹", format: "spray", productType: "impressions", brand: "YSL", sizes: { "10ML": 201, "20ML": 1318, "30ML": 2535, "50ML": 4234, "100ML": 5893 } },
    { id: 488, name: "YSL Y BY YSL INTENSE EDP", category: "men", type: "FRENCH", price: 202, image: "🌹", format: "spray", productType: "impressions", brand: "YSL", sizes: { "10ML": 202, "20ML": 1439, "30ML": 2778, "50ML": 4547, "100ML": 6414 } },
    { id: 489, name: "ZEGNA JAVANEESE PATCHOLI MEN", category: "men", type: "FRENCH", price: 210, image: "🌹", format: "spray", productType: "impressions", brand: "ZEGNA", sizes: { "10ML": 210, "20ML": 787, "30ML": 1474, "50ML": 2870, "100ML": 3619 } },
    { id: 490, name: "VALENTINO DONNA BORN IN ROMA FRENCH M", category: "men", type: "FRENCH", price: 185, image: "🌹", format: "spray", productType: "impressions", brand: "VALENTINO", sizes: { "10ML": 185, "20ML": 1052, "30ML": 2005, "50ML": 3552, "100ML": 4756 } },
];

// Cart State
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Filter and Pagination State
let currentPage = 1;
const productsPerPage = 40;
let filteredProducts = [...products];
let currentSort = 'featured';

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const cartIcon = document.getElementById('cartIcon');
const cartSidebar = document.getElementById('cartSidebar');
const cartClose = document.getElementById('cartClose');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const checkoutModal = document.getElementById('checkoutModal');
const checkoutModalClose = document.getElementById('checkoutModalClose');
const checkoutForm = document.getElementById('checkoutForm');
const paymentNote = document.getElementById('paymentNote');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const sortSelect = document.getElementById('sortSelect');
const pagination = document.getElementById('pagination');
const clearFiltersBtn = document.getElementById('clearFilters');

// Filter elements
const filterRange = document.getElementById('filterRange');
const filterGender = document.getElementById('filterGender');
const filterType = document.getElementById('filterType');
const filterSeason = document.getElementById('filterSeason');
const filterSillage = document.getElementById('filterSillage');
const filterLasting = document.getElementById('filterLasting');
const accountBtn = document.getElementById('accountBtn');
const authModal = document.getElementById('authModal');
const authClose = document.getElementById('authClose');
const authTabs = document.querySelectorAll('.auth-tab');
const signInForm = document.getElementById('signInForm');
const signUpForm = document.getElementById('signUpForm');
const switchToSignIn = document.getElementById('switchToSignIn');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    applyFiltersAndSort();
    updateCartUI();
    setupEventListeners();
    
    // Check for order success
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('order') === 'success') {
        alert('Order placed successfully! We will contact you shortly to confirm your order.');
        cart = [];
        saveCart();
        updateCartUI();
        window.history.replaceState({}, document.title, window.location.pathname);
    }
    
    // Handle navigation dropdown links
    document.querySelectorAll('.dropdown-menu a[data-filter]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = link.dataset.filter;
            if (filter) {
                // Scroll to products section
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                // Apply filter (you can add filter logic here)
            }
        });
    });
});

// Setup Event Listeners
function setupEventListeners() {
    // Cart toggle
    cartIcon.addEventListener('click', () => {
        cartSidebar.classList.add('open');
    });

    cartClose.addEventListener('click', () => {
        cartSidebar.classList.remove('open');
    });

    // Close cart when clicking outside
    document.addEventListener('click', (e) => {
        if (!cartSidebar.contains(e.target) && !cartIcon.contains(e.target)) {
            cartSidebar.classList.remove('open');
        }
    });

    // Account button - Open auth modal
    accountBtn.addEventListener('click', () => {
        authModal.classList.add('open');
        document.body.style.overflow = 'hidden';
    });

    // Auth modal close
    authClose.addEventListener('click', () => {
        authModal.classList.remove('open');
        document.body.style.overflow = '';
    });

    authModal.addEventListener('click', (e) => {
        if (e.target === authModal) {
            authModal.classList.remove('open');
            document.body.style.overflow = '';
        }
    });

    // Auth tab switching
    authTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.dataset.tab;
            authTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            if (tabName === 'signin') {
                signInForm.style.display = 'block';
                signUpForm.style.display = 'none';
                document.getElementById('authTitle').textContent = 'Sign In';
            } else {
                signInForm.style.display = 'none';
                signUpForm.style.display = 'block';
                document.getElementById('authTitle').textContent = 'Sign Up';
            }
        });
    });

    // Switch to sign in link
    if (switchToSignIn) {
        switchToSignIn.addEventListener('click', (e) => {
            e.preventDefault();
            authTabs[0].click();
        });
    }

    // Auth form submissions
    signInForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Sign in functionality will be implemented with backend integration.');
        // In production, integrate with authentication API
    });

    signUpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Sign up functionality will be implemented with backend integration.');
        // In production, integrate with authentication API
    });

    // Search functionality
    searchBtn.addEventListener('click', () => {
        performSearch();
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Sort functionality
    sortSelect.addEventListener('change', (e) => {
        currentSort = e.target.value;
        applyFiltersAndSort();
    });

    // Filter change handlers
    filterRange.addEventListener('change', applyFiltersAndSort);
    filterGender.addEventListener('change', applyFiltersAndSort);
    filterType.addEventListener('change', applyFiltersAndSort);
    filterSeason.addEventListener('change', applyFiltersAndSort);
    filterSillage.addEventListener('change', applyFiltersAndSort);
    filterLasting.addEventListener('change', applyFiltersAndSort);

    // Clear filters
    clearFiltersBtn.addEventListener('click', () => {
        filterRange.value = '';
        filterGender.value = '';
        filterType.value = '';
        filterSeason.value = '';
        filterSillage.value = '';
        filterLasting.value = '';
        searchInput.value = '';
        applyFiltersAndSort();
    });

    // Checkout button
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        openCheckoutModal();
    });

    // Checkout modal handlers
    checkoutModalClose.addEventListener('click', () => {
        checkoutModal.classList.remove('open');
    });

    checkoutModal.addEventListener('click', (e) => {
        if (e.target === checkoutModal) {
            checkoutModal.classList.remove('open');
        }
    });

    // Payment method change handler
    document.querySelectorAll('input[name="payment-method"]').forEach(method => {
        method.addEventListener('change', (e) => {
            updatePaymentNote(e.target.value);
        });
    });

    // Card number formatting
    const cardNumberInput = document.getElementById('cardNumber');
    if (cardNumberInput) {
        cardNumberInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\s/g, '');
            let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
            if (formattedValue.length <= 19) {
                e.target.value = formattedValue;
            }
        });
    }

    // Card expiry formatting
    const cardExpiryInput = document.getElementById('cardExpiry');
    if (cardExpiryInput) {
        cardExpiryInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.substring(0, 2) + '/' + value.substring(2, 4);
            }
            e.target.value = value;
        });
    }

    // CVV formatting
    const cardCvvInput = document.getElementById('cardCvv');
    if (cardCvvInput) {
        cardCvvInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/g, '');
        });
    }

    // JazzCash number formatting
    const jazzCashNumberInput = document.getElementById('jazzCashNumber');
    if (jazzCashNumberInput) {
        jazzCashNumberInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/g, '').substring(0, 11);
        });
    }

    // Easypaisa number formatting
    const easypaisaNumberInput = document.getElementById('easypaisaNumber');
    if (easypaisaNumberInput) {
        easypaisaNumberInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/g, '').substring(0, 11);
        });
    }

    // Checkout form submission
    checkoutForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
        const submitBtn = checkoutForm.querySelector('.btn-submit-order');
        
        submitBtn.disabled = true;
        submitBtn.textContent = 'Processing...';

        try {
            const formData = new FormData(checkoutForm);
            const orderItems = cart.map(item => 
                `${item.name}${item.selectedSize ? ' (' + item.selectedSize + ')' : ''} x${item.quantity} - PKR ${(item.price * item.quantity).toLocaleString()}`
            ).join(', ');
            const orderTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

            formData.append('order-items', orderItems);
            formData.append('order-total', orderTotal.toLocaleString());
            formData.append('payment-status', 'pending');
            
            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString()
            });

            if (response.ok) {
                checkoutModal.classList.remove('open');
                cartSidebar.classList.remove('open');
                cart = [];
                saveCart();
                updateCartUI();
                window.location.href = '/?order=success';
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('There was an error placing your order. Please try again or contact us directly.');
            submitBtn.disabled = false;
            submitBtn.textContent = 'Place Order';
        }
    });

    // Subscription form
    const subscriptionForm = document.getElementById('subscriptionForm');
    if (subscriptionForm) {
        subscriptionForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(subscriptionForm);
            
            try {
                const response = await fetch('/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: new URLSearchParams(formData).toString()
                });
                
                if (response.ok) {
                    alert('Thank you for subscribing!');
                    subscriptionForm.reset();
                }
            } catch (error) {
                alert('There was an error. Please try again.');
            }
        });
    }
}

// Search functionality
function performSearch() {
    applyFiltersAndSort();
}

// Apply filters and sort
function applyFiltersAndSort() {
    let filtered = [...products];
    
    // Search filter
    const searchTerm = searchInput.value.toLowerCase().trim();
    if (searchTerm) {
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(searchTerm) ||
            p.brand.toLowerCase().includes(searchTerm) ||
            p.type.toLowerCase().includes(searchTerm) ||
            p.category.toLowerCase().includes(searchTerm)
        );
    }
    
    // Range filter
    const range = filterRange.value;
    if (range) {
        filtered = filtered.filter(p => {
            const price = p.price;
            if (range === 'budget') return price < 500;
            if (range === 'mid') return price >= 500 && price < 1500;
            if (range === 'premium') return price >= 1500 && price < 3000;
            if (range === 'luxury') return price >= 3000;
            return true;
        });
    }
    
    // Gender filter
    const gender = filterGender.value;
    if (gender) {
        filtered = filtered.filter(p => p.category === gender);
    }
    
    // Type filter
    const type = filterType.value;
    if (type) {
        filtered = filtered.filter(p => p.type === type);
    }
    
    // Sort products
    filtered = sortProducts(filtered, currentSort);
    
    filteredProducts = filtered;
    currentPage = 1;
    renderProducts();
    renderPagination();
}

// Sort products
function sortProducts(productsToSort, sortType) {
    const sorted = [...productsToSort];
    
    switch(sortType) {
        case 'a-z':
            return sorted.sort((a, b) => a.name.localeCompare(b.name));
        case 'z-a':
            return sorted.sort((a, b) => b.name.localeCompare(a.name));
        case 'price-low':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price-high':
            return sorted.sort((a, b) => b.price - a.price);
        case 'bestselling':
            // For now, sort by price (you can add actual sales data later)
            return sorted.sort((a, b) => b.price - a.price);
        case 'featured':
        default:
            // Keep original order (or you can add featured flag)
            return sorted;
    }
}

// Render Products with Pagination
function renderProducts() {
    productsGrid.innerHTML = '';
    
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToRender = filteredProducts.slice(startIndex, endIndex);
    
    if (productsToRender.length === 0) {
        productsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-light);">No products found matching your criteria.</p>';
        return;
    }

    productsToRender.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        // Get available sizes - only show sizes with valid prices
        const sizes = product.sizes || {};
        const sizeOptions = Object.keys(sizes).filter(size => sizes[size] && sizes[size] > 0 && !isNaN(sizes[size]));
        let defaultSize = sizeOptions[0] || '5ML';
        if (product.productType === 'oil') {
            defaultSize = sizeOptions.find(s => s === '3ML') || sizeOptions.find(s => s === '5ML') || sizeOptions[0] || '3ML';
        } else if (product.productType === 'impressions') {
            defaultSize = sizeOptions.find(s => s === '10ML') || sizeOptions[0] || '10ML';
        } else {
            defaultSize = sizeOptions.find(s => s === '5ML') || sizeOptions[0] || '5ML';
        }
        const defaultPrice = sizes[defaultSize] || product.price;
        
        // Create size selector HTML - no default selection
        let sizeSelectorHTML = '';
        if (sizeOptions.length > 1) {
            sizeSelectorHTML = `<div class="product-sizes" data-product-id="${product.id}">
                ${sizeOptions.map(size => 
                    `<span class="size-option" data-size="${size}" data-price="${sizes[size]}">${size}</span>`
                ).join('')}
            </div>`;
        } else if (sizeOptions.length === 1) {
            sizeSelectorHTML = `<p class="product-size-info">${defaultSize} - PKR ${defaultPrice.toLocaleString()}</p>`;
        }
        
        productCard.innerHTML = `
            <div class="product-image" style="background: linear-gradient(135deg, #${Math.floor(Math.random()*16777215).toString(16)} 0%, #${Math.floor(Math.random()*16777215).toString(16)} 100%);">
                <span style="font-size: 4rem;">${product.image}</span>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-category">${product.brand} - ${product.type} (${product.category})</p>
                ${sizeSelectorHTML}
                <p class="product-price" id="price-${product.id}">PKR ${defaultPrice.toLocaleString()}</p>
                <button class="add-to-cart" data-product-id="${product.id}" data-selected-size="${defaultSize}" data-default-size="${defaultSize}">Add to Cart</button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });

    // Add event listeners for size selection
    document.querySelectorAll('.product-sizes').forEach(sizeContainer => {
        sizeContainer.addEventListener('click', (event) => {
            const selectedSizeElement = event.target;
            if (selectedSizeElement.classList.contains('size-option')) {
                const productId = sizeContainer.dataset.productId;
                const product = products.find(p => p.id == productId);
                const newSize = selectedSizeElement.dataset.size;
                const newPrice = parseFloat(selectedSizeElement.dataset.price);

                // Update active class
                Array.from(sizeContainer.children).forEach(span => {
                    span.classList.remove('selected');
                });
                selectedSizeElement.classList.add('selected');

                // Update displayed price
                const productPriceElement = sizeContainer.closest('.product-info').querySelector('.product-price');
                productPriceElement.textContent = `PKR ${newPrice.toLocaleString()}`;

                // Update the add to cart button's selected size
                const addToCartBtn = sizeContainer.closest('.product-info').querySelector('.add-to-cart');
                addToCartBtn.dataset.selectedSize = newSize;
                
            }
        });
    });

    // Add event listeners for Add to Cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (event) => {
            const productId = parseInt(event.target.dataset.productId);
            const selectedSize = event.target.dataset.selectedSize;
            addToCart(productId, selectedSize, 1); // Always add quantity 1 from product page
        });
    });
}

// Render Pagination
function renderPagination() {
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    pagination.innerHTML = '';
    
    if (totalPages <= 1) return;
    
    // Previous button
    const prevBtn = document.createElement('button');
    prevBtn.className = 'pagination-btn';
    prevBtn.textContent = '← Previous';
    prevBtn.disabled = currentPage === 1;
    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderProducts();
            renderPagination();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
    pagination.appendChild(prevBtn);
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = 'pagination-btn';
        pageBtn.textContent = i;
        if (i === currentPage) {
            pageBtn.classList.add('active');
        }
        pageBtn.addEventListener('click', () => {
            currentPage = i;
            renderProducts();
            renderPagination();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        pagination.appendChild(pageBtn);
    }
    
    // Next button
    const nextBtn = document.createElement('button');
    nextBtn.className = 'pagination-btn';
    nextBtn.textContent = 'Next →';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderProducts();
            renderPagination();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
    pagination.appendChild(nextBtn);
}

// Add to Cart
function addToCart(productId, selectedSize, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const sizes = product.sizes || {};
    const selectedPrice = sizes[selectedSize] || product.price;

    const cartItemId = `${productId}-${selectedSize}`;
    const existingItem = cart.find(item => item.cartItemId === cartItemId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            cartItemId: cartItemId,
            selectedSize: selectedSize,
            price: selectedPrice,
            quantity: quantity
        });
    }

    saveCart();
    updateCartUI();
    
    // Show feedback
    const btn = event.target;
    const originalText = btn.textContent;
    btn.textContent = 'Added!';
    btn.style.background = '#27ae60';
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
    }, 1000);
}

// Remove from Cart
function removeFromCart(cartItemId) {
    cart = cart.filter(item => item.cartItemId !== cartItemId);
    saveCart();
    updateCartUI();
}

// Update Cart Item Quantity
function updateCartItemQuantity(cartItemId, newQuantity) {
    const cartItem = cart.find(item => item.cartItemId === cartItemId);
    if (cartItem) {
        cartItem.quantity = newQuantity;
        saveCart();
        updateCartUI();
    }
}

// Update Cart UI
function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        cartTotal.textContent = '0';
        return;
    }

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.dataset.cartItemId = item.cartItemId;
        const sizeInfo = item.selectedSize ? ` (${item.selectedSize})` : '';
        cartItem.innerHTML = `
            <div class="cart-item-image" style="background: linear-gradient(135deg, #${Math.floor(Math.random()*16777215).toString(16)} 0%, #${Math.floor(Math.random()*16777215).toString(16)} 100%);">
                <span style="font-size: 2rem; display: flex; align-items: center; justify-content: center; height: 100%;">${item.image}</span>
            </div>
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}${sizeInfo}</div>
                <div class="cart-item-price">PKR ${item.price.toLocaleString()}</div>
                <div class="cart-item-quantity">
                    <label class="quantity-label">Quantity:</label>
                    <div class="quantity-controls">
                        <button class="quantity-btn minus" data-cart-item-id="${item.cartItemId}">−</button>
                        <input type="number" class="quantity-input" value="${item.quantity}" min="1" max="10" data-cart-item-id="${item.cartItemId}">
                        <button class="quantity-btn plus" data-cart-item-id="${item.cartItemId}">+</button>
                    </div>
                </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart('${item.cartItemId}')">&times;</button>
        `;
        cartItems.appendChild(cartItem);
        total += item.price * item.quantity;
    });

    // Add event listeners for cart quantity controls
    document.querySelectorAll('.cart-item .quantity-btn.plus').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const cartItemId = e.target.dataset.cartItemId;
            const input = document.querySelector(`.cart-item .quantity-input[data-cart-item-id="${cartItemId}"]`);
            const currentValue = parseInt(input.value) || 1;
            if (currentValue < 10) {
                input.value = currentValue + 1;
                updateCartItemQuantity(cartItemId, currentValue + 1);
            }
        });
    });

    document.querySelectorAll('.cart-item .quantity-btn.minus').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const cartItemId = e.target.dataset.cartItemId;
            const input = document.querySelector(`.cart-item .quantity-input[data-cart-item-id="${cartItemId}"]`);
            const currentValue = parseInt(input.value) || 1;
            if (currentValue > 1) {
                input.value = currentValue - 1;
                updateCartItemQuantity(cartItemId, currentValue - 1);
            }
        });
    });

    document.querySelectorAll('.cart-item .quantity-input').forEach(input => {
        input.addEventListener('change', (e) => {
            const cartItemId = e.target.dataset.cartItemId;
            const newQuantity = parseInt(e.target.value) || 1;
            if (newQuantity >= 1 && newQuantity <= 10) {
                updateCartItemQuantity(cartItemId, newQuantity);
            } else {
                e.target.value = 1;
                updateCartItemQuantity(cartItemId, 1);
            }
        });
    });

    cartTotal.textContent = total.toLocaleString();
}

// Save Cart to LocalStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Open Checkout Modal
function openCheckoutModal() {
    if (cart.length === 0) return;

    const checkoutOrderItems = document.getElementById('checkoutOrderItems');
    const checkoutTotal = document.getElementById('checkoutTotal');
    
    checkoutOrderItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const orderItem = document.createElement('div');
        orderItem.className = 'checkout-order-item';
        orderItem.innerHTML = `
            <div class="checkout-item-info">
                <strong>${item.name}${item.selectedSize ? ' (' + item.selectedSize + ')' : ''}</strong>
                <span>${item.category} perfume</span>
            </div>
            <div class="checkout-item-price">
                <span>${item.quantity} x PKR ${item.price.toLocaleString()} = PKR ${itemTotal.toLocaleString()}</span>
            </div>
        `;
        checkoutOrderItems.appendChild(orderItem);
    });

    checkoutTotal.textContent = total.toLocaleString();
    
    document.getElementById('orderItemsInput').value = cart.map(item => 
        `${item.name} x${item.quantity}`
    ).join(', ');
    document.getElementById('orderTotalInput').value = total.toLocaleString();

    checkoutForm.reset();
    const cashOnDeliveryRadio = document.querySelector('input[name="payment-method"][value="cash-on-delivery"]');
    if (cashOnDeliveryRadio) {
        cashOnDeliveryRadio.checked = true;
        updatePaymentNote('cash-on-delivery');
    }

    checkoutModal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

// Update Payment Note
function updatePaymentNote(method) {
    const onlineCardContainer = document.getElementById('onlineCardPaymentContainer');
    const jazzCashContainer = document.getElementById('jazzCashPaymentContainer');
    const easypaisaContainer = document.getElementById('easypaisaPaymentContainer');
    
    onlineCardContainer.style.display = 'none';
    jazzCashContainer.style.display = 'none';
    easypaisaContainer.style.display = 'none';
    
    if (method === 'cash-on-delivery') {
        paymentNote.innerHTML = '<p>💵 You will pay with cash when your order is delivered.</p>';
    } else if (method === 'online-card') {
        paymentNote.innerHTML = '<p>💳 Enter your card details below to pay securely online.</p>';
        onlineCardContainer.style.display = 'block';
    } else if (method === 'jazzcash') {
        paymentNote.innerHTML = '<p>📱 Enter your JazzCash mobile number. You will receive a payment request.</p>';
        jazzCashContainer.style.display = 'block';
    } else if (method === 'easypaisa') {
        paymentNote.innerHTML = '<p>📱 Enter your Easypaisa mobile number. You will receive a payment request.</p>';
        easypaisaContainer.style.display = 'block';
    }
}

// Close modal and restore scroll
checkoutModal.addEventListener('transitionend', () => {
    if (!checkoutModal.classList.contains('open')) {
        document.body.style.overflow = '';
    }
});
