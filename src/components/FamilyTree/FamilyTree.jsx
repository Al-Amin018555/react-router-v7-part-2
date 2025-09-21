import { createContext } from 'react';
import './FamilyTree.css'
import Grandpa from './Grandpa';

export const AssetContext = createContext('');

const FamilyTree = () => {
    const asset = 'diamond';
    const newAsset = 'gold';
    return (
        <div className="family-tree">
            <h2>Family Tree</h2>
            <AssetContext.Provider value={newAsset}>
                <Grandpa asset={asset}></Grandpa>
            </AssetContext.Provider>
        </div>
    );
};

export default FamilyTree;