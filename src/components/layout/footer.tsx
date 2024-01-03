const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');  
  const copyrightName = COMPANY_NAME || SITE_NAME || '';

  return (
    <footer >
      <div className="absolute bottom-0 w-full bg-background border-t border-neutral-200 py-2 sm:py-6 dark:border-neutral-500">
        <div className="text-xs lg:text:sm mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 xl:px-0">
          <p>
            &copy; {copyrightDate}
            {copyrightName.length && !copyrightName.endsWith('.') ? '.' : ''} All rights reserved.
          </p>
          <hr className="mx-4 hidden h-4 w-[1px] border-l border-background md:inline-block" />
          <p className="hidden lg:block">Designed in Argentina </p>
          <p className="md:ml-auto">
            by{' '}
            <a href="https://mariomolinaaraoz.com.ar" className="text-black dark:text-white">
              ▲ Mario Molina
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}