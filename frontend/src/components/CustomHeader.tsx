"use client";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  PopoverGroup,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
  UsersIcon,
} from "@heroicons/react/20/solid";
import Logo from "./UI/Logo";
import { CustomPopoverGroup, HeaderNavNodes } from "./UI/PopoverGroup";
import { OpenAccountButton } from "./OpenAccountButton";
import ContactUsModal from "./UI/ContactUsModal";

const venezaNavNodes: HeaderNavNodes[] = [
  {
    name: "Conheça o nosso time",
    href: "/nosso-time",
    Icon: UsersIcon,
  },
];

const forYouNavNodes: HeaderNavNodes[] = [
  {
    name: "Renda variável",
    description:
      "Entre no universo da bolsa de valores com auxílio de especialistas",
    href: "/renda-variavel",
    Icon: ChartPieIcon,
  },
  {
    name: "Renda Fixa",
    description:
      "Opção de investimento segura e para todos horizontes de tempo",
    href: "/renda-fixa",
    Icon: CursorArrowRaysIcon,
  },
  {
    name: "Investimentos Internacionais",
    description:
      "Se exponha ao mercado internacional com toda segunraça que nossa equipe pode proporcionar",
    href: "/internacional",
    Icon: FingerPrintIcon,
  },
  // {
  //   name: "Proteção e suceaaao patrimonial",
  //   description:
  //     "blinde seus bens contra qualquer adversidade que possa aparecer",
  //   href: "#",
  //   Icon: SquaresPlusIcon,
  // },
];

const products: HeaderNavNodes[] = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    Icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    Icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    Icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    Icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    Icon: ArrowPathIcon,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const CustomHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white fixed top-0 w-full z-30">
      <nav
        className="mx-auto flex items-center gap-4 p-3 sm:p-6"
        aria-label="Global"
      >
        <div className="flex flex-1 lg:flex-none">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Logo className="h-6 sm:h-12" color="colored" />
          </a>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-4 xl:gap-12 lg:grow md:pl-16">
          <CustomPopoverGroup
            buttonText="Para você"
            navNodes={forYouNavNodes}
          />
          <a
            href="/para-sua-empresa"
            className="font-semibold text-preto_pleno hover:scale-105 hover:text-azul_sereno"
          >
            Para sua empresa
          </a>
          <CustomPopoverGroup
            buttonText="Conheça a Veneza"
            navNodes={venezaNavNodes}
          />
        </PopoverGroup>
        <ContactUsModal buttonText="Fale conosco" className="hidden xl:flex" />
        <OpenAccountButton hasIcon />
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-40 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Logo className="w-32 h-8" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Para você
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {forYouNavNodes.map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Para sua Empresa
                </a>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Conheça a Veneza
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {venezaNavNodes.map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
              </div>
              <div className="py-6">
                <ContactUsModal buttonText="Fale conosco" />
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};
