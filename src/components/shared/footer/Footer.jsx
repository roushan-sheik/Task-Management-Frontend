import { Typography } from "@material-tailwind/react";
import { SITEMAP } from "../../../constants/footer";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <div className=" bg-blue-gray-100">
      <footer className="relative w-[90%] mx-auto  mt-32">
        <div className="mx-auto w-full  max-w-7xl px-8">
          <div className="">
            <h2 className="font-semibold">Stay With Us</h2>
          </div>
          <div className="mx-auto grid w-full grid-cols-1 gap-8 lg:py-20 py-10 md:grid-cols-2 lg:grid-cols-4">
            {SITEMAP.map(({ title, links }, key) => (
              <div key={key} className="w-full">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-4 font-bold text-center lg:text-start uppercase opacity-50"
                >
                  {title}
                </Typography>
                <ul className="space-y-1 text-center lg:text-start">
                  {links.map((link, key) => (
                    <Typography
                      key={key}
                      as="li"
                      color="blue-gray"
                      className="font-normal"
                    >
                      <a
                        href="#"
                        className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                      >
                        {link}
                      </a>
                    </Typography>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 ">
            <Typography
              variant="small"
              className="mb-4 text-center font-normal  text-blue-gray-900 md:mb-0"
            >
              &copy; {currentYear}{" "}
              <a
                className="text-center"
                href="https://roushan-sheik.netlify.app"
              >
                Roushan Sheik
              </a>
              . All Rights Reserved.
            </Typography>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
