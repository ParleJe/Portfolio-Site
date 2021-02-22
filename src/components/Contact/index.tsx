import './style.css';
import {FormEvent, useState, useEffect} from 'react';
import {useInView} from 'react-intersection-observer';
import Logo from '../logo';


const onSubmit = (event: FormEvent):void => {
    event.preventDefault();
    alert("Submitted")
};

const Contact = () => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [subject, setSubject] = useState<string>('')
    const [text, setText] = useState<string>('')
    const { ref, inView } = useInView({
        threshold: 0.25
    })
    const [opacity, setOpacity] = useState(0);

    useEffect( () => {
            setOpacity(inView?1:0)
    },[inView])
    return (
        <div className="main-component" style={{opacity: opacity, transition: '1s'}}>
            <h1 className="segment-title">Contact me</h1>
            <div className="left-panel">
                <p className="contact-paragraph">bla bla bla bla bla bla bla bla bla bla bla bla bla
                bla bla bla bla bla bla bla bla bla bla bla bla bla
                bla bla bla bla bla bla bla bla bla bla bla bla bla
                bla bla bla bla bla bla bla bla bla bla bla bla bla</p>
                <div className="contact-logo-container">
                    <Logo rotate={false} animate={true} />
                </div>
            </div>

            <div className="right-panel">
                <form onSubmit={onSubmit} ref={ref}>
                    <div className="form-grid">
                        <input id='name' name='name' type='text' placeholder='Name' required={true} value={name} onChange={(e) => setName(e.target.value)} />
                        <input id='email' name='email' type='email' placeholder='Email' required={true} value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input id='subject' name='subject' type='text' placeholder='Subject' required={true} value={subject} onChange={(e) => setSubject(e.target.value)} />
                        <textarea id='message' name="text" placeholder='Message' required={true} value={text} onChange={(e) => setText(e.target.value)} />
                    </div>
                        <button type="submit">Send message!</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;