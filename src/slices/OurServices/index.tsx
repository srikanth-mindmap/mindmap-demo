import { Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `OurServices`.
 */


const components: JSXMapSerializer = {

  heading2: ({ children }) => (<Heading as="h2" size="md" className=" text-center mb-10">{children}</Heading>),

  heading3: ({ children }) => (<Heading as="h3" size="sm" className=" mb-2 font-medium sm:text-left text-center">{children}</Heading>),
  heading5: ({ children }) => (<Heading as="h5" size="sm" className="text-base  text-slate-600 mb-8  font-light text-center">{children}</Heading>),
  paragraph: ({ children }) => (<p className="text-base font-medium font-body text-slate-600 sm:text-left text-center">{children}</p>),

}

export type OurServicesProps = SliceComponentProps<Content.OurServicesSlice>;

/**
 * Component for "OurServices" Slices.
 */
const OurServices = ({ slice }: OurServicesProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} components={components} />
      <PrismicRichText field={slice.primary.sub_heading}  components={components} />

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 max-w-5xl gap-x-8 gap-y-12 mx-auto sm:place-content-start place-content-center">
      {slice.items.map((item, index) => (
        <div key={index} className="max-w-xs grid sm:place-items-start place-items-center">
          
          <PrismicNextImage field={item.image}  className=" drop-shadow-xl max-w-4xl w-full"/>
          <PrismicRichText field={item.heading} components={components} />
          <PrismicRichText components={components} field={item.description} />
        </div>


      ))


      }
      </div>
    </Bounded>
  );
};

export default OurServices;
