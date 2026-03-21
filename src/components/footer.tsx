import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiInstagramLine } from "react-icons/ri";
import { FaArrowUpLong } from "react-icons/fa6";

const Footer = () => {
  const startYear = "2010";
  const company = "STEM";
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="mt-6 w-full overflow-x-hidden bg-[#040607] text-gray-300"
      style={{
        backgroundImage: "url('/oficial-background.jpeg')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start lg:grid-cols-3">
          <div className="space-y-4">
            <div className="text-sm font-semibold text-gray-200">
              Nossos Serviços
            </div>

            <div className="flex flex-col space-y-2 text-sm text-gray-400">
              <Link
                href="/apostilas"
                className="transition-colors hover:text-white"
              >
                Apostilas
              </Link>

              <Link
                href="/blog"
                className="transition-colors hover:text-white"
              >
                Postagens
              </Link>

              <Link
                href="/#contato"
                className="transition-colors hover:text-white"
              >
                Ajuda
              </Link>
            </div>

            <a
              href="#topo"
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#151515] px-4 py-2 text-sm font-semibold text-gray-200 transition-colors hover:bg-white hover:text-black"
            >
              Voltar para cima <FaArrowUpLong />
            </a>
          </div>

          <div className="flex md:col-span-2 md:justify-center lg:col-span-1">
            <div className="w-45.5 sm:w-50">
              <img
                src="/images/logo-stem.png"
                alt="STEM IME"
                className="h-auto w-full select-none object-contain"
                draggable={false}
              />
            </div>
          </div>

          <div className="space-y-3 md:justify-self-start lg:justify-self-end">
            <div className="text-sm font-semibold text-gray-200">
              Fale Conosco
            </div>

            <div className="space-y-2 text-sm text-gray-400">
              <a
                href="https://www.instagram.com/stem.ime/"
                target="_blank"
                rel="noreferrer"
                className="flex w-fit items-center gap-2 break-all transition-colors hover:text-white"
                aria-label="Instagram do STEM IME"
              >
                <RiInstagramLine size={16} />
                <span>@stem.ime</span>
              </a>

              <a
                href="https://www.linkedin.com/company/stem-ime/"
                target="_blank"
                rel="noreferrer"
                className="flex w-fit items-center gap-2 break-all transition-colors hover:text-white"
                aria-label="LinkedIn do STEM IME"
              >
                <FaLinkedin size={16} />
                <span>STEM IME</span>
              </a>

              <a
                href="mailto:stemime7@gmail.com"
                className="flex w-fit items-center gap-2 break-all transition-colors hover:text-white"
                aria-label="E-mail do STEM IME"
              >
                <MdEmail size={16} />
                <span>stemime7@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs font-semibold text-gray-400">
          © {startYear}–{currentYear} {company}
        </div>
      </div>
    </footer>
  );
};

export { Footer };