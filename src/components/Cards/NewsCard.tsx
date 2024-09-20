import Image from "next/image";
import { Divider } from "antd";
import Link from "next/link";

const NewsCard = ({className, item}: {className?: string, item?: any}) => {

    return (
        <Link href={`/news/${item?.id}`} >
            <div className={`rounded-lg p-2 main-card-hover cursor-pointer h-full ${className}`} style={{border: 'solid 1px #e9ebeb'}}>
                <div className="overflow-hidden rounded-lg">
                    <Image className="rounded-lg w-full" src={item?.img} alt={item?.sub_title} />
                </div>
                <div className="mt-6 mb-4 mx-4">
                    <p className="text-2xl mb-3 card-title line-clamp-2">{item?.title}</p>
                    <p className="line-clamp-3">{item?.sub_title}</p>
                    <Divider className="my-4" />
                    <p className="text-primary text-base">{item?.date}</p>
                </div>
            </div>
        </Link>
    )
}
export default NewsCard;