import logo from "../../assets/img/logo.png"
import instagram_white from "../../assets/img/instagram_white.svg"
import youtube_white from "../../assets/img/youtube_white.svg"
import telegram_white from "../../assets/img/telegram_white.svg"
import x_white from "../../assets/img/x_white.svg"

export default function Footer() {
    return (
        <footer className='w-full'>
            <div className='w-full text-white items-center px-5 flex flex-row my-5'>
                <div className="lg:w-1/3 w-2/3 flex flex-row text-center gap-2">
                    <img src={logo} width={80} height={80} alt='logo' className="lg:w-[80px] w-[40px] my-auto" />
                    <h1 className="lg:text-lg text-sm my-auto">2023 By Contribute Team</h1>
                </div>
                <div className="flex flex-row w-1/3 lg:gap-3 gap-1 lg:justify-center justify-end">
                    <img src={instagram_white} width={40} height={40} alt='logo' className="lg:w-[40px] w-[25px] my-auto" />
                    <img src={youtube_white} width={40} height={40} alt='logo' className="lg:w-[40px] w-[25px] my-auto" />
                    <img src={telegram_white} width={40} height={40} alt='logo' className="lg:w-[40px] w-[25px] my-auto" />
                    <img src={x_white} width={40} height={40} alt='logo' className="lg:w-[40px] w-[25px] my-auto" />
                </div>
            </div >
        </footer >
    );
}
