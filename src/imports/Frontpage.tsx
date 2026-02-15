import svgPaths from "./svg-hap0o0ufa";
import imgImage from "figma:asset/02b917dc0e6fdc18df712efcdd1f5ea23d31477d.png";
import imgImage1 from "figma:asset/24a40fea387d6d870b36715ebf5f41ccc1196a04.png";
import imgImage2 from "figma:asset/30e49d2a76a331191e3deeaf32a1d9e9ca0279dd.png";
import imgImage3 from "figma:asset/93bdf867d705af4cd05e62b9305f28776e6b5532.png";
import imgImage4 from "figma:asset/fd5c3f97a4e1fdec606d2c79a9cca8861e527d4e.png";
import imgImage7 from "figma:asset/70e2697eafd37fc80aaad3deb3fa81f8793ad926.png";
import imgImage5 from "figma:asset/52f5d10ee420cd852d284f749ca4c83e8f1f9795.png";
import imgImage6 from "figma:asset/dc8ea58154c04e335b913dca99060901770e3a30.png";
import imgImage8 from "figma:asset/d2c4dfe727b3001a88e016b4b1e70dadce2e07c5.png";
import imgImage9 from "figma:asset/f0f50f82a4b17fb450031e070f7adea210b01684.png";
import imgImage10 from "figma:asset/cc4654219fbf5f6968ce15e397a82a0d673ee332.png";
import imgImage11 from "figma:asset/c89403d728bad1a3dc92762832a2ccb43a6ae128.png";
import imgFrontpage from "figma:asset/8ed6481142f4588cada7b6b9a2dbaffa2a6b4855.png";
import imgFrontpage1 from "figma:asset/53cf0a9d13b54d45ba6d8faaf8dde556b80e4b8f.png";

function Logo() {
  return (
    <div className="h-[25px] relative shrink-0 w-[83.252px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 83.2519 25">
        <g id="Logo">
          <g clipPath="url(#clip0_1_895)" id="logo">
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
          <clipPath id="clip0_1_895">
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
    <div className="content-stretch flex flex-col font-['Manrope:Light',sans-serif] font-light gap-[16px] items-start relative shrink-0 text-[#151515] w-full z-[2]" data-name="Grid">
      <p className="css-4hzbpn leading-[1.1] relative shrink-0 text-[96px] w-[1200px]">Building Brands, One Success Story at a Time.</p>
      <p className="css-4hzbpn leading-[1.8] relative shrink-0 text-[24px] w-[600px]">Create a Brand That Resonates: We Can Help You Define and Communicate Your Unique Message.</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#151515] content-stretch flex items-center justify-center px-[24px] py-[16px] relative rounded-[500px] shrink-0 z-[1]" data-name="Button">
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[14px] text-white tracking-[1px]">Our Services</p>
    </div>
  );
}

function Grid1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[48px] isolate items-start min-h-px min-w-px relative" data-name="Grid">
      <Grid />
      <Button1 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[1400px]" data-name="Container">
      <Grid1 />
    </div>
  );
}

function SectionHero() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[160px] pt-[128px] relative shrink-0 w-full" data-name="Section Hero">
      <Container />
    </div>
  );
}

function Logo1() {
  return (
    <div className="h-[25px] relative shrink-0 w-[99.167px]" data-name="logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 99.1667 25">
        <g id="logo">
          <path d={svgPaths.p7231c00} fill="var(--fill-0, #151515)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Logo2() {
  return (
    <div className="h-[30px] relative shrink-0 w-[140px]" data-name="logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140 30">
        <g id="logo">
          <path d={svgPaths.p10623300} fill="var(--fill-0, #151515)" id="Vector" />
          <path d={svgPaths.p395b0e00} fill="var(--fill-0, #151515)" id="Vector_2" />
          <path d={svgPaths.p377c1d00} fill="var(--fill-0, #151515)" id="Vector_3" />
          <path d={svgPaths.p2d50d4f0} fill="var(--fill-0, #151515)" id="Vector_4" />
          <path d={svgPaths.p30562e00} fill="var(--fill-0, #151515)" id="Vector_5" />
          <path d={svgPaths.p101203f0} fill="var(--fill-0, #151515)" id="Vector_6" />
          <path d={svgPaths.p1f909d80} fill="var(--fill-0, #151515)" id="Vector_7" />
          <path d={svgPaths.p7207d00} fill="var(--fill-0, #151515)" id="Vector_8" />
          <path d={svgPaths.p213f4900} fill="var(--fill-0, #151515)" id="Vector_9" />
          <path d={svgPaths.p32afd100} fill="var(--fill-0, #151515)" id="Vector_10" />
          <path d={svgPaths.p3d147100} fill="var(--fill-0, #151515)" id="Vector_11" />
          <path d={svgPaths.p79fd8f0} fill="var(--fill-0, #151515)" id="Vector_12" />
          <path d={svgPaths.p16b8df00} fill="var(--fill-0, #151515)" id="Vector_13" />
        </g>
      </svg>
    </div>
  );
}

function Logo3() {
  return (
    <div className="h-[35px] relative shrink-0 w-[52.5px]" data-name="logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52.5 35">
        <g clipPath="url(#clip0_1_855)" id="logo">
          <path d={svgPaths.p2db63300} fill="var(--fill-0, #151515)" id="Vector" />
          <path d={svgPaths.p3b9dad80} fill="var(--fill-0, #151515)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_855">
            <rect fill="white" height="35" width="52.5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Logo4() {
  return (
    <div className="h-[30px] relative shrink-0 w-[78px]" data-name="logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78 30">
        <g clipPath="url(#clip0_1_830)" id="logo">
          <path d={svgPaths.p3fcd3d00} fill="var(--fill-0, #151515)" id="Vector" />
          <path d={svgPaths.p39b8a00} fill="var(--fill-0, #151515)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_830">
            <rect fill="white" height="30" width="78" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Logo5() {
  return (
    <div className="h-[19px] relative shrink-0 w-[152px]" data-name="logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 152 19">
        <g id="logo">
          <path d={svgPaths.p1ed86680} fill="var(--fill-0, #151515)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Logo6() {
  return (
    <div className="h-[35px] relative shrink-0 w-[132px]" data-name="logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 132 35">
        <g id="logo">
          <path d={svgPaths.p33bb8bf0} fill="var(--fill-0, #151515)" id="Vector" />
          <path d={svgPaths.p8a09900} fill="var(--fill-0, #151515)" id="Vector_2" />
          <path d={svgPaths.p12516c00} fill="var(--fill-0, #151515)" id="Vector_3" />
          <path d={svgPaths.p626db80} fill="var(--fill-0, #151515)" id="Vector_4" />
          <path d={svgPaths.p277aa400} fill="var(--fill-0, #151515)" id="Vector_5" />
          <path d={svgPaths.p272c6500} fill="var(--fill-0, #151515)" id="Vector_6" />
          <path d={svgPaths.p1d5bcf00} fill="var(--fill-0, #151515)" id="Vector_7" />
          <path d={svgPaths.p12ab7b00} fill="var(--fill-0, #151515)" id="Vector_8" />
          <path d={svgPaths.p4e69640} fill="var(--fill-0, #151515)" id="Vector_9" />
          <path d={svgPaths.p3e435900} fill="var(--fill-0, #151515)" id="Vector_10" />
        </g>
      </svg>
    </div>
  );
}

function Logo7() {
  return (
    <div className="h-[30px] relative shrink-0 w-[35.455px]" data-name="logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.4545 30">
        <g clipPath="url(#clip0_1_877)" id="logo">
          <path d={svgPaths.pa38cd00} fill="var(--fill-0, #151515)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_877">
            <rect fill="white" height="30" width="35.4545" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Grid2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Grid">
      <Logo1 />
      <Logo2 />
      <Logo3 />
      <Logo4 />
      <Logo5 />
      <Logo6 />
      <Logo7 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1400px]" data-name="Container">
      <Grid2 />
    </div>
  );
}

function SectionLogos() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[64px] relative shrink-0 w-full" data-name="Section Logos">
      <Container1 />
    </div>
  );
}

function Grid3() {
  return (
    <div className="content-stretch flex flex-col font-['Manrope:Light',sans-serif] font-light gap-[8px] items-start relative shrink-0 w-full" data-name="Grid">
      <p className="css-4hzbpn leading-[1.6] relative shrink-0 text-[#151515] text-[24px] w-full">Brand Strategy</p>
      <p className="css-4hzbpn leading-[1.8] relative shrink-0 text-[#777] text-[16px] w-full">We help businesses define their unique brand message and branding positioning.</p>
    </div>
  );
}

function ButtonText() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Button Text">
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#151515] text-[14px] tracking-[0.25px]">About Strategy</p>
      <div className="bg-[#151515] h-px shrink-0 w-full" data-name="Border" />
    </div>
  );
}

function Grid4() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Grid">
      <Grid3 />
      <ButtonText />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-[#f9f9f9] flex-[1_0_0] min-h-px min-w-px relative" data-name="Card">
      <div className="content-stretch flex flex-col items-start p-[48px] relative w-full">
        <Grid4 />
      </div>
    </div>
  );
}

function Grid5() {
  return (
    <div className="content-stretch flex flex-col font-['Manrope:Light',sans-serif] font-light gap-[8px] items-start relative shrink-0 w-full" data-name="Grid">
      <p className="css-4hzbpn leading-[1.6] relative shrink-0 text-[#151515] text-[24px] w-full">Visual Identity</p>
      <p className="css-4hzbpn leading-[1.8] relative shrink-0 text-[#777] text-[16px] w-full">We create visual elements such as logos, packaging, and marketing materials for your brand.</p>
    </div>
  );
}

function ButtonText1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Button Text">
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#151515] text-[14px] tracking-[0.25px]">About Identity</p>
      <div className="bg-[#151515] h-px shrink-0 w-full" data-name="Border" />
    </div>
  );
}

function Grid6() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Grid">
      <Grid5 />
      <ButtonText1 />
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-[#f9f9f9] flex-[1_0_0] min-h-px min-w-px relative" data-name="Card">
      <div className="content-stretch flex flex-col items-start p-[48px] relative w-full">
        <Grid6 />
      </div>
    </div>
  );
}

function Grid7() {
  return (
    <div className="content-stretch flex flex-col font-['Manrope:Light',sans-serif] font-light gap-[8px] items-start relative shrink-0 w-full" data-name="Grid">
      <p className="css-4hzbpn leading-[1.6] relative shrink-0 text-[#151515] text-[24px] w-full">Digital Marketing</p>
      <p className="css-4hzbpn leading-[1.8] relative shrink-0 text-[#777] text-[16px] w-full">We help businesses to promote their brand online and create engaging digital experiences.</p>
    </div>
  );
}

function ButtonText2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Button Text">
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#151515] text-[14px] tracking-[0.25px]">About Marketing</p>
      <div className="bg-[#151515] h-px shrink-0 w-full" data-name="Border" />
    </div>
  );
}

function Grid8() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Grid">
      <Grid7 />
      <ButtonText2 />
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-[#f9f9f9] flex-[1_0_0] min-h-px min-w-px relative" data-name="Card">
      <div className="content-stretch flex flex-col items-start p-[48px] relative w-full">
        <Grid8 />
      </div>
    </div>
  );
}

function Grid9() {
  return (
    <div className="content-stretch flex flex-col font-['Manrope:Light',sans-serif] font-light gap-[8px] items-start relative shrink-0 w-full" data-name="Grid">
      <p className="css-4hzbpn leading-[1.6] relative shrink-0 text-[#151515] text-[24px] w-full">Brand Management</p>
      <p className="css-4hzbpn leading-[1.8] relative shrink-0 text-[#777] text-[16px] w-full">We help businesses to implement their brand across all touchpoints and ensure consistency.</p>
    </div>
  );
}

function ButtonText3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Button Text">
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#151515] text-[14px] tracking-[0.25px]">About Management</p>
      <div className="bg-[#151515] h-px shrink-0 w-full" data-name="Border" />
    </div>
  );
}

function Grid10() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Grid">
      <Grid9 />
      <ButtonText3 />
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-[#f9f9f9] flex-[1_0_0] min-h-px min-w-px relative" data-name="Card">
      <div className="content-stretch flex flex-col items-start p-[48px] relative w-full">
        <Grid10 />
      </div>
    </div>
  );
}

function Grid11() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Grid">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1600px]" data-name="Container">
      <Grid11 />
    </div>
  );
}

function SectionServices() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Section Services">
      <Container2 />
    </div>
  );
}

function Grid12() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Grid">
      <p className="css-4hzbpn font-['Manrope:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#151515] text-[12px] tracking-[1px] uppercase w-full">Our work</p>
      <div className="bg-[#f3f3f3] h-px shrink-0 w-full" data-name="Border" />
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[500px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(21,21,21,0.6)] border-solid inset-0 pointer-events-none rounded-[500px]" />
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#151515] text-[14px] tracking-[1px]">All Work</p>
    </div>
  );
}

function Grid13() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Grid">
      <p className="css-4hzbpn flex-[1_0_0] font-['Manrope:Light',sans-serif] font-light leading-[1.3] min-h-px min-w-px relative text-[#151515] text-[48px]">Selected Work</p>
      <Button2 />
    </div>
  );
}

function Grid14() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Grid">
      <Grid12 />
      <Grid13 />
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

function Cursor() {
  return (
    <div className="absolute bg-[#151515] content-stretch flex items-center justify-center left-[621px] rounded-[100px] size-[50px] top-[255px]" data-name="cursor">
      <Icon />
    </div>
  );
}

function ImageWrapper() {
  return (
    <div className="h-[560px] overflow-clip relative shrink-0 w-full" data-name="Image Wrapper">
      <div className="absolute h-[588px] left-0 top-0 w-[784px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      </div>
      <Cursor />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[12px] py-[6px] relative rounded-[500px] shrink-0" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[rgba(21,21,21,0.6)] border-solid inset-0 pointer-events-none rounded-[500px]" />
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#151515] text-[12px] tracking-[0.25px]">Marketing</p>
    </div>
  );
}

function Grid15() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[16px] relative shrink-0 w-full" data-name="Grid">
      <p className="css-4hzbpn font-['Manrope:Light',sans-serif] font-light leading-[1.6] relative shrink-0 text-[#151515] text-[24px] w-[306px]">Invision Studio</p>
      <Label1 />
    </div>
  );
}

function Post() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Post">
      <ImageWrapper />
      <Grid15 />
    </div>
  );
}

function ImageWrapper1() {
  return (
    <div className="h-[560px] overflow-clip relative shrink-0 w-full" data-name="Image Wrapper">
      <div className="absolute h-[588px] left-0 top-0 w-[784px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
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

function Grid16() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[16px] relative shrink-0 w-full" data-name="Grid">
      <p className="css-4hzbpn font-['Manrope:Light',sans-serif] font-light leading-[1.6] relative shrink-0 text-[#151515] text-[24px] w-[306px]">Square Media</p>
      <Label2 />
    </div>
  );
}

function Post1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Post">
      <ImageWrapper1 />
      <Grid16 />
    </div>
  );
}

function Grid17() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative rounded-[16px] shrink-0 w-full" data-name="Grid">
      <Post />
      <Post1 />
    </div>
  );
}

function ImageWrapper2() {
  return (
    <div className="h-[560px] overflow-clip relative shrink-0 w-full" data-name="Image Wrapper">
      <div className="absolute h-[588px] left-0 top-0 w-[784px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[12px] py-[6px] relative rounded-[500px] shrink-0" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[rgba(21,21,21,0.6)] border-solid inset-0 pointer-events-none rounded-[500px]" />
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#151515] text-[12px] tracking-[0.25px]">Social Media</p>
    </div>
  );
}

function Grid18() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[16px] relative shrink-0 w-full" data-name="Grid">
      <p className="css-4hzbpn font-['Manrope:Light',sans-serif] font-light leading-[1.6] relative shrink-0 text-[#151515] text-[24px] w-[306px]">Vision Design</p>
      <Label3 />
    </div>
  );
}

function Post2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Post">
      <ImageWrapper2 />
      <Grid18 />
    </div>
  );
}

function ImageWrapper3() {
  return (
    <div className="h-[560px] overflow-clip relative shrink-0 w-full" data-name="Image Wrapper">
      <div className="absolute h-[588px] left-0 top-0 w-[784px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
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

function Grid19() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[16px] relative shrink-0 w-full" data-name="Grid">
      <p className="css-4hzbpn font-['Manrope:Light',sans-serif] font-light leading-[1.6] relative shrink-0 text-[#151515] text-[24px] w-[306px]">Design Bors</p>
      <Label4 />
    </div>
  );
}

function Post3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Post">
      <ImageWrapper3 />
      <Grid19 />
    </div>
  );
}

function Grid20() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative rounded-[16px] shrink-0 w-full" data-name="Grid">
      <Post2 />
      <Post3 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-[1600px]" data-name="Container">
      <Grid14 />
      <Grid17 />
      <Grid20 />
    </div>
  );
}

function SectionWork() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[160px] relative shrink-0 w-full" data-name="Section Work">
      <Container3 />
    </div>
  );
}

function Grid21() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Grid">
      <p className="css-4hzbpn font-['Manrope:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#151515] text-[12px] tracking-[1px] uppercase w-full">Our Values</p>
      <div className="bg-[#f3f3f3] h-px shrink-0 w-full" data-name="Border" />
    </div>
  );
}

function Grid22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Grid">
      <Grid21 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[1.4] relative shrink-0 text-[#151515]">
      <p className="css-4hzbpn font-['Manrope:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[12px] tracking-[1px] uppercase w-[min-content]">Services</p>
      <p className="css-4hzbpn font-['Manrope:Light',sans-serif] font-light relative shrink-0 text-[32px] w-[280px]">Our Approach to Branding.</p>
    </div>
  );
}

function Icon1() {
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

function Button3() {
  return (
    <div className="bg-[#151515] content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[12px] relative rounded-[500px] shrink-0" data-name="Button">
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[14px] text-white tracking-[1px]">About Øliv</p>
      <Icon1 />
    </div>
  );
}

function Grid23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px relative w-full" data-name="Grid">
      <Frame2 />
      <Button3 />
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex flex-col items-start p-[48px] relative shrink-0 size-[376px]" data-name="Card">
      <Grid23 />
    </div>
  );
}

function Grid24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px relative text-[#151515] w-full" data-name="Grid">
      <div className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[12px] tracking-[1px] uppercase w-full">
        <p className="css-4hzbpn mb-0">{`Helping Brands `}</p>
        <p className="css-4hzbpn">Stand Out</p>
      </div>
      <div className="font-['Manrope:Light',sans-serif] font-light leading-[1.6] relative shrink-0 text-[24px] w-full">
        <p className="css-4hzbpn mb-0">{`Bold Moves, `}</p>
        <p className="css-4hzbpn">Big Impact.</p>
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="bg-[#f1f6f5] content-stretch flex flex-col items-start p-[48px] relative shrink-0 size-[376px]" data-name="Card">
      <Grid24 />
    </div>
  );
}

function Grid25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px relative text-[#151515] w-full" data-name="Grid">
      <div className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[12px] tracking-[1px] uppercase w-full">
        <p className="css-4hzbpn mb-0">{`How We Work `}</p>
        <p className="css-4hzbpn">with Our Clients</p>
      </div>
      <div className="font-['Manrope:Light',sans-serif] font-light leading-[1.6] relative shrink-0 text-[24px] w-full">
        <p className="css-4hzbpn mb-0">Honesty is the</p>
        <p className="css-4hzbpn">Best Policy.</p>
      </div>
    </div>
  );
}

function Card6() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col items-start p-[48px] relative shrink-0 size-[376px]" data-name="Card">
      <Grid25 />
    </div>
  );
}

function Card7() {
  return (
    <div className="bg-white flex-[1_0_0] h-[376px] min-h-px min-w-px relative" data-name="Card">
      <div className="size-full" />
    </div>
  );
}

function Grid26() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Grid">
      <Card4 />
      <Card5 />
      <Card6 />
      <Card7 />
    </div>
  );
}

function Card8() {
  return <div className="bg-white shrink-0 size-[376px]" data-name="Card" />;
}

function Grid27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px relative text-[#151515] w-full" data-name="Grid">
      <p className="css-4hzbpn font-['Manrope:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[12px] tracking-[1px] uppercase w-full">Collaboration is Key</p>
      <p className="css-4hzbpn font-['Manrope:Light',sans-serif] font-light leading-[1.6] relative shrink-0 text-[24px] w-full">Building Strong Partnerships.</p>
    </div>
  );
}

function Card9() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col items-start p-[48px] relative shrink-0 size-[376px]" data-name="Card">
      <Grid27 />
    </div>
  );
}

function Grid28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px relative text-[#151515] w-full" data-name="Grid">
      <p className="css-4hzbpn font-['Manrope:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[12px] tracking-[1px] uppercase w-full">Our Approach</p>
      <div className="font-['Manrope:Light',sans-serif] font-light leading-[1.6] relative shrink-0 text-[24px] w-full">
        <p className="css-4hzbpn mb-0">{`Achieving `}</p>
        <p className="css-4hzbpn">Real Results.</p>
      </div>
    </div>
  );
}

function Card10() {
  return (
    <div className="bg-[#f8ede3] content-stretch flex flex-col items-start p-[48px] relative shrink-0 size-[376px]" data-name="Card">
      <Grid28 />
    </div>
  );
}

function Grid29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px relative text-[#151515] w-full" data-name="Grid">
      <p className="css-4hzbpn font-['Manrope:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[12px] tracking-[1px] uppercase w-full">{`Our Philosophy `}</p>
      <div className="font-['Manrope:Light',sans-serif] font-light leading-[1.6] relative shrink-0 text-[24px] w-full">
        <p className="css-4hzbpn mb-0">{`Building Trust, `}</p>
        <p className="css-4hzbpn">Not Pitching.</p>
      </div>
    </div>
  );
}

function Card11() {
  return (
    <div className="bg-[#fffae7] content-stretch flex flex-col items-start p-[48px] relative shrink-0 size-[376px]" data-name="Card">
      <Grid29 />
    </div>
  );
}

function Grid30() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Grid">
      <Card8 />
      <Card9 />
      <Card10 />
      <Card11 />
    </div>
  );
}

function Grid31() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0" data-name="Grid">
      <Grid26 />
      <Grid30 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-[1600px]" data-name="Container">
      <Grid22 />
      <Grid31 />
    </div>
  );
}

function SectionWork1() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[160px] relative shrink-0 w-full" data-name="Section Work">
      <Container4 />
    </div>
  );
}

function Grid32() {
  return <div className="h-[17px] shrink-0 w-[376px]" data-name="Grid" />;
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[48px] items-start leading-[1.8] relative shrink-0 text-[16px] w-full">
      <p className="css-4hzbpn relative shrink-0 w-[368px]">{`At Øliv, our goal is to craft exceptional digital experiences across all platforms. In today's digitally driven world, having a strong online presence is paramount for businesses to connect with their target audience effectively. We understand the importance of delivering seamless and engaging experiences that leave a lasting impression.`}</p>
      <p className="css-4hzbpn relative shrink-0 w-[368px]">{`Our team of skilled designers, developers, and digital strategists collaborate to create customized digital solutions tailored to your unique business needs. Whether it's designing a user-friendly website, developing a mobile application, or enhancing your e-commerce platform, we strive to provide solutions that not only meet but exceed your expectations.`}</p>
    </div>
  );
}

function Grid33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Manrope:Light',sans-serif] font-light gap-[32px] items-start min-h-px min-w-px relative text-[#151515]" data-name="Grid">
      <p className="css-4hzbpn leading-[1.3] relative shrink-0 text-[48px] w-full">Crafting Exceptional Digital Experiences Across All Platforms: Our Goal at Øliv.</p>
      <Frame />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-[1600px]" data-name="Container">
      <Grid32 />
      <Grid33 />
      <Grid32 />
    </div>
  );
}

function SectionWhy() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[96px] relative shrink-0 w-full" data-name="Section Why">
      <Container5 />
    </div>
  );
}

function Grid34() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Grid">
      <p className="css-4hzbpn font-['Manrope:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#151515] text-[12px] tracking-[1px] uppercase w-full">Our Team</p>
      <div className="bg-[#f3f3f3] h-px shrink-0 w-full" data-name="Border" />
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[500px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(21,21,21,0.6)] border-solid inset-0 pointer-events-none rounded-[500px]" />
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#151515] text-[14px] tracking-[1px]">About Us</p>
    </div>
  );
}

function Grid35() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Grid">
      <p className="css-4hzbpn flex-[1_0_0] font-['Manrope:Light',sans-serif] font-light leading-[1.3] min-h-px min-w-px relative text-[#151515] text-[48px]">Our Team of Experts</p>
      <Button4 />
    </div>
  );
}

function Grid36() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Grid">
      <Grid34 />
      <Grid35 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <p className="css-4hzbpn font-['Manrope:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#151515] text-[12px] tracking-[1px] uppercase w-[min-content]">Join the team</p>
      <p className="css-4hzbpn font-['Manrope:Light',sans-serif] font-light leading-[1.4] relative shrink-0 text-[#151515] text-[32px] w-[280px]">Want to shape the future of branding?</p>
      <p className="css-4hzbpn font-['Manrope:Light',sans-serif] font-light leading-[1.8] relative shrink-0 text-[#777] text-[16px] w-[280px]">Join us and shape the future of branding today!</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#151515] content-stretch flex items-center justify-center px-[24px] py-[16px] relative rounded-[500px] shrink-0" data-name="Button">
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[14px] text-white tracking-[1px]">Apply Now</p>
    </div>
  );
}

function Grid37() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px relative w-full" data-name="Grid">
      <Frame1 />
      <Button5 />
    </div>
  );
}

function Card12() {
  return (
    <div className="bg-[#f1f6f5] content-stretch flex flex-col h-[540px] items-start p-[48px] relative shrink-0 w-[376px]" data-name="Card">
      <Grid37 />
    </div>
  );
}

function RiInstagramLine() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="ri:instagram-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="ri:instagram-line">
          <path d={svgPaths.p3ebf8580} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#151515] content-stretch flex flex-col items-center justify-center px-[12px] py-[6px] relative rounded-[500px] shrink-0 size-[36px]" data-name="Badge">
      <RiInstagramLine />
    </div>
  );
}

function RiTwitterFill() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="ri:twitter-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="ri:twitter-fill">
          <path d={svgPaths.p14f75280} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-[#151515] content-stretch flex flex-col items-center justify-center px-[12px] py-[6px] relative rounded-[500px] shrink-0 size-[36px]" data-name="Badge">
      <RiTwitterFill />
    </div>
  );
}

function RiFacebookCircleFill() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="ri:facebook-circle-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="ri:facebook-circle-fill">
          <path d={svgPaths.p34239200} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Badge2() {
  return (
    <div className="bg-[#151515] content-stretch flex flex-col items-center justify-center px-[12px] py-[6px] relative rounded-[500px] shrink-0 size-[36px]" data-name="Badge">
      <RiFacebookCircleFill />
    </div>
  );
}

function Grid38() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-start left-[219px] top-[472px]" data-name="Grid">
      <Badge />
      <Badge1 />
      <Badge2 />
    </div>
  );
}

function ImageWrapper4() {
  return (
    <div className="bg-[#f8f8f8] h-[540px] overflow-clip relative shrink-0 w-[376px]" data-name="Image Wrapper">
      <div className="absolute h-[546px] left-0 top-[-3px] w-[376px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
      <Grid38 />
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[12px] py-[6px] relative rounded-[500px] shrink-0" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[rgba(21,21,21,0.6)] border-solid inset-0 pointer-events-none rounded-[500px]" />
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#151515] text-[12px] tracking-[0.25px]">CTO</p>
    </div>
  );
}

function Grid39() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[16px] relative shrink-0 w-full" data-name="Grid">
      <p className="css-4hzbpn font-['Manrope:Light',sans-serif] font-light leading-[1.4] relative shrink-0 text-[#151515] text-[18px] w-[306px]">Annette Black</p>
      <Label5 />
    </div>
  );
}

function Grid40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[376px]" data-name="Grid">
      <ImageWrapper4 />
      <Grid39 />
    </div>
  );
}

function ImageWrapper5() {
  return (
    <div className="bg-[#f8f8f8] h-[540px] overflow-clip relative shrink-0 w-[376px]" data-name="Image Wrapper">
      <div className="absolute h-[505px] left-[-191px] top-[36px] w-[757px]" data-name="image 7">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
      </div>
      <div className="absolute h-[545px] left-0 top-0 w-[376px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
      </div>
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[12px] py-[6px] relative rounded-[500px] shrink-0" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[rgba(21,21,21,0.6)] border-solid inset-0 pointer-events-none rounded-[500px]" />
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#151515] text-[12px] tracking-[0.25px]">Design</p>
    </div>
  );
}

function Grid41() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[16px] relative shrink-0 w-full" data-name="Grid">
      <p className="css-4hzbpn font-['Manrope:Light',sans-serif] font-light leading-[1.4] relative shrink-0 text-[#151515] text-[18px] w-[306px]">Devon Lane</p>
      <Label6 />
    </div>
  );
}

function Grid42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[376px]" data-name="Grid">
      <ImageWrapper5 />
      <Grid41 />
    </div>
  );
}

function ImageWrapper6() {
  return (
    <div className="bg-[#f8f8f8] h-[540px] overflow-clip relative shrink-0 w-[376px]" data-name="Image Wrapper">
      <div className="absolute h-[505px] left-[-191px] top-[36px] w-[757px]" data-name="image 7">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
      </div>
      <div className="absolute h-[546px] left-0 top-[-3px] w-[376px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
      </div>
    </div>
  );
}

function Label7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[12px] py-[6px] relative rounded-[500px] shrink-0" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[rgba(21,21,21,0.6)] border-solid inset-0 pointer-events-none rounded-[500px]" />
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#151515] text-[12px] tracking-[0.25px]">Design</p>
    </div>
  );
}

function Grid43() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[16px] relative shrink-0 w-full" data-name="Grid">
      <p className="css-4hzbpn font-['Manrope:Light',sans-serif] font-light leading-[1.4] relative shrink-0 text-[#151515] text-[18px] w-[306px]">Chris Watson</p>
      <Label7 />
    </div>
  );
}

function Grid44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[376px]" data-name="Grid">
      <ImageWrapper6 />
      <Grid43 />
    </div>
  );
}

function Grid45() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-[1600px]" data-name="Grid">
      <Card12 />
      <Grid40 />
      <Grid42 />
      <Grid44 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center relative shrink-0 w-[1600px]" data-name="Container">
      <Grid36 />
      <Grid45 />
    </div>
  );
}

function SectionTeam() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[160px] relative shrink-0 w-full" data-name="Section Team">
      <Container6 />
    </div>
  );
}

function Grid46() {
  return <div className="h-[35px] shrink-0 w-[376px]" data-name="Grid" />;
}

function Logo8() {
  return (
    <div className="h-[30px] relative shrink-0 w-[140px]" data-name="logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140 30">
        <g id="logo">
          <path d={svgPaths.p10623300} fill="var(--fill-0, #151515)" id="Vector" />
          <path d={svgPaths.p395b0e00} fill="var(--fill-0, #151515)" id="Vector_2" />
          <path d={svgPaths.p377c1d00} fill="var(--fill-0, #151515)" id="Vector_3" />
          <path d={svgPaths.p2d50d4f0} fill="var(--fill-0, #151515)" id="Vector_4" />
          <path d={svgPaths.p30562e00} fill="var(--fill-0, #151515)" id="Vector_5" />
          <path d={svgPaths.p101203f0} fill="var(--fill-0, #151515)" id="Vector_6" />
          <path d={svgPaths.p1f909d80} fill="var(--fill-0, #151515)" id="Vector_7" />
          <path d={svgPaths.p7207d00} fill="var(--fill-0, #151515)" id="Vector_8" />
          <path d={svgPaths.p213f4900} fill="var(--fill-0, #151515)" id="Vector_9" />
          <path d={svgPaths.p32afd100} fill="var(--fill-0, #151515)" id="Vector_10" />
          <path d={svgPaths.p3d147100} fill="var(--fill-0, #151515)" id="Vector_11" />
          <path d={svgPaths.p79fd8f0} fill="var(--fill-0, #151515)" id="Vector_12" />
          <path d={svgPaths.p16b8df00} fill="var(--fill-0, #151515)" id="Vector_13" />
        </g>
      </svg>
    </div>
  );
}

function Grid47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[376px]" data-name="Grid">
      <Logo8 />
    </div>
  );
}

function Grid48() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Manrope:Light',sans-serif] font-light gap-[32px] items-start min-h-px min-w-px relative text-[#151515]" data-name="Grid">
      <p className="css-4hzbpn leading-[1.4] relative shrink-0 text-[32px] w-full">{`“We couldn't be happier with the branding strategy developed.”`}</p>
      <div className="leading-[1.8] relative shrink-0 text-[16px] w-full">
        <p className="css-4hzbpn mb-0">{`We approached Øliv for a complete rebranding of our company and we couldn't be happier with the results. Their market research and analysis helped us define our target audience and unique brand positioning. Their team then created a visually compelling logo and consistent branding across all touchpoints. `}</p>
        <p className="css-4hzbpn mb-0">&nbsp;</p>
        <p className="css-4hzbpn">The new brand has helped us stand out in the market and increase sales. We highly recommend Øliv to any business looking to rebrand or refresh their brand.</p>
      </div>
    </div>
  );
}

function Grid49() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Grid">
      <Grid46 />
      <Grid47 />
      <Grid48 />
    </div>
  );
}

function Grid50() {
  return <div className="h-[35px] shrink-0 w-[376px]" data-name="Grid" />;
}

function Logo9() {
  return (
    <div className="h-[35px] relative shrink-0 w-[132px]" data-name="logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 132 35">
        <g id="logo">
          <path d={svgPaths.p33bb8bf0} fill="var(--fill-0, #151515)" id="Vector" />
          <path d={svgPaths.p8a09900} fill="var(--fill-0, #151515)" id="Vector_2" />
          <path d={svgPaths.p12516c00} fill="var(--fill-0, #151515)" id="Vector_3" />
          <path d={svgPaths.p626db80} fill="var(--fill-0, #151515)" id="Vector_4" />
          <path d={svgPaths.p277aa400} fill="var(--fill-0, #151515)" id="Vector_5" />
          <path d={svgPaths.p272c6500} fill="var(--fill-0, #151515)" id="Vector_6" />
          <path d={svgPaths.p1d5bcf00} fill="var(--fill-0, #151515)" id="Vector_7" />
          <path d={svgPaths.p12ab7b00} fill="var(--fill-0, #151515)" id="Vector_8" />
          <path d={svgPaths.p4e69640} fill="var(--fill-0, #151515)" id="Vector_9" />
          <path d={svgPaths.p3e435900} fill="var(--fill-0, #151515)" id="Vector_10" />
        </g>
      </svg>
    </div>
  );
}

function Grid51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[376px]" data-name="Grid">
      <Logo9 />
    </div>
  );
}

function Grid52() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Manrope:Light',sans-serif] font-light gap-[32px] items-start min-h-px min-w-px relative text-[#151515]" data-name="Grid">
      <p className="css-4hzbpn leading-[1.4] relative shrink-0 text-[32px] w-full">“Expert Brand Management from Øliv”</p>
      <div className="leading-[1.8] relative shrink-0 text-[16px] w-full">
        <p className="css-4hzbpn mb-0">{`As a growing business, it was important for us to have a strong and consistent brand. Øliv's brand management services helped us to achieve this. They conducted a thorough brand audit and provided valuable insights and recommendations. `}</p>
        <p className="css-4hzbpn mb-0">&nbsp;</p>
        <p className="css-4hzbpn">{`Their ongoing monitoring and implementation of our brand has helped us maintain consistency and stay aligned with our business goals. We couldn't be happier with the results and highly recommend Øliv's brand management services.`}</p>
      </div>
    </div>
  );
}

function Grid53() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Grid">
      <Grid50 />
      <Grid51 />
      <Grid52 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-[1600px]" data-name="Container">
      <Grid49 />
      <Grid53 />
    </div>
  );
}

function SectionTestimonials() {
  return (
    <div className="content-stretch flex flex-col items-center py-[160px] relative shrink-0 w-full" data-name="Section Testimonials">
      <Container7 />
    </div>
  );
}

function Grid54() {
  return (
    <div className="content-stretch flex flex-col font-['Manrope:Light',sans-serif] font-light gap-[8px] items-start relative shrink-0 text-[#151515]" data-name="Grid">
      <p className="css-4hzbpn leading-[1.2] relative shrink-0 text-[64px] w-[1064px]">{`Let's start building your brand's unique story together.`}</p>
      <p className="css-4hzbpn leading-[1.8] relative shrink-0 text-[24px] w-[600px]">Want to see what a difference a strong brand can make? Request a consultation today.</p>
    </div>
  );
}

function Icon2() {
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

function Button6() {
  return (
    <div className="bg-[#151515] content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative rounded-[500px] shrink-0" data-name="Button">
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[14px] text-white tracking-[1px]">Get in touch</p>
      <Icon2 />
    </div>
  );
}

function Grid55() {
  return (
    <div className="bg-[#f1f6f5] content-stretch flex flex-[1_0_0] flex-col gap-[48px] items-start min-h-px min-w-px relative" data-name="Grid">
      <Grid54 />
      <Button6 />
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#f1f6f5] content-stretch flex gap-[32px] items-start px-[64px] py-[80px] relative shrink-0 w-[1600px]" data-name="Container">
      <p className="css-4hzbpn font-['Manrope:Regular',sans-serif] font-normal leading-[1.4] relative self-stretch shrink-0 text-[#151515] text-[12px] tracking-[1px] uppercase w-[316px]">Contact</p>
      <Grid55 />
    </div>
  );
}

function SectionCta() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Section CTA">
      <Container8 />
    </div>
  );
}

function Grid56() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Grid">
      <p className="css-4hzbpn font-['Manrope:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#151515] text-[12px] tracking-[1px] uppercase w-full">Blog</p>
      <div className="bg-[#f3f3f3] h-px shrink-0 w-full" data-name="Border" />
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[500px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(21,21,21,0.6)] border-solid inset-0 pointer-events-none rounded-[500px]" />
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#151515] text-[14px] tracking-[1px]">See all</p>
    </div>
  );
}

function Grid57() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Grid">
      <p className="css-4hzbpn flex-[1_0_0] font-['Manrope:Light',sans-serif] font-light leading-[1.3] min-h-px min-w-px relative text-[#151515] text-[48px]">Insights on Branding</p>
      <Button7 />
    </div>
  );
}

function Grid58() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Grid">
      <Grid56 />
      <Grid57 />
    </div>
  );
}

function ImageWrapper7() {
  return (
    <div className="bg-[#f8f8f8] overflow-clip relative shrink-0 size-[376px]" data-name="Image Wrapper">
      <div className="absolute h-[385px] left-[-45px] top-[-9px] w-[576px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage8} />
      </div>
    </div>
  );
}

function ButtonText4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Button Text">
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#151515] text-[14px] tracking-[0.25px]">Read More</p>
      <div className="bg-[#151515] h-px shrink-0 w-full" data-name="Border" />
    </div>
  );
}

function Grid59() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center pt-[16px] relative shrink-0 w-full" data-name="Grid">
      <p className="css-4hzbpn font-['Manrope:Light',sans-serif] font-light leading-[1.6] min-w-full relative shrink-0 text-[#151515] text-[20px] w-[min-content]">The Importance of a Strong Brand Positioning</p>
      <ButtonText4 />
    </div>
  );
}

function Grid60() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Grid">
      <ImageWrapper7 />
      <Grid59 />
    </div>
  );
}

function ImageWrapper8() {
  return (
    <div className="bg-[#f8f8f8] overflow-clip relative shrink-0 size-[376px]" data-name="Image Wrapper">
      <div className="absolute h-[506px] left-0 top-[-49px] w-[380px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage9} />
      </div>
    </div>
  );
}

function ButtonText5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Button Text">
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#151515] text-[14px] tracking-[0.25px]">Read More</p>
      <div className="bg-[#151515] h-px shrink-0 w-full" data-name="Border" />
    </div>
  );
}

function Grid61() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center pt-[16px] relative shrink-0 w-full" data-name="Grid">
      <p className="css-4hzbpn font-['Manrope:Light',sans-serif] font-light leading-[1.6] min-w-full relative shrink-0 text-[#151515] text-[20px] w-[min-content]">Creating a Consistent Brand Identity Across All Touchpoints</p>
      <ButtonText5 />
    </div>
  );
}

function Grid62() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Grid">
      <ImageWrapper8 />
      <Grid61 />
    </div>
  );
}

function ImageWrapper9() {
  return (
    <div className="bg-[#f8f8f8] overflow-clip relative shrink-0 size-[376px]" data-name="Image Wrapper">
      <div className="absolute h-[469.971px] left-0 top-[-74px] w-[376px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage10} />
      </div>
    </div>
  );
}

function ButtonText6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Button Text">
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#151515] text-[14px] tracking-[0.25px]">Read More</p>
      <div className="bg-[#151515] h-px shrink-0 w-full" data-name="Border" />
    </div>
  );
}

function Grid63() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center pt-[16px] relative shrink-0 w-full" data-name="Grid">
      <p className="css-4hzbpn font-['Manrope:Light',sans-serif] font-light leading-[1.6] min-w-full relative shrink-0 text-[#151515] text-[20px] w-[min-content]">The Role of Market Research in Branding Strategy</p>
      <ButtonText6 />
    </div>
  );
}

function Grid64() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Grid">
      <ImageWrapper9 />
      <Grid63 />
    </div>
  );
}

function ImageWrapper10() {
  return (
    <div className="bg-[#f8f8f8] overflow-clip relative shrink-0 size-[376px]" data-name="Image Wrapper">
      <div className="absolute h-[593px] left-[-8px] top-[-106px] w-[395px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage11} />
      </div>
    </div>
  );
}

function ButtonText7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Button Text">
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#151515] text-[14px] tracking-[0.25px]">Read More</p>
      <div className="bg-[#151515] h-px shrink-0 w-full" data-name="Border" />
    </div>
  );
}

function Grid65() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center pt-[16px] relative shrink-0 w-full" data-name="Grid">
      <p className="css-4hzbpn font-['Manrope:Light',sans-serif] font-light leading-[1.6] min-w-full relative shrink-0 text-[#151515] text-[20px] w-[min-content]">The Impact of Social Media on Branding</p>
      <ButtonText7 />
    </div>
  );
}

function Grid66() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Grid">
      <ImageWrapper10 />
      <Grid65 />
    </div>
  );
}

function Grid67() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-[1600px]" data-name="Grid">
      <Grid60 />
      <Grid62 />
      <Grid64 />
      <Grid66 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center relative shrink-0 w-[1600px]" data-name="Container">
      <Grid58 />
      <Grid67 />
    </div>
  );
}

function SectionBlog() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[160px] relative shrink-0 w-full" data-name="Section Blog">
      <Container9 />
    </div>
  );
}

function Logo10() {
  return (
    <div className="h-[25px] relative shrink-0 w-[83.252px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 83.2519 25">
        <g id="Logo">
          <g clipPath="url(#clip0_1_895)" id="logo">
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
          <clipPath id="clip0_1_895">
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

function Badge3() {
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

function Badge4() {
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

function Badge5() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col items-center justify-center px-[12px] py-[6px] relative rounded-[500px] shrink-0 size-[36px]" data-name="Badge">
      <RiFacebookCircleFill1 />
    </div>
  );
}

function Grid68() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Grid">
      <Badge3 />
      <Badge4 />
      <Badge5 />
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[48px] items-start min-h-px min-w-px relative self-stretch" data-name="Column">
      <Logo10 />
      <Grid68 />
    </div>
  );
}

function Grid69() {
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

function Button8() {
  return (
    <div className="bg-[#151515] content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[500px] shrink-0" data-name="Button">
      <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[14px] text-white tracking-[1px]">More Templates</p>
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative" data-name="Column">
      <Grid69 />
      <Nav />
      <Button8 />
    </div>
  );
}

function Grid70() {
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
      <Grid70 />
      <Nav1 />
    </div>
  );
}

function Grid71() {
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
      <Grid71 />
      <Nav2 />
    </div>
  );
}

function Grid72() {
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

function Grid73() {
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

function Grid74() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Grid">
      <div className="bg-[#f3f3f3] h-px shrink-0 w-full" data-name="Border" />
      <Grid73 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[1600px]" data-name="Container">
      <Grid72 />
      <Grid74 />
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[48px] relative shrink-0 w-full" data-name="Footer">
      <Container10 />
    </div>
  );
}

function PageWrapper() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative shadow-[0px_0px_50px_0px_rgba(0,0,0,0.1)] shrink-0 w-full z-[1]" data-name="Page Wrapper">
      <Header />
      <SectionHero />
      <SectionLogos />
      <SectionServices />
      <SectionWork />
      <SectionWork1 />
      <SectionWhy />
      <SectionTeam />
      <SectionTestimonials />
      <SectionCta />
      <SectionBlog />
      <Footer />
    </div>
  );
}

export default function Frontpage() {
  return (
    <div className="content-stretch flex flex-col isolate items-start p-[64px] relative size-full" data-name="Frontpage">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-white inset-0" />
        <img alt="" className="absolute max-w-none object-cover opacity-90 size-full" src={imgFrontpage} />
        <div className="absolute bg-size-[150px_150px] bg-top-left inset-0 opacity-15" style={{ backgroundImage: `url('${imgFrontpage1}')` }} />
      </div>
      <PageWrapper />
    </div>
  );
}