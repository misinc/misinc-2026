import svgPaths from "./svg-nsgajic71m";

function Grid() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0" data-name="grid">
      <p className="css-4hzbpn font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[#242424] text-[26px] w-[1816px]">Logo</p>
      <div className="bg-[#242424] h-px shrink-0 w-[1816px]" data-name="line" />
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[25px] relative shrink-0 w-[37.5px]" data-name="logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.5 25">
        <g clipPath="url(#clip0_7_5964)" id="logo">
          <path d={svgPaths.p24da2800} fill="var(--fill-0, #151515)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_7_5964">
            <rect fill="white" height="25" width="37.5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Grid1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0" data-name="grid">
      <Grid />
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Logo">
        <Logo />
        <div className="h-[16.5px] relative shrink-0 w-[37.752px]" data-name="øliv">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.7519 16.5">
            <g id="Ã¸liv">
              <path d={svgPaths.p9974d80} fill="var(--fill-0, #151515)" />
              <path d={svgPaths.pf0b2e00} fill="var(--fill-0, #151515)" />
              <path d={svgPaths.p29a2f080} fill="var(--fill-0, #151515)" />
              <path d={svgPaths.p13340e00} fill="var(--fill-0, #151515)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Grid2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0" data-name="grid">
      <p className="css-4hzbpn font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[#242424] text-[26px] w-full">Header</p>
      <div className="bg-[#242424] h-px shrink-0 w-full" data-name="line" />
    </div>
  );
}

function NavbarLeft() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-h-px min-w-px relative" data-name="Navbar Left">
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Logo">
        <div className="h-[25px] relative shrink-0 w-[37.5px]" data-name="logo">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.5 25">
            <g clipPath="url(#clip0_7_5964)" id="logo">
              <path d={svgPaths.p24da2800} fill="var(--fill-0, #151515)" id="Vector" />
            </g>
            <defs>
              <clipPath id="clip0_7_5964">
                <rect fill="white" height="25" width="37.5" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="h-[16.5px] relative shrink-0 w-[37.752px]" data-name="øliv">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.7519 16.5">
            <g id="Ã¸liv">
              <path d={svgPaths.p9974d80} fill="var(--fill-0, #151515)" />
              <path d={svgPaths.pf0b2e00} fill="var(--fill-0, #151515)" />
              <path d={svgPaths.p29a2f080} fill="var(--fill-0, #151515)" />
              <path d={svgPaths.p13340e00} fill="var(--fill-0, #151515)" />
            </g>
          </svg>
        </div>
      </div>
      <div className="bg-[#f8ede3] content-stretch flex flex-col items-center justify-center px-[12px] py-[6px] relative rounded-[500px] shrink-0" data-name="Label">
        <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#151515] text-[12px] tracking-[0.25px]">We are hiring!</p>
      </div>
    </div>
  );
}

function NavbarMenuItem() {
  return (
    <div className="content-stretch flex gap-[2px] h-[42px] items-center justify-center relative rounded-[6px] shrink-0 w-[37px]" data-name="Navbar Menu Item">
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

function NavbarRight() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Navbar Right">
      <NavbarMenu />
      <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[500px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[rgba(21,21,21,0.6)] border-solid inset-0 pointer-events-none rounded-[500px]" />
        <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#151515] text-[14px] tracking-[1px]">Let’s talk</p>
      </div>
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

function Grid3() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0" data-name="grid">
      <Grid2 />
      <div className="content-stretch flex flex-col items-end pt-[32px] relative shrink-0" data-name="Header">
        <Navbar />
        <div className="bg-[#f3f3f3] h-px shrink-0 w-full" data-name="Border" />
      </div>
    </div>
  );
}

function Grid4() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0" data-name="grid">
      <p className="css-4hzbpn font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[#242424] text-[26px] w-full">Footer</p>
      <div className="bg-[#242424] h-px shrink-0 w-full" data-name="line" />
    </div>
  );
}

function Grid5() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Grid">
      <div className="bg-[#f9f9f9] content-stretch flex flex-col items-center justify-center px-[12px] py-[6px] relative rounded-[500px] shrink-0 size-[36px]" data-name="Badge">
        <div className="overflow-clip relative shrink-0 size-[18px]" data-name="ri:instagram-line">
          <div className="absolute inset-[8.33%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(21, 21, 21, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                <path d={svgPaths.p3dca45c0} fill="var(--fill-0, #151515)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f9f9f9] content-stretch flex flex-col items-center justify-center px-[12px] py-[6px] relative rounded-[500px] shrink-0 size-[36px]" data-name="Badge">
        <div className="overflow-clip relative shrink-0 size-[18px]" data-name="ri:twitter-fill">
          <div className="absolute inset-[15.37%_7.65%_15.57%_7.41%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(21, 21, 21, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.288 12.4301">
                <path d={svgPaths.pdfe8220} fill="var(--fill-0, #151515)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f9f9f9] content-stretch flex flex-col items-center justify-center px-[12px] py-[6px] relative rounded-[500px] shrink-0 size-[36px]" data-name="Badge">
        <div className="overflow-clip relative shrink-0 size-[18px]" data-name="ri:facebook-circle-fill">
          <div className="absolute inset-[8.33%_8.33%_8.84%_8.33%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(21, 21, 21, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 14.9093">
                <path d={svgPaths.p3a9fb480} fill="var(--fill-0, #151515)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[48px] items-start min-h-px min-w-px relative self-stretch" data-name="Column">
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Logo">
        <div className="h-[25px] relative shrink-0 w-[37.5px]" data-name="logo">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.5 25">
            <g clipPath="url(#clip0_7_5964)" id="logo">
              <path d={svgPaths.p24da2800} fill="var(--fill-0, #151515)" id="Vector" />
            </g>
            <defs>
              <clipPath id="clip0_7_5964">
                <rect fill="white" height="25" width="37.5" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="h-[16.5px] relative shrink-0 w-[37.752px]" data-name="øliv">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.7519 16.5">
            <g id="Ã¸liv">
              <path d={svgPaths.p9974d80} fill="var(--fill-0, #151515)" />
              <path d={svgPaths.pf0b2e00} fill="var(--fill-0, #151515)" />
              <path d={svgPaths.p29a2f080} fill="var(--fill-0, #151515)" />
              <path d={svgPaths.p13340e00} fill="var(--fill-0, #151515)" />
            </g>
          </svg>
        </div>
      </div>
      <Grid5 />
    </div>
  );
}

function Grid6() {
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

function Column1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative" data-name="Column">
      <Grid6 />
      <Nav />
      <div className="bg-[#151515] content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[500px] shrink-0" data-name="Button">
        <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[14px] text-white tracking-[1px]">More Templates</p>
      </div>
    </div>
  );
}

function Grid7() {
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
      <Grid7 />
      <Nav1 />
    </div>
  );
}

function Grid8() {
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
      <Grid8 />
      <Nav2 />
    </div>
  );
}

function Grid9() {
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

function Grid10() {
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

function Grid11() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Grid">
      <div className="bg-[#f3f3f3] h-px shrink-0 w-full" data-name="Border" />
      <Grid10 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[1600px]" data-name="Container">
      <Grid9 />
      <Grid11 />
    </div>
  );
}

function Grid12() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0" data-name="grid">
      <Grid4 />
      <div className="content-stretch flex flex-col items-center pb-[48px] relative shrink-0 w-[1816px]" data-name="Footer">
        <Container />
      </div>
    </div>
  );
}

function Grid13() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0" data-name="grid">
      <p className="css-4hzbpn font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[#242424] text-[26px] w-full">CTA</p>
      <div className="bg-[#242424] h-px shrink-0 w-full" data-name="line" />
    </div>
  );
}

function Grid14() {
  return (
    <div className="content-stretch flex flex-col font-['Manrope:Light',sans-serif] font-light gap-[8px] items-start relative shrink-0 text-[#151515]" data-name="Grid">
      <p className="css-4hzbpn leading-[1.2] relative shrink-0 text-[64px] w-[1064px]">{`Let's start building your brand's unique story together.`}</p>
      <p className="css-4hzbpn leading-[1.8] relative shrink-0 text-[24px] w-[600px]">Want to see what a difference a strong brand can make? Request a consultation today.</p>
    </div>
  );
}

function Grid15() {
  return (
    <div className="bg-[#f1f6f5] content-stretch flex flex-[1_0_0] flex-col gap-[48px] items-start min-h-px min-w-px relative" data-name="Grid">
      <Grid14 />
      <div className="bg-[#151515] content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[16px] relative rounded-[500px] shrink-0" data-name="Button">
        <p className="css-ew64yg font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[14px] text-white tracking-[1px]">Get in touch</p>
        <div className="relative shrink-0 size-[14px]" data-name="icon">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <g id="icon">
              <path clipRule="evenodd" d={svgPaths.p2066c200} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#f1f6f5] content-stretch flex gap-[32px] items-start px-[64px] py-[80px] relative shrink-0 w-[1600px]" data-name="Container">
      <p className="css-4hzbpn font-['Manrope:Regular',sans-serif] font-normal leading-[1.4] relative self-stretch shrink-0 text-[#151515] text-[12px] tracking-[1px] uppercase w-[316px]">Contact</p>
      <Grid15 />
    </div>
  );
}

function Grid16() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0" data-name="grid">
      <Grid13 />
      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Section CTA">
        <Container1 />
      </div>
    </div>
  );
}

export default function Components() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[64px] items-start p-[48px] relative size-full" data-name="Components">
      <Grid1 />
      <Grid3 />
      <Grid12 />
      <Grid16 />
    </div>
  );
}