import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Bounded from "./Bounded";

export default async function Footer() {
    const client = createClient();
    const settings = await client.getSingle("settings");
    return <Bounded as="footer" >
<div className=" flex gap-4 items-center justify-between sm:flex-row flex-col">
<Link href="/"> <PrismicNextImage field={settings.data.logo} /></Link>
        <p>©{new Date().getFullYear()} {settings.data.site_title}</p>
        <ul className=" flex">
          {settings.data.navigation.map(({ link, label }) => (
            <li key={label} >
              <PrismicNextLink field={link}  className=" p-3">{label}</PrismicNextLink>
            </li>
          ))}
        </ul>
        </div>
    </Bounded>;
}