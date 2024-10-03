import { Button, Dialog, DialogPanel } from "@headlessui/react";
import { useState } from "react";
import ContactUsForm from "../ContactUsForm";

interface ModalProps {
  buttonText: string;
  className?: string;
}

export default function ContactUsModal(props: ModalProps) {
  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <Button
        onClick={open}
        className={`text-xs sm:text-base font-semibold size-fit px-2 py-1 sm:px-6 sm:py-3 border border-azul_sereno rounded hover:scale-105 ${props.className}`}
      >
        {props.buttonText}
      </Button>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-40 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 bg-black/80" />
        <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">
              <ContactUsForm onClose={close} />
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
