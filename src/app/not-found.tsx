import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <section className=" relative pt-32 pb-14 md:pb-7 lg:pb-40 lg:-mb-24 bg-black/50">
      <div className="container flex h-[calc(100vh_-_200px)] sm:h-screen  flex-col pt-20 text-white justify-center items-center">
        <div className=" mb-7 text-3xl">
          Opps! We couldn’t find that page...
        </div>
        <h1 className="text-8xl font-bold mb-8 md:mb-14">404</h1>
        <Button className="w-[200px]">
          <Link href="/" title="Go back to Home">
            Home Page
          </Link>
        </Button>
      </div>
    </section>
  );
}
