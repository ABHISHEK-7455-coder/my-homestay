var hapeningsData = [
    {
        type: "review_created",
        link: "https://www.homestay.com/new-zealand/auckland/177359-homestay-in-pakuranga-heights-auckland",
        description: "Thomas in United States left a review for <strong>Esther in Auckland, New Zealand</strong>"
    },
    {
        type: "host_went_live",
        link: "https://www.homestay.com/united-states/new-york/229931-homestay-in-manhattan-new-york",
        description: "<strong>David in New York, United States</strong> is now available for bookings – from <span class='price-amount'><span class='currency_symbol'>₹</span>33</span> <span class='currency-isoCode'>INR</span> per night"
    },
    {
        type: "booking_created",
        link: "https://www.homestay.com/ireland/dublin/228364-homestay-in-dublin-5-dublin",
        description: "A guest in Germany booked 85 nights with <strong>Joy in Dublin, Ireland</strong> for <span class='price-amount'><span class='currency_symbol'>₹</span>32</span> <span class='currency-isoCode'>INR</span> per night"
    },
    {
        type: "host_went_live",
        link: "https://www.homestay.com/ireland/dublin/256740-homestay-in-finglas-east-dublin",
        description: "<strong>Michael in Dublin, Ireland</strong> is now available for bookings – from <span class='price-amount'><span class='currency_symbol'>₹</span>29</span> <span class='currency-isoCode'>INR</span> per night"
    },
    {
        type: "review_created",
        link: "https://www.homestay.com/cuba/la-habana/161621-homestay-in-centro-habana-la-habana",
        description: "Sigurd in Germany left a review for <strong>Teresa De Jesús in Havana, Cuba</strong>"
    },
    {
        type: "user_review_created",
        link: "https://www.homestay.com/china/shanghai/9343-homestay-in-ecnuzhongshan-park-jingan-temple-jiaotong-university-tianshan-tea-city-1000-trees-shanghai",
        description: "Lily in Shanghai, China left a review for <strong>Antonino in Italy</strong>"
    },
    {
        type: "review_created",
        link: "https://www.homestay.com/spain/barcelona/252041-homestay-in-horta-guinardo-barcelona",
        description: "Laetitia in France left a review for <strong>Luca in Barcelona, Spain</strong>"
    },
    {
        type: "booking_created",
        link: "https://www.homestay.com/canada/vancouver/191634-homestay-in-vancouver-vancouver",
        description: "A guest in Canada booked 112 nights with <strong>Man Oi in Vancouver, Canada</strong> for <span class='price-amount'><span class='currency_symbol'>₹</span>46</span> <span class='currency-isoCode'>INR</span> per night"
    },
    {
        type: "booking_created",
        link: "https://www.homestay.com/ireland/dublin/228364-homestay-in-dublin-5-dublin",
        description: "A guest in Germany booked 85 nights with <strong>Joy in Dublin, Ireland</strong> for <span class='price-amount'><span class='currency_symbol'>₹</span>32</span> <span class='currency-isoCode'>INR</span> per night"
    },
    {
        type: "review_created",
        link: "https://www.homestay.com/brazil/salvador/135847-homestay-in-barra-salvador",
        description: "Adriana in Germany left a review for <strong>Daysa in Salvador, Brazil</strong>"
    }
];

var commentData = [
    {
        imageSrc: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSInZ2lkOi8vaHN0L0F2YXRhci8zNzA2MDQ_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--8cf0db84f6c237484e54a41c88d2b559ab7bb728&style=small",
        message: "Un plaisir de résider chez Abi. La chambre est bien chauffée, très cosy. Abi et Jason...",
        reviewIcon: "https://www.homestay.com/assets/small-review-score-img-0b2a7a69f06c0d32cd00047fc4dd9f2535d9d80cc4832b725f7d4cb0580e33d7.svg"
    },
    {
        imageSrc: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSInZ2lkOi8vaHN0L0F2YXRhci8zMzgzNTk_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--aed310c3016557877080f53f861dfb02be8522dd&style=small",
        message: "Thank you for a lot. They’re really good people. I think this house is located in mid...",
        reviewIcon: "https://www.homestay.com/assets/small-review-score-img-0b2a7a69f06c0d32cd00047fc4dd9f2535d9d80cc4832b725f7d4cb0580e33d7.svg"
    },
    {
        imageSrc: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSInZ2lkOi8vaHN0L0F2YXRhci8zMTQ3OTI_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--ccac2b7bb2be524e248cf15bdc6ec12338ef050d&style=small",
        message: "Lola’s place was amazing! Centrally located and very clean and comfortable. Lola herself...",
        reviewIcon: "https://www.homestay.com/assets/small-review-score-img-0b2a7a69f06c0d32cd00047fc4dd9f2535d9d80cc4832b725f7d4cb0580e33d7.svg"
    },
];

var data = {
    spareroom: {
        title: "Monetise your spare room",
        description: "Earn extra income renting out your spare room to international students, tourists, and professionals.",
        buttonText: "List Your Property Here"
    },
    sustainable: [
        {
            title: "True value",
            description: "We don't just offer great prices and good long term accommodation deals, we provide true value for money by giving you a priceless authentic experience."
        },
        {
            title: "Real Homes",
            description: "We will always offer rooms in real homes with local hosts. Our accommodation is different because you stay with locals and become part of the local community."
        },
        {
            title: "Sustainable tourism",
            description: "We promote sustainable local tourism by ensuring you're spending stays within local communities, minimising your environmental impact."
        }
    ]
};

var inspireMeData = {
    sectionTitle: "Homestay Inspiration",
    sectionDescription: "Be inspired by our unique mix of homestays around the world. We work with hosts that specialise in student stays, but also plenty that offer short term city breaks and even some that are totally off the beaten track letting you discover the beach, rainforest, countryside and mountains.",
    cartItems: [
        {
            imgUrl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIxZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xMzg5MDMxP2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--d186e6909c5047db5eec1cd60eb223947ad18f7e&style=medium",
            title: "Fancy a City Break?"
        },
        {
            imgUrl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIxZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xMzg5MDMyP2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--db91429d6d57b079d776a90e1af20d5793177605&style=medium",
            title: "Calling all Students"
        },
        {
            imgUrl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIxZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xMzg5MDI5P2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--f2d54a82eae10bcb8a2fb709499edb85a3dedc4e&style=medium",
            title: "Heading on an Adventure?"
        }
    ]
};

function renderHeader(){
    var headerContainer = document.getElementById('header-container');
    var headerData = `<div class="header-image">
                <img src="https://www.homestay.com/assets/logo-homestay-a2a7f2814cbfa356e29c846b314b58d512acdfc5750a0c7246ff81432cf8c713.svg" alt="" width="180vw">
            </div>
            <div class="header-right">
                <a href="#" class="destination1">DESTINATION</a>
                <a href="#">&hearts; INSPIRE ME</a>
                <a href="#">SIGN UP</a>
                <a href="#">LOG IN</a>
                <a href="#">ENGLISH</a>
                <a href="#">HELP</a>
                <a href="#" class="room">LIST A ROOM</a>
            </div>`;
    headerContainer.innerHTML = headerData;    
}

function renderForm(){
    var form = document.querySelector('.down-middle');
    var formData = `<form class="form1">
                <select id="dropdownlist" name="dropdown">
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Chennai">Chennai</option>
                </select>
                <input type="date" placeholder="Check In" id="check-in">
                <input type="date" placeholder="Check Out" id="check-out">
                <input type="text" placeholder="" id="empty">
                <button id="search">Search</button>
            </form>`;
    form.innerHTML = formData;
}

function renderHappenings() {
    var hapeningsList = document.querySelector(".list");
    hapeningsData.forEach(hapening => {
        var listItem = `
            <li>
                <a target="_blank" href="${hapening.link}" data-type="${hapening.type}">
                    <div class="content-container">
                        <p>${hapening.description}</p>
                    </div>
                </a>
            </li>
        `;
        hapeningsList.innerHTML += listItem;
    });
}

// Function to render chats
function renderComments() {
    var commentSection = document.querySelector(".comments");
    commentData.forEach(comment => {
        var commentItem = `
            <div class="comment">
                <img src="${comment.imageSrc}" alt="" width="84px" height="84px;">
                <div class="contentContainer">
                    <p>${comment.message}</p>
                    <img src="${comment.reviewIcon}" alt="">
                </div>
            </div>
        `;
        commentSection.innerHTML += commentItem;
    });
}

function renderContent() {
    var sectionHTML=document.querySelector('.ListARoom')
    var section = `
        <div class="spareroom">
            <div class="contentOfbox">
                <h3>${data.spareroom.title}</h3>
                <p>${data.spareroom.description}</p>
                <button type="submit">${data.spareroom.buttonText}</button>
            </div>
            <div class="img-container"></div>
        </div>
        <div class="Sustainable">
            ${data.sustainable.map(item => `
            <div class="sustainable-item">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
            `).join('')}
        </div>
    `;

    sectionHTML.innerHTML =section;
}

function renderInspireMe() {
    var Inspire = document.querySelector('.inspireMe');
    var InspiresectionHTML = `
        <div>
            <h2 class='heading'>${inspireMeData.sectionTitle}</h2>
            <p>${inspireMeData.sectionDescription}</p>
        </div>
        <div class="Cart1">
            ${inspireMeData.cartItems.map(item => `
            <div class="cart-item" style="background-image: url(${item.imgUrl});">
                <div class="title-container">
                    <h4 class="name">${item.title}</h4>
                    <button class="explore-btn">Explore Me</button>
                </div>
            </div>
            `).join('')}
        </div>    
    `;
    Inspire.innerHTML = InspiresectionHTML;
}

function init(){
    renderHeader()
    renderForm()
    renderHappenings()
    renderComments()
    renderContent()
    renderInspireMe()
}
init()


function renderNewHero(){
    var form = document.querySelector('.down-middle1');
    var formData = `<form class="form2">
                <select id="dropdownlist" name="dropdown">
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Chennai">Chennai</option>
                </select>
                <input type="date" placeholder="Check In" id="check-in1">
                <input type="date" placeholder="Check Out" id="check-out1">
                <input type="text" placeholder="" id="empty1">
                <button id="search">Search</button>
                <button>FILTERS</button>
                <button>SORTING</button>
            </form>`;
    form.innerHTML = formData;
}

var rajasthanData = {
    sectionTitle: "Rooms to Rent and Homestays in Jaipur, Rajasthan, India",
    sectionDescription: "We have found 81 homestays in Jaipur, Rajasthan, India for your stay. Renting a room with Homestay in Jaipur, Rajasthan, India offers host family accommodation, ideal for all types of travel including tourists, students, gap year, interns or city break weekenders.",
    cartItems: [
        {
            backgroundimgUrl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIwZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS80ODcyODg_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--dcd46168aa00354b004f1112379670f1d6951e51&style=medium",
            imgurl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSImZ2lkOi8vaHN0L0F2YXRhci83MTYxNT9leHBpcmVzX2luBjsAVEkiDHB1cnBvc2UGOwBUSSIMZGVmYXVsdAY7AFRJIg9leHBpcmVzX2F0BjsAVDA%3D--bc61c0f0fdd6fe9160799cb949e340b9749651e7&style=small",
            title: "Kalpana Yoga Homestay",
            address: "KALPANA IN AJMER ROAD,JAIPUR",
            images: "https://www.homestay.com/assets/small-review-score-img-0b2a7a69f06c0d32cd00047fc4dd9f2535d9d80cc4832b725f7d4cb0580e33d7.svg",
            reviews: "19 Reviews",
            distance: "Distance from centre of Jaipur: 1.9km",
            price: "1,933",
        },
        {
            backgroundimgUrl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIwZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS81Njk4MTY_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--0a8cb4845d11f214fd233005690435507d3c6592&style=medium",
            imgurl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSInZ2lkOi8vaHN0L0F2YXRhci8xNDc1MzI_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--1759bfa24813d05388cb5b139ab6edefa6ab74f8&style=small",
            title: "Homestay Near Jaipur airport",
            address: "MANISHA IN INTERNATIONAL AIRPORT,JAIPUR",
            images: "https://www.homestay.com/assets/small-review-score-img-0b2a7a69f06c0d32cd00047fc4dd9f2535d9d80cc4832b725f7d4cb0580e33d7.svg",
            reviews: "9 Reviews",
            distance: "Distance from centre of Jaipur: 9.2km",
            price: "1,400",
        },
        {
            backgroundimgUrl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIwZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS84NzAwNTc_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--3ee8cd47968b18e0e2892f1e360a78cf3658eb96&style=medium",
            imgurl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSInZ2lkOi8vaHN0L0F2YXRhci8yMDI0NDg_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--e9f56b53b826a8156a295b7e47bf58b6a47b6342&style=small",
            title: "Palm Villa",
            address: "HIMANSHU IN BAPU NAGAR,JAIPUR",
            images: "https://www.homestay.com/assets/small-review-score-img-0b2a7a69f06c0d32cd00047fc4dd9f2535d9d80cc4832b725f7d4cb0580e33d7.svg",
            reviews: "3 Reviews",
            distance: "Distance from center of Jaipur:2.6km",
            price: "700",
        },
        {
            backgroundimgUrl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIwZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS85NDI2NTg_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--23d568c1b4147f5dc0e661b62d8ae9a3a7996245&style=medium",
            imgurl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSInZ2lkOi8vaHN0L0F2YXRhci8yMjExNTQ_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--e7bd5f061e4fde6e8f2e9370624789e935fbc085&style=small",
            title: "Neetu's Home Stay",
            address: "MAHENDRA IN BANIPARK,JAIPUR",
            images: "https://www.homestay.com/assets/small-review-score-img-0b2a7a69f06c0d32cd00047fc4dd9f2535d9d80cc4832b725f7d4cb0580e33d7.svg",
            reviews: "2 Reviews",
            distance: "Distance form center of Jaipur: 3.3km",
            price: "1,026",
        },
        {
            backgroundimgUrl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIxZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xMTgxODk5P2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--1f1b89f69222e0f059ab1fc295d1f9353841eae9&style=medium",
            imgurl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSInZ2lkOi8vaHN0L0F2YXRhci8yNDk0MzI_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--ce2079715b36d8b45bea95d6e23a076ba27a5994&style=small",
            title: "Bunglow80",
            address: "SHALINI IN TILAK NAGAR,JAIPUR",
            images: "https://www.homestay.com/assets/small-review-score-img-0b2a7a69f06c0d32cd00047fc4dd9f2535d9d80cc4832b725f7d4cb0580e33d7.svg",
            reviews: "1 Review",
            distance: "Distance from center of Jaipur: 4.1km",
            price: "999",
        },


        {
            backgroundimgUrl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIwZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xOTgwNzE_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--8189f4b77e4ca3961ed1e5fb6598e483abc38a05&style=listing",
            imgurl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSI-Z2lkOi8vaHN0L1Byb3BlcnR5Q29udGFjdFByb2ZpbGVQaWN0dXJlLzIwMTExNj9leHBpcmVzX2luBjsAVEkiDHB1cnBvc2UGOwBUSSIMZGVmYXVsdAY7AFRJIg9leHBpcmVzX2F0BjsAVDA%3D--c2178b587e04ac2016dd2711ee045e5c2a970cb5&style=thumb",
            title: "Happy Caring hosts Jaipur",
            address: "SHARMILS IN VAISHALI NAGAR, JAIPUR",
            images: "https://www.homestay.com/assets/small-review-score-img-0b2a7a69f06c0d32cd00047fc4dd9f2535d9d80cc4832b725f7d4cb0580e33d7.svg",
            reviews: "0 Reviews",
            distance: "Distance from centre of Jaipur: 5.0km",
            price: "2,000",
        },
        {
            backgroundimgUrl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIxZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xMTYyMDMxP2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--38c3b692cc7a65454b72bdcbf749f267cc46c23c&style=listing",
            imgurl: "http://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSInZ2lkOi8vaHN0L0F2YXRhci8yOTI4OTE_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--3d075ed0613ec1533b1ea3576e93c61c65da4677&style=small",
            title: "Come for your best time in Jaipur",
            address: "ADARSH IN JAGATPURA,JAIPUR",
            images: "https://www.homestay.com/assets/small-review-score-img-0b2a7a69f06c0d32cd00047fc4dd9f2535d9d80cc4832b725f7d4cb0580e33d7.svg",
            reviews: "0 Reviews",
            distance: "Distance from centre of Jaipur: 9.14.7km",
            price: "500",
        },
        {
            backgroundimgUrl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIwZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS82MTU1Mjk_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--dec42531b4a81c899885be6691c883c7c3e5fb09&style=listing",
            imgurl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSInZ2lkOi8vaHN0L0F2YXRhci8xMjM5Nzg_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--4d87db9aa1d90de1912f58ef1643700617db115f&style=small",
            title: "K.D House",
            address: "KULDEEP IN KALWAR ROAD, JHOTWARA,JAIPUR",
            images: "https://www.homestay.com/assets/small-review-score-img-0b2a7a69f06c0d32cd00047fc4dd9f2535d9d80cc4832b725f7d4cb0580e33d7.svg",
            reviews: "0 Reviews",
            distance: "Distance from center of Jaipur: 7.0km",
            price: "720",
        },
        {
            backgroundimgUrl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIwZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS82MTQxNDA_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--5de77af9edec5233d3631a5f3522fc0ba1126cff&style=listing",
            imgurl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSInZ2lkOi8vaHN0L0F2YXRhci8yMjExNTQ_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--e7bd5f061e4fde6e8f2e9370624789e935fbc085&style=small",
            title: "Shanti villa",
            address: "DR. RANU IN PARK FACING OPP NRI COLONY, JAIPUR",
            images: "https://www.homestay.com/assets/small-review-score-img-0b2a7a69f06c0d32cd00047fc4dd9f2535d9d80cc4832b725f7d4cb0580e33d7.svg",
            reviews: "0 Reviews",
            distance: "Distance form center of Jaipur: 4.2km",
            price: "1,333",
        },
        {
            backgroundimgUrl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIxZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xMjQzNjEzP2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--b5e2d5122d65915459e5af9fc2348c1e61fa808a&style=listing",
            imgurl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSInZ2lkOi8vaHN0L0F2YXRhci8yOTM0NjA_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--80083a40ec6a0da7fe14c9c49a6b28cf4d253ea9&style=small",
            title: "Pushpanjali-the boutique stay",
            address: "MAMTA IN AJMER ROAD,JAIPUR",
            images: "https://www.homestay.com/assets/small-review-score-img-0b2a7a69f06c0d32cd00047fc4dd9f2535d9d80cc4832b725f7d4cb0580e33d7.svg",
            reviews: "0 Review",
            distance: "Distance from center of Jaipur: 4.2km",
            price: "2000",
        },

        {
            backgroundimgUrl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIxZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xMDk2NjE1P2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--a83d2ef67e2c631ab77b2ca2fc743bc02313b58f&style=medium",
            imgurl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSInZ2lkOi8vaHN0L0F2YXRhci8yNTc1Njk_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--6f7c1317bc82e4a50b394a8fcfa35babdb84ca3e&style=small",
            title: "Lovely room in a historic bungalow!",
            address: "Hari in C-Scheme, Jaipur",
            images: "https://www.homestay.com/assets/small-review-score-img-0b2a7a69f06c0d32cd00047fc4dd9f2535d9d80cc4832b725f7d4cb0580e33d7.svg",
            reviews: "19 Reviews",
            distance: "Distance from centre of Jaipur: 1.9km",
            price: "1,000",
        },
        {
            backgroundimgUrl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIxZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xMzg5ODk3P2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--5486a174563a99d8df7f0d638caa1cad0ec9a451&style=medium",
            imgurl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSInZ2lkOi8vaHN0L0F2YXRhci8zNDMwNDI_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--e2a03e0d9d650e509fad03c8e11ee52c24b75ef2&style=small",
            title: "Town of old forts and temples ",
            address: "Manoj in Amer, Jaipur",
            images: "https://www.homestay.com/assets/small-review-score-img-0b2a7a69f06c0d32cd00047fc4dd9f2535d9d80cc4832b725f7d4cb0580e33d7.svg",
            reviews: "9 Reviews",
            distance: "Distance from centre of Jaipur: 12.4km",
            price: "700",
        },
        {
            backgroundimgUrl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIxZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xMzMyMDczP2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--93040b9aa32485b9c571589f473dbdc9f0196410&style=medium",
            imgurl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSInZ2lkOi8vaHN0L0F2YXRhci8zMTc4NTk_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--108815849a65d55bcf84a6433d21caef6da8c2fb&style=small",
            title: "Spacious 2-BHK with Big Terrace",
            address: "UTKARSH in Near Dev nagar, Jaipur",
            images: "https://www.homestay.com/assets/small-review-score-img-0b2a7a69f06c0d32cd00047fc4dd9f2535d9d80cc4832b725f7d4cb0580e33d7.svg",
            reviews: "3 Reviews",
            distance: "Distance from center of Jaipur:4.2km",
            price: "600",
        },
        {
            backgroundimgUrl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIxZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xMzE0MDIxP2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--1e6df641236ad2f0f1be2f0941c4ad088999f3dd&style=medium",
            imgurl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSInZ2lkOi8vaHN0L0F2YXRhci8zMTEwMjM_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--3c1ed69e5d1b3a41334a405769deaa73a180aad6&style=small",
            title: "Homestay at home",
            address: "TEENA IN BANI PARK,JAIPUR",
            images: "https://www.homestay.com/assets/small-review-score-img-0b2a7a69f06c0d32cd00047fc4dd9f2535d9d80cc4832b725f7d4cb0580e33d7.svg",
            reviews: "2 Reviews",
            distance: "Distance form center of Jaipur: 3.3km",
            price: "833",
        },
        {
            backgroundimgUrl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIxZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xMTk1MjkzP2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--6ba0ebbfde0bd632eca994cb7f2327135907bd01&style=medium",
            imgurl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSInZ2lkOi8vaHN0L0F2YXRhci8yODIwMjI_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--8c3c423b29c5fa1257d6762398ee17e5224d0d18&style=small",
            title: "Srishti Homestay",
            address: "HARSHVARDHAN IN VAISHALI NAGAR,JAIPUR",
            images: "https://www.homestay.com/assets/small-review-score-img-0b2a7a69f06c0d32cd00047fc4dd9f2535d9d80cc4832b725f7d4cb0580e33d7.svg",
            reviews: "1 Review",
            distance: "Distance from center of Jaipur: 5.4km",
            price: "1000",
        },


    ]
};

var delhiData = {
    sectionTitle: "Rooms to Rent and Homestays in New Delhi, India",
    sectionDescription: "We have found 119 homestays in New Delhi, India for your stay. Renting a room with Homestay in New Delhi offers host family accommodation, ideal for all types of travel including tourists, students, gap year, interns or city break weekenders.",
    cartItems: [
        
        {
            backgroundimgUrl:'https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIxZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xNTUwNzE5P2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--e3cfcfd3476dbc06224555baf6697aa4d67ab916&style=listing',
            imgurl:'https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSInZ2lkOi8vaHN0L0F2YXRhci80MDY1ODE_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--62d73b96c089b694eefbc4f1cc8d91077537c2a5&style=small',
            title: 'Cozy Stay in the heart of Gurgaon',
            address:'Lekha in DLF 1, Gurgaon',
            reviews:'1 Review',
            distance:'22.4 km ',
            price:'1,666'
        },
        {
            backgroundimgUrl:'https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIxZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xMDU0MzIxP2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--9f229a9463f79bac14406cfd445e986939242d2c&style=listing',
            imgurl:'https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSInZ2lkOi8vaHN0L0F2YXRhci8xMzkwMzQ_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--c013c7faaae3ac5db87496bf7efb36974857bb0c&style=small',
            title: 'Peace Home-2 minutes 2 metro lines',
            address:'Naresh  in Kirti Nagar, New Delhi',
            reviews:'16 Reviews',
            distance:'7.8 km',
            price:'2,500'
        },
        {
            backgroundimgUrl:'https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIxZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xMDYzODc2P2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--f549af437ba8fae0ee579559df295b173030f1af&style=listing',
            imgurl:'https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSInZ2lkOi8vaHN0L0F2YXRhci8yNTAzODI_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--f611bd39963356bac4190aab2c0508aa8e753723&style=small',
            title: 'Comfy homestay with WiFi',
            address:'Tarun in Near corner sweets, New Delhi',
            reviews:'1 Review',
            distance:'9.0 km',
            price:'666'
        },
        {
            backgroundimgUrl:'https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIwZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS81NDk0MjU_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--160e8b5adb0741e7830e107eb50e2b3af3996e2f&style=listing',
            imgurl:'https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSI-Z2lkOi8vaHN0L1Byb3BlcnR5Q29udGFjdFByb2ZpbGVQaWN0dXJlLzE2ODEyND9leHBpcmVzX2luBjsAVEkiDHB1cnBvc2UGOwBUSSIMZGVmYXVsdAY7AFRJIg9leHBpcmVzX2F0BjsAVDA%3D--485a2f1ffa1d7b4b02efb240b080af97118b9e4a&style=thumb',
            title: 'Bed and Breakfast',
            address:'Madhu in Jangpura, Delhi',
            reviews:'7 Reviews',
            distance:'6.3 km',
            price:'2,106'
        },
        {
            backgroundimgUrl:'https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIxZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xMzkxNTA2P2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--c4005e9c0241032a8015dbd050f6349a67995895&style=listing',
            imgurl:'https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSInZ2lkOi8vaHN0L0F2YXRhci8zNDM1Mjk_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--3643dcb2d96583c3d747a41a0c4b89ccebf90675&style=small',
            title: 'Bliss - A cheerful room and workpla',
            address:'Sangeeta  in Green Park, New Delhi',
            reviews:'3 Reviews',
            distance:'9.1 km',
            price:'2,000'
        }
    ]
}


function renderNewRight(city){
    var newRight = document.querySelector('.newRight');
    var rightContainer = `<div class="upper-newRight">
    <h1>${city.sectionTitle}</h1>
    <p>${city.sectionDescription}</p>
    </div>
    <div class="lower-newRight">${city.cartItems.map(items => `<div class="lower-newRight1">
        <div class="lowerRight-image"><img src="${items.backgroundimgUrl}"></div>
        <div class="newRight-container"><p>${items.title}</p>
        <p>${items.address}</p>
        <img src="${items.images}">
        <p>${items.reviews}</p>
        <p>${items.distance}</p>
        <p>FROM ₹${items.price} PER NIGHT</p></div>
        </div>`).join('')}
    </div>`;
        newRight.innerHTML = rightContainer;
}

function renderNewLeft(){
    var newLeft = document.querySelector('.newLeft');
    var leftContainer = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkcd7Bx5JOUuUiK9f0pMLpsfLYlWfQZYMT-w&s"></img>`;
    newLeft.innerHTML = leftContainer;
}

document.querySelector('#search').addEventListener('click', function (){
    document.querySelector('header').classList.add('header1');
    document.querySelector('.header-right').classList.add('header-right1');
    document.querySelector('.room').classList.add('room1');
    document.querySelector('.middle').style.display = "none";
    document.querySelector('.bottom-main').style.display = "none";
    document.querySelector('.down-middle').style.display = "none";
    document.querySelector('.hero-container').style.background = "none";
    document.querySelector('main').style.display = "none";
    document.querySelector('footer').style.display = "none";
    document.querySelector('.down-middle1').style.display = "block";
    document.querySelector('.videoSection').style.marginTop = "100px";
   

    var right = document.getElementById('header-right1');
    if (right) {
        var inspireMe = right.querySelector('a:nth-child(2)');
        if (inspireMe) inspireMe.textContent = '₹ INR'; 
        
        var newA = document.createElement('a');
        newA.textContent = 'CONTACT HOSTS';
        right.insertBefore(newA,inspireMe);    
    }
    renderNewHero();
    renderNewLeft();
    renderNewRight(rajasthanData);
})
