import Image from "next/image";

export default function ReviewCard({ review }) {
  return (
    <div className="flex flex-col gap-4 w-[320px] h-[216px] lg:w-fit lg:h-fit px-4 justify-center lg:justify-normal lg:px-6 lg:pt-10 lg:pb-6 bg-neutral-900 opacity-70 border border-neutral-500 rounded-2xl">
      <div className="flex gap-4">
        <span
          className="relative w-[50px] h-[50px] rounded-full"
          aria-label={`Review ${review.name}`}>
          <Image
            src={review.profileImg}
            alt="pic"
            fill
            className="object-contain rounded-full transition-transform duration-300 group-hover:scale-110"
            priority
          />
        </span>

        <span>
          <p>{review.name}</p>
          <p className="text-xs">
            {review.career} | {review.city}
          </p>
        </span>
      </div>
      <p className="text-xs lg:text-sm">{review.comment}</p>
      <p className="text-xs self-end">{review.date}</p>
    </div>
  );
}
