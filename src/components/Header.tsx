import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    return (
        <>
            <header className='p-6 flex flex-col md:flex-row gap-8 justify-evenly items-center bg-slate-200'>
                <Link href='/' className='flex-1'>
                    <Image
                        src='/ebdigital.svg'
                        width={72}
                        height={72}
                        alt='Logo'
                    />
                </Link>
                <nav className='flex flex-1 flex-row flex-wrap justify-center md:flex-nowrap md:justify-end  gap-8'>
                    <Link href='/' className='font-bold'>
                        Home
                    </Link>
                    <Link href='/about' className='font-bold'>
                        About
                    </Link>
                    <Link href='/portfolio' className='font-bold'>
                        Portfolio
                    </Link>
                    <Link href='/blog' className='font-bold'>
                        Blog
                    </Link>
                    <Link href='/contact' className='font-bold'>
                        Contact
                    </Link>
                </nav>
            </header>
        </>
    );
};

export default Header;
