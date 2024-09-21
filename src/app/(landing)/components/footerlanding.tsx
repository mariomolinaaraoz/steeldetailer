const { COMPANY_NAME, SITE_NAME } = process.env;

export default function FooterLanding() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');  
  const copyrightName = COMPANY_NAME || SITE_NAME || '';

  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t dark:border-gray-800">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          &copy; {copyrightDate}
          {copyrightName.length && !copyrightName.endsWith('.') ? '.' : ''} All rights reserved.
        </p>
        <hr className="mx-4 hidden h-4 w-[1px] border-l border-background md:inline-block" />
        <div className="ml-auto flex text-xs">
           <p className="hidden lg:block">Designed in{' '} 
             <a 
              href="https://www.argentina.gob.ar/" 
              className="text-black dark:text-white hover:underline"
              title="Developers Country"
              >
              Argentina
            </a>
          </p>
          <p className="hidden lg:block pl-2 md:ml-auto">
            by{' '}
            <a 
              href="https://mariomolinaaraoz.com.ar" 
              className="text-black dark:text-white hover:underline"
              title="Sitio Oficial"
            >
              Mario Molina
            </a>
          </p>
        </div>
      </footer>
  );
}