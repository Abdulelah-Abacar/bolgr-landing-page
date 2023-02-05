import { useState } from "react";
import { 
  logo, 
  arrowLightIcon,
  arrowDarkIcon,
  closeIcon,
  hamburgerIcon,
  editorDesktop,
  editorMobile,
  laptopDesktop,
  laptopMobile,
  phones } from "./images";

function Links({title, links}) {
  return (
    <li className="group relative text-center py-3 md:text-white font-Ubuntu cursor-pointer hover:underline">
      <div className="items-center justify-center flex gap-1">
        <span>{title}</span>
        <div>
          <picture>
            <source media="(min-width: 767.98px)" srcSet={arrowLightIcon} />
            <img src={arrowDarkIcon} alt="..." />
          </picture>
        </div>
      </div>
      <div className="group-hover:block hidden bg-grayishBlue-50 md:bg-white p-5 w-full md:w-[170px] rounded-lg md:shadow-2xl md:absolute top-12 -left-6 text-black font-Ubuntu">
        {links?.map((item, i) => (
          <a className="block hover:font-bold mb-3 last:mb-0" key={i} href="https://google.com">{item}</a>
        ))}
      </div>
    </li>
  )
};
function FooterLinks({title, links}) {
  return (
    <div className="flex flex-col gap-6 text-white md:w-80 mb-12 last:mb-0">
      <div className="cursor-pointer hover:underline">
        <strong>{title}</strong>
      </div>
      <div className="font-Ubuntu">
        {links?.map((item, i) => (
          <a className="text-grayishBlue-50 block hover:font-bold mb-2 last:mb-0 cursor-pointer hover:underline" key={i} href="https://google.com">{item}</a>
        ))}
      </div>
    </div>
  )
}
function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleShowNav = () => setIsNavOpen(!isNavOpen)

  return (
    <main className="relative">
      <header className="absolute w-full flex md:flex-col lg:flex-row items-center justify-between md:justify-start md:gap-12 px-6 py-12 md:py-16">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="icons md:hidden" onClick={toggleShowNav}>
          {isNavOpen ? <img src={closeIcon} alt="..." /> : <img src={hamburgerIcon} alt="..." /> }
        </div>
        <nav className={`w-11/12 md:w-full bg-white md:bg-transparent p-4 absolute top-28 md:top-0 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 md:relative md:p-0 flex-col md:flex-row ${isNavOpen ? "flex" : "hidden"} md:flex justify-between items-center rounded-xl shadow-2xl md:shadow-none`}>
          <ul className="links md:flex gap-4 w-full md:w-auto text-center border-b border-grayishBlue-50 md:border-none">
            <Links title={'Product'} links={['Overview','Pricing','Marketplace','Features','Integrations']}  />
            <Links title={'Company'} links={['About','Team','Blog','Careers']}  />
            <Links title={'Connect'} links={['Contact','Newsletter','LinkedIn']}  />
          </ul>
          <ul className="hyper-links md:flex gap-2">
            <li className="py-3 px-12 cursor-pointer rounded-full md:text-white font-semibold font-Ubuntu"><a href="https://google.com"></a>Login</li>
            <li className="py-3 px-12 cursor-pointer rounded-full bg-localred-50 text-white font-semibold font-Ubuntu"><a href="https://google.com"></a>Sign Up</li>
          </ul>
        </nav>
      </header>
      <section className="landing bg-gradient-to-r from-gradient1-from to-gradient1-to min-h-[95vh] md:min-h-[80vh] rounded-bl-[100px]">
        <div className="flex items-center justify-center bg-bgPatternIntroMobile bg-[length:300%] bg-[40%_30%] sm:bg-[length:180%] sm:bg-[50%_20%] md:bg-bgPatternIntroDesktop bg-no-repeat lg:bg-[-250px_-900px] md:bg-[-100px_-600px] min-h-[95vh] md:min-h-[80vh] rounded-bl-[100px]">
          <div className="text-center text-white md:pt-60 md:pb-12 lg:pt-0 px-6 sm:px-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl">A modern publishing platform</h1>
            <p className="my-8 text-2xl">Grow your audience and build your online brand</p>
            <div className="flex gap-4 items-center justify-center">
              <a className="py-3 sm:py-4 px-4 sm:px-8 cursor-pointer rounded-full bg-white text-localred-50 hover:bg-localred-50 hover:text-white font-semibold font-Ubuntu" href="https://google.com">Start for Free</a>
              <a className="py-3 sm:py-4 px-4 sm:px-8 cursor-pointer rounded-full border-2 border-white hover:bg-white hover:text-localred-50 text-white font-semibold font-Ubuntu" href="https://google.com">Learn More</a>
            </div>
          </div>
        </div>
      </section>
      <section className="text-center px-6 py-20 md:py-32 md:pb-40 font-Ubuntu overflow-hidden">
        <div className="title">
          <h2 className="text-4xl text-blackBlue font-bold mb-8">Designed for the future</h2>
        </div>
        <div className="md:flex items-center justify-between relative">
          <div className="md:w-3/5 md:absolute md:-right-[235px] my-12 md:my-0">
            <article className="">
              <picture>
                <source media="(min-width: 767.98px)" srcSet={editorDesktop} />
                <img className="" src={editorMobile} alt="editor" />
              </picture>
            </article>
          </div>
          <div className="md:text-left md:w-2/3 lg:w-1/2">
            <article className="mb-12 md:mb-16">
              <h3 className="text-3xl text-blackBlue font-medium md:font-bold mb-8">Introducing an extensible editor</h3>
              <p className="md:text-xl text-grayishBlue-100">
                Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
                The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
                videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
                change the looks of a blog.
              </p>
            </article>
            <article>
              <h3 className="text-3xl text-blackBlue font-medium md:font-bold mb-8">Robust content management</h3>
              <p className="md:text-xl text-grayishBlue-100 font-meduim">
                Flexible content management enables users to easily move through posts. Increase the usability of your blog 
                by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b overflow-hidden md:overflow-visible md:bg-gradient-to-r from-gradient2-from to-gradient2-to rounded-bl-[100px] rounded-tr-[100px] md:mt-20">
        <div className="p-8 md:p-0 text-center md:text-left relative md:flex justify-center bg-bgPatternCircles bg-no-repeat bg-[length:170%] sm:bg-[length:100%] bg-[50%_-300px] md:bg-[-210px_80%]">
          <article className="md:w-2/5 relative">
            <div className="md:absolute md:h-[400px] md:-top-[35px]">
              <img className="md:h-full" src={phones} alt="phones" />
            </div>
          </article>
          <article className="md:w-3/5 lg:w-1/2 text-white">
            <div className="md:py-20">
              <h2 className="text-4xl font-bold mb-4">State of the Art Infrastructure</h2>
              <p className="md:text-xl text-grayishBlue-50 font-meduim">
                With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
                This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
              </p>
            </div>
          </article>
        </div>
      </section>
      <section className="text-center px-6 py-20 md:py-32 md:pb-40 font-Ubuntu overflow-hidden">
        <div className="md:flex items-center justify-between relative">
            <div className="md:w-3/5 md:absolute md:-left-[235px] my-12 md:my-0">
              <article className="">
                <picture>
                  <source media="(min-width: 767.98px)" srcSet={laptopDesktop} />
                  <img className="" src={laptopMobile} alt="editor" />
                </picture>
              </article>
            </div>
            <div className="md:text-left md:w-2/3 lg:w-1/2 md:relative md:left-[45%]">
              <article className="mb-12 md:mb-16">
                <h3 className="text-3xl text-blackBlue font-medium md:font-bold mb-8">Free, open, simple</h3>
                <p className="md:text-xl text-grayishBlue-100">
                  Blogr is a free and open source application backed by a large community of helpful developers. It supports 
                  features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
                  and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
                </p>
              </article>
              <article>
                <h3 className="text-3xl text-blackBlue font-medium md:font-bold mb-8">Powerful tooling</h3>
                <p className="md:text-xl text-grayishBlue-100 font-meduim">
                  Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
                  capable of producing even the most complicated sites.
                </p>
              </article>
            </div>
          </div>
      </section>
      <footer className="bg-blackBlue rounded-tr-[100px] text-center flex items-center justify-center  py-16">
        <div className="md:flex w-4/5 justify-between">
          <div className="md:min-w-max flex justify-center mb-16 md:mb-0">
            <span>
              <img className="md:w-full" src={logo} alt="logo" />
            </span>
          </div>
          <FooterLinks title={'Product'} links={['Overview','Pricing','Marketplace','Features','Integrations']}  />
          <FooterLinks title={'Company'} links={['About','Team','Blog','Careers']}  />
          <FooterLinks title={'Connect'} links={['Contact','Newsletter','LinkedIn']}  />
        </div>
      </footer>
    </main>
  )
};













export default App
