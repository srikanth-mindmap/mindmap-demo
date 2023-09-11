import { Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `HeroFirst`.
 */

const components: JSXMapSerializer = {

  heading1: ({ children }) => (<Heading as="h1" size="xl" className="text-3xl  tracking-tight text-white sm:text-4xl">{children}</Heading>),
  paragraph: ({ children }) => (<p className="text-2xl font-normal leading-10 font-body text-slate-600 mb-4 md:mb-8 max-w-md">{children}</p>),
}
export type HeroFirstProps = SliceComponentProps<Content.HeroFirstSlice>;

/**
 * Component for "HeroFirst" Slices.
 */
const HeroFirst = ({ slice }: HeroFirstProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >


      <div className="relative  bg-slate-700 px-6 py-32 sm:px-12 sm:py-40 lg:px-16 ">
        <div className=" absolute inset-0 overflow-hidden">

          <PrismicNextImage field={slice.primary.bg_image} className="h-full w-full object-cover  object-center" />
        </div>
        <div className="absolute inset-0 opacity-50" >
          <div className="relative mx-auto flex max-w-3xl  flex-col  items-center justify-center">


            <PrismicRichText field={slice.primary.heading} components={components} />

            <PrismicRichText field={slice.primary.description} components={components} />

          </div>
          <div>

          </div>


        </div>
      </div>



    </Bounded>
  );
};

export default HeroFirst;
