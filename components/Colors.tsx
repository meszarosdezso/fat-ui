import { Color, colors } from "../lib/colors"
import {
  AnimationControls,
  motion,
  useAnimation,
  Variants,
} from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

const ColorGroup = ({
  color,
  animationControls,
  reff,
}: {
  color: Color
  reff: (node: Element | null | undefined) => void
  animationControls: AnimationControls
}) => {
  const colorGroupVariants: Variants = {
    from: { scale: 0 },
    to: { scale: 1, transition: { staggerChildren: 0.1 } },
  }

  const nameVariants: Variants = {
    from: { opacity: 0, left: -100 },
    to: { opacity: 1, left: 0 },
  }

  return (
    <div key={color.name} id={`cg-${color.name}`} className="color-group">
      <a href={`/?accent=${color.name}`}>
        <motion.h4
          variants={nameVariants}
          initial="from"
          animate={animationControls}
          className={`text-${color.name}`}
        >
          {color.name}
        </motion.h4>
      </a>
      <motion.div
        ref={reff}
        initial="from"
        animate={animationControls}
        variants={colorGroupVariants}
        className={"color-dots"}
      >
        {color.shades.map(shade => (
          <motion.div
            variants={colorGroupVariants}
            style={{ backgroundColor: `var(--${color.name}-${shade})` }}
            key={`${color.name}-${shade}`}
            className="color-dot"
          ></motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default function Colors() {
  const controls = useAnimation()
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) controls.start("to")
  }, [controls, inView])

  return (
    <section id="colors">
      <h2>Colors</h2>

      <p>
        <strong>Click on a color to set it as accent color!</strong> (Or use the{" "}
        <code>
          <strong>?accent=</strong>&lt;color&gt;
        </code>{" "}
        URL parameter)
      </p>

      <div className="color-groups">
        {colors.slice(0, 2).map(color => (
          <ColorGroup
            reff={ref}
            animationControls={controls}
            key={color.name}
            color={color}
          />
        ))}
      </div>

      <div className="color-groups">
        {colors.slice(2, 7).map(color => (
          <ColorGroup
            reff={ref}
            animationControls={controls}
            key={color.name}
            color={color}
          />
        ))}
      </div>

      <div className="color-groups">
        {colors.slice(7).map(color => (
          <ColorGroup
            reff={ref}
            animationControls={controls}
            key={color.name}
            color={color}
          />
        ))}
      </div>
    </section>
  )
}
