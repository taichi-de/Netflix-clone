import Link from 'next/link';
import { FaMedium, FaGithubSquare, FaLinkedin } from 'react-icons/fa';

export default function Icons() {
  return (
    <div className="flex items-center justify-center w-full mt-5 text-center">
      <Link
        href="https://github.com/taichi-de"
        target="_blank"
        className="mr-3 text-gray-300 hover:text-yellow-500"
      >
        <FaGithubSquare className="w-7 h-7" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/taichi-tomioka-746241191/"
        target="_blank"
        className="mr-3 text-gray-300 hover:text-blue-600"
      >
        <FaLinkedin className="w-7 h-7" />
      </Link>
      <Link
        href="https://taizen-note.vercel.app/"
        target="_blank"
        className="text-gray-300 hover:text-green-700"
      >
        <FaMedium className="w-7 h-7" />
      </Link>
    </div>
  );
}
