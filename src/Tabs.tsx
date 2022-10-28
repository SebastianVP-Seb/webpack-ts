import React from 'react';
import { ITabItem, TypeIdTab } from './descriptor/types';
import { tabsItem } from './descriptor/TabsElements';
import { ITabItemComp, ITabsComp } from './types';

const Tabs: React.FC<ITabsComp> = ({getTabSelected}) => {

    const [tabsItems, setTabsItems]=React.useState(tabsItem);

    const activeTabItem=React.useCallback((id: TypeIdTab)=>{
        setTabsItems(
            prevState => prevState.map(item=>
                item.id===id
                    ? {...item, isActive: true}
                    : {...item, isActive: false}
                )
        );
        getTabSelected(id);
    }, []);
    
  return (
    <div className="tabs is-centered">
        <ul>
            {
                // tabsItems.map(TabItem)
                tabsItems.map((item)=>(
                    <TabItem 
                        key={item.id}
                        {...item} //puede ser, en lugar de mandarle cada prop una por una
                        id={item.id} 
                        isActive={item.isActive} 
                        label={item.label} 
                        Icon={item.Icon}
                        activeTabItem={activeTabItem} //necesario agregar
                    />
                ))
            }
        </ul>
    </div>
  );
};

//Anteriormente tenía la I ITabItem
const TabItem: React.FC<ITabItemComp> = React.memo(({Icon, id, isActive, label, activeTabItem}) => {

    //Se renderiza dos veces porque activa un elemento y el anterior que estaba activado lo desactiva
    // React.useEffect(()=>console.log('Renderizando'));

    return (
        //Si sólo se le pasa la referencia de la f, devolverá el evento y se necesita el id
        //asegurando que el id sea de tipo TypeIdTab
        <li key={id} className={isActive ? 'is-active' : ''} onClick={()=>activeTabItem(id as TypeIdTab)} >
            <a>
                <span className="icon is-small">{Icon && <Icon />}</span>
                <span>{label}</span>
            </a>
        </li>
    );
});

export default Tabs;