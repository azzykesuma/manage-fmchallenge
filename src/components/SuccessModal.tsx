import { motion, useAnimate } from "framer-motion";
import Button from "./ui/Button";
import mailIlu from "../assets/images/email.svg"
const SuccessModal = ({close} : {close : () => void}) => {
    const [scope, animate] = useAnimate()
    const handleClose = () => {
        animate(scope.current, {
            opacity: 0,
            y: 50,
            transition: { duration: 0.3 }
        }).then(() => close())
    }
  return (
    <motion.dialog
      ref={scope}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="bg-white p-4 rounded-lg fixed top-[12rem] transform -translate-y-1/2 left-20 aspect-square w-60 z-50 flex flex-col justify-between items-center gap-4 shadow-lg"
    >
      <h3 className="text-dark-blue font-bold text-xl text-center my-auto">Success!</h3>
      <img src={mailIlu} alt="image-illustration-for-email"  className="w-32 my-6" />
      <Button className="bg-bright-red" onClick={handleClose}>Close</Button>
    </motion.dialog>
  );
};

export default SuccessModal;
