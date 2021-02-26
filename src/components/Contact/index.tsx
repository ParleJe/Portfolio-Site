
import './style.css';
import {FormEvent, useState} from 'react';
import {useInView} from 'react-intersection-observer';
import Logo from '../logo';
import {env} from '../../config'
import {ContactProps as Props, feedback} from '../../helpers/interfaces';
import PhotoDisplay from '../PhotoDisplay';
import github from "../../technologyIcons/github.svg";
import linkedin from "../../technologyIcons/linkedin.svg";
declare const window: any;

const sendFeedback = async ({
    templateId,
    email,
    name,
    subject,
    content,
    user,
}: feedback) => {
    window.emailjs.send(
        "default_service",
        templateId,
        {
            name,
            email,
            subject,
            content,
        },
        user
        )
        .catch(() => { alert('An error has occured. Please try again')});
    };

const Contact = ({refLink, data}: Props) => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<any>('')
    const [subject, setSubject] = useState<string>('')
    const [content, setContent] = useState<string>('')
    const { ref, inView } = useInView({
        threshold: 0.5
    })

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
            content,
            user
        })
        setName("");
        setEmail("");
        setSubject("");
        setContent("");
    };
    
    return (
        <div ref={refLink} className="main-component" style={{opacity: inView?1:0.1, transition: '1s'}}>
            <h1 className="segment-title">Contact me</h1>
            <div ref={ref} className="bigger-panel first-panel contact-padding" >
                <p className="contact-paragraph">{data.text}</p>
                <div className="social-links-container" >
                    <a className="social-link" href={data.git}>
                        <PhotoDisplay images={[github]} round={true} transitionTime={null} />
                    </a>
                    <a className="social-link" href={data.linkedin}>
                        <PhotoDisplay images={[linkedin]} round={true} transitionTime={null} />
                    </a>
                </div>
                <div className="contact-logo-container">
                    <Logo rotate={false} animate={true} />
                </div>
            </div>

            <div className="smaller-panel">
                <form onSubmit={onSubmit}>
                    <div className="form-grid">
                        <input id='name' name='name' type='text' placeholder='Name' required={true} value={name} onChange={(e) => setName(e.target.value)} />
                        <input id='email' name='email' type='email' placeholder='Email' required={true} value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input id='subject' name='subject' type='text' placeholder='Subject' required={true} value={subject} onChange={(e) => setSubject(e.target.value)} />
                        <textarea id='message' name="text" placeholder='Message' required={true} value={content} onChange={(e) => setContent(e.target.value)} />
                    </div>
                        <button type="submit">Send message!</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;