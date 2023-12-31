import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Ishan Manandhar' },
    {
      name: 'Product designer and developer',
      content: 'Welcome to ishan-manandhar.com.np',
    },
  ];
};

export default function Index() {
  return (
    <div className="max-w-screen-sm mx-auto py-10 px-4 sm:px-0 sm:py-20">
      <img className="h-20 w-20 rounded-full" src="assets/ishan.jpeg" alt="" />
      <div className="mt-8">
        <h1 className="text-white text-3xl font-extrabold">Ishan Manandhar</h1>
        <p className="text-gray-400">Product designer and Developer</p>
        <div className="pt-6">
          <p className="text-gray-300 leading-relaxed">
            Designing and building delightful product experience that is
            memorable and easy to use. I am obsessed about good UX and
            functional programming.{' '}
          </p>
          <p className="text-gray-300 pt-3 leading-relaxed">
            During my time outside of work; I love to contribute to open source
            community, record youtube videos and being in nature.
          </p>
          <p className="text-gray-400 text-sm pt-8 leading-relaxed">
            If you have questions, issues or work collaboration you can reach me
            out via email{' '}
            <a href="mailto:ishan02016@gmail.com" className="underline">
              ishan02016@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
