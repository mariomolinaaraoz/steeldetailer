import clsx from 'clsx';
import Image from 'next/image';

export default function LogoIcon(props: React.ComponentProps<'svg'>) {
  return (
    <Image src="/logo.png" alt="Logo" width={200} height={100} />
  );
}