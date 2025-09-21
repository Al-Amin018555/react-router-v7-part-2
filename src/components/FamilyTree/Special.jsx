import { useContext } from "react";
import { AssetContext } from "./FamilyTree";

const Special = ({name,asset}) => {
    const newAsset = useContext(AssetContext);
    return (
        <div>
            <h3>special:{name}</h3>
            <p>Asset: {asset}</p>
            <p>New Asset: {newAsset}</p>
        </div>
    );
};

export default Special;