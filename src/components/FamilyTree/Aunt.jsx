import Cousin from "./Cousin";

const Aunt = () => {
    return (
        <div>
            <h3>Aunt</h3>
            <section className="flex">
                <Cousin name="Tom Tom"></Cousin>
                <Cousin name="Joo Joo"></Cousin>
            </section>
        </div>
    );
};

export default Aunt;