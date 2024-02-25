import NavLinks from './NavLinks';
import { AnimatePresence, motion } from 'framer-motion';
import SocialLinks from '../../../shared/SocialLinks';

type Props = {
  open: boolean;
  closeHandler: () => void;
}

export default function MobilePanel({ open, closeHandler }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ x: 650 }}
          transition={{ duration: 0.6 }}
          animate={{ x: 0 }}
          exit={{ x: 650 }}
          className="fixed inset-y-0 top-16 right-0 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div onClick={closeHandler} className="fixed inset-0 top-16 z-[5]" />
          <div className="mt-6 flow-root relative z-10">
            <div className="-my-6">
              <div className="space-y-2 py-6">
                <NavLinks mobileMenu={true} />
              </div>
              <div>
                <SocialLinks size={28} />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}