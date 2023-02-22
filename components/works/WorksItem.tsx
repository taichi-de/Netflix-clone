import Image from 'next/image';

type WorksItemProps = {
  title: string;
  alt: string;
  desc: string;
  img: string;
};

export default function WorksItem({ title, alt, desc, img }: WorksItemProps) {
  return (
    <div className="m-4 bg-gray-200 rounded-lg">
      {/* TODO: do clickable -> <Link /> */}
      <Image src={img} alt={alt} width={400} height={250} className="rounded-t-lg" />
      <div className="flex-wrap items-center justify-center p-2 text-xs text-gray-500">
        <h3 className="font-bold">{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}
