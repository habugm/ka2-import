

function Home() {
  return (
    <>
      
     <main className="main">
  {/* Hero Section */}
  <section id="hero" className="hero section dark-background">
    <div className="info d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <h2>KA2 General Import & Export</h2>
            <p>KA2 General Import and Export delivers quality construction and electrical materials to power modern projects</p>
              <a href="#get-started" className="btn-get-started">Get Started</a>
          </div>
        </div>
      </div>
    </div>
    <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval={5000}>
      <div className="carousel-item active">
        <img src="assets/img/slide/1.jpg" alt />
      </div>
      <div className="carousel-item">
        <img src="assets/img/slide/2.jpg" alt />
      </div>
      <div className="carousel-item">
        <img src="assets/img/slide/3.jpg" alt />
      </div>
      <div className="carousel-item">
        <img src="assets/img/slide/4.jpg" alt />
      </div>
      
      <a className="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true" />
      </a>
      <a className="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true" />
      </a>
    </div>
  </section>{/* /Hero Section */}
  {/* Get Started Section */}
  <section id="get-started" className="get-started section">
  <div className="container">
    <div className="row justify-content-between gy-4">
      <div className="col-lg-6 d-flex align-items-center">
        <div className="content">
          <h3>About Us.</h3>
          <p><strong>KA2 General Import and Export PLC</strong> was founded in 2018 with the vision of becoming one of Ethiopia’s most dependable providers of construction and electrical materials. Since our establishment, we have proudly built a reputation for reliability, professionalism, and quality service. Our company plays a vital role in supporting the nation’s infrastructure development by supplying materials that meet the highest standards of durability and performance.</p>
          
          <p>At KA2, we believe in creating long-term value for our clients through honesty, innovation, and commitment. From individual builders to large-scale contractors, we serve a diverse range of customers with products tailored to their needs. As Ethiopia continues to grow, we remain committed to being a trusted partner in building the future — one project at a time.</p>
        </div>
      </div>
      
      <div className="col-lg-5 d-flex align-items-center">
        <div className="w-100">
          <img src="assets/img/logo2.png" className="img-fluid rounded" alt="Yotek Construction" />
        </div>
      </div>
    </div>
  </div>
</section>
  <section id="services" className="services section light-background">
    {/* Section Title */}
    <div className="container section-title">
      <h2>Services</h2>
      <p>We Mainly Provide 3 Types of Services</p>
    </div>{/* End Section Title */}
    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-4 col-md-6">
          <div className="service-item  position-relative">
            <div className="icon">
              <i class="bi bi-arrow-down-circle-fill" style={{color:'#003366'}} />
            </div>
            <h3 style={{color:'#003366'}}>Imports</h3>
            <p>At KA2 General Import and Export, we specialize in importing high-quality construction and electrical materials from trusted international suppliers. Our import services are designed to provide Ethiopian businesses, contractors, and individuals with access to durable, reliable, and modern products that meet global standards.</p>
          </div>
        </div>{/* End Service Item */}
        <div className="col-lg-4 col-md-6">
          <div className="service-item position-relative">
            <div className="icon">
              <i className="bi bi-shop" style={{color:'#003366'}} />
            </div>
            <h3 style={{color:'#003366'}}>Retail Disribution</h3>
            <p>Through our retail distribution network, KA2 General Import and Export makes construction and electrical materials easily accessible to customers across Ethiopia. We ensure that contractors, businesses, and individual buyers can find the products they need at competitive prices without compromising on quality.</p>
          </div>
        </div>{/* End Service Item */}
        <div className="col-lg-4 col-md-6">
          <div className="service-item position-relative">
            <div className="icon">
              <i className="bi bi-arrow-up-circle-fill" style={{color:'#003366'}} />
            </div>
            <h3 style={{color:'#003366'}}>Exports</h3>
            <p>At KA2 General Import and Export, we are expanding our operations to include exports, showcasing Ethiopia’s quality products to international markets. Our export services focus on delivering locally sourced goods that meet global standards, ensuring reliability, consistency, and value for our partners abroad.</p>   
                   </div>
        </div>{/* End Service Item */}
        
      </div>
    </div>
  </section> 
  <section id="projects" className="features section">
    <div className="container section-title">
      <h2>Products</h2>
      <p>RT Import supplies quality air conditioning systems, electrical construction materials, and beer gauges for diverse industrial and commercial needs.</p>
    </div>
  <div className="container">
    <ul className="nav nav-tabs row  g-2 d-flex" role="tablist" style={{backgroundColor:"#003366"}}>
      <li className="nav-item col-3" role="presentation">
        <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#features-tab-1" aria-selected="true" role="tab">
          <h4>Construction</h4>
        </a>
      </li>{/* End tab nav item */}
      <li className="nav-item col-3" role="presentation">
        <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-2" aria-selected="false" tabIndex={-1} role="tab">
          <h4>Electrical</h4>
        </a>{/* End tab nav item */}
      </li>
      <li className="nav-item col-3" role="presentation">
        <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-3" aria-selected="false" tabIndex={-1} role="tab">
          <h4>Household</h4>
        </a>
      </li>{/* End tab nav item */}
      <li className="nav-item col-3" role="presentation">
        <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-4" aria-selected="false" tabIndex={-1} role="tab">
          <h4>Others</h4>
        </a>
      </li>{/* End tab nav item */}
    </ul>
    <div className="tab-content" >
      <div className="tab-pane fade active show" id="features-tab-1" role="tabpanel">
        <div className="row">
          
          <div className="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0">
  <div className="row">
    {/* Project 1 */}
    {/* <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/construction/1.jpg" className="img-fluid rounded mb-2" alt="Project 1" />
      <h6>A</h6>
    </div> */}
    <div
  className="col-6 col-lg-3 text-center mb-4"
  
>
  <img
    src="assets/img/construction/1.jpg"
    className="img-fluid rounded mb-2"
    alt="Project 1" style={{ border: "2px solid black", padding: "2px" }}
  />
  <h6>Shovel</h6>
</div>

    {/* Project 2 */}
    <div className="col-6 col-lg-3 text-center mb-4" >
      <img src="assets/img/construction/2.jpg" className="img-fluid rounded mb-2" alt="Project 2" style={{ border: "2px solid black", padding: "2px" }}/>
      <h6>Hammer</h6>
    </div>

    {/* Project 3 */}
    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/construction/3.jpg" className="img-fluid rounded mb-2" alt="Project 3" style={{ border: "2px solid black", padding: "2px" }} />
      <h6>Disc</h6>
    </div>

    {/* Project 4 */}
    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/construction/4.jpg" className="img-fluid rounded mb-2" alt="Project 4"  style={{ border: "2px solid black", padding: "2px" }}/>
      <h6>Padlock</h6>
    </div>

    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/construction/5.jpg" className="img-fluid rounded mb-2" alt="Project 3" style={{ border: "2px solid black", padding: "2px" }}/>
      <h6>Hacksaw</h6>
    </div>

    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/construction/6.jpg" className="img-fluid rounded mb-2" alt="Project 3" style={{ border: "2px solid black", padding: "2px" }}/>
      <h6>Hoe</h6>
    </div>

    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/construction/7.jpg" className="img-fluid rounded mb-2" alt="Project 3" style={{ border: "2px solid black", padding: "2px" }}/>
      <h6>Pickaxe</h6>
    </div>

    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/construction/8.jpg" className="img-fluid rounded mb-2" alt="Project 3" style={{ border: "2px solid black", padding: "2px" }}/>
      <h6>Hose</h6>
    </div>

  </div>
</div>

          
        </div>
      </div>{/* End tab content item */}
      <div className="tab-pane fade" id="features-tab-2" role="tabpanel">
        <div className="row">
          
          <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/electrical/1.jpg" className="img-fluid rounded mb-2" alt="Project 1" />
      <h6>A</h6>
    </div>

    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/electrical/2.jpg" className="img-fluid rounded mb-2" alt="Project 1" />
      <h6>B</h6>
    </div>

    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/electrical/3.jpg" className="img-fluid rounded mb-2" alt="Project 1" />
      <h6>C</h6>
    </div>

    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/electrical/4.jpg" className="img-fluid rounded mb-2" alt="Project 1" />
      <h6>D</h6>
    </div>

    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/electrical/5.jpg" className="img-fluid rounded mb-2" alt="Project 1" />
      <h6>E</h6>
    </div>

    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/electrical/6.jpg" className="img-fluid rounded mb-2" alt="Project 1" />
      <h6>F</h6>
    </div>

    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/electrical/7.jpg" className="img-fluid rounded mb-2" alt="Project 1" />
      <h6>G</h6>
    </div>

        </div>
      </div>{/* End tab content item */}
      <div className="tab-pane fade" id="features-tab-3" role="tabpanel">
        <div className="row">
         
         <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/household/1.jpg" className="img-fluid rounded mb-2" alt="Project 1" />
      <h6>A</h6>
    </div>

    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/household/2.jpg" className="img-fluid rounded mb-2" alt="Project 1" />
      <h6>B</h6>
    </div>

    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/household/3.jpg" className="img-fluid rounded mb-2" alt="Project 1" />
      <h6>C</h6>
    </div>

    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/household/4.jpg" className="img-fluid rounded mb-2" alt="Project 1" />
      <h6>D</h6>
    </div>

    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/household/5.jpg" className="img-fluid rounded mb-2" alt="Project 1" />
      <h6>E</h6>
    </div>

    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/household/6.jpg" className="img-fluid rounded mb-2" alt="Project 1" />
      <h6>F</h6>
    </div>

    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/household/7.jpg" className="img-fluid rounded mb-2" alt="Project 1" />
      <h6>G</h6>
    </div>

    <div className="col-6 col-lg-3 text-center mb-4">
      <img src="assets/img/household/8.jpg" className="img-fluid rounded mb-2" alt="Project 1" />
      <h6>H</h6>
    </div>

        </div>
      </div>{/* End tab content item */}
      <div className="tab-pane fade" id="features-tab-4" role="tabpanel">
        <div className="row">
          <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
            <h3>KA2 IMPORT</h3>
            <p className="fst-italic">
              In addition to construction and electrical supplies, KA2 General Import and Export also imports a variety of consumer products to meet everyday needs. From lifestyle items to educational essentials, we ensure quality and affordability across all categories.
            </p>
            <ul>
              <li><i className="bi bi-check2-all" /> <span>Speakers and electronic accessories</span></li>
              <li><i className="bi bi-check2-all" /> <span>School bags and educational supplies</span></li>
              <li><i className="bi bi-check2-all" /> <span>Slippers, playing cards, and other general goods</span></li>
            </ul>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 text-center">
            <img src="assets/img/ka2-logo.png" alt className="img-fluid" />
          </div>
        </div>
      </div>{/* End tab content item */}
    </div>
  </div>
</section>
<section id="contact" className="contact section">
  <div className="container section-title">
      <h2>Contact US</h2>
      <p> Contact US with the following Informations</p>
    </div>
  <div className="container">
    <div className="row gy-4">
      <div className="col-lg-6">
        <div className="info-item d-flex flex-column justify-content-center align-items-center">
          <i className="bi bi-geo-alt" />
          <h3>Address</h3>
          <p>Lideta Subcity, Blen Plaza 7<sup>th</sup> Floor</p>
        </div>
      </div>{/* End Info Item */}
      <div className="col-lg-3 col-md-6">
        <div className="info-item d-flex flex-column justify-content-center align-items-center">
          <i className="bi bi-telephone" />
          <h3>Call Us</h3>
          <p>+2519 11 46 17 52</p>
        </div>
      </div>{/* End Info Item */}
      <div className="col-lg-3 col-md-6">
        <div className="info-item d-flex flex-column justify-content-center align-items-center">
          <i className="bi bi-envelope" />
          <h3>Email Us</h3>
          <p>info@ka2-import.com</p>
        </div>
      </div>{/* End Info Item */}
    </div>
    <div className="row gy-4 mt-1">
      <div className="col-lg-6">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.517386204229!2d38.736390074084134!3d9.016476689186756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8546a60bdbb1%3A0xddf27af4a09ba244!2zQmxlbiBQbGF6YSB8IExpZGV0YSB8IOGJpeGIjOGKlSDhjZXhiIvhi5sgfCDhiI3hi7DhibM!5e0!3m2!1sen!2set!4v1758908753431!5m2!1sen!2set" frameBorder={0} style={{border: 0, width: '100%', height: 400}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>{/* End Google Maps */}
      <div className="col-lg-6">
        <form action="forms/contact.php" method="post" className="php-email-form">
          <div className="row gy-4">
            <div className="col-md-6">
              <input type="text" name="name" className="form-control" placeholder="Your Name" required />
            </div>
            <div className="col-md-6 ">
              <input type="email" className="form-control" name="email" placeholder="Your Email" required />
            </div>
            <div className="col-md-12">
              <input type="text" className="form-control" name="subject" placeholder="Subject" required />
            </div>
            <div className="col-md-12">
              <textarea className="form-control" name="message" rows={6} placeholder="Message" required defaultValue={""} />
            </div>
            <div className="col-md-12 text-center">
              <div className="loading">Loading</div>
              <div className="error-message" />
              <div className="sent-message">Your message has been sent. Thank you!</div>
              <button type="submit">Send Message</button>
            </div>
          </div>
        </form>
      </div>{/* End Contact Form */}
    </div>
  </div>
</section>{/* /Contact Section */}


</main>



    </>
  );
}

export default Home;
