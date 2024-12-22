import React from 'react';
import "./Styles/About.css";
import imagesjpg from "../Images/imagesjpg.jpg";

const AboutPage = () => {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.heroSection}>
        <img
          src={imagesjpg}
          alt="Delicious Food"
          style={styles.heroImage}
        />
        <h1 style={styles.heroTitle}>Welcome to FoodiesApp</h1>
        <p style={styles.heroSubtitle}>
          Discover a world of culinary delights, crafted with passion and delivered with care.
        </p>
      </div>

      {/* Introduction */}
      <section style={styles.section}>
        <div style={styles.sectionContent}>
          <h2 style={styles.sectionTitle}>Who We Are</h2>
          <p>
            At FoodiesApp, our mission is to make food discovery effortless and enjoyable. We connect food lovers with a wide variety of dishes, from local favorites to global cuisines, all in one app.
          </p>
        </div>
        <img
          src="https://via.placeholder.com/400"
          alt="Food Discovery"
          style={styles.sectionImage}
        />
      </section>

      {/* Our Story */}
      <section style={styles.section}>
        <img
          src="https://via.placeholder.com/400"
          alt="Our Story"
          style={styles.sectionImage}
        />
        <div style={styles.sectionContent}>
          <h2 style={styles.sectionTitle}>Our Journey</h2>
          <p>
            FoodiesApp was created by a group of food enthusiasts who wanted to solve the problem of finding quality food options quickly. We started our journey with a vision to provide an unparalleled food ordering experience.
          </p>
        </div>
      </section>

      <section>
        <div className="wcu-section pt-5 pb-5" id="wcuSection">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="wcu-section-heading">Why Choose Us?</h1>
                        <p className="wcu-section-description">
                            We use both original recipes and versions of famous food
                            items.
                        </p>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="wcu-card p-3 mb-3">
                            <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-serve.png" alt="hello2" className="wcu-card-image" />
                            <h1 className="wcu-card-title mt-3">Food Service</h1>
                            <p className="wcu-card-description">
                                Experience fine dining at the comfort of your home. All our
                                orders are carefully packed and arranged to give you the nothing
                                less than perfect.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="wcu-card p-3 mb-3">
                            <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/fruits-img.png" alt="img2" className="wcu-card-image" />
                            <h1 className="wcu-card-title mt-3">Fresh Food</h1>
                            <p className="wcu-card-description">
                                The Fresh Food group provides fresh-cut fruits and vegetables
                                directly picked from our partner farms and farm houses so that
                                you always get them tree to plate.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="wcu-card p-3 mb-3">
                            <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/offers-img.png" alt="img3" className="wcu-card-image" />
                            <h1 className="wcu-card-title mt-3">Best Offers</h1>
                            <p className="wcu-card-description">
                                Food Coupons & Offers upto
                                <span className="offers">50% OFF</span>
                                and Exclusive Promo Codes on All Online Food Orders.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section style={styles.contactSection}>
        <h2 style={styles.sectionTitle}>Get in Touch</h2>
        <p>
          Have questions or feedback? Reach out at <a href="mailto:contact@foodiesapp.com">contact@foodiesapp.com</a>
        </p>
      </section>
    </div>
  );
};

// Styles
const styles = {
  container: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    color: '#444',
  },
  heroSection: {
    position: 'relative',
    textAlign: 'center',
    marginBottom: '40px',
  },
  heroImage: {
    width: '100%',
    borderRadius: '10px',
    height: '400px',
    objectFit: 'cover',
  },
  heroTitle: {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#fff',
    fontSize: '48px',
    fontWeight: 'bold',
  },
  heroSubtitle: {
    fontSize: '20px',
    marginTop: '10px',
    color: '#fff',
  },
  section: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '40px',
  },
  sectionContent: {
    flex: 1,
    padding: '20px',
  },
  sectionTitle: {
    fontSize: '28px',
    marginBottom: '10px',
    color: '#ff7043',
  },
  sectionImage: {
    width: '400px',
    borderRadius: '10px',
    marginLeft: '20px',
  },
  featuresSection: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
  featureCard: {
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  featureImage: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '10px',
    marginBottom: '10px',
  },
  testimonials: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    textAlign: 'center',
  },
  testimonialCard: {
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#f0f0f0',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  contactSection: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#ff7043',
    color: '#fff',
    borderRadius: '10px',
  },
};

export default AboutPage;
