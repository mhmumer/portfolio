AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "IT Intern",
    cardImage: "assets/images/experience-page/download.png",
    place: "TDF MagnifiScience Centre",
    time: "(June, 2022)",
    desp: "",
  },
  
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Manage Shopify Store",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Responsible for handling the an ecommerce Store Splitshots.com",
  },
  {
    title: "Doublesips",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Responsible for making an ecommerce store doublesips",
  },
  {
    title: "Front-End of Real Estate Website",
    cardImage: "assets/images/experience-page/3.png",
    description:
      "Frontend development of real estate website",
  },
  {
    title: "HiM Leather",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Responsible for making an ecommerce shopify store himleather",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


