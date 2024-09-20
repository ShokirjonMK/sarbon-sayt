import '@/assets/style/buttons.scss';

const MainButton = ({className, type, title, uppercase = true, isArrow = false, dataaos, onClick}: {className?: string, type?: "main" | "light", title?: string, uppercase?: boolean, isArrow?: boolean, dataaos?: string, onClick?: any}) => {
    
    return (
        <button onClick={onClick} className={`flex items-center rounded-full font-bold h-max xl:py-[12px] xl:px-[24px] md:py-[10px] md:px-[12px] py-[12px] px-[24px] transition-all ${type === "main" ? "bg-primary hover:bg-primaryHover text-white sarbon-main-button" : "bg-white text-primary hover:bg-primary hover:text-white sarbon-main-button-light"} ${className} ${uppercase ? "uppercase" : ""}`}>
            {title}
            {
                isArrow ? <svg className="ml-[12px]" width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className={type === "main" ? "fill-white" : "fill-primary"} d="M8.46967 1.53033C8.17678 1.23744 8.17678 0.762563 8.46967 0.46967C8.76256 0.176777 9.23744 0.176777 9.53033 0.46967L13.5303 4.46967C13.8232 4.76256 13.8232 5.23744 13.5303 5.53033L9.53033 9.53033C9.23744 9.82322 8.76256 9.82322 8.46967 9.53033C8.17678 9.23744 8.17678 8.76256 8.46967 8.46967L11.1893 5.75H1.5C1.08579 5.75 0.75 5.41421 0.75 5C0.75 4.58579 1.08579 4.25 1.5 4.25H11.1893L8.46967 1.53033Z" fill="#2D4255"/>
                </svg> : ""
            }
        </button>
    )
}
export default MainButton;