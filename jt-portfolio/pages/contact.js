import { useState, useEffect } from 'react'

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [isHover, setIsHover] = useState(false);

    useEffect(() => {
        if(submitted) {
            window.alert('Submitted email!');
            setName('');
            setEmail('');
            setMessage('');
            setSubmitted(false);
        }
    }, [submitted])

    async function handleSubmit(e) {
        e.preventDefault();
        console.log('Sending...');
        let data = {name, email, message};

        await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('Submitted.');
            setSubmitted(true);
        })
    }

    return (
        <div className="flex flex-col md:flex-row w-2/3 m-auto transform md:translate-y-1/2">
            <div className="flex flex-col items-center  w-full md:w-1/2 mt-12 border-b-2 border-orange md:border-b-0 md:border-r-2">
                <p className="text-xl md:text-4xl text-left">Email</p>
                <p className="pb-5 md:text-lg">jostal@josephtalon.ca</p>
                <p className="text-xl md:text-4xl">Linkedin</p>
                <a href="https://www.linkedin.com/in/jostal/" className="pb-5 md:text-lg">linkedin.com/in/jostal</a>
                <p className="text-xl md:text-4xl">GitHub</p>
                <a href="https://github.com/jostal" className="pb-5 md:text-lg">github.com/jostal</a>
            </div>

            <div className="w-full md:w-1/2 py-4 md:p-5 transform mt-12">
                <p className="text-lg text-center md:text-2xl">Contact me through email at <em>jostal@josephtalon.ca</em> or through this form!</p>
                <form className="py-5">
                    <formGroup className="">
                        <label htmlFor='name'>Name</label>
                        <br />
                        <input 
                            className="rounded-lg border-2 shadow-xl border-black text-black w-full" 
                            type="text" name="name" value={name} placeholder="Your Name"
                            onChange={(e) => {setName(e.target.value)}}
                        ></input>
                    </formGroup>
                    <formGroup className="">
                        <label htmlFor='email'>Email</label>
                        <br />
                        <input 
                            className="rounded-lg border-2 shadow-xl border-black text-black w-full" 
                            type="text" name="email" value={email} placeholder="Your Email"
                            onChange={(e) => {setEmail(e.target.value)}}
                        ></input>
                    </formGroup>
                    <formGroup className="">
                        <label htmlFor='message'>Message</label>
                        <br />
                        <textarea
                            className="rounded-lg border-2 shadow-xl border-black text-black w-full" 
                            type="text" name="message" value={message} placeholder="Your Message"
                            onChange={(e) => {setMessage(e.target.value)}}
                        ></textarea>
                    </formGroup>
                    <input type="submit" value="Send" className="p-1 bg-orange hover:bg-orange-banner rounded-lg" onClick={(e) => {handleSubmit(e)}}/>
                </form>
            </div>
        </div>
    )
}