import style from "./main.module.css"
import { Link } from "react-router-dom";
import vedio from '../../../media/background-video.mp4'
import vedioImg from "../../../media/background.en.avif"
import foreGround from "../../../media/foreground.en.avif"
import { useEffect, useState } from "react";

const Main = () => {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", (event) => {
            const scrollTop = window.scrollY;
            // if (scrollTop > 350) {
            //     setScroll(true)
            // }
            setScroll(scrollTop)

        })
    }, [])

    return (
        <>
            <div className={style.mainBox}  >
                <section className={style.introDiv}>
                    <h1 className={style.heading}>Organize your work and life, finally.</h1>
                    <p className={style.paragraph}>
                        Become focused, organized, and calm with Todoist. The world’s #1 task manager and to-do list app.
                    </p>
                    <Link className={style.redBtn}>Start for free</Link>
                </section>
                <section className={style.vedioSection} >
                    <div className={style.videoWrapper}>
                        <video autoPlay>
                            <source src={vedio} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className={style.interface} id={scroll > 250 ? style.show : style.hidden}>
                        <img src={vedioImg} alt="vedioImg" />
                        <img  id={style.innerImg} src={foreGround} alt="vedioImg" />

                    </div>

                </section>

                <section className={style.brandsWrapper}>
                    

                </section>


            </div>
        </>
    )
}

export default Main;