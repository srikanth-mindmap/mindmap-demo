import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";


const components: JSXMapSerializer = {

  heading1: ({ children }) => (<Heading  as="h1" size="xl" className=" text-slate-950 md:mb-8 mb-4 mt-12 first:mt-0 last:mb-0">{children}</Heading>),
  paragraph: ({ children }) => (<p className=" text-slate-950 text-2xl font-normal leading-10 font-body  mb-4 md:mb-8 max-w-lg text-center" >{children}</p>),
}
/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <>


{slice.variation==='bgImage' && (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className=" grid grid-cols-1 place-items-center ">
        <PrismicRichText field={slice.primary.heading} components={components} />
        <PrismicRichText field={slice.primary.body} components={components} />
        {/* <Button field={slice.primary.button_link} className="mb-8 md:mb-10 ">{slice.primary.butten_text}</Button> */}
        <div className="absolute inset-0 overflow-hidden z-[-100] h-300 w-full object-cover  object-center">
        <PrismicNextImage field={slice.primary.image} className=" opacity-80 drop-shadow-xl w-full min-h-screen " />
     </div>
      </div>

    </Bounded>
    )}


{slice.variation==='default' && (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid grid-cols-1 place-items-center">
        <PrismicRichText field={slice.primary.heading} components={components} />
        <PrismicRichText field={slice.primary.body} components={components} />
        <Button field={slice.primary.button_link} className="mb-8 md:mb-10 ">{slice.primary.butten_text}</Button>
        <PrismicNextImage field={slice.primary.image} className=" drop-shadow-xl max-w-4xl w-full" />
      </div>

    </Bounded>
    )}

    {slice.variation==="horizontal" && (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid grid-cols-2 place-items-center">
        <div className=" grid grid-rows-[1fr,auto,auto]  h-fit">
        <PrismicRichText field={slice.primary.heading} components={components} />
        <PrismicRichText field={slice.primary.body} components={components} />
        <Button field={slice.primary.button_link} className="mb-8 md:mb-10 ">{slice.primary.butten_text}</Button>
        </div>
        <PrismicNextImage field={slice.primary.image} className=" drop-shadow-xl max-w-4xl w-full" />
      </div>

    </Bounded>
    )}
     {slice.variation==="imageLeft" && (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid grid-cols-2 place-items-center order-2">
        <div className=" grid grid-rows-[1fr,auto,auto]  h-fit">
        <PrismicRichText field={slice.primary.heading} components={components} />
        <PrismicRichText field={slice.primary.body} components={components} />
       
        </div>
        <PrismicNextImage field={slice.primary.image} className=" drop-shadow-xl max-w-4xl w-full" />
      </div>

    </Bounded>
    )}
    </>
  );
};

export default Hero;
