import {
  PopoverGroup,
  Popover,
  PopoverButton,
  Transition,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  PhoneIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import { PlayCircleIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const products = [
  {
    name: "Renda variável",
    description:
      "Entre no universo da bolsa de valores com auxílio de especialistas",
    href: "/renda-variavel",
    icon: ChartPieIcon,
  },
  {
    name: "Renda Fixa",
    description:
      "Opção de investimento segura e para todos horizontes de tempo",
    href: "/renda-fixa",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Investimentos Internacionais",
    description:
      "Se exponha ao mercado internacional com toda segunraça que nossa equipe pode proporcionar",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Proteção e suceaaao patrimonial",
    description:
      "blinde seus bens contra qualquer adversidade que possa aparecer",
    href: "#",
    icon: SquaresPlusIcon,
  },
];

const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

interface CustomPopoverGroupProps {
  buttonText: string;
}

export const CustomPopoverGroup = (props: CustomPopoverGroupProps) => {
  return (
    <Popover className="relative">
      <PopoverButton className="flex items-center gap-x-1 font-semibold text-preto_pleno hover:scale-105 hover:text-azul_sereno focus:outline-none">
        {props.buttonText}
        <ChevronDownIcon
          className="h-5 w-5 flex-none text-gray-400"
          aria-hidden="true"
        />
      </PopoverButton>

      <Transition
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
          <div className="p-4">
            {products.map((item) => (
              <div
                key={item.name}
                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
              >
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <item.icon
                    className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex-auto">
                  <a
                    href={item.href}
                    className="block font-semibold text-gray-900"
                  >
                    {item.name}
                    <span className="absolute inset-0" />
                  </a>
                  <p className="mt-1 text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
            {callsToAction.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
              >
                <item.icon
                  className="h-5 w-5 flex-none text-gray-400"
                  aria-hidden="true"
                />
                {item.name}
              </a>
            ))}
          </div>
        </PopoverPanel>
      </Transition>
    </Popover>
  );
};
