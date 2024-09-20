export const Lenta = () => {

    const textArray = Array(80).fill("Qabul davom etmoqda");

    return (
        <div className="overflow-hidden w-full bg-secondPrimary text-white py-2 scrolling-text-wrapper">    
            <div className="scrolling-text flex w-max overflow-hidden whitespace-nowrap scrolling-text-duration">
                {textArray.map((text, index) => (
                    <div className="text-lg mx-6" key={index}>{text}</div>
                ))}
            </div>
        </div>
    )
}