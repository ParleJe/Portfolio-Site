
import './style.css';
import {FormEvent, useState, useEffect, RefObject} from 'react';
import {useInView} from 'react-intersection-observer';
import Logo from '../logo';
import {env} from '../../config'

declare const window: any;

interface response{
    status: number
}

interface feedback{
    templateId: string,
    email: string,
    name: string,
    subject: string,
    text: string,
    user: string,
}

const sendFeedback = async ({
    templateId,
    email,
    name,
    subject,
    text,
    user,
}: feedback) => {
    window.emailjs.send(
        "default_service",
        templateId,
        {
            name,
            email,
            subject,
            text,
        },
        user
        )
        .catch(() => { alert('An error has occured. Please try again')});
    };
        
interface Props {
    refLink: RefObject<any>
}

const Contact = ({refLink}: Props) => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<any>('')
    const [subject, setSubject] = useState<string>('')
    const [text, setText] = useState<string>('')
    const { ref, inView } = useInView({
        threshold: 0.25
    })
    const [opacity, setOpacity] = useState(0);

    const onSubmit = (event: FormEvent) => {
        event.preventDefault()
    
        const {
            REACT_APP_EMAILJS_TEMPLATEID: templateId,
            REACT_APP_EMAILJS_USERID: user,
        } = env
    
        sendFeedback({
            templateId,
            email,
            name,
            subject,
            text,
            user
        })
        setName("");
        setEmail("");
        setSubject("");
        setText("");
    };

    useEffect( () => {
            setOpacity(inView?1:0)
    },[inView])
    
    return (
        <div ref={refLink} className="main-component" style={{opacity: opacity, transition: '1s'}}>
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