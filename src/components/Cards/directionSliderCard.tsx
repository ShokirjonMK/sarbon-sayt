import Image from "next/image";
import Link from "next/link";

const DirectionSliderCard = ({className, item}: {className?: string, item?: any}) => {

    return (
        <Link href={`/directions/${item?.id}`} >
            <div className={`rounded-lg p-2 main-card-hover cursor-pointer h-full ${className}`} style={{border: 'solid 1px #e9ebeb'}}>
                <div className="overflow-hidden rounded-lg">
                    <Image className="rounded-lg w-full" src={item?.img} alt={item?.sub_title} />
                </div>
                <div className="my-6 mx-4">
                    <p className="text-2xl mb-3 card-title">{item?.title}</p>
                    <p className="line-clamp-2">{item?.sub_title}</p>
                </div>
            </div>
        </Link>
    )
}
export default DirectionSliderCard;