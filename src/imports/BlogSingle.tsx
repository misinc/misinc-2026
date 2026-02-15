import svgPaths from "./svg-krdk1tjkhf";
import imgImage from "figma:asset/d2c4dfe727b3001a88e016b4b1e70dadce2e07c5.png";
import imgImage1 from "figma:asset/75b3cf80d06fb5ec894f07f88b3289150b85189f.png";
import imgPmvChamara9MWm8CSkxFcUnsplash1 from "figma:asset/d735a679246c9d968989782a7c8dc3e2f0ca9281.png";
import imgTylerNixHPmJ42YcLyqUnsplash1 from "figma:asset/cc4654219fbf5f6968ce15e397a82a0d673ee332.png";
import imgPexels25871761 from "figma:asset/f0f50f82a4b17fb450031e070f7adea210b01684.png";
import imgAlexLvrsWu7VuMbwcmkUnsplash1 from "figma:asset/c89403d728bad1a3dc92762832a2ccb43a6ae128.png";
import imgPmvChamara1KCDtHVl064Unsplash1 from "figma:asset/259789ca4ffc3cfe789ead5a5a0518016db08aa6.png";
import imgBlogSingle from "figma:asset/8ed6481142f4588cada7b6b9a2dbaffa2a6b4855.png";
import imgBlogSingle1 from "figma:asset/53cf0a9d13b54d45ba6d8faaf8dde556b80e4b8f.png";

function Logo() {
  return (
    <div className="h-[25px] relative shrink-0 w-[83.252px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 83.2519 25">
        <g id="Logo">
          <g clipPath="url(#clip0_7_2634)" id="logo">
            <path d={svgPaths.p24da2800} fill="var(--fill-0, #151515)" id="Vector" />
          </g>
          <g id="Ã¸liv">
            <path d={svgPaths.p3c365300} fill="var(--fill-0, #151515)" />
            <path d={svgPaths.p7ef6e00} fill="var(--fill-0, #151515)" />
            <path d={svgPaths.pbe1d500} fill="var(--fill-0, #151515)" />
            <path d={svgPaths.p26a39c00} fill="var(--fill-0, #151515)" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_7_2634">
            <rect fill="white" height="25" width="37.5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Label() {
  return (
    <div className="bg-[#f8ede3] content-stretch flex flex-col items-center justify-center px-[12px] py-[6px] relative rounded-[500px] shrink-0" data-name="Label">
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#151515] text-[12px] tracking-[0.25px]">We are hiring!</p>
    </div>
  );
}

function NavbarLeft() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-h-px min-w-px relative" data-name="Navbar Left">
      <Logo />
      <Label />
    </div>
  );
}

function NavbarMenuItem() {
  return (
    <div className="content-stretch flex gap-[2px] h-[42px] items-center justify-center relative rounded-[500px] shrink-0 w-[37px]" data-name="Navbar Menu Item">
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#151515] text-[14px] tracking-[1px]">Work</p>
      <div className="absolute bg-[#151515] h-px left-0 top-[31.5px] w-[37px]" data-name="Border" />
    </div>
  );
}

function NavbarMenuItem1() {
  return (
    <div className="content-stretch flex h-[42px] items-center justify-center relative rounded-[6px] shrink-0" data-name="Navbar Menu Item">
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#151515] text-[14px] tracking-[1px]">Services</p>
    </div>
  );
}

function NavbarMenuItem2() {
  return (
    <div className="content-stretch flex h-[42px] items-center justify-center relative rounded-[6px] shrink-0" data-name="Navbar Menu Item">
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#151515] text-[14px] tracking-[1px]">About</p>
    </div>
  );
}

function NavbarMenuItem3() {
  return (
    <div className="content-stretch flex h-[42px] items-center justify-center relative rounded-[6px] shrink-0" data-name="Navbar Menu Item">
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#151515] text-[14px] tracking-[1px]">Blog</p>
    </div>
  );
}

function RiArrowDropDownLine() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="ri:arrow-drop-down-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="ri:arrow-drop-down-line">
          <path d={svgPaths.p14e33100} fill="var(--fill-0, #191919)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function NavbarMenuItem4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[6px] shrink-0" data-name="Navbar Menu Item">
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#151515] text-[14px] tracking-[1px]">Pages</p>
      <RiArrowDropDownLine />
    </div>
  );
}

function NavbarMenu() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Navbar Menu">
      <NavbarMenuItem />
      <NavbarMenuItem1 />
      <NavbarMenuItem2 />
      <NavbarMenuItem3 />
      <NavbarMenuItem4 />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[500px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(21,21,21,0.6)] border-solid inset-0 pointer-events-none rounded-[500px]" />
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#151515] text-[14px] tracking-[1px]">Let’s talk</p>
    </div>
  );
}

function NavbarRight() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Navbar Right">
      <NavbarMenu />
      <Button />
    </div>
  );
}

function Navbar() {
  return (
    <div className="content-stretch flex gap-[32px] h-[75px] items-center py-[32px] relative rounded-[500px] shrink-0 w-full" data-name="Navbar">
      <NavbarLeft />
      <NavbarRight />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col items-end pt-[32px] relative shrink-0" data-name="Header">
      <Navbar />
      <div className="bg-[#f3f3f3] h-px shrink-0 w-full" data-name="Border" />
    </div>
  );
}

function Grid() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Grid">
      <p className="css-4hzbpn font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#151515] text-[12px] tracking-[1px] uppercase w-full">Date</p>
      <div className="bg-[#f3f3f3] h-px shrink-0 w-full" data-name="Border" />
      <p className="css-4hzbpn font-['Manrope:Light',sans-serif] font-light leading-[1.4] relative shrink-0 text-[#151515] text-[18px] w-full">16th June 2023</p>
    </div>
  );
}

function Grid1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Grid">
      <p className="css-4hzbpn font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#151515] text-[12px] tracking-[1px] uppercase w-full">Category</p>
      <div className="bg-[#f3f3f3] h-px shrink-0 w-full" data-name="Border" />
      <p className="css-4hzbpn font-['Manrope:Light',sans-serif] font-light leading-[1.4] relative shrink-0 text-[#151515] text-[18px] w-full">Branding</p>
    </div>
  );
}

function Grid2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Grid">
      <p className="css-4hzbpn font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#151515] text-[12px] tracking-[1px] uppercase w-full">Reading Time</p>
      <div className="bg-[#f3f3f3] h-px shrink-0 w-full" data-name="Border" />
      <p className="css-4hzbpn font-['Manrope:Light',sans-serif] font-light leading-[1.4] relative shrink-0 text-[#151515] text-[18px] w-full">8 Min</p>
    </div>
  );
}

function Grid3() {
  return (
    <div className="bg-white content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Grid">
      <Grid />
      <Grid1 />
      <Grid2 />
    </div>
  );
}

function Grid4() {
  return (
    <div className="content-stretch flex flex-col font-['Manrope:Light',sans-serif] font-light gap-[16px] items-start relative shrink-0 text-[#151515] w-full" data-name="Grid">
      <p className="css-4hzbpn leading-[1.2] relative shrink-0 text-[80px] w-full">The Importance of a Strong Brand Positioning</p>
      <p className="css-4hzbpn leading-[1.6] relative shrink-0 text-[24px] w-full">Discover the significance of establishing a strong brand positioning to differentiate your business and captivate your target audience in this informative blog post.</p>
    </div>
  );
}

function RiArrowDownLine() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ri:arrow-down-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ri:arrow-down-line">
          <path d={svgPaths.p330185c0} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#151515] content-stretch flex flex-col items-center justify-center px-[12px] py-[6px] relative rounded-[500px] shrink-0 size-[48px]" data-name="Badge">
      <RiArrowDownLine />
    </div>
  );
}

function Grid5() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Grid">
      <Badge />
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#151515] text-[12px] tracking-[1px] uppercase">Read More</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-[1200px]" data-name="Container">
      <Grid3 />
      <Grid4 />
      <Grid5 />
    </div>
  );
}

function SectionHero() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[128px] relative shrink-0 w-full" data-name="Section Hero">
      <Container />
    </div>
  );
}

function ImageWrapper() {
  return (
    <div className="h-[900px] overflow-clip relative shrink-0 w-full" data-name="Image Wrapper">
      <div className="absolute h-[934px] left-0 top-[-34px] w-[1400px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Grid6() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[16px] shrink-0 w-full" data-name="Grid">
      <ImageWrapper />
    </div>
  );
}

function RiInstagramLine() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ri:instagram-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ri:instagram-line">
          <path d={svgPaths.p425cb80} fill="var(--fill-0, #151515)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col items-center justify-center px-[12px] py-[6px] relative rounded-[500px] shrink-0 size-[48px]" data-name="Badge">
      <RiInstagramLine />
    </div>
  );
}

function RiTwitterFill() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ri:twitter-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ri:twitter-fill">
          <path d={svgPaths.p3e457200} fill="var(--fill-0, #151515)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Badge2() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col items-center justify-center px-[12px] py-[6px] relative rounded-[500px] shrink-0 size-[48px]" data-name="Badge">
      <RiTwitterFill />
    </div>
  );
}

function RiFacebookCircleFill() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ri:facebook-circle-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ri:facebook-circle-fill">
          <path d={svgPaths.p2f5bc80} fill="var(--fill-0, #151515)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Badge3() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col items-center justify-center px-[12px] py-[6px] relative rounded-[500px] shrink-0 size-[48px]" data-name="Badge">
      <RiFacebookCircleFill />
    </div>
  );
}

function Grid7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Grid">
      <Badge1 />
      <Badge2 />
      <Badge3 />
    </div>
  );
}

function Grid8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Grid">
      <Grid7 />
    </div>
  );
}

function Grid9() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Grid">
      <p className="css-4hzbpn leading-[1.4] relative shrink-0 text-[32px] w-full">Creating a Memorable Brand Identity</p>
      <div className="leading-[1.8] relative shrink-0 text-[16px] w-full">
        <p className="css-4hzbpn mb-0">{`In today's competitive marketplace, having a strong brand positioning is more crucial than ever. It is the foundation upon which successful businesses build their identity and connect with their target audience. A strong brand positioning helps your business stand out from the competition, creates a lasting impression, and shapes how your audience perceives your brand.`}</p>
        <p className="css-4hzbpn mb-0">&nbsp;</p>
        <p className="css-4hzbpn">{`Creating a memorable brand identity starts with understanding your target audience and the unique value your brand offers. It involves crafting a brand story that resonates with your audience, effectively communicating your brand's personality, values, and purpose. Through strategic messaging, visual elements, and consistent brand voice, you can create a brand identity that captures the essence of your business and leaves a lasting impact on your customers.`}</p>
      </div>
    </div>
  );
}

function Grid10() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Grid">
      <p className="css-4hzbpn leading-[1.4] relative shrink-0 text-[32px] w-full">Setting Your Brand Apart</p>
      <div className="leading-[1.8] relative shrink-0 text-[16px] w-full">
        <p className="css-4hzbpn mb-0">In a crowded marketplace, it is essential to differentiate your brand from competitors. A strong brand positioning allows you to highlight what sets you apart and communicate the unique value you bring to your customers. It helps establish a clear and distinct identity that resonates with your target audience and fosters brand loyalty.</p>
        <p className="css-4hzbpn mb-0">&nbsp;</p>
        <p className="css-4hzbpn">To differentiate your brand, it is crucial to conduct thorough market research and understand your competition. Identify gaps in the market, analyze consumer preferences, and uncover unique selling points that make your brand stand out. By focusing on these differentiators and effectively communicating them through your brand positioning, you can position your business as the preferred choice in the minds of your target audience.</p>
      </div>
    </div>
  );
}

function Grid11() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Grid">
      <p className="css-4hzbpn leading-[1.4] relative shrink-0 text-[32px] w-full">Creating Emotional Connections</p>
      <div className="leading-[1.8] relative shrink-0 text-[16px] w-full">
        <p className="css-4hzbpn mb-0">A strong brand positioning builds trust and fosters loyalty among your customers. When your brand consistently delivers on its promises and aligns with the expectations of your audience, it creates a sense of trust and reliability. A well-defined brand positioning helps establish this trust by consistently delivering a positive and consistent brand experience across all touchpoints.</p>
        <p className="css-4hzbpn mb-0">&nbsp;</p>
        <p className="css-4hzbpn">{`By understanding your audience's needs, values, and aspirations, you can develop a brand positioning that resonates with their emotions. Emotional connections are powerful drivers of brand loyalty and advocacy. By crafting a brand positioning that evokes positive emotions, you can create long-lasting relationships with your customers, turning them into brand ambassadors who actively promote and support your brand.`}</p>
      </div>
    </div>
  );
}

function Grid12() {
  return (
    <div className="content-stretch flex flex-col font-['Manrope:Light',sans-serif] font-light gap-[48px] items-start relative shrink-0 text-[#151515] w-full" data-name="Grid">
      <Grid9 />
      <Grid10 />
      <Grid11 />
    </div>
  );
}

function ImageWrapper1() {
  return (
    <div className="overflow-clip relative rounded-[500px] shrink-0 size-[60px]" data-name="Image Wrapper">
      <div className="absolute h-[173px] left-[-33px] top-[-20px] w-[261px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function Grid13() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-[#151515]" data-name="Grid">
      <p className="css-ew64yg font-['Manrope:Light',sans-serif] font-light leading-[1.6] relative shrink-0 text-[20px]">Guy Hawkins</p>
      <p className="css-ew64yg font-['Manrope:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[12px] tracking-[1px] uppercase">Webflow Expert</p>
    </div>
  );
}

function Grid14() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Grid">
      <ImageWrapper1 />
      <Grid13 />
    </div>
  );
}

function Grid15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative" data-name="Grid">
      <p className="css-4hzbpn font-['Manrope:Light',sans-serif] font-light leading-[1.8] min-w-full relative shrink-0 text-[#151515] text-[16px] w-[min-content]">{`A strong brand positioning is essential for any business seeking to thrive in today's competitive landscape. It helps establish a distinctive brand identity, sets your brand apart from competitors, and builds trust and loyalty among your audience. By investing in a well-crafted brand positioning strategy, you can create a solid foundation for long-term success and growth.`}</p>
      <Grid14 />
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#f1f5f9] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex gap-[96px] items-start p-[64px] relative w-full">
        <p className="css-ew64yg font-['Manrope:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#151515] text-[12px] tracking-[1px] uppercase">Conclusion</p>
        <Grid15 />
      </div>
    </div>
  );
}

function Grid16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[80px] items-start justify-center min-h-px min-w-px relative" data-name="Grid">
      <Grid12 />
      <Container1 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[128px] items-start relative shrink-0 w-[1000px]" data-name="Content">
      <Grid8 />
      <Grid16 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-center relative shrink-0 w-[1400px]" data-name="Container">
      <Grid6 />
      <Content />
    </div>
  );
}

function SectionHero1() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[80px] relative shrink-0 w-full" data-name="Section Hero">
      <Container2 />
    </div>
  );
}

function Grid17() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Grid">
      <p className="css-4hzbpn font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#151515] text-[12px] tracking-[1px] uppercase w-full">Blog</p>
      <div className="bg-[#f3f3f3] h-px shrink-0 w-full" data-name="Border" />
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[500px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(21,21,21,0.6)] border-solid inset-0 pointer-events-none rounded-[500px]" />
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#151515] text-[14px] tracking-[1px]">See all</p>
    </div>
  );
}

function Grid18() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Grid">
      <p className="css-4hzbpn flex-[1_0_0] font-['Manrope:Regular',sans-serif] font-normal leading-[1.3] min-h-px min-w-px relative text-[#151515] text-[48px]">Related News</p>
      <Button1 />
    </div>
  );
}

function Grid19() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Grid">
      <Grid17 />
      <Grid18 />
    </div>
  );
}

function ImageWrapper2() {
  return (
    <div className="bg-[#f8f8f8] overflow-clip relative shrink-0 size-[376px]" data-name="Image Wrapper">
      <div className="absolute h-[376px] left-[-69px] top-0 w-[564px]" data-name="pmv-chamara-9mWm8cSkxFc-unsplash 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPmvChamara9MWm8CSkxFcUnsplash1} />
      </div>
      <div className="absolute h-[385px] left-[-45px] top-[-9px] w-[576px]" data-name="pmv-chamara-KqHNWdP4pWg-unsplash 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      </div>
    </div>
  );
}

function ButtonText() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Button Text">
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#151515] text-[14px] tracking-[0.25px]">Read More</p>
      <div className="bg-[#151515] h-px shrink-0 w-full" data-name="Border" />
    </div>
  );
}

function Grid20() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center pt-[16px] relative shrink-0 w-full" data-name="Grid">
      <p className="css-4hzbpn font-['Manrope:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#151515] text-[20px] w-[min-content]">5 Key Elements of a Strong Brand Identity</p>
      <ButtonText />
    </div>
  );
}

function Grid21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Grid">
      <ImageWrapper2 />
      <Grid20 />
    </div>
  );
}

function ImageWrapper3() {
  return (
    <div className="bg-[#f8f8f8] overflow-clip relative shrink-0 size-[376px]" data-name="Image Wrapper">
      <div className="absolute h-[469.971px] left-0 top-[-74px] w-[376px]" data-name="tyler-nix-HPmJ42ycLYQ-unsplash 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTylerNixHPmJ42YcLyqUnsplash1} />
      </div>
      <div className="absolute h-[506px] left-0 top-[-49px] w-[380px]" data-name="pexels-𝐕𝐞𝐧𝐮𝐬-𝐇𝐃-𝐌𝐚𝐤𝐞-𝐮𝐩-&-𝐏𝐞𝐫𝐟𝐮𝐦𝐞-2587176 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPexels25871761} />
      </div>
    </div>
  );
}

function ButtonText1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Button Text">
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#151515] text-[14px] tracking-[0.25px]">Read More</p>
      <div className="bg-[#151515] h-px shrink-0 w-full" data-name="Border" />
    </div>
  );
}

function Grid22() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center pt-[16px] relative shrink-0 w-full" data-name="Grid">
      <p className="css-4hzbpn font-['Manrope:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#151515] text-[20px] w-[min-content]">How to Effectively Position Your Brand in a Crowded Market</p>
      <ButtonText1 />
    </div>
  );
}

function Grid23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Grid">
      <ImageWrapper3 />
      <Grid22 />
    </div>
  );
}

function ImageWrapper4() {
  return (
    <div className="bg-[#f8f8f8] overflow-clip relative shrink-0 size-[376px]" data-name="Image Wrapper">
      <div className="absolute h-[645px] left-[-19px] top-[-135px] w-[430px]" data-name="alex-lvrs-WU7vuMbwcmk-unsplash 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAlexLvrsWu7VuMbwcmkUnsplash1} />
      </div>
      <div className="absolute h-[469.971px] left-0 top-[-74px] w-[376px]" data-name="tyler-nix-HPmJ42ycLYQ-unsplash 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTylerNixHPmJ42YcLyqUnsplash1} />
      </div>
    </div>
  );
}

function ButtonText2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Button Text">
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#151515] text-[14px] tracking-[0.25px]">Read More</p>
      <div className="bg-[#151515] h-px shrink-0 w-full" data-name="Border" />
    </div>
  );
}

function Grid24() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center pt-[16px] relative shrink-0 w-full" data-name="Grid">
      <p className="css-4hzbpn font-['Manrope:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#151515] text-[20px] w-[min-content]">The Importance of Consistency in Branding</p>
      <ButtonText2 />
    </div>
  );
}

function Grid25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Grid">
      <ImageWrapper4 />
      <Grid24 />
    </div>
  );
}

function ImageWrapper5() {
  return (
    <div className="bg-[#f8f8f8] overflow-clip relative shrink-0 size-[376px]" data-name="Image Wrapper">
      <div className="absolute h-[376px] left-[-101px] top-0 w-[564px]" data-name="pmv-chamara-1kCDtHVl064-unsplash 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPmvChamara1KCDtHVl064Unsplash1} />
      </div>
      <div className="absolute h-[593px] left-[-8px] top-[-106px] w-[395px]" data-name="alex-lvrs-WU7vuMbwcmk-unsplash 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAlexLvrsWu7VuMbwcmkUnsplash1} />
      </div>
    </div>
  );
}

function ButtonText3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Button Text">
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#151515] text-[14px] tracking-[0.25px]">Read More</p>
      <div className="bg-[#151515] h-px shrink-0 w-full" data-name="Border" />
    </div>
  );
}

function Grid26() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center pt-[16px] relative shrink-0 w-full" data-name="Grid">
      <p className="css-4hzbpn font-['Manrope:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#151515] text-[20px] w-[min-content]">{`Why Your Brand's Story is Essential for Success"`}</p>
      <ButtonText3 />
    </div>
  );
}

function Grid27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Grid">
      <ImageWrapper5 />
      <Grid26 />
    </div>
  );
}

function Grid28() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-[1600px]" data-name="Grid">
      <Grid21 />
      <Grid23 />
      <Grid25 />
      <Grid27 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center relative shrink-0 w-[1600px]" data-name="Container">
      <Grid19 />
      <Grid28 />
    </div>
  );
}

function SectionTeam() {
  return (
    <div className="content-stretch flex flex-col items-center py-[160px] relative shrink-0 w-full" data-name="Section Team">
      <Container3 />
    </div>
  );
}

function Grid29() {
  return (
    <div className="content-stretch flex flex-col font-['Manrope:Regular',sans-serif] font-normal gap-[8px] items-start relative shrink-0 text-[#151515]" data-name="Grid">
      <p className="css-4hzbpn leading-[1.2] relative shrink-0 text-[64px] w-[1064px]">{`Let's start building your brand's unique story together.`}</p>
      <p className="css-4hzbpn leading-[1.8] relative shrink-0 text-[24px] w-[600px]">Want to see what a difference a strong brand can make? Request a consultation today.</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="icon">
          <path clipRule="evenodd" d={svgPaths.p2066c200} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#151515] content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative rounded-[500px] shrink-0" data-name="Button">
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[14px] text-white tracking-[1px]">Get in touch</p>
      <Icon />
    </div>
  );
}

function Grid30() {
  return (
    <div className="bg-[#f1f6f5] content-stretch flex flex-[1_0_0] flex-col gap-[48px] items-start min-h-px min-w-px relative" data-name="Grid">
      <Grid29 />
      <Button2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#f1f6f5] content-stretch flex gap-[32px] items-start px-[64px] py-[80px] relative shrink-0 w-[1600px]" data-name="Container">
      <p className="css-4hzbpn font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative self-stretch shrink-0 text-[#151515] text-[12px] tracking-[1px] uppercase w-[316px]">Contact</p>
      <Grid30 />
    </div>
  );
}

function SectionCta() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Section CTA">
      <Container4 />
    </div>
  );
}

function Logo1() {
  return (
    <div className="h-[25px] relative shrink-0 w-[83.252px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 83.2519 25">
        <g id="Logo">
          <g clipPath="url(#clip0_7_2634)" id="logo">
            <path d={svgPaths.p24da2800} fill="var(--fill-0, #151515)" id="Vector" />
          </g>
          <g id="Ã¸liv">
            <path d={svgPaths.p3c365300} fill="var(--fill-0, #151515)" />
            <path d={svgPaths.p7ef6e00} fill="var(--fill-0, #151515)" />
            <path d={svgPaths.pbe1d500} fill="var(--fill-0, #151515)" />
            <path d={svgPaths.p26a39c00} fill="var(--fill-0, #151515)" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_7_2634">
            <rect fill="white" height="25" width="37.5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function RiInstagramLine1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="ri:instagram-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="ri:instagram-line">
          <path d={svgPaths.p3ebf8580} fill="var(--fill-0, #151515)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Badge4() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col items-center justify-center px-[12px] py-[6px] relative rounded-[500px] shrink-0 size-[36px]" data-name="Badge">
      <RiInstagramLine1 />
    </div>
  );
}

function RiTwitterFill1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="ri:twitter-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="ri:twitter-fill">
          <path d={svgPaths.p14f75280} fill="var(--fill-0, #151515)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Badge5() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col items-center justify-center px-[12px] py-[6px] relative rounded-[500px] shrink-0 size-[36px]" data-name="Badge">
      <RiTwitterFill1 />
    </div>
  );
}

function RiFacebookCircleFill1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="ri:facebook-circle-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="ri:facebook-circle-fill">
          <path d={svgPaths.p34239200} fill="var(--fill-0, #151515)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Badge6() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col items-center justify-center px-[12px] py-[6px] relative rounded-[500px] shrink-0 size-[36px]" data-name="Badge">
      <RiFacebookCircleFill1 />
    </div>
  );
}

function Grid31() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Grid">
      <Badge4 />
      <Badge5 />
      <Badge6 />
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[48px] items-start min-h-px min-w-px relative self-stretch" data-name="Column">
      <Logo1 />
      <Grid31 />
    </div>
  );
}

function Grid32() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Grid">
      <p className="css-4hzbpn font-['Manrope:Light',sans-serif] font-light leading-[1.4] relative shrink-0 text-[#151515] text-[18px] w-[308.667px]">Pages</p>
      <div className="bg-[#f3f3f3] h-px shrink-0 w-full" data-name="Border" />
    </div>
  );
}

function NavItem() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[14px] items-start relative shrink-0" data-name="Nav Item">
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#151515] text-[14px] tracking-[1px]">Home</p>
      <div className="bg-[#151515] flex-[1_0_0] min-h-px min-w-px w-full" data-name="Border" />
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Nav">
      <NavItem />
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#151515] text-[14px] tracking-[1px]">Services</p>
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#151515] text-[14px] tracking-[1px]">About</p>
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#151515] text-[14px] tracking-[1px]">Jobs</p>
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#151515] text-[14px] tracking-[1px]">Contact</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#151515] content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[500px] shrink-0" data-name="Button">
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[14px] text-white tracking-[1px]">More Templates</p>
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative" data-name="Column">
      <Grid32 />
      <Nav />
      <Button3 />
    </div>
  );
}

function Grid33() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Grid">
      <p className="css-4hzbpn font-['Manrope:Light',sans-serif] font-light leading-[1.4] relative shrink-0 text-[#151515] text-[18px] w-[308.667px]">CMS</p>
      <div className="bg-[#f3f3f3] h-px shrink-0 w-full" data-name="Border" />
    </div>
  );
}

function Nav1() {
  return (
    <div className="content-stretch flex flex-col font-['Manrope:Medium',sans-serif] font-medium gap-[24px] items-start leading-[1.4] relative shrink-0 text-[#151515] text-[14px] tracking-[1px] w-full" data-name="Nav">
      <p className="css-ew64yg relative shrink-0">Work</p>
      <p className="css-ew64yg relative shrink-0">Work Single</p>
      <p className="css-ew64yg relative shrink-0">Blog</p>
      <p className="css-ew64yg relative shrink-0">Blog Post</p>
      <p className="css-ew64yg relative shrink-0">Shop</p>
      <p className="css-ew64yg relative shrink-0">Shop Single</p>
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative" data-name="Column">
      <Grid33 />
      <Nav1 />
    </div>
  );
}

function Grid34() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Grid">
      <p className="css-4hzbpn font-['Manrope:Light',sans-serif] font-light leading-[1.4] relative shrink-0 text-[#151515] text-[18px] w-[308.667px]">Utility Pages</p>
      <div className="bg-[#f3f3f3] h-px shrink-0 w-full" data-name="Border" />
    </div>
  );
}

function Nav2() {
  return (
    <div className="content-stretch flex flex-col font-['Manrope:Medium',sans-serif] font-medium gap-[24px] items-start leading-[1.4] relative shrink-0 text-[#151515] text-[14px] tracking-[1px] w-full" data-name="Nav">
      <p className="css-ew64yg relative shrink-0">404 Error Page</p>
      <p className="css-ew64yg relative shrink-0">Password Protected</p>
      <p className="css-ew64yg relative shrink-0">Styleguide</p>
      <p className="css-ew64yg relative shrink-0">Licensing</p>
      <p className="css-ew64yg relative shrink-0">Changelog</p>
    </div>
  );
}

function Column3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative" data-name="Column">
      <Grid34 />
      <Nav2 />
    </div>
  );
}

function Grid35() {
  return (
    <div className="content-stretch flex gap-[32px] items-start pb-[64px] pt-[160px] relative shrink-0 w-full" data-name="Grid">
      <Column />
      <Column1 />
      <Column2 />
      <Column3 />
    </div>
  );
}

function Subnav() {
  return (
    <div className="content-stretch flex gap-[32px] items-start leading-[1.8] relative shrink-0" data-name="Subnav">
      <p className="css-ew64yg relative shrink-0">Privacy</p>
      <p className="css-ew64yg relative shrink-0">Imprint</p>
    </div>
  );
}

function Grid36() {
  return (
    <div className="content-stretch flex font-['Manrope:Light',sans-serif] font-light items-start justify-between relative shrink-0 text-[#777] text-[14px] w-full" data-name="Grid">
      <p className="css-ew64yg leading-[0] relative shrink-0 text-[0px]">
        <span className="leading-[1.8]">{`© 2022 Made by `}</span>
        <span className="[text-decoration-skip-ink:none] decoration-solid font-['Manrope:Regular',sans-serif] font-normal leading-[1.8] text-[#151515] underline">Pawel Gola</span>
        <span className="leading-[1.8]">{`. Powered by `}</span>
        <span className="[text-decoration-skip-ink:none] decoration-solid font-['Manrope:Regular',sans-serif] font-normal leading-[1.8] text-[#151515] underline">Webflow</span>
        <span className="leading-[1.8]">.</span>
      </p>
      <Subnav />
    </div>
  );
}

function Grid37() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Grid">
      <div className="bg-[#f3f3f3] h-px shrink-0 w-full" data-name="Border" />
      <Grid36 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[1600px]" data-name="Container">
      <Grid35 />
      <Grid37 />
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[48px] relative shrink-0 w-full" data-name="Footer">
      <Container5 />
    </div>
  );
}

function PageWrapper() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative shadow-[0px_0px_50px_0px_rgba(0,0,0,0.1)] shrink-0 w-full z-[1]" data-name="Page Wrapper">
      <Header />
      <SectionHero />
      <SectionHero1 />
      <SectionTeam />
      <SectionCta />
      <Footer />
    </div>
  );
}

export default function BlogSingle() {
  return (
    <div className="content-stretch flex flex-col isolate items-start p-[64px] relative size-full" data-name="Blog Single">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-white inset-0" />
        <img alt="" className="absolute max-w-none object-cover opacity-90 size-full" src={imgBlogSingle} />
        <div className="absolute bg-size-[150px_150px] bg-top-left inset-0 opacity-15" style={{ backgroundImage: `url('${imgBlogSingle1}')` }} />
      </div>
      <PageWrapper />
    </div>
  );
}