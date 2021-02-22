import './style.css';
import {FormEvent, useState, useEffect, useRef} from 'react';
import {useInView} from 'react-intersection-observer';
const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    alert("Submitted")
};

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [text, setText] = useState('')
    const { ref, inView, entry } = useInView({
        threshold: 0.25
    })
    const [opacity, setOpacity] = useState(0);

    useEffect( () => {
            setOpacity(inView?1:0)
    },[inView])
    return (
        <div className="main-component" style={{opacity: opacity, transition: '1s'}}>
            <div className="left-panel">
                <h1 className="segment-title">Contact me</h1>
                <p className="contact-paragraph">bla bla bla bla bla bla bla bla bla bla bla bla bla
                bla bla bla bla bla bla bla bla bla bla bla bla bla
                bla bla bla bla bla bla bla bla bla bla bla bla bla
                bla bla bla bla bla bla bla bla bla bla bla bla bla</p>
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