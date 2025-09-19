import { useRef } from "react";

const UnControlledField = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} type="email" />
                <br />
                <input ref={passwordRef} type="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UnControlledField;