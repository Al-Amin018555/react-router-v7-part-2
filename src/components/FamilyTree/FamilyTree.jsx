import { createContext, useState } from 'react';
import './FamilyTree.css'
import Grandpa from './Grandpa';

export const AssetContext = createContext('');
export const MoneyContext = createContext(0);

const FamilyTree = () => {
    const [money, setMoney] = useState(0);
    const asset = 'diamond';
    const newAsset = 'gold';
    return (
        <div className="family-tree">
            <h2>Family Tree</h2>
            <p>Total Family Money: {money}</p>
            <MoneyContext value={[money, setMoney]}>
                <AssetContext.Provider value={newAsset}>
                    <Grandpa asset={asset}></Grandpa>
                </AssetContext.Provider>
            </MoneyContext>
        </div>
    );
};

export default FamilyTree;

/**
 * 1. Create a context using createContext with a defalult value
 * make sure ou export the context to be used in other files
 */