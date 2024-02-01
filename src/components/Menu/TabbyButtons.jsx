import { useState } from "react";

const TabbyButtons = () => {
    const [tab, setTab] = useState('tab1');

    const hadleTabbyButton = (tab) => {
        setTab(tab);
    }

  return (
    <div className="tabby">
    <div className="tabby__tabbyButton">
        <button className={tab === 'tab1' ? 'tabby__tabbyButton__button' : 'tabby__tabbyButton__button__active'} onClick={() => hadleTabbyButton('tab1')}>Tasting Menu</button>
        <button className={tab === 'tab2' ? 'tabby__tabbyButton__button' : 'tabby__tabbyButton__button__active'} onClick={() => hadleTabbyButton('tab2')}>Beverage Menu</button>
    </div>
    <div className="tabby__eachBtnContent">
    {tab==='tab1' && <div className={ tab === 'tab1' ? 'activeTab': 'tab__content'}>
          <p>Testing Menu</p>
    </div>}
    </div>
    </div>
  )
}

export default TabbyButtons