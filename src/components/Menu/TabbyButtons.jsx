import { useState } from "react";

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
    {tab==='tab1' && <div className={ tab === 'tab1' ? 'activeTab': 'tabby__content'}>
        <p className="tabby__content__firstText">Tasting Menu</p>
        <p className="tabby__content__priceText">$375pp</p>
        <p className="tabby__content__secondText">Experience a culinary adventure featuring a curated display of nearly 30 preparations featuring some of the best ingredients from around the world!
        Watch our chefs and service team glide around as you indulge in our finest ingredients and luxuries.</p>
        <p className="tabby__content__thirdText">Menu is subject to change based on availability and seasonality of ingredients.</p>
        <p className="tabby__content__dash">-------------</p>
        <p className="tabby__content__fourthText">Due to the highly technical nature of our menu and the very special ingredients we are sourcing from around the world, we cannot accommodate severe allergies to <span className="tabby__content__fourthText__underline">mushrooms, cooked alliums, gluten, soy, seafood, or cooked alcohol;  diets following vegetarian or vegan preferences also cannot be accommodated. </span> </p>
        <p className="tabby__content__emailText">Please email <span><a href="#" className="tabby__content__emailText__email">Info@dummymail.com</a></span> with any questions regarding this policy.</p>
    </div>}
    </div>
    </div>
  )
}

export default TabbyButtons