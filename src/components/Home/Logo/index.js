import { useEffect, useRef } from 'react'
import { gsap } from "gsap/dist/gsap"
import DrawSVGPlugin from 'gsap'
import './index.scss'
import Images from '../../../assets/images/logo-s.png'

const Logo = () => {
  const bgRef = useRef(0,0,0)
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 0,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="container"
        src={Images}
        alt="logo-s.png"
      />
    </div>
  );
};
export default Logo;
