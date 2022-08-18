import React, { useEffect } from "react";

import menu from "../../public/menu.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
export default function Navbar() {
    let [istMenuOpen, setMenuOpen] = React.useState(false);

    const toggleMenuLinks = () => {
        setMenuOpen(!istMenuOpen);
    };

    let router = useRouter()


    const linksStyle = {
        active: 'text-white uppercase active hover:text-main-ciyan',
        nonActive: 'text-white uppercase hover:text-main-ciyan'
    }




    return (
        <nav className="w-full py-6 bg-main relative mx-auto max-w-[2000px]">

            {/**Content */}
            <div className="flex items-center  justify-between w-10/12 mx-auto">

                {/**Logo */}
                <div>
                    <span className="text-3xl font-bold text-white">NADA</span>
                    <span className="text-3xl font-thin text-white">MACURA</span>
                </div>

                <div className="flex items-center gap-16">

                    {/**Desktop */}
                    <div className=" lg:flex  gap-5 items-center">


                        <ul className="lg:flex hidden gap-5 ">
                            <li ><Link href='/' passHref><a className={router.asPath == '/' ? linksStyle.active : linksStyle.nonActive} >Homepage</a></Link></li>
                            <li><Link href='/about' passHref><a className={router.asPath == '/about' ? linksStyle.active : linksStyle.nonActive}>About</a></Link></li>
                            <li><Link href='/services' passHref><a className={router.asPath == '/services' ? linksStyle.active : linksStyle.nonActive}>Services</a></Link></li>
                            <li><Link href='/references' passHref><a className={router.asPath == '/references' ? linksStyle.active : linksStyle.nonActive}>References</a></Link></li>
                            <li><Link href='/blog' passHref><a className={router.asPath == '/blog' ? linksStyle.active : linksStyle.nonActive}>Blog</a></Link></li>
                            <li><Link href='/contact' passHref><a className={router.asPath == '/contact' ? linksStyle.active : linksStyle.nonActive}>Contact</a></Link></li>
                        </ul>

                        <button onClick={toggleMenuLinks} className="lg:hidden"><svg width="18" height="18" className="fill-main-ciyan pointer-events-none" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.00017 19.9977C1.46969 19.9977 0.96094 19.7869 0.585836 19.4118C0.210732 19.0367 0 18.528 0 17.9975V2.00017C0 1.46969 0.210732 0.96094 0.585836 0.585836C0.96094 0.210732 1.46969 0 2.00017 0H18.0015C18.532 0 19.0407 0.210732 19.4158 0.585836C19.7909 0.96094 20.0017 1.46969 20.0017 2.00017V17.9975C20.0017 18.528 19.7909 19.0367 19.4158 19.4118C19.0407 19.7869 18.532 19.9977 18.0015 19.9977H2.00017ZM30.0025 19.9977C29.472 19.9977 28.9633 19.7869 28.5882 19.4118C28.2131 19.0367 28.0023 18.528 28.0023 17.9975V2.00017C28.0023 1.46969 28.2131 0.96094 28.5882 0.585836C28.9633 0.210732 29.472 0 30.0025 0H45.9998C46.5303 0 47.0391 0.210732 47.4142 0.585836C47.7893 0.96094 48 1.46969 48 2.00017V17.9975C48 18.528 47.7893 19.0367 47.4142 19.4118C47.0391 19.7869 46.5303 19.9977 45.9998 19.9977H30.0025ZM2.00017 48C1.46969 48 0.96094 47.7893 0.585836 47.4142C0.210732 47.0391 0 46.5303 0 45.9998V29.9985C0 29.468 0.210732 28.9593 0.585836 28.5842C0.96094 28.2091 1.46969 27.9983 2.00017 27.9983H18.0015C18.532 27.9983 19.0407 28.2091 19.4158 28.5842C19.7909 28.9593 20.0017 29.468 20.0017 29.9985V45.9998C20.0017 46.5303 19.7909 47.0391 19.4158 47.4142C19.0407 47.7893 18.532 48 18.0015 48H2.00017ZM30.0025 48C29.472 48 28.9633 47.7893 28.5882 47.4142C28.2131 47.0391 28.0023 46.5303 28.0023 45.9998V29.9985C28.0023 29.468 28.2131 28.9593 28.5882 28.5842C28.9633 28.2091 29.472 27.9983 30.0025 27.9983H45.9998C46.5303 27.9983 47.0391 28.2091 47.4142 28.5842C47.7893 28.9593 48 29.468 48 29.9985V45.9998C48 46.5303 47.7893 47.0391 47.4142 47.4142C47.0391 47.7893 46.5303 48 45.9998 48H30.0025Z" fill="" />
                        </svg>
                        </button>

                    </div>


                    {/**Mobile */}
                    {istMenuOpen &&
                        <div className="lg:hidden fixed z-[9999] left-0 top-0 bg-black/50 backdrop-blur-xl w-full h-screen">

                            <button onClick={toggleMenuLinks} className="right-6 top-6 absolute"><svg className="w-8 h-8 pointer-events-none fill-white" width="" height="" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.68629 4.68629C10.9347 -1.5621 21.0653 -1.5621 27.3137 4.68629L128 105.373L228.686 4.68629C234.935 -1.5621 245.065 -1.5621 251.314 4.68629C257.562 10.9347 257.562 21.0653 251.314 27.3137L150.627 128L251.314 228.686C257.562 234.935 257.562 245.065 251.314 251.314C245.065 257.562 234.935 257.562 228.686 251.314L128 150.627L27.3137 251.314C21.0653 257.562 10.9347 257.562 4.68629 251.314C-1.5621 245.065 -1.5621 234.935 4.68629 228.686L105.373 128L4.68629 27.3137C-1.5621 21.0653 -1.5621 10.9347 4.68629 4.68629Z" fill="" />
                            </svg>
                            </button>

                            <ul className="flex flex-col gap-5 mt-16">
                                <li className="py-2 px-4 text-xl font-thin border-b  border-transparent   hover:border-b-main-ciyan"><Link href='/' passHref><a className="text-white uppercase">Homepage</a></Link></li>
                                <li className="py-2 px-4 text-xl font-thin border-b  border-transparent   hover:border-b-main-ciyan"><Link href='/' passHref><a className="text-white uppercase">About</a></Link></li>
                                <li className="py-2 px-4 text-xl font-thin border-b  border-transparent   hover:border-b-main-ciyan"><Link href='/' passHref><a className="text-white uppercase">Services</a></Link></li>
                                <li className="py-2 px-4 text-xl font-thin border-b  border-transparent   hover:border-b-main-ciyan"><Link href='/' passHref><a className="text-white uppercase">References</a></Link></li>
                                <li className="py-2 px-4 text-xl font-thin border-b  border-transparent   hover:border-b-main-ciyan"><Link href='/' passHref><a className="text-white uppercase">Blog</a></Link></li>
                                <li className="py-2 px-4 text-xl font-thin border-b  border-transparent   hover:border-b-main-ciyan"><Link href='/' passHref><a className="text-white uppercase">Contact</a></Link></li>
                            </ul>

                        </div>
                    }

                    <div className="hidden lg:block">
                        <ul className="flex gap-5">
                            <li><Link href='/' passHref><a className="text-white/30 uppercase">SRB</a></Link></li>
                            <li><Link href='/' passHref><a className="text-white uppercase">ENG</a></Link></li>

                        </ul>
                    </div>
                </div>

            </div>

        </nav>

    );
}
