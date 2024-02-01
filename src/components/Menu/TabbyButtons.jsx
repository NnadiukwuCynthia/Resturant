import { useState } from "react";
import MenuSlide from './menuSlide';

const TabbyButtons = () => {
    const [tab, setTab] = useState('tab1');

    const hadleTabbyButton = (tab) => {
        setTab(tab);
    }

  return (
    <div className="tabby">
    <div className="tabby__tabbyButton">
        <button className={tab === 'tab1' ? 'tabby__tabbyButton__active' : 'tabby__tabbyButton__button'} onClick={() => hadleTabbyButton('tab1')}>Tasting Menu</button>
        <button className={tab === 'tab2' ? 'tabby__tabbyButton__active' : 'tabby__tabbyButton__button'} onClick={() => hadleTabbyButton('tab2')}>Beverage Menu</button>
    </div>
    <div className="tabby__eachBtnContent">
    {tab==='tab1' && <div className={ tab === 'tab1' ?  'tabby__content' : 'activeTab'}>
        <p className="tabby__content__firstText">Tasting Menu</p>
        <p className="tabby__content__priceText">$375pp</p>
        <p className="tabby__content__secondText">Experience a culinary adventure featuring a curated display of nearly 30 preparations featuring some of the best ingredients from around the world!
        Watch our chefs and service team glide around as you indulge in our finest ingredients and luxuries.</p>
        <p className="tabby__content__thirdText">Menu is subject to change based on availability and seasonality of ingredients.</p>
        <p className="tabby__content__dash">-------------</p>
        <p className="tabby__content__fourthText">Due to the highly technical nature of our menu and the very special ingredients we are sourcing from around the world, we cannot accommodate severe allergies to <span className="tabby__content__fourthText__underline">mushrooms, cooked alliums, gluten, soy, seafood, or cooked alcohol;  diets following vegetarian or vegan preferences also cannot be accommodated. </span> </p>
        <p className="tabby__content__emailText">Please email <span><a href="#" className="tabby__content__emailText__email">Info@dummymail.com</a></span> with any questions regarding this policy.</p>
        <MenuSlide/>
    </div>}
    {tab==='tab2' && <div className={ tab === 'tab2' ?  'tabby__content1' : 'activeTab'}>
        <p className="tabby__content__firstText">Corkage Policy:</p>
        <p className="tabby__content__priceText">$100 per 750ml</p>
        <button className="tabby__content__button">DownLoad PDF</button>
        <div className="tabby__imgcontainer">
        <img src="../../../wine-1.jpg" alt="" className="wineImages" />
        <img src="../../../wine-2.jpg" alt="" className="wineImages" />
        <img src="../../../wine-3.jpg" alt="" className="wineImages" />
        <img src="../../../wine-4.jpg" alt="" className="wineImages" />
        <img src="../../../wine-5.jpg" alt="" className="wineImages" />
        <img src="../../../wine-6.jpg" alt="" className="wineImages" />
        </div>
    </div>}

    </div>
    </div>
  )
}

export default TabbyButtons