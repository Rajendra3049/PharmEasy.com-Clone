import React from "react";
// import CSS
import careStyles from "../Styles/HealthCare.module.css";

// import data
import { HealthCare_Cards } from "../Data";
import { HealthCare_category } from "../Data";

// import components
import Carousel from "../MiniComponents/Carousel";
import Data_3_Flex from "../MiniComponents/Data_3_Flex";

function HealthCare() {
  return (
    <div style={{ width: "70%", margin: "auto", marginBottom: "70px" }}>
      {/* carousel */} <Carousel cards={HealthCare_Cards} />
      {/* category */}{" "}
      <div className={careStyles.category}>
        {HealthCare_category.map((e) => (
          <Data_3_Flex key={e.name} img={e.img} name={e.name} off={e.off} />
        ))}
      </div>
      <div id="text area" style={{ textAlign: "left" }}>
        <h1 style={{ marginBottom: "15px", marginTop: "20px" }}>
          <b>Shop Safely And Worry-Free On PharmEasy</b>
        </h1>
        <p>
          PharmEasy is a renowned name in the online shopping of Over The
          Counter or healthcare products and other daily essentials. Ordering
          online on PharmEasy is convenient, fast and hassle-free; you can avoid
          the annoyance of queuing up at your local pharmacy and also avail of
          huge discounts of up to 80% OFF. Purchasing the healthcare
          requirements such as medical devices and nutritional supplements that
          you need will no longer burn a hole in your pocket. At PharmEasy, you
          are sure to find everything that you need because we have products
          across all healthcare categories.
        </p>
        <h1 style={{ marginBottom: "15px", marginTop: "20px" }}>
          <b>Why choose PharmEasy?</b>
        </h1>
        <p>
          <li>8400+ Brands</li>
          <li>35K products in our stock</li>
          <li>Delivery to 22000+ pin codes</li>
          <li>Delivered to 50 lakh+ families</li>
          <li>Over 2M customers served</li>
        </p>
        <h1 style={{ marginBottom: "15px", marginTop: "20px" }}>
          <b>Our most popular categories:</b>
        </h1>
        <p>We have a range of categories and products, some which are:</p>
        <h1 style={{ marginBottom: "15px", marginTop: "20px" }}>
          <b>Devices</b>
        </h1>
        <p>
          With the pandemic upending our lives, we have all realized that there
          are some medical devices that we need to keep in our homes such as
          Oximeter, Thermometer, Inhaler, Blood pressure monitor, Glucometer.
        </p>
        <h1 style={{ marginBottom: "15px", marginTop: "20px" }}>
          <b>Personal care </b>
        </h1>
        <p>
          Personal care products can include a wide range of products such as
          Bath products, , Skincare essentials, Razor blades, Toothpaste and
          toothbrush, Wet wipes, Lip balm, Face masks, Hand sanitizer, etc.{" "}
        </p>
        <h1 style={{ marginBottom: "15px", marginTop: "20px" }}>
          <b> Nutrition and fitness supplements</b>
        </h1>
        <p>
          To give your health a helping hand, you can order a wide variety of
          health supplements including Health drinks, Nutritional powder,
          Nutrition tablets/capsules.{" "}
        </p>
        <h1 style={{ marginBottom: "15px", marginTop: "20px" }}>
          <b> Ayurvedic care</b>
        </h1>
        <p>
          Place your trust in the goodness of natural and organic ayurvedic
          products for an all-around healthy mind and body. There’s plenty to
          choose from such as Aloe vera juice, Moringa capsules, Garlic
          capsules. Home care Home care products are things you need every day
          such as disinfectant spray, phenyl, dishwashing liquid, etc.{" "}
        </p>
        <h1 style={{ marginBottom: "15px", marginTop: "20px" }}>
          <b>Baby and mom care </b>
        </h1>
        <p>
          PharmEasy also has an impressive range of baby and mom care products
          including Diapers, Baby bath products, Infant formula food, Mother’s
          health drinks, Diaper rash creams, Baby wipes.{" "}
        </p>
        <h1 style={{ marginBottom: "15px", marginTop: "20px" }}>
          <b>We ensure</b>
        </h1>
        <p>
          <li>Regular sanitization of our premises and warehouses</li>
          <li>Temperature checks of our employees and delivery partners</li>
          <li>No-contact door-step delivery</li>
          <li>Sanitized packaging</li>
        </p>
      </div>
    </div>
  );
}
export default HealthCare;
