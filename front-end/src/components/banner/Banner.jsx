

import "./banner.css";

import bannerImage from "../../assets/banner.jpg";

function Banner(){


    return(
        <section className="banner">
            <div className="banner-image"  style={{backgroundImage: `url(${bannerImage})` }}  >
                <div className="banner-content">
                    <h1>Welcome to La foire</h1>
                    <p>Your one-stop shop for all things unique and handcrafted.</p>
                    <button className="shop-now-button" >Shop Now</button>
                </div>
            </div>
        </section>
    )

}

export default Banner;