import CloseIcon from '@/components/assets/close-icon';

export default function ImageCard({
  imgUrl,
  deleteImage,
}: {
  imgUrl: string;
  deleteImage: () => void;
}) {
  return (
    <div className="relative h-[60px] w-[60px] shrink-0 rounded-lg border-[1px] border-gray-200">
      <div
        onClick={deleteImage}
        className="absolute right-[-5px] top-[-5px] cursor-pointer bg-white"
      >
        <CloseIcon width={20} height={20} fill="rgb(173,173,173)" />
      </div>
      <img
        src={imgUrl}
        alt={imgUrl}
        className="h-full w-full rounded-lg object-fill"
      />
    </div>
  );
}
