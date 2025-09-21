// import { useContext } from "react";
import { use } from "react";
import { MoneyContext } from "./FamilyTree";

const Brother = () => {
    const [money, setMoney] = use(MoneyContext);
    // const [money, setMoney] = useContext(MoneyContext); // jekono ekta use korlei hobe
    return (
        <div>
            <h3>Brother</h3>
            <button onClick={() => setMoney(money + 1000)}>Add 1000 tk</button>
        </div>
    );
};

export default Brother;