
import { openingHours, socials } from '../../constants';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
import gsap from 'gsap';
const Contact = () => {
    useGSAP(() => {
        const titleSplit = new SplitText('#contact h2', { type: 'words' });
        gsap.timeline({
            scrollTrigger:{
                trigger: '#contact',
                start: 'top center',
            },
            ease: 'power1.inOut',
        })
        .from(titleSplit.words, {
            yPercent: 100,
            opacity: 0,
            stagger: 0.02
        })
        .from('#contact h3, #contact p', {
            yPercent: 100,
            opacity: 0,
            stagger: 0.02
        })
        .to('#f-right-leaf', {
            y: -50,
            duration: 1,
            ease: 'power1.inOut',
        })
        .to('#f-left-leaf', {
            y: -50,
            duration: 1,
            ease: 'power1.inOut',
        }, '<')
    })
    return (
        <footer id="contact">
            <img src="/images/footer-right-leaf.png" id="f-right-leaf" alt="leaf-right" />
            <img src="/images/footer-left-leaf.png" id="f-left-leaf" alt="leaf-left" />
            <div className="content">
                <h2>Where to Find Us</h2>
                <div>
                    <h3>Visit Our Bar</h3>
                    <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
                </div>
                <div>
                    <h3>Concact Us</h3>
                    <p>(555) 987-6543</p>
                    <p>hello@jsmcocktail.com</p>
                </div>
                <div>
                    <h3>Open every day</h3>
                    { openingHours.map((time) => (
                        <p key={time.day}>{time.day} : {time.time}</p>
                    )) }    
                </div>
                <div>
                    <h3>Socials</h3>
                    <div className="flex-center gap-5">
                        {socials.map((social) => (
                            <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                                <img src={social.icon} alt={social.name} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Contact;