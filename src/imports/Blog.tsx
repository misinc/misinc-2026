import svgPaths from "./svg-ze7p286ykk";
import imgImage from "figma:asset/d2c4dfe727b3001a88e016b4b1e70dadce2e07c5.png";
import imgImage1 from "figma:asset/f0f50f82a4b17fb450031e070f7adea210b01684.png";
import imgImage2 from "figma:asset/cc4654219fbf5f6968ce15e397a82a0d673ee332.png";
import imgImage3 from "figma:asset/c89403d728bad1a3dc92762832a2ccb43a6ae128.png";
import imgImage4 from "figma:asset/50c07faedd8ef023a35728dcb0118daf41c33b2f.png";
import imgImage5 from "figma:asset/a9d9d9338feaa46dd485b418ee97dba08c745eb8.png";
import imgImage6 from "figma:asset/90e309693d5c894d4d84c486a447ed2c53686765.png";
import imgBlog from "figma:asset/8ed6481142f4588cada7b6b9a2dbaffa2a6b4855.png";
import imgBlog1 from "figma:asset/53cf0a9d13b54d45ba6d8faaf8dde556b80e4b8f.png";

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

function ImageWrapper() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] h-[700px] min-h-px min-w-px overflow-clip relative" data-name="Image Wrapper">
      <div className="absolute h-[789px] left-[-108px] top-[-82px] w-[1183px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Grid() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-[#151515] w-full" data-name="Grid">
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[12px] tracking-[1px] uppercase">Branding</p>
      <p className="css-4hzbpn font-['Manrope:Light',sans-serif] font-light leading-[1.3] min-w-full relative shrink-0 text-[48px] w-[min-content]">The Importance of a Strong Brand Positioning</p>
      <p className="css-4hzbpn font-['Manrope:Light',sans-serif] font-light leading-[1.8] relative shrink-0 text-[18px] w-[500px]">Discover the significance of establishing a strong brand positioning to differentiate your business and captivate your target audience in this informative blog post.</p>
    </div>
  );
}

function Grid1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full z-[2]" data-name="Grid">
      <Grid />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="icon">
          <path clipRule="evenodd" d={svgPaths.p2201e9e0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#151515] content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[12px] relative rounded-[500px] shrink-0 z-[1]" data-name="Button">
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[14px] text-white tracking-[1px]">Read more</p>
      <Icon />
    </div>
  );
}

function Grid2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Grid">
      <div className="content-stretch flex flex-col gap-[48px] isolate items-start p-[64px] relative size-full">
        <Grid1 />
        <Button1 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <ImageWrapper />
      <Grid2 />
    </div>
  );
}

function Grid3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Grid">
      <p className="css-4hzbpn font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#151515] text-[12px] tracking-[1px] uppercase w-full">Latest News</p>
      <div className="bg-[#f3f3f3] h-px shrink-0 w-full" data-name="Border" />
    </div>
  );
}

function Grid4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1400px]" data-name="Grid">
      <Grid3 />
    </div>
  );
}

function ImageWrapper1() {
  return (
    <div className="bg-[#f8f8f8] h-[445px] overflow-clip relative shrink-0 w-full" data-name="Image Wrapper">
      <div className="absolute h-[594.333px] left-0 top-[-49px] w-[446px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[12px] py-[6px] relative rounded-[500px] shrink-0" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[rgba(21,21,21,0.6)] border-solid inset-0 pointer-events-none rounded-[500px]" />
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#151515] text-[12px] tracking-[0.25px]">Branding</p>
    </div>
  );
}

function Grid5() {
  return (
    <div className="content-stretch flex gap-[32px] items-start pt-[16px] relative shrink-0 w-full" data-name="Grid">
      <p className="css-4hzbpn flex-[1_0_0] font-['Manrope:Light',sans-serif] font-light leading-[1.6] min-h-px min-w-px relative text-[#151515] text-[20px]">Creating a Consistent Brand Identity Across All Touchpoints</p>
      <Label1 />
    </div>
  );
}

function Grid6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Grid">
      <ImageWrapper1 />
      <Grid5 />
    </div>
  );
}

function ImageWrapper2() {
  return (
    <div className="bg-[#f8f8f8] overflow-clip relative shrink-0 size-[445px]" data-name="Image Wrapper">
      <div className="absolute h-[556px] left-[-0.33px] top-[-74px] w-[445px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[12px] py-[6px] relative rounded-[500px] shrink-0" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[rgba(21,21,21,0.6)] border-solid inset-0 pointer-events-none rounded-[500px]" />
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#151515] text-[12px] tracking-[0.25px]">Branding</p>
    </div>
  );
}

function Grid7() {
  return (
    <div className="content-stretch flex gap-[32px] items-start pt-[16px] relative shrink-0 w-full" data-name="Grid">
      <p className="css-4hzbpn flex-[1_0_0] font-['Manrope:Light',sans-serif] font-light leading-[1.6] min-h-px min-w-px relative text-[#151515] text-[20px]">The Role of Market Research in Branding Strategy</p>
      <Label2 />
    </div>
  );
}

function Grid8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Grid">
      <ImageWrapper2 />
      <Grid7 />
    </div>
  );
}

function ImageWrapper3() {
  return (
    <div className="bg-[#f8f8f8] overflow-clip relative shrink-0 size-[445px]" data-name="Image Wrapper">
      <div className="absolute h-[697px] left-[-18.67px] top-[-135px] w-[464px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[12px] py-[6px] relative rounded-[500px] shrink-0" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[rgba(21,21,21,0.6)] border-solid inset-0 pointer-events-none rounded-[500px]" />
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#151515] text-[12px] tracking-[0.25px]">Branding</p>
    </div>
  );
}

function Grid9() {
  return (
    <div className="content-stretch flex gap-[32px] items-start pt-[16px] relative shrink-0 w-full" data-name="Grid">
      <p className="css-4hzbpn flex-[1_0_0] font-['Manrope:Light',sans-serif] font-light leading-[1.6] min-h-px min-w-px relative text-[#151515] text-[20px]">The Impact of Social Media on Branding</p>
      <Label3 />
    </div>
  );
}

function Grid10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Grid">
      <ImageWrapper3 />
      <Grid9 />
    </div>
  );
}

function Grid11() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Grid">
      <Grid6 />
      <Grid8 />
      <Grid10 />
    </div>
  );
}

function ImageWrapper4() {
  return (
    <div className="bg-[#f8f8f8] h-[445px] overflow-clip relative shrink-0 w-full" data-name="Image Wrapper">
      <div className="absolute h-[448px] left-[-89px] top-[-3px] w-[671px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[12px] py-[6px] relative rounded-[500px] shrink-0" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[rgba(21,21,21,0.6)] border-solid inset-0 pointer-events-none rounded-[500px]" />
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#151515] text-[12px] tracking-[0.25px]">Branding</p>
    </div>
  );
}

function Grid12() {
  return (
    <div className="content-stretch flex gap-[32px] items-start pt-[16px] relative shrink-0 w-full" data-name="Grid">
      <p className="css-4hzbpn flex-[1_0_0] font-['Manrope:Light',sans-serif] font-light leading-[1.6] min-h-px min-w-px relative text-[#151515] text-[20px]">Why Your Brand Needs a Set of Guidelines</p>
      <Label4 />
    </div>
  );
}

function Grid13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Grid">
      <ImageWrapper4 />
      <Grid12 />
    </div>
  );
}

function ImageWrapper5() {
  return (
    <div className="bg-[#f8f8f8] overflow-clip relative shrink-0 size-[445px]" data-name="Image Wrapper">
      <div className="absolute h-[690px] left-[-0.33px] top-[-92px] w-[461px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
      </div>
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[12px] py-[6px] relative rounded-[500px] shrink-0" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[rgba(21,21,21,0.6)] border-solid inset-0 pointer-events-none rounded-[500px]" />
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#151515] text-[12px] tracking-[0.25px]">Branding</p>
    </div>
  );
}

function Grid14() {
  return (
    <div className="content-stretch flex gap-[32px] items-start pt-[16px] relative shrink-0 w-full" data-name="Grid">
      <p className="css-4hzbpn flex-[1_0_0] font-['Manrope:Light',sans-serif] font-light leading-[1.6] min-h-px min-w-px relative text-[#151515] text-[20px]">The Importance of Keeping Your Brand Relevant</p>
      <Label5 />
    </div>
  );
}

function Grid15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Grid">
      <ImageWrapper5 />
      <Grid14 />
    </div>
  );
}

function ImageWrapper6() {
  return (
    <div className="bg-[#f8f8f8] overflow-clip relative shrink-0 size-[445px]" data-name="Image Wrapper">
      <div className="absolute h-[668.184px] left-[0.33px] top-[-208px] w-[446px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
      </div>
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[12px] py-[6px] relative rounded-[500px] shrink-0" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[rgba(21,21,21,0.6)] border-solid inset-0 pointer-events-none rounded-[500px]" />
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#151515] text-[12px] tracking-[0.25px]">Branding</p>
    </div>
  );
}

function Grid16() {
  return (
    <div className="content-stretch flex gap-[32px] items-start pt-[16px] relative shrink-0 w-full" data-name="Grid">
      <p className="css-4hzbpn flex-[1_0_0] font-['Manrope:Light',sans-serif] font-light leading-[1.6] min-h-px min-w-px relative text-[#151515] text-[20px]">The Role of SEO in Building a Strong Online Brand Presence</p>
      <Label6 />
    </div>
  );
}

function Grid17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Grid">
      <ImageWrapper6 />
      <Grid16 />
    </div>
  );
}

function Grid18() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Grid">
      <Grid13 />
      <Grid15 />
      <Grid17 />
    </div>
  );
}

function Grid19() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0" data-name="Grid">
      <Grid4 />
      <Grid11 />
      <Grid18 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[96px] items-start relative shrink-0 w-[1400px]" data-name="Container">
      <Container />
      <Grid19 />
    </div>
  );
}

function SectionHero() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[160px] pt-[96px] relative shrink-0 w-full" data-name="Section Hero">
      <Container1 />
    </div>
  );
}

function Grid20() {
  return (
    <div className="content-stretch flex flex-col font-['Manrope:Regular',sans-serif] font-normal gap-[8px] items-start relative shrink-0 text-[#151515]" data-name="Grid">
      <p className="css-4hzbpn leading-[1.2] relative shrink-0 text-[64px] w-[1064px]">{`Let's start building your brand's unique story together.`}</p>
      <p className="css-4hzbpn leading-[1.8] relative shrink-0 text-[24px] w-[600px]">Want to see what a difference a strong brand can make? Request a consultation today.</p>
    </div>
  );
}

function Icon1() {
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
      <Icon1 />
    </div>
  );
}

function Grid21() {
  return (
    <div className="bg-[#f1f6f5] content-stretch flex flex-[1_0_0] flex-col gap-[48px] items-start min-h-px min-w-px relative" data-name="Grid">
      <Grid20 />
      <Button2 />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#f1f6f5] content-stretch flex gap-[32px] items-start px-[64px] py-[80px] relative shrink-0 w-[1600px]" data-name="Container">
      <p className="css-4hzbpn font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative self-stretch shrink-0 text-[#151515] text-[12px] tracking-[1px] uppercase w-[316px]">Contact</p>
      <Grid21 />
    </div>
  );
}

function SectionCta() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Section CTA">
      <Container2 />
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

function RiInstagramLine() {
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

function Badge() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col items-center justify-center px-[12px] py-[6px] relative rounded-[500px] shrink-0 size-[36px]" data-name="Badge">
      <RiInstagramLine />
    </div>
  );
}

function RiTwitterFill() {
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

function Badge1() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col items-center justify-center px-[12px] py-[6px] relative rounded-[500px] shrink-0 size-[36px]" data-name="Badge">
      <RiTwitterFill />
    </div>
  );
}

function RiFacebookCircleFill() {
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

function Badge2() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col items-center justify-center px-[12px] py-[6px] relative rounded-[500px] shrink-0 size-[36px]" data-name="Badge">
      <RiFacebookCircleFill />
    </div>
  );
}

function Grid22() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Grid">
      <Badge />
      <Badge1 />
      <Badge2 />
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[48px] items-start min-h-px min-w-px relative self-stretch" data-name="Column">
      <Logo1 />
      <Grid22 />
    </div>
  );
}

function Grid23() {
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
      <Grid23 />
      <Nav />
      <Button3 />
    </div>
  );
}

function Grid24() {
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
      <Grid24 />
      <Nav1 />
    </div>
  );
}

function Grid25() {
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
      <Grid25 />
      <Nav2 />
    </div>
  );
}

function Grid26() {
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

function Grid27() {
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

function Grid28() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Grid">
      <div className="bg-[#f3f3f3] h-px shrink-0 w-full" data-name="Border" />
      <Grid27 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[1600px]" data-name="Container">
      <Grid26 />
      <Grid28 />
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[48px] relative shrink-0 w-full" data-name="Footer">
      <Container3 />
    </div>
  );
}

function PageWrapper() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative shadow-[0px_0px_50px_0px_rgba(0,0,0,0.1)] shrink-0 w-full z-[1]" data-name="Page Wrapper">
      <Header />
      <SectionHero />
      <SectionCta />
      <Footer />
    </div>
  );
}

export default function Blog() {
  return (
    <div className="content-stretch flex flex-col isolate items-start p-[64px] relative size-full" data-name="Blog">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-white inset-0" />
        <img alt="" className="absolute max-w-none object-cover opacity-90 size-full" src={imgBlog} />
        <div className="absolute bg-size-[150px_150px] bg-top-left inset-0 opacity-15" style={{ backgroundImage: `url('${imgBlog1}')` }} />
      </div>
      <PageWrapper />
    </div>
  );
}