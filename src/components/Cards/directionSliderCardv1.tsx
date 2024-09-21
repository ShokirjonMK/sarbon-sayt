import Link from "next/link";
import MainButton from "../Buttons/mainBtn";

const DirectionSliderCardv1 = ({className, item}: {className?: string, item?: any}) => {

    return (
        <div className="hover:-translate-y-2 transition-all" >
        {/* <Link href={`/directions/${item?.id}`} className="hover:-translate-y-2 transition-all" > */}
            <div className={`rounded-lg p-2 main-card-hover cursor-pointer h-full ${className}`} style={{border: 'solid 1px #e9ebeb'}}>
                <div className="py-3 px-4 flex flex-col h-full">
                    <p className="text-2xl mb-2 card-title font-semibold text-secondPrimary">{item?.title}</p>
                    <p className="line-clamp-2 mb-8 text-secondPrimary">{item?.sub_title}</p>
                    <div className="mb-4 mt-auto text-primary font-bold">
                        {
                            item?.prices?.kunduzgi ? 
                            <div className="flex justify-between">
                                <p>Kuzduzgi</p>
                                <p>{item?.prices?.kunduzgi} / yil</p>
                            </div> : ""
                        }
                        {
                            item?.prices?.sirtqi ? 
                            <div className="flex justify-between">
                                <p>Sirtqi</p>
                                <p>{item?.prices?.sirtqi} / yil</p>
                            </div> : ""
                        }
                        {
                            item?.prices?.kechki ? 
                            <div className="flex justify-between">
                                <p>Kechgi</p>
                                <p>{item?.prices?.kechki} / yil</p>
                            </div> : ""
                        }
                    </div>
                    {/* <MainButton
                        title="Batafsil"
                        isArrow={false}
                        type="main"
                        className="w-full justify-center xl:py-[8px] text-[14px] font-medium"
                    /> */}
                </div>
            </div>
        </div>
    )
}
export default DirectionSliderCardv1;