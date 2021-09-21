import React, { Component } from 'react'

export default class home extends Component {
    render() {
        return (
          <div>
             <link href="style.css" rel="stylesheet" type="text/css" />
           <div classname="layout-v2">
      <header id="header" className="navbar-wrapper">
 
    <div className="container">
      <div className="row">
        <nav className="navbar navbar-default">
          <div className="col-sm-12">
            {/* Header Topbar */}
            <div className="header-topbar hidden-sm hidden-xs">
              <div className="row">
                <div className="col-sm-6">
                  <div className="topbar-info">
                    <a href="tel:+61-3-8376-6284"><i className="fa fa-phone" />+61-3-8376-6284</a>
                    <span>/</span>
                    <a href="mailto:support@libraria.com"><i className="fa fa-envelope" />support@libraria.com</a>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="topbar-links">
                    <a href="signin.html"><i className="fa fa-lock" />Login / Register</a>
                    <span>|</span>
                    <div className="header-cart dropdown">
                      <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                        <i className="fa fa-shopping-cart" />
                        <small>0</small>
                      </a>
                      <div className="dropdown-menu cart-dropdown">
                        <ul>
                          <li className="clearfix">
                            <img src="images/header-cart-image-01.jpg" alt="cart item" />
                            <div className="item-info">
                              <div className="name">
                                <a href="#">The Great Gatsby</a>
                              </div>
                              <div className="author"><strong>Author:</strong> F. Scott Fitzgerald</div>
                              <div className="price">1 X $10.00</div>
                            </div>
                            <a className="remove" href="#"><i className="fa fa-trash-o" /></a>
                          </li>
                          <li className="clearfix">
                            <img src="images/header-cart-image-02.jpg" alt="cart item" />
                            <div className="item-info">
                              <div className="name">
                                <a href="#">The Great Gatsby</a>
                              </div>
                              <div className="author"><strong>Author:</strong> F. Scott Fitzgerald</div>
                              <div className="price">1 X $10.00</div>
                            </div>
                            <a className="remove" href="#"><i className="fa fa-trash-o" /></a>
                          </li>
                          <li className="clearfix">
                            <img src="images/header-cart-image-03.jpg" alt="cart item" />
                            <div className="item-info">
                              <div className="name">
                                <a href="#">The Great Gatsby</a>
                              </div>
                              <div className="author"><strong>Author:</strong> F. Scott Fitzgerald</div>
                              <div className="price">1 X $10.00</div>
                            </div>
                            <a className="remove" href="#"><i className="fa fa-trash-o" /></a>
                          </li>
                        </ul>
                        <div className="cart-total">
                          <div className="title">SubTotal</div>
                          <div className="price">$30.00</div>
                        </div>
                        <div className="cart-buttons">
                          <a href="cart.html" className="btn btn-dark-gray">View Cart</a>
                          <a href="checkout.html" className="btn btn-primary">Checkout</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-light">
              <div className="row">
                <div className="col-sm-4">
                  <div className="navbar-header">
                    <div className="navbar-brand">
                      <h1>
                        <a href="index-2.html">
                          <img src="images/libraria-logo-v2.png" alt="LIBRARIA" />
                        </a>
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="navbar-collapse hidden-sm hidden-xs">
                    <ul className="nav navbar-nav">
                      <li className="dropdown active">
                        <a data-toggle="dropdown" className="dropdown-toggle disabled" href="index-2.html">Home</a>
                        <ul className="dropdown-menu">
                          <li><a href="index-2.html">Home V1</a></li>
                          <li><a href="home-v2.html">Home V2</a></li>
                          <li><a href="home-v3.html">Home V3</a></li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a data-toggle="dropdown" className="dropdown-toggle disabled" href="books-media-list-view.html">Books &amp; Media</a>
                        <ul className="dropdown-menu">
                          <li><a href="books-media-list-view.html">Books &amp; Media List View</a></li>
                          <li><a href="books-media-gird-view-v1.html">Books &amp; Media Grid View V1</a></li>
                          <li><a href="books-media-gird-view-v2.html">Books &amp; Media Grid View V2</a></li>
                          <li><a href="books-media-detail-v1.html">Books &amp; Media Detail V1</a></li>
                          <li><a href="books-media-detail-v2.html">Books &amp; Media Detail V2</a></li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a data-toggle="dropdown" className="dropdown-toggle disabled" href="news-events-list-view.html">News &amp; Events</a>
                        <ul className="dropdown-menu">
                          <li><a href="news-events-list-view.html">News &amp; Events List View</a></li>
                          <li><a href="news-events-detail.html">News &amp; Events Detail</a></li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a data-toggle="dropdown" className="dropdown-toggle disabled" href="#">Pages</a>
                        <ul className="dropdown-menu">
                          <li><a href="cart.html">Cart</a></li>
                          <li><a href="checkout.html">Checkout</a></li>
                          <li><a href="signin.html">Signin/Register</a></li>
                          <li><a href="404.html">404/Error</a></li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a data-toggle="dropdown" className="dropdown-toggle disabled" href="blog.html">Blog</a>
                        <ul className="dropdown-menu">
                          <li><a href="blog.html">Blog Grid View</a></li>
                          <li><a href="blog-detail.html">Blog Detail</a></li>
                        </ul>
                      </li>
                      <li><a href="services.html">Services</a></li>
                      <li><a href="contact.html">Contact</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile-menu hidden-lg hidden-md">
            <a href="#mobile-menu"><i className="fa fa-navicon" /></a>
            <div id="mobile-menu">
              <ul>
                <li className="mobile-title">
                  <h4>Navigation</h4>
                  <a href="#" className="close" />
                </li>
                <li>
                  <a href="index-2.html">Home</a>
                  <ul>
                    <li><a href="index-2.html">Home V1</a></li>
                    <li><a href="home-v2.html">Home V2</a></li>
                    <li><a href="home-v3.html">Home V3</a></li>
                  </ul>
                </li>
                <li>
                  <a href="books-media-list-view.html">Books &amp; Media</a>
                  <ul>
                    <li><a href="books-media-list-view.html">Books &amp; Media List View</a></li>
                    <li><a href="books-media-gird-view-v1.html">Books &amp; Media Grid View V1</a></li>
                    <li><a href="books-media-gird-view-v2.html">Books &amp; Media Grid View V2</a></li>
                    <li><a href="books-media-detail-v1.html">Books &amp; Media Detail V1</a></li>
                    <li><a href="books-media-detail-v2.html">Books &amp; Media Detail V2</a></li>
                  </ul>
                </li>
                <li>
                  <a href="news-events-list-view.html">News &amp; Events</a>
                  <ul>
                    <li><a href="news-events-list-view.html">News &amp; Events List View</a></li>
                    <li><a href="news-events-detail.html">News &amp; Events Detail</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#">Pages</a>
                  <ul>
                    <li><a href="cart.html">Cart</a></li>
                    <li><a href="checkout.html">Checkout</a></li>
                    <li><a href="signin.html">Signin/Register</a></li>
                    <li><a href="404.html">404/Error</a></li>
                  </ul>
                </li>
                <li>
                  <a href="blog.html">Blog</a>
                  <ul>
                    <li><a href="blog.html">Blog Grid View</a></li>
                    <li><a href="blog-detail.html">Blog Detail</a></li>
                  </ul>
                </li>
                <li><a href="services.html">Services</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
  {/* End: Header Section */}
  {/* Start: Slider Section */}
  <div data-ride="carousel" className="carousel slide" id="home-v1-header-carousel">
    {/* Carousel slides */}
    <div className="carousel-inner">
      <div className="item active">
        <figure>
          <img alt="Home Slide" src="images/header-slider/home-v2/header-slide.jpg" />
        </figure>
        <div className="container">
          <div className="carousel-caption">
            <h3>Online Learning Anytime, Anywhere!</h3>
            <h2>Discover Your Roots</h2>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomized words.</p>
            <div className="slide-buttons hidden-sm hidden-xs">    
              <a href="#" className="btn btn-primary">Read More</a>
              <a href="#" className="btn btn-default">Purchase</a>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <figure>
          <img alt="Home Slide" src="images/header-slider/home-v2/header-slide.jpg" />
        </figure>
        <div className="container">
          <div className="carousel-caption">
            <h3>Online Learning Anytime, Anywhere!</h3>
            <h2>Discover Your Roots</h2>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomized words.</p>
            <div className="slide-buttons hidden-sm hidden-xs">    
              <a href="#" className="btn btn-primary">Read More</a>
              <a href="#" className="btn btn-default">Purchase</a>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <figure>
          <img alt="Home Slide" src="images/header-slider/home-v2/header-slide.jpg" />
        </figure>
        <div className="container">
          <div className="carousel-caption">
            <h3>Online Learning Anytime, Anywhere!</h3>
            <h2>Discover Your Roots</h2>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomized words.</p>
            <div className="slide-buttons hidden-sm hidden-xs">    
              <a href="#" className="btn btn-primary">Read More</a>
              <a href="#" className="btn btn-default">Purchase</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Indicators */}
    <ol className="carousel-indicators">
      <li data-target="#home-v1-header-carousel" data-slide-to={0} className="active" />
      <li data-target="#home-v1-header-carousel" data-slide-to={1} />
      <li data-target="#home-v1-header-carousel" data-slide-to={2} />
    </ol>
  </div>
  {/* End: Slider Section */}
  {/* Start: Search Section */}
  <section className="search-filters">
    <div className="container">
      <div className="filter-box">
        <h3>What are you looking for at the library?</h3>
        <form action="http://libraria.demo.presstigers.com/index.html" method="get">
          <div className="col-md-4 col-sm-6">
            <div className="form-group">
              <label className="sr-only" htmlFor="keywords">Search by Keyword</label>
              <input className="form-control" placeholder="Search by Keyword" id="keywords" name="keywords" type="text" />
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="form-group">
              <select name="catalog" id="catalog" className="form-control">
                <option>Search the Catalog</option>
                <option>Catalog 01</option>
                <option>Catalog 02</option>
                <option>Catalog 03</option>
                <option>Catalog 04</option>
                <option>Catalog 05</option>
              </select>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="form-group">
              <select name="category" id="category" className="form-control">
                <option>All Categories</option>
                <option>Category 01</option>
                <option>Category 02</option>
                <option>Category 03</option>
                <option>Category 04</option>
                <option>Category 05</option>
              </select>
            </div>
          </div>
          <div className="col-md-2 col-sm-6">
            <div className="form-group">
              <input className="form-control" type="submit" defaultValue="Search" />
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
  {/* End: Search Section */}
  {/* Start: Features */}
  <section className="features">
    <div className="container">
      <ul>
        <li className="yellow-hover">
          <div className="feature-box">
            <i className="yellow" />
            <h3>Books</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor turpis, pulvinar varius dui id, convallis iaculis eros.</p>
            <a className="yellow" href="#">
              View Selection <i className="fa fa-long-arrow-right" />
            </a>
          </div>
        </li>
        <li className="light-green-hover">
          <div className="feature-box">
            <i className="light-green" />
            <h3>eBooks</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor turpis, pulvinar varius dui id, convallis iaculis eros.</p>
            <a className="light-green" href="#">
              View Selection <i className="fa fa-long-arrow-right" />
            </a>
          </div>
        </li>
        <li className="blue-hover">
          <div className="feature-box">
            <i className="blue" />
            <h3>DVDs</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor turpis, pulvinar varius dui id, convallis iaculis eros.</p>
            <a className="blue" href="#">
              View Selection <i className="fa fa-long-arrow-right" />
            </a>
          </div>
        </li>
        <li className="red-hover">
          <div className="feature-box">
            <i className="red" />
            <h3>Magazines</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor turpis, pulvinar varius dui id, convallis iaculis eros.</p>
            <a className="red" href="#">
              View Selection <i className="fa fa-long-arrow-right" />
            </a>
          </div>
        </li>
        <li className="violet-hover">
          <div className="feature-box">
            <i className="violet" />
            <h3>Audio</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor turpis, pulvinar varius dui id, convallis iaculis eros.</p>
            <a className="violet" href="#">
              View Selection <i className="fa fa-long-arrow-right" />
            </a>
          </div>
        </li>
        <li className="green-hover">
          <div className="feature-box">
            <i className="green" />
            <h3>eAudio</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor turpis, pulvinar varius dui id, convallis iaculis eros.</p>
            <a className="green" href="#">
              View Selection <i className="fa fa-long-arrow-right" />
            </a>
          </div>
        </li>
      </ul>
    </div>
  </section>
  {/* End: Features */}
  {/* Start: Category Filter */}
  <section className="category-filter section-padding">
    <div className="container">
      <div className="row">
        <div className="center-content">
          <h2 className="section-title">Check Out The New Releases</h2>
          <span className="underline center" />
          <p className="lead">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
        </div>
        <div className="filter-buttons">
          <div className="filter btn" data-filter="all">All Releases</div>
          <div className="filter btn" data-filter=".adults">Adults</div>
          <div className="filter btn" data-filter=".kids-teens">Kids &amp; Teens</div>
          <div className="filter btn" data-filter=".video">Video</div>
          <div className="filter btn" data-filter=".audio">Audio</div>
          <div className="filter btn" data-filter=".books">Books</div>
          <div className="filter btn" data-filter=".magazines">Magazines</div>
        </div>
        <div id="category-filter">
          <ul className="category-list">
            <li className="category-item adults">
              <figure>
                <img src="images/category-filter/home-v2/category-filter-img-01.jpg" alt="New Releaase" />
                <figcaption className="bg-yellow">
                  <div className="diamond">
                    <i className="book" />
                  </div>
                  <div className="info-block">
                    <h4>The Great Gatsby</h4>
                    <span className="author"><strong>Author:</strong> F. Scott Fitzgerald</span>
                    <span className="author"><strong>ISBN:</strong> 9781581573268</span>
                    <div className="rating">
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                    </div>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Pellentesque dolor turpis, pulvinar varius.</p>
                    <a href="#">Read More <i className="fa fa-long-arrow-right" /></a>
                    <ol>
                      <li>
                        <a href="#" data-toggle="blog-tags" data-placement="top" title="Add To Cart">
                          <i className="fa fa-shopping-cart" />
                        </a>
                      </li>
                      <li>
                        <a href="#" data-toggle="blog-tags" data-placement="top" title="Add To List">
                          <i className="fa fa-heart" />
                        </a>
                      </li>
                      <li>
                        <a href="#" data-toggle="blog-tags" data-placement="top" title="Send Email">
                          <i className="fa fa-envelope" />
                        </a>
                      </li>
                      <li>
                        <a href="#" data-toggle="blog-tags" data-placement="top" title="Share This">
                          <i className="fa fa-share-alt" />
                        </a>
                      </li>
                      <li>
                        <a href="#" data-toggle="blog-tags" data-placement="top" title="View Image">
                          <i className="fa fa-search" />
                        </a>
                      </li>
                    </ol>
                  </div>
                </figcaption>
              </figure>
            </li>
            <li className="category-item kids-teens">
              <figure>
                <img src="images/category-filter/home-v2/category-filter-img-02.jpg" alt="New Releaase" />
                <figcaption className="bg-yellow">
                  <div className="diamond">
                    <i className="book" />
                  </div>
                  <div className="info-block">
                    <h4>The Great Gatsby</h4>
                    <span className="author"><strong>Author:</strong> F. Scott Fitzgerald</span>
                    <span className="author"><strong>ISBN:</strong> 9781581573268</span>
                    <div className="rating">
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                    </div>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Pellentesque dolor turpis, pulvinar varius.</p>
                    <a href="#">Read More <i className="fa fa-long-arrow-right" /></a>
                    <ol>
                      <li>
                        <a href="#" data-toggle="blog-tags" data-placement="top" title="Add To Cart">
                          <i className="fa fa-shopping-cart" />
                        </a>
                      </li>
                      <li>
                        <a href="#" data-toggle="blog-tags" data-placement="top" title="Add To List">
                          <i className="fa fa-heart" />
                        </a>
                      </li>
                      <li>
                        <a href="#" data-toggle="blog-tags" data-placement="top" title="Send Email">
                          <i className="fa fa-envelope" />
                        </a>
                      </li>
                      <li>
                        <a href="#" data-toggle="blog-tags" data-placement="top" title="Share This">
                          <i className="fa fa-share-alt" />
                        </a>
                      </li>
                      <li>
                        <a href="#" data-toggle="blog-tags" data-placement="top" title="View Image">
                          <i className="fa fa-search" />
                        </a>
                      </li>
                    </ol>
                  </div>
                </figcaption>
              </figure>
            </li>
            <li className="category-item video">
              <figure>
                <img src="images/category-filter/home-v2/category-filter-img-03.jpg" alt="New Releaase" />
                <figcaption className="bg-blue">
                  <div className="diamond">
                    <i className="dvd" />
                  </div>
                  <div className="info-block">
                    <h4>The Great Gatsby</h4>
                    <span className="author"><strong>Author:</strong> F. Scott Fitzgerald</span>
                    <span className="author"><strong>ISBN:</strong> 9781581573268</span>
                    <div className="rating">
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                    </div>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Pellentesque dolor turpis, pulvinar varius.</p>
                    <a href="#">Read More <i className="fa fa-long-arrow-right" /></a>
                    <ol>
                      <li>
                        <a href="#" data-toggle="blog-tags" data-placement="top" title="Add To Cart">
                          <i className="fa fa-shopping-cart" />
                        </a>
                      </li>
                      <li>
                        <a href="#" data-toggle="blog-tags" data-placement="top" title="Add To List">
                          <i className="fa fa-heart" />
                        </a>
                      </li>
                      <li>
                        <a href="#" data-toggle="blog-tags" data-placement="top" title="Send Email">
                          <i className="fa fa-envelope" />
                        </a>
                      </li>
                      <li>
                        <a href="#" data-toggle="blog-tags" data-placement="top" title="Share This">
                          <i className="fa fa-share-alt" />
                        </a>
                      </li>
                      <li>
                        <a href="#" data-toggle="blog-tags" data-placement="top" title="View Image">
                          <i className="fa fa-search" />
                        </a>
                      </li>
                    </ol>
                  </div>
                </figcaption>
              </figure>
            </li>
            <li className="category-item audio">
              <figure>
                <img src="images/category-filter/home-v2/category-filter-img-04.jpg" alt="New Releaase" />
                <figcaption className="bg-blue">
                  <div className="diamond">
                    <i className="dvd" />
                  </div>
                  <div className="info-block">
                    <h4>The Great Gatsby</h4>
                    <span className="author"><strong>Author:</strong> F. Scott Fitzgerald</span>
                    <span className="author"><strong>ISBN:</strong> 9781581573268</span>
                    <div className="rating">
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                    </div>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Pellentesque dolor turpis, pulvinar varius.</p>
                    <a href="#">Read More <i className="fa fa-long-arrow-right" /></a>
                    <ol>
                      <li>
                        <a href="#" data-toggle="blog-tags" data-placement="top" title="Add To Cart">
                          <i className="fa fa-shopping-cart" />
                        </a>
                      </li>
                      <li>
                        <a href="#" data-toggle="blog-tags" data-placement="top" title="Add To List">
                          <i className="fa fa-heart" />
                        </a>
                      </li>
                      <li>
                        <a href="#" data-toggle="blog-tags" data-placement="top" title="Send Email">
                          <i className="fa fa-envelope" />
                        </a>
                      </li>
                      <li>
                        <a href="#" data-toggle="blog-tags" data-placement="top" title="Share This">
                          <i className="fa fa-share-alt" />
                        </a>
                      </li>
                      <li>
                        <a href="#" data-toggle="blog-tags" data-placement="top" title="View Image">
                          <i className="fa fa-search" />
                        </a>
                      </li>
                    </ol>
                  </div>
                </figcaption>
              </figure>
            </li>
            <li className="category-item books">
              <figure>
                <img src="images/category-filter/home-v2/category-filter-img-05.jpg" alt="New Releaase" />
                <figcaption className="bg-green">
                  <div className="diamond">
                    <i className="eaudio" />
                  </div>
                  <div className="info-block">
                    <h4>The Great Gatsby</h4>
                    <span className="author"><strong>Author:</strong> F. Scott Fitzgerald</span>
                    <span className="author"><strong>ISBN:</strong> 9781581573268</span>
                    <div className="rating">
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                    </div>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Pellentesque dolor turpis, pulvinar varius.</p>
                    <a href="#">Read More <i className="fa fa-long-arrow-right" /></a>
                    <ol>
                      <li>
                        <a href="#" data-toggle="blog-tags" data-placement="top" title="Add To Cart">
                          <i className="fa fa-shopping-cart" />
                        </a>
                      </li>
                      <li>
                        <a href="#" data-toggle="blog-tags" data-placement="top" title="Add To List">
                          <i className="fa fa-heart" />
                        </a>
                      </li>
                      <li>
                        <a href="#" data-toggle="blog-tags" data-placement="top" title="Send Email">
                          <i className="fa fa-envelope" />
                        </a>
                      </li>
                      <li>
                        <a href="#" data-toggle="blog-tags" data-placement="top" title="Share This">
                          <i className="fa fa-share-alt" />
                        </a>
                      </li>
                      <li>
                        <a href="#" data-toggle="blog-tags" data-placement="top" title="View Image">
                          <i className="fa fa-search" />
                        </a>
                      </li>
                    </ol>
                  </div>
                </figcaption>
              </figure>
            </li>
            <li className="category-item magazines">
              <figure>
                <img src="images/category-filter/home-v2/category-filter-img-06.jpg" alt="New Releaase" />
                <figcaption className="bg-red">
                  <div className="diamond">
                    <i className="magazine" />
                  </div>
                  <div className="info-block">
                    <h4>The Great Gatsby</h4>
                    <span className="author"><strong>Author:</strong> F. Scott Fitzgerald</span>
                    <span className="author"><strong>ISBN:</strong> 9781581573268</span>
                    <div className="rating">
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                    </div>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Pellentesque dolor turpis, pulvinar varius.</p>
                    <a href="#">Read More <i className="fa fa-long-arrow-right" /></a>
                    <ol>
                      <li>
                        <a href="#" data-toggle="blog-tags" data-placement="top" title="Add To Cart">
                          <i className="fa fa-shopping-cart" />
                        </a>
                      </li>
                      <li>
                        <a href="#" data-toggle="blog-tags" data-placement="top" title="Add To List">
                          <i className="fa fa-heart" />
                        </a>
                      </li>
                      <li>
                        <a href="#" data-toggle="blog-tags" data-placement="top" title="Send Email">
                          <i className="fa fa-envelope" />
                        </a>
                      </li>
                      <li>
                        <a href="#" data-toggle="blog-tags" data-placement="top" title="Share This">
                          <i className="fa fa-share-alt" />
                        </a>
                      </li>
                      <li>
                        <a href="#" data-toggle="blog-tags" data-placement="top" title="View Image">
                          <i className="fa fa-search" />
                        </a>
                      </li>
                    </ol>
                  </div>
                </figcaption>
              </figure>
            </li>
            <li className="category-item adults">
              <figure>
                <img src="images/category-filter/home-v2/category-filter-img-07.jpg" alt="New Releaase" />
                <figcaption className="bg-red">
                  <div className="diamond">
                    <i className="magazine" />
                  </div>
                  <div className="info-block">
                    <h4>The Great Gatsby</h4>
                    <span className="author"><strong>Author:</strong> F. Scott Fitzgerald</span>
                    <span className="author"><strong>ISBN:</strong> 9781581573268</span>
                    <div className="rating">
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                    </div>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Pellentesque dolor turpis, pulvinar varius.</p>
                    <a href="#">Read More <i className="fa fa-long-arrow-right" /></a>
                    <ol>
                      <li>
                        <a href="#" data-toggle="blog-tags" data-placement="top" title="Add To Cart">
                          <i className="fa fa-shopping-cart" />
                        </a>
                      </li>
                      <li>
                        <a href="#" data-toggle="blog-tags" data-placement="top" title="Add To List">
                          <i className="fa fa-heart" />
                        </a>
                      </li>
                      <li>
                        <a href="#" data-toggle="blog-tags" data-placement="top" title="Send Email">
                          <i className="fa fa-envelope" />
                        </a>
                      </li>
                      <li>
                        <a href="#" data-toggle="blog-tags" data-placement="top" title="Share This">
                          <i className="fa fa-share-alt" />
                        </a>
                      </li>
                      <li>
                        <a href="#" data-toggle="blog-tags" data-placement="top" title="View Image">
                          <i className="fa fa-search" />
                        </a>
                      </li>
                    </ol>
                  </div>
                </figcaption>
              </figure>
            </li>
            <li className="category-item kids-teens">
              <figure>
                <img src="images/category-filter/home-v2/category-filter-img-08.jpg" alt="New Releaase" />
                <figcaption className="bg-light-green">
                  <div className="diamond">
                    <i className="ebook" />
                  </div>
                  <div className="info-block">
                    <h4>The Great Gatsby</h4>
                    <span className="author"><strong>Author:</strong> F. Scott Fitzgerald</span>
                    <span className="author"><strong>ISBN:</strong> 9781581573268</span>
                    <div className="rating">
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                    </div>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Pellentesque dolor turpis, pulvinar varius.</p>
                    <a href="#">Read More <i className="fa fa-long-arrow-right" /></a>
                    <ol>
                      <li>
                        <a href="#" data-toggle="blog-tags" data-placement="top" title="Add To Cart">
                          <i className="fa fa-shopping-cart" />
                        </a>
                      </li>
                      <li>
                        <a href="#" data-toggle="blog-tags" data-placement="top" title="Add To List">
                          <i className="fa fa-heart" />
                        </a>
                      </li>
                      <li>
                        <a href="#" data-toggle="blog-tags" data-placement="top" title="Send Email">
                          <i className="fa fa-envelope" />
                        </a>
                      </li>
                      <li>
                        <a href="#" data-toggle="blog-tags" data-placement="top" title="Share This">
                          <i className="fa fa-share-alt" />
                        </a>
                      </li>
                      <li>
                        <a href="#" data-toggle="blog-tags" data-placement="top" title="View Image">
                          <i className="fa fa-search" />
                        </a>
                      </li>
                    </ol>
                  </div>
                </figcaption>
              </figure>
            </li>
          </ul>
          <div className="clearfix" />
        </div>
      </div>
    </div>
  </section>
  {/* Start: Category Filter */}
  {/* Start: Welcome Section */}
  <section className="welcome-section">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="welcome-wrap">
            <div className="welcome-text">
              <h2 className="section-title">Welcome to the libraria</h2>
              <span className="underline left" />
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomized words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humor, or non-characteristic words etc.</p>
              <a className="btn btn-primary" href="#">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="welcome-image">
            <img src="images/wellcome-image.jpg" className="algin-right" alt />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End: Welcome Section */}
  {/* Start: Facts Counter */}
  <div className="layout-v2-counter">
    <div className="facts-counter">
      <div className="container">
        <div className="row">
          <ul>
            <li className="color-light-green">
              <div className="fact-item">
                <div className="fact-icon">
                  <i className="ebook" />
                </div>
                <span>eBooks<strong className="fact-counter">45780</strong></span>
              </div>
            </li>
            <li className="color-green">
              <div className="fact-item">
                <div className="fact-icon">
                  <i className="eaudio" />
                </div>
                <span>eAudio<strong className="fact-counter">32450</strong></span>
              </div>
            </li>
            <li className="color-red">
              <div className="fact-item">
                <div className="fact-icon">
                  <i className="magazine" />
                </div>
                <span>Magazine<strong className="fact-counter">14450</strong></span>
              </div>
            </li>
            <li className="color-blue">
              <div className="fact-item">
                <div className="fact-icon">
                  <i className="videos" />
                </div>
                <span>Videos<strong className="fact-counter">32450</strong></span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* End: Facts Counter */}
  {/* Start: News & Event */}
  <section className="news-events section-padding">
    <div className="container">
      <div className="center-content">
        <h2 className="section-title c-light">News &amp; Events</h2>
        <span className="underline center" />
        <p className="lead c-light">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
      </div>
      <div className="news-events-list">
        <div className="single-news-event">
          <figure>
            <img src="images/news-event/news-event-01.jpg" alt="News & Event" />
          </figure>
          <div className="content-block">
            <div className="member-info">
              <div className="content_meta_category">
                <span className="arrow-right" />
                <a href="#." rel="category tag">EVENT</a>
              </div>
              <ul className="news-event-info">
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-calendar" />
                    July 25, 2016
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-clock-o" />
                    10:15 AM - 10:15 PM 
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-map-marker" />
                    New York, USA
                  </a>
                </li>
              </ul>
              <h3><a href=".html#">It uses a dictionary of over 200 Latin word</a></h3>
              <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model.</p>
              <a className="btn btn-primary" href="#">Read More</a>
            </div>
          </div>
          <div className="clearfix" />
        </div>
        <div className="single-news-event">
          <figure>
            <img src="images/news-event/news-event-02.jpg" alt="News & Event" />
          </figure>
          <div className="content-block">
            <div className="member-info">
              <div className="content_meta_category">
                <span className="arrow-right" />
                <a href="#." rel="category tag">EVENT</a>
              </div>
              <ul className="news-event-info">
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-calendar" />
                    July 25, 2016
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-map-marker" />
                    New York, USA
                  </a>
                </li>
              </ul>
              <h3><a href=".html#">It uses a dictionary of over 200 Latin word</a></h3>
              <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', </p>
              <a className="btn btn-primary" href="#">Read More</a>
            </div>
          </div>
          <div className="clearfix" />
        </div>
        <div className="single-news-event">
          <figure>
            <img src="images/news-event/news-event-03.jpg" alt="News & Event" />
          </figure>
          <div className="content-block">
            <div className="member-info">
              <div className="content_meta_category">
                <span className="arrow-right" />
                <a href="#." rel="category tag">EVENT</a>
              </div>
              <ul className="news-event-info">
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-calendar" />
                    July 25, 2016
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-map-marker" />
                    New York, USA
                  </a>
                </li>
              </ul>
              <h3><a href=".html#">It uses a dictionary of over 200 Latin word</a></h3>
              <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', </p>
              <a className="btn btn-primary" href="#">Read More</a>
            </div>
          </div>
        </div>
        <div className="clearfix" />
      </div>
    </div>
  </section>
  {/* End: News & Event */}
  {/* Start: Testimonials Section */}
  <section className="testimonials">
    <div className="container">
      <h3 className="section-title">Words From our Community</h3>
      <span className="underline center" />
      <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="row">
        <div className="col-md-12" data-wow-delay="0.2s">
          <div className="carousel slide" data-interval="false" data-ride="carousel" id="testimonials">
            {/* Carousel Slides / Quotes */}
            <div className="carousel-inner text-center">
              {/* Quote 1 */}
              <div className="item active">
                <figure>
                  <img src="images/testimonials-01.png" alt="testimonials" />
                  <figcaption>
                    <div className="client-name">Adrey Pachai</div>
                    <div className="designation">Student</div>
                  </figcaption>
                </figure>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna magna, rhoncus eget commodo et, dignissim non nulla. Sed sit amet vestibulum ex. Donec dolor velit, placerat non congue ac, cursus dictum sem. Praesent hendrerit convallis metus, at mollis lectus pretium molestie. Mauris suscipit vulputate vulputate. Sed aliquam scelerisque sem, in dapibus nibh posuere id. Praesent congue mauris at velit rutrum auctor.</p>
              </div>
              {/* Quote 2 */}
              <div className="item">
                <figure>
                  <img src="images/testimonials-01.png" alt="testimonials" />
                  <figcaption>
                    <div className="client-name">Adrey Pachai</div>
                    <div className="designation">Student</div>
                  </figcaption>
                </figure>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna magna, rhoncus eget commodo et, dignissim non nulla. Sed sit amet vestibulum ex. Donec dolor velit, placerat non congue ac, cursus dictum sem. Praesent hendrerit convallis metus, at mollis lectus pretium molestie. Mauris suscipit vulputate vulputate. Sed aliquam scelerisque sem, in dapibus nibh posuere id. Praesent congue mauris at velit rutrum auctor.</p>
              </div>
              {/* Quote 3 */}
              <div className="item">
                <figure>
                  <img src="images/testimonials-01.png" alt="testimonials" />
                  <figcaption>
                    <div className="client-name">Adrey Pachai</div>
                    <div className="designation">Student</div>
                  </figcaption>
                </figure>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna magna, rhoncus eget commodo et, dignissim non nulla. Sed sit amet vestibulum ex. Donec dolor velit, placerat non congue ac, cursus dictum sem. Praesent hendrerit convallis metus, at mollis lectus pretium molestie. Mauris suscipit vulputate vulputate. Sed aliquam scelerisque sem, in dapibus nibh posuere id. Praesent congue mauris at velit rutrum auctor.</p>
              </div>
              {/* Quote 4 */}
              <div className="item">
                <figure>
                  <img src="images/testimonials-01.png" alt="testimonials" />
                  <figcaption>
                    <div className="client-name">Adrey Pachai</div>
                    <div className="designation">Student</div>
                  </figcaption>
                </figure>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna magna, rhoncus eget commodo et, dignissim non nulla. Sed sit amet vestibulum ex. Donec dolor velit, placerat non congue ac, cursus dictum sem. Praesent hendrerit convallis metus, at mollis lectus pretium molestie. Mauris suscipit vulputate vulputate. Sed aliquam scelerisque sem, in dapibus nibh posuere id. Praesent congue mauris at velit rutrum auctor.</p>
              </div>
              {/* Quote 5 */}
              <div className="item">
                <figure>
                  <img src="images/testimonials-01.png" alt="testimonials" />
                  <figcaption>
                    <div className="client-name">Adrey Pachai</div>
                    <div className="designation">Student</div>
                  </figcaption>
                </figure>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna magna, rhoncus eget commodo et, dignissim non nulla. Sed sit amet vestibulum ex. Donec dolor velit, placerat non congue ac, cursus dictum sem. Praesent hendrerit convallis metus, at mollis lectus pretium molestie. Mauris suscipit vulputate vulputate. Sed aliquam scelerisque sem, in dapibus nibh posuere id. Praesent congue mauris at velit rutrum auctor.</p>
              </div>
              {/* Carousel indicators */}
              <ol className="carousel-indicators">
                <li data-target="#testimonials" data-slide-to={0} className="active" />
                <li data-target="#testimonials" data-slide-to={1} />
                <li data-target="#testimonials" data-slide-to={2} />
                <li data-target="#testimonials" data-slide-to={3} />
                <li data-target="#testimonials" data-slide-to={4} />
              </ol>  
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End: Testimonials Section */}
  {/* Start: Latest Blog */}
  <section className="latest-blog section-padding">
    <div className="container">
      <div className="center-content">
        <h2 className="section-title">Latest from Blog</h2>
        <span className="underline center" />
        <p className="lead">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
      </div>
      <div className="tabs-container">
        <div className="tabs-menu">
          <ul>
            <li className="active">
              <a href="#">
                <div className="title">
                  <i className="yellow" />
                  <h3>Books</h3>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="title">
                  <i className="light-green" />
                  <h3>eBooks</h3>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="title">
                  <i className="blue" />
                  <h3>DVDS</h3>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="title">
                  <i className="red" />
                  <h3>Magazines</h3>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="title">
                  <i className="violet" />
                  <h3>Audio</h3>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="title">
                  <i className="green" />
                  <h3>eAudio</h3>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className="tabs-list">
          <div className="tab-content active">
            <article>
              <figure>
                <img src="images/latest-blog-img-home-v1.jpg" alt="Latest Blog" />
                <figcaption>
                  <a href="#.">
                    <span className="date">07</span>
                    <span className="month">Mar</span>
                  </a>
                </figcaption>
              </figure>
              <div className="post-detail">
                <div className="info-bar">
                  <div className="comments">
                    <a href="#">
                      <i className="fa fa-comment" /> 37
                    </a>
                  </div>
                  <div className="likes">
                    <a href="#">
                      <i className="fa fa-thumbs-o-up" /> 110
                    </a>
                  </div>
                  <div className="viewed">
                    <a href="#">
                      <i className="fa fa-eye" /> 180
                    </a>
                  </div>
                  <div className="share">
                    <a href="#">
                      <i className="fa fa-share-alt" /> Share
                    </a>
                  </div>
                </div>
                <h4>It uses dictionary over 200 Latin</h4>
                <div className="author">
                  <a href="#">
                    <i className="fa fa-user" /> Adrey Pachai
                  </a>
                </div>
                <p>Etiam posuere ultrices mauris vitae tincidunt. Cras lacinia, lectus quis ullamcorper auctor, mauris lacus imperdiet turpis, et semper enim massa ut diam. Sed at malesuada urna. Mauris quis venenatis leo. Proin a malesuada purus. Suspendisse odio diam, ornare sit amet interdum ut, vehicula a lorem. Donec a sem erat. Etiam condimentum semper mauris vitae porttitor.</p>
                <a className="btn btn-dark-gray">Read More</a>
              </div>
            </article>
          </div>
          <div className="tab-content">
            <article>
              <figure>
                <img src="images/latest-blog-img-home-v1-2.jpg" alt="Latest Blog" />
                <figcaption>
                  <a href="#.">
                    <span className="date">06</span>
                    <span className="month">Mar</span>
                  </a>
                </figcaption>
              </figure>
              <div className="post-detail">
                <div className="info-bar">
                  <div className="comments">
                    <a href="#">
                      <i className="fa fa-comment" /> 37
                    </a>
                  </div>
                  <div className="likes">
                    <a href="#">
                      <i className="fa fa-thumbs-o-up" /> 110
                    </a>
                  </div>
                  <div className="viewed">
                    <a href="#">
                      <i className="fa fa-eye" /> 180
                    </a>
                  </div>
                  <div className="share">
                    <a href="#">
                      <i className="fa fa-share-alt" /> Share
                    </a>
                  </div>
                </div>
                <h4>eBooks</h4>
                <div className="author">
                  <a href="#">
                    <i className="fa fa-user" /> Adrey Pachai
                  </a>
                </div>
                <p>Sed at malesuada urna. Mauris quis venenatis leo. Proin a malesuada purus. Suspendisse odio diam, ornare sit amet interdum ut, vehicula a lorem. Donec a sem erat. Etiam condimentum semper mauris vitae porttitor. Etiam posuere ultrices mauris vitae tincidunt. Cras lacinia, lectus quis ullamcorper auctor, mauris lacus imperdiet turpis, et semper enim massa ut.</p>
                <a className="btn btn-dark-gray">Read More</a>
              </div>
            </article>
          </div>
          <div className="tab-content">
            <article>
              <figure>
                <img src="images/latest-blog-img-home-v1.jpg" alt="Latest Blog" />
                <figcaption>
                  <a href="#.">
                    <span className="date">05</span>
                    <span className="month">Mar</span>
                  </a>
                </figcaption>
              </figure>
              <div className="post-detail">
                <div className="info-bar">
                  <div className="comments">
                    <a href="#">
                      <i className="fa fa-comment" /> 37
                    </a>
                  </div>
                  <div className="likes">
                    <a href="#">
                      <i className="fa fa-thumbs-o-up" /> 110
                    </a>
                  </div>
                  <div className="viewed">
                    <a href="#">
                      <i className="fa fa-eye" /> 180
                    </a>
                  </div>
                  <div className="share">
                    <a href="#">
                      <i className="fa fa-share-alt" /> Share
                    </a>
                  </div>
                </div>
                <h4>DVDS</h4>
                <div className="author">
                  <a href="#">
                    <i className="fa fa-user" /> Adrey Pachai
                  </a>
                </div>
                <p>Etiam posuere ultrices mauris vitae tincidunt. Cras lacinia, lectus quis ullamcorper auctor, mauris lacus imperdiet turpis, et semper enim massa ut diam. Sed at malesuada urna. Mauris quis venenatis leo. Proin a malesuada purus. Suspendisse odio diam, ornare sit amet interdum ut, vehicula a lorem. Donec a sem erat. Etiam condimentum semper mauris vitae porttitor.</p>
                <a className="btn btn-dark-gray">Read More</a>
              </div>
            </article>
          </div>
          <div className="tab-content">
            <article>
              <figure>
                <img src="images/latest-blog-img-home-v1-2.jpg" alt="Latest Blog" />
                <figcaption>
                  <a href="#.">
                    <span className="date">04</span>
                    <span className="month">Mar</span>
                  </a>
                </figcaption>
              </figure>
              <div className="post-detail">
                <div className="info-bar">
                  <div className="comments">
                    <a href="#">
                      <i className="fa fa-comment" /> 37
                    </a>
                  </div>
                  <div className="likes">
                    <a href="#">
                      <i className="fa fa-thumbs-o-up" /> 110
                    </a>
                  </div>
                  <div className="viewed">
                    <a href="#">
                      <i className="fa fa-eye" /> 180
                    </a>
                  </div>
                  <div className="share">
                    <a href="#">
                      <i className="fa fa-share-alt" /> Share
                    </a>
                  </div>
                </div>
                <h4>Magazines</h4>
                <div className="author">
                  <a href="#">
                    <i className="fa fa-user" /> Adrey Pachai
                  </a>
                </div>
                <p>Sed at malesuada urna. Mauris quis venenatis leo. Proin a malesuada purus. Suspendisse odio diam, ornare sit amet interdum ut, vehicula a lorem. Donec a sem erat. Etiam condimentum semper mauris vitae porttitor. Etiam posuere ultrices mauris vitae tincidunt. Cras lacinia, lectus quis ullamcorper auctor, mauris lacus imperdiet turpis, et semper enim massa ut.</p>
                <a className="btn btn-dark-gray">Read More</a>
              </div>
            </article>
          </div>
          <div className="tab-content">
            <article>
              <figure>
                <img src="images/latest-blog-img-home-v1.jpg" alt="Latest Blog" />
                <figcaption>
                  <a href="#.">
                    <span className="date">03</span>
                    <span className="month">Mar</span>
                  </a>
                </figcaption>
              </figure>
              <div className="post-detail">
                <div className="info-bar">
                  <div className="comments">
                    <a href="#">
                      <i className="fa fa-comment" /> 37
                    </a>
                  </div>
                  <div className="likes">
                    <a href="#">
                      <i className="fa fa-thumbs-o-up" /> 110
                    </a>
                  </div>
                  <div className="viewed">
                    <a href="#">
                      <i className="fa fa-eye" /> 180
                    </a>
                  </div>
                  <div className="share">
                    <a href="#">
                      <i className="fa fa-share-alt" /> Share
                    </a>
                  </div>
                </div>
                <h4>Audio</h4>
                <div className="author">
                  <a href="#">
                    <i className="fa fa-user" /> Adrey Pachai
                  </a>
                </div>
                <p>Etiam posuere ultrices mauris vitae tincidunt. Cras lacinia, lectus quis ullamcorper auctor, mauris lacus imperdiet turpis, et semper enim massa ut diam. Sed at malesuada urna. Mauris quis venenatis leo. Proin a malesuada purus. Suspendisse odio diam, ornare sit amet interdum ut, vehicula a lorem. Donec a sem erat. Etiam condimentum semper mauris vitae porttitor.</p>
                <a className="btn btn-dark-gray">Read More</a>
              </div>
            </article>
          </div>
          <div className="tab-content">
            <article>
              <figure>
                <img src="images/latest-blog-img-home-v1-2.jpg" alt="Latest Blog" />
                <figcaption>
                  <a href="#.">
                    <span className="date">02</span>
                    <span className="month">Mar</span>
                  </a>
                </figcaption>
              </figure>
              <div className="post-detail">
                <div className="info-bar">
                  <div className="comments">
                    <a href="#">
                      <i className="fa fa-comment" /> 37
                    </a>
                  </div>
                  <div className="likes">
                    <a href="#">
                      <i className="fa fa-thumbs-o-up" /> 110
                    </a>
                  </div>
                  <div className="viewed">
                    <a href="#">
                      <i className="fa fa-eye" /> 180
                    </a>
                  </div>
                  <div className="share">
                    <a href="#">
                      <i className="fa fa-share-alt" /> Share
                    </a>
                  </div>
                </div>
                <h4>eAudio</h4>
                <div className="author">
                  <a href="#">
                    <i className="fa fa-user" /> Adrey Pachai
                  </a>
                </div>
                <p>Sed at malesuada urna. Mauris quis venenatis leo. Proin a malesuada purus. Suspendisse odio diam, ornare sit amet interdum ut, vehicula a lorem. Donec a sem erat. Etiam condimentum semper mauris vitae porttitor. Etiam posuere ultrices mauris vitae tincidunt. Cras lacinia, lectus quis ullamcorper auctor, mauris lacus imperdiet turpis, et semper enim massa ut.</p>
                <a className="btn btn-dark-gray">Read More</a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End: Latest Blog */}
  {/* Start: Meet Staff */}
  <section className="team section-padding">
    <div className="container">
      <div className="center-content">
        <h2 className="section-title">Meet Our Staff</h2>
        <span className="underline center" />
        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="team-list">
        <div className="team-member">
          <figure>
            <img src="images/team-img-01.jpg" alt="team" />
          </figure>
          <div className="content-block">
            <div className="member-info">
              <h4>David J. Seleb</h4>
              <span className="designation">Executive Director</span>
              <ul className="social">
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-skype" />
                  </a>
                </li>
              </ul>
              <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here...</p>
              <a className="btn btn-primary" href="#">Read More</a>
            </div>
          </div>
        </div>
        <div className="team-member">
          <figure>
            <img src="images/team-img-02.jpg" alt="team" />
          </figure>
          <div className="content-block">
            <div className="member-info">
              <h4>Robert Simmons</h4>
              <span className="designation">Deputy Director</span>
              <ul className="social">
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-skype" />
                  </a>
                </li>
              </ul>
              <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here...</p>
              <a className="btn btn-primary" href="#">Read More</a>
            </div>
          </div>
        </div>
        <div className="team-member">
          <figure>
            <img src="images/team-img-03.jpg" alt="team" />
          </figure>
          <div className="content-block">
            <div className="member-info">
              <h4>Anna Delpan</h4>
              <span className="designation">Librarian</span>
              <ul className="social">
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-skype" />
                  </a>
                </li>
              </ul>
              <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here...</p>
              <a className="btn btn-primary" href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End: Meet Staff */}
  {/* Start: Newsletter */}
  <section className="newsletter section-padding">
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="center-content">
            <h2 className="section-title">Subscribe to our Newsletters</h2>
            <span className="underline center" />
            <p className="lead">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
          </div>
          <div className="form-group">
            <input className="form-control" placeholder="Enter your Email!" id="newsletter" name="newsletter" type="email" />
            <input className="form-control" defaultValue="Subscribe" type="submit" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End: Newsletter */}
  {/* Start: Footer */}
  <footer className="site-footer">
    <div className="container">
      <div id="footer-widgets">
        <div className="row">
          <div className="col-md-2 widget-container">
            <div className="widget widget_social_icons">
              <ul>
                <li>
                  <a className="facebook" href="#" target="_blank">
                    <span>
                      <i className="fa fa-facebook-f" />
                    </span>
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#" target="_blank">
                    <span>
                      <i className="fa fa-twitter" />
                    </span>
                  </a>
                </li>
                <li>
                  <a className="google" href="#" target="_blank">
                    <span>
                      <i className="fa fa-google-plus" />
                    </span>
                  </a>
                </li>
                <li>
                  <a className="rss" href="#" target="_blank">
                    <span>
                      <i className="fa fa-rss" />
                    </span>
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="#" target="_blank">
                    <span>
                      <i className="fa fa-linkedin" />
                    </span>
                  </a>
                </li>
                <li>
                  <a className="youtube" href="#" target="_blank">
                    <span>
                      <i className="fa fa-youtube" />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 widget-container">
            <div id="text-2" className="widget widget_text">
              <h3 className="footer-widget-title">About Libraria</h3>
              <span className="underline left" />
              <div className="textwidget">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking.
              </div>
              <address>
                <div className="info">
                  <i className="fa fa-location-arrow" />
                  <span>21 King Street, Melbourne, Victoria 3000 Australia</span>
                </div>
                <div className="info">
                  <i className="fa fa-envelope" />
                  <span><a href="mailto:support@libraria.com">support@libraria.com</a></span>
                </div>
                <div className="info">
                  <i className="fa fa-phone" />
                  <span><a href="tel:012-345-6789">+ 012-345-6789</a></span>
                </div>
              </address>
            </div>
          </div>
          <div className="col-md-2 col-sm-6 widget-container">
            <div id="nav_menu-2" className="widget widget_nav_menu">
              <h3 className="footer-widget-title">Quick Links</h3>
              <span className="underline left" />
              <div className="menu-quick-links-container">
                <ul id="menu-quick-links" className="menu">
                  <li><a href="#">Library News</a></li>
                  <li><a href="#">History</a></li>
                  <li><a href="#">Meet Our Staff</a></li>
                  <li><a href="#">Board of Trustees</a></li>
                  <li><a href="#">Budget</a></li>
                  <li><a href="#">Annual Report</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="clearfix hidden-lg hidden-md hidden-xs tablet-margin-bottom" />
          <div className="col-md-2 col-sm-6 widget-container">
            <div id="text-4" className="widget widget_text">
              <h3 className="footer-widget-title">Timing</h3>
              <span className="underline left" />
              <div className="timming-text-widget">
                <time dateTime="2017-02-13">Mon - Thu: 9 am - 9 pm</time>
                <time dateTime="2017-02-13">Fri: 9 am - 6 pm</time>
                <time dateTime="2017-02-13">Sat: 9 am - 5 pm</time>
                <time dateTime="2017-02-13">Sun: 1 pm - 6 pm</time>
                <ul>
                  <li><a href="#">Closings</a></li>
                  <li><a href="#">Branches</a></li>
                </ul>
              </div>
            </div>			
          </div>
          <div className="col-md-3 col-sm-6 widget-container">
            <div className="widget twitter-widget">
              <h3 className="footer-widget-title">Latest Tweets</h3>
              <span className="underline left" />
              <div id="twitter-feed">
                <ul>
                  <li>
                    <p><a href="#">@TemplateLibraria</a> Sed ut perspiciatis unde sit voluptatem. <a href="#">template-libraria.com</a></p>
                  </li>
                  <li>
                    <p><a href="#">@TemplateLibraria</a> Sed ut perspiciatis unde sit voluptatem. <a href="#">template-libraria.com</a></p>
                  </li>
                </ul>
              </div>
            </div>			
          </div>
        </div>
      </div>                
    </div>
    <div className="sub-footer">
      <div className="container">
        <div className="row">
          <div className="footer-text col-md-3">
            <p><a target="_blank" href="https://www.templateshub.net">Templates Hub</a></p>
          </div>
          <div className="col-md-9 pull-right">
            <ul>
              <li><a href="index-2.html">Home</a></li>
              <li><a href="books-media-list-view.html">Books &amp; Media</a></li>
              <li><a href="news-events-list-view.html">News &amp; Events</a></li>
              <li><a href="#">Kids &amp; Teens</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="#">Research</a></li>
              <li><a href="blog.html">Blog</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>
</div>

        )
    }
}
