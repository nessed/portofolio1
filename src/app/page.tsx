import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <title>Portfolio</title>
      <main className='bg-white dark:bg-gradient-to-b dark:from-slate-900 dark:to-indigo-500 px-10 md:px-20 lg:px-40'>
        <section className="min-h-screen">
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='dark:text-white text-xl font-burtons text-indigo-500'>developedbyali</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill className="cursor-pointer text-2xl" /></li>
              <li>
                <a className="bg-gradient-to-r from-indigo-500 to-blue-500 via-purple-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-indigo-600 font-medium md:text-6xl'>Ali</h2>
            <h3 className='dark:text-white text-2xl py-2 md:text-3xl'>Developer and designer</h3>
            <p className='dark:text-white text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto'>
              Offering services for your frontend related needs.
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-indigo-600'>
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-indigo-500 to-blue-500 via-purple-500 
          rounded-full w-80 h-80 mt-20 overflow-hidden'>
            <Image src="/aliiii.png" alt="Dev Ed Wave" layout="fill" objectFit='cover' className='' />
          </div>
        </section>
        <section>
          <div className='dark:text-white '>
            <h3 className='text-3xl py-6 pt-10 font-bold'>Services I offer</h3>
            <p className='text-2xl'> While I haven&apos;t yet had the opportunity to work on specific gigs,
              my portfolio showcases a collection of
              projects that highlight my skills and expertise in <span className="text-indigo-500">front-end development</span>.
              These projects exemplify my dedication to delivering high-quality work, and I am confident that I can
              provide you with <span className="text-indigo-500">exceptional service</span> for your frontend needs.</p>
            <p className='text-2xl py-2 leading-8'>I offer a wide array of services, including
              <span className="text-indigo-500"> music production </span>
              as well as <span className="text-indigo-500">O levels tutoring</span>.
            </p>
          </div>
          <div className='shadow-lg p-10 rounded-xl my-10 text-center dark:bg-slate-800 dark:text-white'>
            <div className='flex justify-center'>
              <Image className="" src="/design.png" alt="design" width={100} height={100} />
            </div>
            <div className='gap-10'>
              <h3 className='text-lg font-medium pt-8 pb-2 font-bold'>Beautiful Designs</h3>
              <p className='py-2'>Creating elegant designs suited to your preferences</p>
              <h4 className='py-4 text-indigo-500'>Design tools I use</h4>
              <p className='text-gray-800 py-1 dark:text-white'>Photoshop</p>
              <p className='text-gray-800 py-1 dark:text-white'>Illustrator</p>
              <p className='text-gray-800 py-1 dark:text-white'>Figma</p>
            </div>
          </div>
          <div className='shadow-lg p-10 rounded-xl my-10 text-center dark:bg-slate-800 dark:text-white'>
            <div className='flex justify-center'>
              <Image className="" src="/code.png" alt="design" width={100} height={100} />
            </div>
            <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
            <p className='py-2'>Creating elegant designs suited to your preferences</p>
            <h4 className='py-4 text-indigo-500'>Design tools I use</h4>
            <p className='text-gray-800 py-1 dark:text-white'>Photoshop</p>
            <p className='text-gray-800 py-1 dark:text-white'>Illustrator</p>
            <p className='text-gray-800 py-1 dark:text-white'>Figma</p>
          </div>
          <div className='shadow-lg p-10 rounded-xl my-10 text-center dark:bg-slate-800 dark:text-white'>
            <div className='flex justify-center'>
              <Image className="" src="/consulting.png" alt="design" width={100} height={100} />
            </div>
            <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
            <p className='py-2'>Creating elegant designs suited to your preferences</p>
            <h4 className='py-4 text-indigo-500'>Design tools I use</h4>
            <p className='text-gray-800 py-1 dark:text-white'>Photoshop</p>
            <p className='text-gray-800 py-1 dark:text-white'>Illustrator</p>
            <p className='text-gray-800 py-1 dark:text-white'>Figma</p>
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-white font-bold'>Portfolio</h3>
            <p className='text-xl md:text-xl dark:text-white'>
              While I haven&apos;t yet had the opportunity to work on specific gigs, my portfolio showcases a collection of
              projects that highlight my skills and expertise in <span className="text-indigo-500">front-end development</span>.
              These projects exemplify my dedication to delivering high-quality work, and I am confident that I can
              provide you with <span className="text-indigo-500">exceptional service</span> for your frontend needs.
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image src="/web1.png" alt='web1' className='rounded-lg object-cover' width={100} height={100} layout="responsive" />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src="/web2.png" alt='web2' className='rounded-lg object-cover' width={100} height={100} layout="responsive" />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src="/web3.png" alt='web3' className='rounded-lg object-cover' width={100} height={100} layout="responsive" />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src="/web4.png" alt='web4' className='rounded-lg object-cover' width={100} height={100} layout="responsive" />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src="/web5.png" alt='web5' className='rounded-lg object-cover' width={100} height={100} layout="responsive" />
            </div>
          </div>
        </section>

        {/* Add the "circles" section here */}
        <section>
          <div className='circles'>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
          </div>
        </section>
      </main>
    </div>
  );
}
