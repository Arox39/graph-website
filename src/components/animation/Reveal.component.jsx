import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation} from "framer-motion"

const Reveal = ({children, hauteur, overflow, delay}) => {
    const ref = useRef(null)
    const isInView = useInView(ref)
    const mainControls = useAnimation()
    // valeur par defaut
    hauteur = hauteur ? hauteur : 40
    overflow = overflow ? overflow : "hidden"
    delay = delay ? delay : 0.1

    useEffect(() => {
        // quand l'element est visible lancer l'anime
        if (isInView) 
        {
            mainControls.start("visible")
        }

    }, [isInView, mainControls])
   return( 
    <div ref={ref} style={{overflow:overflow}} className="reveal">
        <motion.div
            variants={{
                hidden: {opacity: 0, y:hauteur},
                visible: {opacity: 1, y:0},
            }}
            initial="hidden"
            animate={mainControls}
            transition={{duration: 0.45, delay: delay}}
        >
        {children}
        </motion.div>
    </div>
   ) 
}
export default Reveal