const products = [
    {
        id: 1,
        productImg:
            'https://static.zennioptical.com/production/products/general/44/51/4451025-eyeglasses-angle-view.jpg?output-quality=90&resize=500px:*',
        productName: 'Aviator Glasses 4451025',
        productDesc:
            'Channel vintage vibes in these 70s-inspired aviator glasses. The glossy, oversized frame is accented with embellished metal at the temple arms in a criss-cross pattern that adds just the right amount of luxe to the look. For added comfort, the lightweight style is fitted with spring hinges.',
        productPrice: 39.95,
        productCategory: 'Men',
        productReview: 4,
        isSoldOut: false,
        isTag: true,
        productTag: 'New',
        productDiscount: 0,
    },
    {
        id: 2,
        productImg:
            'https://static.zennioptical.com/production/products/general/32/19/3219614-eyeglasses-front-view.jpg',
        productName: 'Round Glasses 3219614',
        productDesc:
            'Add a bit of whimsy to your eyewear wardrobe with these metal round glasses. The wide frame features round lenses with kitty ear accents on the outer corners. It comes in gold with black front rim, silver with black front rim, and rose gold. Adjustable nose pads and acetate temple tips provide added comfort.',
        productPrice: 23.95,
        productCategory: 'Women',
        productReview: 2,
        isSoldOut: true,
        isTag: true,
        productTag: 'SaleOff',
        productDiscount: 5,
    },
    {
        id: 3,
        productImg:
            'https://static.zennioptical.com/production/products/general/44/40/4440616-eyeglasses-front-view.jpg',
        productName: "Dare Kids' Square Glasses 4440616",
        productDesc:
            'Dare is part of our Style Squad line of fashionable eyewear for kids. Made with lightweight hand-polished acetate, this modern square frame features spring hinges and flexible temple tips for all-day comfort. It is available in the following colors: blue tortoiseshell, blush, purple with white glitter accents, and forest. Dare is also available in small and large sizes.',
        productPrice: 23.95,
        productCategory: 'Kid',
        productReview: 4,
        isSoldOut: false,
        isTag: true,
        productTag: 'New',
        productDiscount: 0,
    },
    {
        id: 4,
        productImg:
            'https://static.zennioptical.com/production/products/general/10/12/101235-eyeglasses-front-view.jpg',
        productName: 'Round Glasses 101235',
        productDesc:
            'As part of our collection honoring those who are Faithful to The Bay, grab all the attention with these chic round glasses with a fresh color pop. Made from glossy hand-polished acetate, the frame features a stylish keyhole bridge and thin temple arms. The lightweight look is ideal for comfortable, all-day wear.',
        productPrice: 25.95,
        productCategory: 'Men',
        productReview: 4,
        isSoldOut: false,
        isTag: true,
        productTag: 'SaleOff',
        productDiscount: 25,
    },
    {
        id: 5,
        productImg:
            'https://static.zennioptical.com/production/products/general/20/26/2026323-eyeglasses-front-view.jpg',
        productName: 'Square Glasses 2026323',
        productDesc:
            "Show that you're smart and stylish in these colorful square glasses. The glossy TR90 plastic frame features a classic shape in fresh modern colors, with metal stud details at the corners. For added comfort, the lightweight look features ultra flexible temple arms and plastic temple tips.",
        productPrice: 19.95,
        productCategory: 'Women',
        productReview: 3,
        isSoldOut: false,
        isTag: true,
        productTag: 'SaleOff',
        productDiscount: 25,
    },
    {
        id: 6,
        productImg:
            'https://static.zennioptical.com/production/products/general/44/31/4431449-eyeglasses-front-view.jpg',
        productName: "Kids' Square Glasses 4431449",
        productDesc:
            "This is the kids' version of the Bolinas frame from our North Coast Collection. With a classic square silhouette, Bolinas comes in bright colors reminiscent of the famous beach mural wall in this sleepy surf town. The sturdy, hand-polished acetate frame features spring hinges for a comfortable fit. This frame is a great choice for sunglasses too. To see the larger Bolinas frame, please see #4492.",
        productPrice: 19.95,
        productCategory: 'Kid',
        productReview: 3,
        isSoldOut: false,
        isTag: false,
        productTag: '',
        productDiscount: 0,
    },
    {
        id: 7,
        productImg:
            'https://static.zennioptical.com/production/products/general/12/79/127921-eyeglasses-front-view.jpg',
        productName: 'Square Glasses 127921',
        productDesc:
            'These square eyeglasses serve up plenty of style, comfort and value. The wide frame comes in three glossy color options and two matte options: black/brown pattern with multi-colored temple arms; clear with translucent tortoiseshell arms; tortoiseshell with translucent teal arms; matte translucent red with black arms and matte navy with tortoiseshell arms.',
        productPrice: 9.95,
        productCategory: 'Men',
        productReview: 5,
        isSoldOut: false,
        isTag: false,
        productTag: '',
        productDiscount: 0,
    },
    {
        id: 8,
        productImg:
            'https://static.zennioptical.com/production/products/general/37/51/375119-eyeglasses-angle-view.jpg',
        productName: 'Titanium Rimless Glasses 375119',
        productDesc:
            'A rimless, pure titanium, very light and flexible frame with crystal on temple arms. This frame is shown with lens shape #449. Please refer to the lens shape button above to see the 24 different lens shapes and sizes available with this frame. These different lens shape and size choices can significantly alter the overall look and final size of this frame. For a graphic illustration of the shapes of the lenses available for the rimless styles, click on "Select a Lens Shape" below. After a lens is selected, the lens model number followed by lens width x lens height will be displayed.',
        productPrice: 39.95,
        productCategory: 'Women',
        productReview: 5,
        isSoldOut: false,
        isTag: true,
        productTag: 'New',
        productDiscount: 0,
    },
    {
        id: 9,
        productImg:
            'https://static.zennioptical.com/production/products/general/44/49/4449825-eyeglasses-front-view.jpg',
        productName: "Kid's Square Glasses 4449825",
        productDesc:
            "Add pops of pattern to your eyewear in these fun kid's square glasses. The frame front is made from glossy hand-polished acetate. The flamingo-printed temple arms are crafted from flexible TR90 plastic, along with a sweet heart detail at the temple tips. For added comfort, the look is fitted with spring hinges. It is available in tortoiseshell with brown accents, and pink tortoiseshell with pink accents.",
        productPrice: 23.95,
        productCategory: 'Kid',
        productReview: 4,
        isSoldOut: false,
        isTag: true,
        productTag: 'New',
        productDiscount: 0,
    },
    {
        id: 10,
        productImg:
            'https://static.zennioptical.com/production/products/general/44/37/4437212-eyeglasses-front-view.jpg',
        productName: 'Square Glasses 4437212',
        productDesc:
            'These extended fit square glasses have a larger frame size, providing a comfortable fit for those with larger faces. Made with hand-polished acetate, the wide frame features spring hinges for added comfort and a stylish keyhole bridge. It has a glossy finish and comes in a choice of black or two tonal colors: brown (with gradients of dark and light) and gray (with brown gradient on top and gray at the bottom).',
        productPrice: 29.95,
        productCategory: 'Men',
        productReview: 4,
        isSoldOut: false,
        isTag: false,
        productTag: '',
        productDiscount: 0,
    },
    {
        id: 11,
        productImg:
            'https://static.zennioptical.com/production/products/general/14/37/143714-eyeglasses-angle-view.jpg',
        productName: 'Rimless Glasses 143714',
        productDesc:
            'Enjoy amazing comfort in these practically invisible rimless glasses. The streamlined, barely there frame has a metal alloy bridge and hingeless plastic temples that are effortlessly comfortable for all-day wear. Please refer to the “SELECT SHAPE” button above to see the different lens shapes and sizes available for this frame. Please note, the overall look and final size of the frame will change depending on which lenses are selected. After a lens is selected, the lens model number and lens width/height will be displayed.',
        productPrice: 25.95,
        productCategory: 'Women',
        productReview: 1,
        isSoldOut: false,
        isTag: false,
        productTag: '',
        productDiscount: 0,
    },
    {
        id: 12,
        productImg:
            'https://static.zennioptical.com/production/products/general/44/51/4451129-eyeglasses-front-view.jpg',
        productName: "Kids' Square Glasses 4451129",
        productDesc:
            'These colorful square glasses for kids make wearing glasses more fun. Made from shiny high-quality acetate, this sturdy frame can handle even the most adventurous kids. For added comfort, the look is fitted with spring hinges. It is available in the following colors: gray/blue, camouflage, kaleidoscope, gray/black, and fuschia/green. Please note, the actual pattern on eyeglasses may vary slightly from the one pictured.',
        productPrice: 19.95,
        productCategory: 'Kid',
        productReview: 2,
        isSoldOut: false,
        isTag: true,
        productTag: 'New',
        productDiscount: 0,
    },
    {
        id: 13,
        productImg:
            'https://static.zennioptical.com/production/products/general/20/30/2030715-eyeglasses-front-view.jpg',
        productName: 'Round Glasses 2030715',
        productDesc:
            'These smart and stylish round glasses are bound to elevate any look. Amazingly versatile, the style makes for chic glasses and sunglasses. The medium-narrow frame is made with lightweight TR90 plastic which offer both flexibility and comfort. It has a glossy finish and comes in brown, grey with blue accents, and green with beige accents.',
        productPrice: 15.95,
        productCategory: 'Men',
        productReview: 3,
        isSoldOut: false,
        isTag: true,
        productTag: 'SaleOff',
        productDiscount: 10,
    },
    {
        id: 14,
        productImg:
            'https://static.zennioptical.com/production/products/general/13/86/138629-eyeglasses-angle-view.jpg',
        productName: 'Rimless Glasses 138629',
        productDesc:
            'These barely there rimless glasses let your personal style shine through with all-day comfort. The titanium rimless frame has a satin finish. Adjustable nose pads provide added comfort. Glasses shown with lens shape 441. Please refer to the “SELECT SHAPE” button above to see the different lens shapes and sizes available for this frame. Please note, the overall look and final size of the frame will change depending on which lenses are selected. After a lens is selected, the lens model number and lens width/height will be displayed.',
        productPrice: 45.95,
        productCategory: 'Women',
        productReview: 4,
        isSoldOut: false,
        isTag: false,
        productTag: '',
        productDiscount: 0,
    },
    {
        id: 15,
        productImg:
            'https://static.zennioptical.com/production/products/general/44/40/4440724-eyeglasses-front-view.jpg',
        productName: "Dare Kids' Square Glasses 4440724",
        productDesc:
            'Dare square glasses are part of our Style Squad line of fashionable eyewear for kids. Made with lightweight, hand-polished acetate, this modern frame features spring hinges and flexible temple tips for all-day comfort. It is available in the following colors: blue tortoiseshell, blush, and forest. Dare is also available in small and medium sizes.',
        productPrice: 23.95,
        productCategory: 'Kid',
        productReview: 4,
        isSoldOut: false,
        isTag: true,
        productTag: 'New',
        productDiscount: 0,
    },
    {
        id: 16,
        productImg:
            'https://static.zennioptical.com/production/products/general/44/26/4426915-eyeglasses-front-view.jpg',
        productName: 'Rectangle Glasses 4426915',
        productDesc:
            'These contemporary rectangle glasses are made with high-quality acetate that is hand-polished to a glossy finish. The medium-wide frame comes in the following translucent options: light blue, light brown, and dark gray.',
        productPrice: 25.95,
        productCategory: 'Men',
        productReview: 5,
        isSoldOut: false,
        isTag: true,
        productTag: 'New',
        productDiscount: 0,
    },
    {
        id: 17,
        productImg:
            'https://static.zennioptical.com/production/products/general/32/29/3229629-eyeglasses-front-view.jpg',
        productName: 'Square Glasses 3229629',
        productDesc:
            "You don't need extra bells and whistles in these minimalist square glasses. The stainless steel frame is wire thin and lightweight. This style is infinitely customizable as both glasses and sunglasses. For added comfort the look has adjustable nose pads and soft plastic temple tips.",
        productPrice: 31.95,
        productCategory: 'Women',
        productReview: 3,
        isSoldOut: false,
        isTag: true,
        productTag: 'SaleOff',
        productDiscount: 5,
    },
    {
        id: 18,
        productImg:
            'https://static.zennioptical.com/production/products/general/44/41/4441316-eyeglasses-front-view.jpg',
        productName: "Create Kids' Square Glasses 4441316",
        productDesc:
            'Create square glasses are part of our Style Squad line of fashionable eyewear for kids. Made with lightweight, hand-polished acetate, this cool frame features spring hinges and flexible temple tips for all-day comfort. It is available in the following colors: ocean, clear, and purple tortoiseshell. Create is also available in small and medium sizes.',
        productPrice: 23.95,
        productCategory: 'Kid',
        productReview: 4,
        isSoldOut: false,
        isTag: true,
        productTag: 'SaleOff',
        productDiscount: 15,
    },
    {
        id: 19,
        productImg:
            'https://static.zennioptical.com/production/products/general/78/18/7818623-eyeglasses-front-view.jpg',
        productName: 'Round Glasses 7818623',
        productDesc:
            "Don't be surprised if these round glasses become your go-to pair. Made with lightweight TR90 plastic, the medium-sized translucent frame features a thin tortoiseshell detail around the lenses, creating a gorgeous effect. It is available in clear with silver metal temple arms, or buff with gold metal temple arms. Tortoiseshell temple tips complete the look.",
        productPrice: 31.95,
        productCategory: 'Men',
        productReview: 5,
        isSoldOut: false,
        isTag: true,
        productTag: 'SaleOff',
        productDiscount: 60,
    },
    {
        id: 20,
        productImg:
            'https://static.zennioptical.com/production/products/general/15/81/158125-eyeglasses-front-view.jpg',
        productName: 'Laze 158125',
        productDesc:
            'The Timo x Zenni Collection is a collaboration with designer Timo Weiland, inspired by weekend escapes. Laze is a refined round frame with classic styling. The medium-narrow frame is available in black or tortoiseshell. The temple arms have a shiny gold finish with tortoiseshell acetate tips. Adjustable nose pads provide a comfortable fit.',
        productPrice: 29.95,
        productCategory: 'Women',
        productReview: 5,
        isSoldOut: false,
        isTag: false,
        productTag: '',
        productDiscount: 0,
    },
    {
        id: 21,
        productImg:
            'https://static.zennioptical.com/production/products/general/44/32/4432121-eyeglasses-front-view.jpg',
        productName: "Kids' Square Glasses 4432121",
        productDesc:
            'These hip square glasses have a cool two-tone look with a black browline and clear lower rims. The temple arms are black and feature spring hinges for a comfortable fit. This frame is made with high-quality acetate that is hand-polished to a glossy finish. This frame is also available for adults (see #664021.',
        productPrice: 19.95,
        productCategory: 'Kid',
        productReview: 4,
        isSoldOut: false,
        isTag: false,
        productTag: '',
        productDiscount: 0,
    },
    {
        id: 22,
        productImg:
            'https://static.zennioptical.com/production/products/general/78/16/7816823-eyeglasses-front-view.jpg',
        productName: 'Square Glasses 7816823',
        productDesc:
            'These contemporary square glasses are a great choice for everyday wear. The medium-sized frame features a TR90 frame front with metal temple arms. The temple tips feature a cut-out design. It is available in the following matte colors: clear with gold temple arms, and tortoiseshell with brown temple arms. It is also available in these glossy colors: translucent blue with a matte black brown and gunmetal temple arms; dark green with graphite temple arms, and cranberry. Please note, the actual pattern on eyeglasses may vary slightly from the one pictured.',
        productPrice: 19.95,
        productCategory: 'Men',
        productReview: 4,
        isSoldOut: false,
        isTag: true,
        productTag: 'SaleOff',
        productDiscount: 8,
    },
    {
        id: 23,
        productImg:
            'https://static.zennioptical.com/production/products/general/11/25/1125214-eyeglasses-front-view.jpg',
        productName: 'Sepulveda Round Glasses 1125214',
        productDesc:
            'These round glasses exude retro-chic minimalism. The lightweight stainless steel frame features delicate detailing around the rims and temple arms. Acetate temple tips and silicone nose pads provide a comfortable wear.',
        productPrice: 27.95,
        productCategory: 'Women',
        productReview: 4,
        isSoldOut: false,
        isTag: false,
        productTag: '',
        productDiscount: 0,
    },
    {
        id: 24,
        productImg:
            'https://static.zennioptical.com/production/products/general/44/32/4432212-eyeglasses-front-view.jpg',
        productName: "Kids' Square Glasses 4432212",
        productDesc:
            "Cue the compliments with these style-savvy kids' glasses. Made with high-quality acetate, the medium-sized square frame has a matte gray finish with a subtle woodgrain texture. It features a stylish keyhole bridge and spring hinges for a comfortable fit. This frame is also available for adults (see #4424512).",
        productPrice: 19.95,
        productCategory: 'Kid',
        productReview: 4,
        isSoldOut: false,
        isTag: true,
        productTag: 'New',
        productDiscount: 0,
    },
];

export default products;
